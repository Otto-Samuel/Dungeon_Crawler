let fase03 = [], fase03Inicio1morte = [], fase03Inicio2Morte = [], vidas = 3;
let redDoor1, redDoor2, lightBlueDoor, greenDoor;
const player = '&', wall = '*' , spikes = '#', key = '@', lockedDoor = 'D', unlockedDoor = '=', button = 'O', tp = '>', paredeAtravessavelEsq = '}', paredeAtravessavelDir = '{';
const redKey = key, lightBlueKey = key, greenKey = key;
const tpLaranjaA = tp, tpLaranjaB = tp, tpVerdeA = tp, tpVerdeB = tp, tpRoxoA = tp, tpRoxoB = tp, tpAmareloA = tp, tpAmareloB = tp, tpAzulClaroA = tp, tpAzulClaroB = tp;
const darkBlueButton = button, purpleButton = button, pinkButton = button, redButton = button;
let coordPlayer = {x: 2, y: 22};
const coordsFinais = {
    f1: {x: 59, y: 11},
    f2: {x: 59, y: 12},
    f3: {x: 59, y: 13}
};
const fixedCoords = {
    redKey: {x: 22, y: 40},
    lightBlueKey: {x: 2, y: 26},
    greenKey: {x: 18, y: 18},
    tpLaranjaA: {x: 2, y: 2},
    tpLaranjaB: {x: 53, y: 25},
    tpVerdeA: {x: 38, y: 12},
    tpVerdeB: {x: 14, y: 57},
    tpRoxoA: {x: 49, y: 29},
    tpRoxoB: {x: 38, y: 6},
    tpAmareloA: {x: 42, y: 12},
    tpAmareloB: {x: 57, y: 33},
    tpAzulClaroA: {x: 38, y: 2},
    tpAzulClaroB: {x: 57, y: 2},
    darkBlueButton: {x: 22, y: 25},
    purpleButton: {x: 6, y: 10},
    pinkButton: {x: 22, y: 50},
    redButton: {x: 53, y: 33,},
    redDoor1: {x: 51, y: 2},
    redDoor2: {x: 53, y: 23},
    greenDoor: {x: 51, y: 16},
    lightBlueDoor: {x: 41, y: 35},
};

const onload = window.addEventListener('load', (onload) => {
    document.body.style.zoom = "75%";
});

