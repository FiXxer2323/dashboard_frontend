const aside = document.querySelector('aside');
const Button = document.querySelector('main button');


//console.log(aside);

function showNav() {
    aside.innerHTML=`<a href="/" >Tartalom Lista</a>
    <a href="/" >Új Tartalom</a>
    <a href="/" >Hír Lista</a>
    <a href="/" >Új Hír</a>
    <a href="/" >Galéria Lista</a>
    <a href="/" >Új Galéria</a>`;
    const hideNav = document.getElementById("Nav");      
    hideNav.remove();
}

function nav() {
    aside.hidden=`<a href="/" >Tartalom Lista</a>
    <a href="/" >Új Tartalom</a>
    <a href="/" >Hír Lista</a>
    <a href="/" >Új Hír</a>
    <a href="/" >Galéria Lista</a>
    <a href="/" >Új Galéria</a>`;
    const hideNav = document.getElementById("Nav");      
    hideNav.remove();
    console.log("Eltüntettem");
    const message = document.getElementById("Mess").innerHTML = "Eltüntettem!";
}


