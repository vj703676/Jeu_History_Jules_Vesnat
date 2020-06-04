class Scene3_6 extends Phaser.Scene {

    constructor() {
        super("Scene3_6");
        
    }

    

    preload(){

        this.load.image('tableau', 'assets/tableau.png');
        this.load.image('1cent', 'assets/1cent.png');
        this.load.image('2cent', 'assets/2cent.png');
        this.load.image('5cent', 'assets/5cent.png');
        this.load.image('10cent', 'assets/10cent.png');
        this.load.image('20cent', 'assets/20cent.png');
        this.load.image('50cent', 'assets/50cent.png');
        this.load.image('1euro', 'assets/1euro.png');
        this.load.image('2euro', 'assets/2euro.png');
        this.load.image('bulle', 'assets/bulle.png');
        this.load.audio('music3', 'assets/music.mp3');
        this.load.image('valid', 'assets/valid.png');
        this.load.image('refresh', 'assets/refresh.png');
        this.load.audio('coin','assets/coin.mp3');
    }
   
    create(){
       
        var musicConf = {
            mute: false,
            volume: 1,
            rate: 1,
            loop : true,
        }

        var musicConf1 = {
            mute: true,
            volume: 0,
            rate: 0,
            loop : false,
        }

        var soundConf = {
            mute: false,
            volume: 1,
            rate: 1,
            loop : false,
        }

        this.soundcoin = this.sound.add("coin");

        this.music3 = this.sound.add("music3");
        this.music3.play(musicConf);

        this.score = 0;
        this.montant = 54;

        this.score1 = 0;
        this.montant1 = 15;
        
        this.background = this.add.image(1080,510,'tableau').setScale(1);
        this.background = this.add.image(1700,580,'bulle').setScale(1.35);
        
        var count1;
        var count2;
        var count3;
        var count4;
        var A1=3;
        var A2=0;
        var B1=1;
        var B2=0;
        var C1=1;
        var C2=0;
        var D1=1;
        var D2=0;
        var E1=1;
        var E2=0;
        var F1=1;
        var F2=0;

        
        var A=0;
        var B=0;
        var C=2;
        var D=8;
        

        
        this.textevictoire= this.add.text(1490, 520, 'Un de nos richissime\nclient, Ludovic Sforza,\nmembre de la famille\ndes ducs de Milan...', { fontSize: '25px', fill: '#000' }).setScale(1.25);
        this.time.addEvent({ delay: 10000, callback: ()=>{this.textevictoire.setText("Désire effectuer\nun échange de 3 lingots\nd'or, de 5 euros et\n18 centimes chacun,\n préparez la somme que\n nous lui devons en\n      retour");}, loop: false });
     

        const clickButton01 = this.add.image(850, 110, '1euro').setScale(0.13).setInteractive().on('pointerdown', () =>this.add.image(850, 500, '1euro').setScale(0.13)  && C-- && this.count03.setText(C) &&  A++ && this.count01.setText(A)  && limit01(A) ); 
        
        const clickButton02 = this.add.image(1100, 110, '2euro').setScale(0.14).setInteractive().on('pointerdown', () =>this.add.image(1100, 500, '2euro').setScale(0.14) && D-- && this.count04.setText(D) &&  B++ && this.count02.setText(B)   && limit02(B) ); 

    
        
        const clickButton1 = this.add.image(700, 280, '1cent').setScale(0.4).setInteractive().on('pointerdown', () =>this.add.image(700, 700, '1cent').setScale(0.4).setDepth(0)  && A1-- && this.count7.setText(A1) &&  A2++ && this.count1.setText(A2)  && limit1(A2) ); 

        const clickButton2 = this.add.image(810, 280, '2cent').setScale(0.4).setInteractive().on('pointerdown', () =>this.add.image(810, 700, '2cent').setScale(0.4) && B1-- && this.count8.setText(B1) &&  B2++ && this.count2.setText(B2) ); 

        const clickButton3 = this.add.image(920, 280, '5cent').setScale(0.4).setInteractive().on('pointerdown', () =>this.add.image(920, 700, '5cent').setScale(0.4) && C1-- && this.count9.setText(C1) &&  C2++ && this.count3.setText(C2)  );

        const clickButton4 = this.add.image(1030, 280, '10cent').setScale(0.4).setInteractive().on('pointerdown', () =>this.add.image(1030, 700, '10cent').setScale(0.4) && D1-- && this.count10.setText(D1) &&  D2++ && this.count4.setText(D2)  );
        
        const clickButton5 = this.add.image(1150, 280, '20cent').setScale(0.4).setInteractive().on('pointerdown', () =>this.add.image(1150, 700, '20cent').setScale(0.4) && E1-- && this.count11.setText(E1) &&  E2++ && this.count5.setText(E2)  );

        const clickButton6 = this.add.image(1280, 280, '50cent').setScale(0.4).setInteractive().on('pointerdown', () =>this.add.image(1280, 700, '50cent').setScale(0.4) && F1-- && this.count12.setText(F1) &&  F2++ && this.count6.setText(F2)  );


        this.count01= this.add.text(900, 550, '', { fontSize: '32px', fill: '#FFF' }).setScale(1.8);
        this.count02= this.add.text(1150, 550, '', { fontSize: '32px', fill: '#FFF' }).setScale(1.8);

        this.count03= this.add.text(900, 160, '2', { fontSize: '32px', fill: '#FFF' }).setScale(1.8);
        this.count04= this.add.text(1150, 160, '8', { fontSize: '32px', fill: '#FFF' }).setScale(1.8);


        this.count1= this.add.text(710, 710, '', { fontSize: '32px', fill: '#FFF' }).setScale(1.8).setDepth(1);

        this.count2= this.add.text(820, 710, '', { fontSize: '32px', fill: '#FFF' }).setScale(1.8);

        this.count3= this.add.text(930, 710, '', { fontSize: '32px', fill: '#FFF' }).setScale(1.8);

        this.count4= this.add.text(1040, 710, '', { fontSize: '32px', fill: '#FFF' }).setScale(1.8);

        this.count5= this.add.text(1160, 710, '', { fontSize: '32px', fill: '#FFF' }).setScale(1.8);

        this.count6= this.add.text(1290, 710, '', { fontSize: '32px', fill: '#FFF' }).setScale(1.8);




        this.count7= this.add.text(710, 290, '3', { fontSize: '32px', fill: '#FFF' }).setScale(1.8);

        this.count8= this.add.text(820, 290, '1', { fontSize: '32px', fill: '#FFF' }).setScale(1.8);

        this.count9= this.add.text(930, 290, '1', { fontSize: '32px', fill: '#FFF' }).setScale(1.8);

        this.count10= this.add.text(1040, 290, '1', { fontSize: '32px', fill: '#FFF' }).setScale(1.8);

        this.count11= this.add.text(1160, 290, '1', { fontSize: '32px', fill: '#FFF' }).setScale(1.8);

        this.count12= this.add.text(1290, 290, '1', { fontSize: '32px', fill: '#FFF' }).setScale(1.8);


        clickButton01.on('pointerover', function(){clickButton01.setTint(0x738080);}, this)
        clickButton01.on('pointerout', function(){clickButton01.setTint(0xffffff);}, this)
        clickButton02.on('pointerover', function(){clickButton02.setTint(0x738080);}, this)
        clickButton02.on('pointerout', function(){clickButton02.setTint(0xffffff);}, this)



        clickButton1.on('pointerover', function(){clickButton1.setTint(0x738080);}, this)
        clickButton1.on('pointerout', function(){clickButton1.setTint(0xffffff);}, this)

        clickButton2.on('pointerover', function(){clickButton2.setTint(0x738080);}, this)
        clickButton2.on('pointerout', function(){clickButton2.setTint(0xffffff);}, this)

        clickButton3.on('pointerover', function(){clickButton3.setTint(0x738080);}, this)
        clickButton3.on('pointerout', function(){clickButton3.setTint(0xffffff);}, this)

        clickButton4.on('pointerover', function(){clickButton4.setTint(0x738080);}, this)
        clickButton4.on('pointerout', function(){clickButton4.setTint(0xffffff);}, this)

        clickButton5.on('pointerover', function(){clickButton5.setTint(0x738080);}, this)
        clickButton5.on('pointerout', function(){clickButton5.setTint(0xffffff);}, this)
        
        clickButton6.on('pointerover', function(){clickButton6.setTint(0x738080);}, this)
        clickButton6.on('pointerout', function(){clickButton6.setTint(0xffffff);}, this)


        clickButton01.on('pointerdown', function(){
            console.log("coucou");
            this.incrementClickCount01();
            this.soundcoin.play(soundConf);
        },this);


      
        clickButton02.on('pointerdown', function(){
            console.log("coucou");
            this.incrementClickCount02();
            this.soundcoin.play(soundConf);
        },this);
       


        clickButton1.on('pointerdown', function(){
            console.log("coucou");
            this.incrementClickCount1();
            this.soundcoin.play(soundConf);
        },this);


        clickButton2.on('pointerdown', function(){
            console.log("coucou");
            this.incrementClickCount2();
            this.soundcoin.play(soundConf);
            limit2(B2);
        },this);


        clickButton3.on('pointerdown', function(){
            console.log("coucou");
            this.incrementClickCount3();
            this.soundcoin.play(soundConf);
            limit3(C2);
        },this);


        clickButton4.on('pointerdown', function(){
            console.log("coucou");
            this.incrementClickCount4();
            this.soundcoin.play(soundConf);
            limit4(D2)
        },this);


        clickButton5.on('pointerdown', function(){
            console.log("coucou");
            this.incrementClickCount5();
            this.soundcoin.play(soundConf);
            limit5(E2);
        },this);


        clickButton6.on('pointerdown', function(){
            console.log("coucou");
            this.incrementClickCount6();
            this.soundcoin.play(soundConf);
            limit6(F2);
        },this);
         
  
        function limit01(number01){
            if(number01==2){
              clickButton01.removeInteractive();
            }
        } 

        function limit02(number02){
            if(number02==8){
              clickButton02.removeInteractive();
            }
        } 
        

      function limit1(number){
          if(number==3){
            clickButton1.removeInteractive();
          }
      } 

      function limit2(number1){
        if(number1==1){
          clickButton2.removeInteractive();
        }
    } 

    function limit3(number2){
        if(number2==1){
          clickButton3.removeInteractive();
        }
    } 

    function limit4(number3){
        if(number3==1){
          clickButton4.removeInteractive();
        }
    } 

    function limit5(number4){
        if(number4==1){
          clickButton5.removeInteractive();
        }
    } 

      function limit6(number5){
        if(number5==1){
          clickButton6.removeInteractive();
        }
    } 
      

        
        const clickButton7 = this.add.image(1370, 880, 'valid').setScale(0.40).setInteractive().on('pointerdown', () => this.checkscore() ); 

        const clickButton8 = this.add.image(1190, 880, 'refresh').setScale(0.25).setInteractive().on('pointerdown', () => this.scene.start("Scene3_6")&& this.music3.play(musicConf1)); 
       
        clickButton7.on('pointerover', function(){clickButton7.setTint(0xe6ffff);}, this)
        clickButton7.on('pointerout', function(){clickButton7.setTint(0xffffff);}, this)
        clickButton8.on('pointerover', function(){clickButton8.setTint(0xe6ffff);}, this)
        clickButton8.on('pointerout', function(){clickButton8.setTint(0xffffff);}, this)

    }

    incrementClickCount01() {
        this.score1 += 1;
        
      }

    incrementClickCount02() {
        this.score1 += 2;
        
    }

    incrementClickCount1() {
        this.score += 1;
        
      }

    incrementClickCount2() {
        this.score += 2;
        
      }
    
    incrementClickCount3() {
        this.score = this.score + 5;
        console.log(this.score);
        }
      
    incrementClickCount4() {
        this.score = this.score + 10;
        console.log(this.score);
        }

    incrementClickCount5() {
        this.score += 20;
        
      }

    incrementClickCount6() {
        this.score += 50;
        
      }



      checkscore(){
        if((this.score == this.montant) && (this.score1 == this.montant1)){
            this.textevictoire.setText("Le compte est bon,\napporte les lingots\nd'or dans la\nsalle 36");
            this.time.addEvent({ delay: 10000, callback: ()=>{ this.music3.stop() && this.scene.start("Scene4") ;}, loop: false });
        }else {
            this.textevictoire.setText("Non ce n'est pas ça");
            this.time.addEvent({ delay: 5000, callback: ()=>{ this.music3.stop() && this.scene.start("Scene3_6")}, loop: false });
        }
    }

   

    update(){
     
       
    }


   

}