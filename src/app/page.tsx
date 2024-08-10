import { VersionBanner } from "@/components/VersionBanner";
import "./page.scss";
import { Clock } from "@/components/clock";

export default function Home() {
  return (
    <div className="p-home">
      <VersionBanner />
      <footer>
        <Clock />
      </footer>
    </div>
  );
}
