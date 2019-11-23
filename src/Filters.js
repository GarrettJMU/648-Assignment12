import React from 'react'

const Filters = ({ setFilterText, filterText }) => (
  <input name='filterText'
         value={filterText}
         onChange={(e) => {
           setFilterText(e.target.value)
         }}
         placeholder='Search'
  />
)

export default Filters
