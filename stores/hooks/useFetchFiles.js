// hooks/useFetchFiles.js
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

const useFetchFiles = () => {
    const { data: session } = useSession();
    const [files, setFiles] = useState({ passportFiles: [], addressFiles: [] });

    useEffect(() => {
        const fetchFiles = async () => {
            if (session) {
                const response = await fetch('/api/getFiles');
                const data = await response.json();
                console.log('Fetched files:', data);
                if (Array.isArray(data)) {
                    const passportFiles = data.filter(file => file.metadata?.type === 'passport').map(file => ({
                        ...file,
                        preview: `/api/getFile?filename=${file.filename}`
                    }));
                    const addressFiles = data.filter(file => file.metadata?.type === 'address').map(file => ({
                        ...file,
                        preview: `/api/getFile?filename=${file.filename}`
                    }));
                    setFiles({ passportFiles, addressFiles });
                } else {
                    setFiles({ passportFiles: [], addressFiles: [] });
                }
            }
        };

        fetchFiles();
    }, [session]);

    return files;
};

export default useFetchFiles;
