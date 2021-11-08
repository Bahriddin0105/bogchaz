import React, { useState, useEffect } from "react";
import {
  YMaps,
  Map,
  Clusterer,
  Placemark,
  TypeSelector,
  ZoomControl,
  GeolocationControl,
  RouteButton,
  TrafficControl,
  GeoObject,
} from "react-yandex-maps";
import styles from "../css/Dashboard.module.css";
import PacmanLoader from "react-spinners/PacmanLoader";

// import person from "./person.png";
// import oila from "./pages/new.jpg";
import person from "../img/boy.png";
import RingLoader from "react-spinners/RingLoader";
// import Dialog from "./components/Dialog";
import "antd/dist/antd.css";
// import "./App.css";
// import Select from "./components/Select";
// import Footer from "./components/Footer";
import axios from "axios";
import { url } from "../host/Host";
import { message } from "antd";
import Footer from "./Footer";
import Navbar from "./Navbar";

export const Xarita=()=> {
  const [loading, setLoading] = useState(true);
  const [forclick, setforclick] = useState(false);
  const [village, setVillage] = useState("");
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  const [coor, setCoor] = useState([]);
  const [Points, setPoints] = useState([]);

  const [zoom, setZoom] = useState(6);

  useEffect(() => {
    axios.get(`${url}/kg/`).then((res) => {
      setData(res.data);
      setPoints(res.data);
      navigator.geolocation.getCurrentPosition(function (position) {
        setUser([position.coords.latitude, position.coords.longitude]);
      });
      var coord = [];
      res.data.map((item) =>
        item.paramss !== null ? coord.push(item.paramss) : coord.push([])
      );
      setCoor(coord);
      setLoading(false);
    });
  }, []);

  
  return (
    <>
      {loading ? (
          <div className={styles.loader}>
            <PacmanLoader
              size={20}
              color={"#FF8080"}
              loading={loading}
            />
          </div>
        ) : (
        <>
        <Navbar/>
          <YMaps key={"uz_UZ"} query={{ lang: "uz_UZ" }}>
            <Map
              width="100vw"
              height="95vh"
              state={{
                center: data[0].params,
                zoom:6,
              }}
            >
              <Clusterer
                options={{
                  groupByCoordinates: false,
                }}
              >
                {data.map((info, index) => {
                  return (
                    <Placemark
                      key={index}
                      className="placeMark"
                      geometry={
                        info.params !== null
                          ? info.params
                          : message.info("Param mavjuda emas")
                      }
                     
                      options={{
                        preset: "islands#greenDotIconWithCaption",
                        iconColor: "#aeca3b",
                        iconLayout: "default#image",
                      }}
                      properties={{
                        hintContent: `<h6><b className="personStyle">${info.nomi}</b></h6>`,
                      }}
                      modules={["geoObject.addon.hint"]}
                    />
                  );
                })}
              </Clusterer>
              {isNaN(user[0]) || isNaN(user[1]) ? (
                ""
              ) : (
                <Clusterer
                  options={{
                    groupByCoordinates: false,
                  }}
                >
                  <Placemark
                    key={-1}
                    geometry={user !== null ? user : []}
                    options={{
                      iconLayout: "default#image",
                      iconImageHref: person,
                      iconImageSize: [40, 60],
                      iconImageOffset: [-1, -28],
                    }}
                    properties={{
                      hintContent: `<h6><b className="personStyle">Siz</b></h6>`,
                    }}
                    modules={["geoObject.addon.hint"]}
                  />
                </Clusterer>
              )}
              
              {/* <GeolocationControl options={{ float: "left" }} /> */}
              {/* <TypeSelector options={{ float: "right" }} /> */}
              {/* <TrafficControl options={{ float: "right" }} /> */}
              {/* <RouteButton options={{ float: "right" }} /> */}
              <ZoomControl options={{ float: "left" }} />
            </Map>
          </YMaps>
        </>
      )}
      <Footer />
    </>
  );
}

