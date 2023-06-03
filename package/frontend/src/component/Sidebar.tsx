import styled from 'styled-components';

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
const SidebarContainer = styled.div`
    display:flex;
    flex-direction: column;
    width:25%;
    padding:0 20px;
`

function Sidebar({ }: Props) {
    return (
        <SidebarContainer>
            <div>Chat</div>
            <div>Mint</div>
            <div>Settings</div>
        </SidebarContainer>
    )
}
export default Sidebar