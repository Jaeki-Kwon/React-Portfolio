import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import "../Modal/Modal.css";

import Portfolio from "../Modal/Portfolio";
import TodayMongo from "../Modal/TodayMongo";
import TodayMaria from "../Modal/TodayMaria";
import MovieApp from "../Modal/MovieApp";
import CarrotGame from "../Modal/CarrotGame";
import Nomflix from "../Modal/Nomflix";
import Wetube from "../Modal/Wetube";
import List from "../Modal/JsList";
import Paint from "../Modal/JsPaint";
import Chrome from "../Modal/JsChrome";
import Kakao from "../Modal/Kakao";

import portfolio from "./img/portfolio.png";
import todayILearnedMariaDB from "./img/today_i_learned.png";
import todayILearnedMongo from "./img/todayMongo.png";
import movieApp from "./img/movieApp.png";
import jsGame from "./img/jsgame.png";
import nomflix from "./img/nomflix.png";
import wetube from "./img/wetube.png";
import paint from "./img/paint.png";
import jsChrome from "./img/jsChrome.png";
import jsList from "./img/jsList.png";
import kakao from "./img/kakao.png";

const Article = styled.article`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1d809f;
`;

const ProjectForm = styled.div`
  max-width: 71.25rem;
  padding: 4rem 2rem;
  width: 70%;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const TitleIcon = styled.div`
  width: 2rem;
  min-width: 2rem;
  height: 2rem;
  margin-top: 5.3rem;
  margin-right: 1rem;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
`;

const ProjectContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
`;

const Projects = styled.div`
  margin-bottom: 25px;
  background-color: white;
  width: 350px;
  border-radius: 25px;
  box-shadow: inset -6px -6px 15px rgba(145, 160, 180, 0.45),
    30px 30px 40px rgba(118, 146, 180, 0.18);
  overflow: hidden;
  padding: 1.5rem;
`;

const ProjectsTitle = styled.div`
  margin-top: -20px;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #ccc;
  font-weight: 700;
  font-size: 1.5rem;
  color: #f4623a;
`;

const ProjectsImge = styled.div``;

const ProjectsContent = styled.div`
  text-align: center;
`;

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//   },
// };

Modal.setAppElement("#root");

