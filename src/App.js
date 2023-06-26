import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddExpense from './Components/AddExpense';
import DisplayExpense from './Components/DisplayExpense';
import EditExpense from './Components/EditExpense';
import { useState } from 'react';

function App() {
  const[notification, setNotification] = useState(false)
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<DisplayExpense flag={notification}/>}/>
      <Route path='/add' element={<AddExpense flagMethod={setNotification}/>}/>
      <Route path='/edit/:id' element={<EditExpense/>}/>
    </Routes>
    </div>
  );
}

export default App;
