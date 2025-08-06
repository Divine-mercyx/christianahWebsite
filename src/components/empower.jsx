import React from "react";
import fence from "../assets/fence.png"

export const Empower = () => {
    return (
        <div style={{ paddingTop: '40px', paddingLeft: '30px', backgroundColor: '#c8d6e3',display: 'flex'}}>
            <div>
                <div>
                    <p style={{fontStyle: 'oblique', fontWeight: 'bold'}}>Empower</p>
                    <p style={{fontSize: '40px'}}>Unlock Your Financial <br/> Potential with Xtianah</p>
                    <p>Experience banking like never before with Xtianah. Our innovative <br/>
                        solutions are designed to meet your unique financial needs.</p>
                </div>
                <div style={{display: 'flex', gap: '20px'}}>
                    <div>
                        <p>Low Interest</p>
                        <h6>Enjoy competitive rates that help you <br/> save more on loans and credit</h6>
                    </div>
                    <div>
                        <p>High Yield</p>
                        <h6>Maximize your savings with our high <br/> yield savings accounts tailored for <br/> growth</h6>
                    </div>
                </div>
                <div style={{display: 'flex', gap: '30px', paddingBottom: '50px'}}>
                    <button style={{backgroundColor: '#c8d6e3', borderRadius: '25px', padding: '10px'}}> Learn More</button>
                    <button style={{backgroundColor: '#c8d6e3', border: "none"}}>Sign Up > </button>
                </div>
            </div>
            <div style={{paddingLeft: '150px', paddingTop: '50px', height: '100%'}}>
                <img src={fence} alt='fence'/>
            </div>
        </div>
    )
}