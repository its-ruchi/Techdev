import React from 'react'
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,
  AiFillYoutube,
  AiFillInstagram,
 AiFillAmazonCircle,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
   <div className="home" id='home'>
    <main>
      <h1>TechDev</h1>
      <p>Solution to all your problems</p>  
    </main>
   </div>
   <div className="home2">
    <img src={vg} alt="Graphics"/>
 
   <div>
    <p>    We are your one and only solution to the tech problems you face
            every day.
           We are leading tech company whose aim is to increase the
            problem solving ability in children.</p>
   </div>
   </div>
   <div className="home3" id="about">
    <div>
      <h1>Who we are?</h1>
      <p>At TechDev, we revolutionize the way you approach coding challenges by providing swift and effective solutions to all your programming problems with just one prompt.
         Our cutting-edge platform harnesses advanced algorithms and a team of seasoned experts to decode your coding issues in real-time, ensuring you get accurate and actionable solutions without the hassle of prolonged troubleshooting. 
         Whether you're grappling with complex bugs, seeking optimization tips, or exploring innovative coding strategies, we offer personalized, high-quality assistance tailored to your needs.
          With our commitment to excellence and efficiency, you can focus on what you do best—creating exceptional software—while we handle the intricacies of your coding concerns. 
          Say goodbye to endless debugging sessions and hello to seamless coding with TechDev, where your coding problems meet their match in a single prompt.</p>
    </div>
   </div>
   <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;