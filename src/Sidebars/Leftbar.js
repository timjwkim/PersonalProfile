import React from 'react';
import './Sidebar.css';
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUserTag } from "react-icons/fa";

class Leftbar extends React.Component {
  render() {
    return (
      <div className="Left">
        <div className="Github">
          <DiGithubBadge size='2.5rem' />
        </div>
        <div className="Linkedin">
          <FaLinkedin size='2rem' />
        </div>
        <div className="Leetcode">
          <FaUserTag size='1.5rem' />
        </div>
        <div className="Email">
          <MdEmail size='2rem' />
        </div>
      </div>
    )
  }
}

export default Leftbar;
