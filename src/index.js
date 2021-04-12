import Phaser from "phaser";

import sky from "./assets/space3.png";
import logo from "./assets/phaser3-logo.png";
import red from "./assets/red.png";


class Level extends Phaser.Scene {
    constructor() {
        super();
    }

    preload() {
        this.load.image('sky', sky);
        this.load.image('logo', logo);
        this.load.image('red', red);
    }

    create() {
        this.add.image(400, 300, 'sky');

        const particles = this.add.particles('red');

        const emitter = particles.createEmitter({
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        });

        const logo = this.physics.add.image(400, 100, 'logo');

        logo.setVelocity(100, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);

        emitter.startFollow(logo);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
        },
    },
    scene: Level,
};

const game = new Phaser.Game(config);