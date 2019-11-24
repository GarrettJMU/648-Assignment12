import React from 'react'
import ProductRow from './ProductRow'
import Table from 'react-bootstrap/Table'

const ProductTable = ({ products, filterText, deleteProduct }) => {
  let rowsToRender = []

  Object.values(products).forEach(({ id, category, price, name }) => {
    if (filterText) {
      if (name.indexOf(filterText) >= 0) {
        rowsToRender.push(<ProductRow id={id} category={category} price={price} name={name} key={id}
                                      deleteProduct={(productId) => deleteProduct(productId)} />)
      }
    } else {
      rowsToRender.push(<ProductRow id={id} category={category} price={price} name={name} key={id}
                                    deleteProduct={(productId) => deleteProduct(productId)} />)
    }
  })

  return (
    <Table striped bordered hover style={{marginTop: 30}}>
      <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Category</th>
        <th scope="col">Price</th>
        <th scope="col" />
      </tr>
      </thead>
      <tbody>
      {rowsToRender.map((row) => (row))}
      </tbody>
    </Table>
  )
}

export default ProductTable