function mapa() {
    for (let i = 0; i < 60; i++) {
        fase03[i] = new Array(60);
        fase03Inicio1morte[i] = new Array(60);
        fase03Inicio2Morte[i] = new Array(60);
    };
        
    for (let i = 0; i < 60; i++) {
        for(let j = 0; j < 60; j++) {
            switch (i) {
                case 1:
                    if (j === 0 || j === 36 || j === 40 || j === 51 || j === 55 || j === 59) { 
                        fase03[i][j] = wall;
                    } else if ((j >= 6 && j <= 8) || (j >= 14 && j <= 16) || (j >= 22 && j <= 24) || (j >= 30 && j <= 32)) {
                        fase03[i][j] = spikes;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 2:
                    if (j === 0 || j === 36 || j === 40 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if ((j >= 6 && j <= 8) || (j >= 10 && j <= 12) || (j >= 14 && j <= 16) || (j >= 18 && j <= 20) || (j >= 22 && j <= 24) || (j >= 26 && j <= 28) || (j >= 30 && j <= 32)) {
                        fase03[i][j] = spikes;
                    } else if (j === fixedCoords.tpLaranjaA.x) {
                        fase03[i][j] = tpLaranjaA;
                    } else if (j === fixedCoords.tpAzulClaroA.x) {
                        fase03[i][j] = tpAzulClaroA;
                    } else if (j === fixedCoords.tpAzulClaroB.x) {
                        fase03[i][j] = tpAzulClaroB;
                    } else if (j === fixedCoords.redDoor1.x) {
                        redDoor1 = lockedDoor;
                        fase03[i][j] = redDoor1;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 3: 
                    if (j === 0 || j === 36 || j === 40 || j === 51 || j === 55 || j === 59) { 
                        fase03[i][j] = wall;
                    } else if ((j >= 10 && j <= 12) || (j >= 18 && j <= 20) || (j >= 26 && j <= 28)) {
                        fase03[i][j] = spikes;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 4:
                    if ((j >= 0 && j <= 32) || (j >= 36 && j <= 51) || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 5:
                    if (j === 0 || j === 36 || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 6:
                    if (j === 0 || j === 36 || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 4 || j === 8 || j === 12 || j === 16 || j === 20 || j === 24 || j === 28 || j === 32) {
                        fase03[i][j] = spikes;
                    } else if (j === fixedCoords.tpRoxoB.x) {
                        fase03[i][j] = tpRoxoB;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 7:
                    if (j === 0 || j === 36 || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 8:
                    if (j === 0 || (j >= 4 && j <= 47) || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 9:
                    if (j === 0 || j === 4 || j === 8 || j === 20 || j === 36 || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 10:
                    if (j === 0 || j === 4 || j === 14 || j === 26 || j === 36 || (j >= 40 && j <= 47) || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === fixedCoords.purpleButton.x) {
                        fase03[i][j] = purpleButton;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 11:
                    if (j === 0 || j === 4 || j === 8 || j === 20 || j === 36 || j === 40 || j === 51 || j === 55) {
                        fase03[i][j] = wall;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 12:
                    if (j === 0 || (j >= 4 && j <= 32) || j === 36 || j === 40 || j === 51 || j === 55) {
                        fase03[i][j] = wall;
                    } else if (j === fixedCoords.tpVerdeA.x) {
                        fase03[i][j] = tpVerdeA;
                    } else if (j === fixedCoords.tpAmareloA.x) {
                        fase03[i][j] = tpAmareloA;
                    } else { 
                        fase03[i][j] = ' ';
                    }
                    break;
                case 13:
                    if (j === 0 || j === 36 || j === 40 || j === 51 || j === 55) {
                        fase03[i][j] = wall;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 14:
                    if (j === 0 || (j >= 36 && j <= 51) || (j >= 55 && j <= 59)) {
                        fase03[i][j] = wall;
                    } else if (j === 10 || j === 14 || j === 18 || j === 22 || j === 26 || j === 30) {
                        fase03[i][j] = spikes;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 15:
                    if (j === 0 || (j === 36 || j === 51) || (j === 55 || j === 59)) {
                        fase03[i][j] = wall;
                    } else if (j === 40 || j === 48) {
                        fase03[i][j] = paredeAtravessavelDir;
                    } else if (j === 44) {
                        fase03[i][j] = spikes;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 16:
                    if ((j >= 0 && j <= 36) || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 40 || j === 48) {
                        fase03[i][j] = paredeAtravessavelDir;
                    } else if (j === 44) {
                        fase03[i][j] = spikes;
                    } else if (j === fixedCoords.greenDoor.x) {
                        greenDoor = lockedDoor;
                        fase03[i][j] = greenDoor;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 17:
                    if (j === 0 || j === 20 || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j >= 5 && j <= 16) {
                        fase03[i][j] = spikes;
                    } else if (j === 36 || j === 40 || j === 44 || j === 48) {
                        fase03[i][j] = paredeAtravessavelDir;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 18:
                    if (j === 0 || j === 20 || j === 28 || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 40 || j === 48) {
                        fase03[i][j] = spikes;
                    } else if (j === 36 || j  === 44) {
                        fase03[i][j] = paredeAtravessavelDir;
                    } else if (j === fixedCoords.greenKey.x) {
                        fase03[i][j] = greenKey;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 19:
                    if (j === 0 || j === 20 || j === 24 || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if ((j >= 5 && j <= 16) || j === 40 || j === 48) {
                        fase03[i][j] = spikes;
                    } else if (j === 36 || j === 44) {
                        fase03[i][j] = paredeAtravessavelDir;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 20:
                    if ((j >= 0 && j <= 20) || (j >= 24 && j <= 51) || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 21:
                    if (j === 0 || j === 20 || (j >= 37 && j <= 39) || (j >= 44 && j <= 46) || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 31 || j === 40 || j === 43) {
                        fase03[i][j] = spikes;
                    } else if (j === 24 || j === 29) {
                        fase03[i][j] = paredeAtravessavelEsq;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 22:
                    if (j === 0 || j === 20 || (j >= 37 && j <= 39) || (j >= 44 && j <= 46) || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 31 || j === 40 || j === 43) {
                        fase03[i][j] = spikes;
                    } else if (j === 24 || j === 29) {
                        fase03[i][j] = paredeAtravessavelEsq;
                    } else if (j === coordPlayer.x) {
                        fase03[i][j] = player;
                    } else if (j === coordPlayer.x) {
                        fase03[i][j] = player 
                    } else { 
                        fase03[i][j] = ' ';
                    }
                    break;
                case 23:
                    if (j === 0 || j === 20 || j === 34 || j === 51 || j === 52 || j === 54 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 25 || j === 26 || j === 31) {
                        fase03[i][j] = spikes;
                    } else if (j === 24 || j === 29) {
                        fase03[i][j] = paredeAtravessavelEsq;  (j === fixedCoords.redDoor2.x) 
                    } else if (j === 53) {
                        redDoor2 = lockedDoor;
                        fase03[i][j] = redDoor2;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 24:
                    if ((j >= 0 && j <= 4) || (j >= 8 && j <= 16) || j === 20 || j === 34 || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 26 || j === 30 || j === 31) {
                        fase03[i][j] = spikes;
                    } else if (j === 24 || j === 29) {
                        fase03[i][j] = paredeAtravessavelEsq;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 25:
                    if (j === 0 || j === 4 || j === 8 || j === 16 || j === 20 || (j >= 37 && j <= 39) || (j >= 44 && j <= 46) || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 10 || j === 26 || j === 40 || j === 43) {
                        fase03[i][j] = spikes;
                    } else if (j === 24 || j === 29) {
                        fase03[i][j] = paredeAtravessavelEsq;
                    } else if (j === fixedCoords.darkBlueButton.x) {
                        fase03[i][j] = darkBlueButton;
                    } else if (j === fixedCoords.tpLaranjaB.x) {
                        fase03[i][j] = tpLaranjaB;   
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 26:
                    if (j === 0 || j === 4 || j === 8 || j === 16 || j === 20 || (j >= 37 && j <= 39) || (j >= 44 && j <= 46) || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 10 || j === 26 || j === 40 || j === 43) {
                        fase03[i][j] = spikes;
                    } else if (j === 24 || j === 29) {
                        fase03[i][j] = paredeAtravessavelEsq; 
                    } else if (j === fixedCoords.lightBlueKey.x) {
                        fase03[i][j] = lightBlueKey;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 27:
                    if (j === 0 || j === 4 || j === 8 || j === 16 || j >= 20 && j <= 55 || j === 59) {
                        fase03[i][j] = wall
                    } else if (j === 5 || j === 6 || j === 10) {
                        fase03[i][j] = spikes;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 28:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || j >= 29 && j <= 39 || j === 47 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 6 || j === 10) {
                        fase03[i][j] = spikes;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 29:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || j === 47 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 1 || j === 3 || j === 6 || j === 10 || j === 14) {
                        fase03[i][j] = spikes;
                    } else if (j === fixedCoords.tpRoxoA.x) {
                        fase03[i][j] = tpRoxoA;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 30:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || (j > 28 && j <= 39) || j === 47 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 6 || j === 10) {
                        fase03[i][j] = spikes;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;                
                case 31:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || (j > 16 && j <= 43) || (j > 46 && j <= 59)) {
                        fase03[i][j] = wall;
                    } else if (j === 6 || j === 10) {
                        fase03[i][j] = spikes;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;                
                case 32:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || j === 43|| j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 6 || j === 10) {
                        fase03[i][j] = spikes;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;                
                case 33:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || j === 43 || (j >= 47 && j <= 49) || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 2 || j === 3 ||j === 6 || j === 14) {
                        fase03[i][j] = spikes;
                    } else if (j === 53) {
                        fase03[i][j] = redButton;                    
                    } else if (j === 57) {
                        fase03[i][j] = tpAmareloB;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;                    
                case 34:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || j === 43 || j === 49 || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 6) {
                        fase03[i][j] = spikes;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 35:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || (j >= 20 && j <= 40) || (j >= 42 && j <= 47) || j === 49 || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 6 || j === 58) {
                        fase03[i][j] = spikes;
                    } else if (j === fixedCoords.lightBlueDoor.x) {
                        lightBlueDoor = lockedDoor;
                        fase03[i][j] = lightBlueDoor;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 36:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || j === 20 || j === 43 || j === 47 || j === 49 || j === 51 || j === 53 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 6 || j === 58) {
                        fase03[i][j] = spikes;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 37:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || j === 20 || j === 43 || j === 47 || j === 49 || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if ((j >=1 && j <=2 ) || j === 6 || j === 9 || j === 11 || j === 14 || (j >= 57 && j <= 58)) {
                        fase03[i][j] = spikes;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 38:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || j === 20 || j === 43 || j === 47 || j === 49 || j === 50 || j === 51  || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 9 || j === 11 || (j >= 57 && j <= 58)) {
                        fase03[i][j] = spikes;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 39:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || j === 20 || j === 24 || j === 43 || j === 47 || j === 51  || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 9 || j === 11 || j === 58) {
                        fase03[i][j] = spikes;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 40:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || j === 20 || j === 24 || j === 43 || j === 47 || j === 51  || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 9 || j === 11 || j === 58) {
                        fase03[i][j] = spikes;
                    } else if (j === 22) {
                        fase03[i][j] = redKey;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 41:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || j === 20 || j === 24 || j === 43 || j === 47  || j === 51  || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if ((j >= 2 && j <= 3 ) || j === 6 || j === 9 || j === 11 || j === 14) {
                        fase03[i][j] = spikes;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 42:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || (j >= 20 && j <= 43) || j === 47 || j === 49 || j === 51  || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 6 || j === 9 || j === 11 || j === 52 || j === 54) {
                        fase03[i][j] = spikes;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 43:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || j === 47 || j === 49 || j === 51  || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 6 || j === 9 || j === 11 || j === 52 || j === 54) {
                        fase03[i][j] = spikes;
                    } else if (j === 43) {
                        fase03[i][j] = paredeAtravessavelDir;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 44:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || j === 47 || j === 49 || j === 51  || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 6 || (j >= 24 && j <= 43) || j === 52 || j === 54 || j === 56) {
                        fase03[i][j] = spikes;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 45:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || j === 47 || j === 49 || j === 51 || j === 52 || j === 54 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 1 || j === 2 || j === 6 || j === 14 || j === 56) {
                        fase03[i][j] = spikes;
                    } else if (j === 43) {
                        fase03[i][j] = paredeAtravessavelEsq;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 46:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || j === 47 || j === 49 || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 6 || (j >= 24 && j <= 43) || j === 56 || j === 57) {
                        fase03[i][j] = spikes;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 47:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || j === 47 || j === 49 || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 6 || j === 56 || j === 57) {
                        fase03[i][j] = spikes;
                    } else if (j === 43) {
                        fase03[i][j] = paredeAtravessavelDir;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 48:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || (j >= 20 && j <= 43) || j === 47 || j === 49 || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 6 || j === 56) {
                        fase03[i][j] = spikes;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 49:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || j === 20 || j === 24 || j === 43 || j === 47 || j === 49 || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 2 || j === 3 || j === 6 || j === 10 || j === 14 || j === 53 || j === 56) {
                        fase03[i][j] = spikes;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 50:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || j === 20 || j === 24 || j === 43 || j === 47 || j === 49 || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 6 || j === 10) {
                        fase03[i][j] = spikes;                    
                    } else if (j === 22) {
                        fase03[i][j] = pinkButton;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 51:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || j === 20 || j === 24 || j === 43 || j === 47 || j === 49 || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 6 || j === 10) {
                        fase03[i][j] = spikes;                    
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 52:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || j === 20 || (j >= 43 && j <= 45) || j === 47 || j === 49 || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 6 || j === 7 || j === 10) {
                        fase03[i][j] = spikes;                    
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 53:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || j === 20 || j === 43 || j === 45 || j === 47 || j === 49 || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 1 || j === 2 || j === 10 || j === 14 || j === 53 || j === 58) {
                        fase03[i][j] = spikes;                    
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 54:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || j === 20 || j === 43 || j === 45 || j === 47 || j === 49 || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 10 || j === 58) {
                        fase03[i][j] = spikes;                    
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 55:
                    if (j === 0 || j === 4 || j === 8 || j === 12 || j === 16 || (j >= 20 && j <= 39) || j === 43 || j === 45 || (j >= 47 && j <= 49) || j === 51 || j === 55 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 57 || j === 58) {
                        fase03[i][j] = spikes;                    
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 56:
                    if (j === 0 || j === 12 || j === 16 || j === 43 || j === 45 || j === 51 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 57 || j === 58) {
                        fase03[i][j] = spikes;                    
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 57:
                    if (j === 0 || j === 12 || j === 16 || j === 43 || (j >= 45 && j <= 48) || j === 51 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 53 || j === 58) {
                        fase03[i][j] = spikes;                    
                    } else if (j === 14) {
                        fase03[i][j] = tpVerdeA;
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                case 58:
                    if (j === 0 || j === 12 || j === 16 || j === 43 || j === 51 || j === 59) {
                        fase03[i][j] = wall;
                    } else if (j === 58) {
                        fase03[i][j] = spikes;                    
                    } else {
                        fase03[i][j] = ' ';
                    }
                    break;
                default:
                    fase03[i][j] = wall;
                    break;
            }
        } 
    };

    for (let i = 0; i < 60; i++) {
        for(let j = 0; j < 60; j++) {
            fase03Inicio1morte[i][j] = fase03[i][j];
            fase03Inicio2Morte[i][j] = fase03[i][j];
        }
    };
}


function carregarMapa() {
    const tela = document.querySelector('#tela-jogo');
    let linha = [];
    let coluna;

    tela.innerHTML = '';

    
    for (let i = 0; i < 60; i++) {
        linha = document.createElement('tr');
        for (let j = 0; j < 60; j++) {            
            coluna = document.createElement('td');
            coluna.innerHTML = `
                ${fase03[i][j]}
            `;
            linha.appendChild(coluna);
        };
        tela.appendChild(linha);
    };  
}

function checarEspaçosFinais(direcao) {
    if (direcao === 68) {
        if (coordPlayer.y === coordsFinais.f1.y && coordPlayer.x + 1 === coordsFinais.f1.x) {
            return true;
        } else if (coordPlayer.y === coordsFinais.f2.y && coordPlayer.x + 1 === coordsFinais.f2.x) {
            return true;
        } else if (coordPlayer.y === coordsFinais.f3.y && coordPlayer.x + 1 === coordsFinais.f3.x) {
            return true;
        }
    }
}


function checarEspacoVazio(direcao) {
    switch (direcao) {
        case 87:
            return fase03[coordPlayer.y - 1][coordPlayer.x] === ' ';
        case 83:
            return fase03[coordPlayer.y + 1][coordPlayer.x] === ' ';
        case 65:
            return fase03[coordPlayer.y][coordPlayer.x - 1] === ' ';
        case 68:
            return fase03[coordPlayer.y][coordPlayer.x + 1] === ' ';
    }
};

function checarEspinho(direcao) {
    switch (direcao) {
        case 87:
            return fase03[coordPlayer.y - 1][coordPlayer.x] === spikes;
        case 83:
            return fase03[coordPlayer.y + 1][coordPlayer.x] === spikes;
        case 65:
            return fase03[coordPlayer.y][coordPlayer.x - 1] === spikes;
        case 68:
            return fase03[coordPlayer.y][coordPlayer.x + 1] === spikes;
    }
}

function checarParedeAtrvDir(direcao) {
    switch (direcao) {
        case 65:
            return fase03[coordPlayer.y][coordPlayer.x - 1] === paredeAtravessavelDir;
    }
};

function checarParedeAtrvEsq(direcao) {
    switch (direcao) {
        case 68:
            return fase03[coordPlayer.y][coordPlayer.x + 1] === paredeAtravessavelEsq;
    }
};

function passarParedeAtrvDir() {
    fase03[coordPlayer.y][coordPlayer.x] = ' ';
    fase03[coordPlayer.y][coordPlayer.x - 2] = player;
    coordPlayer.x = coordPlayer.x - 2;
}

function passarParedeAtrvEsq() {
    fase03[coordPlayer.y][coordPlayer.x] = ' ';
    fase03[coordPlayer.y][coordPlayer.x + 2] = player;
    coordPlayer.x = coordPlayer.x + 2;
}

function morteEGameOver () {
    vidas--;
    if (vidas === 0) {
        alert('FIM DE JOGO');
        window.location.href = '../pages/derrota.html';
    } else if (vidas === 2) {
        fase03[coordPlayer.y][coordPlayer.x] = ' ';
        coordPlayer.x = 2;
        coordPlayer.y = 22;
        fase03 = fase03Inicio1morte;
        carregarMapa();
    } else if(vidas === 1) {
        fase03[coordPlayer.y][coordPlayer.x] = ' ';
        coordPlayer.x = 2;
        coordPlayer.y = 22;
        fase03 = fase03Inicio2Morte;
        carregarMapa();
    }
}

function checarEspacoChave(direcao) {
    switch (direcao) {
        case 87:
            return fase03[coordPlayer.y - 1][coordPlayer.x] === key;
        case 83:
            return fase03[coordPlayer.y + 1][coordPlayer.x] === key;
        case 65:
            return fase03[coordPlayer.y][coordPlayer.x - 1] === key;
        case 68:
            return fase03[coordPlayer.y][coordPlayer.x + 1] === key;
    }
};

function checarPorta(direcao) {
    switch (direcao) {
        case 87:
            return fase03[coordPlayer.y - 1][coordPlayer.x] === unlockedDoor;
        case 83:
            return fase03[coordPlayer.y + 1][coordPlayer.x] === unlockedDoor;
        case 65:
            return fase03[coordPlayer.y][coordPlayer.x - 1] === unlockedDoor;
        case 68:
            return fase03[coordPlayer.y][coordPlayer.x + 1] === unlockedDoor;
    }
};

function checarBotao(direcao) {
    switch(direcao) {
        case 87:
            return fase03[coordPlayer.y - 1][coordPlayer.x] === button;
        case 83:
            return fase03[coordPlayer.y + 1][coordPlayer.x] === button;
        case 65:
            return fase03[coordPlayer.y][coordPlayer.x - 1] === button;
        case 68:
            return fase03[coordPlayer.y][coordPlayer.x + 1] === button;
    }
}

function checarTp(direcao) {
    switch(direcao) {
        case 87:
            return fase03[coordPlayer.y - 1][coordPlayer.x] === tp;
        case 83:
            return fase03[coordPlayer.y + 1][coordPlayer.x] === tp;
        case 65:
            return fase03[coordPlayer.y][coordPlayer.x - 1] === tp;
        case 68:
            return fase03[coordPlayer.y][coordPlayer.x + 1] === tp;
    }
}

// ################################# CHECAR CHAVES ########################################################

function estaNaChaveVermelha() {
    return coordPlayer.x === fixedCoords.redKey.x && coordPlayer.y === fixedCoords.redKey.y;
};

function estaNaChaveAzulClaro() {
    return coordPlayer.x === fixedCoords.lightBlueKey.x && coordPlayer.y === fixedCoords.lightBlueKey.y;
};

function estaNaChaveVerde() {
    return coordPlayer.x === fixedCoords.greenKey.x && coordPlayer.y === fixedCoords.greenKey.y;s
};

// ################################# CHECAR BOTÕES ########################################################

function estaNoBotaoAzulEscuro() {
    return coordPlayer.x === fixedCoords.darkBlueButton.x && coordPlayer.y === fixedCoords.darkBlueButton.y;
};

function estaNoBotaoRoxo() {
    return coordPlayer.x === fixedCoords.purpleButton.x && coordPlayer.y === fixedCoords.purpleButton.y;
};

function estaNoBotaoRosa() {
    return coordPlayer.x === fixedCoords.pinkButton.x && coordPlayer.y === fixedCoords.pinkButton.y;
};

function estaNoBotaoVermeho() {
    return coordPlayer.x === fixedCoords.redButton.x && coordPlayer.y === fixedCoords.redButton.y;
};

// ################################# CHECAR SE ESTÁ EM CIMA DE TELEPORTES ########################################################

function estaNoTpAmareloA() {
    return coordPlayer.x === fixedCoords.tpAmareloA.x && coordPlayer.y === fixedCoords.tpAmareloA.y;
};

function estaNoTpAmareloB() {
    return coordPlayer.x === fixedCoords.tpAmareloB.x && coordPlayer.y === fixedCoords.tpAmareloB.y;
};

function estaNoTpAzulClaroA() {
    return coordPlayer.x === fixedCoords.tpAzulClaroA.x && coordPlayer.y === fixedCoords.tpAzulClaroA.y;
};

function estaNoTpAzulClaroB() {
    return coordPlayer.x === fixedCoords.tpAzulClaroB.x && coordPlayer.y === fixedCoords.tpAzulClaroB.y;
};

function estaNoTpLaranjaA() {
    return coordPlayer.x === fixedCoords.tpLaranjaA.x && coordPlayer.y === fixedCoords.tpLaranjaA.y;
};

function estaNoTpLaranjaB() {
    return coordPlayer.x === fixedCoords.tpLaranjaB.x && coordPlayer.y === fixedCoords.tpLaranjaB.y;
};

function estaNoTpVerdeA() {
    return coordPlayer.x === fixedCoords.tpVerdeA.x && coordPlayer.y === fixedCoords.tpVerdeA.y;
};

function estaNoTpVerdeB() {
    return coordPlayer.x === fixedCoords.tpVerdeB.x && coordPlayer.y === fixedCoords.tpVerdeB.y;
};

function estaNoTpRoxoA() {
    return coordPlayer.x === fixedCoords.tpRoxoA.x && coordPlayer.y === fixedCoords.tpRoxoA.y;
};

function estaNoTpRoxoB() {
    return coordPlayer.x === fixedCoords.tpRoxoB.x && coordPlayer.y === fixedCoords.tpRoxoB.y;
};

// ################################# MANTER CHAVE ########################################################

function manterChaveIrParaCima() {
    fase03[coordPlayer.y][coordPlayer.x] = key;
    fase03[coordPlayer.y - 1][coordPlayer.x] = player;
    coordPlayer.y--;
};

function manterChaveIrParaBaixo() {
    fase03[coordPlayer.y][coordPlayer.x] = key;
    fase03[coordPlayer.y + 1][coordPlayer.x] = player;
    coordPlayer.y++;
};

function manterChaveIrParaEsquerda() {
    fase03[coordPlayer.y][coordPlayer.x] = key;
    fase03[coordPlayer.y][coordPlayer.x - 1] = player;
    coordPlayer.x--;
};

function manterChaveIrParaDireita() {
    fase03[coordPlayer.y][coordPlayer.x] = key;
    fase03[coordPlayer.y][coordPlayer.x + 1] = player;
    coordPlayer.x++;
}

// ################################# MOVIMENTAÇÃO E SE ESTÁ EM PORTA ########################################################

function irParaCima() {
    fase03[coordPlayer.y][coordPlayer.x] = ' ';
    fase03[coordPlayer.y - 1][coordPlayer.x] = player;
    coordPlayer.y--;
};

function irParaBaixo() {
    fase03[coordPlayer.y][coordPlayer.x] = ' ';
    fase03[coordPlayer.y + 1][coordPlayer.x] = player;
    coordPlayer.y++;
};

function irParaEsquerda() {
    fase03[coordPlayer.y][coordPlayer.x] = ' ';
    fase03[coordPlayer.y][coordPlayer.x - 1] = player;
    coordPlayer.x--;
}

function irParaDireita() {
    fase03[coordPlayer.y][coordPlayer.x] = ' ';
    fase03[coordPlayer.y][coordPlayer.x + 1] = player;
    coordPlayer.x++;
}

function estaNumaPorta() {
    if (coordPlayer.x === fixedCoords.redDoor1.x && coordPlayer.y === fixedCoords.redDoor1.y) {
        return true
    } else if (coordPlayer.x === fixedCoords.redDoor2.x && coordPlayer.y === fixedCoords.redDoor2.y) {
        return true
    } else if (coordPlayer.x === fixedCoords.greenDoor.x && coordPlayer.y === fixedCoords.greenDoor.y) {
        return true    
    } else if (coordPlayer.x === fixedCoords.lightBlueDoor.x && coordPlayer.y === fixedCoords.lightBlueDoor.y) {
        return true
    }
}

function manterPortaIrParaCima() {
    fase03[coordPlayer.y][coordPlayer.x] = unlockedDoor;
    fase03[coordPlayer.y - 1][coordPlayer.x] = player;
    coordPlayer.y--;
}
function manterPortaIrParaBaixo() {
    fase03[coordPlayer.y][coordPlayer.x] = unlockedDoor;
    fase03[coordPlayer.y + 1][coordPlayer.x] = player;
    coordPlayer.y++;
}
function manterPortaIrParaEsquerda() {
    fase03[coordPlayer.y][coordPlayer.x] = unlockedDoor;
    fase03[coordPlayer.y][coordPlayer.x - 1] = player;
    coordPlayer.x--;
}
function manterPortaIrParaDireita() {
    fase03[coordPlayer.y][coordPlayer.x] = unlockedDoor;
    fase03[coordPlayer.y][coordPlayer.x + 1] = player;
    coordPlayer.x++;
}

// ################################# MANTER BOTÃO ########################################################

function manterBotaoIrParaCima() {
    fase03[coordPlayer.y][coordPlayer.x] = button;
    fase03[coordPlayer.y - 1][coordPlayer.x] = player;
    coordPlayer.y--;
}

function manterBotaoIrParaBaixo() {
    fase03[coordPlayer.y][coordPlayer.x] = button;
    fase03[coordPlayer.y + 1][coordPlayer.x] = player;
    coordPlayer.y++;
}

function manterBotaoIrParaEsquerda() {
    fase03[coordPlayer.y][coordPlayer.x] = button;
    fase03[coordPlayer.y][coordPlayer.x - 1] = player;
    coordPlayer.x--;
}

function manterBotaoIrParaDireita() {
    fase03[coordPlayer.y][coordPlayer.x] = button;
    fase03[coordPlayer.y][coordPlayer.x + 1] = player;
    coordPlayer.x++;
}

// ################################# SAIR DE TP/BOTÃO ########################################################

function sairDoBotao() {
    if (estaNoBotaoAzulEscuro() || estaNoBotaoRoxo() || estaNoBotaoRosa() || estaNoBotaoVermeho()) {
        return true;
    }
}
function sairDoTp() {
    if (estaNoTpAmareloA() || estaNoTpAmareloB() || estaNoTpAzulClaroA() || estaNoTpAzulClaroB() || estaNoTpLaranjaA() || estaNoTpLaranjaB() || estaNoTpRoxoA() || estaNoTpRoxoB() || estaNoTpVerdeA() || estaNoTpVerdeB()) {
        return true;
    }
}

// ################################# MANTER TP ########################################################

function manterTpIrParaCima() {
    fase03[coordPlayer.y][coordPlayer.x] = tp;
    fase03[coordPlayer.y - 1][coordPlayer.x] = player;
    coordPlayer.y--;
}

function manterTpIrParaBaixo() {
    fase03[coordPlayer.y][coordPlayer.x] = tp;
    fase03[coordPlayer.y + 1][coordPlayer.x] = player;
    coordPlayer.y++;
}

function manterTpIrParaEsquerda() {
    fase03[coordPlayer.y][coordPlayer.x] = tp;
    fase03[coordPlayer.y][coordPlayer.x - 1] = player;
    coordPlayer.x--;
}

function manterTpIrParaDireita() {
    fase03[coordPlayer.y][coordPlayer.x] = tp;
    fase03[coordPlayer.y][coordPlayer.x + 1] = player;
    coordPlayer.x++;
}

// ################################# MOVIMENTAÇÃO E INTERAÇÃO ########################################################

document.addEventListener ('keydown', (controles) => {
    switch (controles.keyCode) {
            case 87: // W
                if (checarEspacoVazio(87) || checarEspacoChave(87) || checarPorta(87) || checarBotao(87) || checarTp(87)) {

                    if (estaNaChaveVermelha() && redDoor1 === lockedDoor) {
                        manterChaveIrParaCima();
                        carregarMapa();

                    } else if (estaNaChaveAzulClaro() && lightBlueDoor === lockedDoor) {
                        manterChaveIrParaCima();
                        carregarMapa();

                    } else if (estaNaChaveVerde() && greenDoor === lockedDoor) {
                        manterChaveIrParaCima();
                        carregarMapa();

                    } else if (estaNoTpAmareloA()) {
                        manterTpIrParaCima();
                        carregarMapa();

                    } else if (estaNoTpAmareloB()) {
                        manterTpIrParaCima();
                        carregarMapa();

                    } else if (estaNoTpAzulClaroA()) {
                        manterTpIrParaCima();
                        carregarMapa();

                    } else if (estaNoTpAzulClaroB()) {
                        manterTpIrParaCima();
                        carregarMapa();

                    } else if (estaNoTpLaranjaA()) {
                        manterTpIrParaCima();
                        carregarMapa();

                    } else if (estaNoTpLaranjaB()) {
                        manterTpIrParaCima();
                        carregarMapa();

                    } else if (estaNoTpRoxoA()) {
                        manterTpIrParaCima();
                        carregarMapa();

                    } else if (estaNoTpRoxoB()) {
                        manterTpIrParaCima();
                        carregarMapa();

                    } else if (estaNoTpVerdeA()) {
                        manterTpIrParaCima();
                        carregarMapa();

                    } else if (estaNoTpVerdeB()) {
                        manterTpIrParaCima();
                        carregarMapa();

                    } else if (sairDoTp()) {
                        manterTpIrParaCima();
                        carregarMapa();

                    } else if (sairDoBotao()) {
                        manterBotaoIrParaCima();
                        carregarMapa();                    

                    } else if (estaNumaPorta()) {
                        manterPortaIrParaCima();
                        carregarMapa();

                    } else {
                        irParaCima();
                        carregarMapa();
                    }
                } else if (checarEspinho(87)) {
                    morteEGameOver ();
                }
                break;
            case 83: // S
                if (checarEspacoVazio(83)|| checarEspacoChave(83) || checarPorta(83) || checarBotao(83) || checarTp(83)) {

                    if (estaNaChaveVermelha() && redDoor1 === lockedDoor) {
                        manterChaveIrParaBaixo();
                        carregarMapa();

                    } else if (estaNaChaveAzulClaro() && lightBlueDoor === lockedDoor) {
                        manterChaveIrParaBaixo();
                        carregarMapa();

                    } else if (estaNaChaveVerde() && greenDoor === lockedDoor) {
                        manterChaveIrParaBaixo();
                        carregarMapa();
                        
                    } else if (estaNoTpAmareloA()) {
                        manterTpIrParaBaixo();
                        carregarMapa();

                    } else if (estaNoTpAmareloB()) {
                        manterTpIrParaBaixo();
                        carregarMapa();

                    } else if (estaNoTpAzulClaroA()) {
                        manterTpIrParaBaixo();
                        carregarMapa();

                    } else if (estaNoTpAzulClaroB()) {
                        manterTpIrParaBaixo();
                        carregarMapa();

                    } else if (estaNoTpLaranjaA()) {
                        manterTpIrParaBaixo();
                        carregarMapa();

                    } else if (estaNoTpLaranjaB()) {
                        manterTpIrParaBaixo();
                        carregarMapa();

                    } else if (estaNoTpRoxoA()) {
                        manterTpIrParaBaixo();
                        carregarMapa();

                    } else if (estaNoTpRoxoB()) {
                        manterTpIrParaBaixo();
                        carregarMapa();

                    } else if (estaNoTpVerdeA()) {
                        manterTpIrParaBaixo();
                        carregarMapa();

                    } else if (estaNoTpVerdeB()) {
                        manterTpIrParaBaixo();
                        carregarMapa();

                    } else if (sairDoTp()) {
                        manterTpIrParaBaixo();
                        carregarMapa();

                    } else if (sairDoBotao()) {
                        manterBotaoIrParaBaixo();
                        carregarMapa();

                    } else if (estaNumaPorta()) {
                        manterPortaIrParaBaixo();
                        carregarMapa();

                    } else {
                        irParaBaixo();
                        carregarMapa();
                    }
                } else if (checarEspinho(83)) {
                    morteEGameOver ();
                }
                break;
            case 65: // A
                if (checarEspacoVazio(65) || checarEspacoChave(65) || checarPorta(65) || checarBotao(65) || checarTp(65) || checarParedeAtrvDir(65)) {

                    if (estaNaChaveVermelha() && redDoor1 === lockedDoor) {
                        manterChaveIrParaEsquerda();
                        carregarMapa();

                    } else if (estaNaChaveAzulClaro() && lightBlueDoor === lockedDoor) {
                        manterChaveIrParaEsquerda();
                        carregarMapa();

                    } else if (estaNaChaveVerde() && greenDoor === lockedDoor) {
                        manterChaveIrParaEsquerda();
                        carregarMapa();

                    } else if (estaNoTpAmareloA()) {
                        manterTpIrParaEsquerda();
                        carregarMapa();

                    } else if (estaNoTpAmareloB()) {
                        manterTpIrParaEsquerda();
                        carregarMapa();

                    } else if (estaNoTpAzulClaroA()) {
                        manterTpIrParaEsquerda();
                        carregarMapa();

                    } else if (estaNoTpAzulClaroB()) {
                        manterTpIrParaEsquerda();
                        carregarMapa();

                    } else if (estaNoTpLaranjaA()) {
                        manterTpIrParaEsquerda();
                        carregarMapa();

                    } else if (estaNoTpLaranjaB()) {
                        manterTpIrParaEsquerda();
                        carregarMapa();

                    } else if (estaNoTpRoxoA()) {
                        manterTpIrParaEsquerda();
                        carregarMapa();

                    } else if (estaNoTpRoxoB()) {
                        manterTpIrParaEsquerda();
                        carregarMapa();

                    } else if (estaNoTpVerdeA()) {
                        manterTpIrParaEsquerda();
                        carregarMapa();

                    } else if (estaNoTpVerdeB()) {
                        manterTpIrParaEsquerda();
                        carregarMapa();

                    } else if (sairDoTp()) {
                        manterTpIrParaEsquerda();
                        carregarMapa();

                    } else if (sairDoBotao()) {
                        manterBotaoIrParaEsquerda();
                        carregarMapa();
                    } else if (estaNumaPorta()) {
                        manterPortaIrParaEsquerda();
                        carregarMapa();
                    } else if (checarParedeAtrvDir(65)) {
                        passarParedeAtrvDir();
                        carregarMapa();
                    } else {
                        irParaEsquerda();
                        carregarMapa();
                    }
                } else if (checarEspinho(65)) {
                    morteEGameOver ();
                }
                break;
            case 68: // D
                if (checarEspacoVazio(68) || checarEspacoChave(68) || checarPorta(68) || checarBotao(68) || checarTp(68) || checarParedeAtrvEsq(68)) {

                    if (estaNaChaveVermelha() && redDoor1 === lockedDoor) {
                        manterChaveIrParaDireita();
                        carregarMapa();

                    } else if (estaNaChaveAzulClaro() && lightBlueDoor === lockedDoor) {
                        manterChaveIrParaDireita();
                        carregarMapa();

                    } else if (estaNaChaveVerde() && greenDoor === lockedDoor) {
                        manterChaveIrParaDireita();
                        carregarMapa();

                    } else if (estaNoTpAmareloA()) {
                        manterTpIrParaDireita();
                        carregarMapa();

                    } else if (estaNoTpAmareloB()) {
                        manterTpIrParaDireita();
                        carregarMapa();

                    } else if (estaNoTpAzulClaroA()) {
                        manterTpIrParaDireita();
                        carregarMapa();

                    } else if (estaNoTpAzulClaroB()) {
                        manterTpIrParaDireita();
                        carregarMapa();

                    } else if (estaNoTpLaranjaA()) {
                        manterTpIrParaDireita();
                        carregarMapa();

                    } else if (estaNoTpLaranjaB()) {
                        manterTpIrParaDireita();
                        carregarMapa();

                    } else if (estaNoTpRoxoA()) {
                        manterTpIrParaDireita();
                        carregarMapa();

                    } else if (estaNoTpRoxoB()) {
                        manterTpIrParaDireita();
                        carregarMapa();

                    } else if (estaNoTpVerdeA()) {
                        manterTpIrParaDireita();
                        carregarMapa();

                    } else if (estaNoTpVerdeB()) {
                        manterTpIrParaDireita();
                        carregarMapa();

                    } else if (sairDoTp()) {
                        manterTpIrParaDireita();
                        carregarMapa();

                    } else if (sairDoBotao()) {
                        manterBotaoIrParaDireita();
                        carregarMapa();
                    } else if (estaNumaPorta()) {
                        manterPortaIrParaDireita();
                        carregarMapa();
                    } else if (checarParedeAtrvEsq(68)) {
                        passarParedeAtrvEsq();
                        carregarMapa();
                    } else if (checarEspaçosFinais(68)) {
                        window.location.href = "../pages/vitoria.html"
                    } else {
                        irParaDireita();
                        carregarMapa();
                    }
                } else if (checarEspinho(68)) {
                    morteEGameOver ();
                }
                break;
            case 73: // I
                if(estaNaChaveVermelha()) {
                    redDoor1 = unlockedDoor;
                    redDoor2 = unlockedDoor;
                    fase03[fixedCoords.redDoor1.y][fixedCoords.redDoor1.x] = redDoor1;
                    fase03[fixedCoords.redDoor2.y][fixedCoords.redDoor2.x] = redDoor2;
                    carregarMapa();
                }
                if(estaNaChaveVerde()) {
                    greenDoor = unlockedDoor;
                    fase03[fixedCoords.greenDoor.y][fixedCoords.greenDoor.x] = greenDoor;
                    carregarMapa();
                }    
                if(estaNaChaveAzulClaro()) {
                    lightBlueDoor = unlockedDoor;
                    fase03[fixedCoords.lightBlueDoor.y][fixedCoords.lightBlueDoor.x] = lightBlueDoor;
                    carregarMapa();
                }                
                if(estaNoBotaoAzulEscuro()) {
                    for (let i = 1; i < 23; i++) {
                        if (i >= 1 && i <= 3) {
                            fase03[i][40] = ' ';
                        } else if (i === 20) {
                            fase03[i][49] = ' ';
                            fase03[i][50] = ' ';
                        } else if (i === 21 || i === 22) {
                            fase03[i][51] = ' ';
                        }
                    }
                    carregarMapa();
                }   
                if(estaNoBotaoRosa()) {
                    fase03[15][55] = ' ';
                    fase03[16][55] = ' ';
                    fase03[17][55] = ' ';
                    fase03[48][21] = ' ';
                    fase03[48][22] = ' ';
                    fase03[48][23] = ' ';
                    carregarMapa();
                }
                if(estaNoBotaoRoxo()) {
                    for (let i = 5; i <= 16; i++) {
                        if (i >= 5 && i <= 7) {
                            fase03[i][36] = ' ';
                        } else if (i === 12) {
                            fase03[i][5] = ' ';
                            fase03[i][6] = ' ';
                            fase03[i][7] = ' ';
                        } else if (i === 16) {
                            fase03[i][1] = ' ';
                            fase03[i][2] = ' ';
                            fase03[i][3] = ' ';
                        }                        
                    }
                    carregarMapa();
                }    
                if(estaNoBotaoVermeho()) {
                    for (let i = 28; i <= 31; i++) {
                        if (i >= 28 && i <= 30) {
                            fase03[i][55] = ' ';
                        } else if (i === 31) {
                            fase03[i][52] = ' ';
                            fase03[i][53] = ' ';
                            fase03[i][54] = ' ';                        
                        }                        
                    }
                    carregarMapa();
                } 
                if (estaNoTpAmareloA()) {
                    fase03[coordPlayer.y][coordPlayer.x] = tpAmareloA;
                    fase03[fixedCoords.tpAmareloB.y][fixedCoords.tpAmareloB.x] = player;
                    coordPlayer.x = fixedCoords.tpAmareloB.x
                    coordPlayer.y = fixedCoords.tpAmareloB.y
                    carregarMapa();
                } else if (estaNoTpAmareloB()) {
                    fase03[coordPlayer.y][coordPlayer.x] = tpAmareloB;
                    fase03[fixedCoords.tpAmareloA.y][fixedCoords.tpAmareloA.x] = player;
                    coordPlayer.x = fixedCoords.tpAmareloA.x
                    coordPlayer.y = fixedCoords.tpAmareloA.y
                    carregarMapa();
                }
                if (estaNoTpAzulClaroA()) {
                    fase03[coordPlayer.y][coordPlayer.x] = tpAzulClaroA;
                    fase03[fixedCoords.tpAzulClaroB.y][fixedCoords.tpAzulClaroB.x] = player;
                    coordPlayer.x = fixedCoords.tpAzulClaroB.x
                    coordPlayer.y = fixedCoords.tpAzulClaroB.y
                    carregarMapa();
                } else if (estaNoTpAzulClaroB()) {
                    fase03[coordPlayer.y][coordPlayer.x] = tpAzulClaroB;
                    fase03[fixedCoords.tpAzulClaroA.y][fixedCoords.tpAzulClaroA.x] = player;
                    coordPlayer.x = fixedCoords.tpAzulClaroA.x
                    coordPlayer.y = fixedCoords.tpAzulClaroA.y
                    carregarMapa();
                }
                if (estaNoTpLaranjaA()) {
                    fase03[coordPlayer.y][coordPlayer.x] = tpLaranjaA;
                    fase03[fixedCoords.tpLaranjaB.y][fixedCoords.tpLaranjaB.x] = player;
                    coordPlayer.x = fixedCoords.tpLaranjaB.x
                    coordPlayer.y = fixedCoords.tpLaranjaB.y
                    carregarMapa();
                } else if (estaNoTpLaranjaB()) {
                    fase03[coordPlayer.y][coordPlayer.x] = tpLaranjaB;
                    fase03[fixedCoords.tpLaranjaA.y][fixedCoords.tpLaranjaA.x] = player;
                    coordPlayer.x = fixedCoords.tpLaranjaA.x
                    coordPlayer.y = fixedCoords.tpLaranjaA.y
                    carregarMapa();
                }
                if (estaNoTpRoxoA()) {
                    fase03[coordPlayer.y][coordPlayer.x] = tpRoxoA;
                    fase03[fixedCoords.tpRoxoB.y][fixedCoords.tpRoxoB.x] = player;
                    coordPlayer.x = fixedCoords.tpRoxoB.x
                    coordPlayer.y = fixedCoords.tpRoxoB.y
                    carregarMapa();
                } else if (estaNoTpRoxoB()) {
                    fase03[coordPlayer.y][coordPlayer.x] = tpRoxoB;
                    fase03[fixedCoords.tpRoxoA.y][fixedCoords.tpRoxoA.x] = player;
                    coordPlayer.x = fixedCoords.tpRoxoA.x
                    coordPlayer.y = fixedCoords.tpRoxoA.y
                    carregarMapa();
                }
                if (estaNoTpVerdeA()) {
                    fase03[coordPlayer.y][coordPlayer.x] = tpVerdeA;
                    fase03[fixedCoords.tpVerdeB.y][fixedCoords.tpVerdeB.x] = player;
                    coordPlayer.x = fixedCoords.tpVerdeB.x;
                    coordPlayer.y = fixedCoords.tpVerdeB.y;
                    carregarMapa();
                } else if (estaNoTpVerdeB()) {
                    fase03[coordPlayer.y][coordPlayer.x] = tpVerdeB;
                    fase03[fixedCoords.tpVerdeA.y][fixedCoords.tpVerdeA.x] = player;
                    coordPlayer.x = fixedCoords.tpVerdeA.x
                    coordPlayer.y = fixedCoords.tpVerdeA.y
                    carregarMapa();
                }
    };
});

document.addEventListener("DOMContentLoaded", mapa);
document.addEventListener("DOMContentLoaded", carregarMapa);