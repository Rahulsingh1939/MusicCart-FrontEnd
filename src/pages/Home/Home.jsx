import React from "react";
import HomeCSS from "./Home.module.css";
import { useAuth } from "../../context/api";
const Home = () => {
  
  const [auth,setAuth] = useAuth();
  return (
    <div className={HomeCSS.element}>
      <div className={HomeCSS.div}>
        <div className={HomeCSS["text-wrapper-6"]}>Musicart</div>
        <div className={HomeCSS["text-wrapper-7"]}>Home</div>
        <img className={HomeCSS.image} alt="Image" src="https://c.animaapp.com/aUDSW2NR/img/image-4@2x.png" />
        <div className={HomeCSS["overlap-2"]}>
          <div className={HomeCSS.rectangle} />
          <img
            className={HomeCSS["image-removebg"]}
            alt="Image removebg"
            src="https://c.animaapp.com/aUDSW2NR/img/image-5-removebg-preview-1.png"
          />
          <p className={HomeCSS["grab-upto-off-on"]}>
            Grab upto 50% off on
            <br />
            Selected headphones
          </p>
          <div className={HomeCSS["overlap-group-wrapper"]}>
            <div className={HomeCSS["div-wrapper"]}>
              <div className={HomeCSS["text-wrapper-8"]}>Buy Now</div>
            </div>
          </div>
        </div>
        <div className={HomeCSS["overlap-3"]}>
          <div className={HomeCSS["text-wrapper-9"]}>Search Product</div>
          <img
            className={HomeCSS["ion-search-outline"]}
            alt="Ion search outline"
            src="https://c.animaapp.com/aUDSW2NR/img/ion-search-outline.svg"
          />
        </div>
        <div className={HomeCSS["overlap-4"]}>
          <div className={HomeCSS["text-wrapper-10"]}>Headphone type</div>
          <img className={HomeCSS.vector} alt="Vector" src="https://c.animaapp.com/aUDSW2NR/img/vector-4.svg" />
        </div>
        <img
          className={HomeCSS["material-symbols"]}
          alt="Material symbols"
          src="https://c.animaapp.com/aUDSW2NR/img/material-symbols-grid-view-rounded.svg"
        />
        <img
          className={HomeCSS["material-symbols-2"]}
          alt="Material symbols"
          src="https://c.animaapp.com/aUDSW2NR/img/material-symbols-view-list-rounded.svg"
        />
        <div className={HomeCSS["overlap-5"]}>
          <div className={HomeCSS["text-wrapper-11"]}>Company</div>
          <img className={HomeCSS["vector-2"]} alt="Vector" src="https://c.animaapp.com/aUDSW2NR/img/vector-3.svg" />
        </div>
        <div className={HomeCSS["overlap-6"]}>
          <div className={HomeCSS["text-wrapper-12"]}>Colour</div>
          <img className={HomeCSS["vector-3"]} alt="Vector" src="https://c.animaapp.com/aUDSW2NR/img/vector-2.svg" />
        </div>
        <div className={HomeCSS["overlap-7"]}>
          <div className={HomeCSS["text-wrapper-13"]}>Price</div>
          <img className={HomeCSS["vector-4"]} alt="Vector" src="https://c.animaapp.com/aUDSW2NR/img/vector-2.svg" />
        </div>
        <div className={HomeCSS["overlap-8"]}>
          <img className={HomeCSS["image-2"]} alt="Image" src="https://c.animaapp.com/aUDSW2NR/img/image-5@2x.png" />
          <div className={HomeCSS["rectangle-2"]} />
        </div>
        <div className={HomeCSS["image-wrapper"]}>
          <img className={HomeCSS["image-3"]} alt="Image" src="https://c.animaapp.com/aUDSW2NR/img/image-6@2x.png" />
        </div>
        <div className={HomeCSS["img-wrapper"]}>
          <img className={HomeCSS["image-2"]} alt="Image" src="https://c.animaapp.com/aUDSW2NR/img/image-12@2x.png" />
        </div>
        <div className={HomeCSS["overlap-9"]}>
          <img className={HomeCSS["image-2"]} alt="Image" src="https://c.animaapp.com/aUDSW2NR/img/image-13@2x.png" />
        </div>

        
    <pre>{JSON.stringify(auth,null,4)}</pre>

        <div className={HomeCSS["group-2"]}>
          <div className={HomeCSS["text-wrapper-14"]}>boAt Rockerz 551ANC</div>
          <div className={HomeCSS["text-wrapper-15"]}>Price - ₹ 3,000</div>
          <div className={HomeCSS["text-wrapper-16"]}>Blue | On-ear headphone</div>
        </div>
        <div className={HomeCSS["group-3"]}>
          <div className={HomeCSS["text-wrapper-14"]}>Sony WH-CH720N</div>
          <div className={HomeCSS["text-wrapper-15"]}>Price - ₹ 3,500</div>
          <div className={HomeCSS["text-wrapper-16"]}>Black | Over-ear headphone</div>
        </div>
        <div className={HomeCSS["group-4"]}>
          <div className={HomeCSS["text-wrapper-14"]}>JBL C100SI</div>
          <div className={HomeCSS["text-wrapper-15"]}>Price - ₹ 599</div>
          <div className={HomeCSS["text-wrapper-16"]}>Black | In-ear headphone</div>
        </div>
        <div className={HomeCSS["group-5"]}>
          <div className={HomeCSS["text-wrapper-14"]}>boAt Rockerz 400</div>
          <div className={HomeCSS["text-wrapper-15"]}>Price - ₹ 1,500</div>
          <div className={HomeCSS["text-wrapper-16"]}>White | On-ear headphone</div>
        </div>
        <div className={HomeCSS["overlap-10"]}>
          <img className={HomeCSS["image-4"]} alt="Image" src="https://c.animaapp.com/aUDSW2NR/img/image-14@2x.png" />
        </div>
        <div className={HomeCSS["overlap-11"]}>
          <img className={HomeCSS["image-5"]} alt="Image" src="https://c.animaapp.com/aUDSW2NR/img/image-15@2x.png" />
        </div>
        <div className={HomeCSS["overlap-12"]}>
          <img className={HomeCSS["image-2"]} alt="Image" src="https://c.animaapp.com/aUDSW2NR/img/image-16@2x.png" />
        </div>
        <div className={HomeCSS["overlap-13"]}>
          <img className={HomeCSS["image-2"]} alt="Image" src="https://c.animaapp.com/aUDSW2NR/img/image-17@2x.png" />
        </div>
        <div className={HomeCSS["group-6"]}>
          <div className={HomeCSS["text-wrapper-17"]}>boAt BassHeads 100</div>
          <div className={HomeCSS["text-wrapper-15"]}>Price - ₹ 700</div>
          <div className={HomeCSS["text-wrapper-16"]}>Black | In-ear headphone</div>
        </div>
        <div className={HomeCSS["group-7"]}>
          <div className={HomeCSS["text-wrapper-14"]}>Marshall Major IV</div>
          <div className={HomeCSS["text-wrapper-15"]}>Price - ₹ 13,000</div>
          <div className={HomeCSS["text-wrapper-16"]}>Brown | On-ear headphone</div>
        </div>
        <div className={HomeCSS["group-8"]}>
          <div className={HomeCSS["text-wrapper-14"]}>ZEBRONICS Zeb-Thunder</div>
          <div className={HomeCSS["text-wrapper-15"]}>Price - ₹ 600</div>
          <div className={HomeCSS["text-wrapper-16"]}>Blue | Over-ear headphone</div>
        </div>
        <div className={HomeCSS["group-9"]}>
          <div className={HomeCSS["text-wrapper-14"]}>Sony Wh-Ch510</div>
          <div className={HomeCSS["text-wrapper-15"]}>Price - ₹ 3,990</div>
          <div className={HomeCSS["text-wrapper-16"]}>Blue | On-ear headphone</div>
        </div>
        <div className={HomeCSS["overlap-14"]}>
          <img className={HomeCSS["image-2"]} alt="Image" src="https://c.animaapp.com/aUDSW2NR/img/image-18@2x.png" />
        </div>
        <div className={HomeCSS["overlap-15"]}>
          <img className={HomeCSS["image-2"]} alt="Image" src="https://c.animaapp.com/aUDSW2NR/img/image-19@2x.png" />
        </div>
        <div className={HomeCSS["overlap-16"]}>
          <img className={HomeCSS["image-6"]} alt="Image" src="https://c.animaapp.com/aUDSW2NR/img/image-20@2x.png" />
        </div>
        <div className={HomeCSS["overlap-17"]}>
          <img className={HomeCSS["image-7"]} alt="Image" src="https://c.animaapp.com/aUDSW2NR/img/image-6@2x.png" />
        </div>
        <div className={HomeCSS["group-10"]}>
          <div className={HomeCSS["text-wrapper-14"]}>ZEBRONICS Zeb-Bang</div>
          <div className={HomeCSS["text-wrapper-15"]}>Price - ₹ 699</div>
          <div className={HomeCSS["text-wrapper-16"]}>White | Over-ear headphone</div>
        </div>
        <div className={HomeCSS["group-11"]}>
          <div className={HomeCSS["text-wrapper-14"]}>PTron Tangent Duo</div>
          <div className={HomeCSS["text-wrapper-15"]}>Price - ₹ 500</div>
          <div className={HomeCSS["text-wrapper-16"]}>Blue | In-ear headphone</div>
        </div>
        <div className={HomeCSS["overlap-18"]}>
          <img className={HomeCSS["image-8"]} alt="Image" src="https://c.animaapp.com/aUDSW2NR/img/image-22@2x.png" />
        </div>
        <div className={HomeCSS["group-12"]}>
          <div className={HomeCSS["text-wrapper-14"]}>boAt Rockerz 558</div>
          <div className={HomeCSS["text-wrapper-15"]}>Price - ₹ 2000</div>
          <div className={HomeCSS["text-wrapper-16"]}>Black | Over-ear headphone</div>
        </div>
        <div className={HomeCSS["group-13"]}>
          <div className={HomeCSS["text-wrapper-14"]}>PTron Boom Ultima</div>
          <div className={HomeCSS["text-wrapper-15"]}>Price - ₹ 300</div>
          <div className={HomeCSS["text-wrapper-16"]}>Blue | In-ear headphone</div>
        </div>
        <div className={HomeCSS["group-14"]}>
          <div className={HomeCSS["text-wrapper-14"]}>Sony WH-CH720N</div>
          <div className={HomeCSS["text-wrapper-15"]}>Price - ₹ 10,000</div>
          <div className={HomeCSS["text-wrapper-16"]}>Blue | Over-ear headphone</div>
        </div>
        <div className={HomeCSS["overlap-wrapper"]}>
          <div className={HomeCSS["overlap-19"]}>
            <div className={HomeCSS["text-wrapper-18"]}>Sort by : Featured</div>
            <img className={HomeCSS.vector} alt="Vector" src="https://c.animaapp.com/aUDSW2NR/img/vector.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
