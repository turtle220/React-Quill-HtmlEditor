import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import SocialButton from '../common/SocialButton'
import { JwModal } from '../dialog';

function Login(props) {
    const dispatch = useDispatch()

    const handleSocialLogin = (user) => {
        JwModal.close('auth-modal')()
        const { _profile, _token } = user
        console.log('handleSocialLogin ', user, _profile, _token)
        dispatch({type: 'auth_login_success', value: { profile: _profile, token: _token}})
        // _profile.name, email, profilePicURL, accessToken, expiresAt
    }
    const handleSocialLoginFailure = (err) => {
        JwModal.close('auth-modal')()
        console.error('handleSocialLoginFailure ', err)
    }
    const handleLogoutSuccess = (user) => {
        JwModal.close('auth-modal')()
        console.error('handleLogoutSuccess ', user)
    }
    const handleonLogoutFailure = (err) => {
        JwModal.close('auth-modal')()
        console.error('handleonLogoutFailure ', err)
    }
    return (
        <>
            <div className="close" onClick={JwModal.close('auth-modal')}>
            <svg height="9" fill="#686F75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 11">
                <path d="M10 11a1 1 0 0 1-.73-.3L.3 1.76A1 1 0 0 1 1.76.3l8.94 8.94A1 1 0 0 1 10 11z"></path>
                <path d="M1 11a1 1 0 0 1-.7-1.76L9.24.3a1 1 0 0 1 1.46 1.46L1.76 10.7A1 1 0 0 1 1 11z"></path>
            </svg>
            </div>
            <div className="AuthModal">
                <h1 className="cus-h1">Login account to share an article</h1>
                <div className="buttons">
                    <SocialButton
                        provider='facebook'
                        appId='214637516273116'
                        onLoginSuccess={handleSocialLogin}
                        onLoginFailure={handleSocialLoginFailure}
                        onLogoutSuccess={handleLogoutSuccess}
                        onLogoutFailure={handleonLogoutFailure}
                        key={'facebook'}
                        id={'facebook'}
                        className={'Button facebook extra noPadding'}
                    >
                        <div className="icon">
                            <svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90">
                                <path id="Facebook__x28_alt_x29_" d="M90 15.001C90 7.119 82.884 0 75 0H15C7.116 0 0 7.119 0 15.001v59.998C0 82.881 7.116 90 15.001 90H45V56H34V41h11v-5.844C45 25.077 52.568 16 61.875 16H74v15H61.875C60.548 31 59 32.611 59 35.024V41h15v15H59v34h16c7.884 0 15-7.119 15-15.001V15.001z"></path>
                            </svg>
                        </div>
                        <div className="desktopOnly">Facebook</div>
                    </SocialButton>
                    {/* <SocialButton
                        provider='google'
                        // appId='380989824575-m09tb1rpr96ge5luk47gf20j5bh36c2e.apps.googleusercontent.com' //real site
                        appId='380989824575-m09tb1rpr96ge5luk47gf20j5bh36c2e.apps.googleusercontent.com'
                        onLoginSuccess={handleSocialLogin}
                        onLoginFailure={handleSocialLoginFailure}
                        onLogoutSuccess={handleLogoutSuccess}
                        onLogoutFailure={handleonLogoutFailure}
                        key={'google'}
                        id={'google'}
                        className={'Button google extra noPadding'}
                    >
                        <div className="icon">
                            <svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455.73 455.73">
                                <path d="M0 0v455.73h455.73V0H0zm265.67 247.037c-7.793 51.194-45.961 80.543-95.376 80.543-55.531 0-100.552-45.021-100.552-100.552 0-55.517 45.021-100.538 100.552-100.538 26.862 0 50.399 9.586 67.531 26.226l-28.857 28.857c-9.773-9.846-23.147-15.094-38.674-15.094-32.688 0-59.189 27.874-59.189 60.548 0 32.703 26.501 59.768 59.189 59.768 27.397 0 48.144-13.243 54.129-39.758h-54.129v-40.38h95.131c1.142 6.506 1.72 13.315 1.72 20.37-.001 6.998-.507 13.663-1.475 20.01zm120.749-12.52h-35.233v35.218H326.16v-35.218h-35.233v-25.041h35.233v-35.233h25.026v35.233h35.233v25.041z"></path>
                            </svg>
                        </div>
                        <div className="desktopOnly">Google +</div>
                    </SocialButton> */}
                </div>
            </div>
        </>
    )
}

export default Login;