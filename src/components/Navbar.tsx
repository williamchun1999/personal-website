export const Navbar = () => {
  return (
    <header className="w-full flex bg-neutral-800 text-2xl h-16 sticky items-center px-8">
      <a href="index.html" className="basis-1/4 align-middle">William Chun</a>
      <nav className="basis-3/4">
        <ul className="flex justify-end">
          <li className="pl-8"><a href="#about">About Me</a></li>
          <li className="pl-8"><a href="#experiences">Experience</a></li>
          <li className="pl-8"><a href="#projects">Projects</a></li>
        </ul>
      </nav>
    </header>
  )
}