function Project() {
  const [PortfolioModal, setPortfolioModal] = useState(false);
  const [Mongo, setMongo] = useState(false);
  const [Maria, setMaria] = useState(false);
  const [MovieAppModal, setMovieAppModal] = useState(false);
  const [Carrot, setCarrot] = useState(false);
  const [NomflixModal, setNomflixModal] = useState(false);
  const [WetubeModal, setWetubeModal] = useState(false);
  const [ListModal, setListModal] = useState(false);
  const [PaintModal, setPaintModal] = useState(false);
  const [ChromeModal, setChromeModal] = useState(false);
  const [KakaoModal, setKakaoModal] = useState(false);

  const openModal = (title) => {
    if (title === "Portfolio") setPortfolioModal(true);
    if (title === "Mongo") setMongo(true);
    if (title === "Maria") setMaria(true);
    if (title === "MovieApp") setMovieAppModal(true);
    if (title === "Carrot") setCarrot(true);
    if (title === "Nomflix") setNomflixModal(true);
    if (title === "Wetube") setWetubeModal(true);
    if (title === "Paint") setPaintModal(true);
    if (title === "Chrome") setChromeModal(true);
    if (title === "List") setListModal(true);
    if (title === "Kakao") setKakaoModal(true);
  };

  return (
    <Article id="projectHeight">
      <ProjectForm>
        <TitleContainer>
          <TitleIcon>
            <i
              className="fas fa-paperclip"
              style={{ fontSize: "35px", color: "white" }}
            ></i>
          </TitleIcon>
          <Title>
            <h1 style={{ borderBottom: "1px solid #cccccc", color: "white" }}>
              PROJECTS
            </h1>
          </Title>
        </TitleContainer>
        <ProjectContainer>
          <Projects
            style={{ cursor: "pointer" }}
            onClick={() => openModal("Portfolio")}
          >
            <ProjectsTitle>
              <h1>Portfolio</h1>
            </ProjectsTitle>
            <ProjectsImge>
              <img
                style={{ width: "100%", height: "170px" }}
                alt="project01"
                src={portfolio}
              />
            </ProjectsImge>
            <ProjectsContent>
              <h2>React??? ?????????????????? ???????????? ????????? ?????????????????? ??????.</h2>
            </ProjectsContent>
          </Projects>
          <Projects
            style={{ cursor: "pointer" }}
            onClick={() => openModal("Mongo")}
          >
            <ProjectsTitle>
              <h1>Today I Learned</h1>
            </ProjectsTitle>
            <ProjectsImge>
              <img
                style={{ width: "100%", height: "170px" }}
                alt="project01"
                src={todayILearnedMongo}
              />
            </ProjectsImge>
            <ProjectsContent>
              <h2>
                React??? Redux, Node JS ????????? MongoDB??? ???????????? ???????????? ??????.
              </h2>
            </ProjectsContent>
          </Projects>
          <Projects
            style={{ cursor: "pointer" }}
            onClick={() => openModal("Maria")}
          >
            <ProjectsTitle>
              <h1>Today I Learned</h1>
            </ProjectsTitle>
            <ProjectsImge>
              <img
                style={{ width: "100%", height: "170px" }}
                alt="project02"
                src={todayILearnedMariaDB}
              />
            </ProjectsImge>
            <ProjectsContent>
              <h2>
                ????????? ?????????????????? DB??? MongoDB?????? MariaDB??? ????????? ????????????
                ??????.
              </h2>
              <h2>paging????????? ?????????.</h2>
            </ProjectsContent>
          </Projects>
          <Projects
            style={{ cursor: "pointer" }}
            onClick={() => openModal("MovieApp")}
          >
            <ProjectsTitle>
              <h1>Movie App</h1>
            </ProjectsTitle>
            <ProjectsImge>
              <img
                style={{ width: "100%", height: "170px" }}
                alt="project03"
                src={movieApp}
              />
            </ProjectsImge>
            <ProjectsContent>
              <h2>
                ????????? ????????? ????????? React??? NodeJS, MongoDB??? ???????????? MovieApp
                ??????.
              </h2>
            </ProjectsContent>
          </Projects>
          <Projects
            style={{ cursor: "pointer" }}
            onClick={() => openModal("Carrot")}
          >
            <ProjectsTitle>
              <h1>Carrot Game</h1>
            </ProjectsTitle>
            <ProjectsImge>
              <img
                style={{ width: "100%", height: "170px" }}
                alt="project03"
                src={jsGame}
              />
            </ProjectsImge>
            <ProjectsContent>
              <h2>HTML, CSS, JavaScript??? ???????????? ????????? ?????? ??????.</h2>
            </ProjectsContent>
          </Projects>
          <Projects
            style={{ cursor: "pointer" }}
            onClick={() => openModal("Nomflix")}
          >
            <ProjectsTitle>
              <h1>Nomflix</h1>
            </ProjectsTitle>
            <ProjectsImge>
              <img
                style={{ width: "100%", height: "170px" }}
                alt="project03"
                src={nomflix}
              />
            </ProjectsImge>
            <ProjectsContent>
              <h2>
                ?????? ??????????????? API??? ????????? React??? ???????????? Nomflix APP???
                ??????.
              </h2>
            </ProjectsContent>
          </Projects>
          <Projects
            style={{ cursor: "pointer" }}
            onClick={() => openModal("Wetube")}
          >
            <ProjectsTitle>
              <h1>WeTube</h1>
            </ProjectsTitle>
            <ProjectsImge>
              <img
                style={{ width: "100%", height: "170px" }}
                alt="project03"
                src={wetube}
              />
            </ProjectsImge>
            <ProjectsContent>
              <h2>
                ????????? ????????? ????????? Front??? Pug Back??? Node.JS, express.js???
                MongoDB??? ???????????? Youtube??? ???????????? ?????? ?????????.
              </h2>
            </ProjectsContent>
          </Projects>
          <Projects
            style={{ cursor: "pointer" }}
            onClick={() => openModal("List")}
          >
            <ProjectsTitle>
              <h1>Shopping Mall List</h1>
            </ProjectsTitle>
            <ProjectsImge>
              <img
                style={{ width: "100%", height: "170px" }}
                alt="project03"
                src={jsList}
              />
            </ProjectsImge>
            <ProjectsContent>
              <h2>
                HTML??? CSS, JavaScript??? ???????????? ????????? ????????? ?????? Tool???
                ????????? ???.
              </h2>
            </ProjectsContent>
          </Projects>
          <Projects
            style={{ cursor: "pointer" }}
            onClick={() => openModal("Paint")}
          >
            <ProjectsTitle>
              <h1>Drawing Board</h1>
            </ProjectsTitle>
            <ProjectsImge>
              <img
                style={{ width: "100%", height: "170px" }}
                alt="project03"
                src={paint}
              />
            </ProjectsImge>
            <ProjectsContent>
              <h2>JavaScript??? Canvas????????? ???????????? ???????????? ????????????.</h2>
            </ProjectsContent>
          </Projects>
          <Projects
            style={{ cursor: "pointer" }}
            onClick={() => openModal("Chrome")}
          >
            <ProjectsTitle>
              <h1>JS-Chrome</h1>
            </ProjectsTitle>
            <ProjectsImge>
              <img
                style={{ width: "100%", height: "170px" }}
                alt="project03"
                src={jsChrome}
              />
            </ProjectsImge>
            <ProjectsContent>
              <h2>
                JavaScript??? ???????????? ?????? ?????? ????????? TodoList, ?????? ?????????
                ????????? ?????????.
              </h2>
            </ProjectsContent>
          </Projects>

          <Projects
            style={{ cursor: "pointer" }}
            onClick={() => openModal("Kakao")}
          >
            <ProjectsTitle>
              <h1>????????????</h1>
            </ProjectsTitle>
            <ProjectsImge>
              <img
                style={{ width: "100%", height: "55vh" }}
                alt="project03"
                src={kakao}
              />
            </ProjectsImge>
            <ProjectsContent>
              <h2>
                ?????? ????????? ????????? ??? ????????? ????????? HTML??? CSS??? ????????????
                ??????????????? ?????? ???????????? ????????? ???????????? ?????????.
              </h2>
            </ProjectsContent>
          </Projects>
        </ProjectContainer>
      </ProjectForm>

      <Modal className="Modal" isOpen={PortfolioModal}>
        <Portfolio setPortfolioModal={setPortfolioModal} />
      </Modal>
      <Modal className="Modal" isOpen={Mongo}>
        <TodayMongo setMongo={setMongo} />
      </Modal>
      <Modal className="Modal" isOpen={Maria}>
        <TodayMaria setMaria={setMaria} />
      </Modal>
      <Modal className="Modal" isOpen={MovieAppModal}>
        <MovieApp setMovieAppModal={setMovieAppModal} />
      </Modal>
      <Modal className="Modal" isOpen={Carrot}>
        <CarrotGame setCarrot={setCarrot} />
      </Modal>
      <Modal className="Modal" isOpen={NomflixModal}>
        <Nomflix setNomflixModal={setNomflixModal} />
      </Modal>
      <Modal className="Modal" isOpen={WetubeModal}>
        <Wetube setWetubeModal={setWetubeModal} />
      </Modal>
      <Modal className="Modal" isOpen={ListModal}>
        <List setListModal={setListModal} />
      </Modal>
      <Modal className="Modal" isOpen={PaintModal}>
        <Paint setPaintModal={setPaintModal} />
      </Modal>
      <Modal className="Modal" isOpen={ChromeModal}>
        <Chrome setChromeModal={setChromeModal} />
      </Modal>
      <Modal className="Modal" isOpen={KakaoModal}>
        <Kakao setKakaoModal={setKakaoModal} />
      </Modal>
    </Article>
  );
}

export default Project;
