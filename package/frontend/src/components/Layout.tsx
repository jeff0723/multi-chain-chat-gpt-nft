import { FC, ReactNode, Suspense, useEffect, useState } from "react";
import styled from 'styled-components';
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./Navbar"), { suspense: true });
const SideBar = dynamic(() => import("./Sidebar"), { suspense: true });
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
    background: #343541;
`
const Layout: FC<Props> = ({ children }) => {
    const [mounted, setMounted] = useState<boolean>(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) return <div className="flex h-screen w-full justify-center items-center">
        <div>Loading</div>
    </div>;
    return (
        <LayoutContainer>

            {/* Sidebar */}
            <MainContent>
                <SideBar />
                <div className="flex flex-col flex-1">
                    <Navbar />
                    {children}
                </div>
            </MainContent>

        </LayoutContainer>
    );
};

export default Layout;
