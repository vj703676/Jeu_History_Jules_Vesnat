class Scene2_1 extends Phaser.Scene {

    constructor() {
        super("Scene2_1");
    }

    preload(){
 
        
    }

    create(){

        localStorage.setItem('lastScene', 'Scene2_1');

        var musicConf1_1 = {
            mute: false,
            volume: 1.5,
            rate: 1,
            loop : true,
        }

        var musicConf1_2 = {
            mute: true,
            volume: 0,
            rate: 0,
            loop : false,
        }

        
        this.music2 = this.sound.add("sound1");
        this.music3 = this.sound.add("sound3");

        this.music2.play(musicConf1_1);
        this.music3.play(musicConf1_1);

        
        this.background = this.add.image(1080,500,'entree').setScale(1);


        const clickButton = this.add.image(1090, 800, 'fleche').setScale(0.25).setInteractive().on('pointerdown', () =>this.scene.start("Scene2_2") && this.music2.play(musicConf1_2)&& this.music3.play(musicConf1_2)  ); 
        clickButton.on('pointerover', function(){clickButton.setTint(0x738080);}, this)
        clickButton.on('pointerout', function(){clickButton.setTint(0xffffff);}, this)
        
    }

}