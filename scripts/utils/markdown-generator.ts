import type { ProcessedPrompt } from './data-loader.js';
import { getLocalized } from './data-loader.js';
import { t } from './i18n.js';

const MAX_PROMPTS_TO_DISPLAY = 100;
const GALLERY_BASE_URL = 'https://youware.com'; // TODO: update when frontend is ready
const REPO_OWNER = 'youware-ai';
const REPO_NAME = 'awesome-seedance-2-prompts';

export interface LanguageConfig {
  code: string;
  name: string;
  readmeFileName: string;
}

export const SUPPORTED_LANGUAGES: LanguageConfig[] = [
  { code: 'en', name: 'English', readmeFileName: 'README.md' },
  { code: 'zh-CN', name: '简体中文', readmeFileName: 'README_zh-CN.md' },
  { code: 'ja', name: '日本語', readmeFileName: 'README_ja.md' },
  { code: 'pt-BR', name: 'Português (Brasil)', readmeFileName: 'README_pt-BR.md' },
  { code: 'es', name: 'Español', readmeFileName: 'README_es.md' },
];

const LANG_BADGES: Record<string, string> = {
  en: '![English](https://img.shields.io/badge/lang-English-blue)',
  'zh-CN': '![中文](https://img.shields.io/badge/lang-中文-red)',
  ja: '![日本語](https://img.shields.io/badge/lang-日本語-green)',
  es: '![Español](https://img.shields.io/badge/lang-Español-yellow)',
  'pt-BR': '![Português](https://img.shields.io/badge/lang-Português-brightgreen)',
};

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

function formatDate(iso?: string): string {
  if (!iso) return 'N/A';
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric',
  });
}

function getLocalePrefix(locale: string): string {
  if (locale === 'en') return '';
  return `/${locale}`;
}

function generateLanguageNavigation(currentLocale: string): string {
  const links = SUPPORTED_LANGUAGES.map(lang => {
    const isCurrent = lang.code === currentLocale;
    const label = isCurrent ? `**${lang.name}**` : lang.name;
    return isCurrent ? label : `[${label}](${lang.readmeFileName})`;
  });
  return links.join(' | ');
}

function generatePromptBlock(p: ProcessedPrompt, locale: string, isFeatured: boolean): string {
  const lines: string[] = [];

  const localTitle = getLocalized(p, 'title', locale) || p.title;
  const localContent = getLocalized(p, 'content', locale) || p.content;
  const localDesc = getLocalized(p, 'description', locale);
  const localTips = getLocalized(p, 'tips', locale);

  // Title
  lines.push(`### ${localTitle}`);
  lines.push('');

  // Badges
  const badges: string[] = [];
  if (isFeatured) badges.push(`\`${t('featured', locale)}\``);
  const langBadge = LANG_BADGES[p.language];
  if (langBadge) badges.push(langBadge);
  if (badges.length) {
    lines.push(badges.join(' '));
    lines.push('');
  }

  // Description
  if (localDesc) {
    const cleanDesc = localDesc
      .replace(/\n+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 200);
    lines.push(`> ${cleanDesc}`);
    lines.push('');
  }

  // Prompt text
  lines.push(`#### 📝 ${t('prompt', locale)}`);
  lines.push('');
  lines.push('```');
  lines.push(localContent);
  lines.push('```');
  lines.push('');

  // Tips (YouWare exclusive)
  if (localTips) {
    lines.push(`#### 💡 ${t('tips', locale)}`);
    lines.push('');
    lines.push(localTips);
    lines.push('');
  }

  // Video thumbnail / preview
  if (p.thumbnail) {
    if (p.videoUrl) {
      lines.push(`[![${t('videoPreview', locale)}](${p.thumbnail})](${p.videoUrl})`);
    } else {
      lines.push(`![${t('videoPreview', locale)}](${p.thumbnail})`);
    }
    lines.push('');
    if (p.videoUrl) {
      lines.push(`📥 *Click image to watch video* | **[🎬 Watch Video →](${p.videoUrl})**`);
      lines.push('');
    }
  }

  // Reference images
  if (p.referenceImages && p.referenceImages.length > 0) {
    lines.push(`**${t('referenceImage', locale)}:**`);
    for (const img of p.referenceImages) {
      lines.push(`![${t('referenceImage', locale)}](${img})`);
    }
    lines.push('');
  }

  // Metadata
  const meta: string[] = [];
  if (p.author) {
    const authorStr = p.author.link
      ? `**${t('author', locale)}:** [${p.author.name}](${p.author.link})`
      : `**${t('author', locale)}:** ${p.author.name}`;
    meta.push(authorStr);
  }
  if (p.sourceLink) {
    meta.push(`**${t('source', locale)}:** [Link](${p.sourceLink})`);
  }
  if (p.sourcePublishedAt) {
    meta.push(`**${t('published', locale)}:** ${formatDate(p.sourcePublishedAt)}`);
  }
  if (meta.length) {
    lines.push(meta.join(' | '));
    lines.push('');
  }

  // Tags
  if (p.tags && p.tags.length > 0) {
    lines.push(p.tags.map(tag => `\`${tag}\``).join(' '));
    lines.push('');
  }

  lines.push('---');
  lines.push('');

  return lines.join('\n');
}

