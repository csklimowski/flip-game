import { MainScene } from './main';
import { LoadScene } from './load';

new Phaser.Game({
    width: 1280,
    height: 1280,
    parent: 'game',
    scene: [
        LoadScene,
        MainScene
    ],
    backgroundColor: 0x8191b6,
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH,
        mode: Phaser.Scale.FIT,
    }
});