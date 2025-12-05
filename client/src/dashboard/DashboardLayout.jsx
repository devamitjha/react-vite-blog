import Footer from "@/components/footer";
import Header from "@/components/header";
import { Link, NavLink, Outlet } from "react-router";
import { useDispatch } from "react-redux";
import { logoutUser } from "@/redux/slices/userSlice";
import { 
  LayoutDashboard,
  FilePlus2,
  FileText,
  Tags,
  ListOrdered,
  Users,
  MessageCircle,
  LogOut
} from "lucide-react";

const DashboardLayout = () => {
 const AdminMenu = () => {
  const dispatch = useDispatch();
  const menu = [
    { name: "Dashboard", icon: <LayoutDashboard size={18} />, path: "/admin" },
    { name: "Create Post", icon: <FilePlus2 size={18} />, path: "/admin/create-post" },
    { name: "All Posts", icon: <FileText size={18} />, path: "/admin/posts" },
    { name: "Categories", icon: <ListOrdered size={18} />, path: "/admin/categories" },
    { name: "Tags", icon: <Tags size={18} />, path: "/admin/tags" },
    { name: "Authors", icon: <Users size={18} />, path: "/admin/authors" },
    { name: "Comments", icon: <MessageCircle size={18} />, path: "/admin/comments" },
  ];

   const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <aside className="bg-gray-900 text-white h-screen p-5">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <nav className="flex flex-col gap-3">
        {menu.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 rounded-lg transition cursor-pointer 
              ${isActive ? "bg-gray-700" : "hover:bg-gray-800"}`
            }
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>          
        ))}
        <div className="flex items-center gap-3 p-2 rounded-lg transition cursor-pointer" onClick={handleLogout}><LogOut size={18} /> Logout</div>
      </nav>
    </aside>
  );
};

  return (
    <div className='w-full bg-gray-50 min-h-screen'>
        <Header/>
        <div className="container mx-auto flex justify-between items-start gap-8 mt-4 relative">
          <div className="leftSidebar w-[20%] sticky top-2">
            <AdminMenu/>
          </div>
          <div className="flex-1 min-h-screen">
            <Outlet/>
          </div>
        </div>
        
        <Footer/>
    </div>
  );
};

export default DashboardLayout;
