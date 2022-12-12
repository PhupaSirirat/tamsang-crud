
import React, { useState } from 'react';
import '../styles/contact.css';

const Contact = () => {
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = () => {
      const date = new Date();
      const showTime = date.getFullYear() + "/" + (date.getMonth()+1) + "/" + date.getDate() 
      + " " + date.getHours() 
      + ":" + date.getMinutes() 
      + ":" + date.getSeconds();

      const jsonData = {
        name: inputs.name,
        email: inputs.email,
        feedback: inputs.feedback,
        showTime: showTime,
      }

      fetch('http://localhost:3333/history', {
            method: 'POST',
            crossDomail : true,
            headers: {
                'Content-Type': 'application/json',
                Accept : "application/json",
                "Access-Control-Allow-Origin" : "*",
            },
            body: JSON.stringify(jsonData),
            })
            .then((response) => response.json())
            .then((data) => {
                if(data.status === "ok"){
                    alert("Feedback sended")
                } else {
                    alert("Feedback failed to send")
                }
            })
            .catch((error) => {
                alert('Error: fail to add');
            });
    }

    return (
        <div>
          <meta charSet="UTF-8" />
            <link rel="stylesheet" href="contact.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <div className="container">
              <div className="content">
                <div className="left-side">
                  <div className="address details">
                    <i className="fas fa-map-marker-alt" />
                    <div className="topic">Address</div>
                    <div className="text-one">Phayathai Road, Pathumwan</div>
                    <div className="text-two">Bangkok, Thailand</div>
                  </div>
                  <div className="phone details">
                    <i className="fas fa-phone-alt" />
                    <div className="topic">Phone</div>
                    <div className="text-one">+66 2215 3555</div>
                    <div className="text-two">+66 2218 2000</div>
                  </div>
                  <div className="email details">
                    <i className="fas fa-envelope" />
                    <div className="topic">Email</div>
                    <div className="text-one">pr.chula.ac.th</div>
                    <div className="text-two">int.off@chula.ac.th</div>
                  </div>
                </div>
                <div className="right-side">
                  <div className="topic-text">Send us a feedback</div>
                  <p>If you have any feedback, please leave it below.</p>
                  <form action="#">
                    <div className="input-box">
                      <input type="text" placeholder="Enter your name" name="name" value={inputs.name} onChange={handleChange} required/>
                    </div>
                    <div className="input-box">
                      <input type="text" placeholder="Enter your email" name="email" value={inputs.email} onChange={handleChange} required/>
                    </div>
                    <div className="input-box message-box">
                      <input type="text" placeholder="Enter your feedback" name="feedback" value={inputs.feedback} onChange={handleChange} required/>
                    </div>
                    <div className="button">
                      <input type="submit" defaultValue="Send" onClick={handleSubmit}/>
                    </div>
                  </form>
                </div>
              </div>
            </div>
        </div>
        
        
    );
};

export default Contact;