# Starter React App

This is a starter React application built with TypeScript and Firebase Authentication.

## Requirements

- Node.js
- npm

## Installation

Clone the repository and install the dependencies.

```bash
git clone https://github.com/yourusername/starter-react-app.git
cd starter-react-app
npm install
```

## Configuration

Create a `.env` file in the root directory of the project. Add environment variables on new lines in the form of `NAME=VALUE`. For example:

```bash
REACT_APP_FIREBASE_API_KEY=yourapikey
REACT_APP_FIREBASE_AUTH_DOMAIN=yourauthdomain
REACT_APP_FIREBASE_PROJECT_ID=yourprojectid
```

## Usage

Start the development server.

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Features

- User authentication with Firebase
- TypeScript for static typing
- Context API for state management
- Custom hooks for authentication

## File Structure

- `src/index.tsx` - Entry point of the application
- `src/App.tsx` - Main component of the application
- `src/components/Login.tsx` - Login component
- `src/components/Signup.tsx` - Signup component
- `src/components/Dashboard.tsx` - Dashboard component
- `src/services/auth.ts` - Firebase authentication service
- `src/types/user.ts` - User data schema
- `src/hooks/useAuth.ts` - Custom hook for authentication
- `src/context/AuthContext.tsx` - Context provider for authentication
- `src/styles/` - Global and component-specific styles

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)