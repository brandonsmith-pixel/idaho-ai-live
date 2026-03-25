import { Shield, Lock, Award, CheckCircle } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "SOC 2 Compliant",
      description: "Enterprise-grade security"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "256-bit Encryption",
      description: "Bank-level data protection"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Idaho Business Leader",
      description: "2024 Innovation Award"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "$2M Insurance",
      description: "Full liability coverage"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {badges.map((badge, index) => (
        <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
          <div className="text-blue-700 mb-2 flex justify-center">{badge.icon}</div>
          <h4 className="font-bold text-sm">{badge.title}</h4>
          <p className="text-xs text-gray-600">{badge.description}</p>
        </div>
      ))}
    </div>
  );
}