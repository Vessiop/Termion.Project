const { test, expect } = require('@playwright/test');
const fs = require('node:fs');
const path = require('node:path');

const talentURL = '/HTML/Talent/Différent Talent/Talent Non-evolutif.html';
const backgrounds = {
    windress: 'rgb(232, 244, 248)',
    pylorianne: 'rgb(255, 232, 214)',
    arzass: 'rgb(26, 22, 37)',
    markarane: 'rgb(212, 161, 84)'
};
const canvasIDs = { windress: 'snowflake-canvas', pylorianne: 'volcanic-canvas', arzass: 'star-canvas', markarane: 'sandstorm-canvas' };

test.beforeEach(async ({ page }) => {
    // Les polices distantes ne font pas partie du comportement testé.
    await page.route(/https:\/\/fonts\.(googleapis|gstatic)\.com\//, route => route.abort());
    await page.route('https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.js', route => route.fulfill({
        path: path.join(path.dirname(require.resolve('chart.js')), 'chart.umd.js'),
        contentType: 'text/javascript'
    }));
});

test('le thème et sa météo suivent les liens puis résistent au rechargement', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Windress', exact: true }).click();
    await page.locator('a.nav-item').filter({ hasText: 'Talent' }).click();
    await expect(page.locator('body')).toHaveCSS('background-color', backgrounds.windress);
    await expect(page.locator('#snowflake-canvas')).toBeVisible();
    await page.getByRole('link', { name: /Talent Non Évolutif/ }).click();
    await page.reload();
    await expect(page.locator('body')).toHaveCSS('background-color', backgrounds.windress);
    await expect(page.locator('#snowflake-canvas')).toBeVisible();
    await page.locator('#searchInput').fill('Vivacité');
    await expect(page.locator('#talentsBody tr')).toHaveCount(1);
    await page.getByText('Activer le mode sélection', { exact: true }).click();
    await page.locator('#talentsBody tr').click();
    await expect(page.locator('#selectedCount')).toHaveText('1');
    await expect(page.locator('#selectedTotal')).toHaveText('1');
});

for (const theme of ['base', ...Object.keys(backgrounds)]) {
    test(`${theme} : changement, navigation, retour et animations uniques`, async ({ page }) => {
        await page.goto('/');
        for (const name of ['windress', 'pylorianne', 'arzass', 'markarane', theme, theme]) {
            await page.locator(`[data-theme="${name}"]`).click();
        }
        await expect(page.locator(`[data-theme="${theme}"]`)).toHaveAttribute('aria-pressed', 'true');
        await expect.poll(() => page.evaluate(() => localStorage.getItem('termion-theme'))).toBe(theme);
        await page.locator('a.nav-item').filter({ hasText: 'Classe' }).click();
        if (theme !== 'base') {
            await expect(page.locator('body')).toHaveCSS('background-color', backgrounds[theme]);
            await expect(page.locator(`#${canvasIDs[theme]}`)).toBeVisible();
        }
        await page.goBack();
        await expect(page.locator(`[data-theme="${theme}"]`)).toHaveClass(/active/);
        await expect(page.locator('#termion-weather canvas:visible')).toHaveCount(theme === 'base' ? 0 : 1);
        expect(await page.locator('#termion-weather').count()).toBeLessThanOrEqual(1);
    });
}

test('le thème est présent avant que le moteur météo soit chargé', async ({ page }) => {
    await page.addInitScript(() => localStorage.setItem('termion-theme', 'arzass'));
    await page.route('**/Index.JS', route => route.abort());
    await page.goto(talentURL);
    await expect(page.locator('body')).toHaveCSS('background-color', backgrounds.arzass);
    await expect(page.locator('html')).toHaveAttribute('data-termion-theme', 'arzass');
});

test('le thème mémorisé marque le bon onglet avant le démarrage des animations', async ({ page }) => {
    await page.addInitScript(() => localStorage.setItem('termion-theme', 'windress'));
    await page.route('**/Index.JS', route => route.abort());
    await page.goto('/');
    await expect(page.locator('[data-theme="windress"]')).toHaveCSS('background-color', 'rgb(45, 74, 94)');
    await expect(page.locator('[data-theme="base"]')).toHaveCSS('background-color', 'rgba(255, 255, 255, 0.6)');
});

test('un stockage refusé ne casse ni les thèmes ni les interactions', async ({ page }) => {
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.addInitScript(() => {
        Object.defineProperty(window, 'localStorage', { get() { throw new DOMException('Denied', 'SecurityError'); } });
    });
    await page.goto('/');
    await page.getByRole('button', { name: 'Windress', exact: true }).click();
    await expect(page.locator('#snowflake-canvas')).toBeVisible();
    await expect(page.locator('body')).toHaveCSS('background-color', backgrounds.windress);
    expect(errors).toEqual([]);
});

