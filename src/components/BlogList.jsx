import Card from "./Card"

function BlogList(props) {
    const blogList = props.blogs.map(blog => {
        return (
            <Card key={blog.id}>
                <div key={blog.id}>
                    <h5 class="card-header">{blog.title}</h5>
                    <div class="card-body">
                        <p>Author: {blog.author}</p>
                        <p>Body: {blog.body}</p>
                        <button class="btn btn-danger" onClick={() => props.deleteBlog(blog.id)}>Delete</button>
                    </div>
                </div>
            </Card>
        )
    });

    return blogList;
}

export default BlogList;