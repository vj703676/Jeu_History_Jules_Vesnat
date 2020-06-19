class Scene35 extends Phaser.Scene {

    constructor() {
        super("Scene35");
    }

    preload(){
        this.load.image('fin1', 'assets/fin.jpg');
        
        
        this.load.image('tab6', 'assets/tab6.png');
      
    
        this.load.audio('fin', 'assets/fin.mp3');
    }

    create(){


        var musicConf1_1 = {
            mute: false,
            volume: 0.6,
            rate: 1,
            loop : true,
        }

      
        
        this.music = this.sound.add("fin");
        this.music.play(musicConf1_1);
     
       
      
        this.background = this.add.image(1085,520,'fin1').setScale(1.2);
        this.background = this.add.image(1075,520,'tab6').setScale(0.55);
   
        
    }
}