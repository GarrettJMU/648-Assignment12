import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const ProductForm = ({ addNewProduct }) => {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')

  function resetFormValues() {
    setName('')
    setCategory('')
    setPrice('')
  }

  return (
    <>
      <h2>Add a new product</h2>
      <Form>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="formCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control placeholder='category' value={category} onChange={(e) => setCategory(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="formPrice">
          <Form.Label>Name</Form.Label>
          <Form.Control type="currency" placeholder='price' value={price} onChange={(e) => setPrice(e.target.value)} />
        </Form.Group>
        <Button onClick={(e) => {
          e.preventDefault()
          addNewProduct({ name, category, price })
          resetFormValues()
        }}>
          Submit
        </Button>
      </Form>
    </>
  )
}

export default ProductForm
