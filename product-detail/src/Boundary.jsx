// eslint-disable-next-line react/prop-types
export function Boundary({ children }) {
  return (
    <div className="border-dashed border-4 rounded border-red-300">
      {children}
    </div>
  );
}
