import Head from 'next/head'
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import * as Yup from 'yup'
import { useFormik } from 'formik'

import { FormInput, FormTextarea, Button, FormCheckbox, FileInput, Modal, Icon } from "../"
import styles from './ContactForm.module.scss';

export const ContactForm = (props) => {
  const { className, hr, title, text } = props;
  const [checkboxAllow, setCheckboxAllow] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [agreementModal, setAgreementModal] = useState(false);

  const contactSchema = Yup.object().shape({
    email: Yup.string()
      .email('Wrong format.')
      .required('This field cannot be left blank.'),
    name: Yup.string().required('This field cannot be left blank.'),
    surname: Yup.string().required('This field cannot be left blank.'),
    permission: Yup.bool().oneOf([true], 'This field cannot be left blank.'),
    recaptcha: Yup.string().required('This field cannot be left blank.'),
  })

  const [contact] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    message: '',
    permission: true,
    recaptcha: '',
    cv: {}
  })

  const formik = useFormik({
    initialValues: contact,
    validationSchema: contactSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true)
      
      if (type == 'contact') {
        
      }

      if (hr) {
       await fetch(`${API_URL}/hr_form`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: values
        }).then(r => r.json()).then(data => setModalOpen(true));
      } else {
        await fetch(`${API_URL}/contact_form`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        }).then(r => r.json()).then(data => setModalOpen(true));
      }
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

  const handleChangePermission = () => {
    setCheckboxAllow(!checkboxAllow)
    formik.setFieldValue('permission', !checkboxAllow)
  };

  return (
    <>
      <Head>
        <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer></script>
      </Head>
      <div className={classNames(styles['contact-form'], { [styles["contact-form--hr"]]: hr }, className)}>
        <h3>{title}</h3>
        <p>{text}</p>
        <form onSubmit={formik.handleSubmit} noValidate>
          <div className='form-group'>
            <div>
              <FormInput
                field='Adınız'
                required
                errorMessage={formik.errors.name}
                {...formik.getFieldProps('name')}
                className={classNames({ 'is-invalid': formik.touched.name && formik.errors.name })}
              />
            </div>
            <div>
              <FormInput
                field='Soyadınız'
                required
                errorMessage={formik.errors.surname}
                {...formik.getFieldProps('surname')}
                className={classNames({ 'is-invalid': formik.touched.surname && formik.errors.surname })}
              />
            </div>
          </div>

          <div className='form-group'>
            <div>
              <FormInput
                field='Telefon'
                type="phone"
                required
                errorMessage={formik.errors.phone}
                {...formik.getFieldProps('phone')}
                className={classNames({ 'is-invalid': formik.touched.phone && formik.errors.phone })}
              />
            </div>

            <div>
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

          {hr && <div className='form-group'>
            <FileInput 
              field={'Lütfen CV’nizi yükleyiniz.'}
              name={'cv'}
              onChange={(event) => formik.setFieldValue('cv', event.currentTarget.files[0])}
              accept="image/*,.pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            />
          </div>}

          <div className='form-group'>
            <FormTextarea
              field='Mesajınız'
              rows={5}
              name={'message'}
              {...formik.getFieldProps('message')}
            />
          </div>
          <div className='form-group'>
            <FormCheckbox
              label='VOLDE tarafından yukarıda belirtmiş olduğum bilgiler üzerinden benimle iletişim kurulmasını ve <u>izinli iletişim formu</u>‘nu onaylıyorum.'
              onChange={() => handleChangePermission()}
              checked={checkboxAllow}
              errorMessage={formik.errors.permission}
              name={'permission'}
              required
              onClickText={() =>  setAgreementModal(true)}
              className={classNames({'is-invalid': formik.touched.permission && formik.errors.permission})}
            />
          </div>
          <div className={classNames('form-group-buttons', {'form-group-buttons--column': !hr})}>
            <div className={classNames('captcha', { 'is-invalid': formik.touched.recaptcha && formik.errors.recaptcha })}>
              <div id="captcha"></div>
              <pre>{formik.errors.recaptcha}</pre>
            </div>
            <Button text={'Gönder'} button className={styles['button']} />
          </div>

        </form>
      </div>

      {modalOpen && <Modal onClose={() => setModalOpen(false)}>
        <div className='success-modal'>
          <div className='success-modal__icon'><Icon icon='check' /></div>
          <div className='success-modal__title'>Tebrikler!</div>
          <div className='success-modal__text'>E-Bülten kaydınız gerçekleşti.</div>
          <div className='success-modal__desc'>E-Posta kaydınız veritabanımıza başarıyla tanımlanmıştır. Teşekkürler.</div>
        </div>
      </Modal> }

      {agreementModal && <Modal onClose={() => setAgreementModal(false)}>
        <div className={styles['permission']}>
          <div className={styles['permission__content']}>
            <p><b>www.voldeglobal.com</b> web sitesi aracılığıyla yeni bültenlerin tanıtımı başta olmak üzere,
tarafıma ticari elektronik ileti gönderilmesi amacıyla <b>Düzlem Metal Sanayi ve Ticaret Ltd.
Şti.</b> ile paylaşmış olduğum telefon ve e-posta aracılığıyla adresimin kullanılmasına ve işbu
iletişim araçları ile şahsımla iletişime geçilmesine, bu kapsamda paylaşmış olduğum bilgilerin
Düzlem Metal Sanayi ve Ticaret Ltd. Şti. tarafından saklanmasına, kullanılmasına ve ticari
elektronik iletinin içeriğinin ve gönderiye ilişkin diğer kayıtların gerektiğinde Gümrük ve
Ticaret Bakanlığı’na sunulmak üzere kayıt altına alınarak saklanmasına onay veriyorum.</p>
          </div>
        </div>
      </Modal> }
    </>
  )
}

ContactForm.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  hr: PropTypes.bool
};