import React, { Fragment, useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../../styles/App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

//Acces aux fichiers views 
import { CartPage } from './Cart'
import { Home } from './Home'
import { Checkout } from './Checkout'

//Récuperer les constants 
import { NavBar } from '../../components'

//récuperer les données
import { list } from '../../data'

//récuperer les info de lib
import UserProfileContextProvider from '../../lib/UserProfileContext'

const App = props => {

  const { items, saveLocalStorage  } = props

  const [category, setCategory] = useState(0)
  
  //s'il y a un text mis dans search
  const [isFiltering, setFiltering] = useState(false)
  const [filtered, setFiltered] = useState(false)

  /*Ajouter le nombre de commande fait par le client dans le panier*/ 
  const [count, setCount] = useState(1)
  const loadCategory = i => { setCategory(i) }

  const filterResults = (input) => {
    
    /*Création d'une list */ 
    let fullList = list.flat();
    console.log(fullList)

    let results = fullList.filter(item => {
      const name = item.name.toLowerCase()
      const term = input.toLowerCase()

      /*si la chaine de caractere correspond à term */ 
      return name.indexOf(term) > -1
    })
    setFiltered(results)
  }
  
   // Met à jour
  useEffect(() => {
    saveLocalStorage(items)
  }, [items])


  return (
    <Fragment>
      <Router> 
        <UserProfileContextProvider>
        <NavBar filter={filterResults} setFiltering={setFiltering} count={count} />

        {/* Routes */}
        <Route exact path="/" component={() => <Home
                                                  category={category}
                                                  loadCategory={loadCategory}
                                                  list={list}
                                                  isFiltering={isFiltering}
                                                  filtered={filtered}/>   
                                                } />
        <Route path="/cart" component={CartPage} />
        <Route path="/checkout" component={Checkout} />
        </UserProfileContextProvider>
      </Router>
    </Fragment>
  );
}

export default App;
