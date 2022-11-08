import { useState } from "react";
import { useHistory } from "react-router-dom";
import { blogCrud } from "../route-urls";

const Create = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('mario');
    const [niche, setNiche] = useState('personal');
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { "title":title, "content":content, "author":author, "niche":niche };
        setIsLoading(true);
        console.log(JSON.stringify(blog));
        fetch(blogCrud, {
            method:'POST',
            mode:'cors',
            headers: { "Content-type":'application/json' },
            body: JSON.stringify(blog)
        }).then(() => {
            setIsLoading(false)
            history.push('/')
        });
    }

    return ( 
        <div className="create">
            <h2>Add new blog.</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />
                <label>Blog content:</label>
                <textarea 
                    required
                    value={content}
                    onChange={(e)=>setContent(e.target.value)}
                />
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isLoading && <button>Add Blog</button>}
                {isLoading && <button disabled>Adding Blog...</button>}
                <p>{title}</p>
                <p>{content}</p>
                <p>{author}</p>
            </form>
        </div>
     );
}
 
export default Create;