import { products,loadProducts } from "./productsData.js";
import { SearchProducts } from "./sharedCode-OOP.js";

async function loadPage(){
  await loadProducts();
  const searchObject  = new SearchProducts(products,renderProductsPageHTML)
  const searchedProductsArray =searchObject.loadSearched();
  const productsArgument = searchedProductsArray ? searchedProductsArray : products;
  renderProductsPageHTML(productsArgument);

  const searchBtn = document.querySelector('.js-search-btn');
  searchBtn.addEventListener('click',()=>{
    searchObject.handleSearch();
  })
  window.addEventListener('popstate',()=>{
    const searchedProductsArray =searchObject.loadSearched();
    const productsArgument = searchedProductsArray ? searchedProductsArray : products;
    renderProductsPageHTML(productsArgument);
  })

}
loadPage();

function renderProductsPageHTML(products){
  let html = '';
  products.forEach((product)=>{
    html +=
    `
      <div>
        <div>ProductName : ${product.name}</div>
      </div>
    `;
  });

  document.querySelector('.container').innerHTML = html;
}