import React, { Fragment, useState, useEffect, useContext } from 'react'
import { UserProfileContext } from "../../lib/UserProfileContext"
import { Link } from 'react-router-dom'
import "../../styles/App.css"

export const Checkout = () => {
    const [isValid, setValid] = useState(false)
    const value = useContext(UserProfileContext) 
    const { 
        firstName,
        lastName,
        email ,
        address,
        zipCode,
        city,
        setUserProfileContext 
    } = value
    
    
    const validate = () => {
        let errors = []
        //récuperer tout les inputs 
        const inputs = document.querySelectorAll('.form-control')

        inputs.forEach(input => {
            // s'il n'y pas de valeur, le programme doit contenir tout les inputs qui ne sont pas valide
            !input.value ? errors.push(input) : errors.length && errors.pop()
        })

        //s'il ya aucune erreur
        console.log(errors)
        setValid(!errors.length)
    }

    useEffect(() => {
        validate()
    })
    
    return (
        <Fragment>
            <div className="col-sm-6 offset-3">
                <h2>Checkout</h2>
                <br />
                <form>
                    <div className="row">
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="First name"
                                property=""
                                name="firstName"
                                defaultValue={firstName}
                                onChange={e => { 
                                    setUserProfileContext({[e.target.name]: e.target.value})
                                }}
                            />
                        </div>
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Last name"
                                name="lastName"
                                property=""
                                defaultValue={lastName}
                                onChange={e => { 
                                    setUserProfileContext({[e.target.name]: e.target.value})
                                }}
                            />
                        </div>
                    </div>
                    <br />
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email Adress"
                            property=""
                            name="email"
                            defaultValue={email}
                            id="exampleInputEmail"
                            onChange={e => { 
                                setUserProfileContext({[e.target.name]: e.target.value})
                            }}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="address"
                            className="form-control"
                            placeholder="Address"
                            name="address"
                            property=""
                            defaultValue={address}
                            onChange={e => { 
                                setUserProfileContext({[e.target.name]: e.target.value})
                            }}
                        />
                    </div>

                    <div className="row">
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Postal code "
                                name="postalCode"
                                property=""
                                defaultValue={zipCode}
                                onChange={e => { 
                                    setUserProfileContext({[e.target.name]: e.target.value})
                                }}
                            />
                        </div>
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="city "
                                property=""
                                name="city"
                                defaultValue={city}
                                onChange={e => { 
                                    setUserProfileContext({[e.target.name]: e.target.value})
                                }}
                            />
                        </div>
                    </div>
                    <br />
                    {/*si c'est pas valide on affiche le disabled*/}
                    <Link to="/confirm" className={`${!isValid && 'disabled'} white btn btn-dark btn-lg btn-block bg-crimson checkout`}>
                        Confirm
                    </Link>
                </form>
            </div>
        </Fragment>
    )
}