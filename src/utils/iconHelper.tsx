import React from 'react';
import {
  Coffee,
  Code2,
  Braces,
  Database,
  Atom,
  Layout,
  Palette,
  Server,
  Cpu,
  Network,
  HardDrive,
  Layers,
  BarChart3,
  PieChart,
  FileSpreadsheet,
  Sheet,
  BrainCircuit,
  MessageSquare,
  Sparkles,
  Box,
  Binary,
  FolderGit2,
  GitBranch,
  Terminal,
  GraduationCap,
  Award,
  ShieldCheck,
  Compass,
  Lightbulb,
  HeartHandshake,
  BookOpen,
  CheckCircle2,
  LucideIcon
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Coffee,
  Code2,
  Braces,
  Database,
  Atom,
  Layout,
  Palette,
  Server,
  Cpu,
  Network,
  HardDrive,
  Layers,
  BarChart3,
  PieChart,
  FileSpreadsheet,
  Sheet,
  BrainCircuit,
  MessageSquare,
  Sparkles,
  Box,
  Binary,
  FolderGit2,
  GitBranch,
  Terminal,
  GraduationCap,
  Award,
  ShieldCheck,
  Compass,
  Lightbulb,
  HeartHandshake,
  BookOpen,
  CheckCircle2
};

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export const DynamicIcon: React.FC<IconProps> = ({ name, className = "w-5 h-5", size }) => {
  const IconComponent = iconMap[name] || Code2;
  return <IconComponent className={className} size={size} />;
};
