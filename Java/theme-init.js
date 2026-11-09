// Script synchrone à charger avant les feuilles de style : aucun thème Base intermédiaire.
(() => {
    'use strict';
    if (window.TermionTheme) return;

    const names = ['base', 'windress', 'pylorianne', 'arzass', 'markarane'];
    const backgrounds = {
        windress: '#e8f4f8', pylorianne: '#ffe8d6',
        arzass: '#1a1625', markarane: '#d4a154'
    };
    const root = document.documentElement;
    const normalize = name => names.includes(name) ? name : 'base';

    function read(fallback = 'base') {
        try {
            return normalize(window.localStorage.getItem('termion-theme'));
        } catch {
            return normalize(fallback);
        }
    }

    function apply(name) {
        name = normalize(name);
        root.dataset.termionTheme = name;
        // Colore aussi la fenêtre pendant le téléchargement des styles.
        root.style.backgroundColor = backgrounds[name] || '';
        return name;
    }

    window.TermionTheme = {
        names: Object.freeze(names), normalize, read, apply,
        get current() { return root.dataset.termionTheme; }
    };
    apply(read());
})();
