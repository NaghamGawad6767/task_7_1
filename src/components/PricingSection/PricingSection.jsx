import React from 'react'
import './PricingSection.css'
import { GoArrowRight } from "react-icons/go"
import { GoCheck } from "react-icons/go"
import { GoX } from "react-icons/go"
import { GoArrowLeft } from "react-icons/go"
import { GoUnverified } from "react-icons/go"
import pricingIcon1_2 from './../../assets/images/pricingIcon1_2.svg'
import pricingIcon1_1 from './../../assets/images/pricingIcon1_1.svg'
import ctaThumb1_1 from './../../assets/images/ctaThumb1_1.webp'
const PricingSection = () => {
    return (
        <div className="pricing-section">
            <div className="pricing-header">
                <button className="your-button"> <GoArrowLeft className='FALSEE' /> OUR Pricing <GoArrowRight className='FALSEE' /></button>
                <h2>Our Awesome Pricing Plans</h2>
                <div className="pricing-toggle">
                    <span className="active">Monthly</span>
                    <span>Yearly</span>
                    <img src={pricingIcon1_2} />
                    <span className="save-25">Save 25%</span>
                </div>
            </div>
            <div className="pricing-plans">
                <div className="plan-card">
                    <div className='NG-plan'>
                        <div className='NG-plan-1'>
                            <h3>Regular Plans</h3>
                            <p className="price">$49/Month</p>
                        </div>
                        <div>
                            <img src={pricingIcon1_1} />
                        </div>
                    </div>
                    <ul className="plan-features">
                        <div className='DEV-1'>
                            <div>
                                <li><GoCheck className='TRUE' /> 100 GB SSD Storage</li>
                            </div>
                            <div>
                                <GoUnverified className='GOUNVER' />
                            </div>
                        </div>
                        <div className='DEV-1'>
                            <div>
                                <li><GoCheck className='TRUE' /> Weekly Backups</li>
                            </div>
                            <div>
                                <GoUnverified className='GOUNVER' />
                            </div>
                        </div>
                        <div className='DEV-1'>
                            <div>
                                <li><GoCheck className='TRUE' /> Unlimited Free SSL</li>
                            </div>
                            <div>
                                <GoUnverified className='GOUNVER' />
                            </div>
                        </div>
                        <div className='DEV-1'>
                            <div>
                                <li><GoCheck className='TRUE' /> 24/7 System Monitoring</li>
                            </div>
                            <div>
                                <GoUnverified className='GOUNVER' />
                            </div>
                        </div>
                        <div className='DEV-1'>
                            <div>
                                <li><GoCheck className='TRUE' /> Free Domain ($9.99 Value)</li>
                            </div>
                            <div>
                                <GoUnverified className='GOUNVER' />
                            </div>
                        </div>
                        <div className='DEV-1'>
                            <div>
                                <li><GoX className='FALSE' /> Frame 164236</li>
                            </div>
                            <div>
                                <GoUnverified className='GOUNVER' />
                            </div>
                        </div>
                        <div className='DEV-1'>
                            <div>
                                <li><GoX className='FALSE' /> 20+ Payment Methods</li>
                            </div>
                            <div>
                                <GoUnverified className='GOUNVER' />
                            </div>
                        </div>
                    </ul>
                    <button className="get-started-btn">GET STARTED NOW <GoArrowRight /></button>
                </div>
                <div className="plan-card">
                    <div className='NG-plans'>
                        <div className='NG-plans-1'>
                            <h3>Regular Plans</h3>
                            <p className="price">$49/Month</p>
                        </div>
                        <div>
                            <img src={pricingIcon1_1} />
                        </div>
                    </div>
                    <ul className="plan-features">
                        <div className='DEV-1'>
                            <div>
                                <li><GoCheck className='TRUE' /> 100 GB SSD Storage</li>
                            </div>
                            <div>
                                <GoUnverified className='GOUNVER' />
                            </div>
                        </div>
                        <div className='DEV-1'>
                            <div>
                                <li><GoCheck className='TRUE' /> Weekly Backups</li>
                            </div>
                            <div>
                                <GoUnverified className='GOUNVER' />
                            </div>
                        </div>
                        <div className='DEV-1'>
                            <div>
                                <li><GoCheck className='TRUE' /> Unlimited Free SSL</li>
                            </div>
                            <div>
                                <GoUnverified className='GOUNVER' />
                            </div>
                        </div>
                        <div className='DEV-1'>
                            <div>
                                <li><GoCheck className='TRUE' /> 24/7 System Monitoring</li>
                            </div>
                            <div>
                                <GoUnverified className='GOUNVER' />
                            </div>
                        </div>
                        <div className='DEV-1'>
                            <div>
                                <li><GoCheck className='TRUE' /> Free Domain ($9.99 Value)</li>
                            </div>
                            <div>
                                <GoUnverified className='GOUNVER' />
                            </div>
                        </div>
                        <div className='DEV-1'>
                            <div>
                                <li><GoX className='FALSE' /> Frame 164236</li>
                            </div>
                            <div>
                                <GoUnverified className='GOUNVER' />
                            </div>
                        </div>
                        <div className='DEV-1'>
                            <div>
                                <li><GoX className='FALSE' /> 20+ Payment Methods</li>
                            </div>
                            <div>
                                <GoUnverified className='GOUNVER' />
                            </div>
                        </div>
                    </ul>
                    <button className="gets-started-btn">GET STARTED NOW <GoArrowRight /></button>
                </div>
                <div className="plan-card">
                    <div className='NG-plan'>
                        <div className='NG-plan-1'>
                            <h3>Regular Plans</h3>
                            <p className="price">$49/Month</p>
                        </div>
                        <div>
                            <img src={pricingIcon1_1} />
                        </div>
                    </div>
                    <ul className="plan-features">
                        <div className='DEV-1'>
                            <div>
                                <li><GoCheck className='TRUE' /> 100 GB SSD Storage</li>
                            </div>
                            <div>
                                <GoUnverified className='GOUNVER' />
                            </div>
                        </div>
                        <div className='DEV-1'>
                            <div>
                                <li><GoCheck className='TRUE' /> Weekly Backups</li>
                            </div>
                            <div>
                                <GoUnverified className='GOUNVER' />
                            </div>
                        </div>
                        <div className='DEV-1'>
                            <div>
                                <li><GoCheck className='TRUE' /> Unlimited Free SSL</li>
                            </div>
                            <div>
                                <GoUnverified className='GOUNVER' />
                            </div>
                        </div>
                        <div className='DEV-1'>
                            <div>
                                <li><GoCheck className='TRUE' /> 24/7 System Monitoring</li>
                            </div>
                            <div>
                                <GoUnverified className='GOUNVER' />
                            </div>
                        </div>
                        <div className='DEV-1'>
                            <div>
                                <li><GoCheck className='TRUE' /> Free Domain ($9.99 Value)</li>
                            </div>
                            <div>
                                <GoUnverified className='GOUNVER' />
                            </div>
                        </div>
                        <div className='DEV-1'>
                            <div>
                                <li><GoX className='FALSE' /> Frame 164236</li>
                            </div>
                            <div>
                                <GoUnverified className='GOUNVER' />
                            </div>
                        </div>
                        <div className='DEV-1'>
                            <div>
                                <li><GoX className='FALSE' /> 20+ Payment Methods</li>
                            </div>
                            <div>
                                <GoUnverified className='GOUNVER' />
                            </div>
                        </div>
                    </ul>
                    <button className="get-started-btn">GET STARTED NOW <GoArrowRight /></button>
                </div>
            </div>
           
           
        </div>
    );
};

export default PricingSection;