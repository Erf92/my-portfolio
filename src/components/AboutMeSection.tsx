export default function AboutMeSection() {
  return (
    <section className="flex flex-col gap-4 items-start justify-center">
      <h3 className="text-xl font-bold">About Me</h3>
      <p>
        Hi, Im Erfan, a passionate Frontend Developer focused on building
        modern, responsive, and user-friendly web applications. My skills
        include HTML, CSS, JavaScript, and modern frameworks like React,
        Next.js, TypeScript, and TailwindCSS. I love learning new technologies,
        improving user experience, and working in collaborative environments to
        create high-quality products.
      </p>
      <ol className="list-disc pl-5">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Tailwind</li>
        <li>Git/GitHub</li>
      </ol>
    </section>
  );
}
