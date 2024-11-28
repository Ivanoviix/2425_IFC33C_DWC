const imagenes = [
    { url: 'https://picsum.photos/300/300?random=2', descripcion: 'Imagen aleatoria de Picsum Photos' },
    { url: 'https://picsum.photos/300/300?random=5', descripcion: 'Imagen aleatoria de Picsum Photos'},
    { url: 'https://picsum.photos/300/300?random=11', descripcion: 'Imagen aleatoria de Picsum Photos'}
];

function generarGaleria(fotos) {
    let galeria = document.createElement('div');
    galeria.style.justifyContent = 'center';
    galeria.style.margin = '0 auto';
    galeria.style.textAlign = 'center';

    galeria.className = 'foto-galeria';

    for (let x = 0; x < fotos.length; x++) {
        let imagen = fotos[x];
        let div = document.createElement('div');
        div.style.marginTop = '50px';

        div.className = 'contenedor';

        let img = document.createElement('img');
        img.src = imagen.url;
        img.alt = imagen.descripcion;

        let p = document.createElement('p');
        p.textContent = imagen.descripcion;
        div.appendChild(img);
        div.appendChild(p);
        galeria.appendChild(div);
    }
    document.body.appendChild(galeria)
    body.style.display = 'flex';
    body.style.justifyContent = 'center';
    body.style.height = '100vh';
    body.style.margin = '0';
}

generarGaleria(imagenes);



