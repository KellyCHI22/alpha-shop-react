import { ReactComponent as RightArrow } from "assets/icons/right-arrow.svg";
import Button from "./OrderInfo/Button";

export default function ProgressControl() {
  return (
    <>
      <section className="mt-5 flex justify-end border-t pt-5 sm:col-span-5 sm:col-start-2 sm:row-start-2 sm:mt-0">
        <section>
          <Button>
            下一步
            <RightArrow />
          </Button>
        </section>
      </section>
    </>
  );
}
