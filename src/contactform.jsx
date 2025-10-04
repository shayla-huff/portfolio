import { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="firstname" value={formData.name} onChange={handleChange} placeholder="First Name" />
            <input type="text" name="lastname" value={formData.name} onChange={handleChange} placeholder="Last Name" />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message"></textarea>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;