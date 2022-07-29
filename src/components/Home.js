import { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { getAllPosts } from "../ReqFuns";
class Home extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    this.loadPosts();
  }
  loadPosts() {
    getAllPosts()
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          this.setState({ posts: data });
        }
      });
  }
  render() {
    return (
      <div className="mainDisplay">
        <div className="postsContainer">
          {this.state.posts.map((post) => (
            <Link to = {`/post/${post.slug}`} key={post.id} className="postCard" >
              <h3>{post.title}</h3>
              <span>by {post.username}</span>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}
export default Home;
