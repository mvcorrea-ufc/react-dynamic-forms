import React, { useState } from 'react';
import firebase from '../firebase';
import inputTypes from './inputTypes.json'; // JSON file containing input types


const FormBuilder = () => {
    const [formName, setFormName] = useState('');
    const [formFields, setFormFields] = useState([]);
    const [fieldName, setFieldName] = useState('');
    const [fieldType, setFieldType] = useState('text'); // Default to "Text" input type
  
    const handleAddField = () => {
      const newField = {
        type: fieldType,
        label: fieldName,
      };
  
      setFormFields((prevFields) => [...prevFields, newField]);
      setFieldName('');
    };
  
    const handleSaveForm = () => {
      // Save the formFields state as JSON to the 'formSchema' collection in Firebase
      firebase.firestore().collection('formSchema').add({
        name: formName,
        schema: JSON.stringify(formFields),
      });
    };
  
    return (
      <div>
        <input
          type="text"
          value={formName}
          onChange={(e) => setFormName(e.target.value)}
          placeholder="Enter Form Name"
        />
        <input
          type="text"
          value={fieldName}
          onChange={(e) => setFieldName(e.target.value)}
          placeholder="Enter Field Name"
        />
        <select value={fieldType} onChange={(e) => setFieldType(e.target.value)}>
          {inputTypes.types.map((type) => (
            <option key={type.value} value={type.value}> {type.label} </option>
          ))}
        </select>
        <button onClick={handleAddField}>Add Field</button>
        <button onClick={handleSaveForm}>Save Form</button>
      </div>
    );
  };
  

export default FormBuilder;
