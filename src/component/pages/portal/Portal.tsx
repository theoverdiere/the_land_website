import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import PortalSvg from './svgs/PortalSvgComponent';

const svgVariants= {
    hidden: {rotate: -180},
    visible: {
        rotate: 0,
        transition: {duration : 1}
    }
}

function Portal () {

    return (
        <div >
            <NavLink to="/the-tales">
                <motion.svg variants={svgVariants} initial="hidden" animate="visible"
                        id="Portail" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 942.72 1501.89">
                    <PortalSvg></PortalSvg>
                </motion.svg>
            </NavLink>
            
        </div>
    )
}

export default Portal;

