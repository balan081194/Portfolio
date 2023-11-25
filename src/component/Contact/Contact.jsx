import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Contact.module.css'

export const Contact = () => {
  return (
  <footer id='contact' className={styles.container}>
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt='Email Icon' />
            <a href="mailto:balanfsd@gmail.com">balanfsd@gmail.com</a>
        </li>

        <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt='LinkedIn Icon' />
            <a href="https://www.linkedin.com/in/balankk/">linkedIn.com</a>
        </li>

        <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt='Github Icon' />
            <a href="https://github.com/balan081194">github.com</a>
        </li>
    </ul>
  </footer>
  )
}
