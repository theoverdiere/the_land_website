import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Portal from './component/pages/portal/Portal';
import Main from './component/pages/main/Main';


function App() {
  return (
      <div className='App'>
          <BrowserRouter>
            <Routes>
              <Route path="/" index element={<Portal/>} />
              <Route path="/the-tales" element={<Main/>} />
            </Routes>
          </BrowserRouter>
      </div>
  )
}

export default App;



