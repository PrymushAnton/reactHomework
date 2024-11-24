import { Post } from './Post'

export function PostList(){

    const posts = [
        {
            id: 0,
            title: "Title1",
            description: "Description1",
            image: "https://automationpanda.com/wp-content/uploads/2017/09/django-logo-negative.png?w=620",
            author: "Author1",
        },
        {
            id: 1,
            title: "Title3",
            description: "Description3",
            image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*1UBNwRFaslvqt_G3Njw3pg.jpeg",
            author: "Author3",
        },
        {
            id: 2,
            title: "Title2",
            description: "Description2",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/512px-React_Logo_SVG.svg.png",
            author: "Author2",
        }
    ]

    return(
        <div>
            {posts.map( (post) => {
                return <div>  
                            <Post key={post.id} title={post.title} description={post.description} image={post.image} author={post.author}></Post>
                            <hr/>
                        </div>
            }
            )}
        </div>
    )
}