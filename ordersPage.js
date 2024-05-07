import { orders,loadOrders } from "./ordersData.js";
import { SearchOrders } from "./sharedCode-OOP.js";

async function loadPage(){
  await loadOrders();
  const searchObject  = new SearchOrders(orders,renderOrdersPageHTML)
  const searchedOrdersArray =searchObject.loadSearched();
  const ordersArgument = searchedOrdersArray ? searchedOrdersArray : orders;
  renderOrdersPageHTML(ordersArgument);

  const searchBtn = document.querySelector('.js-search-btn');
  searchBtn.addEventListener('click',()=>{
    searchObject.handleSearch();
  })
  window.addEventListener('popstate',()=>{
    const searchedOrdersArray =searchObject.loadSearched();
    const ordersArgument = searchedOrdersArray ? searchedOrdersArray : orders;
    renderOrdersPageHTML(ordersArgument);
  })

}
loadPage();

function renderOrdersPageHTML(orders){
  let html = '';
  orders.forEach((order)=>{
    html +=
    `
      <div>
        <div>ProductName : ${order.name}</div>
        <div>ProductQuantity : ${order.quantity}</div>
        <div>OrderId : ${order.orderId}</div>
      </div>
    `;
  });

  document.querySelector('.container').innerHTML = html;
}