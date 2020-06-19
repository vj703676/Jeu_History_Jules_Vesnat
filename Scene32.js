class Scene32 extends Phaser.Scene {

    constructor() {
        super("Scene32");
    }

    preload(){
        this.load.image('space', 'assets/space.jpg');
        
        
        this.load.image('tab1', 'assets/tab1.png');
        this.load.image('tab2', 'assets/tab2.png');
        this.load.image('tab3', 'assets/tab3.png');
        this.load.image('tab4', 'assets/tab4.png');
        this.load.image('flecheb', 'assets/flecheb.png');
        this.load.audio('dune', 'assets/dune.mp3');
    }

    create(){


        var musicConf1_1 = {
            mute: false,
            volume: 1.5,
            rate: 1,
            loop : false,
        }

      
        
        this.music = this.sound.add("dune");
        this.music.play(musicConf1_1);
     
       
      
        this.background = this.add.image(1085,520,'space').setScale(1.2);
        this.background = this.add.image(1085,520,'tab1').setScale(0.7);
        this.time.addEvent({ delay: 15000, callback: ()=>{  this.background = this.add.image(1085,520,'tab2').setScale(0.7);}, loop: false });
        this.time.addEvent({ delay: 28000, callback: ()=>{  this.background = this.add.image(1085,520,'tab3').setScale(0.7);}, loop: false });
        this.time.addEvent({ delay: 42000, callback: ()=>{  this.background = this.add.image(1085,520,'tab4').setScale(0.7);}, loop: false });
        const clickButton = this.add.image(1100,900, 'flecheb').setScale(0.25).setInteractive().on('pointerdown', () =>this.scene.start("Scene33")); 
        clickButton.on('pointerover', function(){clickButton.setTint(0x738080);}, this)
        clickButton.on('pointerout', function(){clickButton.setTint(0xffffff);}, this)
        clickButton.setVisible(false);
        
        clickButton.on('pointerdown', function(){
            this.game.sound.stopAll();
        },this);
        this.time.addEvent({ delay: 45000, callback: ()=>{  clickButton.setVisible(true);}, loop: false });
        
    }
}