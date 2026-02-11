import React from 'react';

export interface ActivityCardProps {
    title: string;
    snippet: string;
    link: string;
    formattedDate?: string;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({ title, snippet, link, formattedDate }) => {
    return (
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group cursor-pointer" onClick={() => window.open(link, '_blank')}>
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors line-clamp-2">
                    {title}
                </h3>
                {formattedDate && (
                    <span className="text-xs font-mono bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded-md whitespace-nowrap ml-2">
                        {formattedDate}
                    </span>
                )}
            </div>
            <p className="text-white/60 text-sm line-clamp-3 mb-4">
                {snippet}
            </p>
            <div className="flex items-center text-xs text-indigo-400 font-medium">
                <span>瞭解更多</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </div>
        </div>
    );
};
