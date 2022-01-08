import React from 'react'
import SocialContact from '../../common/social-contact'
import './about.css'
function About() {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    Hello! I'm <span className="info-name">Ishan Sharma.</span>  <br />
                 <br /> I define myself by the work I want to do. Skills can be taught, personality is inherent. I prefer to keep learning, continue challenging myself, and do interesting things that matter.
                </div>
                <div className="about-photo">
                    <img src={require('../../../assests/coding.png')} alt="" className="picture" />
                </div>
            </div>
            <SocialContact />
        </div>
    )
}

export default About
