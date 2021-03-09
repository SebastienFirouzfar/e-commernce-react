import { connect } from 'react-redux'
import App from '../components/index'
import { saveCart } from '../../lib/actions'

export const AppContainer = connect(

    function mapStateToProps(state) {
        return { items: state.items }
    },

    function mapDispatchToProps(dispatch) {
        return {
            // on a enlever le  onAddToCart car on utilise le hook dispatch dans index de component
            // onUpdateCart: (item, quantity) => dispatch(updateCart(item, quantity)), 
            saveLocalStorage : items => dispatch(saveCart(items))
        }
    }
)(App)