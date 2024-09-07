import { VersionBanner } from "@/components/VersionBanner";
import "./page.scss";
import { Clock } from "@/components/Clock";
import Backdrop from "./ThreeJSBackdrop";

export default function Home() {
  return (
    <div className="p-home">
      <Backdrop />
      <div className="big-banner">
        <VersionBanner />
      </div>
      <footer>
        <Clock />
      </footer>
    </div>
  );
}
