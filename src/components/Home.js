import { useEffect, useState } from "react";
import { json, Link } from "react-router-dom";

function Home() {
  const [recentPosts, setResPost] = useState([]);

  useEffect(() => {
    fetch("https://xbellstore.com/itsharks24/blog/api/getrecentpost.php", json)
      .then((response) => response.json())
      .then((json) => {
        setResPost(json);
      });
  }, []);

  const [posts, setPost] = useState([]);

  useEffect(() => {
    fetch("https://xbellstore.com/itsharks24/blog/api/getposts.php", json)
      .then((response) => response.json())
      .then((json) => {
        setPost(json);
      });
  }, []);
  const baseUrl = "https://xbellstore.com/itsharks24/blog/admin/";

  return (
    <>
      <section className="container ">
        <div className="wrapper clear">
          <div className="clear"></div>
          <div className="contentLeft">
            <div className="blogPostListWrap">
              {posts.map((post) => (
                <div className="blogPostListItem clear" key={post.id}>
                  <Link
                    to={`/Single/${post.category}/${post.id}`}
                    className="blogPostListImg otherPages"
                  >
                    <img src={baseUrl + post.image} alt="Francoise img" />
                  </Link>
                  <div className="blogPostListText">
                    <div className="blogPostListTime">{post.date}</div>
                    <h3 className="otherPages">
                      <Link to={`/Single/${post.category}/${post.id}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <p
                      dangerouslySetInnerHTML={{ __html: post.description }}
                    ></p>
                  </div>
                </div>
              ))}
            </div>

            <div className="postPagination">
              <ul className="clear">
                <li className="newPosts">
                  <a href="#">New posts</a>
                </li>
                <li className="olderPosts">
                  <a href="#">Older posts</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="sidebarRight">
            <div className="sidebar-widget">
              <h3>About us</h3>
              <div className="aboutMeWidget">
                <img src="images/ourlogo.png" alt="Francoise img" />
                <p>
                  A training company specialized in teaching programming
                  languages, networking and computer science to ensure that you
                  get practical experience in the field of software.
                </p>
              </div>
            </div>
            <div className="sidebar-widget">
              <h3>follow me</h3>
              <div className="followMeSocialLinks">
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
                <span></span>
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
                <span></span>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
                <span></span>
                <a href="#">
                  <i className="fa fa-heart"></i>
                </a>
                <span></span>
                <a href="#">
                  <i className="fa fa-pinterest"></i>
                </a>
                <span></span>
                <a href="#">
                  <i className="fa fa-google-plus"></i>
                </a>
              </div>
            </div>

            <div className="sidebar-widget">
              <h3>Recent post</h3>
              <div className="popularPostsWidget">
                {recentPosts.map((recentPost) => {
                  return (
                    <div className="popularPostsWidgetItem">
                      <a href="#" className="popularPostsItemImg">
                        <img
                          src={baseUrl + recentPost.image}
                          alt="Francoise img"
                        />
                      </a>
                      <time datetime="2015-05-15">{recentPost.date}</time>
                      <h4>
                        <a href="#">{recentPost.title}</a>
                      </h4>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="clear"></div>
      </section>{" "}
    </>
  );
}
export default Home;
