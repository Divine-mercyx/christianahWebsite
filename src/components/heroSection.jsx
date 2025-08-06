import React from "react"
import styles from './css/heroSection.module.css'
import heroImage from '../assets/hero-section.jpg'


export const HeroSection = () => {
  return (
      <div className={styles.hero}>
          <div style = {{paddingTop: '10px', paddingLeft: '30px', paddingRight: '20px'}}>
              <h1 className={styles.heroSection}>
                  Empowering Your <br/>Financial Journey <br/>with Xtianah
              </h1>
              <p>
                  At Xtianah, we prioritize your financial future with innovative banking <br/>
                    solutions tailored to your needs. Experience seamless banking with our <br/>
                    user-friendly app designed for your convenience
              </p>
              <button className={styles.getStartedBtn}>Get Started</button>
              <button className={styles.learnMoreBtn}>Learn More </button>
          </div>
          <div className={styles.image}>
              <img src={heroImage} alt='hero-section'/>
          </div>
      </div>
  )
}