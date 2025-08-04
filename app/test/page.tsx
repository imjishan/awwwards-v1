export default function TestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold mb-4">Test Page</h1>
        <p className="text-xl text-gray-300 mb-8">
          This is a test page to verify the global navigation works on all pages.
        </p>
        <p className="text-lg text-gray-400">
          You should see the navigation bar at the bottom center of the screen.
        </p>
        <div className="mt-8 space-y-4">
          <p className="text-sm text-gray-500">Try scrolling down and up to see the hide/show behavior.</p>
          <p className="text-sm text-gray-500">Click on the navigation items to see the dropdown menu.</p>
        </div>
      </div>
    </div>
  );
}