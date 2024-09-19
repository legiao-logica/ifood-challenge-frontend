import styled from 'styled-components';
import { Box, Typography } from '@mui/material';

export const LoginContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const FormContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 50vw;
    max-width: 500px;
    padding: 30px;
    background-color: #fff; /* Assuming a white background for the form */
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    border-radius: 8px;
    text-align: center;
`;

export const FooterText = styled(Typography)`
    margin-top: 20px;
`;
