import React, { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";



const Login = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const [loginEmail, setLoginEmail] = useState<string>("");
  const [loginPassword, setLoginPassword] = useState<string>("");

  const [signupFullName, setSignupFullName] = useState<string>("");
  const [signupBranch, setSignupBranch] = useState<string>("");
  const [signupSemester, setSignupSemester] = useState<string>("");
  const [signupEmail, setSignupEmail] = useState<string>("");
  const [signupGender, setSignupGender] = useState<string>("");
  const [signupPassword, setSignupPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");






  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login email:", loginEmail);
    console.log("Login password:", loginPassword);
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: loginEmail,
          password: loginPassword,
        }),
      });
  
      if (response.ok) {
        // Successfully logged in, you can redirect or perform other actions here
        console.log("Login successful!");
      } else {
        // Handle login failure, show an error message or perform other actions
        console.error("Login failed!");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  
  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Full Name:", signupFullName);
    console.log("Branch:", signupBranch);
    console.log("Semester:", signupSemester);
    console.log("Email:", signupEmail);
    console.log("Gender:", signupGender);
    console.log("Password:", signupPassword);
    console.log("Confirm Password:", confirmPassword);
  
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: signupFullName,
          branch: signupBranch,
          semester: signupSemester,
          email: signupEmail,
          gender: signupGender,
          password: signupPassword,
          confirmPassword: confirmPassword,
        }),
      });
  
      if (response.ok) {
        // Successfully signed up, you can redirect or perform other actions here
        console.log("Signup successful!");
      } else {
        // Handle signup failure, show an error message or perform other actions
        console.error("Signup failed!");
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };
  

  const toggleForm = () => {
    setIsLogin(!isLogin);
    
  };

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="dashboard">
        <section className="flex flex-col items-center justify-center min-h-screen ">
          {isLogin ? (
            <div className="w-96 bg-white p-6 rounded-lg shadow-lg  transition-transform">
              <h1 className="text-3xl font-semibold mb-4 transition-transform">Login</h1>
              <form onSubmit={handleLoginSubmit}>
              <div className="mb-4">
                <label htmlFor="loginEmail" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="loginEmail"
                  className="w-full  border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-300 px-2 border-2"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="loginPassword" className="block text-sm font-medium">
                  Password
                </label>
                <input
                  type="password"
                  id="loginPassword"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-300 px-2 border-2"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
              </div>
                <div className="mb-4">
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                  >
                    Login
                  </button>
                </div>
              </form>
              <div className="mb-4">
                <button
                  onClick={toggleForm}
                  className="w-full bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400"
                >
                  Switch to Signup
                </button>
              </div>
            </div>
          ) : (
            <div className="w-96 bg-white p-6 rounded-lg shadow-lg">
              <h1 className="text-3xl font-semibold mb-4">Signup</h1>
              <form onSubmit={handleSignupSubmit}>
              <div className="mb-4">
                <label htmlFor="signupFullName" className="block text-sm font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  id="signupFullName"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-300 px-2 border-2"
                  value={signupFullName}
                  onChange={(e) => setSignupFullName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="signupBranch" className="block text-sm font-medium">
                  Branch
                </label>
                <input
                  type="text"
                  id="signupBranch"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-300 px-2 border-2"
                  value={signupBranch}
                  onChange={(e) => setSignupBranch(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="signupSemester" className="block text-sm font-medium">
                  Semester
                </label>
                <input
                  type="text"
                  id="signupSemester"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-300 px-2 border-2"
                  value={signupSemester}
                  onChange={(e) => setSignupSemester(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="signupEmail" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="signupEmail"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-300 px-2 border-2"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="signupGender" className="block text-sm font-medium">
                  Gender
                </label>
                <input
                  type="text"
                  id="signupGender"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-300 px-2 border-2"
                  value={signupGender}
                  onChange={(e) => setSignupGender(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="signupPassword" className="block text-sm font-medium">
                  Password
                </label>
                <input
                  type="password"
                  id="signupPassword"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-300 px-2 border-2"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="confirmPassword" className="block text-sm font-medium">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-300 px-2 border-2"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
                <div className="mb-4">
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                  >
                    Signup
                  </button>
                </div>
              </form>
              <div className="mb-4">
                <button
                  onClick={toggleForm}
                  className="w-full bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400"
                >
                  Switch to Login
                </button>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Login;
