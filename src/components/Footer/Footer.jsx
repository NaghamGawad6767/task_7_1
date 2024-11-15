import './Footer.css'
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa'
import logo from './../../assets/images/logo.svg'
import { SlArrowRight } from "react-icons/sl"
import footerThumb1_1 from './../../assets/images/footerThumb1_1.webp'
import footerThumb1_2 from './../../assets/images/footerThumb1_2.webp'
import { MdOutlineEmail } from "react-icons/md"
import { FaPhoneAlt } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import { BsTelephoneForwardFill } from "react-icons/bs"
import { MdAttachEmail } from "react-icons/md"
import { ImCheckboxUnchecked } from "react-icons/im"
export default function Footer() {
  return (
    <footer>
      <div className='NG-FOOTER'>
        <div class="footer-top">
          <div class="address">
            <div className='fal'>
              <FaLocationDot className='FaLocation' />
            </div>
            <div className='H5'>
              <h6>Address</h6>
              <p>4648 Rocky Road Philadelphia PA</p>
            </div>
          </div>
          <div class="email">
            <div className='fal'>
              <MdAttachEmail className='FaLocation' />
            </div>
            <div className='H5'>
              <h6>Send Email</h6>
              <p>info@exmple.com</p>
            </div>
          </div>
          <div class="emergency">
            <div className='fal'>
              <BsTelephoneForwardFill className='FaLocation' />
            </div>
            <div className='H5'>
              <h6>CallEmargency</h6>
              <p>+88 0123 654 99</p>
            </div>
          </div>
        </div>
        <div className="footer-container">
          <div className="footer-section about">
            <img src={logo} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula felis euismod semper.</p>
            <div className="social-icons">
              <div className='social-icons-1'>
                <a href="#"><FaFacebook /></a>
              </div>
              <div className='social-icons-1'>
                <a href="#"><FaTwitter /></a>
              </div>
              <div className='social-icons-1'>
                <a href="#"><FaYoutube /></a>
              </div>
              <div className='social-icons-1'>
                <a href="#"><FaInstagram /></a>
              </div>
            </div>
          </div>
          <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li><SlArrowRight className='Right' /><a href="#">ExtechAbout</a></li>
              <li><SlArrowRight className='Right' /><a href="#">OurServices</a></li>
              <li><SlArrowRight className='Right' /><a href="#">OurBlogs</a></li>
              <li><SlArrowRight className='Right' /><a href="#">EAQS</a></li>
              <li><SlArrowRight className='Right' /><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-section link">
            <h3>RECENT POSTS</h3>
            <div className='ONE'>
              <div className='One'>
                <img src={footerThumb1_1} />
              </div>
              <div className='ONe'>
                <p>15th April,2024</p>
                <p>Top 5 Most Famous</p>
                <p>Technology Trend In 2024</p>
              </div>
            </div>
            <div className='TWO'>
              <div className='Two'>
                <img src={footerThumb1_2} />
              </div>
              <div className='TWo'>
                <p>20th June,2024</p>
                <p>The Surfing Man Will Blow</p>
                <p>Your Mind</p>
              </div>
            </div>
          </div>
          <div className="footer-section contact">
            <h3>Contact Us</h3>
            <p><MdOutlineEmail /> info@example.com</p>
            <p className='Phone'><FaPhoneAlt /> +205 456-7890</p>
            <input type="text" placeholder="Your Email Address" ></input>
            <p><ImCheckboxUnchecked />I agree to the <a> privocy policy</a></p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div>
          <p>&copy;  All copyrights 2024 by Extech.</p>
        </div>
        <div>
          <p>Term & Condition privocy policy</p>
        </div>
      </div>
    </footer>
  )
}


