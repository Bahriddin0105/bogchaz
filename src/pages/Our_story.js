import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import AwesomeSlider from 'react-awesome-slider';
// import AwsSliderStyles from 'react-awesome-slider/src/styles.scss';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../css/about_us.module.css";
import story1 from "../img/ourstory3.jpg";
import story2 from "../img/ourstorybanner.jpg";
// import PacmanLoader from "react-spinners/PacmanLoader";
import Loader from "react-loader-spinner";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Global from "../host/Global";
import { getKg } from "../host/Config";

export default class Our_story extends Component {
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
      <div>
        {this.state.loader ? (
          <div className={styles.loader}>
            <Loader
              type="Plane"
              color="#00BFFF"
              height={200}
              width={200}
              visible={this.state.loader}
            />
          </div>
        ) : (
          <div
            style={{
              background: "rgba(0, 0, 0, 0.3)",
              width: "100%",
            }}
          >
            <header>
              <div className={styles.header}>
                <Navbar />
                <Carousel
                  className={styles.sliderHeader}
                  responsive={responsive}
                  infinite={true}
                  autoPlay={this.props.deviceType !== "mobile" ? true : false}
                  autoPlaySpeed={3000}
                  keyBoardControl={false}
                  showDots={false}
                >
                  <div>
                    <img src={story1} className={styles.headerImage} />
                  </div>
                  <div>
                    <img src={story2} className={styles.headerImage} />
                  </div>
                </Carousel>
              </div>
            </header>
            <Container>
              <body>
                <div className={styles.body}>
                  <div className={styles.title}>
                    <h1>Bizning tarix</h1>
                  </div>
                  <div className={styles.text}>
                    <p>{Global.kg.our_history}</p>
                  </div>
                  <br />
                </div>
              </body>
            </Container>
            <Footer />
          </div>
        )}
      </div>
    );
  }
}
