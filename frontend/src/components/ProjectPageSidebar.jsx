/* eslint-disable no-unused-vars */
import { Link, NavLink } from "react-router-dom";
import userlogo from "/images/user.jpg";
import logo from "/images/logo.png";
import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
  ShoppingCartIcon,
  CalculatorIcon,
  ComputerDesktopIcon,
  ClipboardDocumentIcon,
  CurrencyDollarIcon,
  RectangleGroupIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import Auth from "../utils/auth";

import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

const navigation = [
  {
    name: "Overview",
    href: "#",
    soon: "",
    icon: ComputerDesktopIcon,
    current: true,
  },
  { name: "Projects", href: "/projects", icon: HomeIcon, current: false },
  {
    name: "Services",
    href: "/Services",
    soon: "",
    icon: RectangleGroupIcon,
    current: false,
  },
  {
    name: "Estimate",
    href: "#",
    soon: "Coming soon",
    icon: CalculatorIcon,
    current: false,
  },
  {
    name: "Proposal",
    href: "#",
    soon: "Coming soon",
    icon: ClipboardDocumentIcon,
    current: false,
  },
  {
    name: "Schedule",
    href: "#",
    soon: "Coming soon",
    icon: CalendarIcon,
    current: false,
  },
  {
    name: "Purchase Orders",
    href: "#",
    soon: "Coming soon",
    icon: ShoppingCartIcon,
    current: false,
  },
  {
    name: "Budget",
    href: "#",
    soon: "Coming soon",
    icon: CurrencyDollarIcon,
    current: false,
  },

  {
    name: "Files",
    href: "#",
    soon: "Coming soon",
    icon: DocumentDuplicateIcon,
    current: false,
  },
  {
    name: "Reports",
    href: "#",
    soon: "Coming soon",
    icon: ChartPieIcon,
    current: false,
  },
  {
    name: "Team",
    href: "#",
    soon: "Coming soon",
    icon: UsersIcon,
    current: false,
  },
];

const userNavigation = [{ name: "Sign out" }];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProjectPageSidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { loading, data } = useQuery(QUERY_USER);
  const userdata = data?.user || {};

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <div>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white  pb-4">
                  <div className=" flex h-16 shrink-0 items-center">
                    <img
                      className="h-8 w-auto pr-2 "
                      src={logo}
                      alt="simplebuild logo"
                    />
                    <h1 className=" font-serif font-extrabold text-xl drop-shadow-xl text-blue-800 tracking-tight">
                      SimpleBuild
                    </h1>
                  </div>
                  <nav className="flex flex-1 flex-col px-6">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                          {navigation.map((item) => (
                            <li key={item.name}>
                              <NavLink
                                to={item.href}
                                className={classNames(
                                  item.current
                                    ? "bg-gray-50 text-blue-600"
                                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50",
                                  "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                )}
                              >
                                <item.icon
                                  className={classNames(
                                    item.current
                                      ? "text-blue-600"
                                      : "text-gray-400 group-hover:text-blue-600",
                                    "h-6 w-6 shrink-0"
                                  )}
                                  aria-hidden="true"
                                />
                                {item.name}
                                <span className=" text-sm  italic text-gray-300">
                          {item.soon}
                        </span>
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white pb-4">
          <div className="flex h-16 shrink-0 items-center">
            <img
              className="h-8 w-auto pr-2"
              src={logo}
              alt="simplebuild logo"
            />
            <Link to="/projects">
              <h1 className=" font-serif font-extrabold text-xl drop-shadow-xl text-blue-800 tracking-tight">
                SimpleBuild
              </h1>
            </Link>
          </div>
          <nav className="flex flex-1 flex-col px-6">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <NavLink
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-50 text-blue-600"
                            : "text-gray-700 hover:text-blue-600 hover:bg-gray-50",
                          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current === "Overview"
                              ? "text-blue-600"
                              : "text-gray-400 group-hover:text-blue-600",
                            "h-6 w-6 shrink-0"
                          )}
                          aria-hidden="true"
                        />
                        {item.name}{" "}
                        <span className=" text-sm  italic text-gray-300">
                          {item.soon}
                        </span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="lg:pl-72">
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>

          {/* Separator */}
          <div className="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true" />

          <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
            <div className="relative flex flex-1" action="#" method="GET"></div>
            <div className="flex items-center gap-x-4 lg:gap-x-6">
              {/* Profile dropdown */}
              <Menu as="div" className="relative">
                <Menu.Button className="-m-1.5 flex items-center p-1.5">
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full bg-gray-50"
                    src={userlogo}
                    alt="usre logo"
                  />
                  <span className="hidden lg:flex lg:items-center">
                    <span
                      className="ml-4 text-sm font-semibold leading-6 text-gray-900"
                      aria-hidden="true"
                    >
                      {userdata.username}
                    </span>
                    <ChevronDownIcon
                      className="ml-2 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                    {userNavigation.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <button
                            onClick={logout}
                            className={classNames(
                              active ? "bg-gray-50" : "",
                              "block px-3 py-1 text-sm leading-6 text-gray-900"
                            )}
                          >
                            {item.name}
                          </button>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
