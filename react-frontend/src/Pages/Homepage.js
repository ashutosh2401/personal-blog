import useFetch from "../Custom-hooks/useFetch";
import BlogList from "../reusable components/BlogList";
import { allBlogs } from "../route-urls";

const Homepage = () => {
    const {data: blogs, isLoading, error} = useFetch(allBlogs);

    return ( 
        <div className="Home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {blogs && <BlogList blogs = {blogs} title="All Blogs"/>}
        </div>
     );
}
 
export default Homepage;