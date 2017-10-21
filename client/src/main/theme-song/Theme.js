import React, { Component } from 'react';
import Sound from "react-sound"

class Theme extends Component {
    render() {
        return (
            <div>
             <Sound url={"./Game Show Music - Press Your Luck Opening Theme (1983-1986).mp3"} playStatus={Sound.status.PLAYING} />
            </div>
        );
    }
}

export default Theme;