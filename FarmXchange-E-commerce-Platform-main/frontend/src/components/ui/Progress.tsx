import React from 'react';
type ProgressProps = {
  steps: number;
  currentStep: number;
};
export function Progress({
  steps,
  currentStep
}: ProgressProps) {
  return <div className="w-full max-w-md mx-auto mb-8">
      <div className="relative">
        {/* Progress bar background */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2" />
        {/* Active progress bar */}
        <div className="absolute top-1/2 left-0 h-1 bg-green-500 -translate-y-1/2 transition-all duration-300" style={{
        width: `${currentStep / (steps - 1) * 100}%`
      }} />
        {/* Step indicators */}
        <div className="relative flex justify-between">
          {Array.from({
          length: steps
        }).map((_, index) => <div key={index} className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${index <= currentStep ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
              {index + 1}
            </div>)}
        </div>
      </div>
    </div>;
}