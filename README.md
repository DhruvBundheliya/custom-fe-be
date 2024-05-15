# Application

This is a two-tier application.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository.
2. Install dependencies for the front end using `npm install`.
3. Start the development server for the front end using `npm start`.
4. Make sure the backend server is running (see instructions below).

## Usage

- Click the "Send Request" button to interact with the backend.
- View the response received from the backend.

## Configuration

You can configure the backend URL by updating the `backendUrl` variable in `config.json`. This file can be found at the root of the project.

```json
{
  "backendUrl": "http://127.0.0.1:5000"
}
```

Update the backendUrl value to match the URL of your backend server.

## Running the Backend
To run the backend server, follow these steps:

1. Navigate to the backend directory.
2. Install dependencies for the backend using pip install flask
3. Start the backend server using python app.py.


## Building and Serving the Static Content
To build the static content for production and serve it using serve, follow these steps:

1. Navigate to the frontend directory.
2. Install dependencies for the front end using `npm install`.
3. Build the static content using `npm run build`.
4. Serve the static content using serve:
```
npm install -g serve
serve -s build
```

This will start a server hosting the static content from the build directory. 

### Contributing
Feel free to contribute to this project by submitting pull requests.

### License
This project is licensed under the MIT License - see the LICENSE file for details.
