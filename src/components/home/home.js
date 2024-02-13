import * as React from 'react'
import { Avatar, Badge } from 'antd'
import { Link } from 'gatsby'

import './home.less'

const Home = () => {
  return (
    <div className="home">
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
        <div className="home-left-links">
          <p>
            With Experience and Education in the areas of Computer Science, my
            interest is to continuously improve in the fields of AI/ML and
            System Design
          </p>
          <p>
            <img alt="email" className="home-img-20" src={`email.png`} />
            <span className="text-link"> xiangfr007@gmail.com </span>
          </p>
          <p>
            <img alt="email" className="home-img-20" src={`email.png`} />
            <span className="text-link"> 444137520@qq.com (China) </span>
          </p>
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UCERe5JqcmPtyo3dzX94by1g?sub_confirmation=1"
            rel="noopener noreferrer"
          >
            <p>
              <img alt="youtube" className="home-img-20" src={`youtube.png`} />
              <span className="text-link"> Subscribe me on Youtube</span>
            </p>
          </a>
          <a
            target="_blank"
            href="https://www.ixigua.com/home/105169725727/"
            rel="noopener noreferrer"
            className="display-none"
          >
            <p>
              <img alt="watermelon" className="home-img-20" src={`xigua.png`} />
              <span className="text-link"> 在 西瓜视频 关注我</span>
            </p>
          </a>
          <a
            target="_blank"
            href="https://space.bilibili.com/520811931"
            rel="noopener noreferrer"
          >
            <p>
              <img
                alt="bilibili"
                className="home-img-20"
                src={`bilibili.png`}
              />
              <span className="text-link"> Follow me on Bilibili</span>
            </p>
          </a>
          <a
            target="_blank"
            href="https://github.com/MagicienDeCode"
            rel="noopener noreferrer"
          >
            <p>
              <img alt="github" className="home-img-20" src={`github.png`} />
              <span className="text-link"> Follow me on Github</span>
            </p>
          </a>
        </div>
      </div>
      <div className="home-right">
        <h1>About Me</h1>
        <div className="home-right-p">
          <p>
            Je me définis comme étant une personne passionnée et organisée. Je
            suis rigoureux, efficace et j'apprécie le travail de qualité.
          </p>
        </div>
        <div className="home-right-p">
          <p>
            En tant que développeur curieux et perfectionniste, j'ai une grande
            faculté d'apprentissage et j'apprécie de travailler sur des projets
            ambitieux et challengeant.
          </p>
        </div>
        <div className="home-right-p">
          <p>
            J’apprends constamment sur les nouvelles technologies, et
            j’entreprends des nouveaux projets personnels afin d'approfondir mes
            connaissances ainsi que de pouvoir proposer des solutions adaptées
            au travail.
          </p>
        </div>
        <div className="home-right-p">
          <p>
            J'aime particulièrement travailler en équipe mais je sais aussi être
            autonome quand il le faut.
          </p>
        </div>
        <div className="home-right-p">
          <p>
            Je m'épanouis non seulement en travaillant, mais aussi en apportant
            de la valeur à l'entreprise, dans laquelle la capacité à relever des
            défis, à reconnaître et rectifier ses erreurs et à se montrer tenace
            est essentielle.
          </p>
        </div>
      </div>
      <div className="home-no-content"></div>
    </div>
  )
}

export default Home
