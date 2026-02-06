import React, { useState } from "react";
import AddArticle from "./AddArticle";
import ArticleList from "./ArticleList";

function ArticleManager() {

    const [articles, setArticles] = useState([]);

    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");

    function handleApp() {

        if (!title || !summary) return;

        const newArticle = {
            id: Date.now(),
            title: title,
            summary: summary
        };

        setArticles([...articles, newArticle]);
        setTitle("");
        setSummary("");
    }
        
    function handleRemove(id) {
        
        const filtered = articles.filter(
            article => article.id !== id
        );

        setArticles(filtered);
    }

    return (
        <div>
            
            <h1>AddArticles Manager</h1>

            <AddArticle
                name="New Article"
                title={title}
                summary={summary}
                onChangeTitle={(e) => setTitle(e.target.value)}
                onChangeSummary={(e) => setSummary(e.target.value)}
                onClickAdd={handleApp}
            />

            <ArticleList
                articles={articles}
                onClickRemove={handleRemove}
            />
        
        </div>
    );
}

export default ArticleManager;