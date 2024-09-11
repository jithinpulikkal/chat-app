import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx, emoji }) => {
    const { selectedConversation, setSelectedConversation } = useConversation();
    const isSelected = selectedConversation?._id === conversation._id;

    const {onlineUsers} = useSocketContext()
    const isOnline = onlineUsers.includes(conversation._id)
    console.log(isOnline);
    

    return (
        <>
            <div
                className={`flex gap-2 items-center hover:bg-sky-700 rounded p-2 py-1 cursor-pointer  ${
                    isSelected ? "bg-sky-900" : ""
                }`}
                onClick={() => setSelectedConversation(conversation)}
            >
                <div className={`avatar ${isOnline ? "online" : ""}`}>
                    <div className="w-12 rounded-full">
                        <img src={conversation.profilePic} alt="user avatar" />
                       
                    </div>
                </div>
                <div className="flex flex-col flex-1">
                    <div className="flex gap-3 justify-between">
                        <p className="font-bold text-gray-200 ">{conversation.name}</p>
                        <span className="text-xl">{emoji}</span>
                    </div>
                </div>
            </div>
            {!lastIdx && <div className="divider my-0 py-0 h-1" />}
        </>
    );
};

export default Conversation;

// const Conversation = () => {
//     return (
//         <>
//             <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
//                 <div className="avatar online">
//                     <div className="w-12 rounded-full">
//                         <img
//                             src="https://avatar.iran.liara.run/public"
//                             alt="user avatar"
//                         />
//                     </div>
//                 </div>
//                 <div className="flex flex-col flex-1">
//                     <div className="flex gap-3 justify-between">
//                         <p className="font-bold text-gray-200 ">John Doe</p>
//                         <span className="text-xl">😉</span>
//                     </div>
//                 </div>
//             </div>
//             <div className="divider my-0 py-0 h-1" />
//         </>
//     );
// };

// export default Conversation;
