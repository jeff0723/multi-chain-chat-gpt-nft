import { FC, ReactNode, Suspense, useEffect, useState } from "react";
import SideBar from "./Sidebar";
import Navbar from "./Navbar";
import styled from 'styled-components';

interface Props {
    children: ReactNode;
}
const LayoutContainer = styled.div`
    width: 100%;
    display:flex;
    flex-direction: column;
    height:100vh;
`
const MainContent = styled.div`
    display:flex;
    width:100%;
`
const Layout: FC<Props> = ({ children }) => {
    return (
        <LayoutContainer>
            <Navbar />
            {/* Sidebar */}
            <MainContent>
                <SideBar />
                <div className="flex flex-1">
                    {children}
                </div>
            </MainContent>

        </LayoutContainer>
    );
};

export default Layout;
