export let products = [];

export function loadProducts(){
  const promise = new Promise((resolve)=>{
    setTimeout(()=>{
      products = [
        {
          name:'Socks',
          keywords : [
            "cloth",
            "garments"
          ]
        },
        {
          name:'Shoes',
          keywords : [
            "footwear",
            "accessories"
          ]
        },
        {
          name:'Ball',
          keywords : [
            "sports",
            "soccer balls",
            "basketballs"
          ]
        },
        {
          name:'t-shirt',
          keywords : [
            "cloth",
            "garments"
          ]
        },
        {
          name:'iron',
          keywords : [
            "laundry",
            "household appliances"
          ]
        },
        {
          name:'glass',
          keywords : [
            "Dishes",
            "kitchen items"
          ]
        },
        {
          name:'toaster',
          keywords : [
            "electronics",
            "kitchen appliances"
          ]
        },
        {
          name:'jacket',
          keywords : [
            "cloth",
            "garments"
          ]
        },
      ];
      resolve();
    },500);
  });
  return promise;
}