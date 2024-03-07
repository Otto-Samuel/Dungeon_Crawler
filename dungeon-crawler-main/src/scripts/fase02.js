let fase02 = [], fase02Início1morte = [], fase02Início2morte = [], vidas = 3;
let redDoor, purpleDoor, pinkDoor;
const player = '&', spikes = '#', key = '@', lockedDoor = 'D', unlockedDoor = '=', button = 'O';
const redKey = key, purpleKey = key, pinkKey = key;
const  greenButton = button, darkBlueButton = button, lightBlueButton = button, yellowButton = button, orangeButton = button;
let coordPlayer = {x: 2, y: 2,};
const fixedCoords = {
    redDoor: {x: 9, y: 16},
    purpleDoor: {x: 15, y: 11},
    finalDoor: {x: 29, y: 14},
    redKey: {x: 10, y: 11},
    purpleKey: {x: 20, y: 27},
    pinkKey: {x: 28, y: 11},
    greenButton: {x: 2, y: 14},
    darkBlueButton: {x: 5, y: 20},
    lightBlueButton: {x: 15, y: 14},
    yellowButton: {x: 28, y: 17},
    orangeButton: {x: 21, y: 1}
};
for (let i = 0; i < 30; i++) {
    fase02[i] = new Array(30);
    fase02Início1morte[i] = new Array(30);
    fase02Início2morte[i] = new Array(30);
};
    
