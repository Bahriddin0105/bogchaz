import React, { Component } from "react";
import styles from "../css/Navbar.module.css";
import {
  FaHome,
  FaPhoneAlt,
  FaInstagram,
  FaTelegramPlane,
  FaBars,
  FaInstagramSquare,
  FaFacebookSquare,
  FaFacebook,
} from "react-icons/fa";
import rasm1 from "../img/ftr-logo.png";
import rasm5 from "../img/logo-dark.png";
import { BsFillTriangleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import "antd/dist/antd.css";
import "./nav.css";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { AiOutlineClose } from "react-icons/ai";
import Global from "../host/Global";
import { getKg } from "../host/Config";
export default class Dnavbar extends Component {
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
    window.addEventListener("scroll", this.change);
    if (Global.kg === null) {
      getKg()
        .then((res) => {
          Global.kg = res.data;
        })
        .catch((err) => console.log(err));
    }
  }
  handleClick = (e) => {
    console.log("click ", e);
  };
  render() {
    const { SubMenu } = Menu;
    return (
      <div>
        <div className={styles.one}>
          <div className={this.state.nav ? styles.nav1_active : styles.nav1}>
            <div className={this.state.nav ? styles.logo1 : styles.logo}>
              {this.state.nav ? <img src={rasm5} /> : <img src={rasm1} />}
              <div className={styles.navbar}>
                <span>
                  <a href="#">
                    <FaHome style={{ color: "#FF8080", fontSize: "23px" }} />
                  </a>
                </span>
                <span style={{ fontSize: "25px" }}>|</span>
                <span className={styles.sub1}>
                  <a href="#bizhaqimizda">Biz haqimizda</a>
                </span>
                <div className={styles.subNav1}>
                  <span>
                    <BsFillTriangleFill className={styles.icon1} />
                  </span>
                  <p>
                    <a href="#bizningtarix">Bizning tarix</a>
                  </p>
                  <p>
                    <a href="#negabiz">Nima uchun biz</a>
                  </p>
                  <p>
                    <a href="#rahbariyat">Rahbariyat</a>
                  </p>
                  <p>
                    <a href="#tarbiyachilar">Tarbiyalovchilar</a>
                  </p>
                  <p>
                    <Link to="/oshxona/uz">Oshxona</Link>
                  </p>
                  {/* <p>
                    <Link to="/galereya/uz">Galereya</Link>
                  </p> */}
                  {/* <p>
                    <Link to="/manzil/uz">Manzil</Link>
                  </p> */}
                </div>
                <span style={{ fontSize: "25px" }}>|</span>
                <span className={styles.sub2}>
                  <a href="#dasturlar">Dasturlar</a>
                </span>
                <div className={styles.subNav2}>
                  <span>
                    <BsFillTriangleFill className={styles.icon2} />
                  </span>
                  <p>
                    <a href="#dasturlar1">1-bosqich</a>
                  </p>
                  <p>
                    <a href="#dasturlar2">2-bosqich</a>
                  </p>
                  <p>
                    <a href="#dasturlar3">3-bosqich</a>
                  </p>
                </div>
                <span style={{ fontSize: "25px" }}>|</span>
                <span>
                  <Link to="/curriculm/uz">Qabul</Link>
                </span>
                <span style={{ fontSize: "25px" }}>|</span>
                <span>
                  <a href="#yangilik">Yangiliklar</a>
                </span>
                <span style={{ fontSize: "25px" }}>|</span>
                <span>
                  <Link to="/tadbirlar/uz">Tadbirlar</Link>
                </span>
                <span style={{ fontSize: "25px" }}>|</span>
                <span>
                  <Link to="/xarita">Xarita</Link>
                </span>
                <span style={{ marginLeft: "40px" }}>
                  <a href={`tel: ${Global.kg !== null ? Global.kg.phone : ""}`}>
                    <FaPhoneAlt
                      style={{ color: "#FF8080", fontSize: "18px" }}
                    />
                  </a>
                </span>
                <span>
                  <a href={Global.kg !== null ? Global.kg.telegram : ""}>
                    <FaTelegramPlane
                      style={{ color: "#FF8080", fontSize: "23px" }}
                    />
                  </a>
                </span>
                <span>
                  <a href={Global.kg !== null ? Global.kg.instagram : ""}>
                    <FaInstagram
                      style={{ color: "#FF8080", fontSize: "23px" }}
                    />
                  </a>
                </span>
                <span>
                  <a href={Global.kg !== null ? Global.kg.facebook : ""}>
                    <FaFacebook
                      style={{ color: "#FF8080", fontSize: "23px" }}
                    />
                  </a>
                </span>
                {/* <Link to="/login">
                  <button
                    className={this.state.nav ? styles.btn1 : styles.btn2}
                  >
                    Kirish
                  </button>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        {/* menu */}
        {/*  */}
      </div>
    );
  }
}
