import React from "react";
import { useParams } from "react-router-dom";

const ClassPage = () => {
    const { id } = useParams();

    return (
        <div style={{ padding: 30 }}>
            <h1>Class Page Loaded</h1>
            <h2>Class: {id}</h2>
        </div>
    );
};

export default ClassPage;
