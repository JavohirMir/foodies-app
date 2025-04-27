import Link from "next/link";

export default function Meals() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        You are on the meals page!
      </h1>
      <Link href="/meals/share">Go to meals Share Page</Link>
      <Link href="/community">Go to Community Page</Link>
      <Link href="/meals/pasta">Go to Pasta Page</Link>
    </main>
  );
}
