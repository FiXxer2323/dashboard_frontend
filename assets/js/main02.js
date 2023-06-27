const aside = document.querySelector('aside');
const Button = document.querySelector('main button');



//console.log(aside);

function showNav() {
    aside.innerHTML=`<a href="/" id="0" >Tartalom Lista</a>
    <a href="/" id="1">Új Tartalom</a>
    <a href="/" id="2">Hír Lista</a>
    <a href="/" id="3">Új Hír</a>
    <a href="/" id="4">Galéria Lista</a>
    <a href="/" id="5">Új Galéria</a>`;
    const hideNav = document.getElementById("Nav");      
    hideNav.remove();
    const navItems = document.querySelectorAll("aside a")
    const controller = document.getElementById("controller")
    let content = ""
    for (let i = 0; i < navItems.length; i++) {
        const element = navItems[i];
        //content += "<button>"+i+"</button>"
        content += `<button id="b${i}" style="margin: 1rem ; padding: 1rem" onclick="clearNavID(${i})">${i}. gomb</button>`
       }
       controller.innerHTML = content

}

function clearNav() {
   const navItems = document.querySelectorAll("aside a")
   //console.table(navItems)
   for (let i = 0; i < navItems.length; i++) {
    const element = navItems[i];
    console.log(element)
    element.remove()
   }

}

function clearNavI(j) {
    const navItems = document.querySelectorAll("aside a")
    //console.table(navItems)
    navItems[j].remove()
    
}
 

    const array = ["A","B","c"]
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        console.log(element.toLowerCase())
    }

    function clearNavID(j) {
        document.getElementById(j).remove()
        document.getElementById("b"+j).remove()
    }