import { useForm } from "react-hook-form";
import { MdAdd } from "react-icons/md";
import { useHabitContext } from "../Context/DataContext";

function Model() {
  const { register, handleSubmit, reset } = useForm();
  const { updateHabitData } = useHabitContext();
  function onSubmit(data) {
    const newHabit = { ...data, img: "/images/new.avif", completed: false };
    updateHabitData((item) => [...item, newHabit]);
    reset();
    document.getElementById("my_modal_4").close();
  }

  return (
    <div>
      <button
        onClick={() => document.getElementById("my_modal_4").showModal()}
        className="btn btn-wide flex gap-2 justify-center"
      >
        <MdAdd className="text-3xl" />
        <span className="text-xl"> New Activity</span>
      </button>
      <dialog id="my_modal_4" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box w-5/12 max-w-5xl mb-5">
          <h3 className="font-bold text-lg mb-5">Add New Habit</h3>
          <div>
            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  className="grow"
                  placeholder="Habit Name"
                  {...register("title")}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  className="grow"
                  placeholder=" Description"
                  {...register("desc")}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  className="grow"
                  placeholder="Timing"
                  {...register("timing")}
                />
                <span className="badge badge-info">Optional</span>
              </label>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Model;
