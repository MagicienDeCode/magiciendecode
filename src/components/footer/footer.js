import * as React from 'react'
import './footer.less'
import { Row, Flex } from 'antd'
import { StaticImage } from 'gatsby-plugin-image'

const MyFooter = () => {
  return (
    <div className="footer-text">
      <Flex justify="center" className="follow-text" wrap="wrap">
        <div className="footer-col">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/xiang-li-3346b512a/"
            rel="noopener noreferrer"
          >
            <Flex justify="center" align="center">
              <StaticImage
                alt="linkedin"
                className="footer-img"
                src="../../images/linkedin-w.png"
              />
              <span className="footer-row-text">LINKDIN</span>
            </Flex>
          </a>
        </div>

        <div className="footer-col">
          <a
            target="_blank"
            href="https://github.com/MagicienDeCode"
            rel="noopener noreferrer"
          >
            <Flex justify="center" align="center">
              <StaticImage
                alt="github"
                className="footer-img"
                src="../../images/github-w.png"
              />
              <span className="footer-row-text">GITHUB</span>
            </Flex>
          </a>
        </div>
        <div className="footer-col">
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UCERe5JqcmPtyo3dzX94by1g?sub_confirmation=1"
            rel="noopener noreferrer"
          >
            <Flex justify="center" align="center">
              <StaticImage
                alt="youtube"
                className="footer-img"
                src="../../images/youtube-w.png"
              />
              <span className="footer-row-text">YOUTUBE</span>
            </Flex>
          </a>
        </div>
        <div className="footer-col">
          <a
            target="_blank"
            href="https://space.bilibili.com/520811931"
            rel="noopener noreferrer"
          >
            <Flex justify="center" align="center">
              <StaticImage
                alt="bilibili"
                className="footer-img"
                src="../../images/bilibili-w.png"
              />
              <span className="footer-row-text">BILIBILI</span>
            </Flex>
          </a>
        </div>
        <div className="footer-col">
          <a
            target="_blank"
            href="https://www.ixigua.com/home/105169725727/"
            rel="noopener noreferrer"
          >
            <Flex justify="center" align="center">
              <StaticImage
                alt="xigua"
                className="footer-img"
                src="../../images/xigua-w.png"
              />
              <span className="footer-row-text">XIGUA</span>
            </Flex>
          </a>
        </div>
        <div className="footer-col">
          <a
            target="_blank"
            href="https://leetcode.com/MagicienDeCode/"
            rel="noopener noreferrer"
          >
            <Flex justify="center" align="center">
              <StaticImage
                alt="leetcode"
                className="footer-img"
                src="../../images/leetcode-w.png"
              />
              <span className="footer-row-text">LEETCODE</span>
            </Flex>
          </a>
        </div>
      </Flex>
      <Row justify="center">
        <div className="copyright">
          <p>©{new Date().getFullYear()} Created by LI Xiang</p>
        </div>
      </Row>
    </div>
  )
}
export default MyFooter
