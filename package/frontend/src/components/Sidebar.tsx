import styled from 'styled-components';
import { useRouter } from "next/router"
import Link from 'next/link'
import { useState } from 'react';
import Image from 'next/image'
enum Tab {
    Mint,
    Chat,
    Settings,
}

const currentTab = (path: string): Tab => {
    switch (path) {
        case '/': return Tab.Chat
        case '/mint': return Tab.Mint
        case '/settings': return Tab.Settings
        default:
            return Tab.Chat
    }

}
type Props = {}
// make the height 100% expand the outer container
const SidebarContainer = styled.div`
    display:flex;
    flex-direction: column;
    width:25%;
    padding:0 20px;
    padding-top: 10px;
    gap:10px;
    background-color:#202123;
    height:100vh;
    
`
const Text = styled.div<{ isSelectedTab: boolean }>`
    display: flex;
    align-items: flex-start;
    padding: 12px;
    font-weight: ${({ isSelectedTab }) => isSelectedTab ? "bold" : "400"};
    font-size: 20px;
    line-height: 24px;
`
function Sidebar({ }: Props) {
    const { pathname } = useRouter()
    const [selectedTab, setSelectedTab] = useState<Tab>(currentTab(pathname))

    return (
        <SidebarContainer >
            <div>
                <img src='logo.png' alt='logo' width={50} height={50} />
            </div>
            <Link href='/chat'>
                <div className='rounded-md hover:bg-white hover:bg-opacity-10'
                    onClick={() => {
                        setSelectedTab(Tab.Chat)
                    }}
                >
                    <Text isSelectedTab={Tab.Chat == selectedTab}>
                        Chat
                    </Text>
                </div>
            </Link>
            <Link href='/mint' onClick={() => {
                setSelectedTab(Tab.Mint)
            }}>
                <div className='rounded-md hover:bg-white hover:bg-opacity-10'
                >
                    <Text isSelectedTab={Tab.Mint == selectedTab}>
                        Mint
                    </Text>
                </div>
            </Link>
            <Link href='/settings'
                onClick={() => {
                    setSelectedTab(Tab.Settings)
                }}>
                <div className='rounded-md hover:bg-white hover:bg-opacity-10'
                >
                    <Text isSelectedTab={Tab.Settings == selectedTab}>
                        Settings
                    </Text>
                </div>
            </Link>
        </SidebarContainer>
    )
}
export default Sidebar