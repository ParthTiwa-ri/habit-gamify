import Coin from "../ui/Reward/Coin";

function Reward() {
  return (
    <div className="absolute inset-0 bg-slate-200/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="relative p-5 h-4/6 bg-base-content text-green-500 shadow-2xl rounded-lg">
        <p className="text-center text-3xl">Hurray 🥳 🎉</p>
        <p className="text-xl text-violet-600 mt-3">
          You have completed all habits for today
        </p>

        <Coin />
        <button className="px-4 font-semibold py-2 bg-success rounded-lg shadow-sm text-success-content absolute bottom-7 left-1/2 transform -translate-x-1/2 active:translate-y-0 focus:outline-none">
          Claim
        </button>
      </div>
    </div>
  );
}

export default Reward;
