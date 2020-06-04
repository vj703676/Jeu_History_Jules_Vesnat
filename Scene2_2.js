class Scene2_2 extends Phaser.Scene {

    constructor() {
        super("Scene2_2");
    }

    preload(){
        this.load.image('banquier', 'assets/banquier.png');
        
        
        this.load.image('ok', 'assets/flecheb.png');
        
    }

    create(){


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
       

        this.music2.play(musicConf1_1);
        

        
        this.background = this.add.image(1080,500,'banquier').setScale(1);
        this.background = this.add.image(1450,300,'bulle1').setScale(1.2);

        this.textevictoire= this.add.text(1270, 220, 'Hmmm \n Vous êtes le nouveau?\nallez voir Lorenzo\npour commencer', { fontSize: '25px', fill: '#000' }).setScale(1.25);

        const clickButton = this.add.image(1090, 800, 'ok').setScale(0.25).setInteractive().on('pointerdown', () =>this.scene.start("Math1") && this.music2.play(musicConf1_2)); 
        clickButton.on('pointerover', function(){clickButton.setTint(0x738080);}, this)
        clickButton.on('pointerout', function(){clickButton.setTint(0xffffff);}, this)
        
    }

}