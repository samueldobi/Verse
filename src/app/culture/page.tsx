"use client";
// import {useEffect, useState} from "react";
// import axios from "axios";

// type User = {
//     id:number;
//     name:string;
//     email:string;
// }
export default function CulturePage(){
    // const [users, setUsers] = useState([]);
    //  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   async function fetchUsers() {
  //     try {
  //       const res = await axios.get<User[]>("/api/users");
  //       setUsers(res.data);
  //     } catch (err) {
  //       console.error("Error fetching users:", err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   fetchUsers();
  // }, []);

  // if (loading) return <p>Loading...</p>;

    return(
        <>
         <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Users</h1>
      {/* {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        <ul className="space-y-2">
          {users.map((u) => (
            <li key={u.id} className="p-2 rounded bg-gray-100">
              {u.name} – {u.email}
            </li>
          ))}
        </ul>
      )} */}
    </div>
        </>
    )
}