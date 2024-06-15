import React, { useState } from 'react';
import { Box, Typography, Button, Grid, IconButton } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';

const UploadScansComponent = () => {
    const [files, setFiles] = useState([]);

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
            if (files.length + acceptedFiles.length <= 3) {
                setFiles([...files, ...acceptedFiles.map(file => Object.assign(file, {
                    preview: URL.createObjectURL(file)
                }))]);
            } else {
                alert('You can only upload up to 3 files.');
            }
        }
    });

    const removeFile = file => () => {
        const newFiles = [...files];
        newFiles.splice(newFiles.indexOf(file), 1);
        setFiles(newFiles);
    };

    const thumbs = files.map(file => (
        <Grid item xs={12} sm={4} key={file.name}>
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
            >
                <img
                    src={file.preview}
                    alt={file.name}
                    style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
                />
                <IconButton
                    onClick={removeFile(file)}
                    sx={{ position: 'absolute', top: 8, right: 8, backgroundColor: 'white' }}
                >
                    <DeleteIcon />
                </IconButton>
            </Box>
        </Grid>
    ));

    return (
        <Box  sx={{ maxWidth: 900,  mx: 'auto', mt: 20, padding: 3 }}>
            <Typography variant="h5" gutterBottom>
                Upload Your Passport Scans
            </Typography>
            <Box
                {...getRootProps()}
                sx={{
                    border: '2px dashed #e0e0e0',
                    borderRadius: '8px',
                    padding: '16px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    backgroundColor: '#f9f9f9',
                    fontSize: 200
                }}
            >
                <input {...getInputProps()} />
                <CloudUploadIcon sx={{ fontSize: 200, color: '#3f51b5' }} />
                <Typography>Drag & drop some files here, or click to select files</Typography>
                <Typography  variant="body1" color="textSecondary">
                    (Only *.jpeg, *.png images will be accepted)
                </Typography>
            </Box>
            <Grid container spacing={2} sx={{ mt: 2 }}>
                {thumbs}
            </Grid>
            <Button
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
                onClick={() => console.log('Uploading files:', files)}
                disabled={files.length === 0}
            >
                Upload
            </Button>
        </Box>
    );
};

export default UploadScansComponent;
