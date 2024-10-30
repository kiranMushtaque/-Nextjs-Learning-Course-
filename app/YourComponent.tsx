import Link from "next/link";

export default function YourComponent() {
  return (
    <div>
      <h1>Welcome to My Dashboard</h1>
      <Link href="/some-page">Go to Some Page</Link>
    </div>
  );
}
