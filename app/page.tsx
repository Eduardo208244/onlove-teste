import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h2>hello world</h2>
      <Link href={"/create"}>Link</Link>
    </div>
  );
}