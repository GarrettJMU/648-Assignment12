import React from 'react'

const ProductRow = ({ id, name, category, price, deleteProduct }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{category}</td>
      <td>{price}</td>
      <td>
        <button onClick={() => deleteProduct(id)}>Delete</button>
      </td>
    </tr>
  )
}

export default ProductRow
