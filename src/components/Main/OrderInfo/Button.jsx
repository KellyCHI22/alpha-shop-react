export default function Button({ children, className, onClick }) {
  return (
    <>
      <button
        className={`flex items-center justify-center gap-3 rounded-xl py-3
        ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}
