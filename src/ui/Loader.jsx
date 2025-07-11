function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
      <div className="rounded-2xl bg-white p-8 shadow-2xl">
        <div className="loader mx-auto"></div>
        <p className="mt-4 text-center font-medium text-gray-600">Loading...</p>
      </div>
    </div>
  );
}

export default Loader;
