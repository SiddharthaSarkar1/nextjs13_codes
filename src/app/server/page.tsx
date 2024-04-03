import ClientComponent from "@/ClientComponent";
import { expensiveFunction } from "@/expensiveFunction";
import ServerComponent from "@/ServerComponent";
import React from "react";

export default async function ServerPage() {
  console.log("Server Page -> Rendered");
  expensiveFunction();
  //   In one line we can fetch the data in server componenet
  const data = await fetch("https://dummyjson.com/products").then((res) =>
    res.json()
  );

  console.log(data);

  return (
    <main>
      <h1 className="text-2xl font-bold">This runs on the server.</h1>
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </main>
  );
}
