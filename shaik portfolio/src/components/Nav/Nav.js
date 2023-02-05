import './Nav.css';
import Logo from '../../Assets/Logo.svg'

function Nav() {
    return (
        <div className="Nav">
            <div className='LogoAndName'>
                <div classname="Logo">
                    <img src={Logo} Alt="loading.." width={85} height={85}/>
                </div>
                <div className='nameDesig'>
                    <div className='name'>Shanawaz shaik</div>
                    <div className='designation'>UX/UI DESIGNER</div>
                </div>
            </div>
            <div className='navMenu'>
                <div>Projects</div>
                <div>Art</div>
                <div>About</div>
            </div>
        </div>
    );
}

export default Nav;

