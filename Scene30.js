class Scene30 extends Phaser.Scene {

    constructor() {
        super("Scene30");
    }

    preload(){

        
    }

    create(){


        localStorage.setItem('lastScene', 'Scene30');
      
        this.background = this.add.image(1085,520,'tresor2').setScale(1);
        const clickButton = this.add.image(1680,520, 'lampe').setScale(1.05).setInteractive().on('pointerdown', () =>this.scene.start("Scene13")); 
        clickButton.on('pointerover', function(){clickButton.setTint(0x738080);}, this)
        clickButton.on('pointerout', function(){clickButton.setTint(0xffffff);}, this)

        
        clickButton.on('pointerdown', function(){
            this.game.sound.stopAll();
        },this);

        
    }

}