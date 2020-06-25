class Scene35 extends Phaser.Scene {

    constructor() {
        super("Scene35");
    }

    preload(){
      
    }

    create(){

        localStorage.setItem('lastScene', 'Scene35');

        var musicConf1_1 = {
            mute: false,
            volume: 0.6,
            rate: 1,
            loop : true,
        }

      
        
        this.music = this.sound.add("fin");
        this.music.play(musicConf1_1);
     
       
      
        this.background = this.add.image(1085,520,'fin1').setScale(1);
        this.background = this.add.image(1675,820,'tab6').setScale(0.55);

        this.textevictoire= this.add.text(200, 700,"Nouvelle Partie", { fontSize: '25px', fill: '#000' }).setScale(1.25).setVisible(false);
          
        const clickButton = this.add.image(300,800, 'flecheb').setScale(0.25).setInteractive().on('pointerdown', () =>this.scene.start("Scene32")); 
        clickButton.on('pointerover', function(){clickButton.setTint(0x738080);}, this)
        clickButton.on('pointerout', function(){clickButton.setTint(0xffffff);}, this)
        clickButton.setVisible(false);
        
        clickButton.on('pointerdown', function(){
            this.game.sound.stopAll();
        },this);

        this.time.addEvent({ delay: 5000, callback: ()=>{  clickButton.setVisible(true);}, loop: false });
        this.time.addEvent({ delay: 5000, callback: ()=>{ this.textevictoire.setVisible(true);}, loop: false });
        
    }
}