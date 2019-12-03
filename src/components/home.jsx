import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle } from "../actions/article";
import { getPost } from "../actions/post";

class Home extends Component {
  state = {
    article: "",
    post: []
  };

  async componentDidMount() {
    this.props.getPost();
    //this.setState({ post });
  }

  handleArticle = event => {
    this.setState({ article: event.target.value });
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleArticle} />
        <button
          type="button"
          onClick={() => this.props.addArticle(this.state.article)}
        >
          Add
        </button>

        <div>
          Existing articles
          <ul>
            {this.props.articles.map(art => (
              <li key={art}> {art}</li>
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
    post: state.post.posts
  };
};

const mapDispatchToprops = dispatch => {
  return {
    addArticle: article => dispatch(addArticle(article)),
    getPost: dispatch(getPost())
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(Home);
