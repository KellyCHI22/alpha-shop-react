import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Button from "./Button";

export default function ProgressControl() {
  return (
    <>
      <section className="flex justify-end border-t pt-5">
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
