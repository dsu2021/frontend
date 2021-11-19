import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
    Main
 } from './page';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Main />}/>
                </Routes>                
            </BrowserRouter>
        </div>
    );
}

export default App;
