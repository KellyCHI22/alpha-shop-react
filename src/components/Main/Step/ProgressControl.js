import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function ProgressControl() {
  return (
    <>
      <section className="pt-5 flex justify-end border-t">
        <section>
          <button className="flex items-center gap-3 py-3 px-8 rounded-xl bg-rose-400 text-white">
            下一步
            <HiOutlineArrowNarrowRight />
          </button>
        </section>
      </section>
    </>
  );
}