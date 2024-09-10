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
    const [fileToDelete, setFileToDelete] = useState(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
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
            if (passportFiles.length + acceptedFiles.length <= 3) {
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

    const handleDeleteClick = (file) => {
        setFileToDelete(file);
        setIsDeleteModalOpen(true);
    };

    const confirmDelete = async () => {
        if (fileToDelete) {
            const files = fileToDelete.metadata?.type === 'passport' ? passportFiles : addressFiles;
            const setFiles = fileToDelete.metadata?.type === 'passport' ? setPassportFiles : setAddressFiles;
            await removeFile(fileToDelete, setFiles);
            setIsDeleteModalOpen(false);
            setFileToDelete(null);
        }
    };

    const closeDeleteModal = () => {
        setIsDeleteModalOpen(false);
        setFileToDelete(null);
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
                        // padding: '16px',
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
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            position: 'absolute',
                            top: 8,
                            left: 8,
                            right: 8,
                            backgroundColor: 'rgba(255, 255, 255, 0.8)',
                            borderRadius: '4px',
                            // padding: '4px 8px',
                        }}
                    >
                        <Typography variant="body2" noWrap p={2} sx={{ maxWidth: '80%' }}>
                            {file.filename || file.name}
                        </Typography>
                        <IconButton
                            onClick={(e) => {
                                e.stopPropagation();
                                handleDeleteClick(file);
                            }}
                            sx={{ ml: 1}}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Grid>
        ))
    );

    return (
        <Box>
            {passportFiles.length < 3 && (
                <>
                    <Typography  fontWeight={"bold"} gutterBottom>
                        Bitte laden Sie Scans beider Seiten Ihres Reisepasses / Personalausweises hoch. / hier können Sie auch einen Scheck für eine abgeschlossene Überweisung hinzufügen
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
                    <Typography  fontWeight={"bold"} gutterBottom sx={{ mt: 4 }}>
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
                            width: isMobile ? '90%' : '60%', // Ширина контейнера
                            height: isMobile ? 'auto' : '80vh', // Высота контейнера
                            borderRadius: '8px',
                            p: 2,
                            outline: 'none',
                            textAlign: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Box
                            component="img"
                            src={selectedFile.preview}
                            alt={selectedFile.filename || selectedFile.name}
                            sx={{
                                maxWidth: '100%',
                                maxHeight: '90%',
                                objectFit: 'contain', // This ensures the image scales down to fit within the container
                                marginBottom: '16px'
                            }}
                        />
                        <Button onClick={closeModal} variant="contained" color="primary">Schließen</Button>
                    </Box>
                </Modal>
            )}

            {isDeleteModalOpen && (
                <Modal
                    open={isDeleteModalOpen}
                    onClose={closeDeleteModal}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Box
                        sx={{
                            width: '300px',
                            bgcolor: 'background.paper',
                            borderRadius: '8px',
                            p: 4,
                            textAlign: 'center',
                        }}
                    >
                        <Typography variant="h6" gutterBottom>
                            Möchten Sie diese Datei wirklich löschen?
                        </Typography>
                        <Button
                            onClick={confirmDelete}
                            variant="contained"
                            color="secondary"
                            sx={{ mr: 2 }}
                        >
                            Ja
                        </Button>
                        <Button onClick={closeDeleteModal} variant="contained">
                            Nein
                        </Button>
                    </Box>
                </Modal>
            )}

        </Box>
    );
};

export default UploadScansComponent;
