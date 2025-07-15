// import React from "react";
// import TodoList from "./TodoList";

// function App() {
//   return (
//     <div className="App">
//       <TodoList />
//     </div>
//   );
// }

// export default App;
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
