import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "./postSlice";
import { selectAllUsers } from "../user/usersSlice";




const AddPost = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');

    const dispatch = useDispatch();
    const users = useSelector(selectAllUsers);


    const onTitleChange = (e) => setTitle(e.target.value); 
    const onContentChange = (e) => setContent(e.target.value); 
    const onUserChange = (e) => setUserId(e.target.value);

    const addNewPost = () => {
        dispatch(addPost({title, content, userId}))
    }

    const userOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

    return (
    <section>
        <form>
            <label htmlFor="title">Title:</label>
            <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={onTitleChange}/>

            <label htmlFor="content">Content:</label>
            <textarea
            id="content"
            name="content"
            value={content}
            onChange={onContentChange}
            >
            </textarea>

            <label htmlFor="user">Author:</label>
            <select id="user" value={userId} onChange={onUserChange}>
                <option value=""></option>
                {userOptions}

            </select>
            <button type="button" onClick={addNewPost}>Add Post</button>
        </form>
    </section>
  )
}

export default AddPost