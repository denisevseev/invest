import React, { useState, useEffect } from 'react';
import {Box, Typography, Grid, IconButton, Modal, Button, useTheme, useMediaQuery} from '@mui/material';
import { useDropzone } from 'react-dropzone';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSession } from 'next-auth/react';

const UploadScansComponent = () => {
    const { data: session } = useSession();
    const [passportFiles, setPassportFiles] = useState([]);
    const [addressFiles, setAddressFiles] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleUpload = async (files, type, setFiles) => {
        const formData = new FormData();
        files.forEach(file => formData.append('files', file));
        formData.append('type', type);

        const response = await fetch('/api/upload', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${session.jwt}`
            },
            body: formData
        });

        if (response.ok) {
            fetchFiles();
        } else {
            alert(`Error uploading ${type} files`);
        }
    };

    const { getRootProps: getPassportRootProps, getInputProps: getPassportInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
            if (passportFiles.length + acceptedFiles.length <= 2) {
                const newFiles = acceptedFiles.map(file => Object.assign(file, {
                    preview: URL.createObjectURL(file)
                }));
                setPassportFiles(prevFiles => [...prevFiles, ...newFiles]);
                handleUpload(newFiles, 'passport', setPassportFiles);
            } else {
                alert('You can only upload up to 2 passport files.');
            }
        }
    });

    const { getRootProps: getAddressRootProps, getInputProps: getAddressInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
            if (addressFiles.length + acceptedFiles.length <= 2) {
                const newFiles = acceptedFiles.map(file => Object.assign(file, {
                    preview: URL.createObjectURL(file)
                }));
                setAddressFiles(prevFiles => [...prevFiles, ...newFiles]);
                handleUpload(newFiles, 'address', setAddressFiles);
            } else {
                alert('You can only upload up to 2 address files.');
            }
        }
    });

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
                setPassportFiles(passportFiles);
                setAddressFiles(addressFiles);
            } else {
                setPassportFiles([]);
                setAddressFiles([]);
            }
        }
    };

    useEffect(() => {
        fetchFiles();
    }, [session]);

    const removeFile = async (file, setFiles) => {
        const response = await fetch('/api/deleteFile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${session.jwt}`
            },
            body: JSON.stringify({ filename: file.filename })
        });

        if (response.ok) {
            setFiles(prevFiles => prevFiles.filter(f => f.filename !== file.filename));
        } else {
            alert('Error deleting file');
        }
    };

    const handleImageClick = (file) => {
        setSelectedFile(file);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedFile(null);
        setIsModalOpen(false);
    };

    const renderThumbs = (files, setFiles) => (
        files.map(file => (
            <Grid item xs={12} sm={4} key={file.filename || file.name}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid #e0e0e0',
                        borderRadius: '8px',
                        padding: '16px',
                        margin: '8px',
                        position: 'relative'
                    }}
                    onClick={() => handleImageClick(file)}
                >
                    <img
                        src={file.preview}
                        alt={file.filename || file.name}
                        style={{ width: '100%', height: 'auto', borderRadius: '4px', cursor: 'pointer' }}
                    />
                    <IconButton
                        onClick={(e) => {
                            e.stopPropagation();
                            removeFile(file, setFiles);
                        }}
                        sx={{ position: 'absolute', top: 8, right: 8, backgroundColor: 'white' }}
                    >
                        <DeleteIcon />
                    </IconButton>
                </Box>
            </Grid>
        ))
    );

    return (
        <Box sx={{ maxWidth: 900, mx: 'auto', mt: 2, padding: 3, ml: !isMobile && 30 }}>
            {passportFiles.length < 2 && (
                <>
                    <Typography variant="h5" gutterBottom>
                        Bitte laden Sie Scans beider Seiten Ihres Reisepasses / Personalausweises hoch.
                    </Typography>
                    <Box
                        {...getPassportRootProps()}
                        sx={{
                            border: '2px dashed #e0e0e0',
                            borderRadius: '8px',
                            padding: '16px',
                            textAlign: 'center',
                            cursor: 'pointer',
                            backgroundColor: '#f9f9f9'
                        }}
                    >
                        <input {...getPassportInputProps()} />
                        <CloudUploadIcon sx={{ fontSize: 200, color: '#3f51b5' }} />
                        <Typography>Ziehen Sie die Dateien hierher oder klicken Sie, um Dateien auszuwählen.</Typography>
                        <Typography variant="body1" color="textSecondary">
                            (Bitte verwenden Sie aus Sicherheitsgründen nur *.jpeg, *.pdf, *.png-Dateien)
                        </Typography>
                    </Box>
                </>
            )}
            <Grid container spacing={2} sx={{ mt: 2 }}>
                {renderThumbs(passportFiles, setPassportFiles)}
            </Grid>

            {addressFiles.length < 2 && (
                <>
                    <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                        Bitte laden Sie Scans Ihres Adressnachweises hoch
                    </Typography>
                    <Box
                        {...getAddressRootProps()}
                        sx={{
                            border: '2px dashed #e0e0e0',
                            borderRadius: '8px',
                            padding: '16px',
                            textAlign: 'center',
                            cursor: 'pointer',
                            backgroundColor: '#f9f9f9'
                        }}
                    >
                        <input {...getAddressInputProps()} />
                        <CloudUploadIcon sx={{ fontSize: 200, color: '#3f51b5' }} />
                        <Typography>Ziehen Sie die Dateien hierher oder klicken Sie, um Dateien auszuwählen.</Typography>
                        <Typography variant="body1" color="textSecondary">
                            (Bitte verwenden Sie aus Sicherheitsgründen nur *.jpeg, *.pdf *.png-Dateien)
                        </Typography>
                    </Box>
                </>
            )}
            <Grid container spacing={2} sx={{ mt: 2 }}>
                {renderThumbs(addressFiles, setAddressFiles)}
            </Grid>

            {selectedFile && (
                <Modal
                    open={isModalOpen}
                    onClose={closeModal}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Box
                        sx={{
                            maxWidth: '90%',
                            maxHeight: '90%',
                            backgroundColor: 'white',
                            borderRadius: '8px',
                            p: 2,
                            outline: 'none'
                        }}
                    >
                        <img
                            src={selectedFile.preview}
                            alt={selectedFile.filename || selectedFile.name}
                            style={{ width: '100%', height: 'auto' }}
                        />
                        <Button onClick={closeModal} sx={{ mt: 2 }} variant="contained" color="primary">Schließen</Button>
                    </Box>
                </Modal>
            )}
        </Box>
    );
};

export default UploadScansComponent;