for (let i = 0; i < 30; i++) {
    for(let j = 0; j < 30; j++) {
        switch (i) {
            case 1:
                if (j === 0 || j === 12 || j === 22 || j === 26 || j === 29) {
                    fase02[i][j] = '*';
                } else if (j === fixedCoords.orangeButton.x) {
                    fase02[i][j] = orangeButton;
                } else {
                    fase02[i][j] = ' ';
                }
                break;
            case 2:
                if (j === 0 || j === 12 || j === 22 || j === 26 || j === 29) {
                    fase02[i][j] = '*';
                } else if (j === coordPlayer.x) {
                    fase02[i][j] = player;
                } else {
                    fase02[i][j] = ' ';
                }
                break;
            case 3: 
                if (j === 0 || j === 12 || j >= 16 && j <= 22 || j >= 26 && j <= 29) {
                    fase02[i][j] = '*';
                } else {
                    fase02[i][j] = ' ';
                }
                break;
            case 4:
                if (j >= 0 && j <= 8 || j === 12 || j === 26 || j === 29 ) {
                    fase02[i][j] = '*';
                } else {
                    fase02[i][j] = ' ';
                }
                break;
            case 5:
                if (j === 0 || j === 12 || j === 26 || j === 29) {
                    fase02[i][j] = '*';
                } else {
                    fase02[i][j] = ' ';
                }
                break;
            case 6:
                if (j === 0 || j === 12 || j === 26 || j === 29) {
                    fase02[i][j] = '*';
                } else {
                    fase02[i][j] = ' ';
                }
                break;
            case 7:
                if (j === 0 || j >= 4 && j <= 22 || j === 26 || j === 29) {
                    fase02[i][j] = '*';
                } else {
                    fase02[i][j] = ' ';
                }
                break;
            case 8:
                if (j === 0 || j === 4 || j === 12 || j === 22 || j === 26 || j === 29) {
                    fase02[i][j] = '*';
                } else {
                    fase02[i][j] = ' ';
                }
                break;
            case 9:
                if (j === 0 || j === 4 || j === 12 || j === 22 || j === 26 || j === 29) {
                    fase02[i][j] = '*';
                } else {
                    fase02[i][j] = ' ';
                }
                break;
            case 10:
                if (j === 0 || j === 4 || j === 12 || j === 22 || j === 26 || j === 29) {
                    fase02[i][j] = '*';
                } else {
                    fase02[i][j] = ' ';
                }
                break;
            case 11:
                if (j === 0 || j === 4 || j >= 12 && j <= 14 || j >= 16 && j <= 18 || j === 22 || j === 26 || j === 29) {
                    fase02[i][j] = '*';
                } else if (j === 15) {
                    purpleDoor = lockedDoor;
                    fase02[i][j] = purpleDoor;
                } else if (j === fixedCoords.pinkKey.x) {
                    fase02[i][j] = pinkKey;
                } else if (j === fixedCoords.redKey.x) {
                    fase02[i][j] = redKey;
                } else {
                    fase02[i][j] = ' ';
                }
                break;
            case 12:
                if (j === 0 || j === 4 || j === 12 || j === 18 || j >= 22 && j <= 29) {
                    fase02[i][j] = '*';
                } else {
                    fase02[i][j] = ' ';
                }
                break;
            case 13:
                if (j === 0 || j === 4 || j === 12 || j === 18 || j === 22 || j === 29) {
                    fase02[i][j] = '*';
                } else {
                    fase02[i][j] = ' ';
                }
                break;
            case 14:
                if (j === 0 || j === 4 || j === 12 || j === 18 || j === 22) {
                    fase02[i][j] = '*';
                } else if (j === fixedCoords.greenButton.x) {
                    fase02[i][j] = greenButton;
                } else if (j === fixedCoords.lightBlueButton.x) {
                    fase02[i][j] = lightBlueButton;
                } else if (j === fixedCoords.finalDoor.x) {
                    pinkDoor = lockedDoor;
                    fase02[i][j] = pinkDoor;
                } else {
                    fase02[i][j] = ' ';
                }
                break;
            case 15:
                if (j === 0 || j === 4 || j === 12 || j === 18 || j === 22 || j === 29) {
                    fase02[i][j] = '*';
                } else {
                    fase02[i][j] = ' ';
                }
                break;
            case 16:
                if (j >= 0 && j <= 8 || j >= 10 && j <= 18 || j === 22 || j >= 26 && j <= 29) {
                    fase02[i][j] = '*';
                } else if (j === 9) {
                    redDoor = lockedDoor;
                    fase02[i][j] = redDoor;
                } else {
                    fase02[i][j] = ' ';
                }
                break;
            case 17:
                if (j === 0 || j === 7 || j === 11 || j === 22 || j === 26 || j === 29) {
                    fase02[i][j] = '*';
                } else if (j === fixedCoords.yellowButton.x) {
                    fase02[i][j] = yellowButton;
                } else {
                    fase02[i][j] = ' ';
                }
                break;
            case 18:
                if (j === 0 || j === 7 || j === 11 || j === 22 || j === 26 || j === 29) {
                    fase02[i][j] = '*';
                } else {
                    fase02[i][j] = ' ';
                }
                break;
            case 19:
                if (j === 0 || j === 3 || j === 7 || j === 11 || j >= 15 && j <= 22 || j === 26 || j === 29) {
                    fase02[i][j] = '*';
                } else {
                    fase02[i][j] = ' ';
                }
                break;
            case 20:
                if (j === 0 || j === 3 || j === 7 || j === 11 || j === 22 || j === 26 || j === 29) {
                    fase02[i][j] = '*';
                } else if (j === fixedCoords.darkBlueButton.x) {
                    fase02[i][j] = darkBlueButton;
                } else {
                    fase02[i][j] = ' ';
                }
                break;
            case 21:
                if (j === 0 || j === 3 || j === 7 || j === 11 || j === 22 || j === 26 || j === 29) {
                    fase02[i][j] = '*';
                } else {
                    fase02[i][j] = ' ';
                }
                break;
            case 22:
                if (j === 0 || j >= 3 && j <= 7 || j === 11 || j >= 15 && j <= 19 || j === 22 || j === 26 || j === 29 ) {
                    fase02[i][j] = '*';
                } else {
                    fase02[i][j] = ' ';
                }
                break;
            case 23:
                if (j === 0 || j === 11 || j === 15 || j === 22 || j === 29) {
                    fase02[i][j] = '*';
                } else {
                    fase02[i][j] = ' ';
                }
            case 24:
                if (j === 0 || j === 11 || j === 15 || j === 22 || j === 29) {
                    fase02[i][j] = '*';
                } else {
                    fase02[i][j] = ' ';
                }
                break;
            case 25:
                if (j === 0 || j === 11 || j === 15 || j >= 18 && j <= 22 || j === 29) {
                    fase02[i][j] = '*';
                } else {
                    fase02[i][j] = ' ';
                }
                break;
            case 26:
                if (j === 0 || j === 11 || j === 15 || j === 22 || j === 29) {
                    fase02[i][j] = '*';
                } else {
                    fase02[i][j] = ' ';
                }
                break;
            case 27:
                if (j === 0 || j === 11 || j === 15 || j === 22 || j === 29) {
                    fase02[i][j] = '*';
                } else if (j === fixedCoords.purpleKey.x) {
                    fase02[i][j] =  purpleKey;
                } else {
                    fase02[i][j] = ' ';
                }
                break;
            case 28:
                if (j === 0 || j === 11 || j === 15 || j === 22 || j === 29) {
                    fase02[i][j] = '*';
                } else {
                    fase02[i][j] = ' ';
                }
                break;
            default:
                fase02[i][j] = '*';
                break;
        }
    } 
};
for (let i = 0; i < 30; i++) {
    for(let j = 0; j < 30; j++) {
        fase02Início1morte[i][j] = fase02[i][j];
        fase02Início2morte[i][j] = fase02[i][j];
    }
};

