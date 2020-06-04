class Scene3_3 extends Phaser.Scene {

    constructor() {
        super("Scene3_3");
        
    }

    

    preload(){

        this.load.image('tableau', 'assets/tableau.png');
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

        var soundConf = {
            mute: false,
            volume: 1,
            rate: 1,
            loop : false,
        }

        var musicConf1 = {
            mute: true,
            volume: 0,
            rate: 0,
            loop : false,
        }

        this.music3 = this.sound.add("music3");
        this.music3.play(musicConf);
        this.soundcoin = this.sound.add("coin");

        this.score = 0;
        this.montant = 9;
        
        this.background = this.add.image(1080,510,'tableau').setScale(1);
        this.background = this.add.image(1700,580,'bulle').setScale(1.2);
        
        var count1;
        var count2;
        var count3;
        var count4;
        var A=0;
        var B=0;
        var C=2;
        var D=4;
        

        
        this.textevictoire= this.add.text(1500, 560, 'Rendez moi la monnaie  \n sur 12 euros pour une\n soierie de Venize\n à 3 euros', { fontSize: '25px', fill: '#000' }).setScale(1.25);
      
        

    

    
        
        const clickButton4 = this.add.image(850, 180, '1euro').setScale(0.17).setInteractive().on('pointerdown', () =>this.add.image(850, 700, '1euro').setScale(0.17)  && C-- && this.count3.setText(C) &&  A++ && this.count1.setText(A)  && limit(A) ); 
        


        const clickButton5 = this.add.image(1100, 180, '2euro').setScale(0.17).setInteractive().on('pointerdown', () =>this.add.image(1100, 700, '2euro').setScale(0.17) && D-- && this.count4.setText(D) &&  B++ && this.count2.setText(B)   && limit2(B) ); 

        this.count1= this.add.text(900, 750, '', { fontSize: '32px', fill: '#FFF' }).setScale(1.8);
        this.count2= this.add.text(1150, 750, '', { fontSize: '32px', fill: '#FFF' }).setScale(1.8);

        this.count3= this.add.text(900, 230, '2', { fontSize: '32px', fill: '#FFF' }).setScale(1.8);
        this.count4= this.add.text(1150, 230, '4', { fontSize: '32px', fill: '#FFF' }).setScale(1.8);

        clickButton4.on('pointerover', function(){clickButton4.setTint(0x738080);}, this)
        clickButton4.on('pointerout', function(){clickButton4.setTint(0xffffff);}, this)
        clickButton5.on('pointerover', function(){clickButton5.setTint(0x738080);}, this)
        clickButton5.on('pointerout', function(){clickButton5.setTint(0xffffff);}, this)
       

        clickButton4.on('pointerdown', function(){
            console.log("coucou");
            this.incrementClickCount1();
            this.soundcoin.play(soundConf);
        },this);


      
        clickButton5.on('pointerdown', function(){
            console.log("coucou");
            this.incrementClickCount2();
            this.soundcoin.play(soundConf);
        },this);
         
  

        

      function limit(number){
          if(number==2){
            clickButton4.removeInteractive();
          }
      } 
      
        function limit2(number2){
            if(number2==4){
            clickButton5.removeInteractive();
            }
        } 

        
        const clickButton6 = this.add.image(1370, 880, 'valid').setScale(0.40).setInteractive().on('pointerdown', () => this.checkscore() ); 

        const clickButton7 = this.add.image(1190, 880, 'refresh').setScale(0.25).setInteractive().on('pointerdown', () =>this.music3.play(musicConf1) && this.scene.start("Scene3_3") ); 
       
        clickButton6.on('pointerover', function(){clickButton6.setTint(0xe6ffff);}, this)
        clickButton6.on('pointerout', function(){clickButton6.setTint(0xffffff);}, this)
        clickButton7.on('pointerover', function(){clickButton7.setTint(0xe6ffff);}, this)
        clickButton7.on('pointerout', function(){clickButton7.setTint(0xffffff);}, this)

    }

    incrementClickCount1() {
        this.score += 1;
        
      }

      incrementClickCount2() {
        this.score += 2;
        
      }

    checkscore(){
        if(this.score == this.montant){
            this.textevictoire.setText("C'est parfait");
            this.time.addEvent({ delay: 5000, callback: ()=>{ this.music3.stop() && this.scene.start("Scene3_4") ;}, loop: false });
        }else {
            this.textevictoire.setText("Non ce n'est pas ça");
            this.time.addEvent({ delay: 5000, callback: ()=>{ this.music3.stop() && this.scene.start("Scene3_3")}, loop: false });
        }
    }

    update(){
     
       
    }


   

}