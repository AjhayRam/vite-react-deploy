import React from "react";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import ReactDOM from "react-dom/client";
import appRouter from "./routes/routes";
import {BrowserRouter, Routes, Route} from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));
<React.StrictMode>
    <BrowserRouter basename ="/vite-react-deploy/">
        <Routes>
            < Route path="*" element={<App />} />
        </Routes>
    </BrowserRouter>
</React.StrictMode>
root.render(<RouterProvider router={appRouter} />);