console.log(fase02);

function checarEspacoVazio(direcao) {
    switch (direcao) {
        case 87:
            return fase02[coordPlayer.y - 1][coordPlayer.x] === ' ';
        case 83:
            return fase02[coordPlayer.y + 1][coordPlayer.x] === ' ';
        case 65:
            return fase02[coordPlayer.y][coordPlayer.x - 1] === ' ';
        case 68:
            return fase02[coordPlayer.y][coordPlayer.x + 1] === ' ';
    }
};

function checarEspinho(direcao) {
    switch (direcao) {
        case 87:
            return fase02[coordPlayer.y - 1][coordPlayer.x] === spikes;
        case 83:
            return fase02[coordPlayer.y + 1][coordPlayer.x] === spikes;
        case 65:
            return fase02[coordPlayer.y][coordPlayer.x - 1] === spikes;
        case 68:
            return fase02[coordPlayer.y][coordPlayer.x + 1] === spikes;
    }
}

function morteEGameOver () {
    vidas--;
    if (vidas === 0) {
        alert('FIM DE JOGO');
    } else if (vidas === 2) {
        fase02[coordPlayer.y][coordPlayer.x] = ' ';
        coordPlayer.x = 2;
        coordPlayer.y = 2;
        fase02 = fase02Início1morte;
        console.clear();
        console.log(fase02);  
    } else if(vidas === 1) {
        fase02[coordPlayer.y][coordPlayer.x] = ' ';
        coordPlayer.x = 2;
        coordPlayer.y = 2;
        fase02 = fase02Início2morte;
        console.clear();
        console.log(fase02);  
    }
}

function checarEspacoChave(direcao) {
    switch (direcao) {
        case 87:
            return fase02[coordPlayer.y - 1][coordPlayer.x] === key;
        case 83:
            return fase02[coordPlayer.y + 1][coordPlayer.x] === key;
        case 65:
            return fase02[coordPlayer.y][coordPlayer.x - 1] === key;
        case 68:
            return fase02[coordPlayer.y][coordPlayer.x + 1] === key;
    }
};

function checarPorta(direcao) {
    switch (direcao) {
        case 87:
            return fase02[coordPlayer.y - 1][coordPlayer.x] === unlockedDoor;
        case 83:
            return fase02[coordPlayer.y + 1][coordPlayer.x] === unlockedDoor;
        case 65:
            return fase02[coordPlayer.y][coordPlayer.x - 1] === unlockedDoor;
        case 68:
            return fase02[coordPlayer.y][coordPlayer.x + 1] === unlockedDoor;
    }
};

function checarBotao(direcao) {
    switch(direcao) {
        case 87:
            return fase02[coordPlayer.y - 1][coordPlayer.x] === button;
        case 83:
            return fase02[coordPlayer.y + 1][coordPlayer.x] === button;
        case 65:
            return fase02[coordPlayer.y][coordPlayer.x - 1] === button;
        case 68:
            return fase02[coordPlayer.y][coordPlayer.x + 1] === button;
    }
}

function estaNaChaveVermelha() {
    return coordPlayer.x === fixedCoords.redKey.x && coordPlayer.y === fixedCoords.redKey.y;
};

function estaNaChaveRoxa() {
    return coordPlayer.x === fixedCoords.purpleKey.x && coordPlayer.y === fixedCoords.purpleKey.y;
};

function estaNaChaveRosa() {
    return coordPlayer.x === fixedCoords.pinkKey.x && coordPlayer.y === fixedCoords.pinkKey.y;
};

function estaNoBotaoVerde() {
    return coordPlayer.x === fixedCoords.greenButton.x && coordPlayer.y === fixedCoords.greenButton.y;
};

