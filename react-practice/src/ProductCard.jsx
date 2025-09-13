import "./ProductCard.css"

function ProductCard({ productnames, prizes, isavailable }) {
    return (
        <div className="main1">

            <p className="help">product name={productnames} </p>
            <p className="help1"> prize={prizes}</p>
            productavailability : {isavailable ? <p className="green">"instock"</p> : <p className="red">"outstock"</p>}
        </div>
    )
}
export default ProductCard;