import { useHistory, useParams } from "react-router-dom";
import useFetch from "../Custom-hooks/useFetch";
import { blogCrud } from "../route-urls";

const BlogDetails = () => {
    const { id } = useParams();
    const {data:blog, isLoading, error} = useFetch(`${blogCrud}/${id}`);
    const history = useHistory();

    const handleClick = () => {
        fetch(`${blogCrud}/${id}`, {
            method: "DELETE"
        }).then(() => {
            history.push('/');
        })
    }

    return ( 
        <div className="blog-details">
            {isLoading && <div>Loading...</div>}
            {error && <div>error is {error}</div>}
            {blog && <article>
                <h2>{blog.title} </h2>
                <p>Written by {blog.author}</p>
                <div>{blog.content}</div>
                <button onClick={handleClick}>delete</button>
            </article>}
        </div>
    );
}
 
export default BlogDetails;