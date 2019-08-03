const initState = {
    posts: [
        { id: '1', title: 'Squirtle Laid an Egg', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident necessitatibus harum iste facere cupiditate architecto voluptatibus. Sunt delectus sapiente nulla reprehenderit eligendi provident libero quisquam accusamus voluptatibus quam. At, sapiente.' },
        { id: '2', title: 'Charmander Laid an Egg', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident necessitatibus harum iste facere cupiditate architecto voluptatibus. Sunt delectus sapiente nulla reprehenderit eligendi provident libero quisquam accusamus voluptatibus quam. At, sapiente.' },
        { id: '3', title: 'a Helix Fossil was Found', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident necessitatibus harum iste facere cupiditate architecto voluptatibus. Sunt delectus sapiente nulla reprehenderit eligendi provident libero quisquam accusamus voluptatibus quam. At, sapiente.' }
    ]
}

const rootReducer = (state = initState, action) => {
    if(action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter( post => post.id !== action.id );
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer;