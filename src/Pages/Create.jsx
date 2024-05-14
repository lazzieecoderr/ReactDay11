import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [createData, setCreateData] = useState({
    product_id: "",
    product_name: "",
    product_image: "",
    product_price: "",
    product_description: "",
  });
  const handleChange = (e) => {
    //e.target.value
    const { name, value } = e.target; //e.target.name e.target.value
    setCreateData((preData) => ({
      ...preData,
      [name]: value, //product_name:iphone
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(
        'https://6642ed723c01a059ea20d1de.mockapi.io/api/products/',
        createData
      )
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));

    navigate("/products");
  };
  return (
    <div className="m-5">
      <form onSubmit={handleSubmit}>
        <p>
          <label>
            Product Id:
            <input
              type="text"
              name="product_id"
              value={createData.product_id}
              onChange={handleChange}
            />
          </label>
        </p>
        <br />
        <br />
        <p>
          <label>
            Product Name:
            <input
              type="text"
              name="product_name"
              value={createData.product_name}
              onChange={handleChange}
            />
          </label>
        </p>

        <br />
        <br />
        <p>
          <label>
            Product Image:
            <input
              type="text"
              name="product_image"
              value={createData.product_image}
              onChange={handleChange}
            />
          </label>
        </p>

        <br />
        <br />
        <p>
          <label>
            Product Price:
            <input
              type="text"
              name="product_price"
              value={createData.product_price}
              onChange={handleChange}
            />
          </label>
        </p>

        <br />
        <br />
        <p>
          <label>
            Product Description:
            <input
              type="text"
              name="product_description"
              value={createData.product_description}
              onChange={handleChange}
            />
          </label>
        </p>
        <br />
        <br />
        <p>
          <button className="btn btn-danger " type="submit">
            Create
          </button>
        </p>
      </form>
    </div>
  );
};

export default Create;
