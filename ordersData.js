export let orders = [];

export function loadOrders(){
  const promise = new Promise((resolve)=>{
    setTimeout(()=>{
      orders = [
        {
          name:'Socks',
          quantity : 1,
          orderId : '1',
        },
        {
          name:'Shoes',
          quantity : 3,
          orderId : '2',
        },
        {
          name:'Iron',
          quantity : 1,
          orderId : '3',
        }
      ];
      resolve();
    },500);
  });
  return promise;
}