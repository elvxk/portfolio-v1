const BackToTop = () => {
  return (
    <a
      href="#home"
      className="fixed z-[9999]  justify-center items-center bottom-4 right-4 h-12 w-12 p-4 rounded-full bg-primary"
      id="to-top"
    >
      <span className="block w-3 h-3 border-t-2  border-l-2 rotate-45 mt-1 hover:animate-pulse"></span>
    </a>
  );
};
export default BackToTop;
