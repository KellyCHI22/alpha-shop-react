// ! 樣式需要再做 refactor
export default function StepProgress() {
  return (
    <>
      <section className="my-10 flex justify-between space-x-5">
        <span>
          <span className="mr-3 inline-block h-6 w-6 rounded-full bg-gray-900 text-center align-text-top text-white">
            <span>1</span>
          </span>
          <span>寄送地址</span>
        </span>

        <span className="my-3 h-0.5 w-16 bg-gray-900" />

        <span>
          <span className="mr-3 inline-block h-6 w-6 rounded-full border-[1px] border-gray-300 text-center align-text-top">
            <span className="text-gray-400">2</span>
          </span>
          <span className="text-gray-400">運送方式</span>
        </span>

        <span className="my-3 h-0.5 w-16 bg-gray-300" />

        <span>
          <span className="mr-3 inline-block h-6 w-6 rounded-full border-[1px] border-gray-300 text-center align-text-top">
            <span className="text-gray-400">3</span>
          </span>
          <span className="text-gray-400">付款資訊</span>
        </span>
      </section>
    </>
  );
}