function estaNoBotaoAzulEscuro() {
    return coordPlayer.x === fixedCoords.darkBlueButton.x && coordPlayer.y === fixedCoords.darkBlueButton.y;
};

function estaNoBotaoAzulClaro() {
    return coordPlayer.x === fixedCoords.lightBlueButton.x && coordPlayer.y === fixedCoords.lightBlueButton.y;
};

function estaNoBotaoAmarelo() {
    return coordPlayer.x === fixedCoords.yellowButton.x && coordPlayer.y === fixedCoords.yellowButton.y;
};

function estaNoBotaoLaranja() {
    return coordPlayer.x === fixedCoords.orangeButton.x && coordPlayer.y === fixedCoords.orangeButton.y;
};

function estaNumaPorta() {
    if (coordPlayer.x === fixedCoords.redDoor.x && coordPlayer.y === fixedCoords.redDoor.y) {
        return true
    } else if (coordPlayer.x === fixedCoords.purpleDoor.x && coordPlayer.y === fixedCoords.purpleDoor.y) {
        return true
    }
}

function estaNaPortaFinal() {
    return coordPlayer.x === fixedCoords.finalDoor.x && coordPlayer.y === fixedCoords.finalDoor.y;
};

function manterChaveIrParaCima() {
    fase02[coordPlayer.y][coordPlayer.x] = key;
    fase02[coordPlayer.y - 1][coordPlayer.x] = player;
    coordPlayer.y--;
    console.clear();
    console.log(fase02);
};

function irParaCima() {
    fase02[coordPlayer.y][coordPlayer.x] = ' ';
    fase02[coordPlayer.y - 1][coordPlayer.x] = player;
    coordPlayer.y--;
    console.clear();
    console.log(coordPlayer.y)
    console.log(fase02);
};

function manterChaveIrParaBaixo() {
    fase02[coordPlayer.y][coordPlayer.x] = key;
    fase02[coordPlayer.y + 1][coordPlayer.x] = player;
    coordPlayer.y++;
    console.clear();
    console.log(fase02);
};

function irParaBaixo() {
    fase02[coordPlayer.y][coordPlayer.x] = ' ';
    fase02[coordPlayer.y + 1][coordPlayer.x] = player;
    coordPlayer.y++;
    console.clear();
    console.log(fase02);
};

function manterChaveIrParaEsquerda() {
    fase02[coordPlayer.y][coordPlayer.x] = key;
    fase02[coordPlayer.y][coordPlayer.x - 1] = player;
    coordPlayer.x--;
    console.clear();
    console.log(fase02);
};

function irParaEsquerda() {
    fase02[coordPlayer.y][coordPlayer.x] = ' ';
    fase02[coordPlayer.y][coordPlayer.x - 1] = player;
    coordPlayer.x--;
    console.clear();
    console.log(fase02);
}

function manterChaveIrParaDireita() {
    fase02[coordPlayer.y][coordPlayer.x] = key;
    fase02[coordPlayer.y][coordPlayer.x + 1] = player;
    coordPlayer.x++;
    console.clear();
    console.log(fase02);
}

