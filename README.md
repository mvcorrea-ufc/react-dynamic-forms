# Dynamic Form Builder with React and Firebase

This is a dynamic form builder application built using React and Firebase. It allows users to create custom forms by adding various input fields and labels. The created forms are stored in a Firebase database, and users can also view and edit the forms they've created.

## Features

- Create custom forms by adding input fields and labels dynamically.
- Store the form structure in the Firebase 'formSchema' collection.
- Associate form data with a unique name in the Firebase 'formNAME' collection.
- View and edit the forms based on their schema.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Firebase: A cloud-based platform for building web and mobile applications.

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/dynamic-form-builder.git
   cd dynamic-form-builder
2. Create a Firebase project and create a collection called 'formSchema' to keep the forms structure.

3. Create a file called **firebase.js** in the src folder with this structure, containing the firebase auth data:

    ```bash
    import firebase from 'firebase/compat/app';
    import 'firebase/compat/auth';
    import 'firebase/compat/firestore';
    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AAA",
        authDomain: "BBB.firebaseapp.com",
        projectId: "BBB",
        storageBucket: "BBB.appspot.com",
        messagingSenderId: "606915006248",
        appId: "CCC"
    };
    firebase.initializeApp(firebaseConfig);
    export default firebase;
4. Install the required dependencies:

    ```bash
    npm install
5. Run the application:

    ```bash
    npm start
6. Open the sample application in your web browser:

    ```bash
    http://localhost:3000
## Usage

1. Create a new form:
- Enter a unique name for the form in the input field provided.
Click on "Add Text Field" or "Add Number Field" buttons to append input fields with labels to the form.
Click on "Save Form" to store the form structure in the Firebase 'formSchema' collection.

2. View and Edit a form:
- On the main page, you'll see a list of all available forms.
Click on the name of the form you want to view/edit.
The form will be displayed with the fields and labels based on the stored schema.
You can modify the form as needed.

## License
This project is licensed under the MIT License. Feel free to use, modify, and distribute it as per the terms of the license.

## Contributing
Contributions to this project are welcome. If you find any issues or have suggestions for improvements, feel free to open a GitHub issue and/or create a pull request.

## Acknowledgments
Special thanks to the following resources for inspiration and guidance during the development of this project:

- [Pluralsight Guide: Generating Dynamic Forms from JSON in React](https://www.pluralsight.com/guides/generating-dynamic-forms-from-json-in-react)
- [Storyblok: React Dynamic Component from JSON](https://www.storyblok.com/tp/react-dynamic-component-from-json)
- [Naina Codes Blog: Create Form from JSON Schema](https://nainacodes.com/blog/create-form-from-json-schema)
- [Medium Article: How to Generate Dynamic Form from JSON with React](https://medium.com/swlh/how-to-generate-dynamic-form-from-json-with-react-5d70386bb38b)

## Contact
For any inquiries or questions, please feel free to reach out to mvcorrea(at)gmail.com.