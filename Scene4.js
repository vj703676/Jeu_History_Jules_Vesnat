class Scene4 extends Phaser.Scene {

    constructor() {
        super("Scene4");
    }

    preload(){
   
        
    }

    create(){

        localStorage.setItem('lastScene', 'Scene4');

        var musicConf = {
            mute: false,
            volume: 1,
            rate: 1,
            loop : true,
        }

        

        this.music3 = this.sound.add("inf");
        this.music3.play(musicConf);

        this.background = this.add.image(1080,500,'interieur').setScale(1);


        const clickButton = this.add.image(1550, 580, 'fleche1').setScale(0.25).setInteractive().on('pointerdown', () =>this.scene.start("Scene5")&& this.music3.stop() ); 
        clickButton.on('pointerover', function(){clickButton.setTint(0x738080);}, this)
        clickButton.on('pointerout', function(){clickButton.setTint(0xffffff);}, this)
        
    }

}