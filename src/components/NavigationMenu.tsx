import React from 'react'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu'
import { NavLink } from 'react-router-dom'
export const Navigation = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList className='space-x-4'>
                <NavigationMenuItem>
                    <NavLink to='/' className={({ isActive }) => isActive ? 'bg-indigo-800 text-white px-2 py-2 rounded-md' : 'bg-indigo-600 text-white px-2 py-2  rounded-md'}>
                        <NavigationMenuLink className='text-white'>Inicio</NavigationMenuLink>
                    </NavLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavLink to='/camiones-game' className={({ isActive }) => isActive ? 'bg-indigo-800 text-white px-2 py-2 rounded-md' : 'bg-indigo-600 text-white px-2 py-2  rounded-md'}>
                        <NavigationMenuLink className='text-white'>Camiones Game</NavigationMenuLink>
                    </NavLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavLink to='/reliquias-app' className={({ isActive }) => isActive ? 'bg-indigo-800 text-white px-2 py-2 rounded-md' : 'bg-indigo-600 text-white px-2 py-2  rounded-md'}>
                        <NavigationMenuLink className='text-white'>Reliquias App</NavigationMenuLink>
                    </NavLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavLink to='/about' className={({ isActive }) => isActive ? 'bg-indigo-800 text-white px-2 py-2 rounded-md' : 'bg-indigo-600 text-white px-2 py-2  rounded-md'}>
                        <NavigationMenuLink className='text-white'>Acerca de</NavigationMenuLink>
                    </NavLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavLink to='/contact' className={({ isActive }) => isActive ? 'bg-indigo-800 text-white px-2 py-2 rounded-md' : 'bg-indigo-600 text-white px-2 py-2  rounded-md'}>
                        <NavigationMenuLink className='text-white'>Contacto</NavigationMenuLink>
                    </NavLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavLink to='/politica' className={({ isActive }) => isActive ? 'bg-indigo-800 text-white px-2 py-2 rounded-md' : 'bg-indigo-600 text-white px-2 py-2  rounded-md'}>
                        <NavigationMenuLink className='text-white'>Política de Privacidad</NavigationMenuLink>
                    </NavLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
