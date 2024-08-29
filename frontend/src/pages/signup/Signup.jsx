import { Link } from "react-router-dom";
import GenderCheckBox from "./GenderCheckBox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const Signup = () => {
    const [user, setUser] = useState({
        name: "",
        username: "",
        gender: "",
        password: "",
        confirmPassword: "",
    });

    const {loading,signup}= useSignup();


    const handleCheckbox = (gender) => {
        setUser({ ...user, gender });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (user.password === user.confirmPassword) {
            console.log(user);
            await signup(user)
        }
    };

    return (
        <div className="flex items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Sign Up
                    <span className="text-gray-800"> {"Let's"} Chat</span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="label p-2 ">
                            <span className="label-text text-base">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="w-full input input-bordered h-10"
                            value={user.name}
                            onChange={(e) => setUser({ ...user, name: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="label p-2 ">
                            <span className="label-text text-base">Username</span>
                        </label>
                        <input
                            type="text"
                            placeholder="johndoe"
                            className="w-full input input-bordered h-10"
                            value={user.username}
                            onChange={(e) => setUser({ ...user, username: e.target.value })}
                        />
                    </div>

                    <GenderCheckBox onCheckboxChange={handleCheckbox} selectdGender={user.gender} />

                    <div>
                        <label className="label p-2 ">
                            <span className="label-text text-base">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            className="w-full input input-bordered h-10"
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="label p-2 ">
                            <span className="label-text text-base">Confirm Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="w-full input input-bordered h-10"
                            value={user.confirmPassword}
                            onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
                        />
                    </div>
                    <Link to={"/login"} className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
                        Already have an account?
                    </Link>
                    <div>
                        <button type="submit" className="btn btn-block btn-sm mt-2 hover:text-blue-600">
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;

// import GenderCheckBox from "./GenderCheckBox";

// const Signup = () => {
//     return (
//         <div className="flex items-center justify-center min-w-96 mx-auto">
//             <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//                 <h1 className="text-3xl font-semibold text-center text-gray-300">
//                     Sign Up
//                     <span className="text-gray-800"> {"Let's"} Chat</span>
//                 </h1>
//                 <form>
//                     <div>
//                         <label className="label p-2 ">
//                             <span className="label-text text-base">Name</span>
//                         </label>
//                         <input type="text" placeholder="John Doe" className="w-full input input-bordered h-10" />
//                     </div>
//                     <div>
//                         <label className="label p-2 ">
//                             <span className="label-text text-base">Username</span>
//                         </label>
//                         <input type="text" placeholder="johndoe" className="w-full input input-bordered h-10" />
//                     </div>

//                     <GenderCheckBox />

//                     <div>
//                         <label className="label p-2 ">
//                             <span className="label-text text-base">Password</span>
//                         </label>
//                         <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10" />
//                     </div>
//                     <div>
//                         <label className="label p-2 ">
//                             <span className="label-text text-base">Confirm Password</span>
//                         </label>
//                         <input
//                             type="password"
//                             placeholder="Confirm Password"
//                             className="w-full input input-bordered h-10"
//                         />
//                     </div>
//                     <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
//                         Already have an account?
//                     </a>
//                     <div>
//                         <button type="" className="btn btn-block btn-sm mt-2 hover:text-blue-600">
//                             Sign Up
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Signup;
