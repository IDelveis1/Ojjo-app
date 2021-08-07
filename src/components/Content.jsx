import React from 'react';
import Categories from './InsideContent/Categories';
import ContentWithForm from './InsideContent/ContentWithForm';
import ContentWithRead from './InsideContent/ContentWithRead';
import Products from './InsideContent/Products';


const Content = ({categoryItems }) => {

    

    return(
        <main className='page'>
            <Categories categoryItems={categoryItems}/>
            <Products />
            <ContentWithForm />
            <ContentWithRead />    
        </main>
    )
}


export default Content;