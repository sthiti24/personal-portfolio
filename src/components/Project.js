import React, { useState, useEffect } from "react";
import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import "./project.css";
import "animate.css";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import chatZone from "../images/chat-zone.png";
import stockLens from "../images/stock-lens.png";
import planPerfect from "../images/plan-perfect.png";
import memeMania from "../images/meme-mania.png";
import havenhub from "../images/havenhub.png";
import sahayya from "../images/sahayya.png";

export default function Project() {
  let [width, setWidth] = React.useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  });

  return (
    <div className="project">
      <ParallaxProvider>
        <div className="project-title">Projects</div>

        <div className="project-cards">
          <div className="cards-group">
            <Parallax translateX={width < 700 ? [-50, 20] : [50, -20]}>
              <div className="card">
                <img
                  src={havenhub}
                  alt=""
                  style={{
                    position: "relative",
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                />

                <div className="card-hover">
                  <div className="card-hover-text">
                    <h1 style={{ fontSize: "35px", marginBottom: "-2px" }}>
                      Haven-Hub
                    </h1>
                    <p style={{ fontSize: "20px" }}>Buy and sell properties</p>
                    <br></br>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginBottom: "5px",
                        justifyContent: "space-evenly",
                        position: "relative",
                        width: "100%",
                      }}
                    >
                      <button
                        style={{
                          backgroundColor: "#031838",
                          boxShadow: "0px 4px 7px black",
                        }}
                      >
                        <a
                          href="https://github.com/sthiti24/HavenHub"
                          rel="noreferrer"
                          target="_blank"
                          style={{ color: "white", textDecoration: "none" }}
                        >
                          Repository
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Parallax>

            <Parallax translateX={[40, -30]}>
              <div className="card">
                <img
                  src={sahayya}
                  alt=""
                  style={{
                    position: "relative",
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                />

                <div className="card-hover">
                  <div className="card-hover-text">
                    <h1 style={{ fontSize: "35px", marginBottom: "-2px" }}>
                      Sahhayya
                    </h1>
                    <p style={{ fontSize: "20px" }}>
                      Help the need in your own way
                    </p>
                    <br></br>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginBottom: "5px",
                        justifyContent: "space-evenly",
                        position: "relative",
                        width: "100%",
                      }}
                    >
                      <button
                        style={{
                          backgroundColor: "#031838",
                          boxShadow: "0px 4px 7px black",
                        }}
                      >
                        <a
                          href="https://github.com/sthiti24/sahhayya"
                          rel="noreferrer"
                          target="_blank"
                          style={{ color: "white", textDecoration: "none" }}
                        >
                          Repository
                        </a>
                      </button>

                      <button
                        style={{
                          backgroundColor: "#031838",
                          boxShadow: "0px 4px 7px black",
                        }}
                      ></button>
                    </div>
                  </div>
                </div>
              </div>
            </Parallax>
          </div>
          <div className="cards-group">
            <Parallax translateX={[-50, 10]}>
              <div className="card">
                <img
                  src={chatZone}
                  alt=""
                  style={{
                    position: "relative",
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                />
                <div className="card-hover">
                  <div className="card-hover-text">
                    <h1 style={{ fontSize: "35px", marginBottom: "-2px" }}>
                      Chat Zone
                    </h1>
                    <p style={{ fontSize: "20px" }}>
                      The chat web app you have been looking for.
                    </p>
                    <br></br>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginBottom: "5px",
                        justifyContent: "space-evenly",
                        position: "relative",
                        width: "100%",
                      }}
                    >
                      <button
                        style={{
                          backgroundColor: "#031838",
                          boxShadow: "0px 4px 7px black",
                        }}
                      >
                        <a
                          href="https://github.com/sthiti24/chat-zone"
                          rel="noreferrer"
                          target="_blank"
                          style={{ color: "white", textDecoration: "none" }}
                        >
                          Repository
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Parallax>
            <Parallax translateX={width < 700 ? [50, -10] : [-50, 10]}>
              <div className="card">
                <img
                  src={stockLens}
                  alt=""
                  style={{
                    position: "relative",
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                />

                <div className="card-hover">
                  <div className="card-hover-text">
                    <h1 style={{ fontSize: "35px", marginBottom: "-2px" }}>
                      Stock Lens
                    </h1>
                    <p style={{ fontSize: "20px" }}>
                      Get real time stock prices of over 200 MNCs
                    </p>
                    <br></br>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginBottom: "5px",
                        justifyContent: "space-evenly",
                        position: "relative",
                        width: "100%",
                      }}
                    >
                      <button
                        style={{
                          backgroundColor: "#031838",
                          boxShadow: "0px 4px 7px black",
                        }}
                      >
                        <a
                          href="https://github.com/sthiti24/stock-lens"
                          rel="noreferrer"
                          target="_blank"
                          style={{ color: "white", textDecoration: "none" }}
                        >
                          Repository
                        </a>
                      </button>
                      <button
                        style={{
                          backgroundColor: "#031838",
                          boxShadow: "0px 4px 7px black",
                        }}
                      >
                        <a
                          href="https://stock-lens.netlify.app/"
                          rel="noreferrer"
                          target="_blank"
                          style={{ color: "white", textDecoration: "none" }}
                        >
                          Website
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Parallax>
          </div>
          <div className="cards-group">
            <Parallax translateX={width < 700 ? [-50, 20] : [50, -20]}>
              <div className="card">
                <img
                  src={planPerfect}
                  alt=""
                  style={{
                    position: "relative",
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                />

                <div className="card-hover">
                  <div className="card-hover-text">
                    <h1 style={{ fontSize: "35px", marginBottom: "-2px" }}>
                      Plan Perfect
                    </h1>
                    <p style={{ fontSize: "20px" }}>
                      Organising tasks made easy
                    </p>
                    <br></br>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginBottom: "5px",
                        justifyContent: "space-evenly",
                        position: "relative",
                        width: "100%",
                      }}
                    >
                      <button
                        style={{
                          backgroundColor: "#031838",
                          boxShadow: "0px 4px 7px black",
                        }}
                      >
                        <a
                          href="https://github.com/sthiti24/plan-perfect"
                          rel="noreferrer"
                          target="_blank"
                          style={{ color: "white", textDecoration: "none" }}
                        >
                          Repository
                        </a>
                      </button>
                      <button
                        style={{
                          backgroundColor: "#031838",
                          boxShadow: "0px 4px 7px black",
                        }}
                      >
                        <a
                          href="https://plan-perfect.netlify.app/"
                          rel="noreferrer"
                          target="_blank"
                          style={{ color: "white", textDecoration: "none" }}
                        >
                          Website
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Parallax>

            <Parallax translateX={[40, -30]}>
              <div className="card">
                <img
                  src={memeMania}
                  alt=""
                  style={{
                    position: "relative",
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                />

                <div className="card-hover">
                  <div className="card-hover-text">
                    <h1 style={{ fontSize: "35px", marginBottom: "-2px" }}>
                      Meme Mania
                    </h1>
                    <p style={{ fontSize: "20px" }}>
                      Generate random cool memes
                    </p>
                    <br></br>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginBottom: "5px",
                        justifyContent: "space-evenly",
                        position: "relative",
                        width: "100%",
                      }}
                    >
                      <button
                        style={{
                          backgroundColor: "#031838",
                          boxShadow: "0px 4px 7px black",
                        }}
                      >
                        <a
                          href="https://github.com/sthiti24/meme-mania"
                          rel="noreferrer"
                          target="_blank"
                          style={{ color: "white", textDecoration: "none" }}
                        >
                          Repository
                        </a>
                      </button>

                      <button
                        style={{
                          backgroundColor: "#031838",
                          boxShadow: "0px 4px 7px black",
                        }}
                      >
                        <a
                          href="https://mememaniasthiti24.netlify.app/"
                          rel="noreferrer"
                          target="_blank"
                          style={{ color: "white", textDecoration: "none" }}
                        >
                          Website
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Parallax>
          </div>
        </div>
      </ParallaxProvider>
    </div>
  );
}
