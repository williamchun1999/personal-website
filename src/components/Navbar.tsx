export const Navbar = () => {
  return (
    <header className="flex bg-grey">
      <a href="index.html" className="basis-1/4">William Chun</a>
      <nav className="basis-3/4">
        <ul className="flex justify-end">
          <li><a href="left-sidebar.html">About Me</a></li>
          <li><a href="right-sidebar.html">Experience</a></li>
          <li><a href="no-sidebar.html">Projects</a></li>
        </ul>
      </nav>
    </header>
  )
}
