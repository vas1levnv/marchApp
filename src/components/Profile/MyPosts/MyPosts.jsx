import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let posts = [
        {id:1, message: 'hi how are you?', likeCounts:12},
        {id:2, message: 'my first post', likeCounts:11},
    ]

    let postsElements = posts.map( p => <Post message={p.message} likeCounts={p.likeCounts}/>)

    return(<div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts