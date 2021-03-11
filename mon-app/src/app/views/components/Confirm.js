import React, { Fragment, useContext } from 'react'
import '../../styles/App.css'
import '../../styles/Confirm.css'
import { useSelector } from "react-redux"
import { UserProfileContext } from "../../lib/UserProfileContext"
import { Link } from 'react-router-dom'

export const Confirm = () => {
    const userProfile = useContext(UserProfileContext)
    //afficher récapitulatif des commandes d'un client
    const items = useSelector(state => state.items)
    return (
        <Fragment>
            <div class="jumbotron text-center">
                <h1 class="display-3">Thank you for you order</h1>
                <hr/>

                <p class="lead"> 
                    <strong>your order is on its way to your home</strong>
                    <br/> <br/>
                    <Link class="btn btn-primary btn-sm" to="/">
                        Continue to homepage
                    </Link>
                </p>
                <br/>

                {userProfile.address &&
                <ul className="address">
                    <li>{(userProfile.lastName).toUpperCase()}, {userProfile.firstName}</li>
                    <li>{userProfile.address}</li>
                    <li>{userProfile.city}, {userProfile.zipCode}</li>
                </ul>}

            </div>


        </Fragment>
    )
}