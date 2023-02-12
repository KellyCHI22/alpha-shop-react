import StepProgress from "./StepProgress";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

export default function Step() {
  return (
    <div className="flex flex-col justify-end sm:col-span-5 sm:col-start-2 sm:row-start-1">
      <h2 className="text-3xl font-bold">結帳</h2>
      <StepProgress />
      <StepOne />
      <StepTwo />
      <StepThree />
    </div>
  );
}
