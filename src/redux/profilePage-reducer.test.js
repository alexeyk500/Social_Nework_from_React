import profilePageReducer, { ADD_POST_CREATOR } from './profilePage-reducer';

// 1. Initial state
const state = {
  posts: [{postId:1, postText:'Hi, how are you?'},
          {postId:2, postText:'Do you listen to me?'},
          {postId:3, postText:'Why do you not answer?'},
          {postId:4, postText:'blablabla - blablabla'},
          ],
  profile: null,
  status: '',
};

it('new post should be added',()=>{
  // 2. Action
  const action = ADD_POST_CREATOR('New Mey TEST Post')
  let newState = profilePageReducer(state, action);

  // 3. Expectation
  expect(newState.posts.length).toBe(5);
});

it('new post added right text',()=>{
  // 2. Action
  const action = ADD_POST_CREATOR('New Mey TEST Post')
  let newState = profilePageReducer(state, action);

  // 3. Expectation
  expect(newState.posts[4].postText).toBe('New Mey TEST Post');
});



