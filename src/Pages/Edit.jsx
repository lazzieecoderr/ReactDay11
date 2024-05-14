import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Edit = ({ id }) => {
  const navigate = useNavigate();
  const [editData, setEditData] = useState({
    product_id: "",
    product_name: "",
    product_image: "",
    product_price: "",
    product_description: "",
  });
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await axios
      .get(`https://6642ed723c01a059ea20d1de.mockapi.io/api/products/${id}`)
      .then((res) => setEditData(res.data))
      .catch((error) => console.log(error));
  };
  const handleChange = (e) => {
    //e.target.value
    const { name, value } = e.target; //e.target.name e.target.value
    setEditData((preData) => ({
      ...preData,
      [name]: value, //product_name:iphone
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put(
        `https://6642ed723c01a059ea20d1de.mockapi.io/api/products/${id}`,
        editData
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
              value={editData.product_id}
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
              value={editData.product_name}
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
              value={editData.product_image}
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
              value={editData.product_price}
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
              value={editData.product_description}
              onChange={handleChange}
            />
          </label>
        </p>
        <br />
        <br />
        <p>
          <button className="btn btn-danger " type="submit">
            Update
          </button>
        </p>
      </form>
    </div>
  );
};

export default Edit;
