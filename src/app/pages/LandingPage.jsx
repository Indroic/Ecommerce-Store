import React from 'react'
import { SearchComponent } from '../components/search/SearchComponent'
import { ProductsGridComponent } from '../components/grid/ProductsGridComponent'

export const LandingPage = () => {
  return (
    
    <div className="container">

      <header className="hero">
      <h1>Store App</h1>
      <SearchComponent/>
      </header>
      
      <main>
        <ProductsGridComponent/>
      </main>


    </div>
  )
}
