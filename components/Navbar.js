/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { ChevronLeftIcon } from "@heroicons/react/outline";

const navigation = [{ name: "ROCK PAPER SCISSORS", href: "#", current: true }];

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-brown">
      {({ open }) => (
        <>
          <div className="max-w-full mx-auto px-0 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center text-secondary justify-center hover:text-white">
                  <ChevronLeftIcon
                    className="block h-8 w-8"
                    aria-hidden="true"
                  />
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex justify-start content-start left-0 lg:pr-8">
                  <ChevronLeftIcon
                    className="hidden sm:block h-8 w-8 mr-0 text-secondary"
                    aria-hidden="true"
                  />
                </div>
                <div className="sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    <img
                      className="block h-8 w-auto"
                      src="assets/logo 1.png"
                      alt="logo"
                    />
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-2xl text-primary hidden sm:block px-2 rounded-md font-medium"
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
