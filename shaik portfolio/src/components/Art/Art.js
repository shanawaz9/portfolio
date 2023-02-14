import './Art.css';
import sha1 from '../../Assets/sha1.jpg'
import sushthath from '../../Assets/sushthath.jpg'
import rapo from '../../Assets/rapo.jpg'
import madhu from '../../Assets/madhu.jpg'
import priya from '../../Assets/priya.jpg'
import ranveer from '../../Assets/ranveer.jpg'
import tommy from '../../Assets/tommy.jpg'
import johnny from '../../Assets/johnny.jpg'
import virat from '../../Assets/virat.jpg'
import link from '../../Assets/link.jpg'
import Memoji1 from '../../Assets/Memoji1.jpg'


function Art() {
    return (
        <div className="Art">
            <div className="artStory">I have a long-standing appreciation for art and have been playing with design tools since my teenage years.
                During the 2020 lockdown, I utilized my free time and skills to create some digital vector arts using Adobe Illustrator
            </div>
            <div className='Arts'>
                <div className='row1'>
                    <img src={sha1} alt="Loading" width={323} height={428} />
                    <img src={sushthath} alt="Loading" width={437} height={429} />
                    <img src={rapo} alt="Loading" width={323} height={429} />
                </div>
                <div className='row2'>
                    <img src={madhu} alt="Loading" width={324} height={405} />
                    <img src={priya} alt="Loading" width={323} height={405} />
                    <img src={ranveer} alt="Loading" width={438} height={405} />
                </div>
                <div className='row3'>
                    <img src={tommy} alt="Loading" width={435} height={336} />
                    <img src={johnny} alt="Loading" width={324} height={336} />
                    <img src={virat} alt="Loading" width={326} height={336} />
                </div>
            </div>
            <div className='artFooter'>
                <div className='artContact'>
                    <div className='artConnectMemoji'>
                        <div className='ArtLetsConnect'>Let's connect</div>
                        <img src={Memoji1} Alt="Loading" width={86} height={86} />
                    </div>
                    <div className='bodySocials'>
                        <div className='link'><div>Linkediwn</div> <img src={link} alt="Loading" width={14} height={14} /></div>
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

export default Art;
