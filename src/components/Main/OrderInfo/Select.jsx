export default function Select({ label, name, options, className }) {
  return (
    <>
      <div className={className}>
        <div className="mb-1 text-gray-500">{label}</div>
        <div>
          <select
            className="w-full rounded-lg border-gray-400 focus:border-transparent focus:ring-2 focus:ring-orange-500 dark:bg-transparent"
            name={name}
          >
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                className="dark:text-gray-600"
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}
