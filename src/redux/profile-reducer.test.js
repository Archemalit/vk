import profileReducer, { addPost, deletePost } from "./profile-reducer";


test('one more', () => {

    let state = {
        postData: [
          { id: 1, message: "Hi, how are you?", likeCount: 7 },
          { id: 2, message: "It's my first post.", likeCount: 12 },
        ],
        newPostText: "it",
        profile: null,
        status : ''
      };

      let action = deletePost(1)

      let newState = profileReducer(state, action);

      expect(newState.postData.length).toBe(1)

})