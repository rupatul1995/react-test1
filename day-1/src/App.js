import { Route, Routes } from 'react-router-dom';
import AddRecipePage from './AddRecipePage';
import './App.css';



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
