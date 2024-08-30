import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import { toast } from "sonner";

const Search = () => {
    const [search, setSearch] = useState("");
    const { setSelectedConversation } = useConversation();
    const { conversations } = useGetConversations();

    // Filter conversations based on the search input
    const filteredConversations = conversations.filter(conversation =>
        conversation.name.toLowerCase().includes(search.toLowerCase())
    );

    const handleSelectConversation = (conversation) => {
        setSelectedConversation(conversation);
        setSearch(""); // Clear search input after selection
    };

    return (
        <div className="relative">
            <form className="flex items-center gap-2">
                <input
                    type="text"
                    className="input input-bordered rounded-full"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                {/* <button type="button" className="btn btn-circle bg-sky-500 text-white">
                    <IoSearchSharp className="w-6 h-6 outline-none" />
                </button> */}
            </form>

            {/* Display matching conversations */}
            {search.length >= 1 && (
                <div
                    className="absolute top-12 left-0 w-full bg-slate-700  rounded-md z-50"
                    style={{ zIndex: 50 }} // High z-index to ensure it shows above all content
                >
                    {filteredConversations.length > 0 ? (
                        filteredConversations.map((conversation) => (
                            <div
                                key={conversation.id}
                                className="p-2 hover:bg-slate-900 cursor-pointer text-white"
                                onClick={() => handleSelectConversation(conversation)}
                            >
                                {conversation.name}
                            </div>
                        ))
                    ) : (
                        <div className="p-2 text-gray-300">No users found</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Search;














// import { useState } from "react";
// import { IoSearchSharp } from "react-icons/io5";
// import useConversation from "../../zustand/useConversation";
// import useGetConversations from "../../hooks/useGetConversations";
// import { toast } from "sonner";

// const Search = () => {
//     const [search, setSearch] = useState("");

//     const { setSelectedConversation } = useConversation();
//     const { conversations } = useGetConversations();
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (!search) return;
//         if(search.length<3){
//           return toast.error("Enter atleast 3 characters")
//         }
//         const conversation = conversations.find((conversation) => conversation.name.toLowerCase().includes(search.toLowerCase()));
//         if (conversation) {
//           setSelectedConversation(conversation);
//           setSearch("");
//           } else toast.error("no user found")

//     };

//     return (
//         <div>
//             <form className="flex items-center gap-2" onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     className="input input-bordered rounded-full"
//                     placeholder="Search..."
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                 />

//                 <button type="submit" className="btn btn-circle bg-sky-500 text-white">
//                     <IoSearchSharp className="w-6 h-6 outline-none" />
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default Search;


