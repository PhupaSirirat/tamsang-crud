
import React from 'react';

const Contact = () => {

    return (
        <div class="allform">
            <div>
            <center><label><h1>Contact Us</h1></label></center>
            <center><label>if you have any problem you can send me message from here.</label></center>
        </div>

        <form>
            <div class = "singleform" >
            <input
                        class="insideform"
                        type="text"
                        placeholder='Enter your name'
                        name="firstname"
                    />
            </div>
            <div class = "singleform" >
            <input
                        class="insideform"
                        type="text"
                        placeholder='Enter your email'
                        name="email"
                    />
            </div>
            <div class = "singleform" >
            <input
                        class="insideform"
                        type="text"
                        placeholder='Enter your massage'
                        name="message"
                    />
            </div>
            <div class="submitframe">
            <button className="addTOCart__btn">
                                    Send
            </button>
            </div>

        </form>

        </div>
        
        
    );
};

export default Contact;