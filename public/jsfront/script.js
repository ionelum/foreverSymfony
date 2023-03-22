import { allProducts } from "./constants.js";
import { allCategories } from "./constants.js";

var productLabel = document.querySelector("#productLabel");
var productList = document.querySelector("#productList");
var productListCont = document.querySelector("#productListCont");
var categoriesList = document.querySelector("#categoriesList");
var mainSequence = document.querySelector("#mainSequence");

for (let i = 0; i < document.querySelectorAll(".goHome").length; i++) {
    document.querySelectorAll(".goHome")[i].addEventListener("click", function () {
        mainSequence.classList.remove("d-none");
        productLabel.classList.add("d-none");
        productListCont.classList.add("d-none");
        categoriesList.innerHTML = "";
        categoriesList.classList.add("d-none");
    });
}

document.querySelector("#productTrigger").addEventListener("click", printCategories);

function printCategories() {
    mainSequence.classList.add("d-none");
    categoriesList.classList.remove("d-none");
    productLabel.classList.add("d-none");
    productListCont.classList.add("d-none");
    categoriesList.innerHTML = "";
    for (let i = 0; i < allCategories.length; i++) {
        categoriesList.innerHTML += `
            <div class="col-lg-4 g-3">
                <div class="carousel-item active catImage" id="${allCategories[i].cat}">
                    <img
                        src="assets/img/cat/${allCategories[i].cat}.jpg"
                        class="d-block w-100"
                        alt="..."
                    />
                    <div class="carousel-caption my-carousel-caption" id="test">
                        <h3 class="fw-bold fs-2">${allCategories[i].name}</h3>
                    </div>
                </div>
            </div>
        `;
    }
    for (let i = 0; i < document.querySelectorAll(".catImage").length; i++) {
        document
            .querySelectorAll(".catImage")
            [i].addEventListener("click", printProducts);
    }
    console.log(document.querySelector("#test").display);
}

for (let i = 0; i < document.querySelectorAll(".dropdown-item").length; i++) {
    document
        .querySelectorAll(".dropdown-item")
        [i].addEventListener("click", printProducts);
}

function printProducts() {
    mainSequence.classList.add("d-none");
    categoriesList.innerHTML = "";
    categoriesList.classList.add("d-none");
    productLabel.classList.remove("d-none");
    productListCont.classList.remove("d-none");
    productLabel.innerHTML = "";
    productLabel.innerHTML += `<div class="container-fluid m-0 p-0">
    <img
        class="w-100 m-0 p-0"
        src="assets/img/${this.id}/${this.id}.webp"
        alt=""/>
    </div>`;
    productList.innerHTML = "";
    for (let i = 0; i < allProducts.length; i++) {
        if (this.id == allProducts[i].cat) {
            productList.innerHTML += `
        <div class="col-sm-3 mb-3 mb-sm-0 px-1 text-center">
        <div
            class="card productCard p-0"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal${i}"
        >
            <img
                src="assets/img/${this.id}/${allProducts[i].ref}.png"
                class="card-img-top mx-auto w-75"
                alt="..."
            />
            <div class="card-body">
                <h5 class="card-title text-uppercase fw-bold my-card-title">
                ${allProducts[i].name}
                </h5>
                <hr />
                <p class="card-text fs-5">
                    <span>${allProducts[i].volume}</span><span> • </span
                    ><span>Réf. ${allProducts[i].ref}</span>
                </p>
                <p class="card-text">
                ${allProducts[i].description.slice(0, 50)}...
                </p>
            </div>
            <div class="card-footer p-0 bg-primary">
                <p class="m-0 p-1 fw-bold fs-5">${allProducts[i].price} € *</p>
            </div>
        </div>
    </div>
    <div
                class="modal fade"
                id="exampleModal${i}"
                tabindex="-1"
                aria-labelledby="exampleModalLabel${i}"
                aria-hidden="true"
            >
                <div
                    class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl"
                >
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3
                                class="modal-title w-100 text-center"
                                id="exampleModalLabel${i}"
                            >
                            ${allProducts[i].name}
                            </h3>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div class="modal-body">
                            <div class="container-fluid">
                                <div class="row text-center align-items-center">
                                    <div class="col-lg-5 col-sm-12 col-xs-12">
                                        <img
                                            src="assets/img/${this.id}/${
                allProducts[i].ref
            }.png"
                                            alt="..."
                                            class="w-100"
                                        />
                                    </div>
                                    <div class="col-lg-7 col-sm-12 col-xs-12 px-0 px-md-3">
                                        <p class="my-4">
                                        ${allProducts[i].description}
                                        </p>
                                        <h5 class="my-4">Contenance : ${
                                            allProducts[i].volume
                                        }</h5>
                                        <h5 class="my-4">
                                            Prix France Métropole TTC : <span class="text-bg-primary">${
                                                allProducts[i].price
                                            } €</span>
                                        </h5>
                                        <h5 class="my-4">Réf. ${
                                            allProducts[i].ref
                                        }</h5>
                                        <hr />
                                        <p class="my-4">
                                        ${allProducts[i].content}
                                        </p>
                                        <h4 class="my-4">
                                            Conseils d'utilisation
                                        </h4>
                                        <hr />
                                        <p>
                                        ${allProducts[i].use}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Fermer
                            </button>
                            <button
                                type="button"
                                class="btn btn-success"
                            >
                                Acheter
                            </button>
                            <button type="button" class="btn btn-primary">
                                Vendre
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        }
    }
}
