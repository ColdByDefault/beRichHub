// SPDX-License-Identifier: LicenseRef-BRH-1.0
import { Progress } from "@/components/ui/progress";
import { CheckCircle } from "lucide-react";

export function LoadingScreen({ progress }: { progress: number }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="text-center space-y-8 p-8">
        {/* Logo/Brand */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">beRich.Hub</h1>
          <p className="text-gray-600">Loading workspace...</p>
        </div>
        {/* Progress Bar */}
        <div className="w-80 space-y-2">
          <Progress value={progress} className="h-2" />
          <p className="text-sm text-gray-500">{progress}% Complete</p>
        </div>

        {/* Loading Steps */}
        <div className="space-y-3 text-left max-w-xs">
          <div className="flex items-center space-x-3">
            <CheckCircle
              className={`w-5 h-5 ${
                progress > 20 ? "text-blue-500" : "text-gray-300"
              }`}
            />
            <span
              className={`text-sm ${
                progress > 20 ? "text-gray-600" : "text-gray-500"
              }`}
            >
              Initializing application
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <CheckCircle
              className={`w-5 h-5 ${
                progress > 50 ? "text-blue-500" : "text-gray-300"
              }`}
            />
            <span
              className={`text-sm ${
                progress > 50 ? "text-gray-600" : "text-gray-500"
              }`}
            >
              Loading user data
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <CheckCircle
              className={`w-5 h-5 ${
                progress > 80 ? "text-blue-500" : "text-gray-300"
              }`}
            />
            <span
              className={`text-sm ${
                progress > 80 ? "text-gray-600" : "text-gray-500"
              }`}
            >
              Setting up LLM Models
            </span>
          </div>
        </div>

        {/* Fun Loading Messages */}
        <div className="text-sm text-gray-500 italic">
          {progress < 30 && "Brewing some digital coffee..."}
          {progress >= 30 && progress < 60 && "Organizing your data..."}
          {progress >= 60 && progress < 90 && "Adding the finishing touches..."}
          {progress >= 90 && "Almost ready!"}
        </div>
      </div>
    </div>
  );
}
