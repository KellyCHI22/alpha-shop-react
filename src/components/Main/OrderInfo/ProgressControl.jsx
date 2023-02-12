import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Button from "./Button";

export default function ProgressControl() {
  return (
    <>
      <section className="mt-5 flex justify-end border-t pt-5 sm:col-span-5 sm:col-start-2 sm:row-start-2 sm:mt-0">
        <section>
          <Button>
            下一步
            <HiOutlineArrowNarrowRight />
          </Button>
        </section>
      </section>
    </>
  );
}
