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
import Author from './pages/author/Author';
import DashboardLayout from './dashboard/DashboardLayout';
import CreatePost from './dashboard/CreatePost';
import AllPosts from './dashboard/AllPosts';
import EditPost from './dashboard/EditPost';
import AdminCategories from './dashboard/AdminCategories';
import AdminTags from './dashboard/AdminTags';
import AdminAuthors from './dashboard/AdminAuthors';
import Comments from './dashboard/Comments';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="category" element={<AllCategory/>}/>
        <Route path="category/:catname" element={<Category/>}/>
        <Route path="tags/:tagname" element={<Category/>}/>
        <Route path="author/:name" element={<Author/>}/>
        <Route path="/:post" element={<SinglePost/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>        
      </Route>
      <Route path="admin" element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="create-post" element={<CreatePost />} />
        <Route path="posts" element={<AllPosts />} />
        <Route path="edit-post/:id" element={<EditPost />} />
        <Route path="categories" element={<AdminCategories />} />
        <Route path="tags" element={<AdminTags />} />
        <Route path="authors" element={<AdminAuthors />} />
        <Route path="comments" element={<Comments />} />
      </Route>
    </Routes>
  )
}

export default App
