import React, { useState } from 'react'

const ProductForm = ({ addNewProduct }) => {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')

  function resetFormValues () {
    setName('')
    setCategory('')
    setPrice('')
  }

  return (
    <>
      <h2>Add a new product</h2>
      <form>
        <input placeholder='name' value={name} onChange={(e) => setName(e.target.value)} /><br />
        <input placeholder='category' value={category} onChange={(e) => setCategory(e.target.value)} /><br />
        <input placeholder='price' value={price} onChange={(e) => setPrice(e.target.value)} /><br />
        <button onClick={(e) => {
          e.preventDefault()
          addNewProduct({ name, category, price })
          resetFormValues()
        }}>
          Submit
        </button>
      </form>
    </>
  )
}

export default ProductForm
