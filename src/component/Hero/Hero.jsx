import React from 'react'
import {getImageUrl} from '../../utils/'
import styles from './Hero.module.css'
import Resume from '../../../assets/Resume/Resume.pdf'

export const Hero = () => {
  return (
   <section className={styles.container}>
    <div className={styles.content}>
        <h2 className={styles.title}>Hi, I'm Balan</h2>
        <p className={styles.description}>I'm a Full Stack Developer with two year of experience using
            Reactjs, Nodejs and MongoDB. Reach out if you'd like to more learn!
        </p>
        <a href={Resume} download className={styles.contactBtn}>Download CV</a>
    </div>
    <img src={getImageUrl('hero/heroImage.png')} alt='Hero image of me' className={styles.heroImg}/>
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur}/>
   </section>
  )
}
