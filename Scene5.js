class Scene5 extends Phaser.Scene {

    constructor() {
        super("Scene5");
    }

    preload(){
        this.load.image('tresor', 'assets/tresor.jpg');
        
        this.load.audio('find', 'assets/find.mp3');
        this.load.image('calice', 'assets/calice.png');
        
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

        this.background = this.add.image(1080,500,'tresor').setScale(1);


        const clickButton = this.add.image(1000, 800, 'calice').setScale(0.25).setInteractive().on('pointerdown', () =>this.scene.start("bootGame")&& this.music3.stop() ); 
        clickButton.on('pointerover', function(){clickButton.setTint(0x738080);}, this)
        clickButton.on('pointerout', function(){clickButton.setTint(0xffffff);}, this)
        
    }

}