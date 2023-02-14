// ! 樣式需要再做 refactor
export default function OrderProgress() {
  return (
    <>
      <section className="my-10 flex items-center justify-between space-x-5">
        <span>
          <span className="mr-3 inline-block h-10 w-10 rounded-full bg-gray-900 text-center align-text-top text-white dark:bg-neutral-700 sm:h-6 sm:w-6">
            <span className="mt-[4px] block text-xl sm:-mt-[1px] sm:text-base">
              1
            </span>
          </span>
          <span className="hidden sm:inline-block">寄送地址</span>
        </span>

        <span className="my-3 h-0.5 w-16 bg-gray-900 dark:bg-neutral-400" />

        <span>
          <span className="mr-3 inline-block h-10 w-10 rounded-full border-[1px] border-gray-300 text-center align-text-top text-white sm:h-6 sm:w-6">
            <span className="mt-[4px] block text-xl text-gray-400 sm:-mt-[1px] sm:text-base">
              2
            </span>
          </span>
          <span className="hidden text-gray-400 sm:inline-block">運送方式</span>
        </span>

        <span className="my-3 h-0.5 w-16 bg-gray-300 dark:bg-neutral-700" />

        <span>
          <span className="mr-3 inline-block h-10 w-10 rounded-full border-[1px] border-gray-300 text-center align-text-top text-white sm:h-6 sm:w-6">
            <span className="mt-[4px] block text-xl text-gray-400 sm:-mt-[1px] sm:text-base ">
              3
            </span>
          </span>
          <span className="hidden text-gray-400 sm:inline-block">付款資訊</span>
        </span>
      </section>
    </>
  );
}
