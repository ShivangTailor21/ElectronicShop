import React, { useState } from 'react';
import './contact.css';

const Contact = () => {

    const [user , setuser] = useState({
        Name: '', email: '', subject: '', Message: ''
    });

    const data = (e) => {
        const values = e.target.value;
        const names = e.target.name;
        setuser({ ...user, [names]: values });
    };

    const send = async (e) => {
        e.preventDefault();
        const { Name, email, subject, Message } = user;
        const option = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ Name, email, subject, Message })
        };

        try {
            const response = await fetch('https://react-ecommerce-contact-78ff7-default-rtdb.firebaseio.com/Message.json', option);
            if (!response.ok) {
                throw new Error('Failed to send message');
            }
            // Reset form after successful submission if needed
            setuser({
                Name: '', email: '', subject: '', Message: ''
            });
            alert('Message sent successfully!');
        } catch (error) {
            console.error('Error:', error.message);
            // Handle error appropriately, e.g., display error message to the user
            alert('Failed to send message. Please try again later.');
        }
    };

    return (
        <div className='contact'>
            <div className='container'>
                <div className='form'>
                    <h2>#Contact us</h2>
                    <form onSubmit={send}>
                        <div className='box'>
                            <div className='lable'>
                                <h4>Name</h4>
                            </div>
                            <div className='input'>
                                <input type='text' placeholder='Name' value={user.Name} name='Name' onChange={data}></input>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='lable'>
                                <h4>E-mail id</h4>
                            </div>
                            <div className='input'>
                                <input type='text' placeholder='E-mail' value={user.email} name='email' onChange={data}></input>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='lable'>
                                <h4>Subject</h4>
                            </div>
                            <div className='input'>
                                <input type='text' placeholder='Subjet' value={user.subject} name='subject' onChange={data}></input>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='lable'>
                                <h4>Message</h4>
                            </div>
                            <div className='input'>
                                <textarea type='text' placeholder='Message' value={user.Message} name='Message' onChange={data}></textarea>
                            </div>
                        </div>
                        {/* Other input fields */}
                        <button type='submit'>Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;