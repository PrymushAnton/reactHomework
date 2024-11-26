export let list_of_posts = [
    {
        id: 0,
        isPostLiked: false
    },
    {
        id: 1,
        isPostLiked: false
    },
    {
        id: 2,
        isPostLiked: false
    }
]

interface ISetIsPostLiked{
    id: number,
    isPostLiked: boolean
}

export function setIsPostLiked(props: ISetIsPostLiked) {
    list_of_posts[props.id].isPostLiked = props.isPostLiked
}
