import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <main>
        <h1>Hello </h1>
        <Link href="/user">user</Link>
      </main>
    </div>
  );
};

export default page;
