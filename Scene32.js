class Scene32 extends Phaser.Scene {

    constructor() {
        super("Scene32");
    }

    preload(){
       
    }

    create(){


        localStorage.setItem('lastScene', 'Scene32');

        var musicConf1_1 = {
            mute: false,
            volume: 1.5,
            rate: 1,
            loop : false,
        }

      
        
        this.music = this.sound.add("dune");
        this.music.play(musicConf1_1);
     
       
      
        this.background = this.add.image(1085,520,'space').setScale(1.2);
        this.background = this.add.image(1085,520,'tab1').setScale(0.7);
      
        const clickButton = this.add.image(1100,900, 'flecheb').setScale(0.25).setInteractive().on('pointerdown', () =>this.scene.start("Scene33")); 
        clickButton.on('pointerover', function(){clickButton.setTint(0x738080);}, this)
        clickButton.on('pointerout', function(){clickButton.setTint(0xffffff);}, this)
        clickButton.setVisible(false);
        
        clickButton.on('pointerdown', function(){
            this.game.sound.stopAll();
        },this);
        this.time.addEvent({ delay: 10000, callback: ()=>{  clickButton.setVisible(true);}, loop: false });
        
    }
}