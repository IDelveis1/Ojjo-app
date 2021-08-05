import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchIpods } from '../redux/ipods-reducer';
import IpodBlock from './IpodBlock';


const Products = () => {

    const ipods = useSelector(({ ipods }) => ipods.items)
    const isLoaded = useSelector(({ ipods }) => ipods.isLoaded)
    const dispatch = useDispatch()
    let [numberOfProducts, setNumberOfProducts] = useState(6)

    useEffect(() => {
        dispatch(fetchIpods(numberOfProducts))
      }, [numberOfProducts])

    const handleOnClick = () => {
        setNumberOfProducts(prevNumber => prevNumber + 3)
    }

    return(
        <section className='page__products products'>
            <div className="products__container _container">
                <div className="products__items">
                    { isLoaded ?  ipods.map((obj) => {
                        return (
                                <IpodBlock key={obj.id} {...obj} />
                        )
                        })
                    : ''
                    }
                    
                </div>
                <div className="products__footer">
                    <button onClick={handleOnClick} type="button" class="products__more btn">Покажите еще</button>
                </div>
            </div>
        </section>
    )
}


export default Products;