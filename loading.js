class loading extends Phaser.Scene {

    constructor() {
        super("loading");
    }



    preload() {
     
        this.graphics = this.add.graphics();
		this.newGraphics = this.add.graphics();
		var progressBar = new Phaser.Geom.Rectangle(200, 200, 400, 50);
		var progressBarFill = new Phaser.Geom.Rectangle(205, 205, 290, 40);

		this.graphics.fillStyle(0xffffff, 1);
		this.graphics.fillRectShape(progressBar);

		this.newGraphics.fillStyle(0x3587e2, 1);
		this.newGraphics.fillRectShape(progressBarFill);

        var loadingText = this.add.text(250,260,"Loading: ", { fontSize: '32px', fill: '#FFF' });
        
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
     this.load.image('flecheb1', 'assets/flecheb.png');

     this.load.image('fleche', 'assets/arrow.png');
     this.load.audio('timesound', 'assets/time_son.mp3');
     this.load.image('machine', 'assets/time-machine.webp');
     this.load.video('vortex1', 'assets/vortex.mp4', 'loadeddata', false, true);
     this.load.audio('vortex1', 'assets/1.mp3');

     this.load.image('antiquaire', 'assets/antiquaire.png');
     this.load.audio('timesound1', 'assets/oblivion.mp3');
     
     this.load.image('ok1', 'assets/flecheb.png');

     this.load.video('vortex7', 'assets/vortex.mp4', 'loadeddata', false, true);
     this.load.audio('vortex8', 'assets/1.mp3');

     this.load.image('entree', 'assets/entre.png');
     
     this.load.image('banquier', 'assets/banquier1.png');
     this.load.image('ok', 'assets/flecheb.png');

     this.load.image('tableau', 'assets/tableau1.png');
     this.load.image('1euro', 'assets/1euro1.png');
     this.load.image('2euro', 'assets/2euro1.png');
     this.load.image('bulle', 'assets/bulle.png');
     this.load.audio('TW3', 'assets/TW3.mp3');
     this.load.image('valid', 'assets/valid.png');
     this.load.image('parchemin3', 'assets/parchemin3.png');
     this.load.image('refresh', 'assets/refresh.png');
     this.load.audio('coin','assets/coin.mp3');


     this.load.image('1cent', 'assets/1cent.png');
     this.load.image('2cent', 'assets/2cent.png');
     this.load.image('5cent', 'assets/5cent.png');
     this.load.image('10cent', 'assets/10cent.png');
     this.load.image('20cent', 'assets/20cent.png');
     this.load.image('50cent', 'assets/50cent.png');
    
     this.load.image('interieur', 'assets/interieur.jpg');
     
     this.load.audio('inf', 'assets/infiltration.mp3');
     this.load.image('fleche1', 'assets/fleche.png');
     
     this.load.image('tresor', 'assets/tresor.jpg');
     
     this.load.audio('find', 'assets/find.mp3');
     this.load.image('calice', 'assets/calice.png');

     
     this.load.image('Sphinx', 'assets/Sphinx.png');
   
     this.load.audio('sava', 'assets/riddle.mp3');

     
     this.load.image('FormeCercle', 'assets/FormeCercle.png');
    
     this.load.image('Cercle', 'assets/Cercle.png');
     this.load.image('Carre', 'assets/Carre.png');
     this.load.image('Rectangle', 'assets/Rectangle.png');
     this.load.image('Triangle', 'assets/Triangle.png');
     this.load.image('parchemin2', 'assets/parchemin2.png');

     this.load.image('FormeTriangle', 'assets/FormeTriangle.png');
  
     this.load.image('FormeCarre', 'assets/FormeCarre.png');

     this.load.image('FormePentagone', 'assets/FormePentagone.png');
     
     this.load.image('Pentagone', 'assets/Pentagone.png');
     this.load.image('Octogone', 'assets/Octogone.png');
     this.load.image('Losange', 'assets/Losange.png');
     this.load.image('Hexagone', 'assets/Hexagone.png');

     
     this.load.image('FormeLosange', 'assets/FormeLosange.png');

     this.load.image('FormeHexagone', 'assets/FormeHexagone.png');

     this.load.image('CarrePerimetre', 'assets/CarrePerimetre.png');
  
     this.load.image('12cm', 'assets/12cm.png');
     this.load.image('18cm', 'assets/18cm.png');
     this.load.image('24cm', 'assets/24cm.png');
     this.load.image('26cm', 'assets/26cm.png');

     this.load.image('RectanglePerimetre', 'assets/RectanglePerimetre.png');
    
     this.load.image('34cm', 'assets/34cm.png');
     this.load.image('36cm', 'assets/36cm.png');
     this.load.image('38cm', 'assets/38cm.png');
     

     
     this.load.image('HexagonePerimetre', 'assets/HexagonePerimetre.png');
     
    
     this.load.image('homme', 'assets/homme.png');
     this.load.image('abeille', 'assets/abeille.png');
     this.load.image('oiseau', 'assets/oiseau.png');
     this.load.image('chien', 'assets/chien.png');

     this.load.image('cave', 'assets/cave.jpg');
     
     this.load.image('caverne_final', 'assets/caverne_final.jpg');
     
    
     this.load.image('pandore', 'assets/pandore.png');
  
     this.load.video('vortex10', 'assets/vortex.mp4', 'loadeddata', false, true);

     this.load.video('vortex5', 'assets/vortex.mp4', 'loadeddata', false, true);
     
     this.load.image('grece', 'assets/grece.png');
     this.load.image('panneau', 'assets/panneau.png');
     this.load.image('statue', 'assets/statue.png');
     this.load.image('pythagore', 'assets/Pythagore.png');
     this.load.audio('savazios', 'assets/savazios.mp3');

     this.load.image('foret', 'assets/foret.jpg');

     this.load.image('up', 'assets/up.png');
     this.load.audio('bird', 'assets/bird.mp3');

     this.load.image('gif', 'assets/GIF.gif');

    
      this.load.audio('dark', 'assets/dark.mp3');
      this.load.image('entrecave', 'assets/entrecave.jpg');

      this.load.image('tresor2', 'assets/tresor2.png');
      this.load.image('genie2', 'assets/genie2.png');
      this.load.image('bullej', 'assets/bulle.png');
     
    
      this.load.audio('genie_lamp', 'assets/genie_lamp.mp3');

     
      this.load.image('genie1', 'assets/genie1.png');
      this.load.image('genie4', 'assets/genie4.png');
      this.load.image('genie5', 'assets/genie5.png');
      this.load.image('bulle2', 'assets/bulle2.png');
      this.load.image('papyrus', 'assets/papyrus.png');
      this.load.image('parchemin1', 'assets/parchemin1.png');
      this.load.audio('wrong','assets/wrong.mp3');
      this.load.audio('good','assets/good.mp3');


      this.load.video('vortex2', 'assets/vortex.mp4', 'loadeddata', false, true);


      this.load.image('market', 'assets/market.jpg');
      this.load.image('chameau', 'assets/chameau.png');
     
      this.load.image('al', 'assets/al.png');
      this.load.audio('banner', 'assets/banner.mp3');

      this.load.image('desert', 'assets/desert.jpg');
     
     
      this.load.image('up1', 'assets/up.png');
      this.load.audio('arabia', 'assets/arabia.mp3');


      this.load.image('nomade', 'assets/nomade.jpg');
     
     
      this.load.image('flecheb', 'assets/flecheb.png');

      this.load.image('cavedesert1', 'assets/cavedesert1.jpg');
     
     
     this.load.image('ouvre', 'assets/ouvre.png');
     this.load.audio('stone', 'assets/stone.mp3');

     this.load.image('cavedesert', 'assets/cavedesert.jpg');
     this.load.audio('zelda', 'assets/zelda.mp3');
     
     this.load.image('ouvre1', 'assets/up.png');

    
     
     
     this.load.image('lampe', 'assets/lampe.png');


     this.load.video('vortex6', 'assets/vortex.mp4', 'loadeddata', false, true);
     
     this.load.image('space', 'assets/space.jpg');
     
     
     this.load.image('tab1', 'assets/tab1.png');
     this.load.image('tab2', 'assets/tab2.png');
     this.load.image('tab3', 'assets/tab3.png');
     this.load.image('tab4', 'assets/tab4.png');
    
     this.load.audio('dune', 'assets/dune.mp3');

     this.load.image('guilde', 'assets/guilde.jpg');
     this.load.image('tab5', 'assets/tab5.png');
     this.load.audio('audio2', 'assets/2.mp3');
     this.load.audio('audio3', 'assets/3.mp3');

     this.load.video('vortex9', 'assets/vortex.mp4', 'loadeddata', false, true);
     this.load.audio('vortex10', 'assets/1.mp3');

     this.load.image('fin1', 'assets/fin.jpg');
     
     
     this.load.image('tab6', 'assets/tab6.png');
   
 
     this.load.audio('fin', 'assets/fin.mp3');

        this.load.on('progress', this.updateBar, {newGraphics:this.newGraphics,loadingText:loadingText});
		this.load.on('complete', this.complete, {scene:this.scene});
    }


updateBar(percentage) {
this.newGraphics.clear();
this.newGraphics.fillStyle(0x3587e2, 1);
this.newGraphics.fillRectShape(new Phaser.Geom.Rectangle(205, 205, percentage*390, 40));
		
percentage = percentage * 100;
this.loadingText.setText("Loading: " + percentage.toFixed(2) + "%");
console.log("P:" + percentage);

}

complete() {
    console.log("COMPLETE!");
    this.scene.start("bootGame");
}
    
    
    
 
}