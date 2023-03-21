import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import Main from './component/pages/main/Main';
import Portal from './component/pages/portal/Portal';
import './App.css';
import { RouteConfig } from './component/pages/shared/GlobalConfig';


function App() {
    const location = useLocation();
    return (
        <div className='App'>
            <AnimatePresence>
                <Routes location={location} key={location.key}>
                    <Route path={RouteConfig.portalPage} index element={<Portal />} />
                    <Route path={RouteConfig.mainPage} element={<Main />} />
                </Routes>
            </AnimatePresence>
        </div>
    )
}

export default App;



