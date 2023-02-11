export default function Button({ children, className }) {
  return (
    <>
      <button
        className={`focus:ring-black-400 flex items-center gap-3 rounded-xl bg-rose-400 py-3 px-8 text-white hover:bg-rose-300 ${className}`}
      >
        {children}
      </button>
    </>
  );
}
