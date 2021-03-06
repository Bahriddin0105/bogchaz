import React, { Component } from "react";
import style from "../css/Steam.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import img1 from "../img/r2.jpg";
import img4 from "../img/r4.jpeg";
import img5 from "../img/r5.jpeg";
// import PacmanLoader from "react-spinners/PacmanLoader";
import Loader from "react-loader-spinner";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Global from "../host/Global";
import { getKg } from "../host/Config";
export default class Bosqich2 extends Component {
  state = {
    loader: true,
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({
        loader: false,
      });
    }, 2000);
    if (Global.kg === null) {
      getKg()
        .then((res) => {
          Global.kg = res.data;
        })
        .catch((err) => console.log(err));
    }
  }

  render() {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 993 },
        items: 1,
      },
      desktop: {
        breakpoint: { max: 992, min: 769 },
        items: 1,
      },
      tablet: {
        breakpoint: { max: 768, min: 567 },
        items: 1,
      },
      mobile: {
        breakpoint: { max: 566, min: 0 },
        items: 1,
      },
    };
    return (
      <div className={style.mat}>
        {this.state.loader ? (
          <div className={style.loader}>
            <Loader
              type="Plane"
              color="#00BFFF"
              height={200}
              width={200}
              visible={this.state.loader}
            />
          </div>
        ) : (
          <div>
            style=
            {{
              background: "rgba(0, 0, 0, 0.3)",
              width: "100%",
            }}
            <Navbar />
            <Carousel
              className={style.sliderHeader}
              responsive={responsive}
              infinite={true}
              autoPlay={this.props.deviceType !== "mobile" ? true : false}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              showDots={false}
            >
              <div>
                <img src={img1} className={style.sliderImage} />
              </div>
              <div>
                <img src={img4} className={style.sliderImage} />
              </div>
              <div>
                <img src={img5} className={style.sliderImage} />
              </div>
            </Carousel>
            <div className={style.matn}>
              <h1>2-BOSQICH</h1>
              <div
                style={{
                  width: "200px",
                  height: "3px",
                  margin: "auto",
                  backgroundColor: "#FF8080",
                }}
              ></div>
              <br />
              <h5>HANDS-ON LEARNING</h5>
              <p>{Global.kg.program2}</p>
            </div>
            <br />
            <Footer />
          </div>
        )}
      </div>
    );
  }
}
