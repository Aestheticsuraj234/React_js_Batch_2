import React from "react";
import { Link } from "react-router-dom";

export default function NotificationsPage() {
  return (
    <div className="w-full max-w-md mx-auto">
      <header className="flex items-center justify-between px-4 py-3 border-b">
        <Link to={"/"}  className="flex items-center gap-2 cursor-pointer">
          <InstagramIcon className="w-6 h-6" />
          <span className="font-bold text-lg text-white">Instagram</span>
        </Link>
        <button type="button" className="rounded-full p-2 bg-transparent border-none hover:bg-gray-200 dark:hover:bg-gray-700">
          <BellIcon className="w-5 h-5 text-white hover:text-black" />
          <span className="sr-only">Notifications</span>
        </button>
      </header>
      <div className="space-y-4 p-4">
        <NotificationItem
          avatarSrc="https://avatar.iran.liara.run/public/2"
          username="shadcn"
          time="1h"
          action="started following you"
        />
        <NotificationItem
          avatarSrc="https://avatar.iran.liara.run/public/22"
          username="jaredpalmer"
          time="2h"
          action="liked your photo"
        />
        <NotificationItem
          avatarSrc="https://avatar.iran.liara.run/public/23"
          username="acmeinc"
          time="3h"
          action="commented on your post"
        />
        <NotificationItem
          avatarSrc="https://avatar.iran.liara.run/public/24"
          username="amelia"
          time="4h"
          action="started following you"
        />
      </div>
    </div>
  );
}

function NotificationItem({ avatarSrc, username, time, action }) {
  return (
    <div className="flex items-center gap-3">
      <Avatar className="w-10 h-10">
        <img src={avatarSrc} alt={`@${username}`} />
        <AvatarFallback>{username.charAt(0).toUpperCase()}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div className="font-medium text-white">{username}</div>
          <span className="text-xs text-gray-500 dark:text-gray-400">{time}</span>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">{action}</p>
      </div>
    </div>
  );
}

function Avatar({ children, className }) {
  return <div className={`relative rounded-full overflow-hidden ${className}`}>{children}</div>;
}

function AvatarFallback({ children }) {
  return <div className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-700">{children}</div>;
}

function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="#fff"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
