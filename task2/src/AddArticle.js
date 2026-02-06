import React from "react";

function AddArticle( {
    name,
    title,
    summary,
    onChangeTitle,
    onChangeSummary,
    onClickAdd
}) {

    return (
        <section>

            <h2>{name}</h2>

            <input
                placeholder="Title"
                value={title}
                onChange={onChangeTitle}
            />
            
            <input 
                placeholder="Summary"
                value={summary}
                onChange={onChangeSummary}
            />

            <button onClick={onClickAdd}>
                Add Article
            </button>
        </section>
    );

}

export default AddArticle;