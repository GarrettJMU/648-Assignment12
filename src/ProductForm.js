import React, { useState } from 'react'

const ProductForm = () => {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')

  return (
    <>
      <h2>Add a new product</h2>
      <form>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <input value={category} onChange={(e) => setCategory(e.target.value)} />
        <input value={price} onChange={(e) => setPrice(e.target.value)} />
        <button>
          Submit
        </button>
      </form>
    </>
  )
}

export default ProductForm
