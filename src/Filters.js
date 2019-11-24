import React from 'react'

const Filters = ({ setFilterText, filterText }) => (
  <div style={{marginTop: 25}}>
    <input name='filterText'
           value={filterText}
           onChange={(e) => {
             setFilterText(e.target.value)
           }}
           placeholder='Search'
    />
  </div>
)

export default Filters
