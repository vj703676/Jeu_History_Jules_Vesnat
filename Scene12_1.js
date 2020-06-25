class Scene12_1 extends Phaser.Scene {

    constructor() {
        super("Scene12_1");
    }

    preload(){
     
    }

    create(){

        localStorage.setItem('lastScene', 'Scene12_1');

        var musicConf2_13 = {
            mute: false,
            volume: 1,
            rate: 1,
            loop : true
        }
        this.music2 = this.sound.add("bird");
       

        this.music2.play(musicConf2_13);

        
        this.background = this.add.image(1080,500,'foret').setScale(1.5);


        const clickButton = this.add.image(1090, 800, 'up').setScale(0.2).setInteractive().on('pointerdown', () =>this.game.sound.stopAll()  ); 
        
        clickButton.on('pointerover', function(){clickButton.setTint(0x738080);}, this)
        clickButton.on('pointerout', function(){clickButton.setTint(0xffffff);}, this)

        clickButton.on('pointerdown', function(){
            this.scene.start("Scene12_2");
        },this);
        
    }

}