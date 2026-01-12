import { Ban2Outlined, Bell1Outlined, Bookmark1Outlined, CheckCircle1Outlined, Flag1Outlined, MinusCircleOutlined, StarFatOutlined, User4Outlined, XmarkCircleOutlined } from "@lineiconshq/free-icons";

export const moreActionList = [
    {
        id: '1',
        title: 'Interested',
        description: 'More of your posts will be like this',
        icon: CheckCircle1Outlined
    },
    {
        id: '2',
        title: 'Not interested',
        description: 'Less of your posts will be like this.',
        icon: MinusCircleOutlined
    },
    {
        id: '3',
        title: 'Save post',
        description: '',
        icon: Bookmark1Outlined
    },
    {
        id: '4',
        title: 'Hide post',
        description: 'See fewer posts like this.',
        icon: XmarkCircleOutlined
    },
    {
        id: '5',
        title: 'Report post',
        description: `We won't let this account know who repoted this.`,
        icon: Flag1Outlined
    },
    {
        id: '6',
        title: 'Block user',
        description: `You won't be able to see or contact each other.`,
        icon: Ban2Outlined
    },
    {
        id: '7',
        title: 'Get notified about this post',
        description: '',
        icon: Bell1Outlined
    },
    {
        id: '8',
        title: 'Add user to favorites',
        description: 'Prioritize their in News Feed',
        icon: StarFatOutlined
    },
    {
        id: '9',
        title: 'Unfollow user',
        description: `Stop seeing posts from this user.`,
        icon: User4Outlined
    },
];