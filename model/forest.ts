import State from './state'
export default class Forest {
    private _height:number;
    private _width:number;
    private _grid:Array<Array<State>>;
    private _proba:number;

    constructor(height: number, width: number, proba: number, fireCells: Array<[number, number]>=null) {
        this._height = height;
        this._width = width;
        this._grid = new Array;
        this._proba = proba;
        for(let i=0; i<height; i++) {
            this._grid[i]=[];
            for(let j=0; j<width; j++) {
                if ((fireCells != null) && (fireCells.find((cell) => (cell[0] === i) && (cell[1] === j)))) {
                    this._grid[i][j] = State.fire;
                } else {
                    this._grid[i][j] = State.noFire;
                }

            }
        }
    }

    public nextStep() {
        let fireCells: Array<[number, number]> = [];
        let oldGrid = structuredClone(this._grid);
        for(let i=0; i<this._height; i++) {
            for(let j=0; j<this._width; j++) {
                if(this._grid[i][j] === State.fire) {
                    fireCells.push([i,j]);
                    this._grid[i][j] = State.ashes;
                }
            }
        }
        for(let k=0; k<fireCells.length; k++) {
            let i=fireCells[k][0];
            let j=fireCells[k][1];
            this.updateCell(i, j-1);
            this.updateCell(i, j+1);
            this.updateCell(i-1, j);
            this.updateCell(i+1, j);
        }
        return !this.compGrids(oldGrid, this._grid);
    }

    private compGrids(grid1: Array<Array<State>>, grid2: Array<Array<State>>): boolean {
        if(grid1.length !== grid2.length) {
            return false;
        }
        for(let i=0; i<grid1.length; i++) {
            if(grid1[i].length !== grid2[i].length) {
                return false;
            }
            for(let j=0; j<grid1[i].length; j++) {
                if(grid1[i][j] !== grid2[i][j]) {
                    return false;
                }
            }
        }
        return true;
    }

    private updateCell(i: number, j: number) {
        if ((this._grid[i] != null) && (this._grid[i] != null) && (this._grid[i][j] === State.noFire)) {
            if(Math.random()<this._proba) {
                this._grid[i][j] = State.fire;
            }
        }
    }

    public get height(): number {
        return this._height;
    }

    public get width(): number {
        return this._width;
    }

    public get proba(): number {
        return this._proba;
    }

    public get grid(): Array<Array<State>> {
        return this._grid;
    }

    public set height(height: number) {
        this._height = height;
    }

    public set width(width: number) {
        this._width = width;
    }

    public set proba(proba: number) {
        this._proba = proba;
    }

}

