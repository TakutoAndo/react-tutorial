import React from 'react'

const LikeButton = (props) => {
    return (
        <button id={"likeButton"}>いいね数: {props.count}</button>
    )
}

export default LikeButton