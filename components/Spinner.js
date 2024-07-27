import { CircularProgress, Box } from "@mui/material";

const Spinner = () => (
    <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999
    }}>
        <CircularProgress />
    </Box>
);

export default Spinner;
