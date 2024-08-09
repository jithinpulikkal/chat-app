const Message = () => {
    return (
        <div>
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src="https://avatar.iran.liara.run/public/girl"
                        />
                    </div>
                </div>
                
                <div className={`chat-bubble text-white bg-blue-500`}>You were the Chosen One!</div>
                <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12:45</div>
            </div>
            <div className="chat chat-end">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src="https://avatar.iran.liara.run/public/boy"
                        />
                    </div>
                </div>
                <div className={`chat-bubble text-white bg-blue-500`}>I hate you!</div>
                <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12:45</div>
            </div>
        </div>
    );
};

export default Message;







// const Message = () => {
//     return (
//         <div>
//             <div className="chat chat-start">
//                 <div className="chat-image avatar">
//                     <div className="w-10 rounded-full">
//                         <img
//                             alt="Tailwind CSS chat bubble component"
//                             src="https://avatar.iran.liara.run/public/girl"
//                         />
//                     </div>
//                 </div>
                
//                 <div className={`chat-bubble text-white bg-blue-500`}>You were the Chosen One!</div>
//                 <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12:45</div>
//             </div>
//             <div className="chat chat-end">
//                 <div className="chat-image avatar">
//                     <div className="w-10 rounded-full">
//                         <img
//                             alt="Tailwind CSS chat bubble component"
//                             src="https://avatar.iran.liara.run/public/boy"
//                         />
//                     </div>
//                 </div>
//                 <div className="chat-header">
//                     Anakin
//                     <time className="text-xs opacity-50">12:46</time>
//                 </div>
//                 <div className="chat-bubble">I hate you!</div>
//                 <div className="chat-footer opacity-50">Seen at 12:46</div>
//             </div>
//         </div>
//     );
// };

// export default Message;
