import * as React from 'react'
import { Avatar, Badge, Row, Col } from 'antd'
import { Link } from 'gatsby'

import './home.less'

const Home = () => {
  return (
    <Row>
      <Col key="col-1" className="col-1">
        <div className="home-left">
          <div className="home-xiang-avatar">
            <Link to="/">
              <Badge count={32}>
                <Avatar src={`xiang.jpg`} className="xiang-avatar" />
              </Badge>
            </Link>
          </div>
          <div className="home-left-name">
            <Link to="/">
              <p>LI Xiang - 李 想</p>
            </Link>
          </div>
          <div className="home-left-links display-none">
            <div className="home-left-text">
              <p>
                With Experience and Education in the areas of Computer Science,
                my interest is to continuously improve in the fields of AI/ML
                and System Design
              </p>
            </div>
            <a
              target="_blank"
              href="mailto:xiangli1105@hotmail.com"
              rel="noopener noreferrer"
            >
              <Row className="home-row">
                <Col>
                  <img alt="email" className="home-img" src={`email-1.png`} />
                </Col>
                <Col>
                  <span className="text-link"> Email </span>
                </Col>
              </Row>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/xiang-li-3346b512a/"
              rel="noopener noreferrer"
            >
              <Row className="home-row">
                <Col>
                  <img
                    alt="linkedin"
                    className="home-img"
                    src={`linkedin.png`}
                  />
                </Col>
                <Col>
                  <span className="text-link"> Linkedin </span>
                </Col>
              </Row>
            </a>
            <a
              target="_blank"
              href="https://github.com/MagicienDeCode"
              rel="noopener noreferrer"
            >
              <Row className="home-row">
                <Col>
                  <img alt="github" className="home-img" src={`github.png`} />
                </Col>
                <Col>
                  <span className="text-link"> Github</span>
                </Col>
              </Row>
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCERe5JqcmPtyo3dzX94by1g?sub_confirmation=1"
              rel="noopener noreferrer"
            >
              <Row className="home-row">
                <Col>
                  <img alt="youtube" className="home-img" src={`youtube.png`} />
                </Col>
                <Col>
                  <span className="text-link"> Youtube </span>
                </Col>
              </Row>
            </a>
            <a
              target="_blank"
              href="https://leetcode.com/MagicienDeCode/"
              rel="noopener noreferrer"
            >
              <Row className="home-row">
                <Col>
                  <img
                    alt="leetcode"
                    className="home-img"
                    src={`leetcode.png`}
                  />
                </Col>
                <Col>
                  <span className="text-link"> Leetcode </span>
                </Col>
              </Row>
            </a>
            <a
              target="_blank"
              href="https://space.bilibili.com/520811931"
              rel="noopener noreferrer"
            >
              <Row className="home-row">
                <Col>
                  <img
                    alt="bilibili"
                    className="home-img"
                    src={`bilibili.png`}
                  />
                </Col>
                <Col>
                  <span className="text-link"> Bilibili </span>
                </Col>
              </Row>
            </a>
          </div>
        </div>
      </Col>
      <Col key="col-2" className="col-2">
        <div className="home-right">
          <h1>About Me</h1>
          <div className="text-size">
            <p>
              Je me définis comme étant une personne passionnée et organisée. Je
              suis rigoureux, efficace et j'apprécie le travail de qualité.
            </p>
          </div>
          <div className="text-size">
            <p>
              En tant que développeur curieux et perfectionniste, j'ai une
              grande faculté d'apprentissage et j'apprécie de travailler sur des
              projets ambitieux et challengeant.
            </p>
          </div>
          <div className="text-size">
            <p>
              J’apprends constamment sur les nouvelles technologies, et
              j’entreprends des nouveaux projets personnels afin d'approfondir
              mes connaissances ainsi que de pouvoir proposer des solutions
              adaptées au travail.
            </p>
          </div>
          <div className="text-size">
            <p>
              J'aime particulièrement travailler en équipe mais je sais aussi
              être autonome quand il le faut.
            </p>
          </div>
          <div className="text-size">
            <p>
              Je m'épanouis non seulement en travaillant, mais aussi en
              apportant de la valeur à l'entreprise, dans laquelle la capacité à
              relever des défis, à reconnaître et rectifier ses erreurs et à se
              montrer tenace est essentielle.
            </p>
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default Home
