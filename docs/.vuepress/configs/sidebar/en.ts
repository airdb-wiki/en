import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarEn: SidebarConfig = {
  '/guide/': [
    {
      text: 'Guide',
      children: [
        '/README.md',
        '/guide/getting-started.md',
        '/guide/configuration.md',
        '/guide/page.md',
        '/guide/markdown.md',
        '/guide/assets.md',
        '/guide/i18n.md',
        '/guide/deployment.md',
        '/guide/theme.md',
        '/guide/plugin.md',
        '/guide/bundler.md',
        '/guide/migration.md',
      ],
    },
  ],
  '/work/': [
    {
      text: 'work',
      children: [
        '/work/tech.md',
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
