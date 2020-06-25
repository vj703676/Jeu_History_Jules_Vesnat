class Scene11 extends Phaser.Scene {

    constructor() {
        super("Scene11");
    }

      
    preload(){
     
     }
     create(){


        localStorage.setItem('lastScene', 'Scene11');

        var musicConf2_11 = {
            mute: false,
            volume: 3,
            rate: 1,
            loop : false,
        }


      

        this.music2_1 = this.sound.add("vortex1");
    
        this.music2_1.play(musicConf2_11);
        this.background = this.add.video(1100,460,'vortex5').setScale(1.8);
      
        this.time.addEvent({ delay: 4000, callback: ()=>{ this.music2_1.stop() && this.scene.start("Scene23")}, loop: false });
    }
}
