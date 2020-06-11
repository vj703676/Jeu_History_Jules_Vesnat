class Scene8 extends Phaser.Scene {

    constructor() {
        super("Scene8");
    }

    preload(){
        this.load.image('caverne_final', 'assets/caverne_final.jpg');
        
        this.load.audio('find', 'assets/find.mp3');
        this.load.image('pandore', 'assets/pandore.png');
        
    }

    create(){

        var musicConf = {
            mute: false,
            volume: 1,
            rate: 1,
            loop : false,
        }

        

        this.music3 = this.sound.add("find");
        this.music3.play(musicConf);

        this.background = this.add.image(1080,500,'caverne_final').setScale(1);


        const clickButton = this.add.image(1100, 700, 'pandore').setScale(0.25).setInteractive().on('pointerdown', () =>this.scene.start("Scene11")&& this.music3.stop() ); 
        clickButton.on('pointerover', function(){clickButton.setTint(0x738080);}, this)
        clickButton.on('pointerout', function(){clickButton.setTint(0xffffff);}, this)
        
    }

}