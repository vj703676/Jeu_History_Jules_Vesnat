class Scene6 extends Phaser.Scene {

    constructor() {
        super("Scene6");
        
    }

    preload(){

        this.load.image('Sphinx', 'assets/Sphinx.png');
        //this.load.audio('music3', 'assets/music.mp3');

    }

     
    create(){

        this.background = this.add.image(1080,510,'Sphinx').setScale(1);
        
    }


}