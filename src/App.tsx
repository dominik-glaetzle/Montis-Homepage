import { Outlet } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Snowfall } from "react-snowfall";
import { NewsBanner } from "./components/NewsBanner.tsx";
export default function App() {
  return (
    <>
      <main>
        <NewsBanner />
        <Snowfall snowflakeCount={300} />
        <Outlet />
      </main>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
