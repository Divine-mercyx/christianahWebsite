import React from "react"
import styles from './css/secureBanking.module.css'
import secure from '../assets/secureBanking.png'
export const SecureBanking = () => {
    return (
        <div style={{backgroundColor: '#c8d6e3', display: 'flex', paddingBottom: '70px'}}>
            <div className={styles.all}>
                <p style={{fontStyle: 'oblique', fontWeight: 'bold'}}>Secure</p>
                <p className={styles.paragraph}>Experience Banking Like<br/> Never Before</p>
                <p>
                    With Our Secure Online Banking, your transactions are protected <br/>
                    with state-of-the-art encryption. Enjoy peace of mind  as you manage your <br/>
                    finances anywhere, anytime.
                </p>

                <div className={styles.secure} style={{paddingTop: '15px', fontWeight: 'lighter', fontSize: 'small', paddingBottom: '20px'}}>
                    <div style={{paddingRight: '30px'}}>
                        <p>Safety First</p>
                        <p>Your data is safe with us, ensuring a <br/>
                        worry-free banking experience</p>
                    </div>
                    <div>
                        <p>Easy Access</p>
                        <p>Access your account effortlessly from <br/>
                        any device at anytime you need it.</p>
                    </div>
                </div>
                <div style={{display: 'flex'}}>
                    <div style={{paddingRight: '30px'}} className={styles.firstButton}>
                        <button> Learn More</button>
                    </div>
                    <div  className={styles.secondButton}>
                        <button>Sign Up</button>
                    </div>
                </div>
            </div>

            <div style={{paddingLeft: '100px',paddingTop:'50px'}}>
                <img src={secure} alt='secureBanking'/>
            </div>

        </div>
    )
}