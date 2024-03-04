import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice"; // Correct module name
import PostAuthor from "./PostAuthor";
import ReactionButtons from "./ReactionButtons";
import TimeAgo from "./TimeAgo";



const PostList = () => {

    const posts = useSelector(selectAllPosts);
    const renderedPosts = posts.map((post) => (
        <article key={post.id}>
            <h3>
                {post.title}
            </h3>
            <p>
                {post.content}
            </p>
            <PostAuthor userId={post.userId} />
            <TimeAgo timestamp={post.date} />

            <ReactionButtons post={post} />

        </article>
        ))
        
    return (
    <section>
    <div>PostList</div>
    {renderedPosts}
    </section>
  )
}

export default PostList