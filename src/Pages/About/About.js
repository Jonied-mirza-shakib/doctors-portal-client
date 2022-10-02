import React from 'react';
import aboutImg from '../../assets/images/about.jpg'
import './About.css'

const About = () => {
    return (
        <div className='about-page'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                <div>
                    <img className='sm:mb-20' src={aboutImg} alt="" />
                </div>
                <div>
                    <div>
                        <h1 className='about-entry-title'>ABOUT US</h1>
                        <h4 className='about-entry-single-title'>What we are and our history</h4>
                        <p className='about-paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,</p>
                        <button type="button" className='about-button'>READ MORE</button>
                    </div>
                    <div className="divider"></div>
                    <div>
                        <h1 className='about-entry-title'>VISION & MISSION</h1>
                        <h4 className='about-entry-single-title'>Our goal and thoughts</h4>
                        <p className='about-paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;