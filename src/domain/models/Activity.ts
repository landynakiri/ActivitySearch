export interface ActivityProps {
    id: string;
    title: string;
    date: Date;
    location: string;
    type: string;
    sourceUrl: string;
    description?: string;
}

export class Activity {
    readonly id: string;
    readonly title: string;
    readonly date: Date;
    readonly location: string;
    readonly type: string;
    readonly sourceUrl: string;
    readonly description?: string;

    constructor(props: ActivityProps) {
        this.validate(props);
        this.id = props.id;
        this.title = props.title;
        this.date = props.date;
        this.location = props.location;
        this.type = props.type;
        this.sourceUrl = props.sourceUrl;
        this.description = props.description;
    }

    private validate(props: ActivityProps) {
        if (!props.title.trim()) throw new Error('Activity title cannot be empty');
        if (!props.location.trim()) throw new Error('Activity location cannot be empty');
        if (!props.sourceUrl.trim()) throw new Error('Activity source URL cannot be empty');
    }

    isUpcoming(): boolean {
        return this.date > new Date();
    }
}
