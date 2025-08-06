import React from "react";
import download from '../assets/download.png'
import create from '../assets/create.png'

export const Join = () => {
    return (
        <div  style={{paddingTop: '40px', paddingLeft: '30px'}}>
           <div style={{display: 'flex'}}>
               <div>
                   <p style={{fontStyle: 'oblique', fontWeight: 'bold'}}>Join</p>
                   <p style={{fontSize: '40px'}}>Open Your Account in <br/> Just a Few Steps </p>
               </div>
               <div style={{fontSize: '15px', paddingTop: '60px', paddingLeft: '300px'}}>
                   <p>
                       Getting started with Xtianah is simple and straightforward. Forward our <br/>
                       easy step-by-step guide to open your account in minutes. Enjoy a <br/>
                       seamless banking experience with our user-friendly app.
                   </p>
               </div>
           </div>
            <div style={{display: "flex", gap: '200px'}}>
                <div >
                    <img src={download} alt='download' style={{width: '300px', height: '150px', paddingTop: '50px'}}/>
                    <p style={{fontSize: '20px'}}>Step 1: Download the <br/> Xtianah App</p>
                    <h6>Find the Xtianah App on your device's app store</h6>

                </div>
                <div>
                    <img src={create} alt='create' style={{width: '300px', height: '150px', paddingTop: '50px'}}/>
                    <p style={{fontSize: '20px'}}>Step 2: Create Your Account </p>
                    <h6>Fill in your details to set up your account</h6>
                </div>
                <div>
                    <img src={download} alt='download' style={{width: '300px', height: '150px', paddingTop: '50px'}}/>
                    <p style={{fontSize: '20px'}}>Step 3: Verify Your Identity</p>
                    <h6>Complete the verification process to secure your <br/> account</h6>
                </div>
            </div>
            <div style={{display: 'flex', gap: '60px', paddingTop: '50px'}}>
                <div >
                    <button style={{padding: '15px', borderRadius: '15px',backgroundColor: 'white'}}>Start</button>
                </div>
                <div>
                    <button style={{border: 'none',backgroundColor: 'white', paddingTop: '15px'}}>Learn More ></button>
                </div>
            </div>
        </div>
    )
}