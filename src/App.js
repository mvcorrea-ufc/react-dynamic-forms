import React from 'react';
import FormBuilder from './components/FormBuilder';
import FormList from './components/FormList';

const App = () => {
  return (
    <div>
      <h1>Dynamic Form Builder</h1>
      <FormBuilder /> <br/>
      <FormList />
    </div>
  );
};

export default App;
