import './App.css';
import { RouterProvider } from "react-router-dom"
import { router } from './Routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
