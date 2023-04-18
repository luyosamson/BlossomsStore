import React, { useState } from "react";
import Dashboard from "../dashboard/Dashboard";
import "./Newplantform.css";

function NewPlantForm({ onAddPlant }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("plants");
  const [product_type, setType] = useState("");

  function handleAddPlant(e) {
    e.preventDefault();

    const newItem = {
      name: name,
      image: image,
      price: price,
      description: description,
      product_type: product_type
    };

    const endpoint =
      category === "plants"
        ? "/plants"
        : "/flowers";

    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newItem)
    })
      .then((r) => r.json())
      .then((item) => {
        onAddPlant(item);
        e.target.reset();
      });
  }

  const flowerTypes = ["Thank You Flowers", "Celebration Flowers",
                      "Sympathy flowers","Birthday Flowers", "Romantic Flowers","I'm sorry Flowers",
                      "New baby Flowers"];
  const plantTypes = ["Indoor plants", "Succulent Plants","Bonsai", "Tropical Plants",
                     "Floor Plants","Outdoor Plants","Indoor Plants","Flowering Plants",
                     "House Plants","Hanging Plants"];
  const types = category === "plants" ? plantTypes : flowerTypes;

  return (
    <div className="new-plant-form">
      <div className="dashboard">
        <Dashboard />
      </div>
      <div className="items-container">
        <h2>Sell your product by providing details through this form</h2>
        <div className="postProduct">
          <form className="addProduct" onSubmit={handleAddPlant}>
            <label>Category</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="plants">Plants</option>
              <option value="flowers">Flowers</option>
            </select>
            <label>Type</label>
            <select value={product_type} onChange={(e) => setType(e.target.value)}>
              <option value="">Select a type</option>
              {types.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            <label>Product Name</label>
            <input
              type="text"
              name="name"
              placeholder="product name"
              onChange={(e) => setName(e.target.value)}
            />
            <label>Price</label>{" "}
            <input
              type="number"
              name="price"
              step="0.01"
              placeholder="Price"
              onChange={(e) => setPrice(e.target.value)}
            />
            <label>Upload Image</label>{" "}
            <input
              type="text"
              name="image"
              placeholder="Upload image"
              onChange={(e) => setImage(e.target.value)}
            />

            <label>Description</label>
            <textarea
              className="textarea"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <p>
              <button>Submit</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewPlantForm;
