import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'theotchlx | Articles',
    description: 'Quality articles made by me, for you :)',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./blog/**/*.md')),
    customData: `<language>en-us</language>`,
    author: 'Théo Tchilinguirian',
    link: `${context.site}/rss.xml`,
  });
}
