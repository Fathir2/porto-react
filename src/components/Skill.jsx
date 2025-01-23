

/**
 * components
 * 
 */

import SkillCard from './SkillCard';

/**
 * Icon skill 
 */


import FigmaIcon from '../images/figma.svg';
import ReactIcon from '../images/react.svg';
import TailwindIcon from '../images/tailwindcss.svg';
import LaravelIcon from '../images/laravel.svg';
import NodeIcon from '../images/nodejs.svg';
import MySQLIcon from '../images/mysql.svg';
import FlutterIcon from '../images/Flutter.svg';
import ExpressIcon from '../images/expressjs.svg';

const skillItems = [
    {
        icon: FigmaIcon,
        label: 'Figma',
        desc: 'Design Tool'
    },
    {
        icon: ReactIcon,
        label: 'ReactJS',
        desc: 'JavaScript Library'
    },
    {
        icon: TailwindIcon,
        label: 'TailwindCSS',
        desc: 'CSS Framework'
    },
    {
        icon: LaravelIcon,
        label: 'Laravel',
        desc: 'PHP Framework'
    },
    {
        icon: NodeIcon,
        label: 'NodeJS',
        desc: 'JavaScript Runtime Environment'
    },
    {
        icon: MySQLIcon,
        label: 'MySQL',
        desc: 'Database Management'
    },
    {
        icon: FlutterIcon,
        label: 'Flutter',
        desc: 'Multiplatfrom framework'
    },
    {
        icon: ExpressIcon,
        label: 'Express',
        desc: 'Backend for Express'
    }
];

const Skill = () => {
    return (
       <section className="section" id="skills">
        <div className="container">

            <h2 className="headline-2">
                Essential Tool I use for development.
            </h2>

            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
                discover the powerful tools and technologies 
                use to create exceptional , high performing 
                website and applications. 
            </p>

            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] ">
                {
                    skillItems.map(({icon, label, desc}, key) => 
                    (
                       <SkillCard 
                       key={key}
                       icon={icon}
                       label={label}
                       desc={desc}
                       
                       />
                    ))
                }
            </div>


        
        </div>

       </section>
    )
}

export default Skill;