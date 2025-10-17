import { Outlet } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
export default function App() {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
