import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import styles from "../css/news.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import PacmanLoader from "react-spinners/PacmanLoader";
import Loader from "react-loader-spinner";
import news1 from "../img/kinder6.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBCardFooter,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { BsGeoAlt } from "react-icons/bs";
import "react-multi-carousel/lib/styles.css";
import { FaCalendarAlt } from "react-icons/fa";
export default class Dashboardtadbir extends Component {
  render() {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 1,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 1,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1,
      },
    };
    return (
      <div>
        <Container>
          <body>
            <div
              className={styles.body}
              style={{
                background: "rgba(0, 0, 0, 0.3)",
                width: "100%",
              }}
            >
              <div data-aos="fade-up" className={styles.title}>
                <h1>Tadbirlar</h1>
              </div>
              <Carousel
                responsive={responsive}
                autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={5000}
                infinite={true}
              >
                <div>
                  <MDBCol style={{ margin: "10px" }}>
                    <MDBCard className="h-100" className={styles.card}>
                      <MDBCardImage
                        src={news1}
                        className={styles.img}
                        alt="..."
                        position="top"
                      />
                      <MDBCardBody>
                        <MDBCardTitle>
                          Bog'chamizga Prezident tashrif buyirdi
                        </MDBCardTitle>
                        <MDBCardText>
                          <p>
                            <FaCalendarAlt
                              style={{ fontSize: "17px", color: "green" }}
                            />{" "}
                            <span>14/08/2020</span>
                          </p>
                          <p>
                            <BsGeoAlt
                              style={{ fontSize: "17px", color: "green" }}
                            />{" "}
                            <span>133-bog'cha</span>
                          </p>
                          <Link to="/tadbir/uz">
                            <p
                              style={{
                                color: "white",
                                backgroundColor: "green",
                                width: "76px",
                                padding: "3px 10px",
                                border: "1px solid green",
                                borderRadius: "10px",
                              }}
                            >
                              Batafsil
                            </p>
                          </Link>
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </div>
                <div>
                  <MDBCol style={{ margin: "10px" }}>
                    <MDBCard className="h-100" className={styles.card}>
                      <MDBCardImage
                        src={news1}
                        className={styles.img}
                        alt="..."
                        position="top"
                      />
                      <MDBCardBody>
                        <MDBCardTitle>
                          Bog'chamizga Prezident tashrif buyirdi
                        </MDBCardTitle>
                        <MDBCardText>
                          <p>
                            <FaCalendarAlt
                              style={{ fontSize: "17px", color: "green" }}
                            />{" "}
                            <span>14/08/2020</span>
                          </p>
                          <p>
                            <BsGeoAlt
                              style={{ fontSize: "17px", color: "green" }}
                            />{" "}
                            <span>133-bog'cha</span>
                          </p>
                          <Link to="/tadbir/uz">
                            <p
                              style={{
                                color: "white",
                                backgroundColor: "green",
                                width: "76px",
                                padding: "3px 10px",
                                border: "1px solid green",
                                borderRadius: "10px",
                              }}
                            >
                              Batafsil
                            </p>
                          </Link>
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </div>
                <div>
                  <MDBCol style={{ margin: "10px" }}>
                    <MDBCard className="h-100" className={styles.card}>
                      <MDBCardImage
                        src={news1}
                        className={styles.img}
                        alt="..."
                        position="top"
                      />
                      <MDBCardBody>
                        <MDBCardTitle>
                          Bog'chamizga Prezident tashrif buyirdi
                        </MDBCardTitle>
                        <MDBCardText>
                          <p>
                            <FaCalendarAlt
                              style={{ fontSize: "17px", color: "green" }}
                            />{" "}
                            <span>14/08/2020</span>
                          </p>
                          <p>
                            <BsGeoAlt
                              style={{ fontSize: "17px", color: "green" }}
                            />{" "}
                            <span>133-bog'cha</span>
                          </p>
                          <Link to="/tadbir/uz">
                            <p
                              style={{
                                color: "white",
                                backgroundColor: "green",
                                width: "76px",
                                padding: "3px 10px",
                                border: "1px solid green",
                                borderRadius: "10px",
                              }}
                            >
                              Batafsil
                            </p>
                          </Link>
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </div>
                <div>
                  <MDBCol style={{ margin: "10px" }}>
                    <MDBCard className="h-100" className={styles.card}>
                      <MDBCardImage
                        src={news1}
                        className={styles.img}
                        alt="..."
                        position="top"
                      />
                      <MDBCardBody>
                        <MDBCardTitle>
                          Bog'chamizga Prezident tashrif buyirdi
                        </MDBCardTitle>
                        <MDBCardText>
                          <p>
                            <FaCalendarAlt
                              style={{ fontSize: "17px", color: "green" }}
                            />{" "}
                            <span>14/08/2020</span>
                          </p>
                          <p>
                            <BsGeoAlt
                              style={{ fontSize: "17px", color: "green" }}
                            />{" "}
                            <span>133-bog'cha</span>
                          </p>
                          <Link to="/tadbir/uz">
                            <p
                              style={{
                                color: "white",
                                backgroundColor: "green",
                                width: "76px",
                                padding: "3px 10px",
                                border: "1px solid green",
                                borderRadius: "10px",
                              }}
                            >
                              Batafsil
                            </p>
                          </Link>
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </div>
              </Carousel>
              <br />
              <br />
              <br />
            </div>
          </body>
        </Container>
      </div>
    );
  }
}
