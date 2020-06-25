class Scene12_3 extends Phaser.Scene {

    constructor() {
        super("Scene12_3");
    }

    preload(){
        
   
    }

    create(){

       
        localStorage.setItem('lastScene', 'Scene12_3');
        
        this.background = this.add.image(1080,500,'entrecave').setScale(1.5);


        const clickButton = this.add.image(1090, 800, 'up').setScale(0.2).setInteractive().on('pointerdown', () =>this.game.sound.stopAll() ); 
        clickButton.on('pointerover', function(){clickButton.setTint(0x738080);}, this)
        clickButton.on('pointerout', function(){clickButton.setTint(0xffffff);}, this)

        clickButton.on('pointerdown', function(){
            this.scene.start("Scene6");
        },this);
        
        
    }

}