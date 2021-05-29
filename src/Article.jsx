import React from 'react'

const Article = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <label htmlFor="check">公開状況: </label>
            <input type="checkbox" checked={props.isPublished} id="check" onClick={() => props.toggle()}/>
            <div>
                <label htmlFor="body"></label>
                <input type="text" id="body" onChange={() => props.createBody()}/>
                <p>{props.body}</p>
            </div>
        </div>
    )
}

export default Article