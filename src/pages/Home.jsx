import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";

import state from "../store";
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from "../config/motion";
import { CustomButton } from "../components";

const Home = () => {

    const snap = useSnapshot(state);

    return (
        <AnimatePresence>
            {snap.intro && (
                <motion.section className="home" {...slideAnimation('left')}>
                    <motion.header {...slideAnimation('down')}>
                        <img
                            src="./threejs.png"
                            alt="logo"
                            className="w-8 h-8 object-contain"
                        />
                    </motion.header>

                    <motion.div className="home-content" {...headContainerAnimation}>
                        <motion.div {...headTextAnimation}>
                            <h1 className="head-text">
                                VAMOS <br className="xl:block hidden" /> CRIAR.
                            </h1>
                        </motion.div>
                        <motion.div
                            {...headContainerAnimation}
                            className="flex flex-col gap-5"
                        >
                            <p className="max-w-md font-normal text-green-500 text-base">
                            Crie sua camisa única e exclusiva com a nossa nova ferramenta de personalização.
                                <strong> Dê asas à sua imaginação </strong>
                                {" "} e defina seu próprio estilo
                            </p>

                            <CustomButton
                                type='filled'
                                title='Customize'
                                handleClick={()=>{state.intro = false}}
                                customStyles='w-fit px-4 py-2.5 font-bold text-sm'
                            />

                        </motion.div>
                    </motion.div>



                </motion.section>
            )}
        </AnimatePresence>
    )
};

export default Home;