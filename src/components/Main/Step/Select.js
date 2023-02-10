export default function Select({ label, value, options }) {
  return (
    <>
      <div className="mb-1 text-gray-500">{label}</div>
      <div>
        <select className="w-full rounded-lg border-gray-400" value={value}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
