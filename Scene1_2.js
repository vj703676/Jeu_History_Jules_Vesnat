class Scene1_2 extends Phaser.Scene {

    constructor() {
        super("Time2");
    }

      
    preload(){
        this.load.video('vortex7', 'assets/vortex.mp4', 'loadeddata', false, true);
        this.load.audio('vortex8', 'assets/1.mp3');
     }
     
  create(){

     var musicConf2_11 = {
         mute: false,
         volume: 3,
         rate: 1,
         loop : false,
     }


   

     this.music2_1 = this.sound.add("vortex8");
 
     this.music2_1.play(musicConf2_11);
     this.background = this.add.video(1100,460,'vortex7').setScale(1.8);
   
     this.time.addEvent({ delay: 4000, callback: ()=>{ this.music2_1.stop() && this.scene.start("playGame")}, loop: false });
 }
}
