import React from 'react';

import Content from '../components/Content';

const sortType = [['Apple', 'Samsung', 'Xiaomi'], ['По убыванию', 'По возрастанию'], ['Для взрослых', 'Для детей'], ['Новая', 'Хит продаж', 'Низкие цены', 'Акции'], ['Lalal', 'LALA'], ['']]


const CatalogPage = () => {
    return(
            <Content sortType={sortType} categoryItems={['Бренд', 'Цена', 'Для кого', 'Коллекция', 'Сезон', 'Событие']} /> 
    )

}


export default CatalogPage;