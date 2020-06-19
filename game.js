window.onload = function(){

  
    
const config = {
    width : 2170,
    height : 1040,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    autoRound: false,
    dom: {
        createContainer: true
    },
    scene: [Scene0, Scene1, Scene2, Scene3,Scene3_1,Scene3_2, Scene1_01, Scene1_1, Scene1_2, Scene2_1,Scene2_2, Scene4, Scene5, Scene3_3, Scene3_4, Scene3_5, Scene3_6, Scene6, Scene6_1, Scene6_2, Scene6_3, Scene6_4, Scene6_5, Scene6_6, Scene6_7, Scene6_8, Scene6_9, Scene6_10, Scene7, Scene8, Scene9, Scene10, Scene11,Scene12, Scene13, Scene14, Scene15, Scene16, Scene17, Scene18, Scene19, Scene20, Scene21, Scene22, Scene12_1, Scene12_2, Scene12_3, Scene23, Scene24, Scene25, Scene26, Scene27, Scene28, Scene29, Scene30, Scene31, Scene32, Scene33, Scene34, Scene35],
    physics:{
        default: 'arcade',
        arcade: {
            gravity: { y: 400
            }
        }
    }

}

var game = new Phaser.Game(config);




//window.addEventListener('resize', function (event) {

  //  game.scale.resize(window.innerWidth, window.innerHeight);
    
 //   }, false);


}




    