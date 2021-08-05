import React from 'react';
import { NavLink } from 'react-router-dom';


const IpodBlock = ({title, product_type, price, image}) => {
    return(
        <article className='products__item item-product'>
                        <NavLink to='#' className='item-product__image _ibg'>
                            <img src={ image } alt='title'></img>
                        </NavLink>
                        <div className="item-product__body">
                            <div className="item-product__content">
                                <div className="item-product__text">{ product_type }</div>
                                <div className="item-product__name">{ title }</div>
                            </div>
                            <button className="item-product__price btn">{ `${price} ₽` }</button>
                        </div>
                    </article>
    )
}


export default IpodBlock;