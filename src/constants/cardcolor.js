const getRandomBackground = (projectId) => {
    const backgrounds = [
        // Blue themes
        'bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900',
        'bg-gradient-to-br from-cyan-900 via-blue-800 to-slate-900',
        'bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900',

        // Purple themes
        'bg-gradient-to-br from-purple-900 via-violet-800 to-indigo-900',
        'bg-gradient-to-br from-violet-900 via-purple-800 to-fuchsia-900',
        'bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-900',

        // Green themes
        'bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900',
        'bg-gradient-to-br from-teal-900 via-emerald-800 to-green-900',
        'bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900',

        // Orange/Red themes
        'bg-gradient-to-br from-orange-900 via-red-800 to-pink-900',
        'bg-gradient-to-br from-red-900 via-rose-800 to-pink-900',
        'bg-gradient-to-br from-amber-900 via-orange-800 to-red-900',

        // Dark themes
        'bg-gradient-to-br from-gray-900 via-slate-800 to-zinc-900',
        'bg-gradient-to-br from-slate-900 via-gray-800 to-neutral-900',
        'bg-gradient-to-br from-zinc-900 via-slate-800 to-gray-900',

        // Mixed themes
        'bg-gradient-to-br from-rose-900 via-pink-800 to-purple-900',
        'bg-gradient-to-br from-yellow-900 via-amber-800 to-orange-900',
        'bg-gradient-to-br from-lime-900 via-green-800 to-emerald-900',
        'bg-gradient-to-br from-sky-900 via-blue-800 to-indigo-900',
        'bg-gradient-to-br from-fuchsia-900 via-purple-800 to-violet-900',
    ];

    const index = projectId % backgrounds.length;
    return backgrounds[index];
};


export {
    getRandomBackground
}