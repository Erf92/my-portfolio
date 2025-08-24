import { FaGithub, FaTelegram } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="flex flex-col gap-4 items-start justify-center">
      <h3 className="text-xl font-bold">Contact</h3>
      <p>Lets build something amazing together!</p>
      <a
        href="mailto:erf92raj@gmail.com"
        className="bg-blue-600 text-white px-2 py-1 rounded-xl hover:bg-blue-800"
      >
        Say Hello
      </a>
      <div className="flex gap-3 ml-1 text-2xl">
        <a
          href="https://github.com/Erf92"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-neutral-800 hover:text-black" />
        </a>
        <a href="https://t.me/erf_92" target="_blank" rel="noopener noreferrer">
          <FaTelegram className="text-blue-500 hover:text-blue-700" />
        </a>
      </div>
    </section>
  );
}
