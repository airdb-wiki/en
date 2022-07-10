import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarEn: SidebarConfig = {
  '/guide/': [
    {
      text: 'Guide',
      children: [
        '/README.md',
      ],
    },
  ],
  '/phrase/': [
    {
      text: 'phrase',
      children: [
        '/phrase/README.md',
        '/phrase/body.md',
        '/phrase/game.md',
        '/phrase/god-translation.md',
        '/phrase/i-have-no-idea.md',
        '/phrase/never-give-up.md',
        '/phrase/noun-human.md',
        '/phrase/politeness.md',
        '/phrase/work.md',
      ],
    },
  ],
  '/work/': [
    {
      text: 'work',
      children: [
        '/work/tech.md',
        '/work/farewell.md',
        '/work/presentation.md',
        '/work/ray-dalio.md',
      ],
    },
  ],
  '/life/': [
    {
      text: 'life',
      collapsible: true,
      children: [
        '/life/daily.md',
        '/life/culture.md',
      ],
    },
  ],
}
