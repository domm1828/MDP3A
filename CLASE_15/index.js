const btnCambiar = document.getElementById('btnCambiar');
const btnVolver = document.querySelector("#btnVolver");
const div1= document.querySelector("#item1");
const div2= document.querySelector("#item2");
const div3= document.querySelector("#item3");

btnCambiar.addEventListener('click',cambiarHtml);
btnVolver.addEventListener('click',function(){
    div1.style="";
    div2.style="";
    div3.style="";
});

function cambiarHtml(){
    /* div1.style.backgroundColor="orange";
     div2.style.backgroundColor="blue";
     div2.style.width="100%";
     div3.style.backgroundColor="red";
     div3.style.width="100%";*/
     div1.style="background-color:orange !important";
     div2.style ="background-color:blue !important;width:100%";
     div3.style ="background-color:red !important;width:100%";
 
 }

 const divAll = document.querySelectorAll("button");

 /** Añade o cambia el atributo */
 divAll[0].setAttribute("type","submit");
 /**Remover atributos removeAttribute(nombreAtributo) */
 //div1.removeAttribute('class');


 console.log(divAll);
 console.log(divAll[3]);


 /** crear elementos html desde js  
  * createElement
 */

 const divElement= document.createElement("div");
 divElement.textContent="Ejemplo de Prueba.....";
 divElement.setAttribute("class","item1");

 // appendChild(nombeElementoCreado) agregarlo al final como un elemento de html
 //div2.appendChild(divElement);
 // before (añade antes padre) y after (añade despues del padre) 
 /*div2.before(divElement);
 div2.after(divElement);*/
 // prepend añade como primer hijo  , append añade como ultimo hijo
 div2.append(divElement);

 const btnAdd = document.querySelector("#btnAdd");
 const contenido= document.querySelector("#contenido");

 btnAdd.addEventListener("click",function(){
    let divElement2= document.createElement("div");
    let divAllElements = document.querySelectorAll("#text1");
    console.log(divAllElements.length);
    divElement2.textContent="EJEMPLO  " + divAllElements.length;
    divElement2.id="text1";
    contenido.append(divElement2);
 });


 