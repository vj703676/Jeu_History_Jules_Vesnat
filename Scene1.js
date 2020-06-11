class Scene1 extends Phaser.Scene {

    constructor() {
        super("bootGame");
    }

    
    preload(){
        //this.load.video('menu', 'assets/video.mp4', 'loadeddata', false, true);
        this.load.image('back', 'assets/florence.png');
        this.load.image('ground', 'assets/ground.png');
        this.load.image('button1', 'assets/start.png');
        this.load.image('button2', 'assets/option.png');
        this.load.image('button3', 'assets/quit.png');
        this.load.image('guard', 'assets/guard1.png');
        this.load.image('menu1', 'assets/Menu1.jpg');
        this.load.image('building', 'assets/building.png');
        this.load.spritesheet('1', 'assets/1.png', { frameWidth: 203, frameHeight: 173 });
        this.load.spritesheet('2', 'assets/2.png', { frameWidth: 203, frameHeight: 175 });
        this.load.spritesheet('3', 'assets/3.png', { frameWidth: 167, frameHeight: 158 });
        this.load.audio('music', 'assets/france.mp3');
        this.load.audio('sound1', 'assets/town.ogg');
        this.load.audio('sound3', 'assets/italianmusic.mp3');
        this.load.image('Vinci', 'assets/Vinci.png');
        this.load.image('Joconde', 'assets/joconde.png');
        this.load.image('bulle1', 'assets/bulle1.png');
        this.load.image('vide', 'assets/vide.png');
    
    }

    create(){
        //this.background = this.add.video(1100,460, 'menu').setScale(1.2).setLoop(true); 
        
        
        this.background = this.add.image(1050,500,'menu1').setScale(1.5);
        
        this.music = this.sound.add("music");
        
        

        var musicConf = {
            mute: false,
            volume: 1,
            rate: 1,
            loop : true,
        }

            
        var musicConf1 = {
            mute: true,
            volume: 0,
         
        }

     

        this.music.play(musicConf);
        
        const clickButton1 = this.add.image(1950, 800, 'button1').setScale(0.25).setInteractive().on('pointerdown', () =>this.scene.start("Scene9") && this.music.play(musicConf1)); 
        
        clickButton1.on('pointerover', function(){clickButton1.setTint(0xf0ff00);}, this)
        clickButton1.on('pointerout', function(){clickButton1.setTint(0xffffff);}, this)
        
        const clickButton2 = this.add.image(1950, 870, 'button2').setScale(0.25).setInteractive().on('pointerdown', () =>this.scene.start("Scene6") && this.music.play(musicConf1));
        clickButton2.removeInteractive();
        clickButton2.on('pointerover', function(){clickButton2.setTint(0xf0ff00);}, this)
        clickButton2.on('pointerout', function(){clickButton2.setTint(0xffffff);}, this)

        const clickButton3 = this.add.image(1950, 940, 'button3').setScale(0.25).setInteractive().on('pointerdown', () =>this.scene.start("Scene6_10") && this.music.play(musicConf1));
        clickButton3.removeInteractive();
        clickButton3.on('pointerover', function(){clickButton3.setTint(0xf0ff00);}, this)
        clickButton3.on('pointerout', function(){clickButton3.setTint(0xffffff);}, this)
        
        
        
    }   
}
