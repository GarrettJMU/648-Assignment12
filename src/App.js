import React from 'react'
import './App.css'
import Product from './Product'

const App = () => (
  <>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossOrigin="anonymous"
    />
    <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin />

    <script
      src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
      crossOrigin
    />

    <script
      src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
      crossOrigin
    />

    <Product />
  </>
)

export default App
