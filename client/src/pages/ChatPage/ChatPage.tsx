
import ChatComponent from "../../entities/Chat/ui/ChatComponent";


function ChatPage(): JSX.Element {
    return (<>
       <title>Чат</title>
        <div className="chat-page"> 
            <ChatComponent/>
        </div></>
    );
}

export default ChatPage;