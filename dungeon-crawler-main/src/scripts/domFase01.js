let fase01 = [];
const player = '&', lockedDoor = 'D', unlockedDoor = '=', key = '@';
let coordPlayer = {
    x: 1,
    y: 1,
};
let coordKey = {
    x: 2,
    y: 12,
}
let coordDoor = {
    x: 14,
    y: 1,
}

function mapa() {
    for (let i = 0; i < 15; i++) {
        fase01[i] = new Array(15);
    };
        
    for (let i = 0; i < 15; i++) {
        for(let j = 0; j < 15; j++) {
            switch (i) {
                case 1:
                    if (coordPlayer.x === j) {                        
                        fase01[i][j] = player;
                    }
                    if (j === 0) {
                        fase01[i][j] = '*';
                    } else if (j === 14) {
                        fase01[i][j] = lockedDoor;
                    } else {
                        fase01[i][j] = ' ';
                    }
                    break;
                case 2:
                    if (j === 0 || j === 14) {
                        fase01[i][j] = '*';
                    } else if (coordPlayer.x === i && coordPlayer.y === j) {                        
                        fase01[i][j] = player;
                    } else {
                        fase01[i][j] = ' ';
                    }
                    break;
                case 3:
                    if (j >= 11 && j <= 13) {
                        fase01[i][j] = ' ';
                    } else {
                        fase01[i][j] = '*';
                    }
                    break;
                case 4:
                    if (j === 0 || j === 14) {
                        fase01[i][j] = '*';
                    }  else if (coordPlayer.x === i && coordPlayer.y === j) {                        
                        fase01[i][j] = player;
                    } else {
                        fase01[i][j] = ' ';
                    }
                break;
                case 5:
                    if (j === 0 || j === 14) {
                        fase01[i][j] = '*';
                    }  else if (coordPlayer.x === i && coordPlayer.y === j) {                        
                        fase01[i][j] = player;
                    } else {
                        fase01[i][j] = ' ';
                    }
                    break;
                case 6:
                    if (j >= 1 && j <= 3) {
                        fase01[i][j] = ' '
                    }  else if (coordPlayer.x === i && coordPlayer.y === j) {                        
                        fase01[i][j] = player;
                    } else {
                        fase01[i][j] = '*'
                    }
                    break;
                case 7:
                    if (j === 0 || j === 14) {
                        fase01[i][j] = '*'
                    }  else if (coordPlayer.x === i && coordPlayer.y === j) {                        
                        fase01[i][j] = player;
                    } else {
                        fase01[i][j] = ' '
                    }
                    break;
                case 8:
                    if (j === 0 || j === 14) {
                        fase01[i][j] = '*';
                    } else if (coordPlayer.x === i && coordPlayer.y === j) {                        
                        fase01[i][j] = player;
                    } else {
                        fase01[i][j] = ' ';
                    }
                    break;
                case 9:
                    if (j >= 11 && j <= 13) {
                        fase01[i][j] = ' ';
                    } else if (coordPlayer.x === i && coordPlayer.y === j) {                        
                        fase01[i][j] = player;
                    } else {
                        fase01[i][j] = '*';
                    }
                    break;
                case 10:
                    if (j === 0 || j === 4 || j === 8 || j === 14) {
                        fase01[i][j] = '*'
                    } else if (coordPlayer.x === i && coordPlayer.y === j) {                        
                        fase01[i][j] = player;
                    } else {
                        fase01[i][j] = ' '
                    }
                    break;
                case 11:
                    if (j === 0 || j === 4 || j === 6 || j === 8 || j === 10 || j === 14) {
                        fase01[i][j] = '*'
                    } else if (coordPlayer.x === i && coordPlayer.y === j) {                        
                        fase01[i][j] = player;
                    } else {
                        fase01[i][j] = ' '
                    }
                    break;
                case 12:
                    if (j === 0 || j === 4 || j === 6 || j === 8 || j === 10 || j === 14) {
                        fase01[i][j] = '*'
                    } else if (j === 2) {
                        fase01[i][j] = key;
                    } else if (coordPlayer.x === i && coordPlayer.y === j) {                        
                        fase01[i][j] = player;
                    } else {
                        fase01[i][j] = ' '
                    }
                    break;
                case 13:
                    if (j === 0 || j === 6 || j === 10 || j === 14) {
                        fase01[i][j] = '*'
                    } else if (coordPlayer.x === i && coordPlayer.y === j) {                        
                        fase01[i][j] = player;
                    } else {
                        fase01[i][j] = ' '
                    }
                    break;
                default: fase01[i][j] = "*"
                    break;
            }
        }
    }; 
}

function checarEspacoVazio(direcao) {
    switch (direcao) {
        case 87:
            return fase01[coordPlayer.y - 1][coordPlayer.x] === ' ';
        case 83:
            return fase01[coordPlayer.y + 1][coordPlayer.x] === ' ';
        case 65:
            return fase01[coordPlayer.y][coordPlayer.x - 1] === ' ';
        case 68:
            return fase01[coordPlayer.y][coordPlayer.x + 1] === ' ';
    }
};

