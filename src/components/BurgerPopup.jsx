import React from 'react';
import { NavLink } from 'react-router-dom';



const BurgerPopup = () => {
    return (
<div className="authPopup">
                <div className="authPopup__container _container">
                <nav className="authPopup__body popup-menu">                                 
                                        <ul className='popup-menu__list'>
                                            <li className='popup-menu__item'><NavLink to='/' className='popup-menu__link'>Контрагентам</NavLink></li>
                                            <li className='popup-menu__item'><NavLink to='/' className='popup-menu__link'>Дизайнерам</NavLink></li>
                                            <li className='popup-menu__item'><NavLink to='/' className='popup-menu__link'>Вакансии</NavLink></li>
                                            <li className='popup-menu__item'><NavLink to='/' className='popup-menu__link'>Вход/Регистрация</NavLink></li>
                                        </ul>
                                        <div className='actions-header__icons-for-login popup-menu__icons'>
                                            <NavLink to='/' className="popup-menu__link popup-menu__link_login _icon-Login"></NavLink>
                                            <NavLink to='/' className="popup-menu__link popup-menu__link_favorite _icon-Heart"></NavLink>
                                        </div>
                                        <div className='popup-menu__icons'>
                                            <NavLink className='popup-menu__link' to='/'><span className="_icon-Youtube"></span></NavLink>
                                            <NavLink className='popup-menu__link' to='/'><span className="_icon-Vkontakte"></span></NavLink>
                                            <NavLink className='popup-menu__link' to='/'><span className="_icon-facebook"></span></NavLink>
                                            <NavLink className='popup-menu__link' to='/'><span className="_icon-Telegram"></span></NavLink>
                                            <NavLink className='popup-menu__link' to='/'><span className="_icon-E"></span></NavLink>
                                         </div>
                                </nav>
                            </div>
            </div>
    )
}

export default BurgerPopup;