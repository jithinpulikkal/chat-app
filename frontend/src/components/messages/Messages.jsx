import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";

import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
    const { loading, messages } = useGetMessages();
    useListenMessages();
    console.log("messages:  ", messages);
    const lastMsgRef = useRef();
    useEffect(() => {
        setTimeout(() => {
            lastMsgRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 50);
    }, [messages]);
    return (
        <div className="px-4 flex-1 overflow-auto ">
            {!loading &&
                messages.length > 0 &&
                messages.map((message) => (
                    <div key={message._id} ref={lastMsgRef}>
                        <Message message={message} />
                    </div>
                ))}
            {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
            {!loading && messages.length === 0 && <p className="text-center">Send a message to start conversation</p>}
        </div>
    );
};

export default Messages;

// import Message from "./Message"

// const Messages = () => {
//   return (
//     <div className="px-4 flex-1 overflow-auto ">
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//     </div>
//   )
// }

// export default Messages
