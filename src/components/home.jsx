import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle } from "../actions/article";
import { getPost } from "../actions/post";

class Home extends Component {
  state = {
    article: "",
    posts: []
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.posts !== this.props.posts) {
      getPost();
      const posts = this.props.posts;
      this.setState({ posts });
    }
  }

  handleArticleTextBox = event => {
    this.setState({ article: event.target.value });
  };

  handleAddNewArticle = () => {
    this.props.addArticle(this.state.article);
    this.setState({ article: "" });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.article}
          onChange={this.handleArticleTextBox}
        />
        <button type="button" onClick={this.handleAddNewArticle}>
          Add
        </button>

        <div>
          <u> Existing articles </u>
          <ul>
            {this.props.articles.map((article, index) => (
              <li key={index}> {article}</li>
            ))}
          </ul>
        </div>

        <div>
          <u> Async call to get posts using sagas </u>
          <ul>
            {this.props.posts.map((post, index) => (
              <li key={index}> {post.title} </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    articles: state.article.articles,
    posts: state.post.posts
  };
};

const mapDispatchToprops = dispatch => {
  return {
    addArticle: article => dispatch(addArticle(article)),
    getPost: dispatch(getPost())
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(Home);
