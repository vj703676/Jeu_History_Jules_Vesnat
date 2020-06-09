class Scene6_6 extends Phaser.Scene {

    constructor() {
        super("Scene6_6");
        
    }

    preload(){

        this.load.image('FormeHexagone', 'assets/FormeHexagone.png');
        //this.load.audio('music3', 'assets/music.mp3');
        this.load.image('Pentagone', 'assets/Pentagone.png');
        this.load.image('Octogone', 'assets/Octogone.png');
        this.load.image('Losange', 'assets/Losange.png');
        this.load.image('Hexagone', 'assets/Hexagone.png');
    }

     
    create(){

        this.background = this.add.image(1080,510,'FormeHexagone').setScale(1);




        this.textevictoire= this.add.text(520, 110, 'Quel est le nom\nde cette forme\ngéométrique ?', { fontSize: '25px', fill: '#000' }).setScale(1.25);
       

        const clickButton1 = this.add.image(1100, 700, 'Octogone').setScale(0.35).setInteractive().on('pointerdown', () =>this.checkscore(2)); 
        clickButton1.on('pointerover', function(){clickButton1.setTint(0x738080);}, this)
        clickButton1.on('pointerout', function(){clickButton1.setTint(0xffffff);}, this)

        const clickButton2 = this.add.image(1500, 700, 'Pentagone').setScale(0.35).setInteractive().on('pointerdown', () =>this.checkscore(2)); 
        clickButton2.on('pointerover', function(){clickButton2.setTint(0x738080);}, this)
        clickButton2.on('pointerout', function(){clickButton2.setTint(0xffffff);}, this)

        const clickButton3 = this.add.image(1100, 900, 'Hexagone').setScale(0.35).setInteractive().on('pointerdown', () =>this.checkscore(1)); 
        clickButton3.on('pointerover', function(){clickButton3.setTint(0x738080);}, this)
        clickButton3.on('pointerout', function(){clickButton3.setTint(0xffffff);}, this)

        const clickButton4 = this.add.image(1500, 900, 'Losange').setScale(0.35).setInteractive().on('pointerdown', () =>this.checkscore(2)); 
        clickButton4.on('pointerover', function(){clickButton4.setTint(0x738080);}, this)
        clickButton4.on('pointerout', function(){clickButton4.setTint(0xffffff);}, this)

       
    }

    checkscore(var1){
        if((var1 == 1)){
            this.textevictoire.setText("C'est parfait");
            this.time.addEvent({ delay: 5000, callback: ()=>{  this.scene.start("Scene6_7") ;}, loop: false });
        }else {
            this.textevictoire.setText("Ce n'est pas la\nbonne réponse...");
            this.time.addEvent({ delay: 5000, callback: ()=>{ this.scene.start("Scene6_6")}, loop: false });
        }
    }


}