import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';
const Paragraph = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <p className={theme}>
            A paragraph is a series of related sentences developing a central
            idea, called the topic. Try to think about paragraphs in terms of
            thematic unity: a paragraph is a sentence or a group of sentences
            that supports one central, unified idea. Paragraphs add one idea at
            a time to your broader argument.
        </p>
    );
};

export default Paragraph;
