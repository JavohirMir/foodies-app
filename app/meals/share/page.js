import Link from "next/link";

export default function Share() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        You are on the share page!
      </h1>
      <Link href="..">Go to meals Page</Link>
      <Link href="/community">Go to Community Page</Link>
      <Link href="/meals/pasta">Go to Pasta Page</Link>
    </main>
  );
}