test('une valeur sauvegardée invalide revient au thème Base', async ({ page }) => {
    await page.addInitScript(() => localStorage.setItem('termion-theme', 'not-a-theme'));
    await page.goto('/');
    await expect(page.locator('[data-theme="base"]')).toHaveClass(/active/);
    await expect(page.locator('#termion-weather canvas:visible')).toHaveCount(0);
});

test('chaque page restaure le thème et charge un seul effet', async ({ page }) => {
    test.setTimeout(120000);
    const root = path.resolve(__dirname, '..');
    const pages = ['index.html', ...fs.readdirSync(path.join(root, 'HTML'), { recursive: true })
        .filter(file => /\.html?$/i.test(file)).map(file => 'HTML/' + file.replaceAll('\\', '/'))];
    const errors = [];
    page.on('pageerror', error => errors.push({ url: page.url(), message: error.message }));
    await page.addInitScript(() => localStorage.setItem('termion-theme', 'windress'));
    for (const url of pages) {
        await page.goto('/' + url);
        await expect(page.locator('body'), url).toHaveCSS('background-color', backgrounds.windress);
        await expect(page.locator('#snowflake-canvas'), url).toBeVisible();
        await expect(page.locator('#termion-weather'), url).toHaveCount(1);
        await expect(page.locator('#termion-weather canvas'), url).toHaveCount(1);
    }
    expect(errors).toEqual([]);
});

test('les cinq thèmes fonctionnent dans chaque famille de pages', async ({ page }, testInfo) => {
    test.setTimeout(90000);
    const urls = [
        talentURL,
        '/HTML/HTML classe/Classe classique/Guerrier.html',
        '/HTML/Race/Race de base/Drakarien.html',
        '/HTML/Metier/Catalogue metier.html',
        '/HTML/Faction/Catalogue Faction.htm',
        "/HTML/Boutique d'equipement/Categorie d'equipement.html"
    ];
    await page.goto('/');
    for (const theme of ['base', ...Object.keys(backgrounds)]) {
        await page.evaluate(name => localStorage.setItem('termion-theme', name), theme);
        for (const url of urls) {
            await page.goto(url);
            await expect(page.locator('html')).toHaveAttribute('data-termion-theme', theme);
            await expect(page.locator('#termion-weather canvas:visible')).toHaveCount(theme === 'base' ? 0 : 1);
            if (theme !== 'base') await expect(page.locator('body')).toHaveCSS('background-color', backgrounds[theme]);
        }
    }
    // Captures pour le contrôle visuel des palettes claires/sombres et du mobile.
    for (const [theme, url, name] of [
        ['windress', talentURL, 'talents-windress'],
        ['arzass', '/HTML/HTML classe/Classe classique/Guerrier.html', 'guerrier-arzass'],
        ['pylorianne', '/HTML/Race/Race de base/Drakarien.html', 'drakarien-pylorianne'],
        ['markarane', '/', 'accueil-markarane'],
        ['arzass', '/', 'accueil-arzass']
    ]) {
        await page.evaluate(value => localStorage.setItem('termion-theme', value), theme);
        await page.goto(url);
        await expect(page.locator('#termion-weather canvas:visible')).toHaveCount(1);
        if (url === '/') await expect(page.locator(`[data-theme="${theme}"]`)).toHaveAttribute('aria-pressed', 'true');
        await page.screenshot({ path: testInfo.outputPath(name + '.png'), animations: 'disabled' });
    }
});

test('un second chargement du moteur ne double pas la météo et les cycles arrêtent les anciennes animations', async ({ page }) => {
    await page.addInitScript(() => {
        const schedule = window.requestAnimationFrame.bind(window);
        const cancel = window.cancelAnimationFrame.bind(window);
        window.pendingThemeFrames = new Set();
        window.requestAnimationFrame = callback => {
            const id = schedule(time => { window.pendingThemeFrames.delete(id); callback(time); });
            window.pendingThemeFrames.add(id);
            return id;
        };
        window.cancelAnimationFrame = id => { window.pendingThemeFrames.delete(id); cancel(id); };
    });
    await page.goto('/');
    await expect(page.locator('html')).toHaveAttribute('data-termion-ready', 'true');
    for (const theme of ['windress', 'windress', 'pylorianne', 'arzass', 'markarane', 'windress']) {
        await page.locator(`[data-theme="${theme}"]`).click();
        await expect.poll(() => page.evaluate(() => window.pendingThemeFrames.size)).toBe(1);
    }
    await page.addScriptTag({ url: '/Index.JS' });
    await expect(page.locator('#termion-weather canvas:visible')).toHaveCount(1);
    expect(await page.evaluate(() => window.pendingThemeFrames.size)).toBe(1);
    await page.evaluate(() => window.dispatchEvent(new PageTransitionEvent('pagehide')));
    expect(await page.evaluate(() => window.pendingThemeFrames.size)).toBe(0);
    await page.evaluate(() => window.dispatchEvent(new PageTransitionEvent('pageshow', { persisted: true })));
    await expect.poll(() => page.evaluate(() => window.pendingThemeFrames.size)).toBe(1);
    await page.locator('[data-theme="base"]').click();
    expect(await page.evaluate(() => window.pendingThemeFrames.size)).toBe(0);
});

