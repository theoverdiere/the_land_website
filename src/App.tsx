import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import Main from './component/pages/main/Main';
import Portal from './component/pages/portal/Portal';


function App() {

    const location = useLocation();

    return (
        <div className='App'>
            <AnimatePresence>
                <Routes location={location} key={location.key}>
                    <Route path="/" index element={<Portal />} />
                    <Route path="/the-tales" element={<Main />} />
                </Routes>
            </AnimatePresence>
        </div>
    )
}

export default App;



