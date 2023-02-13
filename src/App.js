import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from './components/Layout';
import Singlepage from './pages/Singlepage';
import Articlespage from './pages/Articlespage';
import './App.css';


function App() {
    return (
        <>      
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                    <Route path="/article" element={<Articlespage />} />
                    <Route path="/article/:id" element={<Singlepage />} />
                    </Route>
                </Routes>
        </BrowserRouter> 
                </> 
    );
}

export default App;