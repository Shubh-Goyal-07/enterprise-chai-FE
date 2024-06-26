'use client';
import Image from "next/image";
import { usePathname } from 'next/navigation';


export default function Aside() {
    //get the current route
    const currentRoute = usePathname()
    const routes = [
        {route: '/home/dashboard', icon: 'Dashboard.svg', name: 'Dashboard'},
        {route: '/home/materials', icon: 'Materials.svg', name: 'Materials'},
        {route: '/home/csm', icon: 'Launch.svg', name: 'CSM Companion'}
    ]
    return <aside className="w-48 bg-customGradient p-1">
        <a className="flex mt-4 p-x-1.5 justify-center" href={'/home/dashboard'}>
            <span className={'text-primarySmall text-base font-medium'}>Enterprise</span>
            <Image src="/cup_logo.svg" alt="Logo" width={26} height={16} className={'mx-1'}/>
            <span className={'text-primarySmall  text-base font-bold'}>CH</span>
            <span className={'text-greenLogo text-base font-bold'}>AI</span>
        </a>

        <div className="flex flex-col mt-16">
            {routes.map((route, index) => (
                <a
                    className={`btn-dashboard ${
                        currentRoute === route.route ? ' text-primarySmall' : ''
                    }`}
                    href={route.route}
                    key={index}>
                    <Image src={`/${route.icon}`} alt={route.name} width={18} height={18}/>
                    {route.name}
                </a>
            ))}
        </div>

    </aside>
}
