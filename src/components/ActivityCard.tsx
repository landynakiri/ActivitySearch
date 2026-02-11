import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ExternalLink, MapPin } from 'lucide-react';
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            className={cn(
                "group relative flex flex-col justify-between overflow-hidden rounded-xl border bg-card p-6 text-card-foreground shadow-sm transition-all hover:shadow-md hover:border-primary/20",
                className
            )}
            onClick={() => window.open(link, '_blank')}
        >
            <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                    <h3 className="line-clamp-2 text-xl font-bold tracking-tight transition-colors group-hover:text-primary">
                        {title}
                    </h3>
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                        <ExternalLink className="h-4 w-4" />
                    </div>
                </div>

                <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {snippet}
                </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-medium text-muted-foreground">
                {formattedDate && (
                    <div className="flex items-center gap-1.5 rounded-full bg-secondary/50 px-2.5 py-1">
                        <Calendar className="h-3 w-3" />
                        <span>{formattedDate}</span>
                    </div>
                )}
                <div className="flex items-center gap-1.5 rounded-full bg-secondary/50 px-2.5 py-1">
                    <MapPin className="h-3 w-3" />
                    <span>Taipei, Taiwan</span>
                </div>
            </div>

            {/* Decorative gradient overlay on hover */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        </motion.div>
    );
};
