const inputItem = document.getElementById('inputItem');
//console.log(inputItem.value);
const btnItem = document.querySelector("#btnItem");

const listItems = document.querySelector("#listItems");
inputItem.focus();

btnItem.addEventListener('click',function(){
   const trItem = document.createElement("tr"); /**<tr></tr> */
   const tdItemOne =document.createElement("td");/**<td></td> */
   const tdItemTwo=document.createElement("td"); /**<td></td> */
   const trLength = document.querySelectorAll("tbody tr");
   console.log(trLength.length);
   trItem.id='listItem_'+trLength.length;
   tdItemOne.innerText = inputItem.value /**<td> valuee </td> */
   tdItemTwo.innerHTML ="<button   data-id='"+trLength.length+"' id='eliminarItem"+trLength.length+"' type='button' class='btn btn-dark'>Eliminar</button>";/**<td><button>Eliminar</button></td> */

   
   trItem.appendChild(tdItemOne); /**<tr><td></td></tr> */
   trItem.appendChild(tdItemTwo);/**<tr><td></td> <td></td></tr> */
   listItems.append(trItem);

/**Eliminar Items */
    const eliminarItems = document.querySelector("#eliminarItem"+trLength.length);
    /* eliminarItems.onclick= function(){
        alert("ejemplo");
    }*/
   eliminarItems.addEventListener("click",function(){
        const idEliminar = eliminarItems.getAttribute("data-id");
        console.log(idEliminar);
        const trEliminar = document.querySelector("#listItem_"+idEliminar);
        trEliminar.remove();
    });
/**Fin de Eliminar items */
addDiv();

inputItem.value ="";
inputItem.focus();

});
/*
function hola(){
    alert("hola");
}*/

const divItems = document.querySelector("#divItems");
function addDiv(){
    
    const divLength = document.querySelectorAll(".items");
    const divRow= document.createElement("div");
    divRow.id="items"+divLength.length;
    divRow.className="row items";
    //<div class='row'>
   divRow.setAttribute("data-id",divLength.length);
   const divCol1= document.createElement("div");
    divCol1.className="col-6";
    divCol1.innerText = inputItem.value 
    //<div class='col-6'>
    const divCol2 = document.createElement("div");
    divCol2.className="col-6";
    divCol2.innerHTML ="<button   data-id='"+divLength.length+"' id='eliminar2Item"+divLength.length+"' type='button' class='btn btn-danger m-2'>Eliminar</button>";
    //<div class='col-6'>
    divRow.appendChild(divCol1);
    divRow.appendChild(divCol2);

    divItems.append(divRow);

    const eliminarItems = document.querySelector("#eliminar2Item"+divLength.length);
    eliminarItems.addEventListener("click",function(){
        const idEliminar = eliminarItems.getAttribute("data-id");
        console.log(idEliminar);
        const trEliminar = document.querySelector("#items"+idEliminar);
        trEliminar.remove();
    });

   //divItem.innerHTML="<div class='row'><div class='col-6'></div><div class='col-6'></div></div>"
   //divItems.append(divItem);
}
