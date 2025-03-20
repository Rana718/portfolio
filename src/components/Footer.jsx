import React from 'react'
import { Heart } from 'lucide-react'

function Footer() {
    return (
        <footer className="mt-20 py-8 border-t border-gray-200 dark:border-gray-700">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div>
                        <p className="text-center md:text-left text-theme-secondary">
                            &copy; {new Date().getFullYear()} Rana Dolui. All rights reserved.
                        </p>
                    </div>
                    
                </div>
            </div>
        </footer>
    )
}

export default Footer