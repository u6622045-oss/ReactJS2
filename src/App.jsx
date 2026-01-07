import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Register from './components/Register';
import RegisterSubmit from './components/RegisterSubmit.jsx';

function App() {
return (
    <BrowserRouter basename="/ReactJS2">
      <Routes>
        {/* You can set this as a new path like /submit or make it the root */}
        <Route path="/" element={<RegisterSubmit />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
