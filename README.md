
# AI Image Generator

This is a web application that allows users to log in, sign up, and generate AI-based images. The application integrates with the OpenAI API to create images based on user input.

## Demo

You can check out the demo of the application here: [AI Image Generator Demo]([https://ai-image-generator-d01x.onrender.com]) 

## Features

- **Login**: Users can log in to the application by providing their credentials.
- **Signup**: New users can create an account to access the image generation feature.
- **AI Image Generator**: Once logged in, users can input a prompt, and the app will call the OpenAI API to generate an image based on the input.
  
## Technologies Used

- **React.js**: The frontend of the application is built using React.js.
- **Tailwind CSS**: The app uses Tailwind CSS for styling, providing a responsive and modern UI.
- **API Call**: Fetching data from the OpenAI API to generate AI-based images.
  
## Setup and Installation

1. **Clone the Repository**

   Clone the repository to your local machine:

   ```bash
   git clone https://github.com/aryan10092/AI-image-generator.git
2. **Install Dependencies**

Navigate to the project directory and install the required dependencies:

bash
Copy code
cd AI-image-generator
npm install

3. **Setup .env File

Create a .env file in the root directory and add your OpenAI API key:

makefile
Copy code
VITE_API=your-openai-api-key

4.**Run the Application

Start the development server:

bash
Copy code
npm run dev
