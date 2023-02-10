import productOne from '../../../assets/images/product-1.jpg';
import productTwo from '../../../assets/images/product-2.jpg';
import { FaMinus, FaPlus } from 'react-icons/fa';

export default function Cart() {
  return (
    <>
      <section className="col-start-8 col-span-4 flex flex-col justify-end">
        <div className="h-fit border rounded p-8 flex flex-col gap-5">
          <h3 className="text-lg font-bold">購物籃</h3>

          <section className="space-y-10 my-4">
            <div className="grid grid-cols-[100px_2fr_1fr]">
              <img src={productOne} className="h-[100px]" />
              <div className="ml-5">
                <div className="mb-3">破壞補丁修身牛仔褲</div>
                <div>
                  <div className="flex items-center gap-5">
                    <FaMinus className="bg-gray-200 rounded-full p-1.5 text-2xl" />
                    <span>1</span>
                    <FaPlus className="bg-gray-200 rounded-full p-1.5 text-2xl" />
                  </div>
                </div>
              </div>
              <div className="font-bold justify-self-end">$ 3,999</div>
            </div>

            <div className="grid grid-cols-[100px_2fr_1fr]">
              <img src={productTwo} className="h-[100px]" />
              <div className="ml-5">
                <div className="mb-3">刷色直筒牛仔褲</div>
                <div>
                  <div className="flex items-center gap-5">
                    <FaMinus className="bg-gray-200 rounded-full p-1.5 text-2xl" />
                    <span>1</span>
                    <FaPlus className="bg-gray-200 rounded-full p-1.5 text-2xl" />
                  </div>
                </div>
              </div>
              <div className="font-bold justify-self-end">$ 1,299</div>
            </div>

          </section>

          <section className="border-t py-3 flex justify-between">
            <div>運費</div>
            <div className="font-bold">免費</div>
          </section>

          <section className="border-t py-3 flex justify-between">
            <div>小計</div>
            <div className="font-bold">$ 5,298</div>
          </section>
        </div>
      </section>
    </>
  );
}