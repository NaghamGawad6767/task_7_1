import './ConSECT.css'
import { FaLocationDot } from "react-icons/fa6"
import { BsTelephoneForwardFill } from "react-icons/bs"
import { MdAttachEmail } from "react-icons/md"
import video from './../../assets/images/video.webp'
import { GoArrowRight } from 'react-icons/go'
export default function ConSECT() {
    return (

        <section className='section2-con'>
            <div>
                <div className='left-1'>
                    <div class="emergency">
                        <div className='fal'>
                            <BsTelephoneForwardFill className='FaLocation' />
                        </div>
                        <div className='H5'>
                            <h5>Call Us 7/24</h5>
                            <p>+208-555-0112</p>
                        </div>
                    </div>
                    <div class="email">
                        <div className='fal'>
                            <MdAttachEmail className='FaLocation' />
                        </div>
                        <div className='H5'>
                            <h5>Make a Quote</h5>
                            <p>infotech@gmail.com</p>
                        </div>
                    </div>
                    <div class="address">
                        <div className='fal'>
                            <FaLocationDot className='FaLocation' />

                        </div>
                        <div className='H5'>
                            <h5>Location</h5>
                            <p>4517 Washington ove.</p>
                        </div>
                    </div>
                </div>
                <div className='NG-MYPHOTO'>
                    <img src={video} />
                </div>
            </div>

            <div className='right-1'>
                <div className='ready'>
                    <h4>Ready To Get Started?</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores ab, itaque nulla.</p>
                </div>
                <div className="con">
                    <div className="concon">
                        <div>
                            <div>
                                <label>Name</label>
                            </div>
                            <input type="text" />
                        </div>
                        <div>
                            <div>
                                <label>Email</label>
                            </div>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="MES">
                        <div>
                            <label>Message</label>
                        </div>
                        <textarea type="text" />
                    </div>
                    <div className="send"> <button>send message <GoArrowRight /></button></div>
                </div>
            </div>
        </section>
    )
}