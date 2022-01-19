export class LoadScene extends Phaser.Scene {

    constructor() {
        super({
            key: 'load'
        });
    }

    preload() {
        this.add.text(20, 20, 'Loading...');
        this.load.image('tile01', 'img/01.png');
        this.load.image('tile02', 'img/02.png');
        this.load.image('tile03', 'img/03.png');
        this.load.image('tile04', 'img/04.png');
        this.load.image('tile05', 'img/05.png');
        this.load.image('tile06', 'img/06.png');
        this.load.image('tile07', 'img/07.png');
        this.load.image('tile08', 'img/08.png');
        this.load.image('tile09', 'img/09.png');
        this.load.image('tile10', 'img/10.png');
        this.load.image('tile11', 'img/11.png');
        this.load.image('tile12', 'img/12.png');
        this.load.image('tile13', 'img/13.png');
        this.load.image('tile14', 'img/14.png');
        this.load.image('tile15', 'img/15.png');
        this.load.image('tile16', 'img/16.png');
        this.load.image('player', 'img/player.png');
        this.load.image('enemy', 'img/enemy.png');
    }

    create() {

        this.anims.create({
            key: 'flip-black',
            frames: [
                { key: 'tile16', frame: null },
                { key: 'tile15', frame: null },
                { key: 'tile15', frame: null },
                { key: 'tile15', frame: null },
                { key: 'tile01', frame: null },
                { key: 'tile03', frame: null },
                { key: 'tile04', frame: null },
                { key: 'tile05', frame: null },
                { key: 'tile06', frame: null },
                { key: 'tile07', frame: null },
                { key: 'tile09', frame: null },
                { key: 'tile11', frame: null },
                { key: 'tile11', frame: null },
                { key: 'tile10', frame: null },
                { key: 'tile09', frame: null },
            ],
            frameRate: 30
        });

        this.anims.create({
            key: 'ready-black',
            frames: [
                { key: 'tile16', frame: null },
                { key: 'tile15', frame: null }
            ],
            frameRate: 30
        });

        this.anims.create({
            key: 'flip-black-immediate',
            frames: [
                { key: 'tile01', frame: null },
                { key: 'tile03', frame: null },
                { key: 'tile04', frame: null },
                { key: 'tile05', frame: null },
                { key: 'tile06', frame: null },
                { key: 'tile07', frame: null },
                { key: 'tile09', frame: null },
                { key: 'tile11', frame: null },
                { key: 'tile11', frame: null },
                { key: 'tile10', frame: null },
                { key: 'tile09', frame: null },
            ],
            frameRate: 30
        });

        this.anims.create({
            key: 'flip-white',
            frames: [
                { key: 'tile08', frame: null },
                { key: 'tile07', frame: null },
                { key: 'tile07', frame: null },
                { key: 'tile07', frame: null },
                { key: 'tile09', frame: null },
                { key: 'tile11', frame: null },
                { key: 'tile12', frame: null },
                { key: 'tile13', frame: null },
                { key: 'tile14', frame: null },
                { key: 'tile15', frame: null },
                { key: 'tile01', frame: null },
                { key: 'tile03', frame: null },
                { key: 'tile03', frame: null },
                { key: 'tile02', frame: null },
                { key: 'tile01', frame: null },
            ],
            
            frameRate: 30
        });

        this.anims.create({
            key: 'ready-white',
            frames: [
                { key: 'tile08', frame: null },
                { key: 'tile07', frame: null }
            ],
            
            frameRate: 30
        });

        this.anims.create({
            key: 'flip-white-immediate',
            frames: [
                { key: 'tile09', frame: null },
                { key: 'tile11', frame: null },
                { key: 'tile12', frame: null },
                { key: 'tile13', frame: null },
                { key: 'tile14', frame: null },
                { key: 'tile15', frame: null },
                { key: 'tile01', frame: null },
                { key: 'tile03', frame: null },
                { key: 'tile03', frame: null },
                { key: 'tile02', frame: null },
                { key: 'tile01', frame: null },
            ],
            
            frameRate: 30
        });

        this.scene.start('main');
    }
}