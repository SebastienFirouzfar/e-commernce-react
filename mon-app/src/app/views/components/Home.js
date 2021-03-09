import React from 'react'
import { List } from '../../components'

const SideMenu = ({loadCategory, category}) => {
    const links = ["Fruit", "Légume", "Produits Frais", "Epicerie", "Boisson"]
    
    return (
      <div className="col-sm-2 sidebar">
        <ul>
          {/* parcourir tout les liens, Onclick est une methode qui permet de cliquer  */}
          {links.map((link, index ) =>{
           return (<li className={category == index && 'active'} key={index}  onClick={() => loadCategory(index)} >  {link}</li>)
          })}
        </ul>
      </div>
  
    )
  }

export const Home = props => {                                //,addToCart
    const {isFiltering, filtered, list, category, loadCategory , updateCart} = props
    return(  <div className="container">
    <div className="row">
       
       {/* lister les liens et les affiches les produits de leur catégorie */}
      <SideMenu loadCategory={loadCategory} category={category} />
      
      <div className="col-sm">
        <div className="row" >
          
           {/* lister les données de la catégorie */}
         <List data={isFiltering ? filtered :  list[category]} category={category}  updateCart={updateCart}/> 
        </div>
      </div>
    
    
    </div>
  </div>)
}