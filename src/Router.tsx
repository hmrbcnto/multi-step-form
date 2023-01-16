import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Information from './pages/Information';
import Plan from './pages/Plan';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Information />}/>
        <Route path="/plan" element={<Plan />}/>
      </Routes>
    </BrowserRouter>
  )
};

export default Router;
