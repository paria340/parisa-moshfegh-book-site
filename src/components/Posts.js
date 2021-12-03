function Post({ book }) {
    //takes in all the products maps 
    return (
        <ul>
            {book.map(product =>
                <li key={product.id} className="listGroupItem">
                    {product.title}
                </li>
            )}
        </ul>
    )
}
export default Post