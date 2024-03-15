import Image from "next/image";
import Link from "next/link";

export default function Sidebar({ className = "" }) {
  return (
    <div
      className={`sidebar sidebar-full flex flex-col items-center w-60 h-full overflow-y-auto ${className}`}
    >
      <div className="w-full px-2">
        <div className="flex flex-col items-center w-full">
          <Link
            className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-neutral-focus"
            href="#"
          >
            <svg
              className="w-6 h-6 flex-none"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              ></path>
            </svg>
            <span className="sidebar-text ml-5 text-sm font-medium">Home</span>
          </Link>
          <Link
            className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-neutral-focus"
            href="#"
          >
            <svg
              className="w-6 h-6 flex-none"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64"
              />
            </svg>
            <span className="sidebar-text ml-5 text-sm font-medium">
              Explore
            </span>
          </Link>
          <Link
            className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-neutral-focus"
            href="#"
          >
            <svg
              className="w-6 h-6 flex-none"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
              />
            </svg>
            <span className="sidebar-text ml-5 text-sm font-medium">
              Shorts
            </span>
          </Link>
          <Link
            className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-neutral-focus"
            href="#"
          >
            <svg
              className="w-6 h-6 flex-none"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
              />
            </svg>
            <span className="sidebar-text ml-5 text-sm font-medium">
              Subscriptions
            </span>
          </Link>
        </div>
        <div className="flex flex-col items-center w-full mt-2 border-t border-neutral-focus">
          <Link
            className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-neutral-focus"
            href="#"
          >
            <svg
              className="w-6 h-6 flex-none"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
              />
            </svg>
            <span className="sidebar-text ml-5 text-sm font-medium">
              Library
            </span>
          </Link>
          <Link
            className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-neutral-focus"
            href="#"
          >
            <svg
              className="w-6 h-6 flex-none"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
              />
            </svg>
            <span className="sidebar-text ml-5 text-sm font-medium">
              History
            </span>
          </Link>
          <Link
            className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-neutral-focus"
            href="#"
          >
            <svg
              className="w-6 h-6 flex-none"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5"
              />
            </svg>
            <span className="sidebar-text ml-5 text-sm font-medium">
              Your videos
            </span>
          </Link>
          <Link
            className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-neutral-focus"
            href="#"
          >
            <svg
              className="w-6 h-6 flex-none"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="sidebar-text ml-5 text-sm font-medium">
              Watch later
            </span>
          </Link>
          <Link
            className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-neutral-focus"
            href="#"
          >
            <svg
              className="w-6 h-6 flex-none"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            <span className="sidebar-text ml-5 text-sm font-medium">
              Liked Videos
            </span>
          </Link>
          <Link
            className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-neutral-focus"
            href="#"
          >
            <svg
              className="w-6 h-6 flex-none"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
              />
            </svg>
            <span className="sidebar-text ml-5 text-sm font-medium">
              Show more
            </span>
          </Link>
        </div>
        <div className="sidebar-more flex flex-col items-center w-full mt-2 border-t border-neutral-focus">
          <b className="block text-left text-lg px-3 pt-3 opacity-70">
            Subscriptions
          </b>
          <Link
            className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-neutral-focus"
            href="#"
          >
            <Image className="w-6 h-6 rounded-full" src="/img/avatar/kimthiendung.jpg" alt="kimthiendung.jpg" />
            <span className="sidebar-text ml-5 text-sm font-medium">
              Funny channel
            </span>
          </Link>
          <Link
            className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-neutral-focus"
            href="#"
          >
            <div className="avatar placeholder">
              <div className="bg-neutral-focus rounded-full w-6">
                <span>E</span>
              </div>
            </div>
            <span className="sidebar-text ml-5 text-sm font-medium">
              Epic music
            </span>
          </Link>
          <Link
            className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-neutral-focus"
            href="#"
          >
            <div className="avatar placeholder">
              <div className="bg-neutral-focus rounded-full w-6">
                <span>W</span>
              </div>
            </div>
            <span className="sidebar-text ml-5 text-sm font-medium">
              Watch later
            </span>
          </Link>
          <Link
            href="#"
            className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-neutral-focus"
          >
            <svg
              className="w-6 h-6 flex-none"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
              />
            </svg>
            <span className="sidebar-text ml-5 text-sm font-medium">
              Show more subscriptions
            </span>
          </Link>
        </div>

        <div className="flex flex-col items-center w-full mt-2 border-t border-neutral-focus">
          <Link
            className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-neutral-focus"
            href="#"
          >
            <svg
              className="w-6 h-6 flex-none"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="sidebar-text ml-5 text-sm font-medium">
              Settings
            </span>
          </Link>
          <Link
            className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-neutral-focus"
            href="#"
          >
            <svg
              className="w-6 h-6 flex-none"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
              />
            </svg>
            <span className="sidebar-text ml-5 text-sm font-medium">
              Report history
            </span>
          </Link>
          <Link
            className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-neutral-focus"
            href="#"
          >
            <svg
              className="w-6 h-6 flex-none"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
              />
            </svg>
            <span className="sidebar-text ml-5 text-sm font-medium">Help</span>
          </Link>
          <Link
            className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-neutral-focus"
            href="#"
          >
            <svg
              className="w-6 h-6 flex-none"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
            <span className="sidebar-text ml-5 text-sm font-medium">
              Send feedback
            </span>
          </Link>
        </div>

        <div className="sidebar-more flex flex-col w-full mt-2 border-t border-neutral-focus text-sm">
          <div className="p-3 flex flex-wrap">
            <Link
              href="https://miniwidget.com/"
              target="_blank"
              className="mr-2 opacity-50 hover:opacity-100"
            >
              About
            </Link>
            <Link href="#" className="mr-2 opacity-50 hover:opacity-100">
              Press
            </Link>
            <Link href="#" className="mr-2 opacity-50 hover:opacity-100">
              Copyright
            </Link>
            <Link href="#" className="mr-2 opacity-50 hover:opacity-100">
              Contact us
            </Link>
            <Link href="#" className="mr-2 opacity-50 hover:opacity-100">
              Creators
            </Link>
            <Link href="#" className="mr-2 opacity-50 hover:opacity-100">
              Advertise
            </Link>
            <Link href="#" className="mr-2 opacity-50 hover:opacity-100">
              Developers
            </Link>
          </div>
          <div className="p-3 flex flex-wrap">
            <Link href="#" className="mr-2 opacity-50 hover:opacity-100">
              Terms
            </Link>
            <Link href="#" className="mr-2 opacity-50 hover:opacity-100">
              Privacy
            </Link>
            <Link href="#" className="mr-2 opacity-50 hover:opacity-100">
              Policy & Safety
            </Link>
            <Link href="#" className="mr-2 opacity-50 hover:opacity-100">
              How YouTube works
            </Link>
            <Link href="#" className="mr-2 opacity-50 hover:opacity-100">
              Test new features
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
