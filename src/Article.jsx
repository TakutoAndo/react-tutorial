import React, {useState} from 'react'
import LikeButton from './LikeButton'

const Article = (props) => {
    //Reacthooksの宣言　左がstate, 右がstate変更関数
    const [isPublished, togglePublished] = useState(false)

    return (
        <div>
            <h2>{props.title}</h2>
            <label htmlFor="check">公開状況: </label>
            <input type="checkbox" checked={isPublished} id="check" onClick={() => togglePublished(!isPublished)}/>
            <div>
                <label htmlFor="body"></label>
                <input type="text" id="body" onChange={() => props.createBody()}/>
                <p>{props.body}</p>
            </div>
            <LikeButton />
        </div>
    )
}

export default Article