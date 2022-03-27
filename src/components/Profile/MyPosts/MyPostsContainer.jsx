import React from "react";
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {

    return (<StoreContext.Consumer>
        {(store) =>{
            let state = store.getState()
            let addPost = () => {
                store.dispatch(addPostCreator())
            }
            let onPostChange = (text) => {
                let action = updateNewPostTextCreator(text)
                store.dispatch(action)
            }
            return <MyPosts profilePage={state.profilePage}
                 updateNewPostText={onPostChange}
                 addPost={addPost}/>
        }
    }
    </StoreContext.Consumer>)
}

export default MyPostsContainer