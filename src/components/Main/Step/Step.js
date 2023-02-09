import StepProgress from './StepProgress';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import ProgressControl from './ProgressControl';

export default function Step() {
  return (
    <>
      <section>
        <h2>結帳</h2>
        <StepProgress />
        <section>
          <StepOne />
          <StepTwo />
          <StepThree />
        </section>
      </section>
      <ProgressControl />
    </>
  );
}