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
const timer = setInterval(() => {
    clickCount += pointsPerSecond;
    document.getElementById('clickCount').innerText = clickCount;},
    1000)
const timer2 = setInterval(() => {
        document.getElementById('clickCount').innerText = clickCount;},
        1)

document.getElementById('breadstick').addEventListener('click', () => {
    clickCount += pointsPerClick;
    document.getElementById('clickCount').innerText = clickCount;
});

document.getElementById('upgrade1').addEventListener('click', () => {
    if (clickCount >= 15) {
        clickCount -= 15;
        pointsPerClick += 1;
        upgradeCounts.upgrade1 += 1;
        document.getElementById('clickCount').innerText = clickCount;
        document.getElementById('upgrade1Count').innerText = upgradeCounts.upgrade1;
        document.getElementById('upgrade2').style.display = 'block'; // Desbloquea la mejora 2
        document.getElementById('upgrade2Count').style.display = 'inline'; // Muestra el contador de la mejora 2
    }
});

document.getElementById('upgrade2').addEventListener('click', () => {
    if (clickCount >= 100) {
        clickCount -= 100;
        pointsPerClick += 5;
        upgradeCounts.upgrade2 += 1;
        document.getElementById('clickCount').innerText = clickCount;
        document.getElementById('upgrade2Count').innerText = upgradeCounts.upgrade2;
        document.getElementById('upgrade3').style.display = 'block'; // Desbloquea la mejora 3
        document.getElementById('upgrade3Count').style.display = 'inline'; // Muestra el contador de la mejora 3
    }
});

document.getElementById('upgrade3').addEventListener('click', () => {
    if (clickCount >= 250) {
        clickCount -= 250;
        pointsPerClick += 10;
        upgradeCounts.upgrade3 += 1;
        document.getElementById('clickCount').innerText = clickCount;
        document.getElementById('upgrade3Count').innerText = upgradeCounts.upgrade3;
        document.getElementById('upgrade4').style.display = 'block'; // Desbloquea la mejora 4
        document.getElementById('upgrade4Count').style.display = 'inline'; // Muestra el contador de la mejora 4
    }
});

document.getElementById('upgrade4').addEventListener('click', () => {
    if (clickCount >= 500) {
        clickCount -= 500;
        pointsPerClick += 15;
        upgradeCounts.upgrade4 += 1;
        document.getElementById('clickCount').innerText = clickCount;
        document.getElementById('upgrade4Count').innerText = upgradeCounts.upgrade4;
        document.getElementById('upgrade5').style.display = 'block'; // Desbloquea la mejora 5
        document.getElementById('upgrade5Count').style.display = 'inline'; // Muestra el contador de la mejora 5
    }
});

document.getElementById('upgrade5').addEventListener('click', () => {
    if (clickCount >= 1000) {
        clickCount -= 1000;
        pointsPerClick += 25;
        upgradeCounts.upgrade5 += 1;
        document.getElementById('clickCount').innerText = clickCount;
        document.getElementById('upgrade5Count').innerText = upgradeCounts.upgrade5;
        document.getElementById('upgrade6').style.display = 'block'; // Desbloquea la mejora 6
        document.getElementById('upgrade6Count').style.display = 'inline'; // Muestra el contador de la mejora 6
    }
});

document.getElementById('upgrade6').addEventListener('click', () => {
    if (clickCount >= 2500) {
        clickCount -= 2500;
        pointsPerClick += 40;
        upgradeCounts.upgrade6 += 1;
        document.getElementById('clickCount').innerText = clickCount;
        document.getElementById('upgrade6Count').innerText = upgradeCounts.upgrade6;
        document.getElementById('upgrade7').style.display = 'block'; // Desbloquea la mejora 7
        document.getElementById('upgrade7Count').style.display = 'inline'; // Muestra el contador de la mejora 7
    }
});

document.getElementById('upgrade7').addEventListener('click', () => {
    if (clickCount >= 5000) {
        clickCount -= 5000;
        pointsPerClick += 55;
        upgradeCounts.upgrade7 += 1;
        document.getElementById('clickCount').innerText = clickCount;
        document.getElementById('upgrade7Count').innerText = upgradeCounts.upgrade7;
  document.getElementById('upgrade8').style.display = 'block'; // Desbloquea la mejora 8
        document.getElementById('upgrade8Count').style.display = 'inline'; // Muestra el contador de la mejora 8
    }
});

document.getElementById('upgrade8').addEventListener('click', () => {
    if (clickCount >= 10000) {
        clickCount -= 10000;
        pointsPerClick += 125;
        upgradeCounts.upgrade8 += 1;
        document.getElementById('clickCount').innerText = clickCount;
        document.getElementById('upgrade8Count').innerText = upgradeCounts.upgrade8;
    }
});

function desplegableTienda() {
    const desplegableTienda = document.getElementById('desplegable1')
    if (desplegableTienda.style.display === "none") {
        desplegableTienda.style.display = "block";
    }
    else {
        desplegableTienda.style.display = "none";
    }
}