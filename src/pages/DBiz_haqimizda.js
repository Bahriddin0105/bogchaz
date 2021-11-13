import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-multi-carousel/lib/styles.css";
import "../css/educators.module.css";
import styles from "../css/about_us.module.css";
// import PacmanLoader from "react-spinners/PacmanLoader";
import educators3 from "../img/educators3.jpg";
import Global from "../host/Global";
import { getKg } from "../host/Config";
import { Link } from "react-router-dom";
import "../css/Umumiy.css";
import Loader from "react-loader-spinner";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";

export default class DBiz_haqimizda extends Component {
  state = {
    loader: true,
  };
  componentDidMount() {
    if (Global.kg === null) {
      getKg()
        .then((res) => {
          Global.kg = res.data;
        })
        .catch((err) => console.log(err));
    }
    setInterval(() => {
      this.setState({
        loader: false,
      });
    }, 2000);
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
          <div className="vse">
            <Container>
              {/* <div className={styles.body}> */}
              <div className={styles.title}>
                <h1>Biz haqimizda</h1>
              </div>
              <div className={styles.text}>
                <p>
                  <strong>UYDAN UYGA</strong>
                </p>
                <p className="text">
                  Biz erta yoshdagi bolalar tarbiyasi kuchiga ishonadigan
                  o'qituvchilar va ma'murlarning ajoyib guruhimiz...
                </p>
                <p>
                  <strong>BIZNING OILA VA JAMOAT</strong>
                </p>
                <p className="text">
                  Bizning to'rtinchi iyul bayrami, Bog'dorchilik tadbirlari,
                  Kichik DaVinchi kuni, Buvilar va bobolar partiyalari kabi
                  yuqori darajada ishtirok etadigan oilaviy tadbirlarimizdan,
                  har yili ikki yilda bir marta...
                </p>
                <Link
                  to="/bizhaqimizda/uz"
                  style={{
                    padding: "10px 15px",
                    color: "white",
                    backgroundColor: "green",
                    borderRadius: "7px",
                  }}
                >
                  Batafsil
                </Link>
              </div>
              <div id="bizningtarix"></div>

              <div className={styles.body}>
                <div className={styles.title}>
                  <h1>Bizning tarix</h1>
                </div>
                <div className={styles.text}>
                  <p>{Global.kg.our_history}</p>
                </div>
                <br />
                <Link
                  to="/bizningtarix/uz"
                  style={{
                    marginLeft: "40px",
                    padding: "10px 15px",
                    color: "white",
                    backgroundColor: "green",
                    borderRadius: "7px",
                  }}
                >
                  Batafsil
                </Link>
              </div>
              <div id="negabiz"></div>

              <div className={styles.body}>
                <div className={styles.title}>
                  <h1>Nega biz</h1>
                </div>
                <div className={styles.text}>
                  <p>{Global.kg.why_us}</p>
                  <br />
                </div>
                <Link
                  to="/nimauchunbiz/uz"
                  style={{
                    marginLeft: "40px",
                    padding: "10px 15px",
                    color: "white",
                    backgroundColor: "green",
                    borderRadius: "7px",
                  }}
                >
                  Batafsil
                </Link>
              </div>
              <div id="rahbarlar"></div>
              <div className={styles.title}>
                <h1>Rahbariyat</h1>
              </div>
              <MDBCard style={{ maxWidth: "100%", marginBottom: "60px" }}>
                <MDBRow className="g-0">
                  <MDBCol md="6" className={styles.container}>
                    <MDBCardImage
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={educators3}
                      alt="..."
                      fluid
                    />
                    <div className={styles.contact}>
                      <div className={styles.text}>
                        <div className={styles.textbg}>
                          <a href="+99893 555 00 55">
                            <i class="fas fa-phone"></i>
                          </a>
                        </div>
                        <div className={styles.textbg}>
                          {" "}
                          <a href="megachild@gmail.com">
                            <i class="fas fa-envelope-open"></i>
                          </a>
                        </div>
                        <div className={styles.textbg}>
                          <a href="@megachuld">
                            <i class="fas fa-paper-plane"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </MDBCol>
                  <MDBCol md="6" style={{ paddingLeft: "20px" }}>
                    <MDBCardBody>
                      <MDBCardTitle>
                        <h1 className={styles.title1}>Direktor</h1>
                      </MDBCardTitle>
                      <MDBCardText>
                        <p>
                          <strong>F.I.O: </strong>Abdurahmonova Shohida
                          Abdumalik qizi
                        </p>
                        <p>
                          <strong>Tug'ilgan sana: </strong>{" "}
                          <i
                            style={{ color: "#FF8080" }}
                            class="fas fa-calendar-alt"
                          ></i>{" "}
                          06/12/1995
                        </p>
                        <p>
                          <strong>Mutaxasislik: </strong>Ingliz tili mutaxasisi
                        </p>
                        <p>
                          <strong>Oliygoh: </strong>Jahon tillari universiteti
                        </p>
                      </MDBCardText>
                      <MDBCardText>
                        <i
                          style={{ color: "#FF8080" }}
                          class="fas fa-quote-left"
                        ></i>
                        <br />
                        <small
                          className="text-muted"
                          style={{ marginBottom: "60px" }}
                        >
                          Men "Erta bolalik ta'limi" darajasiga va ingliz tili
                          bo'yicha yuqori darajadagi sertifikatga egaman. Men
                          2002 yildan beri bolalar bog'chasida Ingliz tili
                          o'qituvchi sifatida ishlayman.{" "}
                        </small>
                        <br />
                        <i
                          style={{ color: "#FF8080", float: "right" }}
                          class="fas fa-quote-right"
                        ></i>
                        <br />
                        <Link
                          to="/rahbariyat/uz"
                          style={{
                            padding: "10px 15px",
                            color: "white",
                            backgroundColor: "green",
                            borderRadius: "7px",
                          }}
                        >
                          Batafsil
                        </Link>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
              <div id="tarbiyalovchilar"></div>
              <div className={styles.title}>
                <h1>Tarbiyalovchilar</h1>
              </div>
              <MDBCard style={{ maxWidth: "100%", marginBottom: "60px" }}>
                <MDBRow className="g-0">
                  <MDBCol md="6" className={styles.container}>
                    <MDBCardImage
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={educators3}
                      alt="..."
                      fluid
                    />
                    <div className={styles.contact}>
                      <div className={styles.text}>
                        <div className={styles.textbg}>
                          <a href="+99893 555 00 55">
                            <i class="fas fa-phone"></i>
                          </a>
                        </div>
                        <div className={styles.textbg}>
                          {" "}
                          <a href="megachild@gmail.com">
                            <i class="fas fa-envelope-open"></i>
                          </a>
                        </div>
                        <div className={styles.textbg}>
                          <a href="@megachuld">
                            <i class="fas fa-paper-plane"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </MDBCol>
                  <MDBCol md="6" style={{ paddingLeft: "20px" }}>
                    <MDBCardBody>
                      <MDBCardTitle>
                        <h1 className={styles.title1}>Direktor</h1>
                      </MDBCardTitle>
                      <MDBCardText>
                        <p>
                          <strong>F.I.O: </strong>Abdurahmonova Shohida
                          Abdumalik qizi
                        </p>
                        <p>
                          <strong>Tug'ilgan sana: </strong>{" "}
                          <i
                            style={{ color: "#FF8080" }}
                            class="fas fa-calendar-alt"
                          ></i>{" "}
                          06/12/1995
                        </p>
                        <p>
                          <strong>Mutaxasislik: </strong>Ingliz tili mutaxasisi
                        </p>
                        <p>
                          <strong>Oliygoh: </strong>Jahon tillari universiteti
                        </p>
                      </MDBCardText>
                      <MDBCardText>
                        <i
                          style={{ color: "#FF8080" }}
                          class="fas fa-quote-left"
                        ></i>
                        <br />
                        <small className="text-muted">
                          Men "Erta bolalik ta'limi" darajasiga va ingliz tili
                          bo'yicha yuqori darajadagi sertifikatga egaman. Men
                          2002 yildan beri bolalar bog'chasida Ingliz tili
                          o'qituvchi sifatida ishlayman.{" "}
                        </small>
                        <br />
                        <i
                          style={{ color: "#FF8080", float: "right" }}
                          class="fas fa-quote-right"
                        ></i>
                        <br />
                        <Link
                          to="/tarbiyachilar/uz"
                          style={{
                            padding: "10px 15px",
                            color: "white",
                            backgroundColor: "green",
                            borderRadius: "7px",
                          }}
                        >
                          Batafsil
                        </Link>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </Container>
          </div>
        )}
      </div>
    );
  }
}
