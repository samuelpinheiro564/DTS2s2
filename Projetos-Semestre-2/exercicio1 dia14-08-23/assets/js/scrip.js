class List{

    constructor(title, id, status){
        this.title=title,
        this.id=id,
        this.status=status
    };
    getCriatorId(){
   return parseInt(Math.random() * 1000);
    }
    getStatus(){
      return  this.status = 1;
    }
}
let color = 0;
let i = 0;

function  Taskk(){
  i++
class TaskClass{
  constructor(title){
     this.title = title;
  }
  introduce(){
  title1 =  document.getElementById("pai").innerHTML += '<div class="newdivs" id="div'+i+'"><p>' + this.Task + '</p><div><button class="bnts" id="bnt'+ i +'" onclick="ChangeColor('+ i +')"><i class="fa-solid fa-check" style="color: #ffffff;"></i></button><button class="bnts" onclick="remove('+ i +')" id="thash'+ i +'"><i class="fa-solid fa-trash" style="color: #ffffff;"></i></button></div></div>';
}
}
}

const te1 = new Title(document.getElementById('title').value);

if(document.getElementById('title').value  != ""){
  title.introduce();
}else{
  document.getElementById('title').innerHTML = "Por Favor insira uma tarefa";
}
   
function ChangeColor(){
  color++
}
