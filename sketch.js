//importação de módulos da biblioteca Matter
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//variáveis para física e mundo
let engine, world;

//var para objetos "paredes", baseado na classe ground
//chão, paredeEsquerda, paredeDireita, teto
var ground, left, right, top_wall;


//var para a bola e os botões, aluno
var ball, btn1, btn2;


function setup() {

  createCanvas(400, 400);

  //criando a física e adicionando ao mundo
  engine = Engine.create();
  world = engine.world;


  //criar botão 1 -- aluno



  //criar Botão 2 -- aluno



  //paredes sendo criadas baseadas na classe ground,  prof
  ground = new Ground(200, 390, 400, 20);
  right = new Ground(390, 200, 20, 400);

  left = new Ground(10, 200, 20, 400);
  top_wall = new Ground(200, 10, 400, 20);


  //propriedade da bola, aluno
  


  //corpo da bola e adicionando ao mundo, aluno
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() {
  background("black");
  //atualização da física
  Engine.update(engine);

  fill("magenta");
  //exibir bola -- aluno (ellipse)
 

  //exibir paredes
  ground.show();
  left.show();
  right.show();
  top_wall.show();


}

//função de força horizontal, (aluno descomentar e analisar)
/*function hForce() {
  Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 0.05, y: 0 });
}*/


//função de força vertical, (aluno)
//vForce


