import React from 'react';

const GenerateDocButton = () => {
    const handleGenerateDoc = async () => {
        const response = await fetch('/api/generate-doc', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: 'Mustermann'
            }),
        });

        const result = await response.json();
        console.log(result)

        // if (result.path) {
        //     window.location.href = result.path;  // Это инициирует загрузку файла
        // }
    };

    return (
        <button onClick={handleGenerateDoc}>
            Generate Document
        </button>
    );
};

export default GenerateDocButton;
