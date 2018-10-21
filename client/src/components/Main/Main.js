import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
// import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import Search from "./Search";
import Results from "./results";
import Saved from "./saved";

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
        return this.state.articles.map(article => {
            <Results
                id={article._id}
                key={article._id}
                title={article.title}
                date={article.date}
                url={article.url}
                handleSavedButton={this.handleSavedButton}
                showArticles={this.showArticles}
            />
        })
    }

    //to display saved articles in a div
    displaySavedArticles = () => {
        return this.state.saved.map(save => {
            <Results
                id={save._id}
                key={save._id}
                title={save.title}
                date={save.date}
                url={save.url}
                handleSavedButton={this.handleSavedButton}
                showArticles={this.showArticles}
            />
        })
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
        const matchArticleById = this.state.articles.find((db) => db._id === id);
        const newEntry = { title: matchArticleById.title, data: matchArticleById.date, url: matchArticleById.url };
        API.saveArticles(newEntry)
            .then(this.showArticles());

    };

    render() {
        return (
            <Container fluid>
                <Jumbotron>
                    <h1>New York Times Search</h1>
                    <h2>Your one-stop search medium for current articles</h2>

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
                        <Col size="sm-12">
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