let indiceAtual = 0;

function mudarDireita(){
    const album = document.getElementById("album");
    const total = album.children.length;

    if(indiceAtual < total-1){
        indiceAtual++;
    }else{
        indiceAtual = 0;
    }

    album.style.transform = `translateX(-${indiceAtual * 300}px)`;
}

function mudarEsquerda(){
    const album = document.getElementById("album");
    const total = album.children.length;

    if(indiceAtual > 0){
        indiceAtual--;
    }else{
        indiceAtual = total-1;
    }

    album.style.transform = `translateX(-${indiceAtual * 300}px)`;
}