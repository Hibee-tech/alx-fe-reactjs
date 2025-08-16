
import './App.css'
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
     <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
    </Router>
    <h1 className="text-3xl font-bold text-blue-500 text-center mt-10">
      Recipe Sharing Platform
    </h1>
    </>
  );
}

export default App;

