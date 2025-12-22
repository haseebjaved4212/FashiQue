import MiddleNav from "./MiddleNav";
import BottomNav from "./BottomNav";

const Navbar = () => {
  return (
    <>
    <header className="w-full">
      <div className="hidden lg:block">
        <MiddleNav />
      </div>
        <BottomNav />
    </header>
    </>
  )
}

export default Navbar