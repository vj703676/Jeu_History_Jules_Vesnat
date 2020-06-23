class Scene13 extends Phaser.Scene {

    constructor() {
        super("Scene13");
        
     
    }

    preload(){

        this.load.image('tresor2', 'assets/tresor2.png');
        this.load.image('genie2', 'assets/genie2.png');
        this.load.image('bullej', 'assets/bulle.png');
        //this.load.audio('music3', 'assets/music.mp3');
        this.load.image('ok', 'assets/flecheb.png');
        this.load.audio('genie_lamp', 'assets/genie_lamp.mp3');
    }
    
    create(){
       var musicConf = {
            mute: false,
            volume: 1,
            rate: 1,
            loop : true,
        }


        this.musicsava = this.sound.add("genie_lamp");

        this.musicsava.play(musicConf);
        
        this.background = this.add.image(1085,520,'tresor2').setScale(1);

        this.background = this.add.image(1700,500,'genie2').setScale(1);

        this.bulle = this.add.image(1300,600,'bullej').setScale(1.20); 


        this.textevictoire= this.add.text(1120, 560, 'Je suis le génie\nde la lampe magique,\ncréé par Al-Khwârizmî\nà partir des\n   mathématiques', { fontSize: '25px', fill: '#000' }).setScale(1.25);
        this.time.addEvent({ delay: 10000, callback: ()=>{this.textevictoire.setText("On dirait bien\nque tu es coincé\nici la porte s'est\nrefermée derrière toi");}, loop: false });
        this.time.addEvent({ delay: 20000, callback: ()=>{this.textevictoire.setText("Si tu veux devenir\nmon maître,\net que je t'exauce 3\nvœux...");}, loop: false });
        this.time.addEvent({ delay: 30000, callback: ()=>{this.textevictoire.setText("Un vœu pour\nsortir d'ici\npar exemple...");}, loop: false });
        this.time.addEvent({ delay: 36000, callback: ()=>{this.textevictoire.setText("Il va falloir\nque tu répondes\nà mes calculs\nmentaux...");}, loop: false });
        this.time.addEvent({ delay: 45000, callback: ()=>{this.textevictoire.setText("Mais fais attention\ncar tu n'as droit\nqu'à 3 essais\npar question !");}, loop: false });
        const clickButton = this.add.image(1090, 800, 'ok').setScale(0.25).setInteractive().on('pointerdown', () =>this.scene.start("Scene14")); 
        clickButton.on('pointerover', function(){clickButton.setTint(0x738080);}, this)
        clickButton.on('pointerout', function(){clickButton.setTint(0xffffff);}, this)
        clickButton.setVisible(false);
        this.time.addEvent({ delay: 47000, callback: ()=>{ clickButton.setVisible(true);}, loop: false });
    }


}