"use client";

import React from 'react';
import { Dock, DockIcon } from './ui/dock';
import { AnimatedThemeToggler } from './ui/animated-theme-toggler';
import { cn } from '../lib/utils';
import { FaLinkedinIn, FaGithub, FaDiscord } from 'react-icons/fa';

const socialLinks = [
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/your-profile",
        icon: FaLinkedinIn,
    },
    {
        name: "GitHub",
        url: "https://github.com/your-username",
        icon: FaGithub,
    },
    {
        name: "Discord",
        url: "https://discord.gg/your-server",
        icon: FaDiscord,
    },
];

function BottomDock() {
    return (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
            <Dock direction="middle">
                {socialLinks.map((social) => (
                    <DockIcon key={social.name}>
                        <a
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.name}
                            className={cn(
                                "flex items-center justify-center w-12 h-12 rounded-full bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
                            )}
                        >
                            <social.icon className="w-5 h-5" />
                        </a>
                    </DockIcon>
                ))}

                {/* Separator */}
                <div className="w-[1px] h-8 bg-gray-300 dark:bg-gray-600 mx-2" />

                {/* Theme Toggle */}
                <DockIcon>
                    <AnimatedThemeToggler className="flex items-center justify-center w-12 h-12 rounded-full bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" />
                </DockIcon>
            </Dock>
        </div>
    );
}

export default BottomDock;