//gerer l'etat de l'application
import { actions } from './actions'

const saveToLocalStorage = object => {
    localStorage.setItem("items", JSON.stringify(object))
}

const initialState = {
    //ceci maintient le nombre de quantité lorsqu'on rafrechie la page
    items : JSON.parse(localStorage.getItem("items")) !== null ? JSON.parse(localStorage.getItem("items")) : []
}

//exporter, c'est un unique objet qu'on va exporter
//state = initialState => on va prendre le state initiale pour retourner un state qui est modifiable

export default function onlineStoreApp(state = initialState, action) {
    switch (action.type) {          
                    //on crée une copie du state et de le modifier pour retourner la copie qui à été modifier
        case actions.ADD_TO_CART: return Object.assign({}, state, {items : [...state.items, action.payload]})
        
                    
        case actions.UPDATE_CART: return Object.assign({}, state, {
            items : state.items.map(item =>{
                // si c'est true il exécute l'object.assing
                return item.id === action.payload.id ? 
                Object.assign({}, item,{
                    quantity : action.payload.quantity
                }) : item; 
            })
        })
        
        case actions.REMOVE_FROM_CART: return Object.assign({}, state, {
            //un nouveau tableau qui ne correspond pas à l'id
            items : state.items.filter(item => {
                return item.id != action.payload
            })
        })

        case actions.SAVE_CART: 
        saveToLocalStorage(action.payload.items)
        return state

        //si par defaut nous avons pas la methode dispatch() dans index.js de src on doit 
        //mettre le  default : return state afin 
        default : return state
    } 

}

