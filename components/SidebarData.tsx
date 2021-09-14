import * as RiIcons from 'react-icons/ri';

export const sidebarData = [
    {
        title: 'About Me',
        path: '/profile',
    },
    {
        title: 'Frontend',
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
            }
        ]
    },


    {
        title: 'Backend',
        path: '#',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: 'NodeJS',
                path: '/NodeJS',
            },
            {
                title: 'GraphQL',
                path: '/GraphQL',
            }
        ]
    },
    {
        title: '글쓰기',
        path: '/private',
    }
];