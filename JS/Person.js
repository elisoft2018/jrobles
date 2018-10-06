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

/*var IntNumberOne= parseInt(prompt("Digite primer valor"));
var IntNumberTwo= parseInt(prompt("Digite segundo valor"));
var operacion=prompt("digite operacion +(Suma),-(resta),*(multplicación),/(Divisió)");
alert(eval(IntNumberOne+IntNumberTwo+operacion));

function operation (IntNumberOne,IntNumberTwo, ){

    resultado=

    /*if(operation=="+"){

        let suma=IntNumberOne+IntNumberTwo;
        alert(suma);
    }else if(opera=="-"){
        let resta=IntNumberOne-IntNumberTwo;
        alert(resta);
    }else if(opera=="*"){

        let product=IntNumberOne-IntNumberTwo;
        alert(product);
    }else{

        let division=IntNumberOne/IntNumberTwo;
        alert(division);
    }
    
}*/
var pos=0;
var box= document.getElementById("sobrepuesto");
var t= setInterval(move,5);
function move() {
    if(pos>=300){

        clearInterval(t);
    }else{
        pos+=1;
        box.style.left=pos+"px";
    }
}