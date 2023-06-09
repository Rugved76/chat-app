import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
        <div style={{ height: '100vh',fontFamily: 'Arial' }}>
            <PrettyChatWindow
                projectId='f7377996-15fe-46ec-ba45-74656bf11a56'
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%' }}
            />
        </div >
    )
}

export default ChatsPage