const postReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_MOVIE':
            return state.concat([action.data])
        case 'DELETE_MOVIE':
            return state.filter((post) => post.id !== action.id)
        case 'EDIT_MOVIE':
            return state.map((post) => post.id === action.id ? { ...post, editing: !post.editing } : post)
        case 'UPDATE':
            return state.map((post) => {
                if (post.id === action.id) {
            return {
                ...post,
                title: action.data.newTitle,
                year: action.data.newDate,
                duration: action.data.newDuration,
                editing: !post.editing
            }
            } else return post;
            })
        default:
            return state;
            }
    }
    export default postReducer;