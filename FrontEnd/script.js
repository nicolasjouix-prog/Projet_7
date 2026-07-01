import { afficheWorks } from "./functions.js";

///////////////DOM ELEMENTS///////////////

const gallery = document.querySelector(".gallery");
const portfolio = document.querySelector("#portfolio");
const filters = document.createElement("div");
filters.classList.add("filters");
portfolio.insertBefore(filters, gallery);

///////////////EVENEMENTS///////////////

fetch("http://localhost:5678/api/works") // affiche ma galerie
    .then(response => response.json())
    .then(works => {
        afficheWorks(works, gallery)
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
                fetch("http://localhost:5678/api/works")
                    .then(response => response.json())
                    .then(works => {

                        gallery.innerHTML = "";

                        const worksFiltres = []
                        for (let j = 0; j < works.length; j++) {
                            if (works[j].categoryId === categories[i].id) {
                                worksFiltres.push(works[j]);
                            }
                        }

                        afficheWorks(worksFiltres, gallery)

                    })
            })
        }

        buttonAll.addEventListener("click", () => {
            fetch("http://localhost:5678/api/works")
                .then(response => response.json())
                .then(works => {
                    afficheWorks(works, gallery);
                })
        })
    })


