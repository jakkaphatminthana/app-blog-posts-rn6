import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'delete':
            console.log(`targetID: ${action.payload}`);
            return state.filter((blogPost) => blogPost.id !== action.payload);

        case 'edit':
            return state.map((blogPost) => {
                return (blogPost.id === action.payload.id)
                    ? action.payload
                    : blogPost;
            });
        case 'get_data':
            return action.payload;
        default:
            return state;
    }
}

const addBlogPost = (dispatch) => {
    return async (title, content, callback) => {
        await jsonServer.post('/blogposts', { title, content })

        if (callback) {
            callback();
        }
    };
}

const deleteBlogPost = (dispatch) => {
    return async (id) => {
        //delete at API
        await jsonServer.delete(`/blogposts/${id}`);

        //delete at state provider
        dispatch({ type: 'delete', payload: id });
    };
}

const editBlogPost = (dispatch) => {
    return async (id, title, content, callback) => {
        await jsonServer.put(
            `/blogposts/${id}`,
            { title, content },
        );

        dispatch({
            type: 'edit',
            payload: { id, title, content }
        });
        if (callback) {
            callback();
        }
    };
}

const getBlogPosts = (dispatch) => {
    return async () => {
        const response = await jsonServer.get('/blogposts');

        dispatch({ type: 'get_data', payload: response.data });
    };
};


export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
    [],
);

// const BlogContext = React.createContext();

// export const BlogProvider = ({ children }) => {
//     return <BlogContext.Provider value={5}>
//         {children}
//     </BlogContext.Provider>
// };

// export default BlogContext;