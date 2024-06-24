import { Route, Routes } from 'react-router-dom';

import './App.css';
import AddRecipePage from './AddRecipePage';



function App() {
 
  return (
    <div className="App">
   <Routes>
   <Route  path="/addRecipePage" element={<AddRecipePage/>} />

   </Routes>
    </div>
  );
}

export default App;
