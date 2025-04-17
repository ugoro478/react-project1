import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";

// Add your name here
const firstName = "Roland";

function App() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      {/* Product Card */}
      <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden mb-8">
        <Image />
        <div className="p-6 md:p-8 flex flex-col justify-center">
          <Name />
          <Price />
          <Description />
        </div>
      </div>

      {/* Greeting Section */}
      <div className="text-center p-6 bg-gray-50 rounded-xl">
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">
          {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
        </h2>
        {firstName && (
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="User"
            className="w-24 h-24 rounded-full border-4 border-blue-500 mx-auto mt-4 object-cover"
          />
        )}
      </div>
    </div>
  );
}

export default App;
