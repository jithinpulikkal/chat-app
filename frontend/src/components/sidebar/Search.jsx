import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import { toast } from "sonner";

const Search = () => {
    const [search, setSearch] = useState("");

    const { setSelectedConversation } = useConversation();
    const { conversations } = useGetConversations();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search) return;
        if(search.length<3){
          return toast.error("Enter atleast 3 characters")
        }
        const conversation = conversations.find((conversation) => conversation.name.toLowerCase().includes(search.toLowerCase()));
        if (conversation) {
          setSelectedConversation(conversation);
          setSearch("");
          } else toast.error("no user found")

    };

    return (
        <div>
            <form className="flex items-center gap-2" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="input input-bordered rounded-full"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <button type="submit" className="btn btn-circle bg-sky-500 text-white">
                    <IoSearchSharp className="w-6 h-6 outline-none" />
                </button>
            </form>
        </div>
    );
};

export default Search;

// import { IoSearchSharp } from "react-icons/io5";

// const Search = () => {
//   return (
//     <div>
//         <form className='flex items-center gap-2'>
//             <input type="text" className="input input-bordered rounded-full" placeholder='Search...' />

//             <button type="submit" className='btn btn-circle bg-sky-500 text-white'>
//             <IoSearchSharp className="w-6 h-6 outline-none"/>
//             </button>
//         </form>
//     </div>
//   )
// }

// export default Search
