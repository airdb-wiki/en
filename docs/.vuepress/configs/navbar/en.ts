import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta'

export const navbarEn: NavbarConfig = [
  {
    text: 'Guide',
    link: '/',
  },
  {
    text: 'Learning',
    children: [
          { text: 'liulishuo', link: '/reference/cli.html', },
          { text: 'phrase', link: '/phrase/', },
          { text: 'dialogue', link: '/dialogue/', },
          { text: 'speaking', link: '/speaking/', },
    ],
  },
  {
    text: 'Presentation',
    children: [
          { text: 'Tasks', link: '/reference/cli.html', },
          { text: 'Project', link: '/reference/cli.html', },
          { text: 'Investigation', link: '/reference/cli.html', },
    ],
  },
  {
    text: 'Work',
    children: [
          { text: 'Work', link: '/work/presentation.md', },
          { text: 'Tasks', link: '/reference/cli.html', },
          { text: 'Project', link: '/reference/cli.html', },
          { text: 'Investigation', link: '/reference/cli.html', },
    ],
  },
]
