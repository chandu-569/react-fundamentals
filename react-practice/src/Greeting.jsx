function Greeting({ productnames, prizes }) {
    const help={
    fontSize: '10px',
    fontWeight: 'bold',
    color: 'black'
}

const help1={
    fontSize: '10px',
    fontWeight: 'bold',
    color: 'blue'
}
    return (
        <div className="main1">

            <p style={help}>product name={productnames} </p>
            <p style={help1}> prize={prizes}</p>
             </div>
    )
}
export default Greeting;