# Manage X SaaS App

Welcome to the Manage X SaaS App, a comprehensive project management tool designed to streamline the process of managing projects, tasks, and team collaboration with an irresistible user interface and user experience flow.

## Features

- **Mobile responsive one-page landing page**: A visually appealing landing page that is responsive on all devices, providing a seamless experience for users.
- **User onboarding with free trial or paid subscription options**: Easy onboarding process with options for a 14-day free trial or a paid subscription, enhancing user acquisition.
- **Email verification and user profile settings**: Ensures user authenticity through email verification and allows users to customize their profiles for a personalized experience.
- **Workspace creation with customizable options**: Users can create workspaces with options to customize, such as setting a workspace name, color, and logo, facilitating organization and branding.
- **Project management with detailed settings**: Comprehensive project management features, including the ability to add, edit, and manage projects with detailed settings.
- **Task management with a tree list view and detailed task forms**: Efficient task management with a structured tree list view and detailed forms for task creation and editing.
- **Real-time updates on project and task counts**: Dynamic updates on the number of projects and tasks, providing users with up-to-date information.
- **Interactive dashboard with graphical representations of project and task statuses**: A dashboard featuring interactive graphs and charts for a visual representation of project and task progress.
- **Activity logs for auditing user actions**: Detailed activity logs for tracking user actions, ensuring accountability and transparency.
- **Aesthetic design with a focus on user experience**: A beautifully designed interface that prioritizes user experience, making project and task management enjoyable.

## Installation

To get started with Manage X SaaS App, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the app directory.
3. Install the required dependencies by running:

```
npm install
npm install shadcn-ui
```

4. Set up your environment variables by creating a `.env` file in the root directory with the following contents:

```
DB_URI=mongodb://localhost:27017/manageX
PORT=3000
```
## Security

Our app implements robust security measures to protect user data and ensure a secure environment:
- **Email Verification**: To confirm the authenticity of user accounts.
- **Password Hashing**: Securely storing user passwords using advanced hashing algorithms.
- **Input Validation**: Preventing malicious data entry by validating user inputs across the app.
4. Set up your environment variables by creating a `.env` file in the root directory with the following contents:
```
DB_URI=mongodb://localhost:27017/manageX
PORT=3000
```

5. Start the application by running:

```
npm start
```

The application should now be running on `http://localhost:3000`.

## Usage

To use the Manage X SaaS App:

1. Open your browser and navigate to `http://localhost:3000`.
2. Register for a new account or log in with your credentials.
3. Follow the on-screen instructions to set up your workspace and start managing your projects and tasks.

## Dependencies

- Frontend: React.js or Vue.js, Bootstrap, Tailwind CSS, Material-UI, Vuetify
- Backend: Node.js, Express.js, MongoDB, PostgreSQL
- Real-time features: Socket.IO
- Reporting: Metabase, Power BI

## File Structure

- `index.html`: The main entry point for the application's frontend.
- `css/`: Contains all the CSS files for styling the application.
- `js/`: Contains all the JavaScript files for frontend logic.
- `images/`: Contains images used in the application.
- `icons/`: Contains icon files for the UI.
## Testing

To ensure the quality and reliability of the Manage X SaaS App, we have implemented comprehensive unit testing. To run the tests, follow these steps:

1. Ensure you are in the app directory.
2. Run the following command to execute the unit tests:

```
npm test
```

This will run all the unit tests defined in the `tests/` directory and output the results, allowing you to verify the functionality of various components of the application.
- `server.js`: The main entry point for the application's backend.
- `app.js`: Sets up the Express application.
- `routes/`: Contains all the route definitions for the API.
- `controllers/`: Contains the logic for handling API requests.
- `models/`: Contains the Mongoose schemas for the database.
- `config/`: Contains configuration files, such as the database connection.
- `public/js/components/`: Vue or React components for the frontend.
## Migration to Shadcn UI

The Manage X SaaS App has migrated to using the Shadcn UI library for its UI components to enhance the user interface and experience. Developers should refer to the [Shadcn UI documentation](https://github.com/shadcn-ui/ui) for information on using and customizing UI components. The custom styles and overrides specific to this project are located in the `css/shadcn-ui-custom.css` file.
- `public/js/store/`: Vuex or Redux store modules.
- `public/js/utils/`: Utility functions and constants.
- `public/js/plugins/`: Integration files for third-party services and libraries.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

Manage X SaaS App is open-source software licensed under the MIT license.