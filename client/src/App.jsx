import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
} from "react-router";

const Layout = lazy(() => import("./Layout"));
const Home = lazy(() => import("./pages/home/Home"));
const About = lazy(() => import("./pages/about/About"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const Category = lazy(() => import("./pages/category/Category"));
const AllCategory = lazy(() => import("./pages/category/AllCategory"));
const SinglePost = lazy(() => import("./pages/singlePost/SinglePost"));
const Author = lazy(() => import("./pages/author/Author"));

// Dashboard
const DashboardLayout = lazy(() => import("./dashboard/DashboardLayout"));
const Dashboard = lazy(() => import("./dashboard/Dashboard"));
const CreatePost = lazy(() => import("./dashboard/CreatePost"));
const AllPosts = lazy(() => import("./dashboard/AllPosts"));
const EditPost = lazy(() => import("./dashboard/EditPost"));
const AdminCategories = lazy(() => import("./dashboard/AdminCategories"));
const AdminTags = lazy(() => import("./dashboard/AdminTags"));
const AdminAuthors = lazy(() => import("./dashboard/AdminAuthors"));
const Comments = lazy(() => import("./dashboard/Comments"));

import ProtectedRoute from "./components/ProtectedRoute";
import WaitingQuote from "./components/WaitingQuote";


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Suspense fallback={<WaitingQuote/>}>
          <ScrollRestoration />
          <Layout />
        </Suspense>
      ),
      children: [
        { index: true, element: <Home /> },
        { path: 'category', element: <AllCategory /> },
        { path: 'category/:catname', element: <Category /> },
        { path: 'tags/:tagname', element: <Category /> },
        { path: 'author/:name', element: <Author /> },
        { path: ':post', element: <SinglePost /> },
        { path: 'about', element: <About /> },
        { path: 'contact', element: <Contact /> },
      ],
    },

    // Admin Routes (Lazy Loaded)
    {
      path: '/admin',
      element: (
        <Suspense fallback={<WaitingQuote/>}>
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        </Suspense>
      ),
      children: [
        { index: true, element: <Dashboard /> },
        { path: 'create-post', element: <CreatePost /> },
        { path: 'posts', element: <AllPosts /> },
        { path: 'edit-post/:id', element: <EditPost /> },
        { path: 'categories', element: <AdminCategories /> },
        { path: 'tags', element: <AdminTags /> },
        { path: 'authors', element: <AdminAuthors /> },
        { path: 'comments', element: <Comments /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
