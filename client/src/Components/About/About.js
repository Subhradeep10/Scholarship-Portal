import React from 'react'
import './About.css'
import About_img from "../../Images/about-us.png"

const About = () => {
    return (
        <div>
            <div class="about" id="about">
                <div class="about_container" data-aos="fade-up" data-aos-duration="2000">
                    <div class="about-us-heading">About Us</div>
                    <div class="about-content">
                        With growing technology and market scholarships in the market is also increasing but is the data is not confined to one place. People have to find various places to check for good scholarships. Addressing this problem will help in knowing various national and international scholarships. ALos it will encourage students to increase their merit to get such scholarships for better future
                    </div>
                </div>
                <div class="about_image">
                    <img src={About_img} alt="" data-aos="fade-up" data-aos-duration="2000" />
                </div>
            </div>
        </div>
    )
}

export default About