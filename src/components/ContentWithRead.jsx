import React from 'react'
import { useState } from 'react';


const ContentWithRead = () => {

    const [readMore, setReadMore] = useState(false);


    return(
        <section className='page__contentWithRead contentWithRead'>
            <div className="contentWithRead__container _container">
                <div className="contentWithRead__body">
                    <div className="contentWithRead__content">
                        <div className={`contentWithRead__text ${readMore && 'read-more'}`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, illo expedita maiores delectus itaque saepe sunt, sit consectetur perferendis consequuntur iure eius a ducimus facere nisi debitis explicabo. Sapiente, quo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis odio, ex doloribus non reiciendis illo sint dolores neque ipsum facilis commodi. Consectetur adipisci itaque veniam eaque fugiat voluptates vel praesentium. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque aspernatur voluptatem ut assumenda totam placeat quisquam. Quam distinctio itaque fuga nesciunt ipsam illum a eum cumque, molestias similique dolores sed. {readMore && <span className='read-more'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatibus cum exercitationem corrupti aliquid eligendi vero debitis ullam? Obcaecati repellendus rem accusantium ut itaque nulla porro doloremque. Doloremque, exercitationem nostrum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores possimus vero temporibus quam exercitationem voluptatum vel ipsam, libero dicta quia aspernatur corporis enim velit esse! Assumenda sunt eos libero voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ratione dolorem, laborum nisi incidunt eos dignissimos, labore numquam, laudantium ex doloribus qui. Exercitationem repudiandae molestias pariatur eius vel dolor necessitatibus.</span>}</div>
                        <div onClick={ () => {
                            setReadMore(!readMore);
                              }} className="contentWithRead__btn">{!readMore ? "Читать полностью" : 'Скрыть текст'}</div>
                    </div>
                    <div className="contentWithRead__icons">
                        <div className='contentWithRead__ic'>
                            <span className='_icon-delivery' ></span>
                            <div className="contentWithRead__ic-text">Бесплатная доставка</div>
                        </div>
                        <div className='contentWithRead__ic'>
                            <div className='_icon-list'></div>
                            <div className="contentWithRead__ic-text">Индивидуальный дизайн</div>
                        </div>
                        <div className='contentWithRead__ic'>
                            <div className='_icon-apen'></div>
                            <div className="contentWithRead__ic-text">Бесплатная примерка</div>
                        </div>
                        <div className='contentWithRead__ic'>
                            <span className='_icon-jewelry'></span>
                            <div className="contentWithRead__ic-text">Личный подход</div>
                        </div>
                        
                    
                    </div>
                </div>
            </div>

        </section>

    )
}

export default ContentWithRead;