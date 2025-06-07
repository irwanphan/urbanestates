import React from "react";
import { IconUser, IconBell, IconCreditCard, IconShield, IconSettings } from "@tabler/icons-react";

const sections = [
  {
    title: "Account",
    items: [
      {
        icon: <IconUser size={28} className="text-gray-400" />,
        title: "Profile",
        desc: "Manage your profile information",
      },
      {
        icon: <IconBell size={28} className="text-gray-400" />,
        title: "Notifications",
        desc: "Manage your notification preferences",
      },
    ],
  },
  {
    title: "Payments",
    items: [
      {
        icon: <IconCreditCard size={28} className="text-gray-400" />,
        title: "Payment Methods",
        desc: "Manage your payment methods",
      },
    ],
  },
  {
    title: "Security",
    items: [
      {
        icon: <IconShield size={28} className="text-gray-400" />,
        title: "Security",
        desc: "Manage your security settings",
      },
    ],
  },
  {
    title: "App",
    items: [
      {
        icon: <IconSettings size={28} className="text-gray-400" />,
        title: "Preferences",
        desc: "Manage your app preferences",
      },
    ],
  },
];

const Settings: React.FC = () => (
  <div className="">
    <h1 className="text-3xl font-bold mb-8">Settings</h1>
    {sections.map(section => (
      <div key={section.title} className="mb-8">
        <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {section.items.map(item => (
            <div key={item.title} className="flex items-center gap-4 bg-gray-50 rounded-lg p-4">
              <div className="bg-white rounded-lg p-2 shadow-sm flex items-center justify-center">{item.icon}</div>
              <div>
                <div className="font-semibold text-gray-900">{item.title}</div>
                <div className="text-gray-400 text-sm">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default Settings;
