import React from 'react'
import './css/index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faUser } from '@fortawesome/free-solid-svg-icons'

function index() {
    return (
        <div className="mainfeed">
            <div className="wrapper">
                <div className="feed-list">
                    <div className="write-feed">
                        <div className="input-area">
                            <FontAwesomeIcon icon={faUser} size="2x"/>
                            <div className="input">
                                <input type="text" placeholder="무슨 일이 있었나요?"/>
                            </div>
                        </div>
                        <div className="get-image">
                            <label htmlFor="get-image-input">
                                <FontAwesomeIcon icon={faImage} size="2x"/>
                            </label>
                        </div>
                    </div>
                    <div className="feed">
                        <div className="top"></div>
                    </div>
                </div>
                <div className="friends-list"></div>
            </div>
        </div>
    )
}

export default index
