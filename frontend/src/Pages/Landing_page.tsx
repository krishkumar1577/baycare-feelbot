import React from "react";

const LandingPage: React.FC = () => {
    return (
        <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <h1 className="text-4xl font-bold mb-8">Your Personal AI Healcare Companion</h1>
            <div className="grid grid-cols-2 gap-4 ">
                <div className="bg-white p-4 w-64 h-64 border-4 border-pink-500 rounded-lg shadow-md ">Baycare</div>
                <div className="bg-white p-4 w-64 h-64 border-4 border-pink-500 rounded-lg shadow-md">Feelbot</div>
            </div>
            
        </main>
    );
};

export default LandingPage;