import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock } from "lucide-react";

const ADMIN_PASSWORD = "admin123"; // كلمة المرور الافتراضية

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [, setLocation] = useLocation();

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      // حفظ حالة تسجيل الدخول في localStorage
      localStorage.setItem("adminLoggedIn", "true");
      setLocation("/admin");
    } else {
      setError("كلمة المرور غير صحيحة");
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="flex justify-center mb-6">
          <div className="bg-blue-600 p-4 rounded-full">
            <Lock className="w-8 h-8 text-white" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-center text-blue-900 mb-2">
          لوحة التحكم
        </h1>
        <p className="text-center text-gray-600 mb-8">
          أدخل كلمة المرور للوصول إلى لوحة التحكم
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              كلمة المرور
            </label>
            <Input
              type="password"
              placeholder="أدخل كلمة المرور"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              onKeyPress={(e) => e.key === "Enter" && handleLogin()}
              className="border-2 border-blue-300 focus:border-blue-500"
            />
          </div>

          {error && (
            <div className="bg-red-50 border-2 border-red-300 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <Button
            onClick={handleLogin}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3"
          >
            دخول
          </Button>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            كلمة المرور الافتراضية: <span className="font-mono">admin123</span>
          </p>
        </div>
      </div>
    </div>
  );
}

