const Onboarding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full glass p-8 rounded-3xl">
        <h1 className="text-4xl font-bold mb-4">Welcome to Collabity! 🎉</h1>
        <p className="text-gray-600 mb-8">Let's set up your profile and find your perfect teammates</p>
        <div className="space-y-4">
          <p className="text-lg">Onboarding flow coming soon...</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Add your skills and interests</li>
            <li>Tell us about your experience</li>
            <li>Set your availability</li>
            <li>Connect your socials</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
