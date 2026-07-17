
import "../styles/Settings.css";
import { useEffect, useState } from "react";

export default function Settings() {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("products");
    return savedProducts ? JSON.parse(savedProducts) : [];

  });
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: ""
  });

  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    // CREATE
    if (editId === null) {

      const newProduct = {

        id: products.length + 1,

        ...formData

      };

      setProducts([...products, newProduct]);

    }

    // UPDATE
    else {

      setProducts(

        products.map((product) =>

          product.id === editId

            ? { ...product, ...formData }

            : product

        )

      );

      setEditId(null);

    }

    setFormData({
      name: "",
      price: "",
      category: ""
    });

  };

  // DELETE
  const handleDelete = (id) => {

    setProducts(

      products.filter((product) => product.id !== id)

    );

  };

  // EDIT
  const handleEdit = (product) => {

    setFormData({

      name: product.name,

      price: product.price,

      category: product.category

    });

    setEditId(product.id);

  };

  useEffect(() => {
    localStorage.setItem(
        "products",
        JSON.stringify(products)
    );

}, [products]);

  return (

    <div className="settings">

      <h2>Product Management</h2>

      <form
        className="crud-form"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
        />

        <button>
          {editId ? "Update Product" : "Add Product"}
        </button>

      </form>

      <table>

        <thead>

          <tr>

            <th>Name</th>

            <th>Price</th>

            <th>Category</th>

            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {

            products.length === 0

              ?

              <tr>

                <td colSpan="4">

                  No Products Available

                </td>

              </tr>

              :

              products.map((product) => (

                <tr key={product.id}>

                  <td>{product.name}</td>

                  <td>₹ {product.price}</td>

                  <td>{product.category}</td>

                  <td>

                    <button
                      className="edit-btn"
                      onClick={() => handleEdit(product)}
                    >
                      Edit
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(product.id)}
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))

          }

        </tbody>

      </table>

    </div>

  );

}