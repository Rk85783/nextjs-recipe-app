import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
			<h1 className="">Welcome to Recipe App</h1>
			<Link href={'/recipe-list'}>Explore Recipes</Link>
		</div>
  );
}