function irParaDireita() {
    fase02[coordPlayer.y][coordPlayer.x] = ' ';
    fase02[coordPlayer.y][coordPlayer.x + 1] = player;
    coordPlayer.x++;
    console.clear();
    console.log(fase02);
}
function manterBotaoIrParaCima() {
    fase02[coordPlayer.y][coordPlayer.x] = button;
    fase02[coordPlayer.y - 1][coordPlayer.x] = player;
    coordPlayer.y--;
    console.clear();
    console.log(coordPlayer.y)
    console.log(fase02);
}
function manterBotaoIrParaBaixo() {
    fase02[coordPlayer.y][coordPlayer.x] = button;
    fase02[coordPlayer.y + 1][coordPlayer.x] = player;
    coordPlayer.y++;
    console.clear();
    console.log(fase02);
}
function manterBotaoIrParaEsquerda() {
    fase02[coordPlayer.y][coordPlayer.x] = button;
    fase02[coordPlayer.y][coordPlayer.x - 1] = player;
    coordPlayer.x--;
    console.clear();
    console.log(fase02);
}
function manterBotaoIrParaDireita() {
    fase02[coordPlayer.y][coordPlayer.x] = button;
    fase02[coordPlayer.y][coordPlayer.x + 1] = player;
    coordPlayer.x++;
    console.clear();
    console.log(fase02);
}
function sairDoBotao() {
    if (estaNoBotaoVerde() || estaNoBotaoAzulEscuro() || estaNoBotaoAzulClaro() || estaNoBotaoAmarelo() || estaNoBotaoLaranja()) {
        return true;
    }
}
function manterPortaIrParaCima() {
    fase02[coordPlayer.y][coordPlayer.x] = unlockedDoor;
    fase02[coordPlayer.y - 1][coordPlayer.x] = player;
    coordPlayer.y--;
    console.clear();
    console.log(coordPlayer.y)
    console.log(fase02);
}
function manterPortaIrParaBaixo() {
    fase02[coordPlayer.y][coordPlayer.x] = unlockedDoor;
    fase02[coordPlayer.y + 1][coordPlayer.x] = player;
    coordPlayer.y++;
    console.clear();
    console.log(fase02);
}
function manterPortaIrParaEsquerda() {
    fase02[coordPlayer.y][coordPlayer.x] = unlockedDoor;
    fase02[coordPlayer.y][coordPlayer.x - 1] = player;
    coordPlayer.x--;
    console.clear();
    console.log(fase02);
}
function manterPortaIrParaDireita() {
    fase02[coordPlayer.y][coordPlayer.x] = unlockedDoor;
    fase02[coordPlayer.y][coordPlayer.x + 1] = player;
    coordPlayer.x++;
    console.clear();
    console.log(fase02);
}

