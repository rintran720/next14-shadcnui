import Image from "next/image";
import { Button } from "../components/ui/button";
import { ModeToggle } from "../components/mode-toggle";

export default function Home() {
  return (
    <main className="flex min-h-screen p-24">
      <Button>Button</Button>
      <ModeToggle />
    </main>
  );
}
