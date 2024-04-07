import { FaFacebook, FaGithub, FaTwitter, FaGoogle  } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import  qzone1 from '../../src/assets/qZone1.png'
import qzone2 from '../../src/assets/qZone2.png'
import  qzone3 from '../../src/assets/qZone3.png'


const RightSideNav = () => {
    return (
        <div>
           <div className="p-4 space-y-4">
            <h2 className='text-3xl'>Login with</h2>
            <button className="btn btn-outline w-full">
            <FaGoogle /> Button
            </button>
             <button className="btn btn-outline w-full">
             <FaGithub />Github
            </button>
           </div>
           
           <div className="p-4 space-y-4">
            <h2 className='text-3xl'>Find use on</h2>
          <div className="border rounded-xl">
          <div className="flex p-4 items-center border-b border-gray-300">
            <a href="" className="mr-4">
                <FaFacebook></FaFacebook>
            </a>
            <p>  Facebook</p>
          </div>
          <div className="flex p-4 items-center border-b border-gray-300">
            <a href="" className="mr-4">
                <FaTwitter></FaTwitter>
            </a>
            <p>  Twitter</p>
          </div> 
          <div className="flex p-4 items-center ">
            <a href="" className="mr-4">
            <CiInstagram />
            </a>
            <p>  Instagram</p>
          </div>
          </div>
            

           </div>
           {/* q-zone */}
           <div className="p-4 space-y-4">
            <h2 className='text-3xl'>Q-zone</h2>
            <img src={qzone1} alt="" />
            <img src={qzone2} alt="" />
            <img src={qzone3} alt="" />
           </div>
        </div>
    );
};

export default RightSideNav;