let prodel=document.querySelector(".prod")
let fruits=[
    {
        id:1,
        image:"img/fruite-item-5.jpg",
        name:"Grapes",
        price:4.99,
        stock:30,
        qty:0
    },
    {
        id:2,
        image:"img/fruite-item-2.jpg",
        name:"Rasberries",
        price:5.90,
        stock:10,
        qty:0
    },
    {
        id:3,
        image:"img/fruite-item-4.jpg",
        name:"Apricots",
        price:3.87,
        stock:22,
        qty:0
    },
    {
        id:4,
        image:"img/fruite-item-3.jpg",
        name:"Banana",
        price:2.39,
        stock:29,
        qty:0
    },
    {
        id:5,
        image:"img/fruite-item-1.jpg",
        name:"Oranges",
        price:4.00,
        stock:15,
        qty:0
    },
    {
        id:6,
        image:"img/featur-1.jpg",
        name:"Apples",
        price:5.99,
        stock:15,
        qty:0
    },
    {
        id:7,
        image:"img/featur-2.jpg",
        name:"Strawberry",
        price:4.95,
        stock:17,
        qty:0
    },
    {
        id:8,
        image:"img/fruite-item-5.jpg",
        name:"Grapes",
        price:4.99,
        stock:30,
        qty:0
    },
    {
        id:9,
        image:"img/fruite-item-2.jpg",
        name:"Rasberries",
        price:5.90,
        stock:10,
        qty:0
    }
]

function displayprod()
{
    fruits.forEach((f)=>{
        prodel.innerHTML+= `
         <div class="col">
         <div class="card">
         <img src=${f.image} class="card-img-top" alt="...">
         <div class="card-body text-center">
           <h5 class="card-title">${f.name}</h5>
           <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
           <h5>${f.price}/kg</h5>
           <button type="button" class="btn btn-outline-warning text-success rounded-pill">
             <i class="fa-solid fa-bag-shopping me-2"></i>Add to cart</button>
         </div>
       </div>
    </div>
        `
    })

}
displayprod()