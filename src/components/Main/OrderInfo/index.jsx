import StepProgress from "./StepProgress";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import ProgressControl from "./ProgressControl";

export default function Step() {
  return (
    <div className="col-span-5 col-start-2 flex flex-col justify-end">
      <section className="">
        <h2 className="text-3xl font-bold">結帳</h2>
        <StepProgress />
        <section>
          <StepOne />
          <StepTwo />
          <StepThree />
        </section>
      </section>
      <ProgressControl />
    </div>
  );
}
