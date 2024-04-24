import React, { useEffect, useState } from "react";
import Header from "../components/header/header";
import { useParams } from "react-router-dom";
import { Card } from "antd";

function Products() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  console.log(id);
  useEffect(() => {
    let DataFromLocalStorage =
      JSON.parse(localStorage.getItem("products")) || [];
    DataFromLocalStorage = DataFromLocalStorage.find((el) => el.id == id);
    setData(DataFromLocalStorage);
    console.log(data);
  }, []);
  console.log(data);

  return (
    <>
      <Header />
      <Card
        style={{ maxWidth: 300, marginLeft: 600, marginTop: 60 }}
        cover={
          <img
            style={{ width: 300, height: 300, paddingTop: 30 }}
            alt="example"
            src={data.url}
          />
        }
      >
        <Card.Meta title={data.name} description={data.price} />
        <Card.Meta title={data.description} description={data.adress} />
        <Card.Meta title={data.PhoneNumber} />
      </Card>
    </>
  );
}

export default Products;
