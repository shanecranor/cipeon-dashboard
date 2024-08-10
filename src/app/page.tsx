import Image from "next/image";
import "./page.scss"
import { Clock } from "@/components/clock";

export default function Home() {
  return (
   <div>
    hello world
    <Clock/>
   </div>
  );
}
