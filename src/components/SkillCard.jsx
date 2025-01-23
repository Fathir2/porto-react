

/**
 * 
 * node modules 
 */

import PropTypes from "prop-types";

const SkillCard = ({
    icon, 
    label, 
    desc,
    classes
}) => {

    return (

       <div className={`flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl group transition-colors hover:bg-zinc-800 p-3 ${classes}`}>
           <figure className="bg-zinc-700/50 rounded-lg 
           overflow-hidden w-12 h-12 p-2 
           group-hover:bg-zinc-900 transition-colors
           ">
            <img 
            src={icon}
            width={32}
            height={32}
            alt={label} 
            className="" />
           </figure>

           <h3>{label}</h3>
           <p className="text-zinc-400 text-sm">
            {desc}
           </p>
        </div>
    )


}

SkillCard.propTypes = {
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    classes: PropTypes.string
};

export default SkillCard; 