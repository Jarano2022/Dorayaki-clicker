// 1. Estado centralizado
let state = {
    clickCount: 0,
    pointsPerClick: 1,
    pointsPerSecond: 0
};

// 2. Configuración de mejoras (Fácil de ampliar)
const upgrades = {
    click: [
        { id: 1, baseCost: 15, power: 1 },
        { id: 2, baseCost: 100, power: 5 },
        { id: 3, baseCost: 250, power: 10 },
        { id: 4, baseCost: 500, power: 15 },
        { id: 5, baseCost: 1000, power: 25 },
        { id: 6, baseCost: 2500, power: 40 },
        { id: 7, baseCost: 5000, power: 55 },
        { id: 8, baseCost: 10000, power: 125 },
    ],
    auto: [
        { id: 1, baseCost: 100, power: 10 },
        { id: 2, baseCost: 250, power: 20 },
        { id: 3, baseCost: 500, power: 30 },
        { id: 4, baseCost: 1000, power: 40 },
        { id: 5, baseCost: 2500, power: 10 },
        { id: 6, baseCost: 5000, power: 10 },
        { id: 7, baseCost: 10000, power: 10 },
        { id: 8, baseCost: 25000, power: 10 },
    ]
};

// Inicializamos contadores y costos dinámicamente
upgrades.click.forEach(u => { u.count = 0; u.currentCost = u.baseCost; });
upgrades.auto.forEach(u => { u.count = 0; u.currentCost = u.baseCost; });

// 3. Referencias al DOM (Caché)
const displayCount = document.getElementById('clickCount');

// 4. Función de actualización de UI general
function updateUI() {
    displayCount.innerText = Math.floor(state.clickCount);
}

// 5. Lógica de Compra Universal
function buyUpgrade(type, index) {
    const upgrade = upgrades[type][index];
    
    if (state.clickCount >= upgrade.currentCost) {
        state.clickCount -= upgrade.currentCost;
        upgrade.count++;
        
        if (type === 'click') {
            state.pointsPerClick += upgrade.power;
            upgrade.currentCost += upgrade.baseCost;
        } else {
            state.pointsPerSecond += upgrade.power;
            upgrade.currentCost += upgrade.baseCost;
            document.getElementById(`Aupgrade${upgrade.id}Cost`).innerText = upgrade.currentCost;
        }

        // Actualizar textos
        const prefix = type === 'click' ? '' : 'A';
        document.getElementById(`${prefix}upgrade${upgrade.id}Count`).innerText = upgrade.count;
        
        // Desbloquear siguiente
        const nextUpgrade = upgrades[type][index + 1];
        if (nextUpgrade) {
            document.getElementById(`${prefix}upgrade${nextUpgrade.id}`).style.display = 'inline-block';
            document.getElementById(`${prefix}upgrade${nextUpgrade.id}Count`).style.display = 'inline-block';
        }
        
        updateUI();
    }
}

// 6. Event Listeners Automáticos
document.getElementById('breadstick').addEventListener('click', () => {
    state.clickCount += state.pointsPerClick;
    updateUI();
});

upgrades.click.forEach((u, i) => {
    document.getElementById(`upgrade${u.id}`).addEventListener('click', () => buyUpgrade('click', i));
});

upgrades.auto.forEach((u, i) => {
    document.getElementById(`Aupgrade${u.id}`).addEventListener('click', () => buyUpgrade('auto', i));
});

// 7. Timers (Optimizado: No actualices el DOM cada 1ms, es fatal para el rendimiento)
setInterval(() => {
    state.clickCount += state.pointsPerSecond;
    updateUI();
}, 1000);

// Función de la tienda
function desplegableTienda() {
    const el = document.getElementById('desplegable1');
    el.style.display = (el.style.display === "none" || el.style.display === "") ? "block" : "none";
}
