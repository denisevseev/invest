import React from 'react';

const DownloadButton = ({  }) => {
    let userId = "667aa2b11a9caacb2c79de03"
  const handleDownload = async () => {
    const response = await fetch(`/api/downloadDocument?userId=${userId}`);
    if (response.ok) {
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = 'signedDocuments.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } else {
      console.error('Failed to download document');
    }
  };

  return (
    <button onClick={handleDownload}>Download Document</button>
  );
};

export default DownloadButton;
