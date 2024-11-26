import { useState } from "react"
import { list_of_posts, setIsPostLiked } from "./config"

interface IPostProps{
    id: number,
    title: string,
    description: string,
    image: string,
    author: string
}

interface ILikedOrNotProps{
    id: number,
    isLiked: boolean
}

function LikedOrNot(props: ILikedOrNotProps){
    console.log(props)
    if (props.isLiked == true){
        return <img id='likeImage' src="https://icons.veryicon.com/png/o/miscellaneous/yuanql/icon-like.png" alt=""/>
    }
    return <img id='likeImage' src="https://icons.veryicon.com/png/o/commerce-shopping/evaluation-interface-of-sanfu-official-mall/icon-like-2.png" alt=""/>
}

export function Post(props: IPostProps){
    const [likes, setLikes] = useState(0)
    console.log(props)
    function likePost(){
        console.log(list_of_posts[props.id].isPostLiked)
        if (list_of_posts[props.id].isPostLiked == false){
            console.log('yessss')
            setLikes(likes+1)
            list_of_posts[props.id].isPostLiked = true
            console.log(list_of_posts[props.id].isPostLiked)
            
        } else {
            console.log('noooo')
            setLikes(likes-1)
            list_of_posts[props.id].isPostLiked = false
            console.log(list_of_posts[props.id].isPostLiked)
            
        }
    }


    return(
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <img src={props.image} alt="" />
            <p>{props.author}</p>
            <button onClick={likePost} id="like">
                <LikedOrNot id={list_of_posts[props.id].id} isLiked={list_of_posts[props.id].isPostLiked}></LikedOrNot>
            </button>
            <p>{likes}</p>
        </div>
    )
}