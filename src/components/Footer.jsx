 import Logo from '../images/logo.svg';
 import { FaGithub, FaEnvelope, FaLinkedin, FaInstagram } from 'react-icons/fa';

 const sitemap = [
   { label: 'Home', href: '#home' },
   { label: 'About', href: '#about' },
   { label: 'Skills', href: '#skills' },
   { label: 'Portfolio', href: '#portfolio' },
 ];

 const socials = [
   { label: 'GitHub', href: 'https://www.github.com/yourusername', icon: <FaGithub /> },
   { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yourusername', icon: <FaLinkedin /> },
   { label: 'Instagram', href: 'https://www.instagram.com/yourusername', icon: <FaInstagram /> },
   { label: 'edogawafatir@gmail.com', icon: <FaEnvelope /> },
 ];

 const Footer = () => {
   return (
     <footer className="bg-zinc-900 mt-32 mb-10 text-gray-300 py-12">
       <div className="container mx-auto px-4">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           <div className="mb-5 md:mb-0">
             <h2 className="headline-2 mb-4 reveal-up">Thank You for Visiting!</h2>
             <p className="text-gray-400">Feel free to explore my portfolio and get in touch.</p>
           </div>

           <div>
             <h3 className="text-xl font-semibold reveal-up mb-4">Sitemap</h3>
             <ul className="space-y-2">
               {sitemap.map(({ label, href }, key) => (
                 <li key={key}>
                   <a href={href}  className="hover:text-sky-400 reveal-up transition-colors duration-300">
                     {label}
                   </a>
                 </li>
               ))}
             </ul>
           </div>

           <div>
             <h3 className="text-xl font-semibold reveal-up mb-4">Social & Contact</h3>
             <ul className="space-y-2">
               {socials.map(({ label, href, icon }, key) => (
                 <li key={key}>
                   <a
                     href={href}
                     className="flex reveal-up items-center space-x-2 hover:text-sky-400 transition-colors duration-300"
                     target="_blank"
                     rel="noopener noreferrer"
                   >
                     {icon}
                     <span>{label}</span>
                   </a>
                 </li>
               ))}
             </ul>
           </div>

           <div className="text-center md:text-left">
             <a href="/" className="inline-block reveal-up mb-4">
               <img
                 src={Logo}
                 width={60}
                 height={60}
                 alt="Logo"
                 style={{ filter: 'invert(100%)' }}
                 className="mx-auto md:mx-0"
               />
             </a>
             <p className="text-sm reveal-up text-gray-400">
               &copy; {new Date().getFullYear()} Muhammad Fathir Sagtiana
             </p>
           </div>
         </div>
       </div>
     </footer>
   );
 };

 export default Footer;