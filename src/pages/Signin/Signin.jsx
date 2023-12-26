import React from "react";
import classes from "./Signin.module.css";

const Signin = () => {
  return (
    <div className={classes.component}>
      <div className={classes.frame}>
        <div className={classes["text-wrapper"]}>Musicart</div>
        <img className={classes.image} alt="Image" src="image-4.png" />
      </div>
      <div className={classes.div}>
        <div className={classes["text-wrapper-2"]}>Sign in</div>
        <div className={classes.rectangle} />
        <div className={classes["rectangle-2"]} />
        <div className={classes["overlap-group"]}>
          <div className={classes["text-wrapper-3"]}>Continue</div>
        </div>
        <p className={classes.p}>Enter your email or mobile number</p>
        <div className={classes["text-wrapper-4"]}>Password</div>
        <p className={classes["by-continuing-you"]}>
          <span className={classes.span}>By continuing, you agree to Musicart privacy notice and conditions of use.</span>
        </p>
      </div>
      <div className={classes["frame-2"]}>
        <img className={classes.line} alt="Line" src="line-10.svg" />
        <img className={classes.img} alt="Line" src="line-11.svg" />
        <div className={classes["text-wrapper-5"]}>New to Musicart?</div>
      </div>
      <div className={classes["div-wrapper"]}>
        <div className={classes["text-wrapper-6"]}>Create your Musicart account</div>
      </div>
      <div className={classes["frame-3"]}>
        <p className={classes["text-wrapper-7"]}>Musicart | All rights reserved</p>
      </div>
    </div>
  );
};

export default Signin;
