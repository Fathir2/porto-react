

import Logo from '../images/logo.svg';


const sitemap = [
    {
      label: 'Home',
      href: '#home'
    },
    {
      label: 'About',
      href: '#about'
    },
    {
        label: 'Skills',
        href: '#skills'
    },
    {
      label: 'Portofolio',
      href: '#portofolio'
    },
  ];
  
  const socials = [
    {
      label: 'GitHub',
      href: 'https://www.github.com/ypurusername'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/yourusername'
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/yourusername'
    },
  ];


const Footer = () => {
    return (
        <footer className="section">
            <div className="container">
                <div className="lg:grid lg:grid-cols-2">
                    <div className="">
                          <h2 className="headline-2">
                          Thank You for Visiting!
                    </h2>
                    </div>


                  
                </div>

               

                <div className="">
                    <div>
                        <p className="">Sitemap</p>

                        <ul className="">
                            {
                                sitemap.map(({label, href}, key) => (
                                    <li key={key}>
                                        <a 
                                        href={href}
                                        className=""
                                        >
                                        {label}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

                <div className="">
                    <div>
                        <p className="">Social</p>

                        <ul className="">
                            {
                                socials.map(({label, href}, key) => (
                                    <li key={key}>
                                        <a 
                                        href={href}
                                        className=""
                                        target="_blank"
                                        >
                                        {label}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

                <div className="">
                    <a 
                    href="" 
                    className=""
                    >
                        <img 
                        src={Logo}
                        width={40}
                        height={40} 
                        alt="Logo" 
                        style={{filter: 'invert(100%)'}}
                        className="" />
                    </a>

                    <p className="">
                        &copy; 2025 Muhammad Fathir Sagtiana
                    </p>
                </div> 
            </div>
        </footer>
    )
}

export default Footer