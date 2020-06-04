import React from "react";
import Everything from "./Components/Everything";
import "./App.css";
import {useMediaQuery} from react-responsive;
export default function App() {
  const phone = useMediaQuery({query: 'max-width: 500px'})
  return (
    <div className="App">
      <div className="components">
  {phone && <Everything />}
      </div>
    </div>
  );
}
