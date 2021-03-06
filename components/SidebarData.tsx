import * as RiIcons from 'react-icons/ri';

export const sidebarData = [
    {
        title: 'About Me',
        path: '/profile',
    },
    {
        title: 'Development',
        path: '#',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: 'React',
                path: '/React',
            },
            {
                title: 'Next',
                path: '/Next',
            },
            {
                title: 'Redux',
                path: '/Redux',
            },
            {
                title: 'Javascript',
                path: '/Javascript'
            },
            {
                title: 'Typescript',
                path: '/Typescript'
            },
            {
                title: 'Apollo',
                path: '/Apollo'
            },
            {
                title: 'CSS',
                path: '/CSS'
            },

            {
                title: 'NodeJS',
                path: '/NodeJS',
            },
            {
                title: 'GraphQL',
                path: '/GraphQL',
            },
            {
                title: 'Database',
                path: '/Database'
            }
        ]
    },

    {
        title: '글쓰기',
        path: '/private',
    }
];