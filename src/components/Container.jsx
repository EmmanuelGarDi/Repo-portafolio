export default function Container({ children }) {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
      {children}
    </div>
  );
}