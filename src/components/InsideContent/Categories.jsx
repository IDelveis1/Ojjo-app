import React from 'react'


const Categories = ({categoryItems}) => {
    return(
            <section className='page__categories categories'>
                <div className="categories__container _container">
                    <div className="categories__body">
                    {categoryItems.map((name) => {
                        return (
                                 <div className='categories__item'>
                                    <div className="categories__text">{name}</div>
                                    <span className="categories__button _icon-arrow"></span>
                                </div>
                    )})}
                    </div>
                </div>
            </section>
    )
}

export default Categories;