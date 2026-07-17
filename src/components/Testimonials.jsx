const reviews=[

{
id:1,
name:"Rahul",
review:"Excellent products and fast delivery."
},

{
id:2,
name:"Priya",
review:"Very easy shopping experience."
},

{
id:3,
name:"Arjun",
review:"Affordable prices and good quality."
}

];

export default function Testimonials(){

return(

<section>

<h2>Customer Reviews</h2>

{

reviews.map((user)=>(

<div key={user.id}>

<h3>{user.name}</h3>

<p>{user.review}</p>

</div>

))

}

</section>

)

}