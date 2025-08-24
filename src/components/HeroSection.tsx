import Image from "next/image";
import Prof from "../assets/profile.png";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex gap-10 items-center justify-center">
      <div className="w-40 h-40 rounded-full overflow-hidden">
        <Image src={Prof} width={200} height={200} alt="profile" />
      </div>
      <div className="flex flex-col gap-3 items-start">
        <div className="flex flex-col">
          <h3 className="text-3xl">Hi Im Erfan</h3>
          <p>Frontend Developer | React & Next.js</p>
        </div>
        <Link
          href="#projects"
          className="bg-neutral-700 text-white px-2 py-1 rounded-xl"
        >
          View My Work
        </Link>
      </div>
    </section>
  );
}
