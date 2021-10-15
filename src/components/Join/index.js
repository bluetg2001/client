import React from 'react'
import './css/index.css'
import Logo from '../Logo'

function index() {
    return (
        <div className="join">
            <div className="wrapper">
                <Logo />
                <form className="join-contents">
                    <div className="join-content">
                        <div className="title txt-bold">이메일</div>
                        <input className="input" type="email" required placeholder="이메일을 입력해주세요"/>
                    </div>
                    <div className="join-content">
                        <div className="title txt-bold">비밀번호</div>
                        <input className="input" type="password" required placeholder="비밀번호를 입력해주세요"/>
                    </div>
                    <div className="join-content">
                        <div className="title txt-bold">닉네임</div>
                            <input className="input" type="text" required placeholder="닉네임을 입력해주세요"/>
                    </div>
                    <button className="join-btn txt-bold">회원가입하기</button>
                </form>
            </div>
        </div>
    )
}

export default index
