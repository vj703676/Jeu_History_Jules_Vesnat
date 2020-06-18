class Scene12 extends Phaser.Scene {

    constructor() {
        super("Scene12");
    }

    preload(){
        this.load.image('grece', 'assets/grece.png');
        this.load.image('panneau', 'assets/panneau.png');
        this.load.image('statue', 'assets/statue.png');
        this.load.image('pythagore', 'assets/Pythagore.png');
        this.load.audio('savazios', 'assets/savazios.mp3');
    }


    create(){

        var chevalier; 
        var garde;
        var cursors; 
        var platforms;
        var pythagore;
        var Venus;

        var musicConf2_13 = {
            mute: false,
            volume: 1,
            rate: 1,
            loop : true
        }

        this.imageGroup = this.add.group();
        
        this.music3 = this.sound.add("savazios");

        this.music2 = this.sound.add("sound1");
       

        this.music2.play(musicConf2_13);
        this.music3.play(musicConf2_13);

        
        this.platforms = this.physics.add.staticGroup();
        
        this.background = this.add.image(1080,500,'grece').setScale(1.37);
       
        
        

        this.garde = this.physics.add.image(1900,800, 'panneau').setScale(0.5);

        this.Venus = this.physics.add.image(1300,670, 'statue').setScale(0.5);

        this.pythagore = this.physics.add.image(700,800, 'pythagore').setScale(0.43);

        this.chevalier = this.physics.add.sprite(150, 780, '3').setScale(1.6);
        //this.chevalier.body.offset.y = 11;

        this.chevalier.setBounce(-1);
        this.garde.setBounce(-1);
        this.pythagore.setBounce(-1);
        this.Venus.setBounce(-1);
        this.chevalier.setCollideWorldBounds(true);
 

        this.physics.add.collider(this.chevalier, this.garde);
      
        
        
    
        this.cursors = this.input.keyboard.createCursorKeys()
    
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('1', { start: 0, end: 9 }),
            frameRate: 15,
            repeat: -1
        });
    
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('2', { start: 0, end: 9 }),
            frameRate: 15,
            repeat: -1
        });

     
    
        this.platforms.create(1000, 1260, 'ground').setScale(0.5).refreshBody();
        this.platforms.create(100, 1260, 'ground').setScale(0.5).refreshBody();
        this.platforms.create(500, 1260, 'ground').setScale(0.5).refreshBody();
        this.platforms.create(1500, 1260, 'ground').setScale(0.5).refreshBody();
        this.platforms.create(2000, 1260, 'ground').setScale(0.5).refreshBody();
    
        this.physics.add.collider(this.chevalier, this.platforms);
        this.physics.add.collider(this.garde, this.platforms);
        this.physics.add.collider(this.pythagore, this.platforms);
        this.physics.add.collider(this.Venus, this.platforms);

        var bulle = this.add.image(900,600,'bulle1').setScale(1.2);
        this.imageGroup.add(bulle);
        this.textevictoire= this.add.text(720, 520,"", { fontSize: '25px', fill: '#000' }).setScale(1.25);
        this.time.addEvent({ delay: 4000, callback: ()=>{this.textevictoire.setText("Buongiorno !\nJe suis Léonard,\nje viens du petit\n village de Vinci");}, loop: false });
        this.time.addEvent({ delay: 14000, callback: ()=>{this.textevictoire.setText("Tu me demandes \nsi j'ai entendu\nparler du Graal?");}, loop: false });
        this.time.addEvent({ delay: 24000, callback: ()=>{this.textevictoire.setText("Depuis peu, \nje suis au service\nde Laurent de Médicis\ndit le Magnifique");}, loop: false });
        this.time.addEvent({ delay: 34000, callback: ()=>{this.textevictoire.setText("Et j'ai entendu\ndes rumeurs\ncomme quoi\nles Médicis");}, loop: false });
        this.time.addEvent({ delay: 44000, callback: ()=>{this.textevictoire.setText("auraient ramené\nle Saint Graal\ndes Croisades");}, loop: false });
        this.time.addEvent({ delay: 54000, callback: ()=>{this.textevictoire.setText("et le garderaient\ndans une salle\nsecrète");}, loop: false });
        this.time.addEvent({ delay: 64000, callback: ()=>{this.textevictoire.setText("dans leur banque\njuste en face");}, loop: false });
        this.time.addEvent({ delay: 74000, callback: ()=>{this.textevictoire.setText("J'ai aussi\nentendu dire\n qu'ils cherchaient\ndes employés");}, loop: false });
        this.time.addEvent({ delay: 84000, callback: ()=>{this.textevictoire.setText("A présent\nje dois vous laisser\n et continuer ma\ndernière peinture");}, loop: false });
        this.time.addEvent({ delay: 94000, callback: ()=>{this.textevictoire.setText("Bonne chance\n dans Florence !");}, loop: false });
        this.time.addEvent({ delay: 104000, callback: ()=>{this.textevictoire.setText("");}, loop: false });
        this.time.addEvent({ delay: 114000, callback: ()=>{this.imageGroup.clear(true);}, loop: false });
    }
    
    update(){

        var musicConf2_14 = {
            mute: true,
            volume: 0,
            rate: 0,
            loop : false
        }
        
        this.chevalier.setVelocityX(0);

        this.garde.setVelocityX(0);

        /*
        if(this.cursors.up.isDown){
            this.chevalier.setVelocity(0, -300);
        } 
        */
    
        if(this.cursors.right.isDown){
            this.chevalier.setVelocity(200, 0);
            this.chevalier.body.offset.y = 11;
            this.chevalier.anims.play('right', true);
        }
    
        if(this.cursors.left.isDown){
            this.chevalier.setVelocity(-200, 0);
            this.chevalier.body.offset.y = 11;
            this.chevalier.anims.play('left', true);
        }
        

        if(checkOverlap(this.chevalier, this.garde)){
            this.scene.start("Scene12_1");
            
               
        }

      

        function checkOverlap(spriteA, spriteB) {
            var boundsA = spriteA.getBounds();
            var boundsB = spriteB.getBounds();
        
            return Phaser.Geom.Intersects.RectangleToRectangle(boundsA, boundsB);
        }
    
    }

}