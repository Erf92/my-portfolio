export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="flex flex-col gap-4 items-start justify-center"
    >
      <h3 className="text-xl font-bold">Projects</h3>
      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-1 shadow-xl rounded-xl p-5 flex flex-col gap-3 justify-start items-start">
          <h4 className="font-semibold">Todo List App</h4>
          <p>A task management app built with with React and TypeScript</p>
          <div className="flex gap-3">
            <span className="bg-neutral-200 rounded-lg p-1 text-sm">React</span>
            <span className="bg-neutral-200 rounded-lg p-1 text-sm">
              TypeScript
            </span>
          </div>
          <div className="flex items-center gap-1">
            <button className="p-2 border border-neutral-200 rounded-xl font-semibold">
              Demo
            </button>
            <button className="p-2 border border-neutral-200 rounded-xl font-semibold">
              Code
            </button>
          </div>
        </div>
        <div className="col-span-1 shadow-xl rounded-xl p-5 flex flex-col gap-3 justify-start items-start">
          <h4 className="font-semibold">E-commerce Demo</h4>
          <p>
            A modern e-commerce demo built with Next.js and TanStack Query.
            Features product listing, filtering, sorting, and detailed product
            pages.
          </p>
          <div className="flex gap-3">
            <span className="bg-neutral-200 rounded-lg p-1 text-sm">
              Next.js
            </span>
            <span className="bg-neutral-200 rounded-lg p-1 text-sm">
              TypeScript
            </span>
            <span className="bg-neutral-200 rounded-lg p-1 text-sm">
              Tanstack Query
            </span>
          </div>
          <div className="flex items-center gap-1">
            <button className="p-2 border border-neutral-200 rounded-xl font-semibold">
              Demo
            </button>
            <button className="p-2 border border-neutral-200 rounded-xl font-semibold">
              Code
            </button>
          </div>
        </div>
        <div className="col-span-1 shadow-xl rounded-xl p-5 flex flex-col gap-3 justify-start items-start">
          <h4 className="font-semibold">Portfolio Website</h4>
          <p>
            A personal portfolio website built with Next.js and Tailwind CSS
          </p>
          <div className="flex gap-3">
            <span className="bg-neutral-200 rounded-lg p-1 text-sm">
              Next.js
            </span>
            <span className="bg-neutral-200 rounded-lg p-1 text-sm">
              Tailwind
            </span>
          </div>
          <div className="flex items-center gap-1">
            <button className="p-2 border border-neutral-200 rounded-xl font-semibold">
              Demo
            </button>
            <button className="p-2 border border-neutral-200 rounded-xl font-semibold">
              Code
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
