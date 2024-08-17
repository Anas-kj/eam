"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <h1>Home</h1>
      <button className="block text-red-50" onClick={() => router.push("/about")}>Click Button</button>
    </main>
  );
}