function checarEspacoChave(direcao) {
    switch (direcao) {
        case 87:
            return fase01[coordPlayer.y - 1][coordPlayer.x] === key;
        case 83:
            return fase01[coordPlayer.y + 1][coordPlayer.x] === key;
        case 65:
            return fase01[coordPlayer.y][coordPlayer.x - 1] === key;
        case 68:
            return fase01[coordPlayer.y][coordPlayer.x + 1] === key;
    }
};

function checarPorta(direcao) {
    switch (direcao) {
        case 87:
            return fase01[coordPlayer.y - 1][coordPlayer.x] === unlockedDoor;
        case 83:
            return fase01[coordPlayer.y + 1][coordPlayer.x] === unlockedDoor;
        case 65:
            return fase01[coordPlayer.y][coordPlayer.x - 1] === unlockedDoor;
        case 68:
            return fase01[coordPlayer.y][coordPlayer.x + 1] === unlockedDoor;
    }
};

function estaNaChaveEPortaTrancada() {
    return coordPlayer.x === coordKey.x && coordPlayer.y === coordKey.y && fase01[coordDoor.y][coordDoor.x] === lockedDoor;
};
function acimaDaChave() {
    return coordPlayer.x === coordKey.x && coordPlayer.y === coordKey.y;
};
function acimaDaPortaDestrancada() {
    return coordPlayer.x === coordDoor.x && coordPlayer.y === coordDoor.y;
};

function carregarMapa() {    
    const tela = document.querySelector('#tela-jogo');
    let linha = [];
    let coluna;

    tela.innerHTML = '';

    
    for (let i = 0; i < 15; i++) {
        linha = document.createElement('tr');
        for (let j = 0; j < 15; j++) {            
            coluna = document.createElement('td');
            coluna.innerHTML = `
                ${fase01[i][j]}
            `;
            linha.appendChild(coluna);
        };
        tela.appendChild(linha);
    };  
    
};

document.addEventListener ('keydown', (controles) => {
    switch (controles.keyCode) {
            case 87: // W
                if (checarEspacoVazio(87) || checarEspacoChave(87) || checarPorta(87)) {

                    if (coordPlayer.x === coordKey.x && coordPlayer.y === coordKey.y && fase01[coordDoor.y][coordDoor.x] === lockedDoor) {
                        fase01[coordPlayer.y][coordPlayer.x] = key;
                        fase01[coordPlayer.y - 1][coordPlayer.x] = player;
                        coordPlayer.y--;
                        carregarMapa();

                    } else {
                        fase01[coordPlayer.y][coordPlayer.x] = ' ';
                        fase01[coordPlayer.y - 1][coordPlayer.x] = player;
                        coordPlayer.y--;
                        carregarMapa();

                    }
                }
                break;
            case 83: // S
                if (checarEspacoVazio(83)|| checarEspacoChave(83) || checarPorta(83)) {

                    if (coordPlayer.x === coordKey.x && coordPlayer.y === coordKey.y && fase01[coordDoor.y][coordDoor.x] === lockedDoor) {
                        fase01[coordPlayer.y][coordPlayer.x] = key;
                        fase01[coordPlayer.y + 1][coordPlayer.x] = player;
                        coordPlayer.y++;
                        carregarMapa();

                    } else {
                        fase01[coordPlayer.y][coordPlayer.x] = ' ';
                        fase01[coordPlayer.y + 1][coordPlayer.x] = player;
                        coordPlayer.y++;
                        carregarMapa();

                    }
                }
                break;
            case 65: // A
                if (checarEspacoVazio(65) || checarEspacoChave(65) || checarPorta(65)) {

                    if (coordPlayer.x === coordKey.x && coordPlayer.y === coordKey.y && fase01[coordDoor.y][coordDoor.x] === lockedDoor) {
                        fase01[coordPlayer.y][coordPlayer.x] = key;
                        fase01[coordPlayer.y][coordPlayer.x - 1] = player;
                        coordPlayer.x--;
                        carregarMapa();

                    } else {
                        fase01[coordPlayer.y][coordPlayer.x] = ' ';
                        fase01[coordPlayer.y][coordPlayer.x - 1] = player;
                        coordPlayer.x--;
                        carregarMapa();
                    }
                }
                break;
            case 68: // D
                if (checarEspacoVazio(68) || checarEspacoChave(68) || checarPorta(68)) {

                    if (coordPlayer.x === coordKey.x && coordPlayer.y === coordKey.y && fase01[coordDoor.y][coordDoor.x] === lockedDoor) {
                        fase01[coordPlayer.y][coordPlayer.x] = key;
                        fase01[coordPlayer.y][coordPlayer.x + 1] = player;
                        coordPlayer.x++;                        
                        carregarMapa();

                    } else {
                        fase01[coordPlayer.y][coordPlayer.x] = ' ';
                        fase01[coordPlayer.y][coordPlayer.x + 1] = player;
                        coordPlayer.x++;
                        
                        carregarMapa();

                    }
                }
                break;
            case 73: // I
                if (acimaDaChave()) {
                    fase01[coordDoor.y][coordDoor.x] = unlockedDoor;
                    carregarMapa(); 
                }
                if (acimaDaPortaDestrancada()) {
                    alert('proxima fase')
                    window.location.href = '../pages/fase02.html';
                }
    };
});

document.addEventListener("DOMContentLoaded", mapa);
document.addEventListener("DOMContentLoaded", carregarMapa);