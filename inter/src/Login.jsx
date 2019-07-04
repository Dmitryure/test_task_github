import React from 'react'
import { Grid, Form, Segment, Button, Icon, Header } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {login} from './redux/actions/login'

class Login extends React.Component {
    state = {
        user: '',
        password: '',
        loading: false,
        loginError: false

    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleLogin = () => {
        const {user, password} = this.state
        if(user === 'admin' && password === '123'){
            console.log('logged in ')
            login()
        }else{
            this.setState({loginError:true})
        }
    }

    render() {
        const { user, password, loading } = this.state
        return (

            <React.Fragment>
                <Grid textAlign='center' verticalAlign='middle' className='app'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as="h1" icon color="orange" textAlign='center'>
                            <Icon name="user circle" color="violet" />
                            Login
                    </Header>   
                        <Form size='large' onSubmit={this.handleSubmit}>
                            <Segment>
                                <Form.Input fluid name='user' icon='user' iconPosition='left' placeholder="user" value={user}
                                    onChange={this.handleChange} type='user'/>

                                <Form.Input fluid name='password' icon='lock' iconPosition='left' placeholder="password" value={password}
                                    onChange={this.handleChange} type='password' />
                                <Button disabled={loading} className={loading ? 'loading' : ''} color='violet' fluid_size='large' onClick = {this.handleLogin}> Submit </Button>
                            </Segment>
                        </Form>
                    </Grid.Column>
                </Grid>
            </React.Fragment>
        )
    }
}



export default connect (null, {login})(Login)