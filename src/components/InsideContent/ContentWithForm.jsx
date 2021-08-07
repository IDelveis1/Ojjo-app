import React from 'react';
import { Formik } from 'formik';


const ContentWithForm = () => {
    return(
        <section className='page__contentWithForm contentWithForm'>
            <div className="contentWithForm__container _container">
                <div className="contentWithForm__body">
                    <div className='contentWithForm__top'>
                        <div className='contentWithForm__text'>Полезные советы и персональный предложения</div>
                        <div className='contentWithForm__boldText'>Эксклюзивная рассылка</div>
                    </div>
                    <div className='contentWithForm__bottom'>
                        <div className='contentWithForm__list'>
                            <div className="contentWithForm__elem">
                                    <div className='contentWithForm__text-list  '>Личный менеджер</div>
                            </div>
                            <div className="contentWithForm__elem">
                                   <div className='contentWithForm__text-list '>Личный менеджер</div>
                            </div>
                            <div className="contentWithForm__elem">
                                <div className='contentWithForm__text-list '>Личный менеджер</div> 
                            </div>
                         </div>
                         <div className='contentWithForm__mail-form mail-form'>
                                <div class="mail-form__button">
                                <Formik
                                    initialValues={{ email: '' }}
                                    validate={values => {
                                        const errors = {};
                                        if (!values.email) {
                                        errors.email = 'Введите пожалуйста';
                                        } else if (
                                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                        ) {
                                        errors.email = 'Неправильный E-MAIL';
                                        }
                                        return errors;
                                    }}
                                    onSubmit={(values, { setSubmitting }) => {
                                        setTimeout(() => {
                                        alert(JSON.stringify(values, null, 2));
                                        setSubmitting(false);
                                        }, 400);
                                    }}
                                    >
                                    {({
                                        values,
                                        errors,
                                        touched,
                                        handleChange,
                                        handleBlur,
                                        handleSubmit,
                                        isSubmitting,
                                        /* and other goodies */
                                    }) => (
                                        <form onSubmit={handleSubmit} className="mail-form__item">
                                        <input
                                            className="mail-form__input"
                                            type="email"
                                            name="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                            placeholder='    ВАШ E-MAIL'
                                        />
                                        <div className="errors">
                                        {errors.email && touched.email && errors.email}  
                                        </div>            
                                        <button type="submit" disabled={isSubmitting} className="mail-form__btn btn">
                                            Отправить
                                        </button>
                                        </form>
                                    )}
                                </Formik>
					            </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContentWithForm;



