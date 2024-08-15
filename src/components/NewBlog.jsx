import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function NewBlog(props) {
    const { title, setTitle } = useState('');
    const { body, setBody } = useState('');
    const { author, setAuthor } = useState('');
    const authorRef = useRef();
    const titleRef = useRef();
    const bodyRef = useRef();
    const history = useNavigate();

    function submitHandler(event) {
        event.preventDefault();
        const data = {
            title: titleRef.current.value,
            author: authorRef.current.value,
            body: bodyRef.current.value
        };
        addBlog(data);
    }

    function addBlog(data) {
        fetch('http://localhost:4000/blogs', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        }).then(() => { history('/') });
    }
    
    return (
        <div>
            <form className="form-control mb-3" onSubmit={submitHandler}>
                <div className="mb-3">
                    <label>Title</label>
                    <input className="form-control" type="text" value={title} ref={titleRef} />
                </div>
                <div className="mb-3">
                    <label>Author</label>
                    <input className="form-control" type="text" value={author} ref={authorRef} />
                </div>
                <div className="mb-3">
                    <label>Body</label>
                    <input className="form-control" type="text" value={body} ref={bodyRef} />
                </div>
                <button className="btn btn-success">Add blog</button>
            </form>
        </div>
    );
}

export default NewBlog
