import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

import AuthService from '../services/authService';



class IndexPage extends Component {
    alignCenter = {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    cardWidth = {
        width: "500px"
    }

    floatActionButtonRight = {
        float: "right"
    }



    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleEmailChange = (e) => {
        console.log(e.target.value);
        e.persist()
        this.setState({
            email: e.target.value
        })
    }

    handlePasswordChange = (e) => {
        e.persist();
        this.setState((state) => {
            password: state.password = e.target.value
        })
    }

    handleSubmit = () => {
        let user = { email: this.state.email, password: this.state.password }
        AuthService.post(user)
            .then(response => {
                console.log(response)
            });
    }


    render() {
        return (
            <div style={this.alignCenter}>
                <Card style={this.cardWidth}>
                    <CardHeader
                        title="Admin Login Panel"
                        subtitle="Stock Management App"

                    />
                    <CardTitle title="Login" />
                    <CardText>
                        <TextField
                            type="email"
                            fullWidth={true}
                            floatingLabelText="Email Address"
                            value={this.state.email}
                            onChange={this.handleEmailChange}

                        />
                        <TextField
                            type="password"
                            fullWidth={true}
                            floatingLabelText="password"
                            value={this.state.password}
                            onChange={this.handlePasswordChange}

                        />
                    </CardText>
                    <p>Are you a new User ?<Link to="/signup">Signup</Link></p>
                    <CardActions style={this.floatActionButtonRight}>
                        <RaisedButton label="Login" primary={true} onClick={this.handleSubmit} />
                    </CardActions>
                </Card>
            </div>
        )
    }

}

export default IndexPage;