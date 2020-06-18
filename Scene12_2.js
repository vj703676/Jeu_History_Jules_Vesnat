class Scene12_2 extends Phaser.Scene {

    constructor() {
        super("Scene12_2");
    }

    preload(){
        this.load.image('gif', 'assets/GIF.gif');
   
        this.load.image('up', 'assets/up.png');
         this.load.audio('dark', 'assets/dark.mp3');
    
    }

    create(){


        var musicConf2_13 = {
            mute: false,
            volume: 2,
            rate: 1,
            loop : true
        }

      
        
        this.music3 = this.sound.add("dark");

   
        this.music3.play(musicConf2_13);
      
        
        this.background = this.add.image(1080,520,'gif').setScale(3);


        
        const clickButton = this.add.image(1400, 800, 'up').setScale(0.2).setInteractive().on('pointerdown', () =>this.scene.start("Scene12_3")  ); 
        clickButton.on('pointerover', function(){clickButton.setTint(0x738080);}, this)
        clickButton.on('pointerout', function(){clickButton.setTint(0xffffff);}, this)
        
    }

}