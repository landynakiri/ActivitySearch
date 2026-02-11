import React from 'react';
import {
    Card,
    CardHeader,
    CardFooter,
    Button,
    Caption1,
    Body1Strong,
    makeStyles,
    shorthands,
    tokens
} from '@fluentui/react-components';
import { CalendarRegular, OpenRegular, LocationRegular } from '@fluentui/react-icons';

const useStyles = makeStyles({
    card: {
        ...shorthands.margin('auto'),
        width: '100%',
        maxWidth: '100%',
        backgroundColor: tokens.colorNeutralBackground3,
        ':hover': {
            backgroundColor: tokens.colorNeutralBackground3Hover,
        },
    },
    caption: {
        color: tokens.colorNeutralForeground3,
    },
    footer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '12px',
    },
    tags: {
        display: 'flex',
        gap: '8px',
    }
});

export interface ActivityCardProps {
    title: string;
    snippet: string;
    link: string;
    formattedDate?: string;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({ title, snippet, link, formattedDate }) => {
    const styles = useStyles();

    return (
        <Card className={styles.card} onClick={() => window.open(link, '_blank')}>
            <CardHeader
                header={
                    <Body1Strong>
                        {title}
                    </Body1Strong>
                }
                description={
                    <Caption1 className={styles.caption}>
                        {snippet}
                    </Caption1>
                }
            />

            <CardFooter className={styles.footer}>
                <div className={styles.tags}>
                    {formattedDate && (
                        <Button
                            size="small"
                            appearance="subtle"
                            icon={<CalendarRegular />}
                        >
                            {formattedDate}
                        </Button>
                    )}
                    <Button
                        size="small"
                        appearance="subtle"
                        icon={<LocationRegular />}
                    >
                        Taipei
                    </Button>
                </div>
                <Button
                    appearance="primary"
                    icon={<OpenRegular />}
                    iconPosition="after"
                >
                    查看詳情
                </Button>
            </CardFooter>
        </Card>
    );
};
