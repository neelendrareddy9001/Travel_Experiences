import React from 'react';
import {FaFacebook, FaInstagram, FiTwitter} from 'react-icons/fa';
import {TiSocialPinterest} from 'react-icons/ti';

const Footer = () => {
  return (
    <div>
        <div>
            <div>
                <h6>Solutions</h6>
                <ul>
                    <li>Travel</li>
                    <li>Booking</li>
                    <li>Flight</li>
                    <li>Cruises</li>
                    <li>Ground</li>
                </ul>
            </div>
            <div>
                <h6>Support</h6>
                <ul>
                    <li>Pricing</li>
                    <li>Documentation</li>
                    <li>Tours</li>
                    <li>Refunds</li>
                </ul>
            </div>
            <div>
                <h6>Company</h6>
                <ul>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Jobs</li>
                    <li>Press</li>
                    <li>Partners</li>
                </ul>
            </div>
            <div>
                <h6>Legal</h6>
                <ul>
                    <li>Claims</li>
                    <li>Privacy</li>
                    <li>Terms</li>
                    <li>Policies</li>
                    <li>Conditions</li>
                </ul>
            </div>
            <div>
                <p>Subscribe to our newsletters</p>
                <p>The Latest deals, articles and resources sent to your inbox weekly.</p>
                <form>
                    <input type='email' placeholder='Enter email..'/>
                    <button className='p-2 mb-4 rounded-md'>Subscribe</button>
                </form>
            </div>
        </div>
        <div>
            <p>2022 Experiences, LLC, All rights reserved</p>
            <div>
                <FaFacebook />
                <FaInstagram/>
                <FaTwitter/>
                <TiSocialPinterest/>
            </div>
        </div>
    </div>
  )
}

export default Footer
