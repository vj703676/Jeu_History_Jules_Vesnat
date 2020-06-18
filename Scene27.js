class Scene27 extends Phaser.Scene {

    constructor() {
        super("Scene27");
    }

    preload(){
        this.load.image('nomade', 'assets/nomade.jpg');
        
        
        this.load.image('flecheb', 'assets/flecheb.png');
        
    }

    create(){


        
        this.background = this.add.image(1080,500,'nomade').setScale(0.6);
      

        const clickButton = this.add.image(1090, 800, 'flecheb').setScale(0.15).setInteractive().on('pointerdown', () =>this.scene.start("Scene28")); 
        clickButton.on('pointerover', function(){clickButton.setTint(0x738080);}, this)
        clickButton.on('pointerout', function(){clickButton.setTint(0xffffff);}, this)
        
    }

}