import { ReactComponent as ProgressCompleteIcon } from "assets/icons/pg-complete.svg";

export default function OrderProgress({ orderStep }) {
  return (
    <section className="my-10 flex items-center justify-between space-x-5">
      <OrderProgressCount
        count={1}
        active={orderStep === "address"}
        complete={orderStep === "shipping" || orderStep === "payment"}
      >
        寄送地址
      </OrderProgressCount>
      <ProgressConnectLine active />
      <OrderProgressCount
        count={2}
        active={orderStep === "shipping"}
        complete={orderStep === "payment"}
      >
        運送方式
      </OrderProgressCount>
      <ProgressConnectLine active={orderStep !== "address"} />
      <OrderProgressCount count={3} active={orderStep === "payment"}>
        付款資訊
      </OrderProgressCount>
    </section>
  );
}

function OrderProgressCount({ count, active, complete, children }) {
  if (complete) {
    return (
      <div className="flex items-center">
        <div className="inline-block h-10 w-10 rounded-full bg-gray-900 pt-1 text-center text-xl text-white dark:bg-neutral-700 sm:mr-3 sm:h-6 sm:w-6 sm:pt-0 sm:text-base">
          <ProgressCompleteIcon className="mt-1 ml-2 sm:m-0" />
        </div>
        <span className="hidden sm:inline-block sm:w-fit">{children}</span>
      </div>
    );
  } else if (active) {
    return (
      <div className="flex items-center">
        <div className="inline-block h-10 w-10 rounded-full bg-gray-900 pt-1 text-center text-xl text-white dark:bg-neutral-700 sm:mr-3 sm:h-6 sm:w-6 sm:pt-0 sm:text-base">
          <div className="sm:-mt-[1px]">{count}</div>
        </div>
        <span className="hidden sm:inline-block sm:w-fit">{children}</span>
      </div>
    );
  } else {
    return (
      <div className="flex items-center">
        <div className="inline-block h-10 w-10 rounded-full border-[1px] border-gray-300 pt-1 text-center text-xl text-gray-300 sm:mr-3 sm:h-6 sm:w-6 sm:pt-0 sm:text-base">
          <div className="sm:-mt-[1px]">{count}</div>
        </div>
        <span className="hidden text-gray-300 sm:inline-block sm:w-fit">
          {children}
        </span>
      </div>
    );
  }
}

function ProgressConnectLine({ active }) {
  return (
    <span
      className={`my-3 h-0.5 w-16 ${
        active
          ? "bg-gray-900 dark:bg-neutral-400"
          : "bg-gray-300 dark:bg-neutral-700"
      }`}
    />
  );
}
