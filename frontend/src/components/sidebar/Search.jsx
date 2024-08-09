import { IoSearchSharp } from "react-icons/io5";


const Search = () => {
  return (
    <div>
        <form className='flex items-center gap-2'>
            <input type="text" className="input input-bordered rounded-full" placeholder='Search...' />
            
            <button type="submit" className='btn btn-circle bg-sky-500 text-white'>
            <IoSearchSharp className="w-6 h-6 outline-none"/>
            </button>
        </form>
    </div>
  )
}

export default Search








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