let clickCount = 0;
let pointsPerClick = 1;
let pointsPerSecond = 0;
let upgradeCounts = {
    upgrade1: 0,
    upgrade2: 0,
    upgrade3: 0,
    upgrade4: 0,
    upgrade5: 0,
    upgrade6: 0,
    upgrade7: 0,
    upgrade8: 0
};

let AupgradeCounts = {
    upgrade1: 0,
    upgrade2: 0,
    upgrade3: 0,
    upgrade4: 0,
    upgrade5: 0,
    upgrade6: 0,
    upgrade7: 0,
    upgrade8: 0
};

let upgradeClicks = {
    upgrade1: 15,
    upgrade2: 100,
    upgrade3: 250,
    upgrade4: 500,
    upgrade5: 1000,
    upgrade6: 2500,
    upgrade7: 5000,
    upgrade8: 10000
};

let AupgradeClicks = {
    upgrade1: 100,
    upgrade2: 250,
    upgrade3: 500,
    upgrade4: 1000,
    upgrade5: 2500,
    upgrade6: 5000,
    upgrade7: 10000,
    upgrade8: 25000
};



const timer = setInterval(() => {
    clickCount += pointsPerSecond;
    },
    1000)
const timer2 = setInterval(() => {
        document.getElementById('clickCount').innerText = clickCount;},
        1)

document.getElementById('breadstick').addEventListener('click', () => {
    clickCount += pointsPerClick;
    document.getElementById('clickCount').innerText = clickCount;
});

document.getElementById('upgrade1').addEventListener('click', () => {
    if (clickCount >= upgradeClicks.upgrade1) {
        clickCount -= upgradeClicks.upgrade1;
        pointsPerClick += 1;
        upgradeCounts.upgrade1 += 1;
        document.getElementById('clickCount').innerText = clickCount;
        document.getElementById('upgrade1Count').innerText = upgradeCounts.upgrade1;
        document.getElementById('upgrade2').style.display = 'block'; // Desbloquea la mejora 2
        document.getElementById('upgrade2Count').style.display = 'inline'; // Muestra el contador de la mejora 2
        upgradeClicks.upgrade1 += 15; // Incrementa el costo de la siguiente mejora
    }
});

document.getElementById('upgrade2').addEventListener('click', () => {
    if (clickCount >= upgradeClicks.upgrade2) {
        clickCount -= upgradeClicks.upgrade2;
        pointsPerClick += 5;
        upgradeCounts.upgrade2 += 1;
        document.getElementById('clickCount').innerText = clickCount;
        document.getElementById('upgrade2Count').innerText = upgradeCounts.upgrade2;
        document.getElementById('upgrade3').style.display = 'block'; // Desbloquea la mejora 3
        document.getElementById('upgrade3Count').style.display = 'inline'; // Muestra el contador de la mejora 3
        upgradeClicks.upgrade2 += 100; // Incrementa el costo de la siguiente mejora
    }
});

document.getElementById('upgrade3').addEventListener('click', () => {
    if (clickCount >= upgradeClicks.upgrade3) {
        clickCount -= upgradeClicks.upgrade3;
        pointsPerClick += 10;
        upgradeCounts.upgrade3 += 1;
        document.getElementById('clickCount').innerText = clickCount;
        document.getElementById('upgrade3Count').innerText = upgradeCounts.upgrade3;
        document.getElementById('upgrade4').style.display = 'block'; // Desbloquea la mejora 4
        document.getElementById('upgrade4Count').style.display = 'inline'; // Muestra el contador de la mejora 4
        upgradeClicks.upgrade3 += 250; // Incrementa el costo de la siguiente mejora
    }
});

document.getElementById('upgrade4').addEventListener('click', () => {
    if (clickCount >= upgradeClicks.upgrade4) {
        clickCount -= upgradeClicks.upgrade4;
        pointsPerClick += 15;
        upgradeCounts.upgrade4 += 1;
        document.getElementById('clickCount').innerText = clickCount;
        document.getElementById('upgrade4Count').innerText = upgradeCounts.upgrade4;
        document.getElementById('upgrade5').style.display = 'block'; // Desbloquea la mejora 5
        document.getElementById('upgrade5Count').style.display = 'inline'; // Muestra el contador de la mejora 5
        upgradeClicks.upgrade4 += 500; // Incrementa el costo de la siguiente mejora
    }
});

document.getElementById('upgrade5').addEventListener('click', () => {
    if (clickCount >= upgradeClicks.upgrade5) {
        clickCount -= upgradeClicks.upgrade5;
        pointsPerClick += 25;
        upgradeCounts.upgrade5Count += 1;
        document.getElementById('clickCount').innerText = clickCount;
        document.getElementById('upgrade5Count').innerText = upgradeCounts.upgrade5;
        document.getElementById('upgrade6').style.display = 'block'; // Desbloquea la mejora 6
        document.getElementById('upgrade6Count').style.display = 'inline'; // Muestra el contador de la mejora 6
        upgradeClicks.upgrade5 += 1000; // Incrementa el costo de la siguiente mejora
    }
});

document.getElementById('upgrade6').addEventListener('click', () => {
    if (clickCount >= upgradeClicks.upgrade6) {
        clickCount -= upgradeClicks.upgrade6;
        pointsPerClick += 40;
        upgradeCounts.upgrade6 += 1;
        document.getElementById('clickCount').innerText = clickCount;
        document.getElementById('upgrade6Count').innerText = upgradeCounts.upgrade6;
        document.getElementById('upgrade7').style.display = 'block'; // Desbloquea la mejora 7
        document.getElementById('upgrade7Count').style.display = 'inline'; // Muestra el contador de la mejora 7
        upgradeClicks.upgrade6 += 2500; // Incrementa el costo de la siguiente mejora
    }
});

document.getElementById('upgrade7').addEventListener('click', () => {
    if (clickCount >= upgradeClicks.upgrade7) {
        clickCount -= upgradeClicks.upgrade7;
        pointsPerClick += 55;
        upgradeCounts.upgrade7 += 1;
        document.getElementById('clickCount').innerText = clickCount;
        document.getElementById('upgrade7Count').innerText = upgradeCounts.upgrade7;
        document.getElementById('upgrade8').style.display = 'block'; // Desbloquea la mejora 8
        document.getElementById('upgrade8Count').style.display = 'inline'; // Muestra el contador de la mejora 8
        upgradeClicks.upgrade7 += 5000; // Incrementa el costo de la siguiente mejora
    }
});

document.getElementById('upgrade8').addEventListener('click', () => {
    if (clickCount >= upgradeClicks.upgrade8) {
        clickCount -= upgradeClicks.upgrade8;
        pointsPerClick += 125;
        upgradeCounts.upgrade8 += 1;
        document.getElementById('clickCount').innerText = clickCount;
        document.getElementById('upgrade8Count').innerText = upgradeCounts.upgrade8;
        upgradeClicks.upgrade8 += 10000; // Incrementa el costo de la siguiente mejora
    }
});

function desplegableTienda() {
    const desplegableTiendaVar = document.getElementById('desplegable1')
    if (desplegableTiendaVar.style.display === "none") {
        desplegableTiendaVar.style.display = "block";
    }
    else {
        desplegableTiendaVar.style.display = "none";
    }
}