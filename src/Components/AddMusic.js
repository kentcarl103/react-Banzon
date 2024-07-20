import React, { useState } from 'react';
import { addingMusic } from '../Service/ApiService';

const AddMusic = () => {
    const [formData, setFormData] = useState({
        artist: '',
        title: '',
        urlLink: ''
    });

    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleAddSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await addingMusic(formData);
            if (response && response.includes('Music added successfully')) {
                alert('Music added Successfully');
                // Optionally, clear the form after successful submission
                setFormData({
                    artist: '',
                    title: '',
                    urlLink: ''
                });
            } else {
                throw new Error('Unknown error: Please try again later.');
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.Message) {
                setErrorMessage(`Music creation failed: ${error.response.data.Message}`);
            } else {
                setErrorMessage(`Music creation failed: ${error.message}`);
            }
        }
    };

    return (
        <form className='input' onSubmit={handleAddSubmit}>
            <div className="container">
                <div className="header">
                    <div className="text">Add Music</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    <div className='input'>
                        <input
                            type="text"
                            id="artist"
                            name="artist"
                            placeholder='Artist'
                            value={formData.artist}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='input'>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder='Title'
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='input'>
                        <input
                            type="text"
                            id="urlLink"
                            name="urlLink"
                            placeholder='UrlLink'
                            value={formData.urlLink}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='submit'>
                        <button type="submit">Add Music</button>
                    </div>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                </div>
            </div>
        </form>
    );
}

export default AddMusic;
