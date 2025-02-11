document.addEventListener('DOMContentLoaded', () => {
    let productDetailsImg = document.querySelector('.single-prod-img');
    let storedProduct = localStorage.getItem('selectedProduct');

    if (storedProduct) {
        let product = JSON.parse(storedProduct);


        let productImg = document.createElement('img');
        productImg.src = product.img;
        productImg.style.width = "100%";

        productDetailsImg.appendChild(productImg);
    } else {
        console.error("there is no data");
    }
});
function back(){
    history.back()
}
