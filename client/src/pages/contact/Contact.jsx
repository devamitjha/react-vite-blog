import { useEffect, useState } from "react";
import { getUsers } from "@/services/userService";

const Contact = () => {
  const [users, setUsers] = useState([]);

  const getAllUser = async () => {
    try {
      const data = await getUsers();
      setUsers(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllUser();
  }, []);

  return (
    <div>
      <h2>User List</h2>
      {users.map((user) => (
        <p key={user.id}>{user.full_name}</p>
      ))}
    </div>
  );
};

export default Contact;
