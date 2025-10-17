import { Outlet } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Snowfall } from "react-snowfall";
export default function App() {
  return (
    <>
      <main>
        <Snowfall snowflakeCount={300} />
        <Outlet />
      </main>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
