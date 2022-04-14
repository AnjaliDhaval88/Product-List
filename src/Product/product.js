
import './product.css';

const Product = ({ name, desc, price, stock }) => {
    return (
        <div className="flexDiv">
            <div className="row">{name}</div>
            <div className="row">{desc}</div>
            <div className="row">{price}</div>
            <div className="row">{stock}</div>
        </div>
    )
}
export default Product;