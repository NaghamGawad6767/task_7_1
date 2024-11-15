import './Hero.css'
import logo from './../../assets/images/heroThumb1_1.webp'
import profileShape1_1 from './../../assets/images/profileShape1_1.webp'
import { GoArrowRight } from "react-icons/go"
import { FiActivity } from "react-icons/fi"
import { FiCheck } from "react-icons/fi"
import { FiNavigation } from "react-icons/fi"
import { FiMousePointer } from "react-icons/fi"
import { FaStar } from "react-icons/fa6"
import heroShape1_3 from './../../assets/images/heroShape1_3.webp'
export default function Hero() {
    return (
        <section className='Hero'>
            <div className='Title'>
                <button><FiActivity /> Everything You Need ToCreate a Website</button>
                <h1>Business Innovation With It Services Expertise</h1>
                <div className='text'>
                    <div className="row">
                        <p><FiCheck /> Deployment and Support</p>
                        <p><FiCheck /> Flexibility Adaptability</p>
                    </div>
                    <div className="row">
                        <p><FiCheck /> Discovery and Analysis</p>
                        <p><FiCheck /> Competitive Advantage</p>
                    </div>
                    <button className='GET'>GET STARTED <GoArrowRight /></button>
                </div>
                <div>
                    <div className="review-badges">
                        <div className="review-badgee">
                            <h4> <FaStar /> Trutipilot</h4>
                            <div className='SET'>
                                <img src={profileShape1_1} alt="Trustpilot Logo" />
                                <div className="review-count">450+ reviews</div>
                            </div>
                        </div>
                        <div className="review-badgee">
                            <h4>Google</h4>
                            <div className='SET'>
                                <img src={profileShape1_1} alt="Google Logo" />
                                <div className="review-count">450+ reviews</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='img'>
                <FiNavigation />
                <img src={logo} />
                <FiMousePointer />
            </div>
            <div className='NG-image'>
                <img src={heroShape1_3}/>
            </div>
        </section>
    )
}