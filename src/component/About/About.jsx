import React from 'react'
import {getImageUrl} from '../../utils/'
import styles from './About.module.css'

export const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl('about/aboutImage.png')}
            className={styles.aboutImage} alt='Me sitting with a laptop' />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/cursorIcon.png')} alt='Cursor Icon' />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>I'm a frontend developer with experience building responsive and optimizes websites</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl('about/serverIcon.png')} alt='Server Icon' />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>I have experience developing fast and optimized back-end system and API's</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
