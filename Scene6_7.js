class Scene6_7 extends Phaser.Scene {

    constructor() {
        super("Scene6_7");
        
    }

    preload(){

    
    }

     
    create(){

        localStorage.setItem('lastScene', 'Scene6_7');

        this.background = this.add.image(1080,520,'CarrePerimetre').setScale(1);

        this.background = this.add.image(2020,150,'parchemin2').setScale(0.2).setDepth(1);

        this.niveau= this.add.text(1970, 107, 'Niveau\n  7/9', { fontSize: '25px', fill: '#000' }).setScale(1.1).setDepth(2);


        this.textevictoire= this.add.text(520, 110, 'Quel est le\npérimètre de cette forme\ngéométrique ?', { fontSize: '25px', fill: '#000' }).setScale(1.25);
       

        const clickButton1 = this.add.image(1100, 700, '12cm').setScale(0.35).setInteractive().on('pointerdown', () =>this.checkscore(2)); 
        clickButton1.on('pointerover', function(){clickButton1.setTint(0x738080);}, this)
        clickButton1.on('pointerout', function(){clickButton1.setTint(0xffffff);}, this)

        const clickButton2 = this.add.image(1500, 700, '18cm').setScale(0.35).setInteractive().on('pointerdown', () =>this.checkscore(2)); 
        clickButton2.on('pointerover', function(){clickButton2.setTint(0x738080);}, this)
        clickButton2.on('pointerout', function(){clickButton2.setTint(0xffffff);}, this)

        const clickButton3 = this.add.image(1100, 900, '24cm').setScale(0.35).setInteractive().on('pointerdown', () =>this.checkscore(1)); 
        clickButton3.on('pointerover', function(){clickButton3.setTint(0x738080);}, this)
        clickButton3.on('pointerout', function(){clickButton3.setTint(0xffffff);}, this)

        const clickButton4 = this.add.image(1500, 900, '26cm').setScale(0.35).setInteractive().on('pointerdown', () =>this.checkscore(2)); 
        clickButton4.on('pointerover', function(){clickButton4.setTint(0x738080);}, this)
        clickButton4.on('pointerout', function(){clickButton4.setTint(0xffffff);}, this)

       
    }

    checkscore(var1){
        if((var1 == 1)){
            this.textevictoire.setText("C'est parfait");
            this.time.addEvent({ delay: 5000, callback: ()=>{  this.scene.start("Scene6_8") ;}, loop: false });
        }else {
            this.textevictoire.setText("Ce n'est pas la\nbonne réponse...");
            this.time.addEvent({ delay: 5000, callback: ()=>{ this.scene.start("Scene6_1")}, loop: false });
        }
    }


}