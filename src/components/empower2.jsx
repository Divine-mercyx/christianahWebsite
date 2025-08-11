import React from "react";
import laptop from '../assets/laptop.png'
export const Empower2 = () => {
    return (
        <div style={{paddingTop: '40px', paddingLeft: '30px', backgroundColor: '#c8d6e3', paddingBottom: '10%'}}>
           <div style={{display: 'flex'}}>
               <div>
                    <div >
                        <p style={{fontStyle: 'oblique', fontWeight: 'bold'}}>Empower</p>
                        <p style={{fontSize: '40px'}}>Welcome to Xtianah <br/>
                            Bank: Your Financial <br/>
                            Partner</p>
                        <p>Founded with a vision to revolutionize banking. Xtianah Bank has been <br/>
                        committed to providing innovative financial solutions since its inception. <br/>
                            Our mission is to empower individuals and businesses <br/>
                            exceptional service and cutting-edge technology.
                        </p>
                    </div>
                    <div style={{display: 'flex', gap: '20px', paddingTop: '20px'}}>
                        <button style={{backgroundColor: '#c8d6e3', padding: '10px', borderRadius: '20px'}}>Learn More</button>
                        <button style={{backgroundColor: '#c8d6e3', border: 'none'}}>Sign Up > </button>
                    </div>
               </div>
               <div style={{paddingLeft: '150px', paddingTop: '50px', height: '100%'}}>
                   <img src={laptop} alt='laptop'/>
               </div>
           </div>
        </div>
    )
}