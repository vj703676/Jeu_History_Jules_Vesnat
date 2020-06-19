class Scene29 extends Phaser.Scene {

    constructor() {
        super("Scene29");
    }

    preload(){
        this.load.image('cavedesert', 'assets/cavedesert.jpg');
        this.load.audio('zelda', 'assets/zelda.mp3');
        
        this.load.image('ouvre1', 'assets/up.png');
        
    }

    create(){
        var musicConf2_13 = {
            mute: false,
            volume: 0.5,
            rate: 1,
            loop : false
        }

      
        this.music = this.sound.add("zelda");

       
        this.time.addEvent({ delay: 3000, callback: ()=>{   this.music.play(musicConf2_13);}, loop: false });



        
        this.background = this.add.image(1080,500,'cavedesert').setScale(0.7);
      

        const clickButton = this.add.image(1090, 800, 'ouvre1').setScale(0.25).setInteractive().on('pointerdown', () =>this.scene.start("Scene30")); 
        clickButton.on('pointerover', function(){clickButton.setTint(0x738080);}, this)
        clickButton.on('pointerout', function(){clickButton.setTint(0xffffff);}, this)
        
    }

}