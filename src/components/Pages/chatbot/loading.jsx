import React from "react";

const Loading = ({ isLoading }) => {
    return (
        <div>
            {isLoading && (
                <div className="flex items-center justify-center mt-2">
                    <div className="spinner-border text-white" role="status">
                        <span className="visually-hidden">Ýüklenýär...</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Loading;