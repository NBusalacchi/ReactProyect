import React, {useState} from "react";

const Button = ({color, label, onClickCallback}) => {
    const [background, setBackground] = useState(color);

    const handleClick = () => {
        if (onClickCallback) {
            onClickCallback();
        }
        setBackground((x) => (x === "blue" ? color : "blue"));
    };

    return (
        <div>
            <button style={{background}} onClick={handleClick}>
                {label}
            </button>
        </div>
    );
};

export default Button;
