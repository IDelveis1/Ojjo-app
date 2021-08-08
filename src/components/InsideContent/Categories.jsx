import React, { useEffect, useRef, useState } from 'react'


const Categories = ({categoryItems, sortType}) => {

    const [visibleSubList, setVisibleSubList] = useState(null) 
    const sortRef = useRef()
    const handleOutsideClick = ((e) => {
        if (!e.path.includes(sortRef.current)) {
            setVisibleSubList(null)
        }
    })

    useEffect(() => { 
        document.body.addEventListener('click', handleOutsideClick)
      }, [])


    return(
            <section className='page__categories categories'>
                <div className="categories__container _container">
                    <div className="categories__body" ref={sortRef}>
                    {categoryItems.map((name, nameIndex) => {
                        return (
                                 <div className={`categories__item ${visibleSubList === name ? '_hover' : ''}`} onClick={() => {
                                     setVisibleSubList(name)
                                     }}>
                                    <div className="categories__text">{name}</div>
                                    <span className="categories__button _icon-arrow"></span>
                                    <ul class="categories__sub-list">
                                        {sortType[nameIndex].map((subitem) => {
                                            return <li class="categories__sub-item">
											            <a href="" class="categories__sub-link">{subitem}</a>
										            </li>
                                        })}
									{/* 	<li class="categories__sub-item">
											<a href="" class="categories__sub-link">Product #1</a>
										</li>
										<li class="categories__sub-item">
											<a href="" class="categories__sub-link">Product #2</a>
										</li>	 */}									
									</ul>                                
                                </div>
                    )})}
                    </div>
                </div>
            </section>
    )
}

export default Categories;