
export default function Products(props)
{
    const { title, brand, price } = props.data;
    console.log(props.data.images);
    const { images } = props.data;
    return (
        <div className="container">
            <h1>{title}</h1>
            <h3>{brand}</h3>
            <img src={images}></img>
            <p>{price}</p>
        </div>
    );
}

