/**
 * Action type
 */

//definir nos actions
export const actions = {
    //ajouter 
    ADD_TO_CART : "ADD_TO_CART",
    //modifier
    UPDATE_CART : "UPDATE_CART", 
    //effacer
    REMOVE_FROM_CART : "REMOVE_FROM_CART",
    //sauvegarder le nbre de commande dans le panier
    SAVE_CART : "SAVE_CART"
}

/**
 * Action creator
 * item = info du produit
 * payload = les info qu'on transfere 
 */
//les actions qu'on va crées 

const uid = () => Math.random().toString(34).slice(2)
export function addtoCart (item, quantity) {
    return {
        type: actions.ADD_TO_CART, 
        payload: {id: uid(), quantity: quantity, details: item}
    }
}

//mettre à jour 
export function updateCart (id, quantity){
    return { 
        type: actions.UPDATE_CART,
        payload:{id: id, quantity}
    }
}

//supprimer
export function removeFromCart (id) {
    return {
        type: actions.REMOVE_FROM_CART, 
        payload: id
    }   
}

export function saveCart(items){
    return {
        type: actions.SAVE_CART,
        payload: {items: items}
    }
}