test('les changements se propagent aux autres onglets', async ({ page, context }) => {
    await page.goto('/');
    const other = await context.newPage();
    await other.route(/https:\/\/fonts\.(googleapis|gstatic)\.com\//, route => route.abort());
    await other.goto(talentURL);
    await page.locator('[data-theme="windress"]').click();
    await expect(other.locator('body')).toHaveCSS('background-color', backgrounds.windress);
    await expect(other.locator('#snowflake-canvas')).toBeVisible();
    await page.locator('[data-theme="arzass"]').click();
    await expect(other.locator('#star-canvas')).toBeVisible();
    await expect(other.locator('#snowflake-canvas')).toBeHidden();
    await other.close();
});

test('les mouvements réduits gardent le décor sans animation continue', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');
    await page.locator('[data-theme="markarane"]').click();
    await expect(page.locator('#sandstorm-canvas')).toBeVisible();
    expect(await page.evaluate(() => window.sandstormSystem.animationId)).toBeNull();
    await page.emulateMedia({ reducedMotion: 'no-preference' });
    await expect.poll(() => page.evaluate(() => window.sandstormSystem.animationId !== null)).toBe(true);
});

test('les effets suivent le redimensionnement sans recouvrir les contrôles', async ({ page }) => {
    await page.goto('/');
    await page.locator('[data-theme="markarane"]').click();
    await page.setViewportSize({ width: 390, height: 844 });
    await expect.poll(() => page.evaluate(() => ({
        width: window.sandstormSystem.canvas.width,
        height: window.sandstormSystem.canvas.height,
        waveWidth: window.sandstormSystem.sandWaves[0].width
    }))).toEqual({ width: 390, height: 844, waveWidth: 390 });
    await page.setViewportSize({ width: 1280, height: 720 });
    await expect.poll(() => page.evaluate(() => window.sandstormSystem.sandWaves[0].width)).toBe(1280);
    await page.locator('[data-theme="windress"]').click();
    await expect(page.locator('#snowflake-canvas')).toBeVisible();
    await expect(page.locator('#sandstorm-canvas')).toBeHidden();
});

test('les cartes Arzass gardent un contraste lisible', async ({ page }) => {
    await page.goto('/');
    await page.locator('[data-theme="arzass"]').click();
    // Attend la fin de la transition du thème, puis mesure le contraste réel
    // du libellé contre les deux extrémités du dégradé de sa carte.
    await expect(page.locator('html')).toHaveAttribute('data-termion-theme', 'arzass');
    const contrasts = await page.locator('.nav-item').first().evaluate(card => {
        const luminance = rgb => {
            const parts = rgb.match(/[\d.]+/g).slice(0, 3).map(Number).map(n => {
                n /= 255;
                return n <= 0.04045 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4;
            });
            return parts[0] * 0.2126 + parts[1] * 0.7152 + parts[2] * 0.0722;
        };
        const text = luminance(getComputedStyle(card.querySelector('.nav-text')).color);
        return getComputedStyle(card).backgroundImage.match(/rgba?\([^)]+\)/g).map(color => {
            const background = luminance(color);
            return (Math.max(text, background) + 0.05) / (Math.min(text, background) + 0.05);
        });
    });
    expect(Math.min(...contrasts)).toBeGreaterThanOrEqual(4.5);
});

for (const theme of ['windress', 'pylorianne', 'arzass']) {
    test(`${theme} : le décor reste dessiné après rotation avec mouvements réduits`, async ({ page }) => {
        await page.emulateMedia({ reducedMotion: 'reduce' });
        await page.goto('/');
        await page.locator(`[data-theme="${theme}"]`).click();
        await page.setViewportSize({ width: 844, height: 390 });
        await expect.poll(() => page.locator(`#${canvasIDs[theme]}`).evaluate(canvas => {
            if (canvas.width !== 844 || canvas.height !== 390) return false;
            return canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height).data
                .some((value, index) => index % 4 !== 3 && value > 0);
        })).toBe(true);
    });
}
