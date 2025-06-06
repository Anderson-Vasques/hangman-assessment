import React from "react";

interface PersonProps {
  stage: number; // 0-6
}

export const Person: React.FC<PersonProps> = ({ stage }) => {
  return (
    <div className="flex flex-col items-center space-y-1 min-h-[150px]">
      {stage > 0 && <p key="head" className="text-sm">Head</p>}
      {stage > 1 && <p key="body" className="text-sm">Body</p>}
      {stage > 2 && <p key="arm1" className="text-sm">Left Arm</p>}
      {stage > 3 && <p key="arm2" className="text-sm">Right Arm</p>}
      {stage > 4 && <p key="leg1" className="text-sm">Left Leg</p>}
      {stage > 5 && <p key="leg2" className="text-sm">Right Leg</p>}
    </div>
  );
};