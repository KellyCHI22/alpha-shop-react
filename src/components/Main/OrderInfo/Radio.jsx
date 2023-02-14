export default function Radio({ id, name, label, price, description }) {
  return (
    <>
      <div className="relative">
        <input
          type="radio"
          id={id}
          name={name}
          defaultValue={id}
          className="peer absolute top-1/2 left-5 -translate-y-1/2 text-gray-900 focus:ring-gray-900 dark:bg-gray-500"
          required
        />
        <label
          htmlFor={id}
          className="grid cursor-pointer grid-cols-[60px_1fr_100px] place-items-center rounded-lg border border-gray-200 bg-white py-5 text-gray-700 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-gray-600 peer-checked:text-black dark:border-gray-500 dark:bg-transparent dark:text-gray-500 dark:hover:bg-neutral-800 dark:peer-checked:border-white dark:peer-checked:text-gray-500"
        >
          <div className="col-start-2 flex w-full flex-col items-start">
            <div className="font-bold dark:text-white">{label}</div>
            <div>{description}</div>
          </div>
          <div className="font-bold dark:text-white">
            {price === "0" ? "免費" : `$ ${price}`}
          </div>
        </label>
      </div>
    </>
  );
}
