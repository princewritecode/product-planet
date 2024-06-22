import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
const ProductsDisplay = () =>
{
    const [proInfo, setProInfo] = useState(null);
    const { resId } = useParams();
    // console.log(resId);
    try
    {
        useEffect(() =>
        {
            fetchMenu();
        }, []);
        const fetchMenu = async () =>
        {
            const data = await fetch('https://dummyjson.com/products/' + resId);
            const jsonData = await data.json();
            setProInfo(jsonData);
            console.log('data', jsonData);
        };
        const { title, tags, images, description, price } = proInfo;
        return (
            <div className="menu">
                <h1>{title}</h1>
                <img src={images[0]}></img>
                <p>{description}</p>
                <h2>${price}</h2>
                <ul>
                    {
                        tags.map((card, index) =>
                        {

                            return (<ul key={index}><li > {card}</li></ul>);
                        })
                    }
                </ul>
                <button>Add to cart</button>
            </div >);
    }
    catch (err)
    {
        console.log(err);
    }

};
export default ProductsDisplay;