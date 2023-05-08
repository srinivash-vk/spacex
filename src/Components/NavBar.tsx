import { Outlet } from "react-router-dom";
import NavBarMenu from "./NavBarMenu";

export default function NavBar() {

  return (
   <section className="bg-black bg-center bg-cover">
    <NavBarMenu/>
    <Outlet/>
   </section>
  );
}
