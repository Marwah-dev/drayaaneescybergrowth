'use client';

import React from 'react';
import {
  HeartPulse,
  Award,
  Activity,
  Flame,
  UserCheck,
  CalendarCheck,
  ShieldCheck,
  Hospital,
  FileCheck,
  GraduationCap,
  Scale,
  Dumbbell,
  Baby,
  Stethoscope,
  CheckCircle,
} from 'lucide-react';

interface IconResolverProps {
  name: string;
  className?: string;
}

export const IconResolver: React.FC<IconResolverProps> = ({
  name,
  className = 'h-6 w-6',
}) => {
  const iconProps = { className };

  switch (name) {
    case 'HeartPulse':
      return <HeartPulse {...iconProps} />;
    case 'Award':
      return <Award {...iconProps} />;
    case 'Activity':
      return <Activity {...iconProps} />;
    case 'Flame':
      return <Flame {...iconProps} />;
    case 'UserCheck':
      return <UserCheck {...iconProps} />;
    case 'CalendarCheck':
      return <CalendarCheck {...iconProps} />;
    case 'ShieldCheck':
      return <ShieldCheck {...iconProps} />;
    case 'Hospital':
      return <Hospital {...iconProps} />;
    case 'FileCheck':
      return <FileCheck {...iconProps} />;
    case 'GraduationCap':
      return <GraduationCap {...iconProps} />;
    case 'Scale':
      return <Scale {...iconProps} />;
    case 'Dumbbell':
      return <Dumbbell {...iconProps} />;
    case 'Baby':
      return <Baby {...iconProps} />;
    case 'Stethoscope':
      return <Stethoscope {...iconProps} />;
    default:
      return <CheckCircle {...iconProps} />;
  }
};
