import flipkart from "/images/flipkart.png";
import amazon from "/images/amazon.png";
import shoe from "/images/shoe_image.png";

function Hero() {
  return (
    <>
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
              <img src={flipkart} alt="flipkart-logo" />
              <img src={amazon} alt="amazon-logo" />
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src={shoe} alt="shoe" />
        </div>
      </main>
    </>
  );
}
export default Hero;
