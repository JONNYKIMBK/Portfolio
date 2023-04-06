import Resume from "./components/Resume/Resume";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <div>
      <Resume />
      <Analytics />
    </div>
  );
}
