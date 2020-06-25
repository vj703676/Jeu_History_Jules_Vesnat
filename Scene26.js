class Scene26 extends Phaser.Scene {

    constructor() {
        super("Scene26");
    }

    preload(){
       
    }

    create(){

        localStorage.setItem('lastScene', 'Scene26');

        var musicConf1_1 = {
            mute: false,
            volume: 1,
            rate: 1,
            loop : true,
        }


        
        this.music2 = this.sound.add("arabia");
       

        this.music2.play(musicConf1_1);
        

        
        this.background = this.add.image(1080,500,'desert').setScale(1.7);
      

        const clickButton = this.add.image(1090, 800, 'up1').setScale(0.2).setInteractive().on('pointerdown', () =>this.scene.start("Scene27") && this.music2.play(musicConf1_2)); 
        clickButton.on('pointerover', function(){clickButton.setTint(0x738080);}, this)
        clickButton.on('pointerout', function(){clickButton.setTint(0xffffff);}, this)
        
    }

}