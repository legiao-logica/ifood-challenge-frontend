import styled from 'styled-components';
import { Box, Typography } from '@mui/material';

export const VerificationContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 20px;
    background-color: #ffffff;
`;

export const CodeInputContainer = styled(Box)`
    display: flex;
    justify-content: space-between;
    margin: 20px 0;

    & .MuiTextField-root {
        width: 48px; /* Adjust width for individual code boxes */
        text-align: center;
    }
`;

export const VerificationForm = styled(Box)`
    max-width: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FooterText = styled(Typography)`
    margin-top: 20px;
    font-size: 14px;
`;
