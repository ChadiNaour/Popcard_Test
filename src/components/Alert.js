import React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
const AlertComponent = ({ error }) => {
    const [show, setShow] = React.useState(true)

    // On componentDidMount set the timer
    React.useEffect(() => {
        const timeId = setTimeout(() => {
            // After 3 seconds set the show value to false
            setShow(false)
        }, 3000)

        return () => {
            clearTimeout(timeId)
        }
    }, []);

    // If show is false the component will return null and stop here
    if (!show) {
        return null;
    }
    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert variant="filled" severity="error">{error}</Alert>
        </Stack>
    );
}
export default AlertComponent;