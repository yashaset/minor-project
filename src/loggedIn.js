import React from 'react';
import './loggedIn.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
class LoggedIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            company: '',
            date: '',
            title: '',
            date: '',
            time: ''
        }
    }
    handleNameChange=(e)=>{
        this.setState({name: e.target.value});
    };
    handleEmailChange=(e)=>{
        this.setState({email: e.target.value});
    };
    handleCompanyChange=(e)=>{
        this.setState({company: e.target.value});
    };
    handleTitleChange=(e)=>{
        this.setState({title: e.target.value});
    };
    handleDateChange=(e)=>{
        this.setState({date: e.target.value});
    };
    handleTimeChange=(e)=>{
        this.setState({time: e.target.value});
    };


    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.name);
        console.log(this.state.email);
        console.log(this.state.company);
        console.log(this.state.title);
        console.log(this.state.date);
        console.log(this.state.time);


    };
     
    render(){
        const user = "Yash Rawat";
        return(
            <div className='conference'>
                <div className="content-main">
                    <h1>Welcome, {user}</h1>
                    <p>Fill up this application on the right<br/>and schedule yourself a conference<br/> anytime, anywhere!</p>
                </div>
 
                    <form action="/create-meeting" method="post" className='formclass' onSubmit={this.handleSubmit}>

                        <br />
                        <h3>Fill up the following details in order <br />to do so</h3>
                        <br />
                        <div className="details">
                        Your name:
                        <br />
                        <input type="text" name="name" id="name" required value={this.state.name} onChange={this.handleNameChange}/>
                        <br />
                        Email id:
                        <br />
                        <input type="text" name="email_id" id="email" required value={this.state.email} onChange={this.handleEmailChange}/>
                        <br />
                        Company name:<br />
                        <input type="text" name="company_name" id="company" required value={this.state.company} onChange={this.handleCompanyChange} />
                        <br />
                        Conference title:<br />
                        <input type="text" name="conference_title" id="title" required value={this.state.title} onChange={this.handleTitleChange}/>
                        <br />

                        Conference date:<br />
                        <input type="date" name="conference_date" id="date"  placeholder="Hello" required value={this.state.date} onChange={this.handleDateChange}/>
                        <br />
                        Conference Time:<br />
                        <input type="time" name="conference_time" id="time"  required value={this.state.time} onChange={this.handleTimeChange} />
                        <br />
                        </div>
                        <div className="submit">
                        <input type="submit"  onClick={this.handleSubmit} value="Submit" />
                        </div>
                    </form>
            </div>
        )
    }
        
};

export default LoggedIn;