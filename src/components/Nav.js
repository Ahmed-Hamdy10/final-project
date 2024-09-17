import { useState, useEffect } from "react";
import { Link, json } from "react-router-dom";

function Nav() {
  let [seachInput, setInput] = useState("");
  let onChange = (e) => {
    setInput(e.target.value);
  };

  const [categorys, setCategory] = useState([]);

  useEffect(() => {
    fetch("https://xbellstore.com/itsharks24/blog/api/getcategory.php", json)
      .then((response) => response.json())
      .then((json) => {
        setCategory(json);
      });
  }, []);
  return (
    <>
      <header className="header">
        <div className="siteHeader">
          <div className="wrapper clear">
            <a href="index.html" className="mobile-logo"></a>
            <ul className="mainMenu clear">
              <li>
                <Link to="/Home" className="homePage">
                  home
                </Link>
              </li>
              <li>
                <a href="#">Category</a>
                <ul>
                  {categorys.map((category) => {
                    return (
                      <li>
                        <Link
                          to={"/Category/" + category.name}
                          className="otherPages"
                        >
                          {category.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            </ul>
            <div className="pull-right clear">
              <div className="headerSocialLinks clear">
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa fa-heart"></i>
                </a>
                <a href="#">
                  <i className="fa fa-pinterest"></i>
                </a>
                <a href="#">
                  <i className="fa fa-google-plus"></i>
                </a>
              </div>
              <div className="searchIcon"></div>
            </div>
            <span className="showMobileMenu">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
        </div>
        <a href="#" className="logo">
          IT SHARKS 33
        </a>

        <div className="searchPopup">
          <span className="closeBtn"></span>
          <div className="wrapper">
            <form action="https://highseastudio.com/demo/francoise-html/index.html">
              <input
                className=""
                type="text"
                name=""
                size="32"
                value={seachInput}
                onChange={onChange}
                placeholder="Search"
              />
            </form>
          </div>
        </div>
      </header>
    </>
  );
}
export default Nav;
