import React from "react";
import Articles from "../componants/Articles";

interface User {
  id: number;
  name: string;
  article: string;
}
async function getUsers() { 
  const res = await fetch("https://65899ba0324d417152593c87.mockapi.io/api/animal");
  if (!res.ok) throw new Error("Something went wrong");
  
  return res.json() as Promise<User[]> ;
}
export default async function Page(){
  // const res = fetch("https://65899ba0324d417152593c87.mockapi.io/api/animal");
  // if (!(await res).ok) throw new Error("Something went wrong");
  // const users: User[] = await (await res).json();
  const users = await getUsers();

  return (
    <>
    
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        
        <div className="row-span-3">
          <h1 className="text-xl p-2 font-bold">This is user List</h1>

          <ul className="p-4 font-light">
            {users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>
        <Articles />
      </div>
    </>
  );
};


