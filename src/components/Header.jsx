import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { setHeaderPopup } from '../redux/ipods-reducer';


const Header = () => {

    const headerPopup = useSelector(({ipods}) => ipods.headerPopup);
    const dispatch = useDispatch();
    const onHandleClick = () => {
        dispatch(setHeaderPopup(!headerPopup))
    }

    return(
        <header className='header'>
            <div className='header__wrapper'>
                    <div className="header__container _container">
                        <div className="header__body">
                            <div className="header__main">
                                <div className="header__menu menu">
                                    <nav className="menu__body">
                                        <ul className='menu__list'>
                                            <li className='menu__item'><NavLink to='/' className='menu__link'>Контрагентам</NavLink></li>
                                            <li className='menu__item'><NavLink to='/' className='menu__link'>Дизайнерам</NavLink></li>
                                            <li className='menu__item'><NavLink to='/' className='menu__link'>Вакансии</NavLink></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className='header__logo'>
                                <span className='_icon-OJJO'></span>
                                <span className='_icon-Dmnd dmnd-first'></span>
                                <span className='_icon-Dmnd dmnd-second'></span>
                            </div>
                            <div className='header__actions actions-header'>
                                <nav className='actions-header__body'>
                                    <div className="actions-header__search-form">
                                        <NavLink to='/' className="actions-header__item actions-header__item_search _icon-Search"></NavLink>
                                        <NavLink to='/' className="actions-header__item actions-header__item_poisc ">Поиск</NavLink>
                                    </div>
                                    <NavLink to='/' className="actions-header__item actions-header__item_login">Вход/Регистрация</NavLink>
                                    <div className='actions-header__icons-for-login'>
                                    <NavLink to='/' className="actions-header__item actions-header__item_login _icon-Login"></NavLink>
                                    <NavLink to='/' className="actions-header__item actions-header__item_favorite _icon-Heart"></NavLink>
                                    </div>
                                </nav>
                                <button onClick={onHandleClick} type="button" className="icon-menu">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        
    )

}


export default Header;