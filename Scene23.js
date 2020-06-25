class Scene23 extends Phaser.Scene {

    constructor() {
        super("Scene23");
    }

    preload(){
        
        
    }

    create(){

        localStorage.setItem('lastScene', 'Scene23');

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

        this.textevictoire= this.add.text(1270, 320, 'Il te faut à présent \n te rendre en Perse !', { fontSize: '25px', fill: '#000' }).setScale(1.25);
        this.time.addEvent({ delay: 8000, callback: ()=>{this.textevictoire.setText("L'artefact que \ntu dois retrouver\nest la lampe magique");}, loop: false });
        this.time.addEvent({ delay: 16000, callback: ()=>{this.textevictoire.setText("La boîte de Pandore \nnous a révélé sa\nposition");}, loop: false });
        this.time.addEvent({ delay: 16000, callback: ()=>{this.textevictoire.setText("Tu trouveras\nAl-Khwârizmî\nun savant Perse");}, loop: false });
        this.time.addEvent({ delay: 24000, callback: ()=>{this.textevictoire.setText("La machine à voyager\n est prête\n en avant !\n Bonne chance!");}, loop: false });
        const clickButton = this.add.image(1090, 800, 'ok1').setScale(0.25).setInteractive().on('pointerdown', () =>this.scene.start("Scene24")&& this.music1_1.play(musicConf1_2) );
        
        clickButton.on('pointerover', function(){clickButton.setTint(0x738080);}, this)
        clickButton.on('pointerout', function(){clickButton.setTint(0xffffff);}, this)
        clickButton.setVisible(false);
        this.time.addEvent({ delay: 26000, callback: ()=>{ clickButton.setVisible(true);}, loop: false });
    }

}