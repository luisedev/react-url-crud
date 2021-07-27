import React from 'react';
import axios from 'axios';

interface IPost {
    id: number;
    userId?: number;
    title: string;
    body: string;
}

const defaultPosts: IPost[] = [];

const AxiosReqView = () => {
    const [posts, setPosts]: [IPost[], (posts: IPost[]) => void] = React.useState(defaultPosts);
    const [loading, setLoading]: [boolean, (loading: boolean) => void] = React.useState<boolean>(true);
    const [error, setError]: [string, (error: string) => void] = React.useState("");

    React.useEffect(() => {
        axios
            .get<IPost[]>("https://jsonplaceholder.typicode.com/posts", {
                headers: {
                    "Content-Type": "application/json"
                },
            }).then(response => {
                setPosts(response.data);
                setLoading(false);
            })
            .catch(e => {
                const error = e.response.status === 404
                    ? "Resource Not found"
                    : "An unexpected error has occurred";
                setError(error);
                setLoading(false);
            });
    }, []);

    return (
        <section id="content">
            <ul className="posts">
                {posts.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default AxiosReqView;