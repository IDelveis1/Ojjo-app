import React from 'react'
import { NavLink } from 'react-router-dom';


const Footer = () => {
    return(
        <footer className='footer'>
            <div className="footer__container _container">
                <div className="footer__body">
                    <div className="footer__top">
                        <div className="footer__links">
                            <div className="footer__title">Полезные ссылки</div>
                            <div className="footer__content">
                                <NavLink className='footer__link' to='#' className="footer__text">Доставка</NavLink>
                                <NavLink className='footer__link' to='#' className="footer__text">Оплата</NavLink>
                                <NavLink className='footer__link' to='#' className="footer__text">Акции</NavLink>
                                <NavLink className='footer__link' to='#' className="footer__text">Политика конфиденциальности</NavLink>
                            </div>
                        </div>
                        <div className="footer__payment">
                            <div className="footer__title">Оплата</div>
                            <div className="footer__content">
                                <div className="footer__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi quam aperiam rerum amet ad laudantium nesciunt libero deserunt repellendus omnis.</div>
                                    <div className="footer__card">
                                    <div className="footer__icon-visa">
                                    </div>
                                    <div className="footer__icon-master">
                                    </div>
                                </div>
                                
                                
                            </div>
                        </div>
                        <div className="footer__contacts">
                            <div className="footer__title">Контакты</div>
                            <div className="footer__content">
                                <div className='footer__contact-container'>
                                    <span className='_icon-Telefon footer__icon-mod'></span>
                                    <NavLink to='#' className="footer__text">8(927)234-56-55</NavLink>
                                </div>
                                <div className='footer__contact-container'>
                                    <span className='_icon-Telefon footer__icon-mod'></span>
                                    <NavLink to='#' className="footer__text">8(927)234-56-55</NavLink>
                                </div>
                                <div className='footer__contact-container'>
                                    <span className='_icon-Mail footer__icon-mod'></span>
                                    <NavLink to='#' className="footer__text">talan@mail.ru</NavLink>
                                </div>             
                            </div>
                        </div>
                        <div className="footer__social-network">
                            <div className="footer__title">Социальные сети</div>
                            <div className="footer__content">
                                <NavLink to='/' className="footer__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sit recusandae amet dolores est dicta.</NavLink>
                                <div className='footer__icons'>
                                    <NavLink className='footer__link' to='#'><span className="_icon-Youtube"></span></NavLink>
                                    <NavLink className='footer__link' to='#'><span className="_icon-Vkontakte"></span></NavLink>
                                    <NavLink className='footer__link' to='#'><span className="_icon-facebook"></span></NavLink>
                                    <NavLink className='footer__link' to='#'><span className="_icon-Telegram"></span></NavLink>
                                    <NavLink className='footer__link' to='#'><span className="_icon-E"></span></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='footer__bottom'>
                        <div className='footer__text _bottom-text'>(c) 2020 OJJO jewelry</div>
                        <div className='footer__text _bottom-text'>Договор публичной офферты</div>
                        <div className='footer__text _bottom-text'>Контрагентам</div>
                        <div className='footer__text _bottom-text'>Сделано Figma.info</div>
                    </div>
                </div>
            </div>

        </footer>
    )
}


export default Footer;