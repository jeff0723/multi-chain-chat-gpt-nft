import React from 'react'
import styled from 'styled-components';
import { ConnectButton } from '@rainbow-me/rainbowkit';

type Props = {}
const NavbarContainer = styled.div`
    width: 100%;
    padding: 20px;
    display:flex;
    justify-content: flex-end;
`
const Navbar = (props: Props) => {
    return (
        <NavbarContainer>
            <ConnectButton />
        </NavbarContainer>
    )
}

export default Navbar