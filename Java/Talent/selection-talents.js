window.TalentSelection = (() => {
    'use strict';

    function create({ talents, render }) {
        const ids = new Map(talents.map((talent, index) => [talent, index]));
        const selected = new Map();
        let enabled = false;
        let controls;

        function updateSummary() {
            controls.section.hidden = !enabled;
            controls.grid.replaceChildren();
            let total = 0;

            selected.forEach((talent, id) => {
                total += Number(talent.cout);
                const card = document.createElement('article');
                card.className = 'selected-talent-card';
                const title = document.createElement('h3');
                title.textContent = talent.nom;
                card.appendChild(title);

                if (talent.condition) {
                    const condition = document.createElement('p');
                    condition.className = 'selected-talent-condition';
                    condition.textContent = `Condition : ${talent.condition}`;
                    card.appendChild(condition);
                }

                const effect = document.createElement('p');
                effect.textContent = talent.effet;
                card.appendChild(effect);

                const footer = document.createElement('div');
                footer.className = 'selected-talent-footer';
                const cost = document.createElement('strong');
                cost.textContent = `${talent.cout} point${Number(talent.cout) > 1 ? 's' : ''}`;
                const remove = document.createElement('button');
                remove.type = 'button';
                remove.textContent = 'Retirer';
                remove.setAttribute('aria-label', `Retirer ${talent.nom}`);
                remove.addEventListener('click', () => {
                    selected.delete(id);
                    refresh();
                    (controls.grid.querySelector('button') || controls.toggle).focus({ preventScroll: true });
                });
                footer.append(cost, remove);
                card.appendChild(footer);
                controls.grid.appendChild(card);
            });

            controls.count.textContent = selected.size;
            controls.total.textContent = total;
            controls.empty.hidden = selected.size !== 0;
            controls.reset.disabled = selected.size === 0;
        }

        function refresh(focusId) {
            updateSummary();
            render();
            if (focusId !== undefined) {
                document.querySelector(`[data-talent-index="${focusId}"] .talent-pick`)?.focus({ preventScroll: true });
            }
        }

        function toggle(talent, focusId) {
            if (!enabled) return;
            const id = ids.get(talent);
            if (selected.has(id)) selected.delete(id);
            else selected.set(id, talent);
            refresh(focusId);
        }

        function bindRow(row, talent) {
            const id = ids.get(talent);
            row.dataset.talentIndex = id;
            row.classList.toggle('selected', selected.has(id));
            if (!enabled) return;
            row.classList.add('selectable');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'talent-pick';
            checkbox.checked = selected.has(id);
            checkbox.setAttribute('aria-label', `Sélectionner ${talent.nom}`);
            checkbox.addEventListener('change', () => toggle(talent, id));
            row.cells[0].prepend(checkbox);
            row.addEventListener('click', event => {
                if (!event.target.closest('input,button,a,label')) toggle(talent);
            });
        }

        function init() {
            controls = {
                toggle: document.getElementById('selectionModeToggle'),
                reset: document.getElementById('resetSelection'),
                section: document.getElementById('selectedSection'),
                grid: document.getElementById('selectedGrid'),
                count: document.getElementById('selectedCount'),
                total: document.getElementById('selectedTotal'),
                empty: document.getElementById('emptySelection')
            };
            enabled = controls.toggle.checked;
            controls.toggle.addEventListener('change', () => {
                enabled = controls.toggle.checked;
                refresh();
            });
            controls.reset.addEventListener('click', () => {
                selected.clear();
                refresh();
                controls.toggle.focus({ preventScroll: true });
            });
            updateSummary();
        }

        return { init, bindRow };
    }

    return { create };
})();
