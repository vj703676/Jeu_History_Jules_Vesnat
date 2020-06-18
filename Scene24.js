class Scene24 extends Phaser.Scene {

    constructor() {
        super("Scene24");
    }

    preload(){
        this.load.image('fleche', 'assets/arrow.png');
        this.load.audio('timesound', 'assets/time_son.mp3');
        this.load.image('machine', 'assets/time-machine.webp');
        this.load.video('vortex2', 'assets/vortex.mp4', 'loadeddata', false, true);
    }

    create(){


        var musicConf1_1 = {
            mute: false,
            volume: 1.5,
            rate: 1,
            loop : true,
        }

        var musicConf1_2 = {
            mute: true,
            volume: 0,
            rate: 0,
            loop : false,
        }

        this.music1_1 = this.sound.add("timesound");
        this.background = this.add.video(1080,550,'vortex2').setScale(1.5).setLoop(true);
        this.background = this.add.image(1060,500,'machine').setScale(2.2);

        this.music1_1.play(musicConf1_1);

        const clickButton = this.add.image(1090, 800, 'fleche').setScale(0.25).setInteractive().on('pointerdown', () =>this.scene.start("Scene25") && this.music1_1.play(musicConf1_2)); 
        clickButton.on('pointerover', function(){clickButton.setTint(0x738080);}, this)
        clickButton.on('pointerout', function(){clickButton.setTint(0xffffff);}, this)
        
    }

}