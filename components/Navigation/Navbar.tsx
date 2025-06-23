import HorizontalNavbar from "@/components/Navigation/HorizontalNavbar";
import VerticalNavbar from "@/components/Navigation/VerticalNavbar";

const Navbar = () => {
  return (
    <>
      <VerticalNavbar className="flex md:hidden" />
      <div className="hidden md:flex">
        <HorizontalNavbar />
      </div>
    </>
  );
};

export default Navbar;
