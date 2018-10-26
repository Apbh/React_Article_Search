import React, { Component } from "react";
import Jumbotron from "../Jumbotron/jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../Grid/index";
import Search from "../search/search";
import Results from "../results/results";
import Saved from "../saved/saved";
import "./Main.css"

class Main extends Component {
    state = {
        articles: [],
        saved: [],
        topic: "",
        startYear: "",
        endYear: ""

    };

    componentDidMount() {
        this.showArticles();
    }

    showArticles = () => {
        API.getArticles()
            .then(res =>
                this.setState({ saved: res.data })
            )
            .catch(err => console.log(err));
    }

    //To display search results in a div
    displayArticles = () => {
        return this.state.articles.map(article => (
            <Results
                _id={article._id}
                key={article._id}
                title={article.headline.main}
                date={article.pub_date}
                url={article.web_url}
                handleSavedButton={this.handleSavedButton}
                showArticles={this.showArticles}
            />
        ))
    }

    //to display saved articles in a div
    displaySavedArticles = () => {
        return this.state.saved.map(save => (

            <Saved
                _id={save._id}
                key={save._id}
                title={save.title}
                date={save.date}
                url={save.url}
                deleteArticle={this.deleteArticle}
                showArticles={this.showArticles}
            />

        ))
    }

    deleteArticle = id => {
        API.deleteArticles(id)
            .then(res => this.showArticles())
            .catch(err => console.log(err));
    }

    handleTopicChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleStartYearChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleEndYearChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmitButton = event => {
        event.preventDefault();
        API.fromNYT(this.state.topic, this.state.startYear, this.state.endYear)
            .then((res) => {
                this.setState({ articles: res.data.response.docs });
                console.log("this.state.articles: ", this.state.articles);
            })

    }

    handleSavedButton = id => {
        const matchArticleById = this.state.articles.find((article) => article._id === id);
        const newEntry = { _id: matchArticleById._id, title: matchArticleById.headline.main, url: matchArticleById.web_url, date: matchArticleById.pub_date };
        API.saveArticles(newEntry)
            .then(res => this.showArticles());

    };

    render() {
        return (
            <Container fluid>

                <Jumbotron>
                    <h1 className="appName">New York Times Search</h1>
                    <h2 className="subHeading">Your one-stop search medium for all articles</h2>

                </Jumbotron>

                <Search
                    handleTopicChange={this.handleTopicChange}
                    handleStartYearChange={this.handleStartYearChange}
                    handleEndYearChange={this.handleEndYearChange}
                    handleSubmitButton={this.handleSubmitButton}
                    displayArticles={this.displayArticles}
                />

                <Container>
                    <Row>
                        <Col size="lg-12">
                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    <h3 className="panel-title">
                                        <strong>
                                            <i className="fa fa-download" aria-hidden="true"></i> Saved Articles</strong>
                                    </h3>
                                </div>
                                <div className="panel-body">
                                    <ul className="list-group">

                                        {this.displaySavedArticles()}

                                    </ul>
                                </div>
                            </div>

                        </Col>

                    </Row>


                </Container>

            </Container>

        )


    }

}


export default Main