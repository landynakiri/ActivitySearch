import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

export interface ActivityCardProps {
    title: string;
    snippet: string;
    link: string;
    formattedDate?: string;
    className?: string;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({ title, snippet, link, formattedDate, className }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={cn(
                "group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] p-8 text-card-foreground transition-all hover:bg-white/[0.05] hover:border-white/10 shadow-lg",
                className
            )}
            onClick={() => window.open(link, '_blank')}
        >
            <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                    <h3 className="line-clamp-2 text-2xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">
                        {title}
                    </h3>
                    {formattedDate && (
                        <div className="flex shrink-0 items-center justify-center rounded-lg bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/70">
                            {formattedDate}
                        </div>
                    )}
                </div>

                <p className="line-clamp-3 text-base leading-relaxed text-white/40">
                    {snippet}
                </p>
            </div>

            {/* Visual bottom spacing as per mockup */}
            <div className="mt-4" />
        </motion.div>
    );
};
