import React from "react";
import guy from '../assets/guy.png'
import linkedin from '../assets/linkedIn.png'
import x from '../assets/x.png'
import ball from '../assets/ball.png'

export const Leadership = () => {
    return (
        <div style={{paddingTop: '40px', paddingLeft: '30px', paddingBottom: '70px', background: '#c8d6e3'}}>
            <div >
                <p style={{fontStyle: 'oblique', fontWeight: 'bold'}}>Leadership</p>
                <p style={{fontSize: '40px'}}>Our Team</p>
                <p>Meet the dedicated professionals behind Xtianah Bank</p>
            </div>
            <div style={{display: 'flex', gap: '60px'}}>
                <div>
                    <img style={{width: 250, height: 250}}
                        src={guy} alt='guy'/>
                    <h3 style={{ margin: '12px 0 2px' }}>Alice Johnson </h3>
                    <p style={{ margin: 0, lineHeight: 1.2, opacity: 0.8 }}>CEO</p>
                    <p style={{fontStyle: 'oblique'}}>Passionnate about innovation and customer satisfaction
                        <br/> in banking solutions</p>

                    <div style={{display: 'flex', gap: '10px'}}>
                        <img style={{width: 20, height: 20 }}
                             src={linkedin} alt='linkedin'/>
                        <img style={{width: 20, height: 20 }}
                             src={x} alt='x'/>
                        <img style={{width: 20, height: 20 }}
                             src={ball} alt='ball'/>
                    </div>
                </div>
                <div>
                    <img style={{width: 250, height: 250 }}
                         src={guy} alt='guy'/>
                    <h3 style={{ margin: '12px 0 2px' }}>Mark Smith</h3>
                    <p style={{ margin: 0, lineHeight: 1.2, opacity: 0.8 }}>CTO</p>
                    <p style={{fontStyle: 'oblique'}}>Expert in technology integration and digital banking
                        <br/> advancements</p>

                    <div style={{display: 'flex', gap: '10px'}}>
                        <img style={{width: 20, height: 20 }}
                             src={linkedin} alt='linkedin'/>
                        <img style={{width: 20, height: 20 }}
                             src={x} alt='x'/>
                        <img style={{width: 20, height: 20 }}
                             src={ball} alt='ball'/>
                    </div>
                </div>
                <div>
                    <img style={{width: 250, height: 250 }}
                         src={guy} alt='guy'/>
                    <h3 style={{ margin: '12px 0 2px' }}>Sarah Lee</h3>
                    <p style={{ margin: 0, lineHeight: 1.2, opacity: 0.8 }}>CFO</p>
                    <p style={{fontStyle: 'oblique'}}>Committed to financial transparency and strategic
                        <br/> growth initiatives</p>

                    <div style={{display: 'flex', gap: '10px'}}>
                        <img style={{width: 20, height: 20 }}
                             src={linkedin} alt='linkedin'/>
                        <img style={{width: 20, height: 20 }}
                             src={x} alt='x'/>
                        <img style={{width: 20, height: 20 }}
                             src={ball} alt='ball'/>
                    </div>
                </div>

            </div>
            <div style={{paddingTop: '40px', display: 'flex', gap: '100px'}}>
                <div>
                    <img style={{width: 250, height: 250 }}
                         src={guy} alt='guy'/>
                    <h3 style={{ margin: '12px 0 2px' }}>James Brown</h3>
                    <p style={{ margin: 0, lineHeight: 1.2, opacity: 0.8 }}>CMO</p>
                    <p style={{fontStyle: 'oblique'}}>Driving brand awareness and customer engagement
                        <br/> through innovative marketing</p>
                    <div style={{display: 'flex', gap: '10px'}}>
                        <img style={{width: 20, height: 20 }}
                             src={linkedin} alt='linkedin'/>
                        <img style={{width: 20, height: 20 }}
                             src={x} alt='x'/>
                        <img style={{width: 20, height: 20 }}
                             src={ball} alt='ball'/>
                    </div>
                </div>
                <div>
                    <img style={{width: 250, height: 250 }}
                         src={guy} alt='guy'/>
                    <h3 style={{ margin: '12px 0 2px' }}>Emily Davis</h3>
                    <p style={{ margin: 0, lineHeight: 1.2, opacity: 0.8 }}>COO</p>
                    <p style={{fontStyle: 'oblique'}}>Ensuring operational exellence and seamless <br/>
                    customer experiences across all services</p>

                    <div style={{display: 'flex', gap: '10px'}}>
                        <img style={{width: 20, height: 20 }}
                             src={linkedin} alt='linkedin'/>
                        <img style={{width: 20, height: 20 }}
                             src={x} alt='x'/>
                        <img style={{width: 20, height: 20 }}
                             src={ball} alt='ball'/>
                    </div>
                </div>
                <div>
                    <img style={{width: 250, height: 250 }}
                         src={guy} alt='guy'/>
                    <h3 style={{ margin: '12px 0 2px' }}>We're hiring</h3>
                    <p style={{ margin: 0, lineHeight: 1.2, opacity: 0.8 }}>Join us</p>
                    <p style={{fontStyle: 'oblique'}}>Explore exciting career opportunities at Xtianah Bank <br/>
                        and grow with us</p>

                    <div style={{display: 'flex', gap: '10px'}}>
                        <img style={{width: 20, height: 20 }}
                             src={linkedin} alt='linkedin'/>
                        <img style={{width: 20, height: 20 }}
                             src={x} alt='x'/>
                        <img style={{width: 20, height: 20 }}
                             src={ball} alt='ball'/>
                    </div>

                </div>
            </div>
            <div style={{paddingTop: '40px'}}>
                <p style={{fontSize: '20px'}}>Open Positions</p>
                <p>Discover your future with us today</p>
                <button style={{padding: '10px', border: '1px gray bold', borderRadius: '20px'}}>Apply now</button>
            </div>
        </div>
    )
}