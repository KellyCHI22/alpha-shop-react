export default function StepProgress() {
  return (
    <>
      <section className="my-10 flex justify-between space-x-5">
        {/* step one */}
        <span>
          <span className="inline-block text-center align-text-top bg-gray-900 text-white rounded-full w-6 h-6 mr-3">
            <span>1</span>
          </span>
          <span>寄送地址</span>
        </span>

        <span className="w-16 h-0.5 my-3 bg-gray-900" />

        {/* step two */}
        <span>
          <span className="inline-block text-center align-text-top rounded-full border-[1px] border-gray-300 w-6 h-6 mr-3">
            <span className="text-gray-400">2</span>
          </span>
          <span className="text-gray-400">運送方式</span>
        </span>

        <span className="w-16 h-0.5 my-3 bg-gray-300" />

        {/* step three */}
        <span>
          <span className="inline-block text-center align-text-top rounded-full border-[1px] border-gray-300 w-6 h-6 mr-3">
            <span className="text-gray-400">3</span>
          </span>
          <span className="text-gray-400">付款資訊</span>
        </span>

      </section>
    </>
  );
}