export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Welcome to HisabKitab
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your personal expense tracker and financial companion
          </p>
          <div className="space-x-4">
            <a
              href="/auth/signin"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Sign In
            </a>
            <a
              href="/auth/signup"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
          