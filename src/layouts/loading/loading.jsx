import "./loading.css";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[999] bg-black flex items-center justify-center fade-in pointer-events-none">
      <div className="loader">
        <div data-glitch="Loading..." className="glitch">Loading...</div>
      </div>
    </div>
  );
}
