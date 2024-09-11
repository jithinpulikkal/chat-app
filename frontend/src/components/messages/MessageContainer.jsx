import MessageInput from "./MessageInput";
import Messages from "./Messages";
import Robot from "../../assets/robot.gif";
import Icon from "../../assets/lets-chat-logo-transparent.png";
import useConversation from "../../zustand/useConversation";
import { useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
    const { selectedConversation, setSelectedConversation } = useConversation();
    useEffect(() => {
        //unmount selected user
        return () => setSelectedConversation(null);
    }, [setSelectedConversation]);
    return (
        <div className="md:min-w-[450px] flex flex-col">
            {!selectedConversation ? (
                <NoChatSelected />
            ) : (
                <>
                    {/* Header  */}
                    <div className="bg-slate-500 px-4 py-2 mb-2 ">
                        <span className="label-text"> [+] </span>
                        <span className="text-gray-900 font-bold">{selectedConversation.name}</span>
                    </div>
                    <Messages />
                    <MessageInput />
                </>
            )}
        </div>
    );
};

export default MessageContainer;

const NoChatSelected = () => {
    const { authUser } = useAuthContext();
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
                <img src={Icon} style={{ height: 50, marginTop: 30 }} alt="icon" />
                <p>
                    Welcome <span className="text-gray-500">{authUser.name}</span>{" "}
                </p>
                <p>Select a contact to start messaging</p>
                <img src={Robot} style={{ height: 250 }} alt="robot" />
            </div>
        </div>
    );
};

// import MessageInput from "./MessageInput"
// import Messages from "./Messages"

// const MessageContainer = () => {
//   return (
//     <div className="md:min-w-[450px] flex flex-col">
//         <>
//         {/* Header  */}
//         <div className="bg-slate-500 px-4 py-2 mb-2 ">
//             <span className="label-text">To:</span>
//             <span className="text-gray-900 font-bold">John Doe</span>
//         </div>
//         <Messages />
//         <MessageInput />
//         </>
//     </div>
//   )
// }

// export default MessageContainer
