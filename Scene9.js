class Scene9 extends Phaser.Scene {

    constructor() {
        super("Scene9");
    }

    preload(){
        
        
    }

    create(){

        localStorage.setItem('lastScene', 'Scene9');

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

        this.textevictoire= this.add.text(1270, 320, 'Tu dois te rendre\nà Athènes en pleine\n Grèce antique !', { fontSize: '25px', fill: '#000' }).setScale(1.25);
        this.time.addEvent({ delay: 8000, callback: ()=>{this.textevictoire.setText("Tu dois retrouver \nla boîte de Pandore\net la ramener ici...");}, loop: false });
        this.time.addEvent({ delay: 16000, callback: ()=>{this.textevictoire.setText("Tu trouveras le\ncélèbre Pythagore,\nil t'aidera à trouver\nla boîte...");}, loop: false });
        this.time.addEvent({ delay: 24000, callback: ()=>{this.textevictoire.setText("J'ai terminé les\nréglages de la machine\nà remonter le temps\n Bonne chance!");}, loop: false });
        const clickButton = this.add.image(1090, 800, 'ok1').setScale(0.25).setInteractive().on('pointerdown', () =>this.scene.start("Scene10")&& this.music1_1.play(musicConf1_2) );
        
        clickButton.on('pointerover', function(){clickButton.setTint(0x738080);}, this)
        clickButton.on('pointerout', function(){clickButton.setTint(0xffffff);}, this)
        clickButton.setVisible(false);
        this.time.addEvent({ delay: 26000, callback: ()=>{ clickButton.setVisible(true);}, loop: false });
        
    }

}