import React from "react"

const Header = () => {
  return (
    <div className="header">
      <div className="title-div">
        <h1 className="colorshift neon">NEONFICKS</h1>
        <div className="tagline">1980's Movie Nostalgia</div>
      </div>
      <div className="input-div">
        <input
          className="input"
          type="text"
          name="fname"
          placeholder="Screen Name"
        ></input>
        <input
          className="input"
          type="text"
          name="fname"
          placeholder="Email or Phone"
        ></input>
      </div>
      <button className="signin">
        <h2>SIGN IN</h2>
      </button>
      <div className="right-side-links">
        <a
          className="gitlink"
          href="https://github.com/romanpirag"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github-square" />
        </a>

        <a
          className="linkedin-link"
          href="https://www.linkedin.com/in/romanpirag/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin" />
        </a>
      </div>
    </div>
  )
}

export default Header
