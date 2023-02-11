export default function Input({ label, type, placeholder, className }) {
  return (
    <>
      <div className={className}>
        <div className="mb-1 text-gray-500">{label}</div>
        <input
          className="w-full rounded-lg border-gray-400"
          type={type}
          placeholder={placeholder}
        />
      </div>
    </>
  );
}
