import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Routes , Route } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import getRec from './Helper.js';
import CRUDForm from './Components/CRUDForm/CRUDForm'
import HomePage from './Components/homePage/homePage';
import View from './Components/View/View';
import Header from './Components/Header/Header';
import EditForm from './Components/editForm/editForm.jsx';

function App() {

  const navigate = useNavigate();

  const [inputValue , setinputValue] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    address: ''
  });

  const [storage, setStorage] = useState(getRec());

  const [editData, setEditData] = useState('');
 
  const handleChange = (e) => { 
      
    let name = e.target.name;
    let value = e.target.value;

    setinputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {

    event.preventDefault();

    const newFormInput = {...inputValue, id: uuidv4() };
    setStorage([...storage, newFormInput]);

    navigate('/viewData');

    setinputValue({
      name: '',
      email: '',
      phone: '',
      password: '',
      address: ''
    });

  };


  const handleEdit = (id) => {

    const recordToEdit = storage.find((item) => item.id === id);

    setEditData(recordToEdit);
    navigate('/editForm');

  };

  const handleUpdate = (rec) => {

    const updatedStorage = storage.map((item) =>
      item.id === rec.id ? rec : item 
    );     

    setStorage(updatedStorage);

    navigate('/viewData'); 
  }

  useEffect(() => {

    localStorage.setItem('storage', JSON.stringify(storage));

  }, [storage]);

  return (
    <>
      <Header />
        <Routes>  
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<CRUDForm inputValue={inputValue} handleChange={handleChange} handleSubmit={handleSubmit} />} />
          <Route path="/viewData" element={<View storage={storage} handleEdit={handleEdit} setStorage={setStorage}/>} />
          <Route path='/editForm' element={<EditForm editData={editData} handleUpdate={handleUpdate} />} />
        </Routes>
    </>
  )
}

export default App; 