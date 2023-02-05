import './Body.css';
import Tri from '../../Assets/Tri.svg'
import Scroll from '../../Assets/scroll.svg'
import coverImage1 from '../../Assets/coverimage1.svg'
import coverImage2 from '../../Assets/coverimage2.svg'


function Body() {
    return (
        <div>
            <div className="body">
                <div className='introPara'>
                    I am Shanawaz, I design and develop interactive and creative User Interfaces,
                    I like to make it simple and minimalistic. Resume
                </div>
                <div className='Tri'>
                    <img src={Tri} Alt="loading.." />
                </div>
            </div>
            <div className='scrollDown'>
                <img src={Scroll} Alt="loading.." />
                <div>scroll down</div>
            </div>
            <div className='projectHeader'>
                PROJECTS
            </div>
            <div className='projects'>
                <div className='topProjects'>
                    <div className='project1'>
                        <img src={coverImage1} Alt="loading.." />
                    </div>
                    <div className='project2'>
                        <img src={coverImage2} Alt="loading.." />
                    </div>
                </div>
                <div className='bottomProjects'>
                    <div className='projects3'>

                    </div>
                    <div className='projects4'>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Body;
