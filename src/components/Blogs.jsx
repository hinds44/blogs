import { useEffect, useState } from 'react';
import BlogList from './BlogList';

function Blogs() {
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        fetch('http://localhost:4000/blogs')
            .then(res => {
                return res.json();
            }).then(data => {
                setBlogs(data);
            })
        }, []);

    function deleteBlog(id) {
        fetch('http://localhost:4000/blogs/' + id, {
            method: 'DELETE',
        }).then(() => {
            alert('Deleted!');
            const newBlogs = blogs.filter(item => item.id !== id);
            setBlogs(newBlogs);
        });
    }

    // function deleteBlogOld(id) {
    //     const newBlogs = blogs.filter(item => item.id !== id);
    //     setBlogs(newBlogs);
    // }

    return (
        <div class="row">
            {blogs && <BlogList blogs={blogs} deleteBlog={deleteBlog} /> }

        </div>
    );
}

export default Blogs;
