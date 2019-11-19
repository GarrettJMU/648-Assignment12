import React from 'react'

const Filters = ({ setFilterText, filterText }) => (
  <input value={filterText}
         onChange={(e) => {
           e.preventDefault()
           setFilterText(e.target.value)
         }}
         placeholder='Search'
  />
)

export default Filters
