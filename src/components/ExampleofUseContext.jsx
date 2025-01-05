import React, { useContext } from "react";
import { ThemeContext } from "../App";

const ExampleofUseContext = () => {
    const { theme, toggletheme } = useContext(ThemeContext);

    return (
        <div>
            <h1>Current Theme: {theme ? "Dark" : "Light"}</h1>
            <button
                onClick = {toggletheme}
                style={{
                    padding: "10px 20px",
                    marginTop: "10px",
                    cursor: "pointer",
                }}
            >
                Toggle Theme
            </button>
        </div>
    );
};

export default ExampleofUseContext;
