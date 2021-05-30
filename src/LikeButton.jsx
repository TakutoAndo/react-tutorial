import React, {useState, useEffect} from 'react'

const LikeButton = (props) => {
    const [count, counter] = useState(0)
    const [limit,release] = useState(true)

    const countUp = () => {
        counter(count + 1)
    }

    useEffect(() =>{
        //mount時の処理
        console.log('rendering')
        document.getElementById('likeButton').addEventListener('click', countUp)
        if (count >= 10) counter(0)
        //unmount時の処理
        return () =>{
            console.log('unmounted')
            document.getElementById('likeButton').removeEventListener('click', countUp)
            release(!limit)
        }
    }, [limit])
    return (
        <button id={"likeButton"}>いいね数: {count}</button>
    )
}

export default LikeButton