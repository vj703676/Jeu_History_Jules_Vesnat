class Scene12 extends Phaser.Scene {

    constructor() {
        super("Scene12");
    }

    preload(){
        this.load.image('grece', 'assets/grece.png');
        
        
        this.load.image('fleche1', 'assets/flecheb.png');
        this.load.audio('savazios', 'assets/savazios.mp3');
    }

    create(){

      
        var musicConf2_11 = {
            mute: false,
            volume: 3,
            rate: 1,
            loop : true,
        }


      

        this.music3 = this.sound.add("savazios");
    
        this.music3.play(musicConf2_11);
        

      

        this.background = this.add.image(1080,500,'grece').setScale(1.37);


        const clickButton = this.add.image(1950, 950, 'fleche1').setScale(0.15).setInteractive().on('pointerdown', () =>this.scene.start("Scene6")&& this.music3.stop() ); 
        clickButton.on('pointerover', function(){clickButton.setTint(0x738080);}, this)
        clickButton.on('pointerout', function(){clickButton.setTint(0xffffff);}, this)
        
    }

}