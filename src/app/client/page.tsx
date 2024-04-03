"use client";
import { expensiveFunction } from "@/expensiveFunction";
import React, { useEffect, useState } from "react";

export default function ClientPage() {
  console.log("Client Page -> Rendered");

  const [data, setData] = useState();

  useEffect(() => {
    expensiveFunction();
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);

  return (
    <main>
      <h1 className="text-2xl font-bold">This runs on the client.</h1>
      <button
        className="bg-rose-400 text-white rounded-md p-5"
        onClick={() => console.log("Clicked!")}
      >
        Click
      </button>
    </main>
  );
}
