import React, { useState } from "react";

function ArticleItem({ article, onClickRemove }) {
    
    const [isOpen, setIsOpened] = useState(false);

    function handleToggle() {
        setIsOpened(!isOpen);
    }

    return (
        <li>

            <a href="#toggle" onClick={handleToggle}>
                {article.title}
            </a>

            <button onClick={() => onClickRemove(article.id)}>
                Remove
            </button>  
            
            <p style={{ display: isOpen ? "block" : "none" }}>
                {article.summary}    
            </p>
            
        </li>
    );
}

export default ArticleItem;