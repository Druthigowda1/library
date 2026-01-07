import React from "react";
import ClickSpark from "./ClickSpark"; // adjust path if needed

const GlobalClickSpark = () => {
    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 9999,
                pointerEvents: "none",
            }}
        >
            <ClickSpark
                sparkColor="#ffffff"
                sparkSize={23}
                sparkRadius={69}
                sparkCount={8}
                duration={400}
                easing="ease-out"
                extraScale={1}
            />
        </div>
    );
};

export default GlobalClickSpark;
