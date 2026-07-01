export function afficheWorks(works, gallery) {

    gallery.innerHTML = "";

    for (let i = 0; i < works.length; i++) {
        const figure = document.createElement("figure");
        gallery.appendChild(figure);
        
        const img = document.createElement("img");
        img.src = works[i].imageUrl;
        figure.appendChild(img);

        const figCaption = document.createElement("figcaption");
        figCaption.textContent = works[i].title;
        figure.appendChild(figCaption);
    }



}