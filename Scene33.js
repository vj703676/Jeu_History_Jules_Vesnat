class Scene33 extends Phaser.Scene {

    constructor() {
        super("Scene33");
    }

    preload(){

        
       
    }

    create(){

        localStorage.setItem('lastScene', 'Scene33');

        var musicConf1_1 = {
            mute: false,
            volume: 1.5,
            rate: 1,
            loop : true,
        }

        var musicConf1_2 = {
            mute: false,
            volume: 2,
            rate: 1,
            loop : false,
        }

        
        this.music2 = this.sound.add("audio2");
       
        this.music3 = this.sound.add("audio3");
       

        this.music2.play(musicConf1_2);
        this.music3.play(musicConf1_1);
        
     
      
        this.background = this.add.image(1085,520,'guilde').setScale(1.2);
        this.background = this.add.image(200 ,150,'tab5').setScale(0.25);
      
        const clickButton = this.add.image(1000,800, 'flecheb').setScale(0.25).setInteractive().on('pointerdown', () =>this.scene.start("Scene9")); 
        clickButton.on('pointerover', function(){clickButton.setTint(0x738080);}, this)
        clickButton.on('pointerout', function(){clickButton.setTint(0xffffff);}, this)
        clickButton.setVisible(false);
        
        clickButton.on('pointerdown', function(){
            this.game.sound.stopAll();
        },this);

        this.time.addEvent({ delay: 5000, callback: ()=>{  clickButton.setVisible(true);}, loop: false });
    }
}