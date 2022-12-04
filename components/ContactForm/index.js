import Head from 'next/head'
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import * as Yup from 'yup'
import { useFormik } from 'formik'

import { FormInput, FormTextarea, Button, FormCheckbox } from "../"
import styles from './ContactForm.module.scss';

export const ContactForm = (props) => {
  const { className } = props;

  const contactSchema = Yup.object().shape({
    email: Yup.string()
      .email('Wrong format.')
      .required('This field cannot be left blank.'),
    namesurname: Yup.string().required('This field cannot be left blank.'),
    recaptcha: Yup.string().required('This field cannot be left blank.'),
  })

  const [contact] = useState({
    namesurname: '',
    email: '',
    phone: '',
    message: '',
    recaptcha: ''
  })

  const formik = useFormik({
    initialValues: contact,
    validationSchema: contactSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true)
      console.log(values)
    },
  })

  const verifyCallback = (response) => formik.setFieldValue('recaptcha', response);

  useEffect(() => {
    window.onloadCallback = () => {
      try {
        window.grecaptcha.render('captcha', {
          'sitekey': '6LdUkLkiAAAAAK4MXrk7MXmUbxhiEWoUV8C8GxQ7',
          'callback': verifyCallback,
        });
      } catch (error) {
        console.log(error)
      }
    };
  }, [])

  return (
    <>
      <Head>
        <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer></script>
      </Head>
      <div className={classNames(styles['contact-form'], className)}>
        <h3>Bizimle iletişime geçin</h3>
        <div className={styles["contact-form__text"]}>
          Lorem Ipsum is simply dummy typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.
        </div>
        <form onSubmit={formik.handleSubmit} noValidate>
          <div className={styles["contact-form__block"]}>
            <div>
              <div className='form-group'>
                <FormInput
                  field='Adınız'
                  required
                  errorMessage={formik.errors.namesurname}
                  {...formik.getFieldProps('namesurname')}
                  className={classNames({ 'is-invalid': formik.touched.namesurname && formik.errors.namesurname })}
                />
              </div>

              <div className='form-group'>
                <FormInput
                  field='Soyadınız'
                  required
                  errorMessage={formik.errors.namesurname}
                  {...formik.getFieldProps('namesurname')}
                  className={classNames({ 'is-invalid': formik.touched.namesurname && formik.errors.namesurname })}
                />
              </div>
            </div>

            <div>
              <div className='form-group'>
                <FormInput
                  field='Telefon'
                  type="phone"
                  required
                  errorMessage={formik.errors.phone}
                  {...formik.getFieldProps('phone')}
                  className={classNames({ 'is-invalid': formik.touched.phone && formik.errors.phone })}
                />
              </div>

              <div className='form-group'>
                <FormInput
                  field='E-Posta'
                  type="email"
                  required
                  errorMessage={formik.errors.email}
                  {...formik.getFieldProps('email')}
                  className={classNames({ 'is-invalid': formik.touched.email && formik.errors.email })}
                />
              </div>
            </div>
          </div>

          <div className='form-group'>
            <FormInput
              field='Lütfen CV’nizi yükleyiniz. ( Pdf, Docx, Jpeg )'
              type="email"
              required
              errorMessage={formik.errors.email}
              {...formik.getFieldProps('email')}
              className={classNames({ 'is-invalid': formik.touched.email && formik.errors.email })}
            />
          </div>

          <div className='form-group'>
            <FormTextarea
              field='Message'
              rows={5}
              name={'message'}
              {...formik.getFieldProps('message')}
            />
          </div>
          <FormCheckbox label='VOLDE tarafından yukarıda belirtmiş olduğum bilgiler üzerinden benimle iletişim kurulmasını ve izinli iletişim formu ‘nu onaylıyorum.' />
          <div className={styles["form-group-buttons"]}>
            <div className={classNames('captcha', { 'is-invalid': formik.touched.recaptcha && formik.errors.recaptcha })}>
              <div id="captcha"></div>
              <pre>{formik.errors.recaptcha}</pre>
            </div>
            <Button text={'Gönder'} button className={styles['button']} />
          </div>

        </form>
      </div>
    </>
  )
}

ContactForm.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string
};