import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from './ui/dropdown-menu'
import { NavLink } from 'react-router-dom'

export const Dropdown = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>
                    <NavLink to='/'>
                        Inicio
                    </NavLink>
                </DropdownMenuLabel>
                <DropdownMenuLabel>
                    <NavLink to='/camiones-game'>
                        Camiones Game
                    </NavLink>
                </DropdownMenuLabel>
                <DropdownMenuLabel>
                    <NavLink to='/reliquias-app'>
                        Reliquias App
                    </NavLink>
                </DropdownMenuLabel>
                <DropdownMenuLabel>
                    <NavLink to='/about'>
                        Acerca de
                    </NavLink>
                </DropdownMenuLabel>
                <DropdownMenuLabel>
                    <NavLink to='/contact'>
                        Contacto
                    </NavLink>
                </DropdownMenuLabel>
                <DropdownMenuLabel>
                    <NavLink to='/politica'>
                        Política de Privacidad
                    </NavLink>
                </DropdownMenuLabel>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
