import { motion } from "framer-motion";
import ParallaxComponent from "./parallax/ParallaxComponent";

function Main() {

    const containerVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: { delay: 5, duration: 4 }
        },
        exit: {
            opacity: 0,
            transition: { delay: 0, duration: 1 }
        }
    }
    return (
        <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit">
            <ParallaxComponent>
            </ParallaxComponent>
        </motion.div>
    )
}

export default Main;

