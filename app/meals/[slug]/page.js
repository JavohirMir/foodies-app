import Link from "next/link";

export default function Home({ params }) {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        You are on {params.slug}
      </h1>
      <Link href="/meals/share">Go to meals Share Page</Link>
      <Link href="/community">Go to Community Page</Link>
      <Link href="/meals">Go to Meals Page</Link>
    </main>
  );
}
