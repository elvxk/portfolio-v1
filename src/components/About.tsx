const About = () => {
  return (
    <>
      <section
        id="about"
        className="pt-20 pb-20 bg-slate-100 dark:bg-slate-800"
      >
        <div className="container mx-auto">
          <div className="w-full lg:w-2/3 lg:mx-auto px-4">
            <div className="mx-auto text-center mb-16">
              <h4 className="font-bold uppercase text-primary text-lg mb-3">
                About Me
              </h4>
              <h2 className="font-bold text-dark text-3xl mb-5 lg:text-4xl dark:text-white">
                Introduce
              </h2>
              <p className="font-medium text-base text-secondary md:text-lg lg:text-xl">
                My name is Pradipta R. Sandri, and my nickname is elvxk on
                several social media. I am a fresh graduate with a bachelor's
                degree in informatics engineering, able to work individually or
                collaborate in a team. I have several skills that can be relied
                on in this era, such as web development, frontend development,
                music production and others. I am interested in the IT industry
                with my focus on web development and frontend development.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" className="py-20 dark:bg-dark">
        <div className="container mx-auto">
          <div className="w-full lg:w-2/3 lg:mx-auto px-4">
            <div className="mx-auto text-center mb-16 pt-2">
              <h4 className="font-semibold text-lg text-primary">Personal</h4>
              <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white pb-2">
                Skills
              </h2>
              <div className="w-full px-4 flex flex-wrap justify-center  xl:mx-auto">
                <div className="text-center px-5 py-2 lg:px-10">
                  <img
                    className="h-8 lg:h-9 lg:mb-3 mb-1 mx-auto"
                    src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png"
                    alt="html"
                  />
                  <p className="font-medium text-sm text-secondary lg:text-md">
                    HTML
                  </p>
                </div>
                <div className="text-center  px-5 py-2 lg:px-10">
                  <img
                    className="h-8 lg:h-9 lg:mb-3 mb-1 mx-auto"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
                    alt="css"
                  />
                  <p className="font-medium text-sm text-secondary lg:text-md">
                    CSS
                  </p>
                </div>
                <div className="text-center   px-5 py-2 lg:px-10">
                  <img
                    className="h-8 lg:h-9 lg:mb-3 mb-1 mx-auto"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"
                    alt="python"
                  />
                  <p className="font-medium text-sm text-secondary lg:text-md">
                    PYTHON
                  </p>
                </div>
                <div className="text-center   px-5 py-2 lg:px-10">
                  <img
                    className="h-8 lg:h-9 lg:mb-3 mb-1 mx-auto"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png"
                    alt="php"
                  />
                  <p className="font-medium text-sm text-secondary lg:text-md">
                    PHP
                  </p>
                </div>
                <div className="text-center   px-5 py-2 lg:px-10">
                  <img
                    className="h-8 lg:h-9 lg:mb-3 mb-1 mx-auto"
                    src="https://cdn.freebiesupply.com/logos/large/2x/codeigniter-logo-png-transparent.png"
                    alt="CodeIgniter"
                  />
                  <p className="font-medium text-sm text-secondary lg:text-md">
                    CODEIGNITER
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
