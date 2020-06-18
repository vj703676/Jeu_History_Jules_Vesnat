class Scene23 extends Phaser.Scene {

    constructor() {
        super("Scene23");
    }

    preload(){
        this.load.image('antiquaire', 'assets/antiquaire.png');
        this.load.audio('timesound1', 'assets/oblivion.mp3');
        
        this.load.image('ok1', 'assets/flecheb.png');
        
    }

    create(){

        var musicConf1_1 = {
            mute: false,
            volume: 1.5,
            rate: 1,
            loop : true,
        }

        var musicConf1_2 = {
            mute: true,
            volume: 0,
            rate: 0,
            loop : false,
        }

        
        this.music1_1 = this.sound.add("timesound1");
        this.music1_1.play(musicConf1_1);
        
        this.background = this.add.image(1100,500,'antiquaire').setScale(1.2);
        this.background = this.add.image(1450,400,'bulle1').setScale(1.2);

        this.textevictoire= this.add.text(1270, 320, 'Il te faut à présent \n te rendre en Perse\nen pleine Renaissance\n  italienne !', { fontSize: '25px', fill: '#000' }).setScale(1.25);
        this.time.addEvent({ delay: 8000, callback: ()=>{this.textevictoire.setText("L'artefact que \ntu dois retrouver\nest le saint Graal");}, loop: false });
        this.time.addEvent({ delay: 16000, callback: ()=>{this.textevictoire.setText("La dernière fois \nqu'il a été mentionné,\nc'était à Florence,\npar les Médicis");}, loop: false });
        this.time.addEvent({ delay: 24000, callback: ()=>{this.textevictoire.setText("La machine à voyager\n est prête l'année\n  1476 t'attends !\n Bonne chance!");}, loop: false });
        const clickButton = this.add.image(1090, 800, 'ok1').setScale(0.25).setInteractive().on('pointerdown', () =>this.scene.start("Scene24")&& this.music1_1.play(musicConf1_2) );
        
        clickButton.on('pointerover', function(){clickButton.setTint(0x738080);}, this)
        clickButton.on('pointerout', function(){clickButton.setTint(0xffffff);}, this)
        
    }

}