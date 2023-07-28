import React, { useState } from 'react';
import firebase from './firebase';
import FormBuilder from './components/FormBuilder';
import DynamicForm from './components/DynamicForm';

const App = () => {
  const [schema, setSchema] = useState(null);

  const handleLoadForm = () => {
    // Load the saved schema from Firebase
    firebase.firestore().collection('formSchema')
      .doc('HowkRfwJeK7TelOIhZ5k')
      .get()
      .then((doc) => {
        //console.log(doc.exists);
        if (doc.exists) {
          const formData = doc.data();
          setSchema(formData.schema);
        } else {
          console.log('No such document!');
        }
      })
      .catch((error) => {
        console.log('Error getting document:', error);
      });
  };

  return (
    <div>
      <h1>Dynamic Form Builder</h1>
      <FormBuilder /> <br/>
      <button onClick={handleLoadForm}>Load Form</button>
      {schema && <DynamicForm schema={schema} />}
    </div>
  );
};

export default App;
