class Scene19 extends Phaser.Scene {

    constructor() {
        super("Scene19");
        
     
    }

    preload(){
        
    }
    
    create(){

        localStorage.setItem('lastScene', 'Scene19');

        var soundConf = {
            mute: false,
            volume: 1,
            rate: 1,
            loop : false,
        }

        var num = 0;

        this.soundwrong = this.sound.add("wrong");
        this.soundgood = this.sound.add("good");

       
        
        this.background = this.add.image(1085,520,'tresor2').setScale(1);

        this.background = this.add.image(1600,500,'genie1').setScale(1.3).setDepth(0);

        this.background = this.add.image(2000,100,'parchemin1').setScale(0.2).setDepth(1);

        this.niveau= this.add.text(1955, 77, 'Niveau\n  6/9', { fontSize: '25px', fill: '#000' }).setScale(1.1).setDepth(2);

        this.bulle = this.add.image(1350,130,'bulle2').setScale(1).setDepth(1); 


        this.textevictoire= this.add.text(1180, 80, 'Quel est le résultat ?\n   Choisi la bonne\n    réponse...', { fontSize: '25px', fill: '#000' }).setScale(1.1).setDepth(2);
        
        this.question= this.add.text(1230, 540, '132-41=?', { fontSize: '25px', fill: '#000' }).setScale(2).setDepth(2);
 

        const clickButton1 = this.add.image(200,270, 'papyrus').setScale(0.5).setInteractive().on('pointerdown', () =>num++ && this.checkscore(num));
        clickButton1.on('pointerover', function(){clickButton1.setTint(0x738080);}, this)
        clickButton1.on('pointerout', function(){clickButton1.setTint(0xffffff);}, this)
        const clickButton2 = this.add.image(550,270, 'papyrus').setScale(0.5).setInteractive().on('pointerdown', () =>num++ && this.checkscore(num)); 
        clickButton2.on('pointerover', function(){clickButton2.setTint(0x738080);}, this)
        clickButton2.on('pointerout', function(){clickButton2.setTint(0xffffff);}, this)
        const clickButton3 = this.add.image(900,270, 'papyrus').setScale(0.5).setInteractive().on('pointerdown', () =>num++ && this.checkscore(num)); 
        clickButton3.on('pointerover', function(){clickButton3.setTint(0x738080);}, this)
        clickButton3.on('pointerout', function(){clickButton3.setTint(0xffffff);}, this)
        const clickButton4 = this.add.image(200,570, 'papyrus').setScale(0.5).setInteractive().on('pointerdown', () =>num++ && this.checkscore(num));
        clickButton4.on('pointerover', function(){clickButton4.setTint(0x738080);}, this)
        clickButton4.on('pointerout', function(){clickButton4.setTint(0xffffff);}, this) 
        const clickButton5 = this.add.image(550,570, 'papyrus').setScale(0.5).setInteractive().on('pointerdown', () =>num++ && this.checkscore(num)); 
        clickButton5.on('pointerover', function(){clickButton5.setTint(0x738080);}, this)
        clickButton5.on('pointerout', function(){clickButton5.setTint(0xffffff);}, this)
        const clickButton6 = this.add.image(900,570, 'papyrus').setScale(0.5).setInteractive().on('pointerdown', () =>num++ && this.checkscore(num)); 
        clickButton6.on('pointerover', function(){clickButton6.setTint(0x738080);}, this)
        clickButton6.on('pointerout', function(){clickButton6.setTint(0xffffff);}, this)
        const clickButton7 = this.add.image(200,870, 'papyrus').setScale(0.5).setInteractive().on('pointerdown', () =>this.fonction1()); 
        clickButton7.on('pointerover', function(){clickButton7.setTint(0x738080);}, this)
        clickButton7.on('pointerout', function(){clickButton7.setTint(0xffffff);}, this)
        const clickButton8 = this.add.image(550,870, 'papyrus').setScale(0.5).setInteractive().on('pointerdown', () =>num++ && this.checkscore(num)); 
        clickButton8.on('pointerover', function(){clickButton8.setTint(0x738080);}, this)
        clickButton8.on('pointerout', function(){clickButton8.setTint(0xffffff);}, this)
        const clickButton9 = this.add.image(900,870, 'papyrus').setScale(0.5).setInteractive().on('pointerdown', () =>num++ && this.checkscore(num));  
        clickButton9.on('pointerover', function(){clickButton9.setTint(0x738080);}, this)
        clickButton9.on('pointerout', function(){clickButton9.setTint(0xffffff);}, this)

        this.rep1= this.add.text(170, 250, '100', { fontSize: '25px', fill: '#000' }).setScale(2);

        this.rep2= this.add.text(520, 250, '123', { fontSize: '25px', fill: '#000' }).setScale(2);

        this.rep3= this.add.text(870, 250, '82', { fontSize: '25px', fill: '#000' }).setScale(2);

        this.rep4= this.add.text(170, 550, '152', { fontSize: '25px', fill: '#000' }).setScale(2);

        this.rep5= this.add.text(520, 550, '75', { fontSize: '25px', fill: '#000' }).setScale(2);

        this.rep6= this.add.text(870, 550, '98', { fontSize: '25px', fill: '#000' }).setScale(2);

        this.rep7= this.add.text(170, 850, '91', { fontSize: '25px', fill: '#000' }).setScale(2);

        this.rep8= this.add.text(520, 850, '143', { fontSize: '25px', fill: '#000' }).setScale(2);

        this.rep9= this.add.text(870, 850, '87', { fontSize: '25px', fill: '#000' }).setScale(2);


        clickButton1.on('pointerdown', function(){
            this.fonction2();
        },this);


      
        clickButton2.on('pointerdown', function(){
            this.fonction3();
        },this);
       


        clickButton3.on('pointerdown', function(){
            this.fonction4();
        },this);


        clickButton8.on('pointerdown', function(){
            this.fonction2();
        },this);


        clickButton9.on('pointerdown', function(){
            this.fonction3();
        },this);


        clickButton6.on('pointerdown', function(){
            this.fonction4();
        },this);


        clickButton5.on('pointerdown', function(){
            this.fonction2();
        },this);


       

        clickButton4.on('pointerdown', function(){
            this.fonction3();
        },this);
        

      
    }

