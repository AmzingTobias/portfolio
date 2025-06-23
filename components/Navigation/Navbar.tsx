import HorizontalNavbar from "@/components/Navigation/HorizontalNavbar";
import VerticalNavbar from "@/components/Navigation/VerticalNavbar";

const Navbar = () => {
  return (
    <>
      <VerticalNavbar className="flex md:hidden" />
      <HorizontalNavbar className="hidden md:flex" />
    </>
  );
};

export default Navbar;
