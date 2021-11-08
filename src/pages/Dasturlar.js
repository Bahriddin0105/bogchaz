import React, { Component } from "react";
import style from "../css/Dasturlar.module.css";
import Footer from "./Footer";
import rasm1 from "../img/logo-dark.png";
import rasm5 from "../img/logo-dark.png";
import img1 from "../img/q1.jpg";
import img2 from "../img/q2.jpg";
import img3 from "../img/q3.jpg";
import img from "../img/border.png";
import Navbar from "./Navbar";
import { BsFillTriangleFill } from "react-icons/bs";
import {
  FaHome,
  FaPhoneAlt,
  FaInstagram,
  FaTelegramPlane,
  FaBars,
  FaFacebook,
} from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Menu } from "antd";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import Global from "../host/Global";
import { getKg } from "../host/Config";

export default class Dasturlar extends Component {
  state = {
    nav: false,
    open: false,
    close: false,
  };
  change = () => {
    if (window.scrollY >= 200) {
      this.setState({
        nav: true,
      });
    } else {
      this.setState({
        nav: false,
      });
    }
  };
  openNav = () => {
    this.setState({
      open: true,
    });
  };
  closeNav = () => {
    this.setState({
      open: false,
    });
  };
  componentDidMount() {
    if (Global.kg === null) {
      getKg()
        .then((res) => {
          Global.kg = res.data;
        })
        .catch((err) => console.log(err));
    }
    window.addEventListener("scroll", this.change);

    // console.log("Global.kg.program1");
    // console.log(Global.kg.program1);
  }
  handleClick = (e) => {
    console.log("click ", e);
  };
  render() {
    const { SubMenu } = Menu;

    return (
      <>
        <div className={style.mat}>
          <Navbar />
          <h2 className={style.sarlavha}>Dasturlar</h2>
          <div
            style={{
              width: "200px",
              height: "2px",
              margin: "auto",
              backgroundColor: "#FF8080",
            }}
          ></div>
          <div className={style.oyna}>
            <div className={style.rasm}>
              <img
                src={
                  Global.kg.program1_img == null ? img1 : Global.kg.program1_img
                }
              />
            </div>
            <div className={style.border}>
              <img src={img} />
            </div>
            <div className={style.content}>
              <h4>1-bosqich</h4>
              <div
                style={{
                  width: "140px",
                  height: "1px",
                  backgroundColor: "#FF8080",
                  margin: "16px 0px 12px",
                }}
              ></div>
              <p>{Global.kg.program1}</p>
              <span>
                <Link to="/dastur_1/uz">Batafsil</Link>
              </span>
            </div>
          </div>
          <div className={style.oyna}>
            <div className={style.content}>
              <h4>2-bosqich</h4>
              <div
                style={{
                  width: "140px",
                  height: "1px",
                  backgroundColor: "#FF8080",
                  margin: "16px 0px 12px",
                }}
              ></div>
              <p>{Global.kg.program2}</p>
              <span>
                <Link to="/dastur_2/uz">Batafsil</Link>
              </span>
            </div>
            <div className={style.border}>
              <img src={img} />
            </div>
            <div className={style.rasm}>
              <img
                src={
                  Global.kg.program1_img == null ? img2 : Global.kg.program2_img
                }
              />
            </div>
          </div>
          <div className={style.oyna}>
            <div className={style.rasm}>
              <img
                src={
                  Global.kg.program1_img == null ? img3 : Global.kg.program3_img
                }
              />
            </div>
            <div className={style.border}>
              <img src={img} />
            </div>
            <div className={style.content}>
              <h4>3-bosqich</h4>
              <div
                style={{
                  width: "140px",
                  height: "1px",
                  backgroundColor: "#FF8080",
                  margin: "16px 0px 12px",
                }}
              ></div>
              <p>{Global.kg.program3}</p>
              <span>
                <Link to="/dastur_3/uz">Batafsil</Link>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