    checkscore(var1){
        if((var1 == 3)){
            console.log(var1);
            this.background = this.add.image(1600,500,'genie4').setScale(1.3);
            this.bulle = this.add.image(1350,130,'bulle2').setScale(1); 
            this.soundwrong.play(this.soundConf);
            this.textevictoire.setVisible(false)
            this.textevictoire1= this.add.text(1180, 80, "Tu n'as pas\ntrouvé la solution", { fontSize: '25px', fill: '#000' }).setScale(1.1).setDepth(2);
            
            this.time.addEvent({ delay: 3000, callback: ()=>{ this.scene.start("Scene14");}, loop: false });
        }
    }


    
    fonction1(){
        this.background = this.add.image(1600,500,'genie5').setScale(1.3).setDepth(1);
        this.bulle = this.add.image(1350,130,'bulle2').setScale(1).setDepth(2); 
        this.soundgood.play(this.soundConf);
        this.question.setText("132-41=91").setDepth(2);
        this.textevictoire.setText("C'est la bonne réponse").setDepth(3);
        this.time.addEvent({ delay: 5000, callback: ()=>{ this.scene.start("Scene20");}, loop: false });
    }

    fonction2(){
        this.background = this.add.image(1600,500,'genie4').setScale(1.3);
        this.bulle = this.add.image(1350,130,'bulle2').setScale(1); 
        this.soundwrong.play(this.soundConf);
        this.textevictoire.setText("Ce n'est pas la\n  bonne réponse");
        
        this.rep1.setText('152');
        this.rep2.setText('75');
        this.rep5.setText('120');
        this.rep3.setText('74');
        this.rep8.setText('96');
        this.rep6.setText('145');
        
        this.time.addEvent({ delay: 10000, callback: ()=>{this.background = this.add.image(1600,500,'genie1').setScale(1.3).setDepth(0);}, loop: false });
        this.time.addEvent({ delay: 10001, callback: ()=>{this.bulle = this.add.image(1350,130,'bulle2').setScale(1).setDepth(1); }, loop: false });
        //this.time.addEvent({ delay: 10202, callback: ()=>{this.textevictoire.setText("Essai encore").setDepth(2);}, loop: false });
        
    }

    fonction3(){
        this.background = this.add.image(1600,500,'genie4').setScale(1.3);
        this.bulle = this.add.image(1350,130,'bulle2').setScale(1); 
        this.soundwrong.play(this.soundConf);
        this.textevictoire.setText("Ce n'est pas la\n  bonne réponse");
        
        this.rep1.setText('78');
        this.rep2.setText('143');
        this.rep5.setText('94');
        this.rep6.setText('99');
        this.rep8.setText('173');
        this.rep3.setText('87');
        
        this.time.addEvent({ delay: 10000, callback: ()=>{this.background = this.add.image(1600,500,'genie1').setScale(1.3).setDepth(0);}, loop: false });
        this.time.addEvent({ delay: 10001, callback: ()=>{this.bulle = this.add.image(1350,130,'bulle2').setScale(1).setDepth(1); }, loop: false });
        //this.time.addEvent({ delay: 10202, callback: ()=>{this.textevictoire.setText("Essai encore").setDepth(2);}, loop: false });
        
    }


    fonction4(){
        this.background = this.add.image(1600,500,'genie4').setScale(1.3);
        this.bulle = this.add.image(1350,130,'bulle2').setScale(1); 
        this.soundwrong.play(this.soundConf);
        this.textevictoire.setText("Ce n'est pas la\n  bonne réponse");
        
        this.rep1.setText('110');
        this.rep2.setText('85');
        this.rep5.setText('153');
        this.rep4.setText('96');
        this.rep8.setText('152');
        this.rep6.setText('101');
        
       
        this.time.addEvent({ delay: 10001, callback: ()=>{this.background = this.add.image(1600,500,'genie1').setScale(1.3).setDepth(0);}, loop: false });
        this.time.addEvent({ delay: 10002, callback: ()=>{this.bulle = this.add.image(1350,130,'bulle2').setScale(1).setDepth(1); }, loop: false });
        //this.time.addEvent({ delay: 10203, callback: ()=>{this.textevictoire.setText("Essai encore").setDepth(2);}, loop: false });
        
    }
    
    

    

}