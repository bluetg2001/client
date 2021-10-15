import React from 'react'
import './css/style.css'
import Logo from '../Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-regular-svg-icons'


function index() {
    return (
        <div className="header">
            <div className="wrapper">
                <Logo/>
                <div className="header-contents">
                    <FontAwesomeIcon icon={faNewspaper} size="2x" />
                    <FontAwesomeIcon icon={faUserCircle} size="2x" />
                </div>
               
            </div>
        </div>
    )
}

export default index
