export default function Loading() {
  return (
    <body className="flex items-center justify-center h-screen bg-gray-100">
      {/* <!-- Loading Spinner --> */}
      <div className="flex flex-col items-center space-y-4">
        {/* <!-- Spinner --> */}
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        {/* <!-- Loading Text --> */}
        <p className="text-gray-600 font-medium">Loading...</p>
      </div>
    </body>
  );
}
