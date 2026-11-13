document.addEventListener('DOMContentLoaded', () => {

    // =========================================================
    // DONNÉES DE BASE
    // =========================================================

    const statsSection = document.querySelector('#statistiques');

    let baseStats = {
        FOR: 1,
        CST: 2,
        DEX: 1,
        INT: 3,
        SAG: -8,
        PER: 2,
        CHA: -3
    };

    if (statsSection?.dataset.baseStats) {
        try {
            baseStats = JSON.parse(statsSection.dataset.baseStats);
        } catch (error) {
            console.warn(
                'Impossible de lire les statistiques de base du Technomancien.',
                error
            );
        }
    }

    let currentStats = { ...baseStats };
    let selectedOrigin = null;

    const statLabels = [
        'FOR',
        'CST',
        'DEX',
        'INT',
        'SAG',
        'PER',
        'CHA'
    ];


    // =========================================================
    // RADAR TECHNO-ARCANE
    // =========================================================

    const canvas = document.getElementById('statsChart');
    const fallback = document.getElementById('chart-fallback');

    let statsChart = null;

    // Décalage nécessaire pour afficher les valeurs négatives
    function transformStats(stats) {
        return statLabels.map(stat => stats[stat] + 10);
    }


    function createChart() {

        if (!canvas || typeof Chart === 'undefined') {
            if (canvas) canvas.hidden = true;

            if (fallback) {
                fallback.hidden = false;
            }

            return;
        }

        const ctx = canvas.getContext('2d');


        statsChart = new Chart(ctx, {

            type: 'radar',

            data: {

                labels: statLabels,

                datasets: [
                    {
                        label: 'Signature Bio-Techno',

                        data: transformStats(currentStats),

                        backgroundColor: 'rgba(0, 220, 255, 0.13)',

                        borderColor: 'rgba(75, 235, 255, 0.95)',

                        borderWidth: 2.5,

                        pointBackgroundColor: '#dfffff',

                        pointBorderColor: '#00c7e8',

                        pointBorderWidth: 2,

                        pointRadius: 5,

                        pointHoverRadius: 8,

                        pointHoverBackgroundColor: '#ffffff',

                        pointHoverBorderColor: '#8d5cff'
                    }
                ]
            },


            options: {

                responsive: true,

                maintainAspectRatio: false,

                animation: {

                    duration: 850,

                    easing: 'easeInOutQuart'
                },


                scales: {

                    r: {

                        min: 0,

                        max: 18,

                        ticks: {

                            stepSize: 3,

                            callback(value) {
                                return value - 10;
                            },

                            color: '#8ceeff',

                            backdropColor: 'rgba(3, 10, 18, 0.8)',

                            font: {
                                size: 10,
                                weight: 'bold'
                            }
                        },


                        grid: {

                            color: 'rgba(0, 220, 255, 0.22)',

                            circular: true
                        },


                        angleLines: {

                            color: 'rgba(135, 92, 255, 0.22)'
                        },


                        pointLabels: {

                            color: '#9ff5ff',

                            font: {

                                size: 14,

                                weight: 'bold',

                                family: "'Orbitron', sans-serif"
                            }
                        }
                    }
                },


                plugins: {

                    legend: {
                        display: false
                    },


                    tooltip: {

                        backgroundColor: 'rgba(3, 10, 18, 0.96)',

                        titleColor: '#86f6ff',

                        bodyColor: '#ffffff',

                        borderColor: 'rgba(0, 220, 255, 0.6)',

                        borderWidth: 1,

                        callbacks: {

                            label(context) {

                                const value =
                                    context.parsed.r - 10;

                                return `${context.label} : ${
                                    value >= 0 ? '+' : ''
                                }${value}`;
                            }
                        }
                    }
                }
            }
        });
    }


    createChart();


    // =========================================================
    // CALCUL DES STATS SELON L'ORIGINE
    // =========================================================

    function calculateOriginStats(originCard) {

        const stats = { ...baseStats };

        if (!originCard) {
            return stats;
        }


        try {

            const bonuses = JSON.parse(
                originCard.dataset.bonuses || '{}'
            );


            Object.entries(bonuses).forEach(
                ([stat, value]) => {

                    if (stats[stat] !== undefined) {

                        stats[stat] += Number(value);
                    }
                }
            );


        } catch (error) {

            console.warn(
                'Bonus d’origine invalide.',
                error
            );
        }


        return stats;
    }


    // =========================================================
    // AFFICHAGE DES STATS
    // =========================================================

    function updateStatBoxes(stats) {

        document
            .querySelectorAll('[data-stat]')
            .forEach(element => {

                const stat =
                    element.dataset.stat;

                const value =
                    stats[stat];


                if (value === undefined) {
                    return;
                }


                element.textContent =
                    `${stat} : ${
                        value > 0 ? '+' : ''
                    }${value}`;


                element.classList.remove(
                    'positive',
                    'negative',
                    'neutral',
                    'stat-flash'
                );


                if (value > 0) {

                    element.classList.add('positive');

                } else if (value < 0) {

                    element.classList.add('negative');

                } else {

                    element.classList.add('neutral');
                }


                void element.offsetWidth;

                element.classList.add(
                    'stat-flash'
                );
            });
    }


    function updateChart(stats) {

        if (!statsChart) {
            return;
        }

        statsChart.data.datasets[0].data =
            transformStats(stats);

        statsChart.update();
    }


    function updateStats(stats) {

        currentStats = stats;

        updateStatBoxes(stats);

        updateChart(stats);
    }


    // =========================================================
    // ORIGINES
    // =========================================================

    const originCards =
        document.querySelectorAll('.origin-card');

    const currentOriginDisplay =
        document.getElementById(
            'current-origin-display'
        );


    function clearOriginSelection() {

        originCards.forEach(card => {

            card.classList.remove(
                'selected',
                'config-loading'
            );


            const button =
                card.querySelector(
                    '[data-select-origin]'
                );


            if (button) {

                button.setAttribute(
                    'aria-pressed',
                    'false'
                );

                button.textContent =
                    'CHARGER CONFIGURATION';
            }
        });
    }


    function selectOrigin(card) {

        if (!card) {
            selectedOrigin = null;
            clearOriginSelection();
            updateStats({ ...baseStats });
            if (currentOriginDisplay) currentOriginDisplay.textContent = 'Configuration de base';
            return;
        }


        clearOriginSelection();


        selectedOrigin = card;


        card.classList.add('selected');


        const button =
            card.querySelector(
                '[data-select-origin]'
            );


        if (button) {

            button.setAttribute(
                'aria-pressed',
                'true'
            );

            button.textContent =
                'CONFIGURATION ACTIVE';
        }


        const originName =
            card.dataset.originName ||
            card.querySelector('h3')?.textContent ||
            'Configuration';


        if (currentOriginDisplay) {

            currentOriginDisplay.innerHTML = `
                <span class="selection-prefix">
                    CONFIG ACTIVE //
                </span>
                <strong>${originName}</strong>
            `;
        }


        const stats =
            calculateOriginStats(card);


        updateStats(stats);


        triggerConfigurationLoad(card);
    }


    originCards.forEach(card => {

        const button =
            card.querySelector(
                '[data-select-origin]'
            );


        if (!button) {
            return;
        }


        button.addEventListener(
            'click',
            event => {

                event.stopPropagation();

                selectOrigin(selectedOrigin === card ? null : card);
            }
        );
    });


    // =========================================================
    // RESET ORIGINE
    // =========================================================

    const resetButton =
        document.querySelector(
            '[data-reset-origin]'
        );


    if (resetButton) {

        resetButton.addEventListener(
            'click',
            () => {

                selectedOrigin = null;

                clearOriginSelection();

                updateStats({
                    ...baseStats
                });


                if (currentOriginDisplay) {

                    currentOriginDisplay.innerHTML = `
                        <span class="selection-prefix">
                            SYSTEM //
                        </span>
                        <strong>
                            Configuration de base
                        </strong>
                    `;
                }


                triggerSystemPulse(
                    resetButton
                );
            }
        );
    }


    // =========================================================
    // ANIMATION CHARGEMENT CONFIG
    // =========================================================

    function triggerConfigurationLoad(card) {

        card.classList.remove(
            'config-loading'
        );

        void card.offsetWidth;

        card.classList.add(
            'config-loading'
        );


        createDataPulse(card);


        setTimeout(() => {

            card.classList.remove(
                'config-loading'
            );

        }, 1000);
    }


    function createDataPulse(element) {

        const pulse =
            document.createElement('span');

        pulse.className =
            'config-data-pulse';


        element.appendChild(pulse);


        requestAnimationFrame(() => {

            pulse.classList.add('active');
        });


        setTimeout(() => {

            pulse.remove();

        }, 1100);
    }


    function triggerSystemPulse(element) {

        element.classList.remove(
            'system-pulse'
        );

        void element.offsetWidth;

        element.classList.add(
            'system-pulse'
        );


        setTimeout(() => {

            element.classList.remove(
                'system-pulse'
            );

        }, 700);
    }


    // =========================================================
    // PARTICULES ÉNERGÉTIQUES
    // =========================================================

    function createEnergyParticles() {

        let layer =
            document.getElementById(
                'energy-particles'
            );


        if (!layer) {

            layer =
                document.createElement('div');

            layer.id =
                'energy-particles';

            layer.className =
                'energy-particles';

            document.body.appendChild(layer);
        }


        layer.setAttribute(
            'aria-hidden',
            'true'
        );


        const particleCount =
            window.innerWidth < 768
                ? 22
                : 42;


        for (
            let i = 0;
            i < particleCount;
            i++
        ) {

            const particle =
                document.createElement('span');


            particle.className =
                'energy-particle';


            const size =
                1 + Math.random() * 4;


            const left =
                Math.random() * 100;


            const duration =
                7 + Math.random() * 15;


            const delay =
                -(Math.random() * duration);


            const drift =
                -70 + Math.random() * 140;


            particle.style.width =
                `${size}px`;

            particle.style.height =
                `${size}px`;

            particle.style.left =
                `${left}%`;


            particle.style.setProperty(
                '--particle-duration',
                `${duration}s`
            );


            particle.style.setProperty(
                '--particle-delay',
                `${delay}s`
            );


            particle.style.setProperty(
                '--particle-drift',
                `${drift}px`
            );


            layer.appendChild(
                particle
            );
        }
    }


    createEnergyParticles();


    // =========================================================
    // LIGNES DE DONNÉES ALÉATOIRES
    // =========================================================

    function createDataStreams() {

        const background =
            document.querySelector(
                '.tech-background'
            );


        if (!background) {
            return;
        }


        const streamLayer =
            document.createElement('div');


        streamLayer.className =
            'data-stream-layer';

        streamLayer.setAttribute(
            'aria-hidden',
            'true'
        );


        const count =
            window.innerWidth < 768
                ? 6
                : 12;


        for (
            let i = 0;
            i < count;
            i++
        ) {

            const line =
                document.createElement('span');


            line.className =
                'data-stream';


            line.style.left =
                `${Math.random() * 100}%`;


            line.style.setProperty(
                '--stream-delay',
                `${-(Math.random() * 10)}s`
            );


            line.style.setProperty(
                '--stream-duration',
                `${6 + Math.random() * 9}s`
            );


            streamLayer.appendChild(
                line
            );
        }


        background.appendChild(
            streamLayer
        );
    }


    createDataStreams();


    // =========================================================
    // APPARITION AU SCROLL
    // =========================================================

    const revealElements = document.querySelectorAll('.reveal-section');


    if ('IntersectionObserver' in window) {

        const revealObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (!entry.isIntersecting) {
                            return;
                        }


                        entry.target.classList.add(
                            'is-visible'
                        );
                        entry.target.classList.remove('reveal-pending');


                        revealObserver.unobserve(
                            entry.target
                        );
                    });
                },
                {
                    threshold: 0,
                    rootMargin:
                        '0px'
                }
            );


        revealElements.forEach(
            element => {

                element.classList.add('reveal-pending');
                revealObserver.observe(
                    element
                );
            }
        );

    } else {

        revealElements.forEach(
            element => {

                element.classList.add(
                    'is-visible'
                );
            }
        );
    }


    // =========================================================
    // NAVIGATION ACTIVE
    // =========================================================

    const navLinks =
        document.querySelectorAll(
            '.class-nav a'
        );


    const sectionMap = [];


    navLinks.forEach(link => {

        const href =
            link.getAttribute('href');


        if (!href?.startsWith('#')) {
            return;
        }


        const section =
            document.querySelector(href);


        if (!section) {
            return;
        }


        sectionMap.push({
            section,
            link
        });
    });


    if ('IntersectionObserver' in window) {

        const navObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (!entry.isIntersecting) {
                            return;
                        }


                        navLinks.forEach(
                            link => {

                                link.classList.remove(
                                    'active'
                                );
                            }
                        );


                        const match =
                            sectionMap.find(
                                item =>
                                    item.section ===
                                    entry.target
                            );


                        match?.link.classList.add(
                            'active'
                        );
                    });
                },
                {
                    rootMargin:
                        '-35% 0px -55% 0px',
                    threshold: 0
                }
            );


        sectionMap.forEach(
            ({ section }) => {

                navObserver.observe(
                    section
                );
            }
        );
    }


    // =========================================================
    // SCROLL DOUX
    // =========================================================

    navLinks.forEach(link => {

        link.addEventListener(
            'click',
            event => {

                const href =
                    link.getAttribute('href');


                if (!href?.startsWith('#')) {
                    return;
                }


                const target =
                    document.querySelector(href);


                if (!target) {
                    return;
                }


                event.preventDefault();


                const navHeight = document.querySelector('.class-nav')?.offsetHeight || 0;
                window.scrollTo({
                    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
                    top: window.scrollY + target.getBoundingClientRect().top - navHeight - 20
                });
            }
        );
    });


    // =========================================================
    // EFFET 3D SUR L'ILLUSTRATION
    // =========================================================

    const heroPanel =
        document.querySelector(
            '.hero-image-panel'
        );


    if (
        heroPanel &&
        window.matchMedia(
            '(pointer:fine)'
        ).matches
    ) {

        heroPanel.addEventListener(
            'mousemove',
            event => {

                const rect =
                    heroPanel.getBoundingClientRect();


                const x =
                    (
                        event.clientX -
                        rect.left
                    ) /
                    rect.width -
                    0.5;


                const y =
                    (
                        event.clientY -
                        rect.top
                    ) /
                    rect.height -
                    0.5;


                heroPanel.style.transform = `
                    perspective(1000px)
                    rotateX(${y * -4}deg)
                    rotateY(${x * 5}deg)
                    translateY(-3px)
                `;
            }
        );


        heroPanel.addEventListener(
            'mouseleave',
            () => {

                heroPanel.style.transform =
                    '';
            }
        );
    }


    // =========================================================
    // CIRCUITS NOVA INTERACTIFS
    // =========================================================

    const circuitCards =
        document.querySelectorAll(
            '.circuit-card'
        );


    const circuitButtons =
        document.querySelectorAll(
            '[data-circuit-button]'
        );


    let availableImpulses = 2;
    const circuitTimers = new WeakMap();

    const impulseIndicators =
        document.querySelectorAll(
            '.impulse-counter .impulse'
        );


    function updateImpulseDisplay() {

        impulseIndicators.forEach(
            (impulse, index) => {

                if (
                    index < availableImpulses
                ) {

                    impulse.classList.add(
                        'active'
                    );

                } else {

                    impulse.classList.remove(
                        'active'
                    );
                }
            }
        );
    }


    circuitButtons.forEach(button => {

        button.addEventListener(
            'click',
            () => {

                const card =
                    button.closest(
                        '.circuit-card'
                    );


                if (!card) {
                    return;
                }

                clearTimeout(circuitTimers.get(card));
                card.classList.remove('circuit-powered', 'circuit-denied');


                if (
                    availableImpulses <= 0
                ) {

                    button.textContent =
                        'AUCUNE IMPULSION';

                    card.classList.add(
                        'circuit-denied'
                    );


                    circuitTimers.set(card, setTimeout(() => {

                        button.textContent =
                            'ROUTER IMPULSION';

                        card.classList.remove(
                            'circuit-denied'
                        );

                    }, 800));


                    return;
                }


                availableImpulses--;


                updateImpulseDisplay();


                card.classList.add(
                    'circuit-powered'
                );


                createCircuitSpark(card);


                button.textContent =
                    'IMPULSION ROUTÉE';


                circuitTimers.set(card, setTimeout(() => {

                    card.classList.remove(
                        'circuit-powered'
                    );

                    button.textContent =
                        'ROUTER IMPULSION';

                }, 1200));
            }
        );
    });


    function createCircuitSpark(card) {

        const spark =
            document.createElement('span');


        spark.className =
            'circuit-spark';


        card.appendChild(spark);


        setTimeout(() => {

            spark.remove();

        }, 900);
    }


    // =========================================================
    // RESET DES IMPULSIONS
    // CLIC OU CLAVIER SUR LE NOYAU NOVA
    // =========================================================

    const exoCore =
        document.querySelector(
            '.exo-core'
        );


    if (exoCore) {

        exoCore.addEventListener(
            'click',
            () => {

                availableImpulses = 2;

                updateImpulseDisplay();


                circuitCards.forEach(card => {

                    clearTimeout(circuitTimers.get(card));
                    const button = card.querySelector('[data-circuit-button]');
                    if (button) button.textContent = 'ROUTER IMPULSION';

                    card.classList.remove(
                        'circuit-powered',
                        'circuit-denied'
                    );
                });


                exoCore.classList.add(
                    'core-reboot'
                );


                setTimeout(() => {

                    exoCore.classList.remove(
                        'core-reboot'
                    );

                }, 900);
            }
        );
        exoCore.addEventListener('keydown', event => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                exoCore.click();
            }
        });
    }


    // =========================================================
    // BATTERIE ARCANE — EFFET VISUEL
    // =========================================================

    const batteryModule =
        document.querySelector(
            '.battery-module'
        );


    if (batteryModule) {

        batteryModule.addEventListener(
            'mouseenter',
            () => {

                batteryModule.classList.add(
                    'battery-active'
                );
            }
        );


        batteryModule.addEventListener(
            'mouseleave',
            () => {

                batteryModule.classList.remove(
                    'battery-active'
                );
            }
        );
    }


    // =========================================================
    // SURCHARGE VISUELLE DU TALENT
    // =========================================================

    const overloadCard =
        document.querySelector(
            '.overload-card'
        );


    if (overloadCard) {

        overloadCard.addEventListener(
            'click',
            () => {

                overloadCard.classList.remove(
                    'overload-triggered'
                );

                void overloadCard.offsetWidth;

                overloadCard.classList.add(
                    'overload-triggered'
                );


                setTimeout(() => {

                    overloadCard.classList.remove(
                        'overload-triggered'
                    );

                }, 1200);
            }
        );
    }

    

    // =========================================================
    // SCAN DU HERO
    // =========================================================

    const exoFrame =
        document.querySelector(
            '.exo-frame'
        );


    if (exoFrame) {

        setInterval(() => {

            exoFrame.classList.add(
                'system-scan'
            );


            setTimeout(() => {

                exoFrame.classList.remove(
                    'system-scan'
                );

            }, 1300);

        }, 7000);
    }


    // =========================================================
    // ACCESSIBILITÉ
    // =========================================================

    const reducedMotion =
        window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        );


    function updateMotionPreference(
        matches
    ) {

        document.documentElement
            .classList.toggle(
                'reduced-motion',
                matches
            );
    }


    updateMotionPreference(
        reducedMotion.matches
    );


    reducedMotion.addEventListener?.(
        'change',
        event => {

            updateMotionPreference(
                event.matches
            );
        }
    );


    // =========================================================
    // ÉTAT INITIAL
    // =========================================================

    updateStatBoxes(baseStats);

    updateImpulseDisplay();

});
