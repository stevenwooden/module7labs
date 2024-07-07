
import {useState, useContext, createContext} from "react";

const CurrentEmoji = createContext();

export const EmojiMood = (props) => {
    const [currentMood, setCurrentMood] = useState(<img src="" alt="sad"/>);

    const handleMood = (mood) => {
        setCurrentMood(mood);
    }

    return (
        <CurrentEmoji.Provider value={{currentMood, handleMood}}>
            {props.children}
        </CurrentEmoji.Provider>
    );
}

export const useCurrentEmoji = () => {
    return useContext(CurrentEmoji);
}
