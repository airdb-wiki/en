import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta'

export const navbarEn: NavbarConfig = [
  {
    text: 'Phrase',
    link: '/phrase/',
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
    text: 'Life',
    children: [
          { text: 'Tasks', link: '/life/daily.html', },
    ],
  },
  {
    text: 'Work',
    children: [
          { text: "Tech", link: '/work/tech.html', },
          { text: "Farewell", link: '/work/farewell.html', },
    ],
  },
]
