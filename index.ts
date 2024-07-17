import Forest from './model/forest';
import State from './model/state';
import config from './config/config.json';
async function main() {
    let forest: Forest = new Forest(config.height, config.width, config.proba, config.fires as Array<[number, number]>);
    let i = 1;
    initGrid(forest.height, forest.width);
    do {
        document.getElementById("title").textContent = "Étape "+i;
        fillGrid(forest);
        await sleep(config.sleep);
        i++;
    } while(forest.nextStep());
}

function fillGrid(forest: Forest) {
    eraseGrid();
    for(let i=0; i<forest.height; i++) {
        for(let j=0; j<forest.width; j++) {
            let newdiv = document.createElement("div");
            newdiv.setAttribute("class",State[forest.grid[i][j]]);
            document.getElementsByClassName("forest")[0].appendChild(newdiv);
        }
    }
}

function initGrid(height: number, width: number) {
    (document.getElementsByClassName("forest")[0] as HTMLElement).style.width = width*20+"px";
    (document.getElementsByClassName("forest")[0] as HTMLElement).style.height = height*20+"px";
}

function eraseGrid() {
    document.getElementsByClassName("forest")[0].textContent = '';
}

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

window.addEventListener("load", main);