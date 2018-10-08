/*function Person(name,age) {
    this.name=name;
    this.age=age;
    this.yearOfBirth=bornYear;
}
function bornYear() {
    return 2016-this.age;
}

persona=new Person("jose",34);
console.log("El Sr. "+persona.name+" naciò en "+persona.yearOfBirth()+" y tiene "+persona.age+" años de edad");*/


function calcula(operacion){
    var operando1 = document.calc.operando1.value
    var operando2 = document.calc.operando2.value 
    var result = eval(operando1 + operacion + operando2)
    document.calc.resultado.value = result
}

/*var pos=0;
var box= document.getElementById("sobrepuesto");
var t= setInterval(move,5);
function move() {
    if(pos>=300){

        clearInterval(t);
    }else{
        pos+=1;
        box.style.left=pos+"px";
    }
}*/