/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect } from 'react';
import Image from 'next/image'
import classNames from 'classnames';

import { Layout } from '../layout'
import styles from '../assets/styles/Home.module.scss'

export default function Home() {

  return (
    <>
      <Layout>
        <section>
          <h1>Home</h1>
        </section>
      </Layout>
    </>
  )
}
