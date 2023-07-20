import React, { useState, useEffect} from "react"
import { Link } from "react-router-dom"



function Header () {
    
    return (
        <div className="flex justify-between px-6 py-5 border-b ">
            <div>
                <a href="">
                    <img className="w-20 h-10" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/cool-leaf-leaves-logo-design-template-3d31246bc42d85bd5aef0324a5bb608e_screen.jpg?ts=1594867415" alt="" />
                </a>
            </div>
            
            <div>
                <ul className="flex justify-center gap-5 text-xl font-bold">
                    <li>
                       <Link to="/">Home </Link> 
                    </li>
                    <li>
                       <Link to="/About"> About </Link>
                    </li>
                    <li>
                        <Link to="/Login">Login </Link>
                    </li>
                   
                </ul>
            </div>

        </div>
    )
}
export default Header