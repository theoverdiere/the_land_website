import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import PortalSvg from './svgs/PortalSvgComponent';



function Portal () {

    return (
        <div >
            <NavLink to="/the-tales">
                <motion.svg 
                                    id="Portail" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 942.72 1501.89">
                    <PortalSvg></PortalSvg>
                </motion.svg>
            </NavLink>
            
        </div>
    )
}

export default Portal;

