import { PostList } from './PostList'

export function App(){
    return(
        <div>
            <header>
                <h1>MegaForum</h1>
                <p>Our forum has answers on all of your questions</p>
                <img src="https://ceit-blog.ucu.edu.ua/wp-content/uploads/2023/04/Forum-web.jpg" alt="" />
            </header>
            
            <main>
                <PostList></PostList>
            </main>
        
        </div>
    )
}