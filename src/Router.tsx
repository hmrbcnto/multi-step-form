import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Plan from './pages/Plan';

const Router: React.FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Plan />}/>
      </Routes>
    </BrowserRouter>
  )
};

export default Router;
