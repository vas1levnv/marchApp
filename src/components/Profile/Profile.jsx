import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return(
        <div className={s.content}>
            <div>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt=""/>
            </div>
            <div>
                ava + discr
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile