import React from 'react';
import Categories from './Categories';
import ContentWithForm from './ContentWithForm';
import ContentWithRead from './ContentWithRead';
import Products from './Products';


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