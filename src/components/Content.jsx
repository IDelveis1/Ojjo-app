import React from 'react';
import { useSelector } from 'react-redux';
import BurgerPopup from './BurgerPopup';
import Categories from './InsideContent/Categories';
import ContentWithForm from './InsideContent/ContentWithForm';
import ContentWithRead from './InsideContent/ContentWithRead';
import Products from './InsideContent/Products';


const Content = ({categoryItems, sortType }) => {

    const headerPopup = useSelector(({ipods}) => ipods.headerPopup);

    return(
        <main className='page'>
            {headerPopup && <BurgerPopup />}
            <Categories sortType={ sortType } categoryItems={categoryItems}/>
            <Products />
            <ContentWithForm />
            <ContentWithRead />    
        </main>
    )
}


export default Content;