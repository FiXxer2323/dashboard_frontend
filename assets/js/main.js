const aside = document.querySelector('aside');
const button = document.querySelector('main button');
//console.log(aside);

function showNav() {
    aside.innerHTML=`<a href="/">Tartalom Lista</a>
<a href="/">Új Tartalom</a>
<a href="/">Hír Lista</a>
<a href="/">Új Hír</a>
<a href="/">Galéria Lista</a>
<a href="/">Új Galéria</a>`;
}
