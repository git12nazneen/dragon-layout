import logo from '../../src/assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className='text-center'>
           
            <img className='mx-auto py-6' src={logo} alt="" />
            <p>Journalism without fear or favour</p>
            <p className='text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;