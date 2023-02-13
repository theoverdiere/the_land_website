import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import PortalSvg from './svgs/PortalSvgComponent';

const containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: { delay: 0, duration: 2 }
    },
    exit: {
        opacity: 0,
        transition: { delay: 2, duration: 2 }
    }
}

function Portal() {
    return (
        <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit">
            <NavLink to="/the-tales">
                <svg
                    id="Portail" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 942.72 1501.89">
                    <PortalSvg></PortalSvg>
                </svg>
            </NavLink>
        </motion.div>
    )
}

export default Portal;

