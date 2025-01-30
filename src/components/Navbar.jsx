import brandLogo from "/images/brand_logo.png";

function Navbar() {
  return (
    <>
      <nav className="container">
        <div className="logo">
          <img src={brandLogo} alt="brand logo" />
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>

        <button>Login</button>
      </nav>
    </>
  );
}
export default Navbar;
