let subtotalel=document.getElementById("subtot")
let totalel=document.querySelector("sup")  

const items=[
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
        image:"img/featur-3.jpg",
        name:"Brocolli",
        price:1.97,
        stock:5,
        qty:0
    },
    {
        id:9,
        image:"img/vegetable-item-1.jpg",
        name:"Tomatos",
        price:2.55,
        stock:15,
        qty:0
    },
    {
        id:10,
        image:"img/vegetable-item-4.jpg",
        name:"Capsicum",
        price:1.55,
        stock:20,
        qty:0
    },
    {
        id:11,
        image:"img/vegetable-item-5.jpg",
        name:"Potatoes",
        price:2.88,
        stock:28,
        qty:0
    },
    {
        id:12,
        image:"img/vegetable-item-6.jpg",
        name:"Parsely",
        price:3.55,
        stock:9,
        qty:0
    },
    {
        id:13,
        image:"img/bread-item-2.jpg",
        name:"Garlic Bread",
        price:8.55,
        stock:10,
        qty:0
    },
    {
        id:14,
        image:"img/bread-item-2.jpg",
        name:"Roasted Bread",
        price:6.55,
        stock:15,
        qty:0
    },
    {
        id:15,
        image:"img/meal-item-1.jpg",
        name:"Mixed Salad",
        price:15.55,
        stock:5,
        qty:0
    },
    {
        id:16,
        image:"img/meal-item-2.jpg",
        name:"Chiken Masala",
        price:20.55,
        stock:10,
        qty:0
    },

]


let productel=document.querySelector('.products')
console.log(productel)
function displayproducts()
{
    items.map((prod)=>
    {
        productel.innerHTML+=
        `
        <div class="col">
        <div class="card">
          <img src=${prod.image} class="card-img-top" alt="...">
          <div class="card-body text-center">
            <h5 class="card-title">${prod.name}</h5>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
            <h5>$${prod.price} /kg</h5>
            <button type="button" class="btn btn-outline-warning text-success rounded-pill" onclick=addtocart(${prod.id})>
            <i class="fa-solid fa-bag-shopping me-2"></i>Add to cart</button>
          </div>
        </div>
      </div>
      
      `
    })
}
displayproducts()

let vegesel=document.querySelector('.veges')
console.log(vegesel)
function displayveges()
{
    items.slice(7,12).map((prod)=>
    {
        vegesel.innerHTML+=
        `
        <div class="col">
        <div class="card">
          <img src=${prod.image} class="card-img-top" alt="...">
          <div class="card-body text-center">
            <h5 class="card-title">${prod.name}</h5>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
            <h5>$${prod.price} /kg</h5>
            <button type="button" class="btn btn-outline-warning text-success rounded-pill" onclick=addtocart(${prod.id})>
              <i class="fa-solid fa-bag-shopping me-2"></i>Add to cart</button>
          </div>
        </div>
      </div>
      `
    })
}
displayveges()

let fruitsel=document.querySelector('.frts')
console.log(fruitsel)
function displayfrts()
{
    items.slice(0,7).map((prod)=>
    {
        fruitsel.innerHTML+=
        `
        <div class="col">
        <div class="card">
          <img src=${prod.image} class="card-img-top" alt="...">
          <div class="card-body text-center">
            <h5 class="card-title">${prod.name}</h5>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
            <h5>$${prod.price} /kg</h5>
            <button type="button" class="btn btn-outline-warning text-success rounded-pill" onclick=addtocart(${prod.id})>
              <i class="fa-solid fa-bag-shopping me-2"></i>Add to cart</button>
          </div>
        </div>
      </div>
      `
    })
}
displayfrts()

let breadel=document.querySelector('.bread')  
console.log(breadel)
function displaybread()
{
    items.slice(12,14).map((prod)=>
    {
        breadel.innerHTML+=
        `
        <div class="col">
        <div class="card">
          <img src=${prod.image} class="card-img-top" alt="...">
          <div class="card-body text-center">
            <h5 class="card-title">${prod.name}</h5>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
            <h5>$${prod.price} /kg</h5>
            <button type="button" class="btn btn-outline-warning text-success rounded-pill" onclick=addtocart(${prod.id})>
              <i class="fa-solid fa-bag-shopping me-2"></i>Add to cart</button>
          </div>
        </div>
      </div>
      `
    })
}
displaybread()

let meatel=document.querySelector('.meat')  
console.log(meatel)
function displaymeat()
{
    items.slice(14,16).map((prod)=>
    {
        meatel.innerHTML+=
        `
        <div class="col">
        <div class="card">
          <img src=${prod.image} class="card-img-top" alt="...">
          <div class="card-body text-center">
            <h5 class="card-title">${prod.name}</h5>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
            <h5>$${prod.price} /kg</h5>
            <button type="button" class="btn btn-outline-warning text-success rounded-pill" onclick=addtocart(${prod.id})>
              <i class="fa-solid fa-bag-shopping me-2"></i>Add to cart</button>
          </div>
        </div>
      </div>
      `
    })
}
displaymeat()




let cart=JSON.parse(localStorage.getItem("Cart"))||[]
updatecart()
function addtocart(id)
{
 
    if(cart.some((itm)=>itm.id===id))
    {
      changeqty("plus",id) 
    }
    else 
    {
      const p=items.find((prod)=>prod.id===id)
      cart.push({
        ...p,
        qty:1
      })
      console.log(cart)
      
    }
updatecart()
}

function updatecart()
{
   rendersubtotal()
  localStorage.setItem("Cart",JSON.stringify(cart))
}

// totalel.innerHTML=cart.length 
let cartel=document.getElementById("cartitems")
console.log(cartel)
function displaycartitems()
{
  cart.map((c)=>{
    cartel.innerHTML+=`
    <tr>
            <td><img src=${c.image} height=80 width=80></td>
            <td>${c.name}</td>
            <td>$${c.price}</td>
            <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16" onclick="changeqty('minus',${c.id})">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
                </svg>${c.qty}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16"  onclick="changeqty('plus',${c.id})">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
            </svg></td>
            
            <td>${c.price}</td>
            <td><i class="fa-solid fa-trash text-danger fs-4" onclick="removeprod(${c.id})"></i></td>
        </tr>
    `
  })
}
displaycartitems()

function changeqty(action,id)
{
  cart=cart.map((c)=>{
    let qty=c.qty
    console.log("Quantity",c.qty,"Stock",c.stock)
        if(c.id===id)
        {
          
          if(action==="minus" && qty>1)
          {
            qty--
          }
          else if(action==="plus" && qty<c.stock)
          {
            qty++
          }
        }
        return{
          ...c,
          qty
        }
      })
      updatecart()
}

function removeprod(id)
{
  cart=cart.filter((item)=>item.id!==id)
 updatecart()
}

function rendersubtotal()
{
    let totalprice=0,totalitems=0;
    cart.forEach((item)=>{
        totalprice+=item.price*item.qty;
        totalitems+=item.qty;
    });
    subtotalel.innerHTML=`Subtotal(${totalitems} Items):<br>$${totalprice.toFixed(2)}`
    totalel.innerHTML= totalitems;            
}


