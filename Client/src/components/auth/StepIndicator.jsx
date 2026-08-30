import { Check } from 'lucide-react';

const StepIndicator = ({ currentStep, role }) => {
  const steps = [
    { number: 1, label: 'Account Details' },
    {
      number: 2,
      label: role === 'farmer' ? 'Farm Profile' : 'Business Profile',
    },
  ];

  return (
    <div className="stepper-container">
      <div className="stepper-wrapper">
        {steps.map((s, index) => {
          const isCompleted = currentStep > s.number;
          const isActive = currentStep === s.number;

          return (
            <div key={s.number} className="stepper-item">
              <div className="stepper-node-row">
                <div
                  className={`stepper-node ${isCompleted ? 'is-completed' : ''} ${isActive ? 'is-active' : ''}`}
                >
                  {isCompleted ? <Check size={14} strokeWidth={3} /> : s.number}
                </div>
                {index < steps.length - 1 && (
                  <div className={`stepper-line ${currentStep > 1 ? 'is-filled' : ''}`} />
                )}
              </div>
              <span className={`stepper-label ${isActive ? 'label-active' : ''}`}>
                {s.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepIndicator;
