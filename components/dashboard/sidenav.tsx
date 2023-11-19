import NavLinks from "./nav-links"
import User from "./user"

export default function Sidenav() {
  return (
    <div className="sticky top-10">
      <User />
      <NavLinks />
    </div>
  )
}
