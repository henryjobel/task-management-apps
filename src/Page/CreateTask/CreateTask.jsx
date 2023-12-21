import { useForm } from "react-hook-form";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const CreateTask = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        const temp = {
            ...data,
            "like": 0,
            "dislike": 0,
            "surveyor": user.email,
            "vote": {
                "yes": 0,
                "no": 0
            },
            "voted": [],
            "likesBy": [],
            "dislikesBy": [],
            "timestamp": new Date(),
            "status": "pending",
            "feedback": [],
            "comment": [],
            "report": [],
            "adminFeedback": "",
            "feelBackBy": []
        }
        console.log(temp);

        // axiosSecure.post('/createsurvey', temp)
        //     .then(res => {
        //         console.log(res.data)
        //         Swal.fire({
        //             title: "Congratulation!",
        //             text: "Your survey has been created.",
        //             icon: "success"
        //         });
        //         reset();
        //         navigate('/dashboard/mypostedsurvey')
        //     })

    }

    return (
        <div>
            <div className="relative border-gray-700 border-s-8 ps-3">
                <h2 className="z-20 text-6xl font-bold">Create Task</h2>
                <p className="absolute bottom-0 z-10 overflow-hidden text-6xl md:text-7xl lg:text-9xl opacity-5">Create Task</p>
            </div>
            <div>
                <form className="p-5 mb-5 rounded-lg" onSubmit={handleSubmit(onSubmit)}>

                    <div className="flex gap-4">
                        <div className="w-full form-control">
                            <label className="label">
                                <span className="font-semibold label-text">Task Title*</span>
                            </label>
                            <input required {...register("title")} type="text" placeholder="Title" className="w-full input input-bordered" />
                        </div>

                        <div className="w-full form-control">
                            <label className="label">
                                <span className="font-semibold label-text">Priority*</span>
                            </label>
                            <select required defaultValue='default' {...register("category")} className="select select-bordered">
                                <option disabled hidden value='default'>priority level</option>
                                <option value='Low'>Low</option>
                                <option value='moderate'>moderate</option>
                                <option value='high'>high</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-full form-control">
                        <label className="label">
                            <span className="font-semibold label-text">Deadline*</span>
                        </label>
                        <input required {...register("deadline")} type="date" placeholder="Your question" className="w-full input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="font-semibold label-text">Task descriptions*</span>
                        </label>
                        <textarea required {...register("description")} className="h-24 textarea textarea-bordered" placeholder="About Survey"></textarea>
                    </div>
                    {/* errors will return when field validation fails  */}
                    <br />
                    <input className="w-full px-8 btn btn-active btn-neutral " type="submit" />
                </form>
            </div>
        </div>
    );
};

export default CreateTask;