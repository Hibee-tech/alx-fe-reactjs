
import './App.css'
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  return (
    <>
     <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/add-recipe" element={<AddRecipeForm />} />
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

