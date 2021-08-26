import React, {Component} from 'react'
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../../utils/validators/validators'
import { Textarea } from '../../common/FormsControls/FormsControls'
import s from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = React.memo((props) => {

    let postsElements = props.postData.map((post) => (
      <Post message={post.message} likeCount={post.likeCount} />
    ));

  let addNewPost = (value) => {
    props.addPost(value.newPostText);
  }

    return (
      <div className={s.postsBlock}>
        <h3>My Posts</h3>
        <div>
          <AddPostReduxForm onSubmit={addNewPost} />
        </div>
        <div className={s.posts}>{postsElements}</div>
      </div>
    );
  })

const maxLength10 = maxLengthCreator(10)

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name={"newPostText"}
          placeholder={"Enter your post"}
          validate={[required, maxLength10 ]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
}

const AddPostReduxForm = reduxForm({ form : 'addPostForm' })(AddPostForm)

export default MyPosts;