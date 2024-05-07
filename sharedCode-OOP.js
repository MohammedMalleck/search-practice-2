export class SearchProducts{
  #array;
  #renderHTML;

  constructor(array,renderHTMLfunc){
    this.#array = array;
    this.#renderHTML = renderHTMLfunc;
  }

  get array(){
    return this.#array;
  }

  loadSearched(){
    const url = new URL(window.location);
    const searchParam = url.searchParams.get('search');
    let searchedProducts;
    if(searchParam){
      searchedProducts = [];
      this.#array.find((product)=>{
        if(product.name.includes(searchParam)){
          searchedProducts.push(product);
        }else{
          for(const keyword of product.keywords){
            if(keyword.includes(searchParam)){
              searchedProducts.push(product);
              break;
            }
          }
        }
      });
    }
    return searchedProducts;
  }

  handleSearch(){
    const inputEl = document.querySelector('.js-search-input');
    const searchedText = inputEl.value;
    const url = new URL(window.location.href);
    if(searchedText){
      url.search = `search=${searchedText}`;
      history.pushState({},'',url);
      const searchedProductsArray = this.loadSearched();
      this.#renderHTML(searchedProductsArray);
    }
  }
}

export class SearchOrders extends SearchProducts{

  loadSearched(){
    const url = new URL(window.location);
    const searchParam = url.searchParams.get('search');
    let searchedOrders;
    if(searchParam){
      searchedOrders = [];
      this.array.forEach((order)=>{
        if(order.name.includes(searchParam)){
          searchedOrders.push(order);
        }
      })
      
    }
    return searchedOrders;
  }
}