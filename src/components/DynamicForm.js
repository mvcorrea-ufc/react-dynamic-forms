import React from 'react';

const DynamicForm = ({ schema }) => {
  // Convert the JSON schema back to an array
  const formFields = JSON.parse(schema);

  return (
    <form>
      {formFields.map((field, index) => (
        <div key={index}>
          <label>{field.label}</label>
          <input type={field.type} />
        </div>
      ))}
    </form>
  );
};

export default DynamicForm;
