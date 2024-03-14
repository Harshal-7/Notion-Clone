import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-24">
      <h1 className="text-red-500 text-center fontbol text-4xl mt-10">
        Notion-Clone
      </h1>
      <Button size={"lg"}>Button Example</Button>
    </div>
  );
}
