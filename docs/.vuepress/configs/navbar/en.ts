import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta'

export const navbarEn: NavbarConfig = [
  {
    text: 'Phrase',
    link: '/phrase/',
  },
  {
    text: 'Dict',
    link: '/dict/code.MD',
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
    link: "/life/"
  },
  {
    text: 'Work',
    link: "/work/",
  },
]
