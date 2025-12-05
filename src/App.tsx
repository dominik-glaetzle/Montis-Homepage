import { Outlet } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Snowfall } from "react-snowfall";
import { NewsBanner } from "./components/NewsBanner.tsx";
export default function App() {
  return (
    <>
      <Snowfall
        snowflakeCount={300}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          top: 0,
          left: 0,
          pointerEvents: "none",
        }}
      />
      <main>
        <NewsBanner />
        <Outlet />
      </main>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
