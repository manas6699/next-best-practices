import React from "react";

interface Article {
  id: number;
  name: string;
  department: string;
}

const Articles = async () => {
  const res2 = fetch(
    "https://65899ba0324d417152593c87.mockapi.io/api/articles"
  );
  const articles: Article[] = await (await res2).json();
  return (
    <div>
      <div>
        <h1 className="font-bold text-xl p-2">Department</h1>
        <ul className="p-4 font-light">
          {articles.map((item) => (
            <li key={item.id}>{item.department}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Articles;
