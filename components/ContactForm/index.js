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
            <p>This Serai One Reservation Agreement between the person or entity listed below as &quot;you&quot; and SERAI AG Switzerland, with its registered office in Zurich, hereinafter referred to as &quot;we&quot; or &quot;us&quot;, relates to your reservation of a Serai One with us. Your conclusion of this contract with us does not affect your place of delivery.</p>
            
            <h3>1. Reservation of the desired and defined Serai One</h3>
            <p>By entering into this Serai One Reservation Agreement, you confirm your desire to reserve the Serai One defined by you in the online purchase process with us.</p>

            <h3>2. Nature of the agreement</h3>
            <p>This Agreement does not constitute a contract for the purchase of a Serai One and does not guarantee a specific production slot or an expected delivery date. Once we notify you of the availability of a Serai One and you decide to purchase a Serai One, that sale/purchase will be subject to a separate purchase agreement between you and us.</p>
          
            <h3>3. Effective date; reservation process</h3>
            <p>This contract will become effective as soon as the purchase process has been completed on our website and the reservation payment in the amount of CHF 2&apos;000.00 has been made. Subsequently, you will be placed on the reservation list for the Serai One.</p>
            
            <h3>4. Ordering process</h3>
            <p>Before starting the production of your Serai One, we will ask you to confirm your option selection and provide comprehensive information about the legal buyer of the Serai One. We will create an order for your Serai One, which will include the information you have provided, and a purchase agreement, which will include the purchase price for your Serai One, plus any applicable taxes, duties, fees, transportation and delivery charges, and other applicable costs. Should you decide to purchase the Serai One, the purchase agreement will be signed with any applicable costs to be paid at that time. Your reservation payment will be credited to the purchase price. Subsequently, the production of your Serai One will be started.</p>

            <h3>5. Purchase price</h3>
            <p>The purchase price for the Serai One is CHF 89&apos;000.00 less the reservation payment already made with this reservation contract. The payment modalities will be communicated in advance for the conclusion of the purchase contract.</p>

            <h3>6. Ranking</h3>
            <p>Your position on the reservation waiting list will be determined at our sole discretion. Reservations may further be rejected by us at our sole discretion or to prevent an excessive number of advance orders. If your reservation is rejected, you will be notified, and your reservation payment will be refunded.</p>

            <h3>7. Confirmations</h3>
            <p>We do not keep your reservation payment separate and do not pay interest on reservation payments. The reservation payment in the amount of CHF 2&apos;000.00 is also due in case of withdrawal after the conclusion of the present reservation contract as compensation for our efforts.</p>
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