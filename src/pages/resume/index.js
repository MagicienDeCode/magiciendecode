import * as React from 'react'
import './resume.less'
import {
  Breadcrumb,
  Row,
  Col,
  Timeline,
  Badge,
  Avatar,
  Flex,
  Divider,
} from 'antd'
import { Link } from 'gatsby'

const Index = () => {
  return (
    <div>
      <Breadcrumb
        className="resume-breads"
        items={[
          {
            title: (
              <Link to="/" className="decoration-none">
                Home
              </Link>
            ),
          },
          {
            title: 'Resume',
          },
        ]}
      />
      <div>
        <Row className="resume-row">
          <Col className="resume-left display-none">
            <Timeline
              className="resume-timeline"
              items={[
                {
                  dot: (
                    <Badge>
                      <Avatar src={`../icon_resume.png`} size={20} />
                    </Badge>
                  ),
                  color: 'grey',
                  children: (
                    <Link to="#basic-info" className="decoration-none">
                      <span className="resume-line-text">RESUME</span>
                    </Link>
                  ),
                },
                {
                  dot: (
                    <Badge>
                      <Avatar src={`../tools.png`} size={20} />
                    </Badge>
                  ),
                  color: 'grey',
                  children: (
                    <Link to="#skills" className="decoration-none">
                      <span className="resume-line-text">SKILLS</span>
                    </Link>
                  ),
                },
                {
                  dot: (
                    <Badge>
                      <Avatar src={`../exp.png`} size={20} />
                    </Badge>
                  ),
                  color: 'grey',
                  children: (
                    <Link to="#experience" className="decoration-none">
                      <span className="resume-line-text">EXPERIENCE</span>
                    </Link>
                  ),
                },
                {
                  dot: (
                    <Badge>
                      <Avatar src={`../education.png`} size={20} />
                    </Badge>
                  ),
                  color: 'grey',
                  children: (
                    <Link to="#education" className="decoration-none">
                      <span className="resume-line-text">EDUCATION</span>
                    </Link>
                  ),
                },
              ]}
            />
          </Col>
          <Col className="resume-right">
            <div>
              <h1 id="basic-info">Resume</h1>
              <Row>
                <Col flex={4}>
                  <h2>LI Xiang</h2>
                  <h3>Full Stack Software Engineer</h3>
                  <h3>Looking for freelance job</h3>
                </Col>
                <Col flex={1} className="basic-info-left-col">
                  <Badge>
                    <Avatar
                      src={`../xiang2.jpg`}
                      className="resume-xiang-avatar"
                    />
                  </Badge>
                </Col>
              </Row>
            </div>
            <div>
              <h1 id="skills">SKILLS</h1>
              <div className="text-size">
                <p>
                  This section includes all my skills. I am first and foremost a
                  Full Stack Software Engineer but I also have a strong
                  background in machine learning and AI. This combination of
                  skills is what makes me unique and allows me to work on a wide
                  range of <Link to="/">projects</Link>.
                </p>
              </div>
              <Divider>Language</Divider>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={8}>
                  <Flex align="center" gap="small">
                    <Badge className="skill-badge">
                      <Avatar src={`../java.png`} />
                    </Badge>
                    <span className="skill-title">Java</span>
                  </Flex>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Flex align="center" gap="small">
                    <Badge className="skill-badge">
                      <Avatar src={`../kotlin.png`} />
                    </Badge>
                    <span className="skill-title">Kotlin</span>
                  </Flex>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Flex align="center" gap="small">
                    <Badge className="skill-badge">
                      <Avatar src={`../python.png`} />
                    </Badge>
                    <span className="skill-title">Python</span>
                  </Flex>
                </Col>
              </Row>

              <Divider>Framework / Tool</Divider>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={8}>
                  <Flex align="center" gap="small">
                    <Badge className="skill-badge">
                      <Avatar src={`../spring-boot.png`} />
                    </Badge>
                    <span className="skill-title">SpringBoot</span>
                  </Flex>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Flex align="center" gap="small">
                    <Badge className="skill-badge">
                      <Avatar src={`../axon.png`} />
                    </Badge>
                    <span className="skill-title">Axon CQRS</span>
                  </Flex>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Flex align="center" gap="small">
                    <Badge className="skill-badge">
                      <Avatar src={`../Kafka.png`} />
                    </Badge>
                    <span className="skill-title">Kafka</span>
                  </Flex>
                </Col>
              </Row>
              <br />
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={8}>
                  <Flex align="center" gap="small">
                    <Badge className="skill-badge">
                      <Avatar src={`../gatsbyjs.png`} />
                    </Badge>
                    <span className="skill-title">GatsbyJs</span>
                  </Flex>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Flex align="center" gap="small">
                    <Badge className="skill-badge">
                      <Avatar src={`../angular2.png`} />
                    </Badge>
                    <span className="skill-title">Angular</span>
                  </Flex>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Flex align="center" gap="small">
                    <Badge className="skill-badge">
                      <Avatar src={`../react.png`} />
                    </Badge>
                    <span className="skill-title">React</span>
                  </Flex>
                </Col>
              </Row>
              <br />
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={8}>
                  <Flex align="center" gap="small">
                    <Badge className="skill-badge">
                      <Avatar src={`../gradlekts.png`} />
                    </Badge>
                    <span className="skill-title">Gradle</span>
                  </Flex>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Flex align="center" gap="small">
                    <Badge className="skill-badge">
                      <Avatar src={`../maven.png`} />
                    </Badge>
                    <span className="skill-title">Maven</span>
                  </Flex>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Flex align="center" gap="small">
                    <Badge className="skill-badge">
                      <Avatar src={`../docker.png`} />
                    </Badge>
                    <span className="skill-title">Docker</span>
                  </Flex>
                </Col>
              </Row>
              <Divider>Database</Divider>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={8}>
                  <Flex align="center" gap="small">
                    <Badge className="skill-badge">
                      <Avatar src={`../PostgreSQL.png`} />
                    </Badge>
                    <span className="skill-title">MySQL / PostgreSQL</span>
                  </Flex>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Flex align="center" gap="small">
                    <Badge className="skill-badge">
                      <Avatar src={`../dynamodb.png`} />
                    </Badge>
                    <span className="skill-title">Dynamo DB</span>
                  </Flex>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Flex align="center" gap="small">
                    <Badge className="skill-badge">
                      <Avatar src={`../mongodb.png`} />
                    </Badge>
                    <span className="skill-title">Mongo DB</span>
                  </Flex>
                </Col>
              </Row>
              <Divider>Knowledge</Divider>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={8}>
                  <Flex align="center" gap="small">
                    <Badge className="skill-badge">
                      <Avatar src={`../bank.png`} />
                    </Badge>
                    <span className="skill-title">Open banking PIS/AIS</span>
                  </Flex>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Flex align="center" gap="small">
                    <Badge className="skill-badge">
                      <Avatar src={`../european.png`} />
                    </Badge>
                    <span className="skill-title">SEPA SDD/SCT/IGP</span>
                  </Flex>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Flex align="center" gap="small">
                    <Badge className="skill-badge">
                      <Avatar src={`../Euro.png`} />
                    </Badge>
                    <span className="skill-title">Balance</span>
                  </Flex>
                </Col>
              </Row>
              <br />
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={8}>
                  <Flex align="center" gap="small">
                    <Badge className="skill-badge">
                      <Avatar src={`../ml.png`} />
                    </Badge>
                    <span className="skill-title">Machine Learning</span>
                  </Flex>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Flex align="center" gap="small">
                    <Badge className="skill-badge">
                      <Avatar src={`../leetcode.png`} />
                    </Badge>
                    <span className="skill-title">Algorithm</span>
                  </Flex>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Flex align="center" gap="small">
                    <Badge className="skill-badge">
                      <Avatar src={`../kaggle.png`} />
                    </Badge>
                    <span className="skill-title">Kaggle</span>
                  </Flex>
                </Col>
              </Row>
              <br />
            </div>
            <div>
              <h1 id="experience">EXPERIENCE</h1>
              <div className="text-size">
                <p>
                  I define myself as a passionate and organized person. I am
                  rigorous, efficient and I appreciate quality work.
                </p>
              </div>
              <div className="text-size">
                <p>
                  I am constantly learning about new technologies, and I
                  undertake new personal projects in order to deepen my
                  knowledge as well as to be able to propose solutions adapted
                  to the work.
                </p>
              </div>
              <div className="text-size">
                <p>
                  I particularly like working in a team but I also know how to
                  be independent when necessary.
                </p>
              </div>
              <div className="text-size">
                <p>
                  I thrive not only by working, but also by bringing value to
                  the company, in which the ability to face challenges,
                  recognize and rectify mistakes and be tenacious is essential.
                </p>
              </div>
            </div>
            <div>
              <h1 id="education">EDUCATION</h1>
              <div className="text-size">
                <p>
                  I define myself as a passionate and organized person. I am
                  rigorous, efficient and I appreciate quality work.
                </p>
              </div>
              <div className="text-size">
                <p>
                  I am constantly learning about new technologies, and I
                  undertake new personal projects in order to deepen my
                  knowledge as well as to be able to propose solutions adapted
                  to the work.
                </p>
              </div>
              <div className="text-size">
                <p>
                  I particularly like working in a team but I also know how to
                  be independent when necessary.
                </p>
              </div>
              <div className="text-size">
                <p>
                  I thrive not only by working, but also by bringing value to
                  the company, in which the ability to face challenges,
                  recognize and rectify mistakes and be tenacious is essential.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}
export default Index
