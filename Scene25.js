class Scene25 extends Phaser.Scene {

    constructor() {
        super("Scene25");
    }

    preload(){
       
    }


    create(){

        localStorage.setItem('lastScene', 'Scene25');

        var chevalier; 
        var garde;
        var cursors; 
        var platforms;
        var pythagore;
        

        var musicConf2_13 = {
            mute: false,
            volume: 1,
            rate: 1,
            loop : true
        }

        this.imageGroup = this.add.group();
        
        this.music3 = this.sound.add("banner");

        this.music2 = this.sound.add("sound1");
       

        this.music2.play(musicConf2_13);
        this.music3.play(musicConf2_13);

        
        this.platforms = this.physics.add.staticGroup();
        
        this.background = this.add.image(1080,500,'market').setScale(1.1);
       
        
        

        this.garde = this.physics.add.image(1900,800, 'chameau').setScale(0.5);

        

        this.pythagore = this.physics.add.image(700,800, 'al').setScale(0.43);

        this.chevalier = this.physics.add.sprite(150, 750, '3').setScale(1.6);
        //this.chevalier.body.offset.y = 11;

        this.chevalier.setBounce(-1);
        this.garde.setBounce(-1);
        this.pythagore.setBounce(-1);
       
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
       

        this.bulle = this.add.image(900,600,'bulle1').setScale(1.2).setVisible(false);
        
      
        
        this.textevictoire= this.add.text(720, 520,"", { fontSize: '25px', fill: '#000' }).setScale(1.25);
        this.time.addEvent({ delay: 4000, callback: ()=>{this.bulle.setVisible(true);}, loop: false });
        this.time.addEvent({ delay: 4000, callback: ()=>{this.textevictoire.setText("Bien le bonjour !\nJe suis Al-Khwârizmî,\nun mathématicien \n Perse");}, loop: false });
        this.time.addEvent({ delay: 14000, callback: ()=>{this.textevictoire.setText("Tu me demandes \nsi j'ai entendu\nparler de la Lampe?");}, loop: false });
        this.time.addEvent({ delay: 24000, callback: ()=>{this.textevictoire.setText("Je l'ai inventée \nmoi même!\nElle est enchantée\ngrâce aux \n  mathématiques");}, loop: false });
        this.time.addEvent({ delay: 34000, callback: ()=>{this.textevictoire.setText("Mais tu arrives\ntrop tard...");}, loop: false });
        this.time.addEvent({ delay: 44000, callback: ()=>{this.textevictoire.setText("Des voleurs me\nl'ont enlevée et ils \nla cachent dans leur\n   caverne");}, loop: false });
        this.time.addEvent({ delay: 54000, callback: ()=>{this.textevictoire.setText("Elle se trouve\ndans la vallée\ndes portes chaudes");}, loop: false });
        this.time.addEvent({ delay: 64000, callback: ()=>{this.textevictoire.setText("Tu peux demander\nton chemin sur\nta route");}, loop: false });
        this.time.addEvent({ delay: 74000, callback: ()=>{this.textevictoire.setText("Je t'offre\nmon chameau Raoul\nil te sera très\nutile");}, loop: false });
        this.time.addEvent({ delay: 84000, callback: ()=>{this.textevictoire.setText("Surtout pour\nla traversée\n du désert");}, loop: false });
        this.time.addEvent({ delay: 94000, callback: ()=>{this.textevictoire.setText("Bonne chance\n mon ami !");}, loop: false });
        this.time.addEvent({ delay: 104000, callback: ()=>{this.textevictoire.setText("");}, loop: false });
        this.time.addEvent({ delay: 104000, callback: ()=>{this.bulle.setVisible(false);}, loop: false });

        
        const clickButton1 = this.add.image(1090, 800, 'flecheb1').setScale(0.25).setInteractive().on('pointerdown', () =>   this.music2.stop()).setVisible(false); 
        clickButton1.on('pointerover', function(){clickButton1.setTint(0x738080);}, this)
        clickButton1.on('pointerout', function(){clickButton1.setTint(0xffffff);}, this)
        clickButton1.on('pointerdown', function(){
            this.music3.stop();
            this.scene.start("Scene26");
        },this);

        this.time.addEvent({ delay: 94000, callback: ()=>{clickButton1.setVisible(true);}, loop: false });
       
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
            this.music2.stop();
            this.music3.stop();
            this.scene.start("Scene26");
            
               
        }

      

        function checkOverlap(spriteA, spriteB) {
            var boundsA = spriteA.getBounds();
            var boundsB = spriteB.getBounds();
        
            return Phaser.Geom.Intersects.RectangleToRectangle(boundsA, boundsB);
        }
    
    }

}