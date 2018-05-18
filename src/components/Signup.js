import React from 'react';
import TextField from 'material-ui/TextField';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';
import { newUser } from '../actions/createUser'
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';


class Signup extends React.Component{

    constructor(props){
        super(props);
        
        // const {dispatch}=props;
        // this.boundActionCreators = bindActionCreators(signUp, dispatch)
    }

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

    state={
        userName:"",
        password:"",
        confirmPassword:"",
        error:""
    }

    handleEmail=(e)=>{
        const userName=e.target.value;
        this.setState(()=>({userName}))
    }

    handlePassword=(e)=>{
        const password=e.target.value;
        this.setState(()=>({password}))
    }

    handleRetypePassword=(e)=>{
        const confirmPassword=e.target.value;
        this.setState(()=>({confirmPassword}))
    }


    handleSubmit=()=>{
        // console.log(this.state.confirmPassword,"erro")
        // if(this.state.password!=this.state.confirmPassword){
        //     this.setState({error:"Password didnot matched .."})
        // }else{
           this.props.dispatch(newUser({userName:this.state.userName,
            password:this.state.password,confirmPassword:this.state.confirmPassword}))
        //    }
    }

    render(){
       
        return (
            <div style={this.alignCenter}>
                <Card style={this.cardWidth}>
                    <CardHeader
                        title={this.props.msg.userName}
                    />
                    <CardTitle title="Sign Up" />
                    <p className="error">{this.state.error}</p>
                    <CardText>
                        <TextField
                            type="UserName"
                            fullWidth={true}
                            floatingLabelText="Email Address"
                            onChange={this.handleEmail}
                        />
                        <TextField
                            type="password"
                            fullWidth={true}
                            floatingLabelText="password"
                            onChange={this.handlePassword}
                        />
                        <TextField
                            type="password"
                            fullWidth={true}
                            floatingLabelText="retype password"
                            onChange={this.handleRetypePassword}
                        />
                    </CardText>
                    <CardActions style={this.floatActionButtonRight}>
                        <RaisedButton label="Sign up" primary={true} onClick={this.handleSubmit} />
                    </CardActions>
                </Card>
            </div>
        )
    }
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({
//       signUpDispatch:
      
//     }, dispatch)
//   }

const mapStateToProps=(state)=>{
    debugger
    return {
        msg: state.signup
    }
}


export default connect(mapStateToProps)(Signup);