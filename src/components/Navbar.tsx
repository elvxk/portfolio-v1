import logo from "./../assets/img/logo.png";
import Switcher from "./Switcher";
const Navbar = () => {
  return (
    <header className="bg-transparent top-0 left-0 w-full fixed items-center z-10">
      <div className="container mx-auto">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <a
              href="#home"
              className="font-bold text-lg text-primary block py-2"
            >
              <img src={logo} width="50" />
            </a>
          </div>
          <div className="flex items-center px-4">
            <button
              id="burger"
              name="burger"
              type="button"
              className="block absolute right-4 lg:hidden"
            >
              <span className="burger-line transition duration-300 ease-in-out origin-top-left"></span>
              <span className="burger-line transition duration-300 ease-in-out"></span>
              <span className="burger-line transition duration-300 ease-in-out origin-bottom-left "></span>
            </button>

            <nav
              id="nav-menu"
              className="hidden absolute py-2 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full
                    lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none dark:bg-dark lg:dark:bg-transparent dark:shadow-slate-500"
            >
              <ul className="block lg:flex">
                <li className="group">
                  <a
                    href="#home"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white"
                  >
                    Home
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#about"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white"
                  >
                    About
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#portfolio"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white"
                  >
                    Portfolio
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#contact"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white"
                  >
                    Contact
                  </a>
                </li>
                <li className="flex items-center pl-8 mt-3 lg:mt-0">
                  <Switcher />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
