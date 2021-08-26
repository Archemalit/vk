import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { required } from '../../utils/validators/validators'
import { Input } from '../common/FormsControls/FormsControls'
import { loginTH, logoutTH } from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom'
import s from '../common/FormsControls/FormsControls.module.css'

const Login = (props) => {

    const onSubmit = (formData) => {
        props.loginTH(formData.email, formData.password, formData.rememberMe,)
    }
    
    if (props.isAuth) {
      return <Redirect to={'/profile'} />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const LoginForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            placeholder={"Email"}
            name={"email"}
            validate={[required]}
            component={Input}
          />
        </div>
        <div>
          <Field
            placeholder={"Password"}
            name={"password"}
            type={"password"}
            validate={[required]}
            component={Input}
          />
        </div>
        <div>
          <Field type={"checkbox"} name={"rememberMe"} component={"input"} />{" "}
          Remember me
        </div>
        { props.error && <div className={s.summaryError}>{props.error}</div> }
        <div>
          <button>Login</button>
        </div>
      </form>
    );
}

const LoginReduxForm = reduxForm({ form : 'login' })(LoginForm)

const mapStateToProps = (state) => ({
  isAuth : state.auth.isAuth
})

export default connect(mapStateToProps, {loginTH, logoutTH} )(Login);