import Layout from './Layout';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Category from './pages/category/Category';
import AllCategory from './pages/category/AllCategory';
import SinglePost from './pages/singlePost/SinglePost';
import { Route, Routes } from 'react-router';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './dashboard/Dashboard';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="category" element={<AllCategory/>}/>
        <Route path="category/:catname" element={<Category/>}/>
        <Route path="tags/:tagname" element={<Category/>}/>
        <Route path="author/:name" element={<Category/>}/>
        <Route path="/:post" element={<SinglePost/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="dashboard" element={
            <ProtectedRoute>
              <Dashboard/>
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  )
}

export default App
