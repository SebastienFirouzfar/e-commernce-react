import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addtoCart } from '../lib/actions'

export const NavBar = ({ filter, setFiltering}) => {
    //addition et sauvegarder le meme nombre quand on refresh
    const items = useSelector(state => state.items)
    return (
        <nav className="navbar orange navbar-expand-lg  navbar-light bg-light fixed-top ">
                    <Link className="navbar-brand crimson" to="/"> <i class="fas fa-shopping-cart "></i> Mes courses en ligne</Link>
            
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="ml-auto cart">
                    <div>
                        <form className="search form-inline my-2 my-lg-0 ">
                            <input
                                className="form-control mr-sm-2"
                                type="Search"
                                placeholder="Search"
                                aria-label="Search"

                                /*Imprimer la valeur mis dans la bare de recherche*/
                                onChange={(e) => {
                                    /*S'il y a du text il envoie true sinon false*/
                                    setFiltering(e.target.value.length > 0)
                                    filter(e.target.value)
                                }}
                            />
                        </form>
                    </div>
                    <div className="menu-right">
                        <Link to="/cart">
                            <i class="fas fa-shopping-bag fa-2x grey"></i>
                        </Link>
                                                                {/*Pour savegarder le meme nbre quand on refresh la page*/}
                    <span class="badge badge-pill badge-success">{items.length > 0 && items.length}</span>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export const Card = props => {
    /*« props » (qui signifie « propriétés »)*/
    /*const  {fruit} = props*/
    const { item, count } = props
    return (
        /**4X3 COLLONE (3) */
        <div className="col-sm-4">
            <div className="card">
                <img
                    width="170"
                    height="170"
                    /* le chemin vers le public où se trouve le dossier assets qui contient des folder img */
                    src={process.env.PUBLIC_URL + `./assets/${item.category}/${item.image}`}
                    alt={item.name}
                />

                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-6">
                            {/* afficher les noms */}
                            <h4>{item.name}</h4>
                        </div>

                        <div className="col-sm-6">
                            {/* afficher les prix et l'unit */}
                            <p>€ {item.price} / {item.unit}</p>
                            {/* lorque le client clique sur le boutton View product il affiche le produit et la référence */}
                            <button className="btn btn-warning btn-sm" data-toggle="modal" data-target={`#${item.ref}`}>View product</button>
                        </div>
                    </div>
                </div>

            </div>
            {/* passer en props */}
            <Modal item={item} count={count}/>
        </div>
    )
}


export const Modal = ({item }) => {
   {/*Pour incrémenter le nombre de quantité (get et set)*/}
   const [qty, setQty] = useState(1)
   const dispatch = useDispatch()
   
   //ajouter le produit
   const add = (item, quantity) => {
       dispatch(addtoCart(item, quantity))
   }

    return (
        <div
            className="modal fade"
            id={item.ref}
            data-backdrop="static"
            tabindex="-1"
            role="dialog"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true">

            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">{item.name}</h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-sm-4">
                                <img
                                    width="170"
                                    height="170"
                                    src={process.env.PUBLIC_URL +
                                        `./assets/${item.category}/${item.image}`
                                    }
                                    alt={item.name}
                                />
                            </div>

                            <div className="col-sm">
                                <p className="lead">
                                    lorem ipsum dolor sit amet, consectetur
                                    </p>

                                <h3 className="price">€{item.price} / {item.unit}</h3>
                                <div
                                    className="btn-group"
                                    role="group"
                                    aria-label="Basic example">
                                        
                                    <button
                                        /* decremente*/         /*Si c'est vrai on - si c'est false on laisse a 1  */
                                        onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                                        type="button"
                                        className="btn btn-secondary">
                                        -
                                    </button>
                                                                   {/* c'est du static*/}
                                    <span className="btn btn-light qty">{qty}</span>

                                    <button className=""
                                         /* incremente*/
                                        onClick={() => setQty(qty + 1)}
                                        type="button"
                                        className="btn btn-secondary">
                                        +
                                    </button>

                                </div>
                                <br />
                            </div>
                        </div>

                    </div>
                
                    <div className="modal-footer">
                        <button className="btn btn-"
                            type="button"
                            className="btn btn-secondary"
                            data-dismiss="modal">
                            Close
                        </button>

                        <button className=""
                            type="button"
                            className="btn btn-success"
                            data-dismiss="modal"
                            //voir la structure dans le fichier index.js de container et action de lib
                            onClick={() => add(item, qty)}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const List = props => {
    const { data, category, updateCart } = props
    return (
        <div className="col-sm">
            <div className="row">
                {/* parcourir tout les fruits  et d'ajouter le produit dans le panier*/}
                {data.map(item => <Card key={item.ref} item={item} updateCart={updateCart} />)}
            </div>
        </div>
    )
}

