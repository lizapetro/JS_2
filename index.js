const code_left=37;
const code_right=39;
const code_up=38;
const code_down=40;
const min_step=10;
const max_step=50;

function Application(){

}
Application.prototype.start=function(){
  addEventListener('keydown',command);
}
Application.prototype.stop=function(){
  removeEventListener('keydown',command);

}
function Element(x,y,deg){
  this.x=x;
  this.y=y;
  this.deg=deg;
  this.draw();
}
Element.prototype.moveUpright=function(step){
  this.x+=step;
  this.name='upright';
  this.draw();
}
Element.prototype.moveHorizontal=function(step){
  this.y+=step;
  this.name='horizontal';
  this.draw();
}
Element.prototype.moveRotate=function(rotate){
  this.name='rotate';
  this.deg+=rotate;
  this.draw();
}
Element.prototype.draw=function(){
  if (this.name==='upright'){
    div.style.top=this.x+'px';
  } else if (this.name==='horizontal'){
    div.style.left=this.y+'px';
  } else if (this.name==='rotate'){
    div.style.transform='rotate('+this.deg+'deg)';
  }
}
function check(step){
  step=Number(step);
  if (step<min_step) {
    document.getElementById("count_step").value=10;
    step=10;
    alert('Step was not correct!It was modified');
  } else if (step>max_step){
    document.getElementById("count_step").value=50;
    step=50;
    alert('Step was not correct!It was modified');
  }
  return step;
}
function command(event){
  switch (event.keyCode){
    case code_left: step=check(document.getElementById("count_step").value);
                    if (event.shiftKey===true){
                      element.moveRotate(step)
                    } else {
                      element.moveHorizontal(-step)
                    }
    break;
    case code_up:step=check(document.getElementById("count_step").value);
                element.moveUpright(-step);
    break;
    case code_right:step=check(document.getElementById("count_step").value);
                    if (event.shiftKey===true){
                      element.moveRotate(-step)
                    } else {
                      element.moveHorizontal(step)
                    }
    break;
    case code_down:step=check(document.getElementById("count_step").value);
                  element.moveUpright(step);
    break;
    default:
    break;
  }
}
var div=document.getElementById("elem");
var element=new Element(30,0,0);
var app=new Application();
stop_all.onclick=function(){
  app.stop();
};
start.onclick=function(){
  app.start();
};
