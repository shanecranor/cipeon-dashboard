import { VersionBanner } from "@/components/VersionBanner";
import "./page.scss";
import { Clock } from "@/components/Clock";

export default function Home() {
  return (
    <div className="p-home">
      <div className="big-banner">
        <VersionBanner />
      </div>
      <footer>
        <Clock />
      </footer>
    </div>
  );
}
