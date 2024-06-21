import { useEffect, useState } from "react";
import Products from "./Products";
import { Link } from "react-router-dom";
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
          return (



            <Link key={product.id}>
              <Products data={product}></Products>
            </Link>

          );
        })
      }

    </div>
  );
}