document.addEventListener ('keydown', (controles) => {
    switch (controles.keyCode) {
            case 87: // W
                if (checarEspacoVazio(87) || checarEspacoChave(87) || checarPorta(87) || checarBotao(87)) {

                    if (estaNaChaveVermelha() && redDoor === lockedDoor) {
                        manterChaveIrParaCima();

                    } else if (estaNaChaveRoxa() && purpleDoor === lockedDoor) {
                        manterChaveIrParaCima();

                    } else if (estaNaChaveRosa() && pinkDoor === lockedDoor) {
                        manterChaveIrParaCima();

                    } else if (sairDoBotao()) {
                        manterBotaoIrParaCima();

                    } else if (estaNumaPorta()) {
                        manterPortaIrParaCima();

                    } else {
                        irParaCima();
                    }
                } else if (checarEspinho(87)) {
                    morteEGameOver ();
                }
                break;
            case 83: // S
                if (checarEspacoVazio(83)|| checarEspacoChave(83) || checarPorta(83) || checarBotao(83)) {

                    if (estaNaChaveVermelha() && redDoor === lockedDoor) {
                        manterChaveIrParaBaixo();

                    } else if (estaNaChaveRoxa() && purpleDoor === lockedDoor) {
                        manterChaveIrParaBaixo();

                    } else if (estaNaChaveRosa() && pinkDoor === lockedDoor) {
                        manterChaveIrParaBaixo();

                    } else if (sairDoBotao()) {
                        manterBotaoIrParaBaixo();

                    } else if (estaNumaPorta()) {
                        manterPortaIrParaBaixo();

                    } else {
                        irParaBaixo();
                    }
                } else if (checarEspinho(83)) {
                    console.log('cu');
                    morteEGameOver ();
                }
                break;
            case 65: // A
                if (checarEspacoVazio(65) || checarEspacoChave(65) || checarPorta(65) || checarBotao(65)) {

                    if (estaNaChaveVermelha() && redDoor === lockedDoor) {
                        manterChaveIrParaEsquerda();

                    } else if (estaNaChaveRoxa() && purpleDoor === lockedDoor) {
                        manterChaveIrParaEsquerda();

                    } else if (estaNaChaveRosa() && pinkDoor === lockedDoor) {
                        manterChaveIrParaEsquerda();

                    } else if (sairDoBotao()) {
                        manterBotaoIrParaEsquerda();
                    } else if (estaNumaPorta()) {
                        manterBotaoIrParaEsquerda();
                    } else {
                        irParaEsquerda();
                    }
                } else if (checarEspinho(65)) {
                    morteEGameOver ();
                }
                break;
            case 68: // D
                if (checarEspacoVazio(68) || checarEspacoChave(68) || checarPorta(68) || checarBotao(68)) {

                    if (estaNaChaveVermelha() && redDoor === lockedDoor) {
                        manterChaveIrParaDireita();

                    } else if (estaNaChaveRoxa() && purpleDoor === lockedDoor) {
                        manterChaveIrParaDireita();

                    } else if (estaNaChaveRosa() && pinkDoor === lockedDoor) {
                        manterChaveIrParaDireita();

                    } else if (sairDoBotao()) {
                        manterBotaoIrParaDireita();
                    } else if (estaNumaPorta()) {
                        manterPortaIrParaDireita();
                    } else {
                        irParaDireita();
                    }
                } else if (checarEspinho(68)) {
                    morteEGameOver ();
                }
                break;
            case 73: // I
                if(estaNaChaveVermelha()) {
                    redDoor = unlockedDoor;
                    fase02[fixedCoords.redDoor.y][fixedCoords.redDoor.x] = redDoor;
                    console.clear();
                    console.log(fase02); 
                }
                if(estaNaChaveRosa()) {
                    finalDoor = unlockedDoor;
                    fase02[fixedCoords.finalDoor.y][fixedCoords.finalDoor.x] = finalDoor;
                    console.clear();
                    console.log(fase02); 
                }
                if(estaNaChaveRoxa()) {
                    purpleDoor = unlockedDoor;
                    fase02[fixedCoords.purpleDoor.y][fixedCoords.purpleDoor.x] = purpleDoor;
                    console.clear();
                    console.log(fase02); 
                }                    
                               
                if(estaNoBotaoAmarelo()) {
                    for (let j = 14; j <= 25; j++) {
                        if (j == 14 || j == 15) {
                            fase02[3][j] = spikes;
                            
                        } else if (j === 16) {
                            fase02[5][j] = spikes;
                            fase02[6][j] = spikes;
                        }
                        if (j === 20) {
                            fase02[4][j] = spikes;
                            fase02[5][j] = spikes;
                        } 
                        if (j === 23 || j === 24 || j === 25) {
                            fase02[12][j] = ' ';
                        }
                        console.clear();
                        console.log(fase02); 
                    }   
                }
                if(estaNoBotaoAzulClaro()) {
                    for (let j = 17; j < 29; j++) {
                        if (j >= 18 && j < 20) {
                            fase02[10][j] = spikes;
                            if (j === 19) {
                            fase02[11][j] = spikes;
                            }
                        } else if (j === 22) {
                            fase02[13][j] = ' ';
                            fase02[14][j] = ' ';
                            fase02[15][j] = ' ';
                        }
                        if (j === 25) {
                            for (let i = 23; i <= 27; i++) {
                                fase02[i][25] = spikes;
                            }
                        } 
                        if (j === 26) {
                            fase02[23][j] = spikes;
                            fase02[27][j] = spikes;
                        }
                        if (j === 27 || j === 28) {
                            fase02[25][j] = spikes;
                        }
                    }                    
                    console.clear;
                    console.log(fase02); 
                }
                if(estaNoBotaoAzulEscuro()) {
                    for (let i = 22; i <= 28; i++) {
                        if (i === 22) {
                            fase02[i][13] = spikes;
                            fase02[i][19] = spikes;
                        } else if (i === 23 || i === 24) {
                            fase02[i][3] = spikes;
                            fase02[i][13] = spikes;
                        } else if (i === 25) {
                            fase02[i][3] = spikes;
                            fase02[i][13] = spikes;
                            fase02[i][18] = spikes;
                        } else if (i === 26 || i === 28) {
                            fase02[i][9] = spikes;
                            fase02[i][11] = ' ';
                        } else if (i === 27) {
                            fase02[i][9] = spikes;
                            fase02[i][11] = spikes;
                        }
                    }
                    console.clear();
                    console.log(fase02);
                }   
                if(estaNoBotaoLaranja()) {
                    fase02[4][26] = ' ';
                    fase02[5][26] = ' ';
                    console.clear();
                    console.log(fase02);
                }
                if(estaNoBotaoVerde()) {
                    for (let j = 5; j <= 11; j++) {
                        if (j <= 8) {
                            fase02[7][j] = spikes;
                        } else {
                            fase02[7][j] = ' ';
                            fase02[13][j] = spikes;
                        }
                    }
                    for (let i = 10; i <= 13; i++) {
                        fase02[i][8] = spikes;
                    }
                    console.clear;
                    console.log(fase02); 
                }    
                
                if (estaNaPortaFinal()) {
                    alert('proxima fase')
                }
    };
});