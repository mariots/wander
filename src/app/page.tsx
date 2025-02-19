import { WanderButton } from "@/components/WanderButton/WanderButton";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="mt-64 text-center">
        <h1 className="text-6xl">Wander the Web</h1>
        <p className="mt-10 text-3xl">
          Explore and discover the best of the web
        </p>
        <div className="mt-20">
          <WanderButton />
        </div>
      </div>
    </main>
  );
}
