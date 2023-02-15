import './About.css';
import myImage from '../../Assets/myImage.jpg'
import link from '../../Assets/link.jpg'
import mail from '../../Assets/mail.jpg'
import Download from '../../Assets/Download.jpg'

function About() {
    

    return (
        <div>
            <div className="aboutBody">
                <img src={myImage} alt="Loading" />
                <div className='info'>
                    <div className='paragraph'>
                        <div>
                            I am driven by a passion for both design and technology. This interest has led me to the field of UX design,
                            where my goal is to create user-centered designs that prioritize the user experience and embody empathy, ethics,
                            accessibility, and aesthetic appeal. My background as a junior front-end web developer has given me a valuable
                            perspective on the design process, and I have further sharpened my skills and knowledge through the completion
                            of the Google UX design course.
                        </div>
                        <div className='outsideWork'>
                            Outside of work, I enjoy drawing illustrations, reading
                            books, trying out new technologies, and spending time
                            with friends
                        </div>
                    </div>
                    <div className='detailsContact'>
                        <div className='experience'>Experience : UI developer at TCS(2021 Apr - 2022 Oct)</div>
                        <div className='mailId'><img src={mail} alt="Loading" width={24} height={24} /><div>: shanawazhussain989@gmail.com</div></div>
                        <div className='socials'>
                            <div className='link'><div>Linkedin</div> <img src={link} alt="Loading" width={14} height={14} /></div>
                            <div className='link'><div>Behance</div> <img src={link} alt="Loading" width={14} height={14} /></div>
                            <div className='link'><div>Twitter</div> <img src={link} alt="Loading" width={14} height={14} /></div>
                        </div>
                        <div >
                            <button className='resumeBtn' style={{
                                display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: "0px", gap: "7px"
                            }}>Resume <img src={Download} alt="Loading" width={20} height={20} /></button>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
                <div className='Footer'>
                    <div className='designBuilt'>Designed in FIGMA and built with REACT JS</div>
                    <div className='copyRight'>©Shanawaz shaik - 2022/12</div>
                </div>
            </div>
        </div>

    );
}

export default About;

