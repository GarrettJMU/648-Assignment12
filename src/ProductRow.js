import React from 'react'
import Button from 'react-bootstrap/Button'

const ProductRow = ({ id, name, category, price, deleteProduct }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{category}</td>
      <td>{price}</td>
      <td>
        <Button onClick={() => deleteProduct(id)} variant="danger">Delete</Button>
      </td>
    </tr>
  )
}

export default ProductRow
