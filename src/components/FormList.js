import React, { useState, useEffect } from 'react';
import DynamicForm from './DynamicForm';
import firebase from '../firebase'; // Firebase configuration file

const FormList = () => {
  const [forms, setForms] = useState([]);
  const [selectedForm, setSelectedForm] = useState(null);

  useEffect(() => {
    // Fetch the list of form names from the 'formSchema' collection in Firebase
    firebase.firestore().collection('formSchema')
      .get()
      .then((querySnapshot) => {
        const formList = [];
        querySnapshot.forEach((doc) => {
          const formData = doc.data();
          formList.push(formData.name);
        });
        setForms(formList);
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });
  }, []);

  const handleSelectForm = (formName) => {
    setSelectedForm(formName);
  };

  return (
    <div>
        
      <h2>Available Forms</h2>
      <ul>
        {forms.map((formName) => (
          <li key={formName} onClick={() => handleSelectForm(formName)}>
            {formName}
          </li>
        ))}
      </ul>

      {selectedForm && (
        <div>
          <h3>Form: {selectedForm}</h3>
          <DynamicForm formName={selectedForm} />
        </div>
      )}

    </div>
  );
};

export default FormList;
