import { ReactComponent as RightArrow } from "assets/icons/right-arrow.svg";
import { ReactComponent as LeftArrow } from "assets/icons/left-arrow.svg";
import Button from "./OrderInfo/Button";

export default function ProgressControl({ orderStep, onStepButtonClick }) {
  let renderedButtons;

  if (orderStep === "address") {
    renderedButtons = (
      <Button
        className="w-full bg-rose-400 px-8 text-white hover:bg-rose-300 sm:w-40"
        onClick={() => onStepButtonClick("shipping")}
      >
        下一步
        <RightArrow />
      </Button>
    );
  } else if (orderStep === "shipping") {
    renderedButtons = (
      <>
        <Button
          className="w-auto hover:text-neutral-700"
          onClick={() => onStepButtonClick("address")}
        >
          <LeftArrow />
          上一步
        </Button>
        <Button
          className="w-40 bg-rose-400 px-8 text-white hover:bg-rose-300"
          onClick={() => onStepButtonClick("payment")}
        >
          下一步
          <RightArrow />
        </Button>
      </>
    );
  } else if (orderStep === "payment") {
    renderedButtons = (
      <>
        <Button
          className="w-auto hover:text-neutral-700"
          onClick={() => onStepButtonClick("shipping")}
        >
          <LeftArrow />
          上一步
        </Button>
        <Button className="w-40 bg-rose-400 px-8 text-white hover:bg-rose-300">
          確認下單
        </Button>
      </>
    );
  }

  return (
    <section className="mt-5 flex justify-end border-t pt-5 sm:col-span-5 sm:col-start-2 sm:row-start-2 sm:mt-0">
      <section
        className={
          orderStep === "address"
            ? "flex w-full sm:justify-end"
            : "flex w-full justify-between"
        }
      >
        {renderedButtons}
      </section>
    </section>
  );
}
