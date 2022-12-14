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
                field='Ad??n??z'
                required
                errorMessage={formik.errors.name}
                {...formik.getFieldProps('name')}
                className={classNames({ 'is-invalid': formik.touched.name && formik.errors.name })}
              />
            </div>
            <div>
              <FormInput
                field='Soyad??n??z'
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
              field={'L??tfen CV???nizi y??kleyiniz.'}
              name={'cv'}
              onChange={(event) => formik.setFieldValue('cv', event.currentTarget.files[0])}
              accept="image/*,.pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            />
          </div>}

          <div className='form-group'>
            <FormTextarea
              field='Mesaj??n??z'
              rows={5}
              name={'message'}
              {...formik.getFieldProps('message')}
            />
          </div>
          <div className='form-group'>
            <FormCheckbox
              label='VOLDE taraf??ndan yukar??da belirtmi?? oldu??um bilgiler ??zerinden benimle ileti??im kurulmas??n?? ve <u>izinli ileti??im formu</u>???nu onayl??yorum.'
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
            <Button text={'G??nder'} button className={styles['button']} />
          </div>

        </form>
      </div>

      {modalOpen && <Modal onClose={() => setModalOpen(false)}>
        <div className='success-modal'>
          <div className='success-modal__icon'><Icon icon='check' /></div>
          <div className='success-modal__title'>Tebrikler!</div>
          <div className='success-modal__text'>E-B??lten kayd??n??z ger??ekle??ti.</div>
          <div className='success-modal__desc'>E-Posta kayd??n??z veritaban??m??za ba??ar??yla tan??mlanm????t??r. Te??ekk??rler.</div>
        </div>
      </Modal> }

      {agreementModal && <Modal onClose={() => setAgreementModal(false)}>
        <div className={styles['permission']}>
          <div className={styles['permission__content']}>
            <p><b>www.voldeglobal.com</b> web sitesi arac??l??????yla yeni b??ltenlerin tan??t??m?? ba??ta olmak ??zere,
taraf??ma ticari elektronik ileti g??nderilmesi amac??yla <b>D??zlem Metal Sanayi ve Ticaret Ltd.
??ti.</b> ile payla??m???? oldu??um telefon ve e-posta arac??l??????yla adresimin kullan??lmas??na ve i??bu
ileti??im ara??lar?? ile ??ahs??mla ileti??ime ge??ilmesine, bu kapsamda payla??m???? oldu??um bilgilerin
D??zlem Metal Sanayi ve Ticaret Ltd. ??ti. taraf??ndan saklanmas??na, kullan??lmas??na ve ticari
elektronik iletinin i??eri??inin ve g??nderiye ili??kin di??er kay??tlar??n gerekti??inde G??mr??k ve
Ticaret Bakanl?????????na sunulmak ??zere kay??t alt??na al??narak saklanmas??na onay veriyorum.</p>
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