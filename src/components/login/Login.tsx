import React from 'react';
import { Button, TextField, Typography, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { LoginContainer, FormContainer, FooterText } from './style';
import { RowDiv, StyledImg, SyledImgSmall } from '../../style';
import loginImg from '../../static/login-image.png'
import IfoodLogo from '../../static/ifood-logo.png'

const LoginComponent = () => {
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleContinue = () => {
        // Assuming login logic goes here
        navigate('/dashboard'); // Navigate to the Dashboard after clicking "Continuar"
    };

    return (
        <RowDiv width='65vw'>
            <StyledImg width='549.33px' height='697.33px' src={loginImg} />
            <LoginContainer>
                <SyledImgSmall width='206px' height='261px' src={IfoodLogo} />
                <FormContainer>
                    <Typography variant="h3" component="h2" gutterBottom>
                        Seja bem vindo!
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        Gerencie suas transferências e recebimentos
                    </Typography>
                    <TextField label="E-mail" variant="outlined" fullWidth margin="normal" />
                    <TextField label="Senha" type="password" variant="outlined" fullWidth margin="normal" />
                    <Button variant="contained" color="primary" fullWidth onClick={handleContinue}>
                        Continuar
                    </Button>
                    <FooterText>
                        Ainda não tem cadastro? <Link href="/verify-email">Cadastre sua loja</Link>
                    </FooterText>
                </FormContainer>
            </LoginContainer>
        </RowDiv>
    );
}

export default LoginComponent;