export function generateReadme(
  prompts: ProcessedPrompt[],
  tips: ProcessedPrompt[],
  locale: string = 'en',
): string {
  const lines: string[] = [];
  const galleryUrl = `${GALLERY_BASE_URL}${getLocalePrefix(locale)}/seedance-2-prompts`;

  const featured = prompts.filter(p => p.featured);
  const regular = prompts.filter(p => !p.featured);
  const displayPrompts = regular.slice(0, MAX_PROMPTS_TO_DISPLAY);
  const totalCount = prompts.length;
  const today = new Date().toISOString().split('T')[0];

  // Language navigation
  lines.push(generateLanguageNavigation(locale));
  lines.push('');
  lines.push('---');
  lines.push('');

  // Header
  lines.push(`# 🎬 ${t('title', locale)}`);
  lines.push('');

  const badgeLabels = [
    'Awesome',
    `GitHub stars`,
    `License: CC BY 4.0`,
    `PRs Welcome`,
  ];
  lines.push(`[![Awesome](https://awesome.re/badge.svg)](https://awesome.re) [![GitHub stars](https://img.shields.io/github/stars/${REPO_OWNER}/${REPO_NAME}?style=social)](https://github.com/${REPO_OWNER}/${REPO_NAME}) ![License](https://img.shields.io/badge/license-CC%20BY%204.0-green) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/${REPO_OWNER}/${REPO_NAME}/pulls)`);
  lines.push('');
  lines.push(`${t('subtitle', locale)}`);
  lines.push('');
  lines.push(`> ⚠️ **${t('copyrightNotice', locale)}**`);
  lines.push('');

  // TOC
  lines.push('---');
  lines.push('');
  lines.push(`## 📖 ${t('tableOfContents', locale)}`);
  lines.push('');
  lines.push(`* [🌐 ${t('viewInGallery', locale)}](#-${slugify(t('viewInGallery', locale))})`);
  lines.push(`* [🤔 ${t('whatIs', locale)}](#-${slugify(t('whatIs', locale))})`);
  lines.push(`* [📊 ${t('statistics', locale).replace('📊 ', '')}](#-${slugify(t('statistics', locale).replace('📊 ', ''))})`);
  if (featured.length > 0) {
    lines.push(`* [${t('featuredSection', locale)}](#-featured-prompts)`);
  }
  lines.push(`* [${t('allPrompts', locale)}](#-all-prompts)`);
  if (tips.length > 0) {
    lines.push(`* [${t('tipsSection', locale)}](#-usage-tips)`);
  }
  lines.push(`* [${t('contributing', locale)}](#-contributing)`);
  lines.push(`* [${t('license', locale)}](#-license)`);
  lines.push(`* [${t('acknowledgements', locale)}](#-acknowledgements)`);
  lines.push(`* [${t('starHistory', locale)}](#-star-history)`);
  lines.push('');

  // Gallery CTA
  lines.push('---');
  lines.push('');
  lines.push(`## 🌐 ${t('viewInGallery', locale)}`);
  lines.push('');
  lines.push(`**👉 [${t('browseGallery', locale)}](${galleryUrl})**`);
  lines.push('');
  lines.push(`| Feature | GitHub README | Gallery |`);
  lines.push(`|---------|-------------|---------|`);
  lines.push(`| 🎬 Video Playback | ❌ Static thumbnails | ✅ Full video playback |`);
  lines.push(`| 🔍 Search | Ctrl+F only | Multi-field fuzzy search |`);
  lines.push(`| 📱 Mobile | Basic | Fully responsive |`);
  lines.push(`| 🌍 Languages | ${SUPPORTED_LANGUAGES.length} | ${SUPPORTED_LANGUAGES.length}+ |`);
  lines.push('');

  // What is Seedance 2.0
  lines.push('---');
  lines.push('');
  lines.push(`## 🤔 ${t('whatIs', locale)}`);
  lines.push('');
  lines.push(t('whatIsContent', locale));
  lines.push('');

  // Statistics
  lines.push('---');
  lines.push('');
  lines.push(`## 📊 ${t('statistics', locale).replace('📊 ', '')}`);
  lines.push('');
  lines.push(`| Metric | Count |`);
  lines.push(`|--------|-------|`);
  lines.push(`| 📝 ${t('totalPrompts', locale)} | **${totalCount}** |`);
  lines.push(`| ⭐ ${t('featuredPrompts', locale)} | **${featured.length}** |`);
  lines.push(`| 💡 Tips & Tutorials | **${tips.length}** |`);
  lines.push(`| 🔄 ${t('lastUpdated', locale)} | **${today}** |`);
  lines.push('');

  // Featured prompts
  if (featured.length > 0) {
    lines.push('---');
    lines.push('');
    lines.push(`## ${t('featuredSection', locale)}`);
    lines.push('');
    for (const p of featured) {
      lines.push(generatePromptBlock(p, locale, true));
    }
  }

  // All prompts
  lines.push('---');
  lines.push('');
  lines.push(`## ${t('allPrompts', locale)}`);
  lines.push('');
  lines.push(`> 📝 Sorted by publish date (newest first)`);
  lines.push('');
  for (const p of displayPrompts) {
    lines.push(generatePromptBlock(p, locale, false));
  }

  // More prompts notice
  if (regular.length > MAX_PROMPTS_TO_DISPLAY) {
    lines.push(`## 📚 ${t('morePrompts', locale)}`);
    lines.push('');
    lines.push(`### 🎯 ${regular.length - MAX_PROMPTS_TO_DISPLAY} more prompts not shown here`);
    lines.push('');
    lines.push(`**👉 [${t('browseGallery', locale)}](${galleryUrl})**`);
    lines.push('');
  }

  // Tips section
  if (tips.length > 0) {
    lines.push('---');
    lines.push('');
    lines.push(`## ${t('tipsSection', locale)}`);
    lines.push('');
    lines.push(`> Community tutorials and tips for getting the most out of Seedance 2.0`);
    lines.push('');
    const displayTips = tips.slice(0, 30);
    for (const tip of displayTips) {
      lines.push(generatePromptBlock(tip, locale, false));
    }
    if (tips.length > 30) {
      lines.push(`*... and ${tips.length - 30} more tips. [View all in Gallery](${galleryUrl})*`);
      lines.push('');
    }
  }

  // Contributing
  lines.push('---');
  lines.push('');
  lines.push(`## ${t('contributing', locale)}`);
  lines.push('');
  lines.push(t('contributingContent', locale));
  lines.push('');

  // License
  lines.push(`## ${t('license', locale)}`);
  lines.push('');
  lines.push(t('licenseContent', locale));
  lines.push('');

  // Acknowledgements
  lines.push(`## ${t('acknowledgements', locale)}`);
  lines.push('');
  lines.push(t('acknowledgementsContent', locale));
  lines.push('');

  // Star History
  lines.push(`## ${t('starHistory', locale)}`);
  lines.push('');
  lines.push(`[![Star History Chart](https://api.star-history.com/svg?repos=${REPO_OWNER}/${REPO_NAME}&type=Date)](https://star-history.com/#${REPO_OWNER}/${REPO_NAME}&Date)`);
  lines.push('');

  // Footer
  lines.push('---');
  lines.push('');
  lines.push(`**🌐 [${t('viewInGallery', locale)}](${galleryUrl})** • **📝 Submit a Prompt** • **⭐ Star this repo**`);
  lines.push('');
  lines.push(`🤖 This README is automatically generated. Last updated: ${new Date().toISOString()}`);
  lines.push('');

  return lines.join('\n');
}
