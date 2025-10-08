import * as React from "react";

type CardProps = Readonly<{ children: React.ReactNode }>;

export default function Card({ children }: CardProps) {
  return (
    <div className="m-3 rounded-3xl border-black shadow-sm transition-shadow duration-300 hover:shadow-lg">
      <div className="flex justify-center overflow-hidden rounded-3xl ">
        {children}
      </div>
    </div>
  );
}
