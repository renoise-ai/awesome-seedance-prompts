export interface Translation {
  title: string;
  subtitle: string;
  galleryDescription: string;
  viewInGallery: string;
  browseGallery: string;
  whatIs: string;
  whatIsContent: string;
  statistics: string;
  totalPrompts: string;
  featuredPrompts: string;
  lastUpdated: string;
  featuredSection: string;
  allPrompts: string;
  morePrompts: string;
  morePromptsContent: string;
  prompt: string;
  tips: string;
  tipsSection: string;
  author: string;
  source: string;
  published: string;
  featured: string;
  tryItNow: string;
  contributing: string;
  contributingContent: string;
  license: string;
  licenseContent: string;
  acknowledgements: string;
  acknowledgementsContent: string;
  starHistory: string;
  madeWith: string;
  copyright: string;
  videoPreview: string;
  referenceImage: string;
  tableOfContents: string;
  copyrightNotice: string;
}

const en: Translation = {
  title: 'Awesome Seedance 2.0 Video Prompts',
  subtitle: 'A curated collection of high-quality video generation prompts for ByteDance\'s Seedance 2.0',
  galleryDescription: 'Browse all prompts with video previews, search, and one-click generation',
  viewInGallery: 'View in Web Gallery',
  browseGallery: 'Browse all Seedance 2.0 prompts on YouWare',
  whatIs: 'What is Seedance 2.0?',
  whatIsContent: `**Seedance 2.0** is a video generation model developed by **ByteDance**. It is the industry's first model supporting **simultaneous quad-modal input** — image, video, audio, and text.

**Key Features:**

* 🎥 **Text-to-Video** — Generate videos from text descriptions
* 🖼️ **Image-to-Video** — Animate static images into dynamic videos
* 📹 **Video-to-Video** — Transform and extend existing videos
* 🎵 **Audio-Driven** — Generate videos driven by audio input
* 📐 **Up to 1080p resolution**, 4–15 seconds duration
* 🔊 **Auto dubbing & scoring** — Automatic voiceover and background music`,
  statistics: '📊 Statistics',
  totalPrompts: 'Total Prompts',
  featuredPrompts: 'Featured',
  lastUpdated: 'Last Updated',
  featuredSection: '⭐ Featured Prompts',
  allPrompts: '🎬 All Prompts',
  morePrompts: '📚 More Prompts',
  morePromptsContent: 'This README shows the latest prompts. Visit our gallery for the full collection with video previews and search.',
  prompt: 'Prompt',
  tips: 'Tips',
  tipsSection: '💡 Usage Tips',
  author: 'Author',
  source: 'Source',
  published: 'Published',
  featured: '⭐ Featured',
  tryItNow: '👉 Try it now →',
  contributing: '🤝 Contributing',
  contributingContent: 'We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details on how to submit prompts.',
  license: '📄 License',
  licenseContent: 'This collection is licensed under [CC BY 4.0](LICENSE). You are free to share and adapt the prompts with attribution.',
  acknowledgements: '🙏 Acknowledgements',
  acknowledgementsContent: 'Thanks to all the creators who shared their prompts with the community.',
  starHistory: '⭐ Star History',
  madeWith: 'Made with ❤️ by',
  copyright: '© 2026 YouWare. All rights reserved.',
  videoPreview: 'Video Preview',
  referenceImage: 'Reference Image',
  tableOfContents: 'Table of Contents',
  copyrightNotice: 'Copyright Notice: All prompts are collected from the community for educational purposes. If you believe any content infringes on your rights, please open an issue and we will remove it promptly.',
};

