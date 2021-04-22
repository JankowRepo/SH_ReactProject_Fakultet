import React from 'react'
interface BProps {
    content?: string;
    click?: () => void;
}

const BOnClick: React.FC<BProps> = ({click, content}) => {
    return (
        <button onClick={click}>{content}</button>
    );
}

export default BOnClick;