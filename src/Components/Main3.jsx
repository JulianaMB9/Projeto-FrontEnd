import style from "./Main3.module.css";
import {
  TwitterLogo,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  Calculator
} from "phosphor-react";


function Main3() {
  return (
    <div className={style.main3}>
      <div className={style.content}>
      <Calculator size={38} />
      </div>
      <div>
        <a href="">
          <TwitterLogo size={36} color="#ffffff" />
        </a>
        <a href="">
          <LinkedinLogo size={36} color="#ffffff" />
        </a>
        <a href="">
          <InstagramLogo size={36} color="#ffffff" />
        </a>
        <a href="">
          <FacebookLogo size={36} color="#ffffff" />
        </a>
      </div>
    </div>
  );
}

export default Main3;
