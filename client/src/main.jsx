import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/redux/store";
import App from "./App";
import "./index.css";
 import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById("root")).render(
  <StrictMode>     
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>     
         <ToastContainer/>   
            <App />          
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
