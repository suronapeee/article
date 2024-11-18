import react from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import Article  from "./pages/article/Article";
import NotFound from "./pages/NotFound";

function App() {
  return (
    // Enable future flags for React Router v7
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/article/:article_id" element={<Article />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
