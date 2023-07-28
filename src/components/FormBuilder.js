import React, { useState } from 'react';
import firebase from '../firebase';

const FormBuilder = () => {
  const [formName, setFormName] = useState('');
  const [formFields, setFormFields] = useState([]);

  const handleAddField = (field) => {
    setFormFields((prevFields) => [...prevFields, field]);
  };

  const handleSaveForm = () => {
    // Save the formFields state as JSON to Firebase
    firebase.firestore().collection('formSchema').add({
      name: formName,
      schema: JSON.stringify(formFields),
    });
    console.log(formFields);
  };

  return (
    <div>
      <input
        type="text"
        value={formName}
        onChange={(e) => setFormName(e.target.value)}
        placeholder="Enter Form Name"
      />
      <button onClick={() => handleAddField({ type: 'text', label: 'Text Field' })}>
        Add Text Field
      </button>
      <button onClick={() => handleAddField({ type: 'number', label: 'Number Field' })}>
        Add Number Field
      </button>
      <button onClick={handleSaveForm}>Save Form</button>
    </div>
  );
};

export default FormBuilder;
