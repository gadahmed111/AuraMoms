import React, { useState } from "react";
import {
  Home,
  ShoppingCart,
  MessageCircle,
  Circle,
  User,
  LogOut,
  Heart,
} from "lucide-react";

const VerticalSidebar = () => {
  const [activeItem, setActiveItem] = useState("home");

  // Sidebar items with icons and ids
  const items = [
    { id: "home", icon: Home },
    { id: "loved", icon: Heart },
    { id: "cart", icon: ShoppingCart },
    { id: "user", icon: User },
  ];

  return (
    <div className="h-screen w-16 bg-white border-r border-gray-200 fixed flex flex-col items-center py-4 justify-center">
      {/* Sidebar icons */}
      <div className="flex flex-col space-y-6">
        {items.map((item) => (
          <div
            key={item.id}
            className={`transition-all duration-200 p-2 ${
              activeItem === item.id ? "border-r-2 border-orange-500" : ""
            }`}
          >
            <button
              onClick={() => setActiveItem(item.id)}
              className={`p-3 rounded-full transition-colors duration-200 ${
                activeItem === item.id
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 text-gray-400"
              }`}
            >
              <item.icon className="w-6 h-6" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalSidebar;
