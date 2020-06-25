class Scene1 extends Phaser.Scene {

    constructor() {
        super("bootGame");
    }

    
    preload(){
      
    }


    create(){
        //this.background = this.add.video(1100,460, 'menu').setScale(1.2).setLoop(true); 
        
        
        this.background = this.add.image(1050,500,'menu1').setScale(1.5);
        
        this.music = this.sound.add("music");
        
        

        var musicConf = {
            mute: false,
            volume: 1,
            rate: 1,
            loop : true,
        }

            
        var musicConf1 = {
            mute: true,
            volume: 0,
         
        }

     

        this.music.play(musicConf);
        
        const clickButton1 = this.add.image(1950, 800, 'button1').setScale(0.4).setInteractive().on('pointerdown', () =>this.scene.start("load") && this.music.play(musicConf1)); 
        
        clickButton1.on('pointerover', function(){clickButton1.setTint(0xf0ff00);}, this)
        clickButton1.on('pointerout', function(){clickButton1.setTint(0xffffff);}, this)
        
     /*const clickButton2 = this.add.image(1950, 870, 'button2').setScale(0.25).setInteractive().on('pointerdown', () =>this.scene.start("Math1") && this.music.play(musicConf1));
        //clickButton2.removeInteractive();
        clickButton2.on('pointerover', function(){clickButton2.setTint(0xf0ff00);}, this)
        clickButton2.on('pointerout', function(){clickButton2.setTint(0xffffff);}, this)

        const clickButton3 = this.add.image(1950, 940, 'button3').setScale(0.25).setInteractive().on('pointerdown', () =>this.scene.start("Scene6_10") && this.music.play(musicConf1));
        clickButton3.removeInteractive();
        clickButton3.on('pointerover', function(){clickButton3.setTint(0xf0ff00);}, this)
        clickButton3.on('pointerout', function(){clickButton3.setTint(0xffffff);}, this)
        */
        
        
    }   
}
