const categories = [
  {
    id:1,
    name:"Electronics"
  },
  {
    id:2,
    name:"Fashion"
  },
  {
    id:3,
    name:"Furniture"
  },
  {
    id:4,
    name:"Groceries"
  }
];

export default function CategorySection() {
  return (
    <section>

      <h2>Shop by Category</h2>

      <div className="category-container">

        {
          categories.map((category)=>(
            <div key={category.id} className="category-card">

              <h3>{category.name}</h3>

            </div>
          ))
        }

      </div>

    </section>
  );
}