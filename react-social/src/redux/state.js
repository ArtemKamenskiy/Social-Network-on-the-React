import {renderThree} from "../render";

let state = {
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'John'},
            {id: 2, name: 'Peter'},
            {id: 3, name: 'Mike'}
        ]
    },
    messagesPage: {
        messageObj : [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
        ]
    },
    profilePage: {
        posts: [
            {id: 1, text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."', likes: 0},
            {id: 1, text: 'O, hi Mark :)', likes: 1},
            {id: 1, text: 'O, hi Mark :)', likes: 2}
        ],
        profileInfo: [
            {name: 'User', city: 'Cherkassy', age: 22}
        ],
    }
};
console.log(state.profilePage.posts);
export let newPost = (newMessage, likesCount) => {
    let post = {
        id: 10,
        text: newMessage,
        likes: likesCount
    };
    state.profilePage.posts.push(post);
    renderThree(state);
    console.log(state.profilePage.posts);
};

export default state;
