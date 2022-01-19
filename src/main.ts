

class Enemy extends Phaser.GameObjects.Sprite {

    orientation: number;
    tile: Tile;

    constructor(scene: Phaser.Scene, tile: Tile) {
        super(scene, tile.x, tile.y, 'enemy');
        scene.add.existing(this);
    }
}

function rowToY(row) {
    return 200 + row*115;
}

function colToX(col) {
    return 300 + col*150;
}

class Tile extends Phaser.GameObjects.Sprite {

    color: number;
    enemy: Enemy | null;
    row: number;
    col: number;
    entrance: boolean;
    exit: boolean;

    constructor(scene: Phaser.Scene, row: number, col: number, color: number) {
        super(scene, colToX(col), rowToY(row), color ? 'tile01' : 'tile09');
        this.row = row;
        this.col = col;
        this.color = color;
        this.setScale(0.6);
        scene.add.existing(this);
    }

    flip(fast?: boolean) {

        if (this.color === 0) {
            this.anims.play(fast ? 'flip-white-instant' : 'flip-white');
            this.color = 1;
        } else {
            this.anims.play(fast ? 'flip-black-instant' : 'flip-black');
            this.color = 0;
        }
    }
}

class Player extends Phaser.GameObjects.Sprite {
    tile: Tile;
    constructor(scene: Phaser.Scene) {
        super(scene, 0, 0, 'player');
        scene.add.existing(this);
        this.setScale(0.6);
    }
}

let levels = {
    flipTutorial: [
        '     ',
        ' 101 ',
        'N101X',
        ' 101 ',
        '     '
    ],
    chaseTutorial: [
        '     ',
        ' 111 ',
        ' 101 ',
        'N111X',
        '     '
    ]
};

export class MainScene extends Phaser.Scene {

    grid: Tile[][];
    player: Player;
    
    constructor() {
        super('main');
    }

    create() {

        let level = levels.chaseTutorial


        this.player = new Player(this);
        this.player.setDepth(2);

        this.grid = [];
        for (let r = 0; r < level.length; r++) {
            let row = [];
            for (let c = 0; c < level.length; c++) {
                let type = level[r][c];
                
                if (type === ' ') {
                    row.push(null);
                } else {
                    let tile = new Tile(this, r, c, Number(type === 'N' || type === '1' || type === 'X'));

                    if (type === 'N' || type === 'n') {
                        tile.entrance = true;
                        this.player.tile = tile;
                        this.player.x = colToX(tile.col);
                        this.player.y = rowToY(tile.row);
                    }

                    if (type === 'X' || type === 'x') {
                        tile.exit = true;
                    }

                    row.push(tile);
                }
            }
            this.grid.push(row);
        }
        

        this.input.keyboard.on('keydown', this.onKeyDown, this);
    }

    onKeyDown(event) {
        if (event.key === ' ') {
            let leftCol = this.player.tile.col - 1;
            while (leftCol >= 0) {
                let leftTile = this.grid[this.player.tile.row][leftCol];
                if (leftTile) leftTile.flip();
                leftCol -= 1;
            }

            let rightCol = this.player.tile.col + 1;
            while (rightCol < this.grid[0].length) {
                console.log(rightCol);
                let rightTile = this.grid[this.player.tile.row][rightCol];
                if (rightTile) rightTile.flip();
                rightCol += 1;
            }

            let upRow = this.player.tile.row - 1;
            while (upRow >= 0) {
                let upTile = this.grid[upRow][this.player.tile.col];
                if (upTile) upTile.flip();
                upRow -= 1;
            }

            let downRow = this.player.tile.row + 1;
            while (downRow < this.grid.length) {
                let downTile = this.grid[downRow][this.player.tile.col];
                if (downTile) downTile.flip();
                downRow += 1;
            }
            
            this.player.tile.flip();

        }
        if (event.key === 'w') {
            let upRow = this.player.tile.row - 1;
            if (upRow >= 0) {
                let upTile = this.grid[upRow][this.player.tile.col];
                if (upTile && upTile.color === this.player.tile.color) {
                    this.player.tile = upTile;
                    this.player.x = colToX(upTile.col);
                    this.player.y = rowToY(upTile.row);
                }
            }
        }
        if (event.key === 'a') {
            let leftCol = this.player.tile.col - 1;
            if (leftCol >= 0) {
                let leftTile = this.grid[this.player.tile.row][leftCol];
                if (leftTile && leftTile.color === this.player.tile.color) {
                    this.player.tile = leftTile;
                    this.player.x = colToX(leftTile.col);
                    this.player.y = rowToY(leftTile.row);
                }
            }
        }
        if (event.key === 's') {
            let downRow = this.player.tile.row + 1;
            if (downRow < this.grid.length) {
                let downTile = this.grid[downRow][this.player.tile.col];
                if (downTile && downTile.color === this.player.tile.color) {
                    this.player.tile = downTile;
                    this.player.x = colToX(downTile.col);
                    this.player.y = rowToY(downTile.row);
                }
            }
        }
        if (event.key === 'd') {
            let rightCol = this.player.tile.col + 1;
            if (rightCol < this.grid[0].length) {
                let rightTile = this.grid[this.player.tile.row][rightCol];
                if (rightTile && rightTile.color === this.player.tile.color) {
                    this.player.tile = rightTile;
                    this.player.x = colToX(rightTile.col);
                    this.player.y = rowToY(rightTile.row);
                }
            }
        }
        
    }

    update(time: number, delta: number) {
        super.update(time, delta);
    }
}

