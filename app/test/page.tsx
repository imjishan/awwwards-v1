export default function TestPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-8 p-8">
        <h1 className="text-6xl font-bold text-white mb-4">
          Test Page
        </h1>
        <p className="text-xl text-white/80 max-w-2xl">
          This is a test page to demonstrate that the ChromeGrid background works across all pages. 
          Move your mouse around to see the interactive 3D grid effect!
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
            Button 1
          </button>
          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
            Button 2
          </button>
        </div>
        <div className="mt-8">
          <a 
            href="/" 
            className="text-blue-400 hover:text-blue-300 underline"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}