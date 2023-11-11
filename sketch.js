var bg, bgImg;
var playerP, playerImgP, playerImgA, playerA;
//AULA 47 - VARIÁVEIS
var lixo0, lixo1,lixo2,lixo3, lixo0Img, lixo1Img, lixo2Img, lixo3Img;
var score = 0;

function preload(){

  bgImg = loadImage("assets/bg.png");

  playerImgP = loadImage("assets/MENINA ANDANDO/MA1.png")

  playerImgA = loadAnimation(
    "assets/MENINA ANDANDO/MA2.png",
    "assets/MENINA ANDANDO/MA3.png", 
    "assets/MENINA ANDANDO/MA4.png",
  );

  //AULA 47 - Inserindo imagens de lixo para a menina pegar
  lixo0Img = loadImage ("assets/LIXOS/lixo0.jpg")
  lixo1Img = loadImage ("assets/LIXOS/lixo1.jpg")
  //...

  //AULA 47 - Inserindo balão de fala
  balaoFalaImg0 = loadImage("assets/BALAO_FALA/balãoFala0.png")
  //...

}

function setup() {
  createCanvas(windowWidth,windowHeight);

  bg = createSprite(displayWidth/2,displayHeight/2,20,20)
  bg.addImage(bgImg)
  bg.scale = 2.9
  
  playerP = createSprite(displayWidth-1500, displayHeight-300,50, 50);
  playerP.addImage("stopped", playerImgP)
  playerP.scale = 0.8

  playerA = createSprite(displayWidth-1500, displayHeight-300,50, 50);
  playerA.addAnimation("walking",playerImgA)
  playerA.scale = 0.8
  playerA.visible = false; 

  //AULA 47 - Inserindo espaço e imagem de área de lixo
  

  //AULA 47 - Inserindo Balão de Fala com atraso de tempo
  
  
  //AULA 47 - outro balão de fala, mas invisível
  
  

  edges = createEdgeSprites();
  
}

function draw() {
  background(0); 

  if(keyDown("LEFT_ARROW")||touches.length>0){

    playerP.x = playerP.x - 30

    playerA.visible = true;
    playerP.visible = false;

    playerA.mirrorX(-1)
    playerP.mirrorX(-1)
    
  }else{
   
    playerA.visible = false;
    playerP.visible = true;

    playerA.x = playerP.x;
    playerA.y = playerP.y;
  }

  if(keyDown("RIGHT_ARROW")||touches.length>0){
   
    playerP.x = playerP.x + 30;

    playerA.visible = true;
    playerP.visible = false;

    playerA.mirrorX(1)
    playerP.mirrorX(1)
    
  }else{
    playerA.x = playerP.x
    playerA.y = playerP.y;
  }

  if(keyWentDown("space") ){
    playerP.y = 400;
  }
  playerP.velocityY = playerP.velocityY + 0.5;

  playerP.collide(edges)

  //AULA 47 - Função de toque, quando a menina toca no lixo ele some
  

  //AULA 47 - verificação de pontuação para dar acesso ao outro balão de fala
  
  
  drawSprites();

  //AULA 47 - Inserção de Pontos
  
}

//AULA 47 - DECOMPOSIÇÃO DO JOGO
/*
1 - Inserir Pontuação
2 - Balão de fala
3 - Inserir imagens dos lixos
4 - Fazer a pontuação funcionar ao player tocar no lixo
5 - Transição de troca de balão de fala
6 - hospedar no github
*/

//AULA 46 - DECOMPOSIÇÃO DO JOGO
/*
1 - Inserir Personagem
2 - Criar movimentação de: pulo e andar (esquerda/direita)
3 - Espelhamento de movimento
4 - Bloqueio de Paredes da tela
5 - Hospedar no github
*/

//AULA 45 - DECOMPOSIÇÃO DO JOGO
/*
1 - Mudar background
2 - Colocar imagem da natureza
3 - Baixar imagem da natureza suja
4 - Baixar imagem de lixo
5 - Hospedar no github
*/



