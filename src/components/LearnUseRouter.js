"use client";
import { useRouter } from "next/navigation";
import React from "react";

const LearnUseRouter = () => {
  const router = useRouter();

  return (
    <>
      <h1>=== Use Router ===</h1>
      <button onClick={() => router.push("/admin/profile")}>
        Go to Admin Profile
      </button>
    </>
  );
};

export default LearnUseRouter;
