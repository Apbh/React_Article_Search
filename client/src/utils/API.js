import axios from "axios";

export default {
    fromNYT: function (topic, startYear, endYear) {
        const apiKey = "d9794e7ec8b94d83a607921ee41f0474";
        const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
            apiKey + "&q=" + topic + "&begin_date=" + startYear + "0101&end_date=" + endYear + "0101";
            console.log(queryURL);
        return axios.get(queryURL);
        
    },

    // Gets all books
    getArticles: function () {
        return axios.get("/api/articles");
    },

    // Saves a book to the database
    saveArticles: function (articleData) {
        return axios.post("/api/articles", articleData);
       
    },
    // Deletes the book with the given id
    deleteArticles: function (id) {
        return axios.delete("/api/articles/" + id);
    }
};
