"use client";

import React from "react";

type ClientComponentProps = {
  children: React.ReactNode;
};

export default function ClientComponent({ children }: ClientComponentProps) {
  return <>{children}</>;
}
