import * as React from 'react'
import './footer.less'
import { Row, Col } from 'antd'

const MyFooter = () => {
  return (
    <div className="footer-text">
      <Row justify="center" className="follow-text">
        <Col className="footer-col">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/xiang-li-3346b512a/"
            rel="noopener noreferrer"
          >
            <img alt="linkedin" className="footer-img" src={`linkedin-w.png`} />
            <span className="footer-row-text">LINEDIN</span>
          </a>
        </Col>

        <Col className="footer-col">
          <a
            target="_blank"
            href="https://github.com/MagicienDeCode"
            rel="noopener noreferrer"
          >
            <img alt="github" className="footer-img" src={`github-w.png`} />
            <span className="footer-row-text">GITHUB</span>
          </a>
        </Col>
        <Col className="footer-col">
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UCERe5JqcmPtyo3dzX94by1g?sub_confirmation=1"
            rel="noopener noreferrer"
          >
            <img alt="youtube" className="footer-img" src={`youtube-w.png`} />
            <span className="footer-row-text">YOUTUBE</span>
          </a>
        </Col>
        <Col className="footer-col">
          <a
            target="_blank"
            href="https://space.bilibili.com/520811931"
            rel="noopener noreferrer"
          >
            <img alt="bilibili" className="footer-img" src={`bilibili-w.png`} />
            <span className="footer-row-text">BILIBILI</span>
          </a>
        </Col>
        <Col className="footer-col">
          <a
            target="_blank"
            href="https://www.ixigua.com/home/105169725727/"
            rel="noopener noreferrer"
          >
            <img alt="xigua" className="footer-img" src={`xigua-w.png`} />
            <span className="footer-row-text">XIGUA</span>
          </a>
        </Col>
        <Col className="footer-col">
          <a
            target="_blank"
            href="https://leetcode.com/MagicienDeCode/"
            rel="noopener noreferrer"
          >
            <img alt="leetcode" className="footer-img" src={`leetcode-w.png`} />
            <span className="footer-row-text">LEETCODE</span>
          </a>
        </Col>
      </Row>
      <Row justify="center">
        <div className="copyright">
          <p>©{new Date().getFullYear()} Created by LI Xiang</p>
        </div>
      </Row>
    </div>
  )
}
export default MyFooter
