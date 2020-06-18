class Scene3_1 extends Phaser.Scene {

    constructor() {
        super("Scene3_1");
        
    }

    

    preload(){

        this.load.image('tableau', 'assets/tableau1.png');
        this.load.image('1cent', 'assets/1cent.png');
        this.load.image('2cent', 'assets/2cent.png');
        this.load.image('5cent', 'assets/5cent.png');
        this.load.image('10cent', 'assets/10cent.png');
        this.load.image('20cent', 'assets/20cent.png');
        this.load.image('50cent', 'assets/50cent.png');
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
        this.montant = 35;
        
        this.background = this.add.image(1080,510,'tableau').setScale(1);
        this.background = this.add.image(1600,680,'bulle').setScale(1.2);
        
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
        

        
        this.textevictoire= this.add.text(1400, 660, 'Il me faut à présent \n 35 centimes pour\n un change de devises', { fontSize: '25px', fill: '#000' }).setScale(1.25);
      
     

    

    
        
        const clickButton1 = this.add.image(700, 180, '1cent').setScale(0.4).setInteractive().on('pointerdown', () =>this.add.image(700, 700, '1cent').setScale(0.4).setDepth(0)  && A1-- && this.count7.setText(A1) &&  A2++ && this.count1.setText(A2)  && limit1(A2) ); 
       

        const clickButton2 = this.add.image(810, 180, '2cent').setScale(0.4).setInteractive().on('pointerdown', () =>this.add.image(810, 700, '2cent').setScale(0.4) && B1-- && this.count8.setText(B1) &&  B2++ && this.count2.setText(B2) ); 

        const clickButton3 = this.add.image(920, 180, '5cent').setScale(0.4).setInteractive().on('pointerdown', () =>this.add.image(920, 700, '5cent').setScale(0.4) && C1-- && this.count9.setText(C1) &&  C2++ && this.count3.setText(C2)  );

        const clickButton4 = this.add.image(1030, 180, '10cent').setScale(0.4).setInteractive().on('pointerdown', () =>this.add.image(1030, 700, '10cent').setScale(0.4) && D1-- && this.count10.setText(D1) &&  D2++ && this.count4.setText(D2)  );
        
        const clickButton5 = this.add.image(1150, 180, '20cent').setScale(0.4).setInteractive().on('pointerdown', () =>this.add.image(1150, 700, '20cent').setScale(0.4) && E1-- && this.count11.setText(E1) &&  E2++ && this.count5.setText(E2)  );

        const clickButton6 = this.add.image(1280, 180, '50cent').setScale(0.4).setInteractive().on('pointerdown', () =>this.add.image(1280, 700, '50cent').setScale(0.4) && F1-- && this.count12.setText(F1) &&  F2++ && this.count6.setText(F2)  );


        this.count1= this.add.text(710, 710, '', { fontSize: '32px', fill: '#FFF' }).setScale(1.8).setDepth(1);

        this.count2= this.add.text(820, 710, '', { fontSize: '32px', fill: '#FFF' }).setScale(1.8);

        this.count3= this.add.text(930, 710, '', { fontSize: '32px', fill: '#FFF' }).setScale(1.8);

        this.count4= this.add.text(1040, 710, '', { fontSize: '32px', fill: '#FFF' }).setScale(1.8);

        this.count5= this.add.text(1160, 710, '', { fontSize: '32px', fill: '#FFF' }).setScale(1.8);

        this.count6= this.add.text(1290, 710, '', { fontSize: '32px', fill: '#FFF' }).setScale(1.8);




        this.count7= this.add.text(710, 190, '3', { fontSize: '32px', fill: '#FFF' }).setScale(1.8);

        this.count8= this.add.text(820, 190, '1', { fontSize: '32px', fill: '#FFF' }).setScale(1.8);

        this.count9= this.add.text(930, 190, '1', { fontSize: '32px', fill: '#FFF' }).setScale(1.8);

        this.count10= this.add.text(1040, 190, '1', { fontSize: '32px', fill: '#FFF' }).setScale(1.8);

        this.count11= this.add.text(1160, 190, '1', { fontSize: '32px', fill: '#FFF' }).setScale(1.8);

        this.count12= this.add.text(1290, 190, '1', { fontSize: '32px', fill: '#FFF' }).setScale(1.8);



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

        const clickButton8 = this.add.image(1190, 880, 'refresh').setScale(0.25).setInteractive().on('pointerdown', () => this.scene.start("Scene3_1")&& this.music3.play(musicConf1)); 
       
        clickButton7.on('pointerover', function(){clickButton7.setTint(0xe6ffff);}, this)
        clickButton7.on('pointerout', function(){clickButton7.setTint(0xffffff);}, this)
        clickButton8.on('pointerover', function(){clickButton8.setTint(0xe6ffff);}, this)
        clickButton8.on('pointerout', function(){clickButton8.setTint(0xffffff);}, this)

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
        if(this.score == this.montant){
            this.textevictoire.setText("C'est parfait");
            this.time.addEvent({ delay: 5000, callback: ()=>{ this.music3.stop() && this.scene.start("Scene3_2") ;}, loop: false });
        }else {
            this.textevictoire.setText("Non ce n'est pas ça");
            this.time.addEvent({ delay: 5000, callback: ()=>{ this.music3.stop() && this.scene.start("Scene3_1")}, loop: false });
        }
    }

    update(){
     
       
    }


   

}