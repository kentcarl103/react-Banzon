import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllMusic } from '../Service/ApiService';
import './Dashboard.css'; // Import your CSS file for styling

const Dashboard = () => {
    const [musicList, setMusicList] = useState([]);

    const fetchMusicData = async () => {
        try {
            const musicData = await getAllMusic();
            setMusicList(musicData);
        } catch (error) {
            console.error('Error fetching music:', error);
        }
    };

    const handleShowAllMusic = () => {
        fetchMusicData();
    };

    return (
        <div className="dashboard">
            <div className="music-list">
                <div className="header">
                    <div className="text">All Music</div>
                    <div className="underline"></div>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Artist</th>
                            <th>URL Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {musicList.map((music, index) => (
                            <tr key={index}>
                                <td>{music.title}</td>
                                <td>{music.artist}</td>
                                <td>{music.urlLink}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="buttons">
                <button className="show-music-button" onClick={handleShowAllMusic}>
                    Show All Music
                </button>
                <div className="add-music-button">
                    <Link to="/AddMusic">Add Music</Link>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;