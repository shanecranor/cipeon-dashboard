import { VersionBanner } from "@/components/VersionBanner";
import "./page.scss";
import { Clock } from "@/components/Clock";
import Pixi from "./Pixi";

export default function Home() {
  return (
    <div className="p-home">
      <Pixi />
      <div className="big-banner">
        <VersionBanner />
      </div>
      <footer>
        <Clock />
      </footer>
    </div>
  );
}
