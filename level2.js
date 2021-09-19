let lives =3
let score=0
let level=2;
let bluecount=1;
let usercount=1;
for (let index = 0; index <40; index++) {
    let nodeCreate=document.createElement("div");
    nodeCreate.className="baloon"
    nodeCreate.id="baloon"+index;

    nodeCreate.setAttribute("onmouseover","pop_baloon(baloon"+index+")")
    let colour=Math.ceil(Math.random() * 4)

    if(colour===1){
        nodeCreate.style.backgroundColor="red"
    }
    else if(colour===2){
        nodeCreate.style.backgroundColor="blue"
        bluecount++;
    }
    else if(colour===3){
        nodeCreate.style.backgroundColor="green"
    }
    else {
        nodeCreate.style.backgroundColor="yellow"
    }
    
    document.getElementById("platform").appendChild(nodeCreate);

}

function pop_baloon(baloonNumber);
    baloonNumber="blue"