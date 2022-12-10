import { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import * as Yup from 'yup'
import {useFormik} from 'formik'
import Image from 'next/image'

import {Icon, FormInput, Button} from "../"
import styles from './Newsletter.module.scss';

export const Newsletter = (props) => { 
  const { className, handleSubmit } = props;

  const newsletterSchema = Yup.object().shape({
    email: Yup.string()
      .email('Wrong format.')
      .required('This field cannot be left blank.'),
  })

  const [newsletter] = useState({
    email: '',
  })

  const formik = useFormik({
    initialValues: newsletter,
    validationSchema: newsletterSchema,
    onSubmit: async (values, {setSubmitting}) => {
      setSubmitting(true)
      console.log(values)
      handleSubmit && handleSubmit()
    },
  })
  
  return (
    <div className={classNames(styles['newsletter'], className)}>
      <div className={styles['container']}>
        <div className={styles['title']}>
          <h5>Gelişmelerden <span>Haberdar Olun!</span></h5>
        </div>
        <form onSubmit={formik.handleSubmit} noValidate>
          <div className={styles['form-input']}>
            <Icon icon={'email'} className={styles['icon']} />
            <FormInput 
              field='E-Mail'
              type="email" 
              required
              errorMessage={formik.errors.email}
              {...formik.getFieldProps('email')}
              className={classNames(styles['input'], {'is-invalid': formik.touched.email && formik.errors.email})}
            />
          </div>
          <Button text={'Kaydol'} button className={styles['button']} />
        </form>
      </div>
      <div className={styles['image']}>
        <Image src={'/images/footer/newsletter.png'} width={'324'} height={'380'} alt={'Volde E-Bülten'} />
      </div>
    </div>
  )
}

Newsletter.propTypes = {
	className: PropTypes.string,
	title: PropTypes.bool,
  handleSubmit: PropTypes.func
};