class Scene3 extends Phaser.Scene {

    constructor() {
        super("Math1");
        
    }

    

    preload(){

      
    }
   
    create(){

        localStorage.setItem('lastScene', 'Math1');
       
        var musicConf = {
            mute: false,
            volume: 0.6,
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

        this.music3 = this.sound.add("TW3");
        this.music3.play(musicConf);
        this.soundcoin = this.sound.add("coin");

        this.score = 0;
        this.montant = 5;
        
        this.background = this.add.image(1085,520,'tableau').setScale(1);

        this.background = this.add.image(120,890,'parchemin3').setScale(0.23).setDepth(1);

        this.niveau= this.add.text(104 , 857, 'Niveau\n  1/7', { fontSize: '25px', fill: '#000' }).setScale(1.1).setDepth(2);

        this.background = this.add.image(1600,680,'bulle').setScale(1.2);
        
        var count1;
        var count2;
        var count3;
        var count4;
        var A=0;
        var B=0;
        var C=2;
        var D=3;
        

        
        this.textevictoire= this.add.text(1400, 660, 'Il me faut une somme \n de 5 euros pour\n un client de\n Lombardie', { fontSize: '25px', fill: '#000' }).setScale(1.25);
      
        

    

    
        
        const clickButton4 = this.add.image(850, 180, '1euro').setScale(0.17).setInteractive().on('pointerdown', () =>this.add.image(850, 700, '1euro').setScale(0.17)  && C-- && this.count3.setText(C) &&  A++ && this.count1.setText(A)  && limit(A) ); 
        


        const clickButton5 = this.add.image(1100, 180, '2euro').setScale(0.17).setInteractive().on('pointerdown', () =>this.add.image(1100, 700, '2euro').setScale(0.17) && D-- && this.count4.setText(D) &&  B++ && this.count2.setText(B)   && limit2(B) ); 

        this.count1= this.add.text(900, 750, '', { fontSize: '32px', fill: '#FFF' }).setScale(1.8);
        this.count2= this.add.text(1150, 750, '', { fontSize: '32px', fill: '#FFF' }).setScale(1.8);

        this.count3= this.add.text(900, 230, '2', { fontSize: '32px', fill: '#FFF' }).setScale(1.8);
        this.count4= this.add.text(1150, 230, '3', { fontSize: '32px', fill: '#FFF' }).setScale(1.8);

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
            if(number2==3){
            clickButton5.removeInteractive();
            }
        } 

        
        const clickButton6 = this.add.image(1370, 880, 'valid').setScale(0.40).setInteractive().on('pointerdown', () => this.checkscore() ); 

        const clickButton7 = this.add.image(1190, 880, 'refresh').setScale(0.25).setInteractive().on('pointerdown', () =>this.music3.play(musicConf1) && this.scene.start("Math1") ); 
       
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
            this.time.addEvent({ delay: 5000, callback: ()=>{ this.scene.start("Scene3_1") ;}, loop: false });
        }else {
            this.textevictoire.setText("Non ce n'est pas ça");
            this.time.addEvent({ delay: 5000, callback: ()=>{ this.music3.stop() && this.scene.start("Math1")}, loop: false });
        }
    }

    update(){
     
       
    }


   

}