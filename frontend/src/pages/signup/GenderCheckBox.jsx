const GenderCheckBox = ({onCheckboxChange, selectdGender}) => {
    return (
        <div className="flex mt-2">
            <div className="form-control">
                <label className={`label gap-2 cursor-pointer ${selectdGender === "male" ? "selected" : ""}`}>
                    <span className="label-text">Male</span>
                    <input
                        type="checkbox"
                        className="checkbox border-slate-700"
                        checked={selectdGender === "male"}
                        onChange={() => onCheckboxChange("male")}
                    />
                </label>
            </div>
            <div className="form-control">
                <label className={`label gap-2 cursor-pointer ${selectdGender === "female" ? "selected" : ""}`}>
                    <span className="label-text">Female</span>
                    <input
                        type="checkbox"
                        className="checkbox border-slate-700"
                        checked={selectdGender === "female"}
                        onChange={() => onCheckboxChange("female")}
                    />
                </label>
            </div>
        </div>
    );
};

export default GenderCheckBox;

// const GenderCheckBox = () => {
//     return <div className="flex mt-2">
//         <div className='form-control'>
//             <label className={`label gap-2 cursor-pointer`}>
//                 <span className='label-text'>Male</span>
//                 <input type="checkbox" className='checkbox border-slate-900' />
//             </label>
//         </div>
//         <div className='form-control'>
//             <label className={`label gap-2 cursor-pointer`}>
//                 <span className='label-text'>Female</span>
//                 <input type="checkbox" className='checkbox border-slate-900' />
//             </label>
//         </div>
//     </div>;
// };

// export default GenderCheckBox;
