class Scene34 extends Phaser.Scene {

    constructor() {
        super("Scene34");
    }

      
    preload(){
        this.load.video('vortex9', 'assets/vortex.mp4', 'loadeddata', false, true);
        this.load.audio('vortex10', 'assets/1.mp3');
     }
     create(){

        var musicConf2_11 = {
            mute: false,
            volume: 3,
            rate: 1,
            loop : false,
        }


      

        this.music2_1 = this.sound.add("vortex10");
    
        this.music2_1.play(musicConf2_11);
        this.background = this.add.video(1100,460,'vortex9').setScale(1.8);
      
        this.time.addEvent({ delay: 4000, callback: ()=>{ this.music2_1.stop() && this.scene.start("Scene35")}, loop: false });
    }
}
