import i1 from "./../assets/img/portfolio/1.png";
import i2 from "./../assets/img/portfolio/2.png";
import i3 from "./../assets/img/portfolio/3.png";
import i4 from "./../assets/img/portfolio/4.png";
import i5 from "./../assets/img/portfolio/5.png";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="pt-36 pb-16 bg-slate-100 dark:bg-slate-800"
    >
      <div className="container mx-auto">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-5">
            <h4 className="font-semibold text-lg text-primary mb-2">
              Portfolio
            </h4>
            <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white">
              Project
            </h2>
            <p className="font-medium text-md text-secondary md:text-lg">
              These are some of the projects I've worked on.
            </p>
          </div>
        </div>

        <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          <div className="mb-12 p-4 md:w-1/2 lg:w-1/4">
            <div className="rounded-md shadow-md overflow-hidden">
              <img src={i5} alt="Malang Music Centre" width="w-full" />
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3 dark:text-white">
              SEMVR Discord Bot
            </h3>
            <p className="font-medium text-base text-secondary">
              Lest have fun with SEMVR. Organise your server and having fun with
              your friend in server. SEMVR can auto welcomer message and more.
              Create a reaction role for your server. And more.
            </p>
          </div>
          <div className="mb-12 p-4 md:w-1/2 lg:w-1/4">
            <div className="rounded-md shadow-md overflow-hidden">
              <img src={i1} alt="Malang Music Centre" width="w-full" />
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3 dark:text-white">
              Malang Music Centre{" "}
            </h3>
            <p className="font-medium text-base text-secondary">
              GIS (Geographic Information System) website provides information
              on various music centers in Malang, be it music studios, clubs,
              pubs, cafes with live music, etc.
            </p>
          </div>
          <div className="mb-12 p-4 md:w-1/2 lg:w-1/4">
            <div className="rounded-md shadow-md overflow-hidden">
              <img src={i2} alt="STXRP" width="w-full" />
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3 dark:text-white">
              Striker Six Roleplay
            </h3>
            <p className="font-medium text-base text-secondary">
              Website for a GTA V Roleplay server, contains server information,
              donations, connect server etc.
            </p>
          </div>
          <div className="mb-12 p-4 md:w-1/2 lg:w-1/4">
            <div className="rounded-md shadow-md overflow-hidden">
              <img src={i3} alt="Luminaire" width="w-full" />
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3 dark:text-white">
              Luminaire Discord Bot
            </h3>
            <p className="font-medium text-base text-secondary">
              Discord bot for a clan game Point Blank to find out some
              information about the game and also some other features, such as
              randomizing a map.
            </p>
          </div>
          <div className="mb-12 p-4 md:w-1/2 lg:w-1/4">
            <div className="rounded-md shadow-md overflow-hidden">
              <img src={i4} alt="Kopi Paste" width="w-full" />
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3 dark:text-white">
              Kopi Paste
            </h3>
            <p className="font-medium text-base text-secondary">
              A website to find out coffee products from Indonesia and various
              types of coffee beans, as well as displaying unique products from
              Kopi Paste itself.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
