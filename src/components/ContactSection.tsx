import { FaGithub, FaTelegram } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="flex flex-col gap-4 items-start justify-center">
      <h3 className="text-xl font-bold">Contact</h3>
      <p>Lets build something amazing together!</p>
      <button className="bg-blue-500 text-white px-2 py-1 rounded-xl">
        Say Hello
      </button>
      <div className="flex gap-3 ml-1 text-2xl">
        <FaGithub />
        <FaTelegram />
      </div>
    </section>
  );
}
