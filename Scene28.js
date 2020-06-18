class Scene28 extends Phaser.Scene {

    constructor() {
        super("Scene28");
    }

    preload(){
        this.load.image('cavedesert1', 'assets/cavedesert1.jpg');
        
        
        this.load.image('ouvre', 'assets/ouvre.png');
        
    }

    create(){


        
        this.background = this.add.image(1080,500,'cavedesert1').setScale(0.7);
      

        const clickButton = this.add.image(1090, 800, 'ouvre').setScale(0.4).setInteractive().on('pointerdown', () =>this.scene.start("Scene29")); 
        clickButton.on('pointerover', function(){clickButton.setTint(0x738080);}, this)
        clickButton.on('pointerout', function(){clickButton.setTint(0xffffff);}, this)
        
    }

}