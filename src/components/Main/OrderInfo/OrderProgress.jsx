import { ReactComponent as ProgressCompleteIcon } from "assets/icons/pg-complete.svg";

export default function OrderProgress({ orderStep }) {
  return (
    <section className="my-10 flex items-center justify-between space-x-5">
      <OrderProgressCount
        count={1}
        isActive={orderStep === "address"}
        isComplete={orderStep === "shipping" || orderStep === "payment"}
      >
        寄送地址
      </OrderProgressCount>
      <ProgressConnectLine isActive />
      <OrderProgressCount
        count={2}
        isActive={orderStep === "shipping"}
        isComplete={orderStep === "payment"}
      >
        運送方式
      </OrderProgressCount>
      <ProgressConnectLine isActive={orderStep !== "address"} />
      <OrderProgressCount count={3} isActive={orderStep === "payment"}>
        付款資訊
      </OrderProgressCount>
    </section>
  );
}

// 嘗試過使用邏輯運算子的寫法，完全不易閱讀，因此維持現在這樣三種狀態的樣式分開寫，即使有點重複，但還是很容易理解
function OrderProgressCount({ count, isActive, isComplete, children }) {
  // 完成狀態樣式
  if (isComplete) {
    return (
      <div className="flex items-center">
        <div className="inline-block h-10 w-10 rounded-full bg-gray-900 pt-1 text-center text-xl text-white dark:bg-neutral-700 sm:mr-3 sm:h-6 sm:w-6 sm:pt-0 sm:text-base">
          <ProgressCompleteIcon className="mt-1 ml-2 sm:m-0" />
        </div>
        <span className="hidden sm:inline-block sm:w-fit">{children}</span>
      </div>
    );
  }
  // active 狀態樣式
  else if (isActive) {
    return (
      <div className="flex items-center">
        <div className="inline-block h-10 w-10 rounded-full bg-gray-900 pt-1 text-center text-xl text-white dark:bg-neutral-700 sm:mr-3 sm:h-6 sm:w-6 sm:pt-0 sm:text-base">
          <div className="sm:-mt-[1px]">{count}</div>
        </div>
        <span className="hidden sm:inline-block sm:w-fit">{children}</span>
      </div>
    );
  }
  // 非 complete 也非 active 的樣式
  else {
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

// 連結線樣式
function ProgressConnectLine({ isActive }) {
  return (
    <span
      className={`my-3 h-0.5 w-16 ${
        isActive
          ? "bg-gray-900 dark:bg-neutral-400"
          : "bg-gray-300 dark:bg-neutral-700"
      }`}
    />
  );
}
