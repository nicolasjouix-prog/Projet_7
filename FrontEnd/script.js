///////////////DOM ELEMENTS///////////////

const gallery = document.querySelector(".gallery");
const portfolio = document.querySelector("#portfolio");
const filters = document.createElement("div");
filters.classList.add("filters");
portfolio.insertBefore(filters, gallery);

///////////////FONCTIONS///////////////



///////////////EVENEMENTS///////////////


fetch("http://localhost:5678/api/works") // affiche ma galerie
    .then(response => response.json())
    .then(works => {
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
    })

fetch("http://localhost:5678/api/categories") // affiche mes boutons
    .then(response => response.json())
    .then(categories => {
        const buttonAll = document.createElement("button");
        buttonAll.textContent = ("Tous");
        filters.appendChild(buttonAll);
        for (let i = 0; i < categories.length; i++) {
            const button = document.createElement("button");
            filters.appendChild(button);
            const name = document.createElement("name");
            name.textContent = categories[i].name;
            button.appendChild(name);
            button.addEventListener("click", () => {
                const img = document.createElement("img");
                img.src = works[i].imageUrl;
            
            })
        }
    })



