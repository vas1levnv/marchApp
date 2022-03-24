import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    return(<div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                <Post message='hi how are you?' likeCounts='11'/>
                <Post message='my first post' likeCounts='11'/>
            </div>
        </div>
    )
}

export default MyPosts