import React from 'react';
import { Button, Typography, Box, Link, TextField, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { VerificationContainer, CodeInputContainer, VerificationForm, FooterText } from './style';

const EmailVerificationComponent = () => {
    return (
        <VerificationContainer>
            <IconButton href="#" aria-label="Voltar">
                <ArrowBackIcon />
            </IconButton>
            <Typography variant="h4" component="h2" gutterBottom>
                Verifique seu e-mail
            </Typography>
            <Typography variant="body2" gutterBottom>
                Por favor, digite o código que enviamos para o e-mail cadastrado
            </Typography>
            <VerificationForm>
                <CodeInputContainer>
                    {[...Array(6)].map((_, index) => (
                        <TextField key={index} variant="outlined" inputProps={{ maxLength: 1 }} />
                    ))}
                </CodeInputContainer>
                <Button variant="contained" color="primary" fullWidth>
                    Entrar
                </Button>
            </VerificationForm>
            <FooterText>
                Não recebeu o código? <Link href="#">Enviar novamente</Link>
            </FooterText>
        </VerificationContainer>
    );
};

export default EmailVerificationComponent;