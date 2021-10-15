import React from 'react'
import Logo from '../Logo'
import './css/index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'



function index() {
    return (
        <div className="login">
            <div className="wrapper">
                <Logo />
                <form className="login-contents">
                    <div className="email input">
                        <div className="title txt-bold">이메일</div>
                        <div className="input">
                            <input type="email" required placeholder="이메일을 입력해주세요"/>
                        </div>
                    </div>
                    <div className="password input">
                        <div className="title txt-bold">비밀번호</div>
                        <div className="input">
                            <input type="password" required placeholder="비밀번호를 입력해주세요"/>
                        </div>
                    </div>
                    <button className="login-btn" type="submit">로그인하기</button>
                </form>
                <div className="go-join">
                    <div className="title txt-bold">또는 회원가입하기</div>
                    <div className="asset">
                        <FontAwesomeIcon icon={faLongArrowAltRight}/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default index
