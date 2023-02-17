import './Body.css';
import Tri from '../../Assets/Tri.svg'
import coverImage1 from '../../Assets/coverimage1.jpg'
import Memoji from '../../Assets/Memoji.jpg'
import Memoji1 from '../../Assets/Memoji1.jpg'
import ProjectIcon from '../../Assets/ProjectIcon.jpg'
import link from '../../Assets/link.jpg'
import Arrow from '../../Assets/Arrow.jpg'
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

function Body() {
    const [isMobileScreen, setIsMobileScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileScreen(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <div className="IntroBody">
                <div className='NameParagraph'>
                    <div className=' greetingMemoji'>Hi, I’m  <span className='nameColor'> Shanawaz </span> shaik.
                        <img className='Memoji' src={Memoji} Alt="Loading" /></div>
                    I’m a self-taught ux designer, I enjoy designing aesthetically appealing and intuitive user experiences.
                    <div className='resumeText'>Resume</div>
                </div>
                <div className='Tri'>
                    <img className="TriImage" src={Tri} Alt="loading.." />
                </div>
            </div>
            <div className='projects'>
                <div className='ProjectHeading'>
                    <div className='projectHeader'>
                        PROJECTS
                    </div>
                    <img className="ProjectIcon" src={ProjectIcon} alt="loading" />
                </div>
                <div className='ProjectRow'>
                    <div className='topProjects'>
                        <div className='project1'>
                            <img className="projectImage" src={coverImage1} Alt="loading.." />
                            <div className='titleDesc'>
                                <div className='projectTitle'>The Green truck App</div>
                                <div className='projectDescrip'>
                                    An Dedicated mobile app design for the The green truck food chain business
                                </div>
                                <div className='ViewStudyLink'>
                                    <div className='viewCaseStudy'>View case study</div>
                                    <img src={link} Alt="Loading" width={14} height={14} />
                                </div>
                            </div>
                        </div>
                        <div className='project1'>
                            <img className="projectImage" src={coverImage1} Alt="loading.." />
                            <div className='titleDesc'>
                                <div className='projectTitle'>The Green truck App</div>
                                <div className='projectDescrip'>
                                    An Dedicated mobile app design for the The green truck food chain business
                                </div>
                                <div className='ViewStudyLink'>
                                    <div className='viewCaseStudy'>View case study</div>
                                    <img src={link} Alt="Loading" width={14} height={14} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='belowProjects'>
                        <div className='project1'>
                            <img className="projectImage" src={coverImage1} Alt="loading.." />
                            <div className='titleDesc'>
                                <div className='projectTitle'>The Green truck App</div>
                                <div className='projectDescrip'>
                                    An Dedicated mobile app design for the The green truck food chain business
                                </div>
                                <div className='ViewStudyLink'>
                                    <div className='viewCaseStudy'>View case study</div>
                                    <img src={link} Alt="Loading" width={14} height={14} />
                                </div>
                            </div>
                        </div>
                        <div className='project1'>
                            <img className="projectImage" src={coverImage1} Alt="loading.." />
                            <div className='titleDesc'>
                                <div className='projectTitle'>The Green truck App</div>
                                <div className='projectDescrip'>
                                    An Dedicated mobile app design for the The green truck food chain business
                                </div>
                                <div className='ViewStudyLink'>
                                    <div className='viewCaseStudy'>View case study</div>
                                    <img src={link} Alt="Loading" width={14} height={14} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div className='about' style={{ display: isMobileScreen ? 'none' : 'flex' }}>
                <div><Link className='aboutText' style={{ textDecoration: 'none', color: "#1C1C1E" }} to="/About">About</Link></div>
                <img src={Arrow} alt="Loading" width={34} />
            </div>
            <div className='AANav' style={{ display: isMobileScreen ? 'flex' : 'none' }}>
                <div className='aboutSmText'>
                    <div><Link style={{ textDecoration: 'none', color: "#1C1C1E" }} to="/About">About</Link></div>
                    <img src={Arrow} alt="Loading" width={34} />
                </div>
                <div className='artText'>
                    <div><Link style={{ textDecoration: 'none', color: "#1C1C1E" }} to="/About">Art</Link></div>
                    <img src={Arrow} alt="Loading" width={34} />
                </div>
            </div>
            <div className='footer'>
                <div className='contact'>
                    <div className='connectMemoji'>
                        <div className='letsConnect'>Let's connect</div>
                        <img className="connectMemojiImage" src={Memoji1} Alt="Loading" />
                    </div>
                    <div className='bodySocials'>
                        <div className='link'><div>Linkedin</div> <img src={link} alt="Loading" width={14} height={14} /></div>
                        <div className='link'><div>Behance</div> <img src={link} alt="Loading" width={14} height={14} /></div>
                        <div className='link'><div>Twitter</div> <img src={link} alt="Loading" width={14} height={14} /></div>
                    </div>
                    <div className='mail'>Email : shanawazhussain989@gmail.com</div>
                </div>
                <div className='copyrightDesign'>
                    <div>©Shanawaz shaik - 2022/12</div>
                    <div>Designed in Figma & built using React JS</div>
                </div>
            </div>
        </div>
    );
}

export default Body;