const zhCN: Translation = {
  ...en,
  title: 'Awesome Seedance 2.0 视频提示词',
  subtitle: '精选 ByteDance Seedance 2.0 高质量视频生成提示词合集',
  galleryDescription: '浏览所有提示词，支持视频预览、搜索和一键生成',
  viewInGallery: '🎬 在画廊中查看',
  browseGallery: '浏览画廊',
  whatIs: 'Seedance 2.0 是什么？',
  whatIsContent: 'Seedance 2.0 是一款前沿的 AI 视频生成模型，能够根据文字提示词创建高质量视频。它擅长电影级镜头、角色动画和创意视觉效果。',
  statistics: '📊 统计数据',
  totalPrompts: '提示词总数',
  featuredPrompts: '精选',
  lastUpdated: '最后更新',
  featuredSection: '⭐ 精选提示词',
  allPrompts: '🎬 所有提示词',
  morePrompts: '📚 更多提示词',
  morePromptsContent: '本 README 展示了最新的提示词。访问我们的画廊查看完整合集，支持视频预览和搜索。',
  prompt: '提示词',
  tips: '使用技巧',
  tipsSection: '💡 使用技巧',
  author: '作者',
  source: '来源',
  published: '发布日期',
  featured: '⭐ 精选',
  tryItNow: '👉 立即试用 →',
  contributing: '🤝 贡献指南',
  contributingContent: '欢迎贡献！请查看我们的[贡献指南](CONTRIBUTING.md)了解如何提交提示词。',
  license: '📄 许可证',
  licenseContent: '本合集采用 [CC BY 4.0](LICENSE) 许可。你可以在注明出处的情况下自由分享和改编这些提示词。',
  acknowledgements: '🙏 致谢',
  acknowledgementsContent: '感谢所有与社区分享提示词的创作者们。',
  starHistory: '⭐ Star 历史',
  madeWith: '用 ❤️ 制作',
  copyright: '© 2026 YouWare 版权所有',
  videoPreview: '视频预览',
  referenceImage: '参考图片',
  tableOfContents: '目录',
  copyrightNotice: '版权声明：所有提示词均来自社区，仅用于学习目的。如果您认为任何内容侵犯了您的权利，请提交 Issue，我们将及时删除。',
};

const ja: Translation = {
  ...en,
  title: 'Awesome Seedance 2.0 動画プロンプト',
  subtitle: 'Seedance 2.0 の厳選ビデオ生成プロンプト集',
  whatIs: 'Seedance 2.0 とは？',
  whatIsContent: 'Seedance 2.0 は、テキストプロンプトから高品質な動画を生成する最先端の AI モデルです。映画的なショット、キャラクターアニメーション、クリエイティブな視覚効果に優れています。',
  statistics: '📊 統計',
  totalPrompts: 'プロンプト総数',
  featuredPrompts: '注目',
  lastUpdated: '最終更新',
  featuredSection: '⭐ 注目プロンプト',
  allPrompts: '🎬 全プロンプト',
  prompt: 'プロンプト',
  tips: '使い方のコツ',
  tipsSection: '💡 使い方のコツ',
  author: '作者',
  source: 'ソース',
  published: '公開日',
  featured: '⭐ 注目',
  contributing: '🤝 コントリビュート',
  license: '📄 ライセンス',
  tableOfContents: '目次',
  videoPreview: '動画プレビュー',
  referenceImage: '参考画像',
};

const ptBR: Translation = {
  ...en,
  title: 'Awesome Seedance 2.0 Prompts de Vídeo',
  subtitle: 'Coleção curada de prompts de geração de vídeo para Seedance 2.0',
  statistics: '📊 Estatísticas',
  totalPrompts: 'Total de Prompts',
  featuredPrompts: 'Destaques',
  lastUpdated: 'Última Atualização',
  featuredSection: '⭐ Prompts em Destaque',
  allPrompts: '🎬 Todos os Prompts',
  prompt: 'Prompt',
  tips: 'Dicas',
  tipsSection: '💡 Dicas de Uso',
  author: 'Autor',
  source: 'Fonte',
  published: 'Publicado',
  featured: '⭐ Destaque',
  contributing: '🤝 Contribuições',
  license: '📄 Licença',
  tableOfContents: 'Índice',
  videoPreview: 'Prévia do Vídeo',
  referenceImage: 'Imagem de Referência',
};

const es: Translation = {
  ...en,
  title: 'Awesome Seedance 2.0 Prompts de Video',
  subtitle: 'Colección curada de prompts de generación de video para Seedance 2.0',
  statistics: '📊 Estadísticas',
  totalPrompts: 'Total de Prompts',
  featuredPrompts: 'Destacados',
  lastUpdated: 'Última Actualización',
  featuredSection: '⭐ Prompts Destacados',
  allPrompts: '🎬 Todos los Prompts',
  prompt: 'Prompt',
  tips: 'Consejos',
  tipsSection: '💡 Consejos de Uso',
  author: 'Autor',
  source: 'Fuente',
  published: 'Publicado',
  featured: '⭐ Destacado',
  contributing: '🤝 Contribuciones',
  license: '📄 Licencia',
  tableOfContents: 'Índice',
  videoPreview: 'Vista Previa del Video',
  referenceImage: 'Imagen de Referencia',
};

const I18N: Record<string, Translation> = {
  'en': en,
  'zh-CN': zhCN,
  'ja': ja,
  'pt-BR': ptBR,
  'es': es,
};

export function t(key: keyof Translation, locale: string): string {
  const lang = I18N[locale] || I18N['en'];
  return lang[key] || en[key] || key;
}
