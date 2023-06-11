import styled from 'styled-components';
import { useRouter } from "next/router"
import Link from 'next/link'
import { useCallback, useState } from 'react';
import { IoMdSettings, IoMdClose } from 'react-icons/io'
import Modal from './Modal';
import { IconType } from 'react-icons';
import { useAppSelector } from '@/state/hook';

enum Tab {
    Mint,
    Chat,
    Settings,
    Upload
}

const currentTab = (path: string): Tab => {
    switch (path) {
        case '/chat': return Tab.Chat
        case '/mint': return Tab.Mint
        case '/settings': return Tab.Settings
        case '/upload': return Tab.Upload
        default:
            return Tab.Chat
    }

}
type Props = {}
// make the height 100% expand the outer container
const SidebarContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    width:25%;
    padding:10px 20px;
    gap:10px;
    background-color:#202123;
    height:100vh;
`
const Column = styled.div`
    display:flex;
    flex-direction: column;
    gap:10px;

`
const Text = styled.div<{ isSelectedTab: boolean }>`
    display: flex;
    align-items: flex-start;
    padding: 12px;
    font-weight: ${({ isSelectedTab }) => isSelectedTab ? "bold" : "400"};
    font-size: 20px;
    line-height: 24px;
`
const SettingsContainer = styled.div`
    display:flex;
    gap:10px;
    justify-content: flex-start;
    align-items: center;
    font-size: 20px;
    padding: 12px;
`
function Sidebar({ }: Props) {
    const currentAgent = useAppSelector(state => state.application.currentAgent)
    const { pathname } = useRouter()
    const [selectedTab, setSelectedTab] = useState<Tab>(currentTab(pathname))
    const [isSettingsModalOpen, setIsSettingsModalOpen] = useState<boolean>(false)
    const toggleSettingsModal = useCallback(() => {
        setIsSettingsModalOpen((prev) => !prev)
    }, [])
    return (

        <SidebarContainer >
            <Column>
                <Link href='/' className='flex' >
                    <img src='logo.png' alt='logo' width={50} height={50} />
                </Link>
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
                <Link href='/upload' onClick={() => {
                    setSelectedTab(Tab.Upload)
                }}>
                    <div className='rounded-md hover:bg-white hover:bg-opacity-10'
                    >
                        <Text isSelectedTab={Tab.Upload == selectedTab}>

                            Upload
                        </Text>
                    </div>
                </Link>
            </Column>

            <div className='rounded-md hover:bg-white hover:bg-opacity-10'
                onClick={() => { setIsSettingsModalOpen(true) }}
            >
                <SettingsContainer>
                    <IoMdSettings size={20} />
                    <div>Settings</div>
                </SettingsContainer>
            </div>
            <Modal open={isSettingsModalOpen} onClose={toggleSettingsModal}>
                <div>
                    <div className='text-lg px-4 w-full flex justify-between items-center'>
                        <div>Your agent:</div>
                        <IconButton icon={IoMdClose} onClick={toggleSettingsModal} />
                    </div>
                    <div className='mt-5 mb-5 border-t bg-gray-300 opacity-20'></div>
                    <div className='flex flex-col gap-5 px-4'>
                        <div className='flex'>
                            {currentAgent ?
                                <div className='flex flex-col gap-5 text-sm'>
                                    <img src='images/1.png' width={150} height={150} className='rounded-lg' />
                                    <div>{currentAgent.name}</div>
                                </div>
                                : (<div className='flex flex-col gap-5 text-sm'>
                                    {"You current don't have any NFT agent"}
                                </div>)
                            }


                        </div>
                    </div>
                </div>
            </Modal>
        </SidebarContainer>
    )
}
function IconButton({ icon: Icon, onClick }: { icon: IconType, onClick: () => void }) {
    return (
        <button onClick={onClick} className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-200 hover:bg-opacity-10 focus:outline-none transform transition-transform duration-300 ">
            <Icon className="w-5 h-5 hover:scale-110" />
        </button>
    );
}
export default Sidebar