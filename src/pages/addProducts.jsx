import React, { useState } from "react";
import Header from "../components/header/header";
import { Button, Flex, Input } from "antd";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function AddProducts({}) {
  const [data, setData] = useState({
    name: "",
    price: 0,
    url: "",
    adress: "",
    description: "",
    PhoneNumber: 0,
  });

  const { search } = useLocation();
  useEffect(() => {
    const param = new URLSearchParams(search);
    console.log(param);
    const id = param.get(`editNav`);
    console.log(id);
    const products = JSON.parse(localStorage.getItem("products")) || [];
    console.log(products);
    const prod = products.find((el) => el.id == id);
    setData({ ...prod });
  }, []);

  function clickHandler(e) {
    e.preventDefault();
    const product = {
      id: new Date().getTime(),
      date: new Date().getTime(),
      ...data,
    };

    const products = JSON.parse(localStorage.getItem("products")) || [];

    products.push(product);

    localStorage.setItem("products", JSON.stringify(products));
  }

  return (
    <>
      <Header />

      <div className="container">
        <Flex
          vertical
          justify="center"
          gap={30}
          style={{ maxWidth: 300, marginLeft: 700, marginTop: 70 }}
        >
          <form action="" onSubmit={clickHandler}>
            <Input
              placeholder="image url"
              value={data.url}
              onChange={(e) => setData({ ...data, url: e.target.value })}
            />
            <Input
              placeholder="name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            <Input
              placeholder="price"
              value={data.price}
              onChange={(e) => setData({ ...data, price: e.target.value })}
            />
            <Input
              placeholder="description"
              value={data.description}
              onChange={(e) =>
                setData({ ...data, description: e.target.value })
              }
            />
            <Input
              placeholder="adress"
              value={data.adress}
              onChange={(e) => setData({ ...data, adress: e.target.value })}
            />
            <Input
              placeholder="PhoneNumber"
              value={data.PhoneNumber}
              onChange={(e) =>
                setData({ ...data, PhoneNumber: e.target.value })
              }
            />
          </form>
          <Button onClick={clickHandler}>add</Button>
        </Flex>
      </div>
    </>
  );
}
export default AddProducts;

// export default AddProducts;
// /*git init - начать работу с git
// git status - проверить папки и файлы
// git add . - добавить папки или файлы
// git commit -m “название коммита” - добавить коммит
// git log - посмотреть коммиты
// git push origin “название ветки” */
// ProductContext.js
