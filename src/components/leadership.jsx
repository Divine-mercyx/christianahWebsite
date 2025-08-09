import React from "react";
import guy from '../assets/guy.png'

export const Leadership = () => {
    return (
        <div style={{paddingTop: '40px', paddingLeft: '30px', paddingBottom: '50px'}}>
            <div >
                <p style={{fontStyle: 'oblique', fontWeight: 'bold'}}>Leadership</p>
                <p style={{fontSize: '40px'}}>Our Team</p>
                <p>Meet the dedicated professionals behind Xtianah Bank</p>
            </div>
            <div style={{display: 'flex', gap: '40px'}}>
                <div>
                    <img style={{width: 120, height: 120}}
                        src={guy} alt='guy'/>
                    <h3 style={{ margin: '12px 0 2px' }}>Alice Johnson </h3>
                    <p style={{ margin: 0, lineHeight: 1.2, opacity: 0.8 }}>CEO</p>
                    <p style={{fontStyle: 'oblique'}}>Passionate about innovation and customer satisfaction <br/> in banking solutions.</p>
                </div>
                <div>
                    <img style={{width: 120, height: 120 }}
                         src={guy} alt='guy'/>
                    <h3 style={{ margin: '12px 0 2px' }}>Mark Smith </h3>
                    <p style={{ margin: 0, lineHeight: 1.2, opacity: 0.8 }}>CTO</p>
                    <p style={{fontStyle: 'oblique'}}>Expert in technology innovation and digital banking <br/> achievements.</p>
                </div>
                <div>
                    <img style={{width: 120, height: 120 }}
                         src={guy} alt='guy'/>
                    <h3 style={{ margin: '12px 0 2px' }}>Sarah Lee </h3>
                    <p style={{ margin: 0, lineHeight: 1.2, opacity: 0.8 }}>CFO</p>
                    <p style={{fontStyle: 'oblique'}}>Commited to financial transparency and strategic <br/> growth initiatives.</p>
                </div>
            </div>

        </div>
    )
}