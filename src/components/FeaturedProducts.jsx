const products = [

{
id:1,
name:"Laptop",
price:65000
},

{
id:2,
name:"Headphones",
price:2500
},

{
id:3,
name:"Smart Watch",
price:5000
},

{
id:4,
name:"Shoes",
price:3000
}

];

export default function FeaturedProducts(){

return(

<section>

<h2>Featured Products</h2>

<div className="product-container">

{

products.map((product)=>(

<div key={product.id} className="product-card">

<h3>{product.name}</h3>

<p>₹ {product.price}</p>

<button>View Product</button>

</div>

))

}

</div>

</section>

)

}