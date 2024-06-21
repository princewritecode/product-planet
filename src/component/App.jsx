import { useEffect, useState } from "react";
import Products from "./Products";

export default function App()
{
  const [listOfProducts, setListOfProducts] = useState([]);
  useEffect(() =>
  {
    fetchProducts();
  }, []);
  const fetchProducts = async () =>
  {
    const productListData = await fetch('https://dummyjson.com/products');
    const dataProductList = await productListData.json();
    setListOfProducts(dataProductList.products);
  };
  console.log(listOfProducts);
  return (
    <div id='product'>
      {
        listOfProducts.map((product) =>
        {
          return (<Products key={product.id} data={product}></Products>);
        })
      }
    </div>
  );
}