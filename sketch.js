var ladrao, diamante, laser1, laser2, paredes;
var estadojogo;

function setup() {
    createCanvas(500, 200);
    montarJogo();
    estadojogo = 'parado';
}

function draw() {
    background(0);
    drawSprites();

    if (estadojogo === 'parado') {
        textSize(20);
        fill('white');
        text('Pressione ESPAÇO para iniciar', 60, 100);
        
        if (keyDown('SPACE')) {
            inimigo1.velocityY = 5;
            inimigo2.velocityY = 5;
            inimigo3.velocityY =5
            inimigo4.velocityY =5          
            inimigo5.velocityY =5
           inimigo6.velocityY=5
          inimigo7.velocityY=5
          inimigo8.velocityY =-5
          inimigo9.velocityY = -5
          inimigo10.velocityY = - 5
          inimigo11.velocityY = -5
          inimigo12.velocityY = -5
          estadojogo = 'play';
          
        }
    }

    if (estadojogo === 'play') {
      inimigo1.bounceOff(paredes);
      inimigo2.bounceOff(paredes);
      inimigo3.bounceOff(paredes)
      inimigo4.bounceOff(paredes)
      inimigo5.bounceOff(paredes)
      inimigo6.bounceOff(paredes)
      inimigo7.bounceOff(paredes)
      inimigo8.bounceOff(paredes)
      inimigo9.bounceOff(paredes)
      inimigo10.bounceOff(paredes)
      inimigo11.bounceOff(paredes)
      inimigo12.bounceOff(paredes)
      
        if (keyDown('left')) {
            ladrao.x -= 4;
        } else if (keyDown('right')) {
            ladrao.x += 4;
        } else if (keyDown('up')) {
            ladrao.y -= 4;
        } else if (keyDown('down')) {
            ladrao.y += 4;
        }
        
        ladrao.collide(paredes);
        
        if (ladrao.isTouching(inimigo1) || ladrao.isTouching(inimigo2)||ladrao.isTouching(inimigo3)||ladrao.isTouching(inimigo4)||ladrao.isTouching(inimigo5)||ladrao.isTouching(inimigo6)||ladrao.isTouching(inimigo7)||ladrao.isTouching(inimigo8)||ladrao.isTouching(inimigo9)||ladrao.isTouching(inimigo10)||ladrao.isTouching(inimigo11)||ladrao.isTouching(inimigo12)) {
            estadojogo = 'gameOver';
        }
        
        if (ladrao.isTouching(diamante)) {
            estadojogo = 'winner';
        }
    }
    
    if (estadojogo === 'gameOver') {
        fimDeJogo();
        fill('white');
        textSize(30);
        text('GAME OVER ', 50, 100);
        textSize(15);
        text('Pressione R para Reiniciar', 100, 150);
        
        if (keyDown('r')) {
            estadojogo = 'parado';
            montarJogo();
        }
    }
    
    if (estadojogo === 'winner') {
        fimDeJogo();
        fill('white');
        textSize(30);
        text('Voce passou', 50, 100);
        textSize(15);
        text('Pressione R para Reiniciar', 100, 150);
        
        if (keyDown('r')) {
            estadojogo = 'parado';
            montarJogo();
        }
    }
}

function montarJogo() {
    ladrao = createSprite(40, 100, 15, 15);
    ladrao.shapeColor ='yellow'
    diamante = createSprite(420, 90, 20, 20);
    
    inimigo1 = createSprite(120, 190, 15, 15);
    inimigo1.shapeColor = 'red';
    inimigo2 = createSprite(100, 10, 15, 15);
    inimigo2.shapeColor = 'red';
    inimigo3 = createSprite(150, 10, 15, 15);
    inimigo3.shapeColor = 'red';
    inimigo4 = createSprite(200, 10, 15, 15);
    inimigo4.shapeColor = 'red';
    inimigo5 = createSprite(250, 10, 15, 15);
    inimigo5.shapeColor = 'red';
    inimigo6 = createSprite(300, 10, 15, 15);
    inimigo6.shapeColor = 'red';   
    inimigo7= createSprite (350,10,15,15)
    inimigo7.shapeColor= 'red'
    inimigo8= createSprite (180,190,15,15)
    inimigo8.shapeColor = 'red'
    inimigo9= createSprite(230,190,15,15)
    inimigo9.shapeColor = ' red'
    inimigo10= createSprite(280,190,15,15)
    inimigo10. shapeColor = 'red'
    inimigo11= createSprite (330,190,15,15)
    inimigo11.shapeColor = 'red'
    inimigo12 = createSprite (380,190,15,15)
    inimigo12. shapeColor = 'red'
  paredes = createEdgeSprites();
}

function fimDeJogo() {
    ladrao.remove();
    diamante.remove();
    inimigo1.remove();
    inimigo2.remove();
    inimigo3.remove()
    inimigo4.remove()
    inimigo5.remove()
    inimigo6.remove()
    inimigo7.remove()
    inimigo8.remove()
    inimigo9.remove()
    inimigo10.remove()
    inimigo11.remove()
    inimigo12.remove()
}

