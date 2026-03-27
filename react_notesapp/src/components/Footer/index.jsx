import LinkedInLogo from '../../../src/assets/Linkedin.png'
import GithubLogo from '../../../src/assets/GIthub.png'

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className="flex flex-col w-full h-24 bg-purple-900 justify-center p-8 bottom-0">
                <div id="foot-social" className="flex justify-center">
                    <a href="https://www.linkedin.com/in/sahiltrived007">
                        <img src={GithubLogo} className='h-6 w-6 mr-2'  alt="Linkedin"/>
                    </a>
                    <a href="https://www.github.com/coder-sahil">
                        <img src={LinkedInLogo} className='h-6 w-6 ml-2' alt="Github"/>
                    </a>
                </div>
                <div id="foot-author" className="flex justify-center">
                    Made With  <span className="text-red-500"> ❤❤ </span>  By SAHIL TRIVEDI
                </div>
                <div id="foot-author" className="flex justify-center">
                    <p>© {currentYear} . All rights reserved.</p>
                </div>
            </footer>
        </>
    )

}

export default Footer;