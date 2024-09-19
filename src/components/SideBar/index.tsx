import React from 'react';
import { Box, IconButton, List, ListItem, ListItemIcon, ListItemButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const Sidebar = () => {
    return (
        <Box width={80} bgcolor="#FF0000" height="100vh" display="flex" flexDirection="column" alignItems="center" py={2}>
            <IconButton href="#">
                <HomeIcon style={{ color: '#FFF' }} />
            </IconButton>
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountBalanceWalletIcon style={{ color: '#FFF' }} />
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <AttachMoneyIcon style={{ color: '#FFF' }} />
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );
};

export default Sidebar;
