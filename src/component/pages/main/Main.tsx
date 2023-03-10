import { motion } from "framer-motion";
import ParallaxComponent from "./parallax/ParallaxComponent";

function Main() {

    const containerVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            // transition: { delay: 4, duration: 2.5 }
        },
        exit: {
            opacity: 0,
            // transition: { delay: 0, duration: 0.5 }
        }
    }
    return (
        <motion.div id="Main" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
            <ParallaxComponent>
            </ParallaxComponent>
        </motion.div>
    )
}

export default Main;

