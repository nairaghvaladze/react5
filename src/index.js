import React from "react";
import ReactDOM from "react-dom/client";
import MyComponent from "./MyComponents";

class App extends React.Component{
    render()
    {
        return (
            <div>
            <MyComponent />
            </div>

           

          
            
        )
    }
}
var root=document.getElementById("root");
ReactDOM.createRoot(root).render(<App />)