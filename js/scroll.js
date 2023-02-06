let ubicacionPrincial = window.scrollY;
let $nav = document.querySelector('#nav');

window.addEventListener('scroll', function(){
    let ubicacionActual = this.window.scrollY
    console.log(ubicacionActual)

    if(ubicacionPrincial>=ubicacionActual){
        $nav.style.top = "0px"
    }
    else {
        //oculta el tamaño del header/nav
        $nav.style.top = "-383.2px"
    }    
    ubicacionPrincipal = desplazamientoActual;
});