import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useLocation } from "react-router-dom";
import logoMathieu from "../assets/logoMathieu.png";

const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Projets', href: '/projects' },
    { name: 'Contact', href: '/contact', isCta: true },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Navbar() {
    const location = useLocation();

    return (
        <Disclosure as="nav" className="sticky top-4 z-50 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pointer-events-none">
            <div className="bg-[#111827]/70 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl pointer-events-auto overflow-hidden">
                <div className="mx-auto px-4 sm:px-6">
                    <div className="relative flex h-16 items-center justify-between">

                        {/* Bouton Menu Mobile */}
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-xl p-2 text-slate-400 hover:bg-orange-500/10 hover:text-orange-500 transition-all">
                                <span className="sr-only">Ouvrir le menu</span>
                                <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                            </DisclosureButton>
                        </div>

                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                            {/* Logo avec animation */}
                            <div className="flex shrink-0 items-center">
                                <Link to="/" className="flex items-center">
                                    <img src={logoMathieu} alt="Logo" className="h-10 w-auto" />
                                </Link>
                            </div>

                            {/* Liens Desktop */}
                            <div className="hidden sm:block">
                                <div className="flex items-center space-x-1 h-16">
                                    {navigation.map((item) => {
                                        const isCurrent = location.pathname === item.href;

                                        if (item.isCta) {
                                            return (
                                                <Link
                                                    key={item.name}
                                                    to={item.href}
                                                    className={classNames(
                                                        'ml-4 bg-orange-500 text-white px-5 py-2 rounded-xl text-sm font-bold transition-all hover:bg-orange-600 hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/20'
                                                    )}
                                                >
                                                    {item.name}
                                                </Link>
                                            );
                                        }

                                        return (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                className={classNames(
                                                    isCurrent
                                                        ? 'text-white'
                                                        : 'text-slate-400 hover:text-white',
                                                    'relative px-4 py-2 text-sm font-bold transition-all group'
                                                )}
                                            >
                                                {item.name}
                                                {/* Soulignement animé */}
                                                <span className={classNames(
                                                    'absolute bottom-1 left-4 right-4 h-0.5 bg-orange-500 transition-all duration-300 rounded-full',
                                                    isCurrent ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-50 group-hover:scale-x-100'
                                                )}></span>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Menu Mobile */}
                <DisclosurePanel className="sm:hidden border-t border-white/5">
                    <div className="space-y-1 px-4 pt-2 pb-6">
                        {navigation.map((item) => {
                            const isCurrent = location.pathname === item.href;
                            return (
                                <DisclosureButton
                                    key={item.name}
                                    as={Link}
                                    to={item.href}
                                    className={classNames(
                                        isCurrent
                                            ? 'bg-orange-500/10 text-orange-500'
                                            : 'text-slate-400 hover:bg-white/5 hover:text-white',
                                        'block rounded-xl px-3 py-3 text-base font-bold transition-all'
                                    )}
                                >
                                    {item.name}
                                </DisclosureButton>
                            );
                        })}
                    </div>
                </DisclosurePanel>
            </div>
        </Disclosure>
    )
}

export default Navbar;