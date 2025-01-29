import "./App.css";

function App() {
  return (
    <>
      <nav className="container">
        <div className="logo">
          <img src="images/brand_logo.png" alt="logo" />
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>

        <button>Login</button>
      </nav>
      <main className="hero container">
        <div className="hero-content ">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="hero-btns">
            <button>Shop Now</button>
            <button className="category-btn">Category</button>
          </div>
          <div className="shopping">
            <p>Also Available On</p>
            <div className="brand-icons">
              <img src="/images/flipkart.png" alt="flipkart-logo" />
              <img src="/images/amazon.png" alt="amazon-logo" />
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/shoe_image.png" alt="shoe" />
        </div>
      </main>
    </>
  );
}

export default App;
