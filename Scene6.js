class Scene6 extends Phaser.Scene {

    constructor() {
        super("Scene6");
        
    }

    preload(){

        this.load.image('Sphinx', 'assets/Sphinx.png');
        //this.load.audio('music3', 'assets/music.mp3');
        this.load.image('ok', 'assets/flecheb.png');
    }

     
    create(){

        this.background = this.add.image(1080,510,'Sphinx').setScale(1);




        this.textevictoire= this.add.text(520, 110, 'Je suis le Sphinx\nqui garde un artefact\nunique, répond à\nmes énigmes', { fontSize: '25px', fill: '#000' }).setScale(1.25);
        this.time.addEvent({ delay: 10000, callback: ()=>{this.textevictoire.setText("Si tu réponds\njuste, l'artefact\nest à toi\n...");}, loop: false });
        this.time.addEvent({ delay: 20000, callback: ()=>{this.textevictoire.setText("Mais si par mégarde\ntu réponds faux,\nde ta vie il\n t'en coûtera");}, loop: false });

        const clickButton = this.add.image(1090, 800, 'ok').setScale(0.25).setInteractive().on('pointerdown', () =>this.scene.start("Scene6_1") && this.music2.play(musicConf1_2)); 
        clickButton.on('pointerover', function(){clickButton.setTint(0x738080);}, this)
        clickButton.on('pointerout', function(){clickButton.setTint(0xffffff);}, this)
    }


}