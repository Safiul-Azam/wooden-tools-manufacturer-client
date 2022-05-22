import React from 'react';

const Loading = () => {
    return (
        <div>
            <div class="flex items-center justify-center space-x-2 animate-bounce">
                <div class="w-8 h-8 bg-blue-400 rounded-full"></div>
                <div class="w-8 h-8 bg-green-400 rounded-full"></div>
                <div class="w-8 h-8 bg-black rounded-full"></div>
            </div>
        </div>
    );
};

export default Loading;