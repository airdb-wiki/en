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
  '/dict/': [
    {
      text: 'Dict',
      children: [
        '/dict/daily.md',
        '/dict/code.md',
        '/dict/tech.md',
        '/dict/education.md',
        '/dict/experience.md',
        '/dict/personal.md',
        '/dict/career.md',
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
        '/phrase/whatever.md',
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
        '/work/email.md',
        '/work/meeting.md',
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
        '/life/emotion.md',
        '/life/social.md',
        '/life/airport.md',
        '/life/modal.md',
        '/life/hotel.md',
      ],
    },
  ],
}
