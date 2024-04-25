# Fruit Management Application

This is a Node.js application designed for managing fruits through a web interface. It uses Express for server operations, Mongoose for interacting with MongoDB, and EJS for rendering views.

## Features

-   CRUD operations for fruit data.
-   Form handling with real-time updates and deletions.
-   Responsive web interface using EJS templating.

## Technologies Used

-   **Node.js** - JavaScript runtime built on Chrome's V8 JavaScript engine.
-   **Express** - Framework for building web applications on Node.js.
-   **Mongoose** - MongoDB object modeling tool designed to work in an asynchronous environment.
-   **dotenv** - Module that loads environment variables from a `.env` file.
-   **method-override** - Middleware to use HTTP verbs such as PUT or DELETE in places where the client doesn’t support it.
-   **morgan** - HTTP request logger middleware for Node.js.
-   **EJS** - Templating language to generate HTML markup with plain JavaScript.
-   **path** - Utility for handling and transforming file paths.

## Setup and Installation

1. **Clone the repository:**
2. **Navigate to the project directory:**
3. **Install dependencies:**
4. **Set up the environment variables:**

-   Create a `.env` file in the root of your project.
-   Add `MONGODB_URI=[your-mongodb-connection-string]` to the file.

5. **Start the application:**

## Application Structure

-   **Server Initialization**: Set up and configuration of the Express app.
-   **Middleware Configuration**: Static file serving, method overriding, request logging, and body parsing.
-   **Database Connection**: Connection to MongoDB using Mongoose.
-   **Routing**:
-   Home Page (`GET /`)
-   Fruit creation (`POST /fruits`)
-   Fruit listing (`GET /fruits`)
-   Fruit details (`GET /fruits/:fruitId`)
-   Fruit update (`PUT /fruits/:fruitId`)
-   Fruit deletion (`DELETE /fruits/:fruitId`)
-   **Views**: Dynamic rendering using EJS.

## Usage

Once the server is running, you can access the application through `http://localhost:3001/` in your web browser. This will present a user interface for adding, editing, deleting, and viewing fruits.

## Contributions

Contributions are welcome. Please open an issue first to discuss what you would like to change or add.

## License

[MIT](https://opensource.org/licenses/MIT)
