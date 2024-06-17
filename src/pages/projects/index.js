import * as React from 'react'
import './projects.less'
import { Breadcrumb, Row, Col, Timeline, Badge, Avatar, Divider } from 'antd'
import { Link } from 'gatsby'

const Index = () => {
  return (
    <div>
      <Breadcrumb
        separator=">"
        className="projects-breads"
        items={[
          {
            title: (
              <Link to="/" className="decoration-none">
                Home
              </Link>
            ),
          },
          {
            title: 'Projects',
          },
        ]}
      />
      <div>
        <Row className="projects-row">
          <Col className="projects-left display-none">
            <Timeline
              className="projects-timeline"
              items={[
                {
                  dot: (
                    <Badge>
                      <Avatar src={`../github.png`} size={20} />
                    </Badge>
                  ),
                  color: 'grey',
                  children: (
                    <Link to="#github" className="decoration-none">
                      <span className="projects-line-text">GITHUB</span>
                    </Link>
                  ),
                },
                {
                  dot: (
                    <Badge>
                      <Avatar src={`../ml.png`} size={20} />
                    </Badge>
                  ),
                  color: 'grey',
                  children: (
                    <Link to="#machine-learning" className="decoration-none">
                      <span className="projects-line-text">
                        MACHINE LEARNING
                      </span>
                    </Link>
                  ),
                },
                {
                  dot: (
                    <Badge>
                      <Avatar src={`../algo.png`} size={20} />
                    </Badge>
                  ),
                  color: 'grey',
                  children: (
                    <Link to="#algorithm" className="decoration-none">
                      <span className="projects-line-text">ALGORITHM</span>
                    </Link>
                  ),
                },
                {
                  dot: (
                    <Badge>
                      <Avatar src={`../skills.png`} size={20} />
                    </Badge>
                  ),
                  color: 'grey',
                  children: (
                    <Link to="#others" className="decoration-none">
                      <span className="projects-line-text">OTHERS</span>
                    </Link>
                  ),
                },
              ]}
            />
          </Col>
          <Col className="projects-right">
            <div>
              <h1 id="github" className="projects-right-first">
                GITHUB
              </h1>
              <Row>
                <Col flex={4}>
                  <p>All my projects are on GitHub. Click the link below:</p>
                  <a target="_blanc" href="https://github.com/MagicienDeCode">
                    <h3>Talent is enduring patience</h3>
                  </a>
                </Col>
                <Col flex={1} className="basic-info-left-col display-none">
                  <Link to="/" className="decoration-none">
                    <Badge>
                      <Avatar
                        src={`../xiang3.jpg`}
                        className="projects-xiang-avatar"
                      />
                    </Badge>
                  </Link>
                </Col>
              </Row>
            </div>

            <div>
              <h1 id="machine-learning">MACHINE LEARNING</h1>
              <Divider orientation="left">
                <div className="exp-head">
                  <img
                    alt="machine-learning"
                    className="company-icon"
                    src={`../ml.png`}
                  />
                  <a
                    target="_blanc"
                    href="https://github.com/MagicienDeCode/machine_learning"
                  >
                    <span className="text-link"> Machine Learning </span>
                  </a>
                </div>
              </Divider>
              <br />
              <div className="text-size">
                <p>
                  <span className="key-word">Key Words: </span>Machine Learning,
                  Linear Regression, Logistic Regression, Decision Tree, Random
                  Forest, Gradient Boosting Trees, Support Vector Machine, MLP,
                  RNN, K-Means Clustering, Hierarchical Clustering, PCA, t-SNE,
                  Naive Bayes, Adaboost, XGBoost
                </p>
              </div>
              <br />
            </div>
            <br />
            <h1 id="algorithm">ALGORITHM</h1>
            <Divider orientation="left">
              <div className="exp-head">
                <img
                  alt="python"
                  className="company-icon"
                  src={`../python.png`}
                />
                <a
                  target="_blanc"
                  href="https://github.com/MagicienDeCode/py3_interview"
                >
                  <span className="text-link"> LeetCode Python3 </span>
                </a>
              </div>
            </Divider>
            <br />
            <div className="text-size">
              <p>
                <span className="key-word">Key Words: </span>Algorithm,
                LeetCode, Python3, Java, Binary Search, Depth First Search,
                Breadth First Search, Stack, Deque, Heap (Priority Queue),
                Linked List, Dynamic Programming, Data Structure
              </p>
            </div>
            <br />
            <Divider orientation="left">
              <div className="exp-head">
                <img alt="java" className="company-icon" src={`../java.png`} />
                <a
                  target="_blanc"
                  href="https://github.com/MagicienDeCode/LeetCode_Solution"
                >
                  <span className="text-link"> LeetCode Java </span>
                </a>
              </div>
            </Divider>
            <br />
            <h1 id="others">Others</h1>
            <Divider orientation="left">
              <div className="exp-head">
                <img
                  alt="mdc"
                  className="company-icon"
                  src={`../gatsbyjs-logo.png`}
                />
                <a
                  target="_blanc"
                  href="https://github.com/MagicienDeCode/magiciendecode"
                >
                  <span className="text-link">Personal Site (latest)</span>
                </a>
              </div>
            </Divider>
            <br />
            <div className="text-size">
              <p>
                <span className="key-word">Key Words: </span>Gatsby JS,
                JavaScript
              </p>
            </div>
            <br />
            <Divider orientation="left">
              <div className="exp-head">
                <img
                  alt="mdc.fr"
                  className="company-icon"
                  src={`../gatsbyjs-logo.png`}
                />
                <a
                  target="_blanc"
                  href="https://github.com/MagicienDeCode/magiciendecode.fr"
                >
                  <span className="text-link">Personal Site (deprecated)</span>
                </a>
              </div>
            </Divider>
            <br />
            <div className="text-size">
              <p>
                <span className="key-word">Key Words: </span>Gatsby JS,
                TypeScript
              </p>
            </div>
            <br />
          </Col>
        </Row>
      </div>
    </div>
  )
}
export default Index
