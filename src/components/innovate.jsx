import React from "react";
import styles from './css/innovate.module.css'
import wheel from '../assets/wheel.png'
import stamper from '../assets/stamper.png'
import atm from '../assets/atm.png'

export const Innovate = () => {
    return (
        <div style={{paddingLeft: '30px', paddingTop: '40px',  paddingBottom: '50px'}}>
            <div className={styles.container}>
                <p style={{fontStyle: 'oblique', fontWeight: 'bold'}}>Innovate</p>
                <p style={{fontSize: '40px'}}>Explore Our Cutting-Edge <br/>Banking Features</p>
                <p> At Xtianah, we prioritize your banking experience with our innovative features. Enjoy seamless <br/>
                access to your finances anytime, anywhere.
                </p>
            </div>
            <div className={styles.innovate}>
                <div>
                    <img src={wheel} alt='wheel' style={{width: '30px', height: '30px', paddingTop: '50px'}}/>
                    <p style={{ fontSize: '25px'}}> 24/7  Customer Support <br/> for Your Peace of Mind</p>
                    <h6>Our dedicated support team is always ready to assist <br/> you.</h6>
                </div>
                <div>
                    <img src={stamper} alt='stamper' style={{width: '30px', height: '30px', paddingTop: '50px'}}/>
                    <p style={{ fontSize: '25px'}}> Easy Loan Approvals <br/> Tailored To Your Needs </p>
                    <h6>Get the funds you need quickly and effortlessly.</h6>
                </div>
                <div>
                    <img src={atm} alt='atm-logo' style={{width: '30px', height: '30px', paddingTop: '50px'}}/>
                    <p style={{ fontSize: '25px'}}>Global ATM Network for <br/> Convenient <br/> Withdrawals</p>
                    <h6>Access cash from thousands of ATMs worldwide.</h6>
                </div>
            </div>
            <div style={{display: 'flex', paddingTop: '50px'}}>
                <div style={{paddingRight: '30px'}}>
                    <button style={{ backgroundColor: 'white', paddingRight: '15px', paddingLeft: '15px', paddingTop: '10px', paddingBottom: '10px',
                        borderRadius: '20px', border: '1px solid gray'}}>
                        Learn more
                    </button>
                </div>
                <div>
                    <button style={{ backgroundColor: 'white', border: 'none'}}> Sign up > </button>
                </div>
            </div>
        </div>
    )
}