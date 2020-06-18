class Scene31 extends Phaser.Scene {

    constructor() {
        super("Scene31");
    }

      
    preload(){
        this.load.video('vortex6', 'assets/vortex.mp4', 'loadeddata', false, true);
        this.load.audio('vortex1', 'assets/1.mp3');
     }
     create(){

        var musicConf2_11 = {
            mute: false,
            volume: 3,
            rate: 1,
            loop : false,
        }


      

        this.music2_1 = this.sound.add("vortex1");
    
        this.music2_1.play(musicConf2_11);
        this.background = this.add.video(1100,460,'vortex6').setScale(1.8);
      
        this.time.addEvent({ delay: 4000, callback: ()=>{ this.music2_1.stop() && this.scene.start("Scene1_01")}, loop: false });
    }
}
