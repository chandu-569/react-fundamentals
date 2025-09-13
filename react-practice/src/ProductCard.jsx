function ProductCard(props)
{
    return(
        <div>
            
            <p>product name={props.productnames} , prize={props.prizes}{props.isavailables}</p>
        </div>
    )
}
export default ProductCard;