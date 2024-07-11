
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className=' mb-10 flex items-center justify-between py-6 lg:p-8'>
            <div className='flex flex-shrink-0 items-center'>
                <h1 className='text-3xl font-bold mx-2'>Hey hai! This is me</h1>
                {/* <img className='mx-2 w-10 ' src={logo} alt="logo" /> */}
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/nimmalaavinash101010/" target="blank"><FaLinkedin /></a>
                <a href="https://github.com/avinash101010" target="blank" ><FaGithub /></a>
                <a href="https://www.twitter.com" target="blank"><FaSquareXTwitter /></a>
                <a href="https://www.instagram.com" target="blank"><FaInstagram /></a>




            </div>


        </nav>
    );
};

export default Navbar