import StepProgress from './StepProgress';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import ProgressControl from './ProgressControl';

export default function Step() {
  return (
    <div className="col-start-2 col-span-5" >
      <section>
        <h2>結帳</h2>
        <StepProgress />
        <section>
          <StepOne />
          {/* <StepTwo />
          <StepThree /> */}
        </section>
      </section>
      <ProgressControl />
    </div>
  );
}