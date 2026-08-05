[English](README.md) | [简体中文](README_zh-CN.md) | **日本語** | [Português (Brasil)](README_pt-BR.md) | [Español](README_es.md)

---

# 🎬 Awesome Seedance 2.0 動画プロンプト

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re) [![GitHub stars](https://img.shields.io/github/stars/renoise-ai/awesome-seedance-prompts?style=social)](https://github.com/renoise-ai/awesome-seedance-prompts) ![License](https://img.shields.io/badge/license-CC%20BY%204.0-green) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/renoise-ai/awesome-seedance-prompts/pulls)

Seedance 2.0 の厳選ビデオ生成プロンプト集

💡 **プロンプトをコピーして[Renoise ですぐに生成 →](https://renoise.ai/ja/showcase/awesome-seedance-prompts?utm_source=github&utm_medium=readme&utm_campaign=seedance-prompts)** — セットアップ・インストール不要。

> ⚠️ **著作権に関するお知らせ：すべてのプロンプトは教育目的でコミュニティから収集されています。権利侵害に該当するコンテンツがある場合は、Issue を作成してください。速やかに対応いたします。**

---

## 📖 目次

* [🌐 🎬 ウェブギャラリーで閲覧](#--)
* [🤔 Seedance 2.0 とは？](#-seedance-20-)
* [📊 統計](#-)
* [🎬 全プロンプト](#-all-prompts)
* [💡 使い方のコツ](#-usage-tips)
* [🤝 コントリビュート](#-contributing)
* [📄 ライセンス](#-license)
* [🙏 謝辞](#-acknowledgements)
* [⭐ Star 履歴](#-star-history)

---

## 🌐 🎬 ウェブギャラリーで閲覧

**👉 [Renoise でプロンプトを閲覧](https://renoise.ai/ja/showcase/awesome-seedance-prompts?utm_source=github&utm_medium=readme&utm_campaign=seedance-prompts)**

| 機能 | GitHub README | ギャラリー |
|---------|-------------|---------|
| 🎬 動画再生 | ❌ 静止サムネイル | ✅ 完全な動画再生 |
| 🔍 検索 | Ctrl+F のみ | 複数フィールドのあいまい検索 |
| 📱 モバイル | 基本対応 | 完全レスポンシブ |
| 🌍 言語 | 5 | 5+ |

**🚀 Renoise でもっと見る:** [Seedance 2.0 モデル](https://renoise.ai/ja/features/seedance-2?utm_source=github&utm_medium=readme&utm_campaign=seedance-prompts) · [AI 映画予告編](https://renoise.ai/ja/guides/ai-movie-trailer?utm_source=github&utm_medium=readme&utm_campaign=seedance-prompts) · [AI ミュージックビデオ](https://renoise.ai/ja/guides/ai-music-video?utm_source=github&utm_medium=readme&utm_campaign=seedance-prompts) · [AI 写真から動画](https://renoise.ai/ja/guides/ai-photo-to-video?utm_source=github&utm_medium=readme&utm_campaign=seedance-prompts)

---

## 🤔 Seedance 2.0 とは？

**Seedance 2.0** は **ByteDance** が開発した動画生成モデルで、業界初の **画像・動画・音声・テキストの4モーダル同時入力** に対応しています。

**主な特徴：**

* 🎥 **テキストから動画** — テキスト記述から動画を生成
* 🖼️ **画像から動画** — 静止画をアニメーション化
* 📹 **動画変換** — 既存動画の変換・拡張
* 🎵 **音声駆動** — 音声入力による動画生成
* 📐 **最大1080p解像度**、4〜15秒
* 🔊 **自動吹替・BGM** — 自動ナレーション・BGM生成

---

## 📊 統計

| 指標 | 数 |
|--------|-------|
| 📝 プロンプト総数 | **5306** |
| ⭐ 注目 | **0** |
| 💡 ヒント & チュートリアル | **2497** |
| 🔄 最終更新 | **2026-08-05** |

---

## 🎬 全プロンプト

> 📝 公開日順（新しい順）

### FORMAT 15 seconds, 16:9. Photoreal first-person vlog in a rainy street market…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
---
FORMAT 15秒、16:9。雨の路上マーケットを舞台にしたフォトリアルな一人称Vlogに、太いワックスクレヨンの大胆な落書きアニメーションが混ざる。カットなしの、手持ちによるワンテイク。  [2] ASSETS 外部アセットなし。リアルな手が太い赤いワックスクレヨンを持っている。クレヨンが触れた、または描いた正確な範囲だけが変化する。  [3] IDENTITY リアルな手、赤いワックスクレヨン、濡れた路上マーケット、傘、自転車、屋台の湯気、水たまりの反射、スマホの揺れ、正確な動き、パース、影を維持する。触れていない部分は完全にフォトリアルのまま。  変化ルール：クレヨンは実際にリアルな表面に物理的に触れなければならない。接触すると、ワックスの先端が引きずられ、目に見える赤い跡を残し、触れた部分が即座にフラットなクレヨンアートへ変化する。手が線を描く場合、変化は描画先端のすぐ後ろを正確に追従し、決して先行しない。ワックスの残り、わずかな引きずり、細かなカスを見せる。  [4] BEATS [0–4s] 自転車がカメラのすぐ近くを通り過ぎる。クレヨンが回転する前輪に触れる。接触した正確な部分が即座にクレヨンのサンバーストになり、その後は先端の下で車輪が回転するのに合わせて、変化した部分だけが巻き付く。乗り手はリアルなまま。  [4–7s] 手が水たまりの上を1本の曲線でなぞる。描いた軌跡にぴったり沿ってクレヨンの鯉が現れ、下には本物のさざ波を伴うリアルな反射の中を泳ぐ。  [7–11s] クレヨンが屋台から立ちのぼる湯気に触れ、素早い渦巻きを描く。湯気は先端のすぐ後ろで直接クレヨンのドラゴンへ変わり、その後また本物の蒸気へ戻る。  [11–15s] 手が傘の列の上を、長い上向きの弧を1本描く。触れた傘は描いた軌跡に沿って1つずつ、即座にカラフルなクレヨンの花へ変わる。手が離れると変化は鋭く止まり、小さなワックスのカスが落ちる。最後の1秒はフリーズ。  [5] CAMERA 歩行による揺れがある目線高さのスマホPOV、素早いパン、短いオートフォーカスの呼吸、夜の雨の露出変化。接触や描画の瞬間はフレーム中央付近に保ち、先端の接触と即時の変化が読み取りやすいようにする。  [6] LIGHT 雨の夕方の光。屋台の暖色ランプと、冷たい濡れた反射。クレヨン要素は、粗いワックス質感、ムラのある塗り、見えるストロークの粒子感、やや揺れる手作りのエッジを使う。  [7] EDIT 1本の途切れないショット。すべての効果は、触れる／描く → 目に見えるワックスの跡 → 先端の真下で即時変化、の順に従う。遅延した変化、自走して広がる効果、シーン全体のモーフィングはなし。  [8] AUDIO 音声：雨の環境音、自転車のチェーン、足音、マーケットのざわめき、屋台の焼ける音、湯気のシュー音、表面を引きずるワックスの音、そして各変化時の柔らかなスクラッチアクセント。BGM：オリジナルの15秒キュー。65%は遊び心のある驚き、35%は雨の街の温かさ。軽いパーカッション、控えめなベース、トイピアノ、柔らかなシンセパッド。穏やかに盛り上げ、最後の2秒は温かいサスペンデッドコードで保持する。既存のメロディを模倣しないこと。  [9] NEGATIVE 字幕、画面上のテキスト、ウォーターマーク、ロゴ、ステッカーは禁止。中国語のテキスト、文字化け、スペルミスを入れないこと。接触前の変化は禁止。魔法のような光、自己増殖する粒子、対象全体の即時モーフィング、余分な手、複製されたクレヨン、カット、スライドショー編集は禁止。

--- THREAD CONTINUATION ---
[Thread 1] Prompt

[1] FORMAT 15秒、16:9。雨の路上マーケットを舞台にしたフォトリアルな一人称Vlogに、太いワックスクレヨンの大胆な落書きアニメーションが混ざる。カットなしの、手持ちによるワンテイク。  [2] ASSETS 外部アセットなし。リアルな手が太い赤いワックスクレヨンを持っている。クレヨンが触れた、または描いた正確な範囲だけが変化する。  [3] IDENTITY リアルな手、赤いワックスクレヨン、濡れた路上マーケット、傘、自転車、屋台の湯気、水たまりの反射、スマホの揺れ、正確な動き、パース、影を維持する。触れていない部分は完全にフォトリアルのまま。  変化ルール：クレヨンは実際にリアルな表面に物理的に触れなければならない。接触すると、ワックスの先端が引きずられ、目に見える赤い跡を残し、触れた部分が即座にフラットなクレヨンアートへ変化する。手が線を描く場合、変化は描画先端のすぐ後ろを正確に追従し、決して先行しない。ワックスの残り、わずかな引きずり、細かなカスを見せる。  [4] BEATS [0–4s] 自転車がカメラのすぐ近くを通り過ぎる。クレヨンが回転する前輪に触れる。接触した正確な部分が即座にクレヨンのサンバーストになり、その後は先端の下で車輪が回転するのに合わせて、変化した部分だけが巻き付く。乗り手はリアルなまま。  [4–7s] 手が水たまりの上を1本の曲線でなぞる。描いた軌跡にぴったり沿ってクレヨンの鯉が現れ、下には本物のさざ波を伴うリアルな反射の中を泳ぐ。  [7–11s] クレヨンが屋台から立ちのぼる湯気に触れ、素早い渦巻きを描く。湯気は先端のすぐ後ろで直接クレヨンのドラゴンへ変わり、その後また本物の蒸気へ戻る。  [11–15s] 手が傘の列の上を、長い上向きの弧を1本描く。触れた傘は描いた軌跡に沿って1つずつ、即座にカラフルなクレヨンの花へ変わる。手が離れると変化は鋭く止まり、小さなワックスのカスが落ちる。最後の1秒はフリーズ。  [5] CAMERA �
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084813664536903680/img/abuqhwrgdlt8K1mu.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084814342772691127.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084814342772691127.mp4)**

**作者:** [Jin.B](https://x.com/opener_ai) | **ソース:** [Link](https://x.com/opener_ai/status/2084814342772691127) | **公開日:** 2026年8月5日

`Portrait & Fashion` `Travel Vlog` `Photoreal` `Realistic World` `VFX` `POV` `Transformation` `ASMR`

---

### [0:00–0:04] Establishing Shot: A photorealistic CGI cinematic adventure on a…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
---
[0:00–0:04] Establishing Shot: 息をのむほど美しい異星の世界を舞台にした、フォトリアルなCGIシネマティック・アドベンチャー。黄金色の夕暮れの中、孤独で尽きることのない好奇心を持つ探検家がそびえ立つ崖の頂に立ち、片方の発光レンズがもう片方より大きく、奇妙に回転する真鍮の輪が刻まれた独特の非対称マスクで顔を隠している。眼下には、巨大な滝が連なる広大な谷、光る川、漂う霧、巨大な月、そして荘厳に飛び交う生き物たちが広がる。その姿勢には強い魅了がにじみ、まるで純粋な驚きに引き寄せられるように身を乗り出している。

[0:04–0:09] The Reveal / Inciting Chase: 探検家は、紫に発光するバイオルミネセントな蔓が密生したジャングルへと忍び寄り、奇妙な光に興味深そうにマスク越しの頭を傾ける。すると突然、巨大な爬虫類の捕食者が茂みの中から飛び出してくる。探検家は一気に駆け出し、光る木々の間を縫うように逃げる。全力疾走の最中、肩越しに獣を追いながら、マスクのレンズが激しく発光する。

[0:09–0:13] The Leap: 巨大な滝の縁にたどり着いた探検家は、あの無謀な好奇心に突き動かされるまま、ためらうことなく深淵へと飛び込む。マスクが黄金の光を受け止め、その直後、巨大な翼竜のような飛行生物の背に完璧に着地する。

[0:13–0:19] Aerial Pursuit: ふたりは一緒に、狭い岩の峡谷や滝、浮遊する崖の間を飛翔し、下方からは捕食者が執拗に追い続ける。探検家は生き物の側面から身を乗り出し、飛行中でさえマスクがうなりを上げてレンズを調整し、地形を観察する。恐怖を上回るのは、やはり好奇心だ。

[0:19–0:24] Aerial Battle: ダイナミックなカメラワーク、劇的な急降下、接近戦の空中機動が織りなす、緊迫した戦いが展開される。探検家は光るエネルギーの槍で攻撃し、かすめるたびにマスクのレンズがさらに強く閃く。傷ついた飛行生物は発光する森の樹冠を突き破って墜落し、破片と光る胞子をまき散らす。

[0:24–0:27] Emotional Beat: 静かなひととき、探検家は発光する植物の下で傷ついた相棒のそばにひざまずき、マスクのレンズプレートをそっと持ち上げて、飾り気のない驚きと優しさをもってその生き物を見つめる。そしてやがて、ふたりはそろって地平線へと視線を向ける。

[0:27–0:30] Finale: 圧倒的なパノラマの空撮ショットが、果てしない滝、巨大な月、浮遊する山々、そして黄金の夕暮れの光の中を舞い上がる無数の飛行生物が存在する、広大な異星の谷を映し出す。

Photorealistic CGI, blockbuster cinematic quality, ultra-detailed environments, physically accurate lighting, realistic physics, volumetric clouds, HDR, dynamic cinematic camera movement, epic scale, emotional storytelling, unique masked character design, 30-second cinematic sequence, 4K masterpiece.

--- THREAD CONTINUATION ---
[Thread 1] @thankyouai_hq Character Sheet Reference https://t.co/i8PgIRYgCx

[Thread 2] Video Prompt:
[0:00–0:04] Establishing Shot: 息をのむほど美しい異星の世界を舞台にした、フォトリアルなCGIシネマティック・アドベンチャー。黄金色の夕暮れの中、孤独で尽きることのない好奇心を持つ探検家がそびえ立つ崖の頂に立ち、片方の発光レンズがもう片方より大きく、奇妙に回転する真鍮の輪が刻まれた独特の非対称マスクで顔を隠している。眼下には、巨大な滝が連なる広大な谷、光る川、漂う霧、巨大な月、そして荘厳に飛び交う生き物たちが広がる。その姿勢には強い魅了がにじみ、まるで純粋な驚きに引き寄せられるように身を乗り出している。

[0:04–0:09] The Reveal / Inciting Chase: 探検家は、紫に発光するバイオルミネセントな蔓が密生したジャングルへと忍び寄り、奇妙な光に興味深そうにマスク越しの頭を傾ける。すると突然、巨大な爬虫類の捕食者が茂みの中から飛び出してくる。探検家は一気に駆け出し、光る木々の間を縫うように逃げる。全力疾走の最中、肩越しに獣を追いながら、マスクのレンズが激しく発光する。

[0:09–0:13] The Leap: 巨大な滝の縁にたどり着いた探検家は、あの無謀な好奇心に突き動かされるまま、ためらうことなく深淵へと飛び込む。マスクが黄金の光を受け止め、その直後、巨大な翼竜のような飛行生物の背に完璧に着地する。

[0:13–0:19] Aerial Pursuit: ふたりは一緒に、狭い岩の峡谷や滝、浮遊する崖の間を飛翔し、下方からは捕食者が執拗に追い続ける。探検家は生き物の側面から身を乗り出し、飛行中でさえマスクがうなりを上げてレンズを調整し、地形を観察する。恐怖を上回るのは、やはり好奇心だ。

[0:19–0:24] Aerial Battle: ダイナミックなカメラワーク、劇的な急降下、接近戦の空中機動が織りなす、緊迫した戦いが展開される。探検家は光るエネルギーの槍で攻撃し、かすめるたびにマスクのレンズがさらに強く閃く。傷ついた飛行生物は発光する森の樹冠を突き破って墜落し、破片と光る胞子をまき散らす。

[0:24–0:27] Emotional Beat: 静かなひととき、探検家は発光する植物の下で傷ついた相棒のそばにひざまずき、マスクのレンズプレートをそっと持ち上げて、飾り気のない驚きと優しさをもってその生き物を見つめる。そしてやがて、ふたりはそろって地平線へと視線を向ける。

[0:27–0:30] Finale: 圧倒的なパノラマの空撮ショットが、果てしない滝、巨大な月、浮遊する山々、そして黄金の夕暮れの光の中を舞い上がる無数の飛行生物が存在する、広大な異星の谷を映し
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084817384125452290/img/TuOZSkzmwj032sUa.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084824616846139865.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084824616846139865.mp4)**

**作者:** [Shami](https://x.com/ShamiWeb3) | **ソース:** [Link](https://x.com/ShamiWeb3/status/2084824616846139865) | **公開日:** 2026年8月5日

`Action` `Chase` `3D Animation` `Sci-Fi` `VFX` `FPV & Aerial`

---

### Create a 10-second vertical (9:16), ultra-realistic 4K beauty commercial that…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
10秒の縦型（9:16）、超リアルな4KビューティーCMを、絵コンテどおりに完全再現してください。ソフトで温かみのあるヌード系ライティング、ラグジュアリーなローズゴールドの美学、浅い被写界深度、クリーミーなボケ背景、シネマティックなカメラワーク、プレミアムなスキンケア／メイク広告スタイル、滑らかなトランジション、マクロのビューティーショット、リアルな肌の質感、上品なスパークル効果、HDR、60fpsを使用してください。

Scene 1 (0.0–1.5s) – Hook

片手に持った4本のローズゴールドの3色アイシャドウスティックのクローズアップ。カメラは柔らかな発光とともにゆっくりドリーインする。すべての色のバリエーションがはっきり見えるようにする。製品の周囲に浮遊するスパークル。画面テキスト: "Only one eyeshadow needed? 😍✨"

Scene 2 (1.5–3.0s)

1本のアイシャドウスティックを手に持つ。ゆっくりキャップを外し、その後スティックを360°回転させる。カメラは3色グラデーションの先端の極端なマクロクローズアップへ移行し、シマーの質感とメタリックな仕上がりを見せる。画面テキスト: "3 colors in 1 stick!"

Scene 3 (3.0–5.5s)

女性のまぶたのマクロクローズアップ。ショット1: スティックをまぶた全体に一度なめらかにスワイプして塗る。ショット2: 指先1本でやさしくぼかす（1〜2回のソフトなブレンディング）。ショット3: なめらかなシマーと自然なグラデーションの完成した目元を見せる。シームレスなビフォーアフターのトランジションを使用する。画面ラベル: "1. Swipe" "2. Blend" "3. Done!" 下部テキスト: "Swipe once and it's done! 💗"

Scene 4 (5.5–8.0s)

完成したアイメイクを、シネマティックな3つのクローズアップ角度で見せる。カメラはきらめくまぶたの上をゆっくりパンし、微細なグリッター粒子がハイライトに自然に追従する。温かみのあるゴールドの反射、自然なまつげ、完璧な肌。画面テキスト: "Beautiful shimmer & natural ✨"

Scene 5 (8.0–10.0s)

アイシャドウスティックを顔の横に持ちながら微笑むモデルのミディアムクローズアップ。カメラに向かって遊び心のあるウィンクをする。浮遊するハートとスパークルのグラフィックとともに、ゆっくりズームアウト。画面テキスト: "Perfect for 5-minute makeup! 💕" ボタン: "Save this for later!"

Overall Style

プレミアムな韓国ビューティーCM、上品でラグジュアリーなコスメ広告、ソフトなベージュとローズゴールドのカラーパレット、シネマティックなHDRライティング、マクロレンズ、滑らかなモーションブラー、クリーンな背景、艶やかなシマー仕上げ、リアルな肌の質感、プロフェッショナルなビューティーフォトグラフィー、シームレスな編集、TikTok/Reels風のテンポ、1〜1.5秒ごとのビートカット、高級感のあるCMクオリティ、提供された絵コンテと同じ構図・同じ順序。

--- THREAD CONTINUATION ---
[Thread 1] Prompt⤵️
10-Second Cinematic Video Prompt (Same as Storyboard)

Prompt:

Create a 10-second vertical (9:16), ultra-realistic 4K beauty commercial that follows the storyboard exactly. Use soft warm nude lighting, luxury rose-gold aesthetic, shallow depth of field, creamy bokeh background, cinematic camera movement, premium skincare/makeup advertisement style, smooth transitions, macro beauty shots, realistic skin texture, elegant sparkle effects, HDR, 60fps.

Scene 1 (0.0–1.5s) – Hook

片手に持った4本のローズゴールドの3色アイシャドウスティックのクローズアップ。カメラは柔らかな発光とともにゆっくりドリーインする。すべての色のバリエーションがはっきり見えるようにする。製品の周囲に浮遊するスパークル。画面テキスト: "Only one eyeshadow needed? 😍✨"

Scene 2 (1.5–3.0s)

1本のアイシャドウスティックを手に持つ。ゆっくりキャップを外し、その後スティックを360°回転させる。カメラは3色グラデーションの先端の極端なマクロクローズアップへ移行し、シマーの質感とメタリックな仕上がりを見せる。画面テキスト: "3 colors in 1 stick!"

Scene 3 (3.0–5.5s)

女性のまぶたのマクロクローズアップ。ショット1: スティックをまぶた全体に一度なめらかにスワイプして塗る。ショット2: 指先1本でやさしくぼかす（1〜2回のソフトなブレンディング）。ショット3: なめらかなシマーと自然なグラデーションの完成した目元を見せる。シームレスなビフォーアフターのトランジションを使用する。画面ラベル: "1. Swipe" "2. Blend" "3. Done!" 下部テキスト: "Swipe once and it's done! 💗"

Scene 4 (5.5–8.0s)

完成したアイメイクを、シネマティックな3つのクローズアップ角度で見せる。カメラはきらめくまぶたの上をゆっくりパンし、微細なグリッター粒子がハイライトに自然に追従する。温かみのあるゴールドの反射、自然なまつげ、完璧な肌。画面テキスト: "Beautiful shimmer & natural ✨"

Scene 5 (8.0–10.0s)

アイシャドウスティックを顔の横に持ちながら微笑むモデルのミディアムクローズアップ。カメラに向かって遊び心のあるウィンクをする。浮遊するハートとスパークルのグラフィックとともに、ゆっくりズームアウト。画面テキスト: "Perfect for 5-minute makeup! 💕" ボタン: "Save this for later!"

Overall Style

プレミアムな韓国ビューティーCM、上品でラグジュアリーなコスメ広告、ソフトなベージュとローズゴールドのカラーパレット、シネマティックなHDRライティング、マクロレンズ、滑らかなモーションブラー、クリーンな背景、艶やかなシマー仕上げ、リアルな肌の質感、プロフェッショナルなビューティーフォトグラフィー、シームレスな編集、TikTok/Reels風のテンポ、1〜1.5秒ごとのビートカット、高級感のあるCMクオリティ、提供された絵コンテと同じ構図・同じ順序。
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084433970465574912/img/9DZ5FdVg7FpZViMq.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084434165022552531.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084434165022552531.mp4)**

**作者:** [Hania Ai](https://x.com/HaniaAi12) | **ソース:** [Link](https://x.com/HaniaAi12/status/2084434165022552531) | **公開日:** 2026年8月4日

`Product Ad` `Beauty` `Photoreal` `Realistic World` `Macro` `VFX` `Slow-Mo`

---

### A rabbit and a cat race to see who's faster. It starts off with the cat being…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
ウサギとネコが、どちらが速いかを競ってレースをする。最初はネコのほうが速いが、なぜかウサギはゴールラインの先にあるニンジンを頭の中で思い描き、するとウサギはスポーツモードに切り替わる。目つきは鋭くなり、脚はより強くなる。そして、もともとの走りからホッピングへと切り替え、信じられないほどのソニックスピードで進んでレースに勝つ。12種類の異なるカメラアングルを使用し、さまざまな camera motion path と foreground participation を取り入れた、速いテンポの動き、ダイナミックでハイエンドな映像テンポ、cinematic。以下の2Dビジュアルスタイルに従うこと：手描きのデジタルガッシュ、乾いたブラシの粒感が見え、輪郭線はなく、形はすべてフラットに塗り分けられた色面だけで定義される。ずんぐりした幾何学的な形状デザイン、背景はシルエット化された notan の面まで簡略化され、前景はシルエットのフレーミングとして機能し、アクションのビートごとに環境を省略して単一の高彩度な色面へと切り替わる。16:9の横長比率
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084330373367152640/img/p5hc5-mSQfHcNOF2.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084444206748291397.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084444206748291397.mp4)**

**作者:** [Aiden Vu](https://x.com/byaiden_vu) | **ソース:** [Link](https://x.com/byaiden_vu/status/2084444206748291397) | **公開日:** 2026年8月4日

`Animals` `Creatures` `Hand-drawn` `Realistic World` `Transformation`

---

### A Pixar-inspired feature film animation with expressive characters, vibrant…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
---
ピクサー風の長編映画アニメーション。表情豊かなキャラクター、活気あふれるヨーロッパのショッピングストリート、ブロックバスター級のキャラクターアニメーション、映画的なアクション演出、温かいゴールデンアワーのライティング、リアルな布と髪のシミュレーション、ダイナミックなカメラワーク、感情豊かな表情演技、カラフルな店先、屋外カフェ、花屋、石畳の通り、プレミアムな3Dアニメーション、劇場公開クオリティ、16:9。
映画は、ゴールデンアワーの美しいヨーロッパのショッピングストリートから始まる。人々はカフェを楽しみ、別の人々は花屋を見て回っている。
突然、人々が悲鳴を上げて散り散りになる。
カフェのテーブルがひっくり返る。
2人の若い女性が激しい戦いを繰り広げている。
一方がもう一方を積み重なったカフェの椅子へ投げ飛ばす。
椅子が崩れ落ちる。
植木鉢が砕け散る。
鳩が一斉に空へ舞い上がる。
カメラが劇的に周囲を回り込む。
2人の少女は肩で息をしている。
Girl 1:
「Shaunに近づかないで！」
Girl 2:
「絶対にイヤ！」
2人は互いに向かって全力疾走する。
ぶつかる直前――
3人目の少女が突然その間に割って入り、2人のパンチをいとも簡単に受け止める。
静寂。
彼女は自信たっぷりに微笑む。
Girl 3:
「あなたたち、どっちも最低。」
間。
「Shaunは私のもの。」
カメラが、アイスクリームを食べながら何気なく歩くShaunへパンする。
彼は皆が自分を見つめていることに気づく。
「…僕？」
すると3人の少女が突然、彼に向かって走り出す。
彼のアイスクリームが落ちる。
Shaun:
「うわ…」
彼は振り返って走り出す。

--- THREAD CONTINUATION ---
[Thread 1] ピクサー風の長編映画アニメーション。表情豊かなキャラクター、活気あふれるヨーロッパのショッピングストリート、ブロックバスター級のキャラクターアニメーション、映画的なアクション演出、温かいゴールデンアワーのライティング、リアルな布と髪のシミュレーション、ダイナミックなカメラワーク、感情豊かな表情演技、カラフルな店先、屋外カフェ、花屋、石畳の通り、プレミアムな3Dアニメーション、劇場公開クオリティ、16:9。
映画は、ゴールデンアワーの美しいヨーロッパのショッピングストリートから始まる。人々はカフェを楽しみ、別の人々は花屋を見て回っている。
突然、人々が悲鳴を上げて散り散りになる。
カフェのテーブルがひっくり返る。
2人の若い女性が激しい戦いを繰り広げている。
一方がもう一方を積み重なったカフェの椅子へ投げ飛ばす。
椅子が崩れ落ちる。
植木鉢が砕け散る。
鳩が一斉に空へ舞い上がる。
カメラが劇的に周囲を回り込む。
2人の少女は肩で息をしている。
Girl 1:
「Shaunに近づかないで！」
Girl 2:
「絶対にイヤ！」
2人は互いに向かって全力疾走する。
ぶつかる直前――
3人目の少女が突然その間に割って入り、2人のパンチをいとも簡単に受け止める。
静寂。
彼女は自信たっぷりに微笑む。
Girl 3:
「あなたたち、どっちも最低。」
間。
「Shaunは私のもの。」
カメラが、アイスクリームを食べながら何気なく歩くShaunへパンする。
彼は皆が自分を見つめていることに気づく。
「…僕？」
すると3人の少女が突然、彼に向かって走り出す。
彼のアイスクリームが落ちる。
Shaun:
「うわ…」
彼は振り返って走り出す。

（最後の7秒）
直前のシーンからそのまま続ける。
Shaunはすでに石畳の通りを走っており、3人の少女が彼を追いかけている。
カメラは彼の横に並走し、彼が何度も肩越しに振り返る。
彼は狭い路地に飛び込む。
行き止まり。
急停止して滑り込むように止まる。
肩で息をする。
ゆっくり振り返る。
3人の少女が静かに一緒に近づき、出口をふさいでいる。
Shaunは両手を上げる。
「わかった…みんな落ち着こう…」
彼女たちは歩みを止めない。
「説明させてくれ！」
彼は左を見る。
レンガの壁。
右を見る。
逃げ場はない。
そしてゆっくり、巨大で怯えきったピクサー風の目でカメラをまっすぐ見る。
「もう終わった…」
3人の少女が突然、彼に向かって突進する。
Shaunが叫ぶ。
「うわああああ！」
フリーズフレーム。
暗転。
---

翻訳のみを返してください。
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084467108445057024/img/d88x7jkKQVLG-d2G.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084467213948629054.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084467213948629054.mp4)**

**作者:** [Shara I Ai Video Creator](https://x.com/itsshara_ai) | **ソース:** [Link](https://x.com/itsshara_ai/status/2084467213948629054) | **公開日:** 2026年8月4日

`Action` `Ring Fight` `Action` `Chase` `3D Animation` `Realistic World`

---

### A skateboarding scene down a steep road in a coastal city.

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
海岸沿いの街の急な坂道を下るスケートボードのシーン。

--- 引用ツイート ---
Happy Monday! みなさん、素晴らしい新しい一週間になりますように!! 🌞🍀💫

共有用プロンプト。
「海岸沿いの街の急な坂道を下るスケートボードのシーン。」

いつものように、元のキャラクターの画像と一緒に、そのプロンプトを画像生成AIに送ってください。

===
Prompt
Use the provided reference image as the absolute and exact source for the character. Preserve the character’s face, facial features, eyes, hairstyle, hair accessories, outfit, materials, colors, body proportions, silhouette, skateboard, and every identifying design detail exactly as shown in the reference image. Do not redesign, simplify, replace, add, or remove any character elements.

Place the referenced character in a dynamic full-body skateboarding pose viewed from behind as he rides rapidly downhill. Her torso leans forward toward the slope while both arms extend outward at different heights to maintain balance. One foot remains planted near the front of the skateboard, while the rear leg bends and lifts as if he has just pushed off the ground or is preparing to place it back on the board. Her body follows the steep diagonal of the road, creating a youthful, adventurous, and energetic sense of motion.

Use a vertical full-body action composition captured from an extremely low rear tracking angle close to the road surface. The camera follows directly behind the skateboarder and tilts upward along the steep downhill path, making the skateboard, rear foot, legs, coastline, and monumental clouds rise through successive layers of the frame. Apply a moderately wide lens to exaggerate the slope and spatial depth while preserving the character’s natural proportions. Tilt the entire composition diagonally to intensify speed, instability, and forward momentum.

Set the background on a steep coastal road descending through a compact seaside town beneath an enormous summer sky. Small houses with pale walls and terracotta roofs cluster along the left hillside beside a curving beach and luminous turquoise water. On the right surrounded by utility poles, overhead power lines, gravel, and wild roadside grass. The horizon opens onto a deep-blue ocean beneath towering white cumulus clouds, while curved contrails, scattered birds, airborne particles, and streaked highlights amplify the sensation of speed and boundless summer freedom.
A gigantic towering white cumulus cloud rises from near the horizon, directly behind the scene. The cloud is massive, bright, soft, and full of rounded shapes, taking up most of the sky and becoming the main visual focus of the image. Smaller cloud layers sit lower near the horizon. There are white whales with bodies that look as if they're made of solid clouds, swimming together in a pod.
 AR 2:1
===
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084467952179683329/img/uYWFvfXni-F-eY6Z.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084468179733225660.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084468179733225660.mp4)**

**作者:** [Curious 1](https://x.com/CuriousOne_01) | **ソース:** [Link](https://x.com/CuriousOne_01/status/2084468179733225660) | **公開日:** 2026年8月4日

`Sports` `Extreme` `Photoreal` `Realistic World`

---

### 1970年代の日本。夕方の駅の長い連絡通路を、スーツ姿の日本人男性が全力で走り続ける。まわりの人々は反対方向へ歩いていて、彼だけが人の流れに逆らって走っている。…

![日本語](https://img.shields.io/badge/lang-日本語-green)

#### 📝 プロンプト

```
1970年代の日本。夕方の駅の長い連絡通路を、スーツ姿の日本人男性が全力で走り続ける。まわりの人々は反対方向へ歩いていて、彼だけが人の流れに逆らって走っている。男は画面の中央にいて、最後まで中央から動かない。

男は30代半ばの日本人。面長で頬骨がはっきり出ていて、目は切れ長で細く、眉は太く直線的。黒い髪を右から七三にきっちり分け、ポマードで固めてあり、全力で走っても分け目が一本も乱れない。太い黒縁の四角いメガネ。襟の広い濃紺の三つ揃いスーツ、幅広の臙脂色のネクタイ、白いワイシャツ、黒い革靴。革の書類鞄を左手に持ったまま、鞄は最後まで形を変えない。走る振動でメガネがずり落ちるたび、指で押し上げる。

男のうしろ、通路の奥から、まったく同じ格好の男たちが数十人、同じ向きに全力で走って続いてくる。全員が同じ七三分け、同じ黒縁メガネ、同じ濃紺の三つ揃いスーツ、同じ革の書類鞄。はじめは通路の奥のぼやけた人混みに紛れて見分けがつかないが、近づくにつれて像がはっきりしていき、やがて画面の奥いっぱいを埋め尽くす。

歩いている人々は1970年代の日本人。濃紺やこげ茶のスーツに中折れ帽の男たち、膝丈のスカートの女たち。画面の左右へ絶え間なく流れ続ける。手前をときどき人影が横切るが、輪郭がぼやけたままで顔は見えない。

止まらないもの＝足元から蹴り上げられた白い書類と茶色の封筒が、絶え間なく宙に舞い散り続ける。最初から最後まで舞い続ける。

背景でも、天井の裸の蛍光灯が次々と後ろへ流れ、太い角柱が次々と画面を横切っていく。

カメラは男の斜め前に置き、後ろ向きに下がりながら同じ速さで走り続ける。通路の奥までまっすぐ見通せる。画角は最後まで変えない。望遠レンズで浅い被写界深度、ピントは手前の男に合い、奥は大きくぼけたところから少しずつはっきりしてくる。男は腰から上が画面に入るサイズ。シネマスコープの横長構図。

セル画調の二次元の手描きアニメーション。細い黒の輪郭線と均一な塗り。1970年代の日本映画のような画作りで、夕方のオレンジ色の光が通路の奥から差し込み、逆光で舞う紙の縁が光る。影は濃く、色はやや褪せていて、細かいフィルムの粒子が全体にのっている。

音は環境音だけ。革靴が床を蹴る音、紙が擦れる音、遠くのざわめき。音楽なし。

先頭の男の顔・髪・メガネ・服は最初から最後まで同じ。手は自然で指の数は一定。

Avoid: identity drift, extra fingers, deformed hands, morphing props, text overlays, camera shake, 3D CGI look, plastic render
```

[![動画プレビュー](https://pbs.twimg.com/ext_tw_video_thumb/2084475024719650816/pu/img/d2B2OkqlUt7zU10J.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084475078939463683.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084475078939463683.mp4)**

**作者:** [ぴょんきち](https://x.com/yarakashiyama_) | **ソース:** [Link](https://x.com/yarakashiyama_/status/2084475078939463683) | **公開日:** 2026年8月4日

`Action` `Chase` `Hand-drawn` `Historical` `POV`

---

### Pure 2D hand-drawn Japanese anime, perfect consistency, limited animation. EDM…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
純粋な2D手描きの日本アニメ、完璧な一貫性、限定アニメーション。EDMのテックハウス・パーティー、煙、脈打つライト、ちらつく線画、揺れるハッチング、不安定なペイントストロークの質感。

Nuxは完全にそのまま維持すること：小柄なアイスブルーのヒューマノイド、トゲのある淡い青髪、発光するシアンの瞳、鋭い笑み、頭に斜めにかぶった赤い十字入りの白いスカルマスク、チョーカー、オレンジの毛襟付き赤いジャケット、黒とシアンの渦巻き模様のシャツ、淡い青の波模様のズボン、ピンクのスリッパ。デザイン、色、体型、衣装のずれは一切なし。

127 bpmで：NuxはDJブースの後ろに立ってコントロールに戻り、DJを始める。体を揺らし、肩を回し、ビートに合わせてスウェイする。手を上げて流れるようなジェスチャーを描き、最後に視聴者へ短く遊び心のある仕草を見せる。完全に非言語。

ダイナミックな手持ちの魚眼カメラが揺れ、沈み込み、寄り、前後に回り込みながら、極端な短縮法で彼の手の動きを追う。ステージ風が髪、毛襟、ジャケット、サッシュを揺らす。流動的で、いたずらっぽい。揺れる質感の下でリズムに完全同期した動き。

サウンドデザイン：少林系のモダン・テックハウスにトラップ要素を加えたもの、短いボーカルチョップ、マイナーキー
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084475017828474880/img/Q6skIVoPwh6VdXJL.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084477794558398679.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084477794558398679.mp4)**

**作者:** [Joseph King](https://x.com/Korgamiai) | **ソース:** [Link](https://x.com/Korgamiai/status/2084477794558398679) | **公開日:** 2026年8月4日

`Music & Dance` `Concert` `Hand-drawn` `Realistic World` `POV`

---

### An ultra-realistic documentary-style MiniDV handheld vlog featuring the same…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
---
超リアルなドキュメンタリー風のMiniDV手持ちVlogで、同じオリジナルの可愛い韓国人の女の子と、ふわふわの猫のMochiが登場する。動画は、彼女が深夜に近所のスーパーへ何気なく歩いていくところから始まり、眠たげでやわらかな笑顔でこう説明する。「家には3種類あるのに……なぜか……欲しがるのは、うちにないやつだけ。いつものこと。」彼女は自然にペットフード売り場を見て回り、猫のお気に入りの味を見つけて、静かにこう言う。「あった。ちゃんとありがたく思ってほしい。」

物語はそのまま続き、彼女が帰宅すると、Mochiがすぐに走って迎えに来て、興奮したように鳴く。彼女は微笑みながら、やさしくこう言う。「わかってる……ごめんね。今度はちゃんと合ってるやつだよ。」彼女はパウチを開け、陶器のボウルにフードを用意し、Mochiが嬉しそうに食べるのを見守ってから、そっと撫でる。カメラを振り返り、あたたかく眠たげな笑顔で、静かにこう言う。「ほらね。これでみんな幸せ。」

撮影はすべて、本物の手持ちMiniDVスタイルで行われ、自然なカメラの揺れ、控えめなオートフォーカスの呼吸、リアルな露出変化、一般的なビデオカメラのレンズ特性、本物の人間らしい微細な表情、自然なリップシンク、やわらかな服の動き、リアルな猫の振る舞い、そして手と物の滑らかなやり取りが収められている。音声は、内蔵カメラマイクによる本物らしい録音で、静かな夜の環境音、足音、自動ドアのチャイム、買い物袋の擦れる音、フードパウチのカサカサした音、陶器のボウルの音、子猫のやわらかな鳴き声、穏やかな喉鳴らし、呼吸音、そしてさりげないアパートの環境音が含まれる。シネマティックな演出も、過剰な演技も、不自然なトランジションも、目に見えるAIの痕跡もない——ただ、女の子と猫のあいだにある、あたたかくて信じられる深夜のひとときが、まるで本当の個人的な記憶のように感じられる。

--- THREAD CONTINUATION ---
[Thread 1] 超リアルなドキュメンタリー風のMiniDV手持ちVlogで、同じオリジナルの可愛い韓国人の女の子と、ふわふわの猫のMochiが登場する。動画は、彼女が深夜に近所のスーパーへ何気なく歩いていくところから始まり、眠たげでやわらかな笑顔でこう説明する。「家には3種類あるのに……なぜか……欲しがるのは、うちにないやつだけ。いつものこと。」彼女は自然にペットフード売り場を見て回り、猫のお気に入りの味を見つけて、静かにこう言う。「あった。ちゃんとありがたく思ってほしい。」

物語はそのまま続き、彼女が帰宅すると、Mochiがすぐに走って迎えに来て、興奮したように鳴く。彼女は微笑みながら、やさしくこう言う。「わかってる……ごめんね。今度はちゃんと合ってるやつだよ。」彼女はパウチを開け、陶器のボウルにフードを用意し、Mochiが嬉しそうに食べるのを見守ってから、そっと撫でる。カメラを振り返り、あたたかく眠たげな笑顔で、静かにこう言う。「ほらね。これでみんな幸せ。」

撮影はすべて、本物の手持ちMiniDVスタイルで行われ、自然なカメラの揺れ、控えめなオートフォーカスの呼吸、リアルな露出変化、一般的なビデオカメラのレンズ特性、本物の人間らしい微細な表情、自然なリップシンク、やわらかな服の動き、リアルな猫の振る舞い、そして手と物の滑らかなやり取りが収められている。音声は、内蔵カメラマイクによる本物らしい録音で、静かな夜の環境音、足音、自動ドアのチャイム、買い物袋の擦れる音、フードパウチのカサカサした音、陶器のボウルの音、子猫のやわらかな鳴き声、穏やかな喉鳴らし、呼吸音、そしてさりげないアパートの環境音が含まれる。シネマティックな演出も、過剰な演技も、不自然なトランジションも、目に見えるAIの痕跡もない——ただ、女の子と猫のあいだにある、あたたかくて信じられる深夜のひとときが、まるで本当の個人的な記憶のように感じられる。
---
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084477612215484416/img/SMa_FfD-xxGsbZD7.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084477800212578689.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084477800212578689.mp4)**

**作者:** [Nexora](https://x.com/frametheory058) | **ソース:** [Link](https://x.com/frametheory058/status/2084477800212578689) | **公開日:** 2026年8月4日

`Portrait & Fashion` `Travel Vlog` `Animals` `Pets` `Photoreal` `Realistic World` `POV`

---

### A continuous, luxury cinematic commercial for a high-end luxury yellow lipstick…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
金色の豪華なトーンで統一された、華やかなスタジオを舞台にした、ハイエンドなラグジュアリー・イエローリップスティックのための、連続性のあるシネマティックなCM。シーンは、シックなローバンのエレガントな女性が、背中の開いたシルクのイエローのスリップドレスを身にまとい、きらめくラメをまとった黄色いチューリップの花束が置かれたミラー仕上げのゴールドテーブルのそばで、温かなボリューメトリックな陽光の中に立つ場面から始まる。カメラは、装飾的なゴールドミラーの前で彼女がイエローリップスティックを塗る様子を捉えた流麗なショットと、精緻な金の花柄彫刻で装飾された透明感のあるアクリル製リップスティック容器を映す極端なマクロのクローズアップの間を、滑らかに切り替えていく。きらめく金色のダスト粒子、魔法のようなグリッター、そして発光する流体の液体ゴールドのリボンが、製品の周囲を滑らかに渦巻く。シーンの最後は、きらめくチューリップに囲まれた反射するゴールドミラーのテーブルの上に立つイエローリップスティックを捉えた、ヒロイックなヒーローショットで締めくくられる。フォトリアル、8K解像度、ハイエンドなビューティー広告の美学、ソフトなシネマティックライティング、温かみのあるゴールドのカラーパレット、35mmレンズ風、超高精細、シームレスな60fpsモーション。
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084479364792827905/img/7rXP_neDGIfk5RCh.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084479425710641551.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084479425710641551.mp4)**

**作者:** [Noor](https://x.com/noorlewisx) | **ソース:** [Link](https://x.com/noorlewisx/status/2084479425710641551) | **公開日:** 2026年8月4日

`Product Ad` `Beauty` `Photoreal` `Realistic World` `VFX` `Macro`

---

### FORMAT: 15s / 145 BPM / 15 SHOTS / beat-synced routine

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
FORMAT: 15s / 145 BPM / 15 SHOTS / beat-synced routine

SUBJECT: @[image1] < 画像を添付してください。

WARDROBE: 家ではオーバーサイズのスリープTシャツとラウンジショーツ。外では、テーラードブレザー、フィットしたシャツ、テーラードトラウザーズ、レースアップのドレスシューズ。

ENVIRONMENT: 小さなアパート、明るい冷蔵庫の光、雨に濡れた廊下、クロームのメトロ、清潔なオフィス、そして冷たい窓光の差すベッドルーム。すべてが艶やかで、生活感がある。

MOOD: 出勤遅刻のパニック、切れ味のある動き、息もつけない切迫感、そして最後に疲れ切ったため息。

MUSIC: 速いパーカッシブなエレクトロポップ

COLOR LOGIC: Hyperreal Pop Look

STYLE: Ultra-Realistic.

LOGIC RULE: すべてのショットを通して、衣装、小道具、ロケーション、アクションの連続性に論理的な一貫性を保つこと。

SHOT 1: ECU, 85mm push-in / 06:50 on the phone screen as it shakes on rumpled sheets. / SFX: alarm, sheet rustle.

SHOT 2: WS, 35mm handheld jolt / Rhythmic cut into him jolting upright through side light, throwing the blanket aside, and planting his feet on the floor in one rushed motion, still wearing an oversized sleep tee and lounge shorts. / SFX: mattress bounce, blanket whip, sharp breath.

SHOT 3: MCU, 50mm slide / Cut on action into splashing cold water onto his face at the sink, droplets catching the top light. / SFX: faucet rush, water slap.

SHOT 4: Insert shot, 85mm rack focus / Match cut into the toothbrush held at a natural forward brushing angle against the front teeth, hand relaxed and upright, mint foam reflected in the bathroom mirror. / SFX: bristle scrape, sink drip.

SHOT 5: Interior fridge view, 24mm wide / Object pass into the camera inside the fridge looking out as the door snaps open and his hand darts in, blue fridge light framing a hurried grab for breakfast ingredients. / SFX: fridge hum, bottle clink, shelf rattle.

SHOT 6: Insert shot, 50mm handheld / Rhythmic cut into eggs and toast hitting the pan under warm practical light. / SFX: butter sizzle, chop tap.

SHOT 7: MCU, centered 50mm push-in / Match cut into one rushed bite, a quick clock glance, and an immediate rise from the chair. / SFX: crunch, ceramic clink, chair scrape.

SHOT 8: Bird's-eye insert, 35mm overhead / Cut on action into dark socks snapping on. / SFX: fabric stretch, heel tap.

SHOT 9: MS, 35mm pivot / Camera wipe into a rushed outfit change as the sleep tee disappears beneath a fitted shirt and tailored blazer, followed by tailored trousers. He grabs his tote, keys, wallet, and transit card in one messy motion. / SFX: fabric whip, key jingle, zipper pull, bag rustle.

SHOT 10: Insert shot, 50mm overhead / Match cut into polished lace-up dress shoes slamming onto the floor as the laces yank tight in one impatient pull. / SFX: sole thump, lace tug, short breath.

SHOT 11: WS, 24mm parallax / Whip pan transition into him, now fully dressed in the tailored outfit, rushing through the apartment door into the corridor without breaking stride. / SFX: latch click, rapid footsteps, hallway air.

SHOT 12: MS to CU, 35mm glide into 85mm push-in / Sound bridge into the metro car interior as he grips the pole, shifts with the carriage sway, checks the passing station lights, and snaps a tense glance toward the closing doors, reflected chrome streaking around him and the city smearing outside the window. / SFX: rail clatter, carriage screech, door warning chime, tight breath.

SHOT 13: Insert to MCU, 50mm snap zoom / Smash cut to the office entrance as his access card hits the reader, the glass door unlocks, and he slips through quickly before dropping into his chair and opening the laptop. / SFX: badge beep, door click, laptop chime.

SHOT 14: OTS, 35mm handheld / Rhythmic cut into fingers racing across the keyboard, chat windows blinking, coffee by the trackpad, and notifications stacking faster than he clears them. / SFX: keyboard burst, notification ticks, mouse click.

SHOT 15: WS, 50mm pull-out / L-cut with a match from laptop close to apartment re-entry as the blazer drops, work clothes peel away, and he changes back into sleepwear.

--- THREAD CONTINUATION ---
[Thread 1] Prompt: FORMAT: 15s / 145 BPM / 15 SHOTS / beat-synced routine

SUBJECT: @[image1] < 画像を添付してください。

WARDROBE: 家ではオーバーサイズのスリープTシャツとラウンジショーツ。外では、テーラードブレザー、フィットしたシャツ、テーラードトラウザーズ、レースアップのドレスシューズ。

ENVIRONMENT: 小さなアパート、明るい冷蔵庫の光、雨に濡れた廊下、クロームのメトロ、清潔なオフィス、そして冷たい窓光の差すベッドルーム。すべてが艶やかで、生活感がある。

MOOD: 出勤遅刻のパニック、切れ味のある動き、息もつけない切迫感、そして最後に疲れ切ったため息。

MUSIC: 速いパーカッシブなエレクトロポップ

COLOR LOGIC: Hyperreal Pop Look

STYLE: Ultra-Realistic.

LOGIC RULE: すべてのショットを通して、衣装、小道具、ロケーション、アクションの連続性に論理的な一貫性を保つこと。

SHOT 1: ECU, 85mm push-in / 06:50 on the phone screen as it shakes on rumpled sheets. / SFX: alarm, sheet rustle.

SHOT 2: WS, 35mm handheld jolt / Rhythmic cut into him jolting upright through side light, throwing the blanket aside, and planting his feet on the floor in one rushed motion, still wearing an oversized sleep tee and lounge shorts. / SFX: mattress bounce, blanket whip, sharp breath.

SHOT 3: MCU, 50mm slide / Cut on action into splashing cold water onto his face at the sink, droplets catching the top light. / SFX: faucet rush, water slap.

SHOT 4: Insert shot, 85mm rack focus / Match cut into the toothbrush held at a natural forward brushing angle against the front teeth, hand relaxed and upright, mint foam reflected in the bathroom mirror. / SFX: bristle scrape, sink drip.

SHOT 5: Interior fridge view, 24mm wide / Object pass into the camera inside the fridge looking out as the door snaps open and his hand darts in, blue fridge light framing a hurried grab for breakfast ingredients. / SFX: fridge hum, bottle clink, shelf rattle.

SHOT 6: Insert shot, 50mm handheld / Rhythmic cut into eggs and toast hitting the pan under warm practical light. / SFX: butter sizzle, chop tap.

SHOT 7: MCU, centered 50mm push-in / Match cut into one rushed bite, a quick clock glance, and an immediate rise from the chair. / SFX: crunch, ceramic clink, chair scrape.

SHOT 8: Bird's-eye insert, 35mm overhead / Cut on action into dark socks snapping on. / SFX: fabric stretch, heel tap.

SHOT 9: MS, 35mm pivot / Camera wipe into a rushed outfit change as the sleep tee disappears beneath a fitted shirt and tailored blazer, followed by tailored trousers. He grabs his tote, keys, wallet, and transit card in one messy motion. / SFX: fabric whip, key jingle, zipper pull, bag rustle.

SHOT 10: Insert shot, 50mm overhead / Match cut into polished lace-up dress shoes slamming onto the floor as the laces yank tight in one impatient pull. / SFX: sole thump, lace tug, short breath.

SHOT 11: WS, 24mm parallax / Whip pan transition into him, now fully dressed in the tailored outfit, rushing through the apartment door into the corridor without breaking stride. / SFX: latch click, rapid footsteps, hallway air.

SHOT 12: MS to CU, 35mm glide into 85mm push-in / Sound bridge into the metro car interior as he grips the pole, shifts with the carriage sway, checks the passing station lights, and snaps a tense glance toward the
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084481042359234560/img/A9X6BVZgiDJJqicP.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084481138501034119.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084481138501034119.mp4)**

**作者:** [Duet | AI](https://x.com/Sheldon056) | **ソース:** [Link](https://x.com/Sheldon056/status/2084481138501034119) | **公開日:** 2026年8月4日

`Story` `Drama` `Photoreal` `Realistic World`

---

### Create a 15-second ultra-luxury skincare commercial in photorealistic cinematic…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
---
フォトリアルな cinematic スタイルで、15秒の超ラグジュアリーなスキンケアCMを作成する。冒頭は、透明感のある水滴がスローモーションで澄んだ青い水へ落ち、上品な波紋を広げるシーンから始める。高級感のあるガラス製のスキンケアクリームジャーが水面から優雅に立ち上がり、周囲には白い花々ときらめく水滴が浮かぶ。次に、自然な輝きを放つ美しい若い女性が、やわらかな笑みを浮かべながらクリームを顔にやさしく塗るシーンへ移行する。リアルな質感を備えた、うるおいに満ちた光沢のある肌を、黄金色の自然光で見せる。最後は、清潔感のあるパステルブルーの背景に水滴が一粒だけ静止しているカットで締めくくり、純粋さを象徴する。ミニマルなラグジュアリー美学、柔らかな反射、マクロのビューティーショット、スローモーションの水シミュレーション、ボリューメトリックライティング、浅い被写界深度、8K HDR、滑らかなカメラワーク、プレミアムなビューティー広告、ウォーターマークなし、ロゴなし、テキストなし。
---
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084482970732384256/img/Zf28UpI6tFa95wCv.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084483345350889723.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084483345350889723.mp4)**

**作者:** [ayzalnoor](https://x.com/ayzalnooor24521) | **ソース:** [Link](https://x.com/ayzalnooor24521/status/2084483345350889723) | **公開日:** 2026年8月4日

`Product Ad` `Beauty` `Photoreal` `Realistic World` `Slow-Mo` `Macro` `VFX`

---

### 夏フェスでライブしてる動画作って。音楽はお任せで生成。

![日本語](https://img.shields.io/badge/lang-日本語-green)

#### 📝 プロンプト

```
夏フェスでライブしてる動画作って。音楽はお任せで生成。
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084336046238760960/img/TA7oI2FfVCvEFJ2m.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084484939148611589.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084484939148611589.mp4)**

**作者:** [俺の娘たち / プロンプトの人](https://x.com/oreno_musume) | **ソース:** [Link](https://x.com/oreno_musume/status/2084484939148611589) | **公開日:** 2026年8月4日

`Music & Dance` `Concert` `Photoreal` `Realistic World`

---

### Create a 15 second cinematic desert survival sequence in 16:9 with grounded…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
16:9で、地に足のついた実写的リアリズム、自然な身体の動き、正確な砂ぼこり、説得力のある車両サスペンション、控えめなフィルムグレイン、抑えたカラーグレーディング、そしてシームレスなショットの連続性を備えた、15秒のシネマティックな砂漠サバイバルシーケンスを作成する。舞台は、乾いた茶色い山々に囲まれた、太陽に白く焼かれた盆地で、頭上には澄んだシアンの空が広がっている。まばらな低木、ひび割れたアスファルト、色あせた黄色の道路線、陽炎、そして風に舞う砂礫が、風景に過酷で現実的な質感を与える。

0〜3秒: 40ミリレンズを使用し、空っぽの高速道路の中央から、低い位置のセンター構図のワイドショットで始める。古びた青いキャンピングバンが遠方から近づき、不自然な加速なしに着実に大きくなっていく。カメラはほぼ固定し、わずかな風の揺れだけを残す。強い午後の日差しが、くっきりとした影とフロントガラスの暖かな反射を生む。バンの内部へカットし、短いフロントマウントショットに切り替える。疲れた中年女性が運転し、ひげを生やした男が道路を見つめている。さらに、毛布、吊り下げられた調理器具、地図、手作りの装飾品に囲まれた2人の若い乗客と、薄汚れたクリーム色の犬が見える。穏やかな路面振動、不完全なフォーカスブリージング、埃っぽいガラス越しに差し込む日差し、そして信じられる緊張した視線を使う。

3〜8秒: 休眠中の異星生物がアスファルト上に散らばる、道路脇の極端に低いアングルへカットする。それらは、ひび割れた殻、革のような組織、絡み合った根のような繊維、乾いた泥、埋め込まれた石から成る、巨大な砂漠の節足動物のように見える。バンがその背後を通り過ぎ、リアルな車輪の動きと、砂ぼこりや緩んだ繊維を巻き上げる圧力波を生む。バンが画面外へ出た後も、そのままホールドする。前景で小さな爪がぴくりと動き、やがて巨大な個体の1体がゆっくりと装甲の頭部を持ち上げる。その重みで関節のある脚が押しつぶされ、砂利が下でずれ、体から砂が落ち、湿った口が抑えた動物的な挙動で開く。生物が立ち上がるにつれて、恐怖をにじませた控えめなカメラの押し寄りを入れ、支配的なローアングルのシルエットへと導く。

8〜12秒: 草の生えた砂漠の平原を見渡す、遠景の高所ショットへハードカットする。屈強な男性の旅人が、4枚の重い花びらのような形をした巨大な黒い有機的パラシュートの下へ降下していく。キャノピーは半透明の膜で、ところどころに不規則な穴があり、傷ついた血管のような筋と、ハーネスにつながる長い弾力のある触手が伸びている。風がそれを非対称に歪ませる。彼はバランスを取ろうと腕を振り、片足は裸足でもう片方は擦り切れたブーツを履いており、衣服は正確な空気抵抗でひるがえる。山々を圧縮して見せ、降下を奇妙なほど優雅に感じさせる長玉レンズを使う。

12〜15秒: 地面すれすれの高速な横移動トラッキングショットへ切り替える。旅人は低木の上をかすめ、いったん茂みの後ろに消えてから再び現れる。彼の脚はパニックで自転車をこぐように動き、身体は張力の下で自然に揺れ、影が起伏のある地面の上を疾走する。不器用に着地し、2歩よろめいたあと、背後と周囲で巨大な黒いキャノピーが重い布の物理挙動、閉じ込められた空気、転がる砂ぼこり、はためく触手とともに崩れ落ちるのを受け止める。最後は、砂ぼこりが落ち着く中でしゃがみ込む彼の姿で終え、遠くの生物が低く反響する咆哮を放つ。

音楽とサウンド: まばらな弓弾きの低音、乾いた手打ちパーカッション、かすかな刻みのパルスから始まる、オリジナルの緊張感あるシネマティック・スコアを使用する。生物が目覚める場面では、上昇していく歪んだストリングスを加え、降下中は切迫感のあるトライバルドラムへ移行する。最後は突然の音楽の落下、深い低音の一撃、風、砂利、キャノピーのはためき、サスペンションの軋み、遠くの生物のクリック音、そして最後の咆哮で締めくくる。セリフなし、テキストなし、字幕なし、ロゴなし、ウォーターマークなし、光沢のある人工的な表面なし、ゴムのような動きなし、重複した手足なし、浮遊物なし、不可能なカメラ移動なし。
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084319995409158144/img/ibXihVKVD5bSQCNC.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084489756121891024.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084489756121891024.mp4)**

**作者:** [BMX](https://x.com/bmx_ai13) | **ソース:** [Link](https://x.com/bmx_ai13/status/2084489756121891024) | **公開日:** 2026年8月4日

`Horror` `Monster Chase` `Photoreal` `Sci-Fi` `VFX`

---

### Create a 16-panel cinematic storyboard grid for Phase 1 (0-15s) of a…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
---
第1フェーズ（0〜15秒）の地下生物格闘ビデオ用、16:9横長ストーリーボードシートの16コマ・シネマティック・ストーリーボードグリッドを作成する。

ストーリーボードのアートスタイル：
白黒のフォトリアルなスケッチ、リアルなクリーチャー比率、ダイナミックなアクション構図、シルエットの視認性を重視。選択的に色付き注釈を使用する：
- Gearの動きにはシアンの矢印、
- Blind-Chasersの動きには赤い矢印、
- ナトリウム灯の発光と工業用スパークの爆発には黄色のマーク、
- カメラの追従には緑の矢印。
タイムスタンプなし、セリフなし、ロゴなし、ウォーターマークなし。

シーン：
蒸気噴出口、金属製の通路、ナトリウム灯がある、薄暗い地下工業金庫。

キャラクター：
Gear（装甲をまとったセンザンコウ戦士）とBlind-Chasers（盲目の獣）。

パネル1：
アクションの途中から開始。暗い工業用金庫のハブ、濃い蒸気が渦巻き、遠くに薄暗いオレンジ色のナトリウム灯。

パネル2：
ハイアングルショット。中央に警戒態勢で立つGearを見下ろす。二本の骨刃は無造作に両脇に構えている。

パネル3：
微細な振動。濡れた金属通路の小さな小石のクローズアップ。重低音の機械音が響き、石が震えている。

パネル4：
SWARM AMBUSH BEAT。複数の淡色のBlind-Chaserの獣が、頭上の換気パイプから同時に落下する。

パネル5：
Gearが即座に低いしゃがみ姿勢に入り、装甲の頭部を鱗状の背骨の下へ丸め込む。

パネル6：
手元のクローズアップ。Gearが二本の骨刃を打ち合わせ、完全に身を丸めながらユーティリティベルトに固定する。

パネル7：
EXPLOSIVE SHELL-DRIFT BEAT。Gearが爆発的な速度で加速し、*Shell-Drifting* しながらボウリング球のように濡れた金属床を滑走、しぶきを上げる。

パネル8：
追従カメラショット。シェルロールを追いながら、追跡する獣たちを押し流し、ダイナミックな弧を描いて散らす。

パネル9：
Gearがドリフト中に身をほどき、遠心力を利用して、正確で地に足のついた *John Wick* スタイルのタクティカルスライドを繰り出す。

パネル10：
Blind-Chaser 2が影の中から飛びかかる爪の突進を放つ。

パネル11：
Gearが上半身を後方へ反らし、爪の一閃を紙一重でかわしながら、一本の骨刃を抜く。

パネル12：
クローズアップの一撃。Gearが骨刃をBlind-Chaserの淡い胸部へ突き上げ、強烈な運動衝撃を生む。

パネル13：
巨大な工業機械ハブで赤い警告灯が点滅し始め、蒸気がシューッという音とともに放出される。

パネル14：
さらに3体の追跡者がGearを取り囲み、狭い金属製キャットウォーク上で逃げ道を塞ぐ。

パネル15：
Kiraが低い装甲の飛びかかり姿勢で構え、筋肉を緊張させ、新たな脅威に視線を固定する。

パネル16：
第1フェーズの最終フリーズフレーム。残る群れが同期した攻撃を仕掛け、空中での跳躍が警告灯の閃光と冷たい青い蒸気の下で静止している。

--- QUOTED TWEET ---
Apex vs. Apex
@Hailuo_AI

超高層ビルの縁に追い詰められた、洗練されたバイオエンジニアリングの黒いハンター。相手は翼を持つガーゴイルの追跡者の群れ。 

爆発的な加速、即座のカウンター、そしてビルの側面を一気に落下する息をのむような空中ダイブ。 

SFクリーチャースリラーのダイナミクスが、究極の速度域まで押し上げられると何が起こるのかを体験せよ。

--- THREAD CONTINUATION ---
[Thread 1] @Hailuo_AI シート1: GEAR（装甲をまとったセンザンコウ戦士） https://t.co/a8RXEPVlPI

[Thread 2] @Hailuo_AI シート2: THE BLIND-CHASERS（地下の群れ） https://t.co/Ula2noy6EK

[Thread 3] ストーリーボード Phase 1 and 2

第1フェーズ（0〜15秒）の地下生物格闘ビデオ用、16:9横長ストーリーボードシートの16コマ・シネマティック・ストーリーボードグリッドを作成する。

ストーリーボードのアートスタイル：
白黒のフォトリアルなスケッチ、リアルなクリーチャー比率、ダイナミックなアクション構図、シルエットの視認性を重視。選択的に色付き注釈を使用する：
- Gearの動きにはシアンの矢印、
- Blind-Chasersの動きには赤い矢印、
- ナトリウム灯の発光と工業用スパークの爆発には黄色のマーク、
- カメラの追従には緑の矢印。
タイムスタンプなし、セリフなし、ロゴなし、ウォーターマークなし。

シーン：
蒸気噴出口、金属製の通路、ナトリウム灯がある、薄暗い地下工業金庫。

キャラクター：
Gear（装甲をまとったセンザンコウ戦士）とBlind-Chasers（盲目の獣）。

パネル1：
アクションの途中から開始。暗い工業用金庫のハブ、濃い蒸気が渦巻き、遠くに薄暗いオレンジ色のナトリウム灯。

パネル2：
ハイアングルショット。中央に警戒態勢で立つGearを見下ろす。二本の骨刃は無造作に両脇に構えている。

パネル3：
微細な振動。濡れた金属通路の小さな小石のクローズアップ。重低音の機械音が響き、石が震えている。

パネル4：
SWARM AMBUSH BEAT。複数の淡色のBlind-Chaserの獣が、頭上の換気パイプから同時に落下する。

パネル5：
Gearが即座に低いしゃがみ姿勢に入り、装甲の頭部を鱗状の背骨の下へ丸め込む。

パネル6：
手元のクローズアップ。Gearが二本の骨刃を打ち合わせ、完全に身を丸めながらユーティリティベルトに固定する。

パネル7：
EXPLOSIVE SHELL-DRIFT BEAT。Gearが爆発的な速度で加速し、*Shell-Drifting* しながらボウリング球のように濡れた金属床を滑走、しぶきを上げる。

パネル8：
追従カメラショット。シェルロールを追いながら、追跡する獣たちを押し流し、ダイナミックな弧を描いて散らす。

パネル9：
Gearがドリフト中に身をほどき、遠心力を利用して、正確
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084490104920252416/img/NEaHRRBl6QYryheq.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084490366225379606.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084490366225379606.mp4)**

**作者:** [Gilbert Odera | Your AI Plug](https://x.com/yourPlugAI) | **ソース:** [Link](https://x.com/yourPlugAI/status/2084490366225379606) | **公開日:** 2026年8月4日

`Action` `Wuxia` `Hand-drawn` `Sci-Fi` `Creative Asset`

---

### Montage, 7-shot handheld phone vlog, photorealistic home-video style. Slight…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
---
モンタージュ、7ショットの手持ちスマホVlog、フォトリアルなホームビデオ風。わずかな手ブレ、自然なフレーミング、明るい夏の日差し、細かなフィルムグレイン。

ある女性（画像）が、伝統的な韓屋の中庭レストランで一人でムルネンミョンを食べている。（画像）は彼女の顔と髪型のみを提供する。服装：肩が完全に隠れる淡いミント色のリネン半袖シャツ、トップボタンは留める、ゆるくタックイン。彼女は終始、カメラに向かって同じ側を向いて座り続ける。他の顔は一切映らない。フレームに入るのは店員の手だけ。

テーブルには、氷の入ったステンレス製のムルネンミョンの器（そば粉麺、シャーベット状のスープ、卵、きゅうり、梨、氷）、冷水ピッチャー、からし、酢、ナプキン、箸が置かれている。韓屋の梁、瓦屋根、鉢植え、木漏れ日、遠くの蝉の声が、涼しげな夏の雰囲気を作り出す。

**ショット**
1. 器が運ばれてくる。彼女は笑って言う：「와 시원하겠다.」
2. 真上から：店員がハサミで麺を切る。
3. 彼女が麺をすすり、身震いして言う：「으으 차가워~」
4. 梨と卵入りのスープを味わって言う：「Brain freeze, worth it.」
5. 水を注いで飲む。
6. 卵を食べ、うなずいて言う：「이 집 진짜 잘하네.」
7. 食べ終えて、風が通り過ぎる中、目を閉じて背もたれにもたれる。

指定された箇所のみ自然な韓国語のセリフ。ライブの環境音のみ：器、ハサミ、スープ、すすり音、水を注ぐ音、蝉の声、中庭の環境音。音楽、字幕、ロゴ、ウォーターマーク、重複した参照画像はなし。
---
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084501977883619328/img/jjuiQv4zG9soG42w.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084502013971439965.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084502013971439965.mp4)**

**作者:** [WasifAI](https://x.com/doctorwasif) | **ソース:** [Link](https://x.com/doctorwasif/status/2084502013971439965) | **公開日:** 2026年8月4日

`Food` `Cooking` `Portrait & Fashion` `Travel Vlog` `Photoreal` `Realistic World` `POV` `ASMR`

---

### A cinematic 60-second slice-of-life journey following a young Japanese woman…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
---
田舎暮らしの穏やかなリズムに寄り添いながら、若い日本人女性の一日を追う、シネマティックな60秒のスライス・オブ・ライフの旅。彼女は伝統的な家を出て、あたたかな朝の光の中へ歩み出し、青々とした水田のそばを散策し、静かな橋の上で立ち止まって鯉を眺め、季節の野花を束ねた花束を摘む。やがて彼女の一日は、桜の木の下でスケッチをしたり、どこか懐かしい踏切で列車を待ったり、親しげな隣人に挨拶したり、谷を見下ろす丘でひと休みしたり、きらめく川辺を裸足で歩いたりしながら続き、最後は静かな町の上に広がる息をのむような夕焼けで締めくくられる。滑らかなシネマティックなカメラワーク、本物の日本の田園風景、自然な環境音、感情に訴えるストーリーテリング、あたたかなゴールデンアワーのライティング、フォトリアルな質感、控えめなフィルムグレイン、没入感のある旅日記の美学、4K HDR、シームレスなキャラクターの一貫性、テキストなし、ロゴなし。
---
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084494236591009793/img/TiNTespIC7C1KuU2.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084503336078938154.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084503336078938154.mp4)**

**作者:** [Nawal](https://x.com/nawalsehar) | **ソース:** [Link](https://x.com/nawalsehar/status/2084503336078938154) | **公開日:** 2026年8月4日

`Portrait & Fashion` `Travel Vlog` `Photoreal` `Realistic World`

---

### A cinematic 15-second ultra-realistic office morning routine following a young…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
若いプロフェッショナルな女性が、目覚ましが鳴る瞬間から出社するまでを追う、シネマティックな15秒の超リアルなオフィス朝のルーティン。彼女は柔らかな朝日で目を覚まし、モダンなバスルームで身支度を整え、スマートなオフィスコーデを丁寧に選び、鏡の前で仕上げを加え、必需品を手に取り、自信を持って現代的なオフィスビルへ向かう。滑らかなシネマティックなトラッキングショット、上品なクローズアップ、リアルな表情、自然な身体の動き、上質なワードローブのディテール、温かみのある金色の朝の光、物理的に正確な反射、さりげないフィルムグレイン、ARRI Alexa 35の美学、HDR、シームレスなキャラクターの一貫性、プレミアムなライフスタイル広告クオリティ、テキストなし、ロゴなし。
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084504568180973568/img/zz4vocffNhH3pgEP.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084505251336663287.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084505251336663287.mp4)**

**作者:** [Ali](https://x.com/aiwithaly) | **ソース:** [Link](https://x.com/aiwithaly/status/2084505251336663287) | **公開日:** 2026年8月4日

`Portrait & Fashion` `GRWM` `Photoreal` `Realistic World`

---

### Shot count: 1 | Duration: 10s | Aspect ratio: 9:16

![日本語](https://img.shields.io/badge/lang-日本語-green)

#### 📝 プロンプト

```
Shot count: 1 | Duration: 10s | Aspect ratio: 9:16
Use @Image1 as the first frame and @Image2 as the last frame.

A tall crystal wine glass full of vivid orange soda with two orange slices,
on a black marble table in a bright opulent marble restaurant at night.

0-2s: a woman's hand nudges the glass to the LEFT very slowly, over a short
distance — about one foot-width — until half of its round foot hangs out past
the table edge with nothing underneath.
Do not slide it a long distance. The glass stays perfectly upright and vertical
the whole time; it never leans while the foot is supported.
The fingertips stay in contact with the foot and travel with it.
2-2.5s: with its centre of gravity now past the edge, the glass PIVOTS ON THE
TABLE EDGE like a lever — slow at first, then rotating faster as it goes over.
The rim swings down; the foot is the last part to leave the marble.
2.5-6.5s: slow motion. The glass falls rim-down, still rotating, accelerating
under gravity. Only once it has tilted past 45 degrees does the soda pour out
over the LOW side of the rim. Liquid escapes ONLY through the open circular rim
at the top of the bowl — the bowl walls, the stem and the foot are solid glass
with no opening. In the air the spilled soda becomes separate falling blobs and
sheets, lagging slightly behind the glass, never a ribbon attached to it.
The two orange slices tumble out of the rim and fall too.
6.5-7s: real speed returns instantly. The glass smashes on the white marble.
The bowl shatters into sharp crystal shards. The stem with its round foot snaps
off, tumbles once, and comes to rest lying flat on its side beside the spill.
7-10s: the orange pool is completely still. Hold, motionless.

Camera: slowly follows the falling glass down and to the left.
Lighting: bright warm amber, strong reflections on the polished floor.
Audio: quiet room tone; a low stretched tone through the slow motion; one sharp
loud crystal shatter at 6.5s; then near silence. No music.

Avoid: sliding the glass a long distance, the glass leaning or tipping while
its foot is fully supported on the table, tipping over in place without
reaching the edge, liquid escaping through the side of the bowl, liquid from
the stem or the foot, a liquid ribbon attached to the glass, the stem standing
upright, any part of the glass fading away, ice cubes, three orange slices,
floating, hovering, jitter, distortion, deformation, blur, extra on-screen text.
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084509172633350144/img/kokV4zTTGJae-2Ay.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084511259702251704.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084511259702251704.mp4)**

**作者:** [タナベ | AI動画 × マーケティング](https://x.com/tanabe_fragm) | **ソース:** [Link](https://x.com/tanabe_fragm/status/2084511259702251704) | **公開日:** 2026年8月4日

`Food` `Drinks` `Photoreal` `Realistic World` `Slow-Mo`

---

### The little girl sleeps peacefully in bed as warm golden sunrise slowly…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
---
小さな女の子はベッドで安らかに眠っており、暖かな黄金色の朝日がゆっくりと部屋を明るくしていく。やわらかな朝のそよ風がカーテンをそっと揺らす。窓からは、目に見える浮遊する埃の粒子とともに、日差しが差し込んでいる。彼女の髪は風に合わせてかすかに揺れ、自然な呼吸をしている。毛布は呼吸に合わせてわずかに上下する。オレンジ色の子猫はゆっくりとまばたきをし、しっぽをひと振りする。室内の植物も風にやさしく揺れる。カメラは眠る少女に向かって、極めてゆっくりと cinematic な dolly-in を行い、穏やかで夢のような雰囲気を保つ。自然な動きのみで、急な動きはない。暖かい cinematic color grading、Pixar-quality animation、ultra-realistic global illumination、volumetric lighting、shallow depth of field、smooth camera motion、16:9、4K、masterpiece。
---
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084512761560928256/img/V8ICNrGpEZnqdZom.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084512926740910560.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084512926740910560.mp4)**

**作者:** [Sidra](https://x.com/kakarPathan_) | **ソース:** [Link](https://x.com/kakarPathan_/status/2084512926740910560) | **公開日:** 2026年8月4日

`Story` `Heartwarming` `Animals` `Pets` `3D Animation` `Realistic World` `VFX` `Slow-Mo` `Macro`

---

### IMPORTANT CHARACTER CONSISTENCY LOCK:

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
**重要なキャラクター一貫性のロック：**

提供されたキャラクターシートのみを唯一の参照として使用してください。

以下を完全に同一に保ってください：

顔  
髪型  
目の色  
衣装  
アクセサリー  
プロポーション  
アニメーションスタイル  
カラーパレット

Lyra、Kael、そしてすべてのエルフは、どのシーンでもまったく同じ見た目でなければなりません。

ショットごとにキャラクターを再デザインしないでください。

動画全体は、別々のクリップではなく、ひとつながりのアニメーション長編映画のように感じられる必要があります。

**STYLE**

クラシックな日本アニメの感情豊かなストーリーテリングに着想を得た、手描き風のファンタジー・アニメ映画を作成してください。

**Visual style:**

水彩背景  
表情豊かなキャラクターアニメーション  
柔らかなシネマティック照明  
マジカルリアリズム  
穏やかなカメラワーク  
感情のこもった表情  
シーン間の滑らかなトランジション  

**SCENE 1 — "The World Beyond The Trees" (0:00-0:20)

**Visual:**

果てしなく広がる魔法の森の上空からのショット。

古代の木々が空へと伸びている。  
光る花が咲いている。  
小さな魔法の精霊たちが空を飛び交う。  
カメラはゆっくりとエルフの王国へ向かって進む。  
Lyraが森の中を歩いている。

彼女は古代の木に触れる。

木が光る。

Lyra（静かに）:  
「森はすべてを覚えている……この木々の下を歩いた、あらゆる魂を。」

彼女は遠くの山々を見つめる。

Lyra:  
「でも、私たちがまだ理解したことのない世界がひとつある……人間の世界。」

**SCENE 2 — "The Boy Who Found Magic" (0:20-0:40)

**Visual:**

山々に囲まれた静かな人間の村。  
Kaelがスケッチブックを抱えてひとりで歩いている。

彼は風景を描く。

古代遺跡の中で、不思議に光る種を見つける。

彼はそれに触れる。

魔法が目覚める。

Kael（ささやくように）:  
「君は、何者なんだ？」

その種がエルフの森の幻影を映し出す。

Kaelは驚いた表情を浮かべる。

Kael:  
「誰にも知られていない世界……」

ポータルが開く。

**SCENE 3 — "The First Meeting" (0:40-1:00)

**Visual:**

Kaelがエルフの王国へ入る。

エルフたちが彼を取り囲む。  
守護者たちは武器を構えている。

Lyraが前へ進み出る。

沈黙。

彼らは見つめ合う。

光る葉が二人の間に落ちる。

Elf Guardian:  
「人間がここに属することはできない。」

LyraはKaelを見る。

Lyra:  
「なら、なぜ森は彼をここへ導いたの？」

Kaelは光る種を見せる。

Kael:  
「僕がこの場所を選んだんじゃない……この場所が僕を選んだんだ。」

Lyraが種に手を伸ばす。

魔法が反応する。

**SCENE 4 — "Two Worlds, One Heart" (1:00-1:25)

感情的なモンタージュと会話

LyraがKaelに森について教える。  
Lyra:  
「すべての木には物語がある。すべての川には記憶がある。」

Kaelは微笑む。

Kael:  
「人間はすぐに忘れてしまう……だからこそ、物語が必要なんだと思う。」

Scenes:

光る森の中を歩く

エルフの祭りで食べ物を分け合う

お互いを描き合う

魔法の湖のそばで星を眺める

雲の上を飛ぶ

LyraはKaelの絵を通して人間の世界を見る。  
Lyra:  
「あなたの世界は美しい。」

Kaelは微笑む。

Kael:  
「君とそれを分かち合える人が、やっとできたからだよ。」

**SCENE 5 — "The Rule Of The Elves" (1:25-1:45)

エルフの評議会が二人を見つける。

暗い雲が森を覆う。  
古代の木が光を失い始める。  
長老のエルフが語る：  
Elder:  
「人間は一瞬を生き、エルフは何世紀も生きる。この道が交わるべきではなかったのだ。」

KaelはLyraを見る。

Kael:  
「変える価値のあるものだって、あるはずだ。」

Lyraは涙をこらえる。  
Lyra:  
「私は何百年も、何か魔法のようなものを探していた……私を見つけたのは、人間の心だった。」

ポータルが閉じ始める。

**SCENE 6 — "The Choice" (1:45-2:00)

光る種が真実を明かす。

人間とエルフは、かつてつながっていた。

愛は決して禁じられていなかった。

恐れが分断を生んだのだ。

LyraとKaelは古代の木に手を置く。

銀と金の魔法が融合する。

森が花開く。  
人間とエルフが再びひとつになる。

**Final shot:**

LyraとKaelが古代の木の下に立っている。  
Kael:  
「僕たちの世界は、これを覚えていると思う？」

Lyraは微笑む。

Lyra:  
「いいえ……でも、森は覚えているわ。」

カメラが魔法の王国の上へと上昇する。

銀と金の葉が空へ舞い上がる。

**END TITLE:**  
「世界のあいだに生まれる心もある。」

--- THREAD CONTINUATION ---  
[Thread 1] Character sheets: https://t.co/J90lUOLihI  
---
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084522805031514112/img/u8PR4Uvk-_RDg8XV.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084523346771714331.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084523346771714331.mp4)**

**作者:** [Caden Flux](https://x.com/Caden_Flux) | **ソース:** [Link](https://x.com/Caden_Flux/status/2084523346771714331) | **公開日:** 2026年8月4日

`Story` `Heartwarming` `Hand-drawn` `Fantasy` `FPV & Aerial`

---

### 30-Second Video Prompt — "Jessy: Rooftop Run"

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
30秒動画プロンプト — 「Jessy: Rooftop Run」

PART 1 — 0:00–0:15

Cut 1 (0–3s): 静止した固定ショットで、参照の冒頭とまったく同じ構図 — Jessy は居心地のいい散らかった寝室の木製の窓枠に座り、霞んだNYCのスカイラインを見つめている。彼女は「All right」と言い、頭をこちらに向けてカメラをまっすぐ見つめ、指を鳴らして「Let's do this one more time.」と言う。ヘッドホンを耳まで引き上げ、自然な動きで後ろに体を倒し、そのまま窓の外へ落ち、フレーム外へ滑らかに消えていく。

Cut 2 (3–4s): カメラが下の路上レベルから、落下中の彼女を捉える — 彼女は空中で素早く体を起こし、鋭く集中した表情を見せ、手首をひと振りして上方へウェブを放つ。するとカメラは引いて、後方追従のワイドなドローンショットへ移行し、ウェブが彼女を落下から引き上げる。

Cut 3 (4–7s): ブラウンストーンと非常階段が並ぶ住宅街のNYCストリートのワイドショット。彼女は地面からわずか3メートルの低空をスイングし、両腕を前に伸ばしてウェブを握り、脚はそろえて後方へ流し、背筋はまっすぐ。弧の最下点で足先が駐車中の車のルーフをかすめる — その接触を使って進行方向を切り替え、思わず短い驚きの笑いが漏れる。カメラは40度、鋭くバンクする。

Cut 4 (7–10s): スイングの頂点で彼女はウェブを手放し、腕を大きく開いて一瞬の無重力状態に入る — そして次のスイングに移る代わりに、ブラウンストーンの壁面をまっすぐ駆け上がる。体をレンガ壁に45度傾け、実際のランニングで4〜5歩、顎を引き締めて決意の表情。両足を踏み込み、膝を深く曲げてから壁を蹴り出し、新しいウェブを広い交差点の向こうへ放つ。

Cut 5 (10–15s): スイングが彼女を強く横へ引き、カメラは60度ロールする。彼女は黄色いタクシーがひしめく通りの上を、地面からわずか2メートルの低さで滑るように進み、体は流線形、腕と脚は矢のように後方へ流れる。ウェブを手放して全力疾走で着地し、腕を力強く振る — そして配送トラックのサイドミラーの下を、片脚をたたみ、片手で地面を支えながら、スピードを落とさず低いコントロールされたスライドでくぐり抜け、そのまま勢いを保って立ち上がり、アドレナリンに満ちた笑みを浮かべる。（PART 1 終了。）

PART 2 — 0:15–0:30

Cut 6 (15–17s): 新しいアングル — 彼女は走行中のタクシーの側面に片足を置き、屋根をたった一歩の爆発的な踏み込みで蹴って、背の高いビルへまっすぐウェブを放ち、上空へロケットのように跳び上がる。完全に抑えきれない喜びで「WOOHOO!」と叫び、口を大きく開け、頭を後ろに倒す。

Cut 7 (17–21s): ドローンが彼女とともに上昇する。弧の頂点で彼女はウェブを手放し、体は一瞬無重力となり、腕を開く — そして空中でひねり、屋上の給水塔の金属フレームにスピニング・ヒールストライクを決め、落下する代わりに勢いを横へと切り替える。鋭く集中した力みのうなり、次の進行方向に視線を固定。

Cut 8 (21–25s): 再びストリートレベル — 彼女は非常階段を下り、手で各レールをつかんで速度をコントロールし、スニーカーが金属の段をリズミカルに踏み鳴らす。スカーフが後方で激しくなびく。最下部で彼女は低いフェンスを一切スピードを落とさずに一連の動きで飛び越え、周囲に鳩の群れが一斉に散るのを見て笑う。

Cut 9 (25–30s): 屋上レベルでの最後のワイドショット — 彼女は最後のウェブを放ち、開けた空へ向かってスイングし、頂点で手を放す。腕を開き、体を後ろへ反らせ、息をのむ一瞬、完全に静止する。ゴールデンアワーの空、暖かなオレンジピンクの光、ドラマチックな逆光の雲。彼女は輝く空を背景に小さく中央に浮かび、下には屋根と給水塔が広がり、目を閉じ、顔いっぱいに純粋な自由をたたえながら、再び落ち始める。（終了。）

--- THREAD CONTINUATION ---
[Thread 1] @RoboNeo_ai Try it yourself: https://t.co/DZwtqgrADZ
---
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084528547478310913/img/3QNOr3GrSm9R2k0R.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084528879574900870.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084528879574900870.mp4)**

**作者:** [Jessica Collins](https://x.com/AIwithJessica) | **ソース:** [Link](https://x.com/AIwithJessica/status/2084528879574900870) | **公開日:** 2026年8月4日

`Action` `Chase` `Photoreal` `Realistic World` `VFX` `FPV & Aerial`

---

### Hand painted 2.5D urban anime short

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
手描きの2.5D都市アニメ短編  
テクスチャペインティング  
3Dはベース構造のみ  
振動するグリースペンシルの輪郭線  
ラフなブラシエッジ  
緊張感があり慎重な雰囲気  
強いインパクトのあるフレーム  
ダイナミックなカメラアングル  
素早く地に足のついたアクション  
クリーンな3Dの仕上げは不要  

CHARACTER CONTINUITY: image 1

VEHICLE CONTINUITY: Image 2  
同じ車を通して維持すること。ロゴや文字は変更しない。

Location:

0:00-0:05  
低いアングルのトラッキングショットで、ドライバーが自信たっぷりに駐車中の車へ向かって歩く。手がドアハンドルを引き、乗り込み、スタートボタンを押すクローズアップ。排気口から厚くスタイライズされた灰色の煙が噴き出すマクロショット。滑らかなシネマティックなトランジション。  
Sound: start up 4.2-liter V8 engine  
0:05-0:11  
低いアングルのトラッキングショットで、アスファルト上でタイヤが空転して煙を上げる。暗闇の中でヘッドライトが点灯する様子へウィップパン。彼女がハリウッドのホテル駐車場から車を出す。  
Sound: a roaring 4.2-liter V8 engine  
0:11-0:15  
メタリックなオープンゲート式シフターのギアが引かれる様子へのクラッシュズーム。スピードメーターの針が上がっていくクイックカット。車の上を滑空しながら交通の流れを切り抜けるドローンショット  

--- THREAD CONTINUATION ---  
[Thread 1] Prompt ⬇️

手描きの2.5D都市アニメ短編  
テクスチャペインティング  
3Dはベース構造のみ  
振動するグリースペンシルの輪郭線  
ラフなブラシエッジ  
緊張感があり慎重な雰囲気  
強いインパクトのあるフレーム  
ダイナミックなカメラアングル  
素早く地に足のついたアクション  
クリーンな3Dの仕上げは不要  

CHARACTER CONTINUITY: image 1

VEHICLE CONTINUITY: Image 2  
同じ車を通して維持すること。ロゴや文字は変更しない。

Location:

0:00-0:05  
低いアングルのトラッキングショットで、ドライバーが自信たっぷりに駐車中の車へ向かって歩く。手がドアハンドルを引き、乗り込み、スタートボタンを押すクローズアップ。排気口から厚くスタイライズされた灰色の煙が噴き出すマクロショット。滑らかなシネマティックなトランジション。  
Sound: start up 4.2-liter V8 engine  
0:05-0:11  
低いアングルのトラッキングショットで、アスファルト上でタイヤが空転して煙を上げる。暗闇の中でヘッドライトが点灯する様子へウィップパン。彼女がハリウッドのホテル駐車場から車を出す。  
Sound: a roaring 4.2-liter V8 engine  
0:11-0:15  
メタリックなオープンゲート式シフターのギアが引かれる様子へのクラッシュズーム。スピードメーターの針が上がっていくクイックカット。車の上を滑空しながら交通の流れを切り抜けるドローンショット
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084529454454620160/img/i8ALwonwduLrFhoH.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084529538877518069.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084529538877518069.mp4)**

**作者:** [Mike McLaughlin](https://x.com/Michael73320774) | **ソース:** [Link](https://x.com/Michael73320774/status/2084529538877518069) | **公開日:** 2026年8月4日

`Auto` `POV Drive` `Anime 2D` `Realistic World` `Macro` `FPV & Aerial`

---

### Create a 15-second ultra-realistic cinematic beverage commercial featuring a…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
15秒の超リアルなシネマティック飲料CMを制作してください。神秘的でプレミアムな、ほのかに発光する琥珀色のドリンクが登場し、飲んだ人に時間を操る力を与えるという設定です。シネマティックなストーリーテリング、プレミアムな商品演出、リアルな人間の動き、説得力のある物理挙動、ドラマチックなライティング、そしてシームレスな時間操作のトランジションに重点を置いてください。

0:00–0:04 | 時間が止まる

洗練された若い男性が、ゴールデンアワーの高級感あるモダンな都市カフェの中でひとり立っている。突然、彼の周囲のすべてが凍りつく — 人々の動きが止まり、湯気は空中で静止し、雨粒は宙に浮いたまま、外を通り過ぎる車も完全に停止する。彼はテーブルの上にある、神秘的に光る琥珀色の飲料ボトルに気づく。

0:04–0:08 | 最初の一口

彼はゆっくりとボトルを手に取り、一口飲む。発光する液体のエクストリームなマクロクローズアップ、結露、リアルなガラスの反射、そしてドリンクの中に浮かぶ微細な粒子。彼が飲み込むと、微かなエネルギーの波が周囲へ広がっていく。

0:08–0:12 | 時間を操る

男性が手を上げると、時間をコントロールできることに気づく。落下するコーヒーカップが逆再生のように上へ戻り、雨は逆向きに流れ、街は夕暮れから夜へ、そして再び昼へと急速に移り変わる一方で、彼は完璧に静止したまま。滑らかで物理的に説得力のある時間操作と、ドラマチックなシネマティックカメラワーク。

0:12–0:15 | ボトルに宿る力

すべてが突然、元に戻る。彼はボトルをテーブルに戻し、カメラはゆっくりと発光するドリンクへと寄っていく。未来的な都市のスカイラインを背景に、結露、反射、シネマティックなライティング、そしてラグジュアリーなCMらしい美学を備えた、ドラマチックなプレミアム商品ヒーローショットで締めくくる。

Visual Style: ハイエンドなシネマティック飲料CM、フォトリアルな4K、プレミアムな商品撮影、リアルなガラスと液体の物理挙動、ボリューメトリックライティング、浅い被写界深度、アナモルフィックレンズフレア、洗練されたカメラワーク、シームレスなトランジション。

Camera: ワイドな導入ショット → ゆっくりとした商品露出 → 液体のマクロクローズアップ → ダイナミックな時間操作シークエンス → シネマティックな商品ヒーローショット。

Audio: カフェの環境音が突然静寂へとフェードアウトし、微かな魔法的エネルギーの音、逆再生される環境音、シネマティックなオーケストラの盛り上がり、力強いラストヒット。

Hook: たった一口で、時間を操れるとしたら？ ⏳🥤
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084529999483117568/img/DjS9zw_7gnKFL5yz.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084530133298196563.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084530133298196563.mp4)**

**作者:** [Zeeshi](https://x.com/AIwithZeeshi) | **ソース:** [Link](https://x.com/AIwithZeeshi/status/2084530133298196563) | **公開日:** 2026年8月4日

`Product Ad` `F&B` `Action` `Superpower` `Photoreal` `Sci-Fi` `VFX` `Macro`

---

### Style: Ultra-cinematic luxury fashion commercial, IMAX-quality, 4K HDR, premium…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
スタイル: 超シネマティックなラグジュアリーファッションCM、IMAXクオリティ、4K HDR、プレミアムなモール照明、Vogueのエディトリアル美学、極めてテンポの速い編集、エネルギッシュなポップサウンドトラック、whip transitions、speed ramps、シームレスなmatch cuts、motion blur transitions、セリフなし。

キャラクター: モダンな高級ショッピングモールを自信たっぷりに探索する、スタイリッシュな女の子1人。

0:00–0:02 — Grand Entrance  
高級ショッピングモールのワイドなドローン風エスタブリッシングショット。  
自動ドアが開くところへmatch cut。  
彼女が自信を持って入っていくのを後ろから追う、ローアングルのジンバルショット。  
入口に向かって素早くspeed ramp。

0:02–0:04 — Store Rush  
whip panで衣料ブティックへ。  
彼女が洋服ラックから服をつかむのに合わせて、カメラが周囲を回り込む。  
高速な手持ちクローズアップ:ハンガーの上を滑る服。  
ジャケットに手を伸ばす。  
デザイナーバッグ。  
サングラス。

すべての動きがwhip-pan transitionsでつながる。  
0:04–0:07 — Try-On Montage  
snap transitionで試着室へ。  
アウトフィットの変化はjump cutsで一瞬で起こる。  
全身の鏡ショット。  
鏡の反射が次のtransitionになる。  
彼女の周りを回転する俯瞰ショット。  
高速なズームトランジション。  
0:07–0:10 — Shopping Frenzy  
ショッピングバッグを持って歩く彼女を追うtracking shot。  
下から見上げるエスカレーターショット。  
手すり越しに見下ろすトップダウンショット。  
笑いながら歩き続ける、Dutch-angle shot。  
揺れるショッピングバッグのクローズアップ。  
モールの通路を抜けるhyperlapse。  
0:10–0:13 — Lifestyle Moments  
0.5秒だけのスローモーションのヘアフリップ。  
コーヒーを手に取る場面へmatch cut。  
カップのマクロショット。  
片手にコーヒー、もう片手にショッピングバッグを持って歩くショット。  
前景の高速ワイプを使いながら高級店の店先を通り過ぎる。  
0:13–0:15 — Fashion Finale  
カメラに向かって歩いてくるヒーロートラッキングショット。  
カメラが彼女の周りを滑らかにオービットする。  
最後のspeed ramp。  
ショッピングバッグを持った自信に満ちたポーズでfreeze-frame。  
最後はスタイリッシュなロゴの表示、またはクリーンな白フェードで締める。  

Editing Style  
0.3〜0.8秒のショット。  
常に動き続ける — 静止カメラなし。  
whip pans、spin transitions、match cuts、speed ramps、foreground wipes、zoom transitions、snap cuts、motion blurを全編で使用。  
最大限のエネルギーを生むために、ビートに同期したカット。  
鮮明な反射と洗練されたハイライトを備えた、明るいラグジュアリーカラーグレーディング。

--- THREAD CONTINUATION ---  
[Thread 1] Storyboard reference sheet: https://t.co/NnA5RyPiek  
---
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084530434000502784/img/A1LI8FdtV8S3zqV2.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084530530310132179.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084530530310132179.mp4)**

**作者:** [Melina Vale](https://x.com/MelinaVale14) | **ソース:** [Link](https://x.com/MelinaVale14/status/2084530530310132179) | **公開日:** 2026年8月4日

`Portrait & Fashion` `Fashion` `Photoreal` `Realistic World` `FPV & Aerial` `Slow-Mo` `Macro` `VFX`

---

### Hundreds of colossal stone giants emerge from beneath the earth exactly at…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
日の出とまったく同時に、何百体もの巨大な石の巨人が大地の下から姿を現す。肩からは山々が崩れ落ち、背中からは森が滑り落ちていく。足元には小さな軍勢が集結する。中央の巨人の胸には、『MORNING』というタイトルが、巨大な古代風のシネマティックなセリフ体タイポグラフィで彫り込まれている。非現実的なスケール、黄金の朝日、ボリューメトリックライティング、IMAX、フォトリアルな傑作。
```

[![動画プレビュー](https://pbs.twimg.com/ext_tw_video_thumb/2084534802263191552/pu/img/HjrmwW6hMS763-Jx.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084534817706611113.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084534817706611113.mp4)**

**作者:** [Pierrick Chevallier | IA](https://x.com/CharaspowerAI) | **ソース:** [Link](https://x.com/CharaspowerAI/status/2084534817706611113) | **公開日:** 2026年8月4日

`Scenery & Spectacle` `Worldbuilding` `Photoreal` `Fantasy` `VFX`

---

### A Peaceful Winter Night in Finland

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
フィンランドの静かな冬の夜

スタイル: 美しいPixar/DreamWorks品質の3Dアニメーション、かわいくデフォルメされたカートゥーンキャラクター、柔らかく丸みのある特徴、表情豊かな瞳、居心地のよい北欧テイスト、マジカルリアリズム、温かみのあるシネマティックなライティング、ボリューメトリックライト、ふわふわの雪のシミュレーション、非常に精細なスタイライズ環境、超滑らかなアニメーション、幻想的な雰囲気、9:16の縦長、60秒、セリフなし、ナレーションなし、テキストなし。

Scene 1 — 心地よい冬の朝 (0:00–0:08)
カメラは、ふわふわの雪に覆われた松の木々の間をゆっくりと滑るように進み、赤い屋根の小さくてカラフルなスカンジナビア風の木造コテージへ向かう。そこには、暖かな黄色い光がともる窓、雪の下に埋もれたフラワーボックス、木のドアの横に吊るされた小さなランタン、そして煙突からやさしく立ちのぼる煙がある。村全体は厚くきらめく雪に覆われ、柔らかな冬の朝日を受けて小さなダイヤモンドのように輝いている。
コテージの中では、大きな表情豊かな瞳、ほんのり赤い頬、クリーム色のオーバーサイズのニットセーター、ふわふわのウールソックス、少し乱れた茶色の髪をした、かわいい3Dアニメの女の子が、ふわふわの白い毛布の下でゆっくりと伸びをしている。小さなオレンジ色の子猫が、彼女の枕のそばで丸くなって眠っている。霜のついた窓からは温かな黄金色の陽光が差し込み、漂う塵の粒子に満ちた美しいゴッドレイを生み出している。

環境音 • やわらかな冬の風。 • 鳥のさえずり。 • 暖炉のパチパチという音。 • 猫のゴロゴロ音。 • 木の床がかすかにきしむ音。 • コーヒーを静かに注ぐ音。 • 立ちのぼる湯気。

Scene 2 — コテージの外 (0:08–0:16)
彼女は、ポンポン付きのふわふわの白いビーニーをかぶり、長いニットのマフラーを首に巻き、オーバーサイズの冬用ブーツを履いて、小さな木のドアを開ける。
ひんやりとした冬の空気が部屋に流れ込む。
雪の結晶が彼女の周りをやさしく舞う。
彼女はきらきらした瞳で微笑む。
外へ一歩踏み出すと...
CRUNCH...
ブーツが、まだ誰も踏んでいない柔らかな雪に沈む。
足跡はそのまま残る。
小さなきらめく雪の粒子が空中に漂う。
近くでは...
小さな赤いキツネが興味深そうに見つめている。
2羽の小鳥が雪の積もった柵にとまる。
リスが松の枝を飛び移り、粉雪がきらめくように落ちる。
カメラは、彼女の横に寄り添うように滑らかで浮遊感のある動きで追従する。

Scene 3 — 魔法のようなフィンランドの森 (0:16–0:26)
彼女は、魔法のようにスタイライズされたフィンランドの松林を歩いていく。
すべてが穏やかに感じられる。
ふわふわの雪をまとった背の高い丸みのある松の木々。
雪の下に隠れた小さなキノコ。
枝にぶら下がる凍ったベリー。
やさしいウサギが小道を跳ねて横切る。
遠くでは、トナカイの家族がゆっくりと歩いている。
雪の枝の間から陽光が美しく差し込む。
雪の結晶は落ちながらゆっくりと回転する。
彼女は手を伸ばし...
ひとひらの雪の結晶がミトンの上に落ちる。
彼女は微笑む。
カメラは彼女の周りをゆっくりと回り込む。

Scene 4 — 凍った湖 (0:26–0:38)
彼女は大きな凍った湖にたどり着く。
その表面は磨かれたクリスタルのように見える。
小さな雪の結晶が氷の上を漂う。
彼女は慎重に凍った湖へ足を踏み入れる。
一歩ごとに、やわらかな反響音が響く。
彼女は雪に覆われた小さな木の桟橋に腰を下ろす。
ミトンを外す。
両手で湯気の立つホットチョコレートのマグカップを包み込む。
冷たい空気の中で湯気がやさしく踊る。
彼女は穏やかな空を見つめる。
何も起こらない...
ただ静寂...
ただ自然...

Scene 5 — オーロラの始まり (0:38–0:50)
風が突然、さらにやわらかくなる。
星がゆっくりと現れる。
地平線の向こうに、小さな緑の光がひとつ輝く。
それはゆっくりと大きくなり...
オーロラが静かに目を覚ます。
エメラルドグリーンの長く流れるリボン...
ターコイズ...
やわらかな紫...
青...
オーロラは、まるで水中に漂う光る絹のように、天空いっぱいを優雅に踊る。
その魔法のような光が凍った湖面に反射する。
小さく光る粒子が、彼女の周りをやさしく漂う。
彼女の瞳は驚きで大きく開く。
彼女は静かに微笑む。
やわらかな緑の光が、彼女の瞳の中に美しく映り込む。
そよ風が彼女のマフラーを揺らす。
カメラは、壮大で色彩豊かな空を見せながら、彼女の周りをゆっくりと回り込む。

Scene 6 — エンディング (0:50–1:00)
カメラはゆっくりと高く上昇する。
もっと高く...
もっと高く...
彼女は、凍った湖のそばに静かに座る小さな存在になる。
遠くでは、居心地のよい小さなキャビンが温かく輝いている。
雪はゆっくりと降り続く。
魔法のようなオーロラが空いっぱいに広がる。
森は柔らかな月明かりの下で輝いている。
すべてが穏やかに感じられる。
すべてが安全に感じられる。
すべてが家のように感じられる。
最後のフレームでは、踊るオーロラの下で輝く果てしない雪景色のフィンランドが映し出され、やがてゆっくりと暗闇へフェードアウトする。

Layered Ambient Sounds
* 松の木々の間を吹き抜ける柔らかな北極圏の風
* ブーツの下で踏みしめる、ふわふわの雪のやさしい音
* 小鳥のさえずり
* 遠くのカラスの鳴き声
* 雪の中を歩くキツネの足音
* 枝から枝へ跳ぶリス
* 木々から落ちる粉雪
* 暖炉のパチパチという音
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084550567679213568/img/hWhALYxW8wDv_IBb.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084553574089199732.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084553574089199732.mp4)**

**作者:** [Julia Clark](https://x.com/JuliaClarky) | **ソース:** [Link](https://x.com/JuliaClarky/status/2084553574089199732) | **公開日:** 2026年8月4日

`Scenery & Spectacle` `Nature` `Story` `Heartwarming` `3D Animation` `Realistic World` `ASMR`

---

### A cinematic 10-second 4K commercial set on a rainy Tokyo street at night.

![日本語](https://img.shields.io/badge/lang-日本語-green)

#### 📝 プロンプト

```
A cinematic 10-second 4K commercial set on a rainy Tokyo street at night.

Begin with an extreme macro close-up of individual raindrops on a transparent umbrella. Sharp neon signs and moving city lights are reflected inside the droplets.

The camera smoothly glides across the wet umbrella surface and reveals a beautiful adult Japanese woman beneath it. Show highly detailed wet eyelashes, natural skin texture, fine individual hair strands, tiny water droplets and realistic fabric texture.

She slowly turns toward the camera. Her damp hair moves naturally and releases several tiny droplets into the air. Colorful neon lights, passing cars and pedestrians reflect clearly across the rain-soaked pavement behind her.

In the final two seconds, the camera rapidly but smoothly pushes into her eye. A detailed Tokyo night street is reflected in her iris.

Premium Japanese beauty commercial, photorealistic, precise facial consistency, realistic rain physics, detailed reflections, natural motion, cinematic contrast, shallow depth of field, controlled highlights, crisp 4K detail, no scene cuts, one continuous camera movement, 16:9.
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084551913102884864/img/vOE9f_aC0K6GH7Un.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084555081995936189.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084555081995936189.mp4)**

**作者:** [ミサキ](https://x.com/misakin883) | **ソース:** [Link](https://x.com/misakin883/status/2084555081995936189) | **公開日:** 2026年8月4日

`Product Ad` `Beauty` `Photoreal` `Realistic World` `Macro`

---

### 参考图片@图片1 生成一段8秒、9:16、超写实奢华高定走秀卡点换装视频。

#### 📝 プロンプト

```
参考图片@图片1 生成一段8秒、9:16、超写实奢华高定走秀卡点换装视频。

严格保持参考图中同一位中国成年女性的身份与五官：始终是同一张柔和鹅蛋脸、同一下颌线、深棕色微扬杏仁眼、自然平直眉、纤细顺直鼻梁、小巧圆润鼻尖、饱满裸粉色嘴唇、鼻梁和双颊的浅雀斑、暖调白皙真实肤质、黑茶色松散盘发、两侧自然碎发和钻石耳坠。不得换脸，不得改变年龄、五官比例、雀斑位置、发型、肤色和身材比例。

中央人物是唯一持续活动的真人模特。她始终在高级时装秀台上自信地向镜头走来，保持连续、自然、优雅的交叉台步。摄影机使用稳定的正面全身跟拍并以相同速度平稳后退，使人物在画面中的大小和中央位置基本不变；不摇晃、不旋转、不突然变焦。四个侧边小人物是固定在画面位置上的完整人物轮廓贴纸。

每次鼠标指针点击目标贴纸后，原位置贴纸在飞入启动的同一帧立即消失并永久留白；复制出的完整人物贴纸带着贴合全身和礼服轮廓的白色虚线，迅速放大并飞向中央。飞入过程中，贴纸姿态自然调整为中央人物当前的走路步态；与中央人物的头、肩、腰、双腿和当前步伐完全对齐后，在鞋跟落地的音乐重拍瞬间完成换装。飞入副本和白色虚线同时彻底消失，中央始终只保留一个真人，不产生双影。换装前后人物不停步、不重置姿势，步幅、重心、手臂摆动、视线和头发运动连续。

[0.00s–1.25s]

中央人物穿珍珠象牙白方领高定鱼尾礼服向前走秀。礼服具有立体结构上身、明确腰线、珍珠刺绣和受控拖尾。人物左脚向前，目光看向镜头；1.05秒指针点击左上红色贴纸，原贴纸立即消失，完整红色人物贴纸沿右下方向飞入。1.25秒左脚鞋跟落地并准确重合，换成宝石红丝绒V领高定礼服。人物保持相同步幅继续前行。

[1.25s–2.95s]

人物穿红色丝绒礼服继续走秀，腰部垂褶和裙摆随台步自然摆动。她的右脚向前，眼神短暂看向右上蓝色贴纸；2.70秒指针点击贴纸，右上原贴纸立即消失，蓝色完整人物贴纸沿左下方向飞入。2.95秒右脚鞋跟落下，换成宝石蓝水晶刺绣鱼尾礼服。换装前后右脚承重和手臂摆动完全连续。

[2.95s–4.40s]

人物穿蓝色礼服继续向前，水晶刺绣在灯光下产生克制闪光。左脚向前时，视线转向左下黑色贴纸；4.15秒指针点击，左下原贴纸立即消失，黑色完整人物贴纸沿右上方向飞入。4.40秒左脚鞋跟落地，换成黑色不对称肩线高定礼服。裙摆运动和头发碎发的惯性不中断。

[4.40s–6.55s]

人物穿黑色礼服继续走秀，保持肩背舒展、下巴微抬。右脚向前，视线转向右下绿色贴纸；6.25秒指针点击，右下原贴纸立即消失，绿色完整人物贴纸沿左上方向飞入。6.55秒右脚鞋跟落地，在全段最强音乐重拍中换成祖母绿方领立体花饰高定鱼尾礼服。

[6.55s–8.00s]

四张侧边贴纸已经全部消失，四个原位置保持干净留白，画面只剩中央人物。人物穿祖母绿礼服继续向前完成两步，立体花饰、鱼尾裙摆和拖尾具有真实重量与轻微惯性。7.45秒走到最终展示点，左脚停稳，身体轻微转向45度，一手自然落在腰侧，抬眼直视镜头，保持自信冷艳表情并定格至结束。

五套礼服均通过高级立体剪裁、结构感上身、明确领口线条和收腰比例塑造优雅曲线；面料必须不透明、覆盖稳定、合体而不勒紧。丝绸、丝绒、水晶、珠饰、立体花饰、鱼尾裙摆和拖尾具有真实材质、重力、步行惯性及自然回落，不穿模、不粘连身体。

同步生成原创奢华时装秀卡点音乐：122 BPM，暗黑fashion house、交响弦乐与现代电子低频融合，无完整歌词。使用深沉kick、sub bass、弦乐断奏、金属冲击和水晶闪光音色。在1.25秒、2.95秒、4.40秒、6.55秒设置清晰强重拍，6.55秒为最强impact；四次鞋跟落地、贴纸重合和礼服切换必须精准对齐重拍。每次鼠标指针点击加入很轻的click，飞入加入短促高级whoosh，不得盖过背景音乐；8.00秒干净收尾。

严格避免：五官漂移、换脸、雀斑消失、年龄变化、发型变化、人物停止行走、步伐重置、身体瞬移、贴纸原位残留、贴纸弹回、虚线残留、矩形卡片、双重中央人物、残影、服装叠穿、礼服融合、错误肢体、多余手指、头脚裁切、透明面料、服装走光、裙摆僵硬漂浮、背景突变、镜头抖动、文字、字幕、Logo、品牌和水印。
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084552302665555968/img/zRCxEfwZisSdui3P.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084555319804674519.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084555319804674519.mp4)**

**作者:** [李岳](https://x.com/liyue_ai) | **ソース:** [Link](https://x.com/liyue_ai/status/2084555319804674519) | **公開日:** 2026年8月4日

`Portrait & Fashion` `Fashion` `Photoreal` `Realistic World` `VFX`

---

### A funny black-and-white 2D line-art animation of a chubby girl with long hair…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
長い髪のぽっちゃりした女の子が、カップケーキと包み紙付きのキャンディーが入ったガラス瓶をわくわくしながら開ける、白黒の2D線画アニメーションのコメディ。彼女は中に手を伸ばすが、手が瓶の細い口に引っかかってしまう。あきらめずに、さらにお菓子を取ろうともう片方の手も入れるが、今度は両手とも抜けなくなってしまう。全力で引っ張った拍子に、うっかり瓶を頭の上にひっくり返してしまい、瓶は顔にはまったまま、口にはカップケーキ、頭の周りには星がくるくる回る。瓶が逆さまだと気づいた彼女はそれを元に戻そうと傾けるが、そのせいでカップケーキとキャンディーがすべて口と膝の上に流れ込んでくる。表情豊かな squash-and-stretch アニメーションで描かれる、遊び心のあるスラップスティックなカートゥーンスタイルの中、彼女は頬をふくらませながら、思いがけないごちそうを嬉しそうに楽しむ。
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084564196755476480/img/6wkm9ilWMvm6ThG-.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084564342520123507.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084564342520123507.mp4)**

**作者:** [NoorAI](https://x.com/noorwithwifi) | **ソース:** [Link](https://x.com/noorwithwifi/status/2084564342520123507) | **公開日:** 2026年8月4日

`Meme & Comedy` `Internet Meme` `Hand-drawn` `Realistic World`

---

### Montage, 8-shot handheld phone vlog, photorealistic home-video style. Slight…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
モンタージュ、8ショットの手持ちスマホVlog、フォトリアルなホームビデオ風。わずかな手ブレ、自然なフレーミング、明るい夏の日差し、やわらかなそよ風、細かなフィルムグレイン。

ある女性（画像）が、別の夏の食事のために同じ伝統的な韓屋の中庭レストランへ戻ってくる。（画像）は彼女の顔と髪型のみを提供する。服装：肩が完全に覆われた、薄いベージュのリネン素材の半袖シャツ。第一ボタンは開けてあり、カジュアルでリラックスした雰囲気。彼女は終始、カメラに向かって同じ側の席に座り続ける。他の顔は一切映らず、フレームに入るのは配膳スタッフの手だけ。

テーブルには、湯気の立つ手作りキムチマンドゥのボウル、カリッとしたじゃがいもジョン、小さなおかず（キムチ、たくあん）、冷たい麦茶、醤油のつけだれ、箸、スプーン、ナプキン、そしてそよ風にやさしく揺れる小さな扇風機が置かれている。伝統的な木の梁、瓦屋根、緑の植物、午後のセミの声が、心地よい夏の雰囲気を作り出す。

ショット

1. スタッフが熱々の料理をテーブルに置く。湯気が勢いよく立ちのぼる。彼女は嬉しそうに笑って、こう言う: "이번엔 뜨거운 거!"

2. 箸でキムチ餃子を半分に割るクローズアップ。中から湯気があふれ、具が少し伸びる。彼女はそっと息を吹きかける。

3. 一口目。カリッとした皮の音に続いて、ジューシーな具があふれる。彼女は目を見開き、静かにこう言う: "와... 육즙 미쳤다."

4. じゃがいもジョンの一切れを醤油につけて、サクッとひと口食べる。自然に噛みながら、親指を立てる。

5. 熱い料理のあとに冷たい麦茶をひと口飲み、ほっとした笑顔でこう言う: "이 조합 최고다."

6. たっぷりソースをつけた別の餃子のクローズアップ。彼女は自然な咀嚼音とともに満足げに何口か味わい、うれしそうにうなずく。

7. 最後のひと口を食べ終え、ナプキンで口元を拭き、カメラに少し身を乗り出して、ささやく: "다음엔 뭐 먹지?"

8. 彼女は小さく笑って手を振り、穏やかな韓屋の中庭を抜けて बाहरへ歩いていく。葉がそよ風に揺れ、セミの鳴き声は続く。

オーディオ

指定された箇所のみ、自然な韓国語のセリフ。ライブの環境音のみ：湯気の立つ料理、サクサクしたひと口音、箸、つけだれ、咀嚼音、お茶を注ぐ音、鳥の声、セミ、そよ風、そして中庭のアンビエンス。音楽、字幕、ロゴ、ウォーターマーク、大げさな表情、重複した参照画像はなし。
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084565434750443520/img/XfUH1TLHNVmHcAtg.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084565506649096271.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084565506649096271.mp4)**

**作者:** [ÀBDŪLLÂH](https://x.com/itxabdullaa) | **ソース:** [Link](https://x.com/itxabdullaa/status/2084565506649096271) | **公開日:** 2026年8月4日

`Food` `Drinks` `Photoreal` `Realistic World` `POV` `ASMR`

---

### Cinematic luxury skincare commercial. Starts with a clear glass dropper bottle…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
シネマティックな高級スキンケアのCM。白い大理石の上に置かれた透明なガラス製のスポイトボトルに入った黄金色のセラムから始まり、周囲には繊細な白いジャスミンの花と、暖かな日差しの下で散りばめられた露のしずくが見える。次に、ガラス製ピペットからゆっくりと落ちる、光を放つ黄金色のオイルのしずくを捉えた極端なクローズアップのマクロショットへと移り、滑らかな人肌に落ちると、輝くような光とともにシームレスに吸収される。最後は、きらめく大きな透明のカットダイヤモンド風の台座の上に置かれたプレミアムな黄金色のセラムボトルを正面中央に映し出し、柔らかくきらめく金色のボケ粒子に囲まれて締めくくる。暖かいスタジオライティング、超リアルな質感、4K解像度、洗練されたハイエンドなビューティー美学。

--- スレッドの続き ---
[Thread 1] @fotor_com こちらが限定ダウンロードリンクです: https://t.co/D4krqzXC5y
限定招待コードリンク: https://t.co/OpsL7TUOVl
---
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084563534877429760/img/331mlq2jFWkKsSNL.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084566509351735661.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084566509351735661.mp4)**

**作者:** [Zyrella](https://x.com/Zyrellix) | **ソース:** [Link](https://x.com/Zyrellix/status/2084566509351735661) | **公開日:** 2026年8月4日

`Product Ad` `Beauty` `Photoreal` `Realistic World` `Macro` `Slow-Mo`

---

### Bullet time effect. A young Japanese woman in a white dress tosses a bridal…

![日本語](https://img.shields.io/badge/lang-日本語-green)

#### 📝 プロンプト

```
Bullet time effect. A young Japanese woman in a white dress tosses a bridal bouquet high into the air at an outdoor garden party. The moment the bouquet reaches its peak — time freezes. Individual flower petals detach from the bouquet and hover suspended in mid-air. Water droplets from a nearby fountain freeze into a curtain of tiny crystals catching the sunlight. Champagne bubbles from a nearby glass float motionless. Guests behind her are frozen mid-reach, fingers stretched toward the bouquet, hair and dresses caught mid-swing by the wind. Camera smoothly orbits 360 degrees around the frozen bouquet at eye level, weaving between the suspended petals and water droplets, only the camera moves while everything else remains perfectly still. Ultra-realistic, 4K HD, bright afternoon golden hour lighting, wide angle lens.
```

[![動画プレビュー](https://pbs.twimg.com/ext_tw_video_thumb/2084568392816599040/pu/img/JKcY2QUi7Q6VhqxB.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084568442905002352.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084568442905002352.mp4)**

**作者:** [ぴょんきち](https://x.com/yarakashiyama_) | **ソース:** [Link](https://x.com/yarakashiyama_/status/2084568442905002352) | **公開日:** 2026年8月4日

`Story` `Heartwarming` `Photoreal` `Realistic World` `VFX` `Slow-Mo`

---

### 10-second vertical TikTok fashion lookbook — one fixed-camera full-body shot of…

#### 📝 プロンプト

```
10秒の縦型TikTokファッションルックブック — 若い女性モデルが都会の歩道でポーズを取る、固定カメラの全身ショット1カット。モダンな建物のファサードを背景に、片側から暖かな自然光が差し込み彼女を包み込み、足元には柔らかな接地影。背後の建物と通りは浅い被写界深度でやわらかくぼけ、<이미지1>に一致するシャープな写真リアリズム。

<비디오1>は1人のモデルを含む深度マップのモーションリファレンスです — そのシルエット、身体のポーズ、そしてすべてのモーションビートを、同じタイムライン上で、同じ全身固定フレーミングのまま1対1で再現してください。カメラは10秒間ずっと完全に固定され、動かない、ズームしない、リフレームもしない。画面上の変化はすべて、彼女自身の身体と衣装によって生じるものです。

彼女は<이미지1>の女の子です — 顔、髪型、髪色、肌、体型はすべて各フレームで同一に保ってください。<이미지2>、<이미지3>、<이미지4>、<이미지5>はフラットレイの衣装分解シートです — 無地の背景に衣服、靴、アクセサリーを並べた商品写真で、人は写っていません。各ルックごとに、そのシートにある正確な衣服とアクセサリーを彼女に自然にフィットする形で着せてください — 彼女はどのルックでも@이미지1の顔、髪、体型を保ちます。彼女はシーンの自然光で照らされ、接地影が足元を支えます。背景、光の方向、カラーグレーディングは最初のフレームから最後のフレームまで同一です。

これはTikTokの衣装チェンジ編集です。以下の各ビートで、彼女の衣装全体が2フレーム間の単一の瞬間カットでHARD-SWAPします — 顔、髪、背景、光は一切変えず、ポーズはスワップをまたいで連続的に流れながら、服だけが次のフレームで完全に切り替わります。バッグもルックに合わせて切り替わります。<비디오1>のシルエットにバッグの形がある箇所では、その形が現在のルックの単一バッグそのものです — 現在のシートのバッグをその位置に正確に描画してください。前のルックのバッグは同じカットで消え、彼女が同時に持てるバッグは最大1つです。

0–3.2秒 — LOOK 1: <이미지1>に示されたフルコーデを着用し、遊び心のあるポーズで、片手を頭の方へ上げる。
ちょうど3.2秒で衣装がLOOK 2にハードスワップする。<이미지2>のフルルック: 白のオープンニットのクロシェカーディガンを肩からゆるく落とし、白のキャミトップの上に重ね、ライトウォッシュのデニムショーツ、そして単体のライトブルーのショルダーバッグ — すべての衣服、色、素材を表示どおり正確に。
ちょうど5.0秒でLOOK 3にハードスワップする。<이미지3>のフルルック: 白のドット柄Tシャツ、白のティアードレースフリルミニスカート、シアーソックスとバレエフラット、片肩に単体のライトブルーのショルダーバッグ。体重移動に合わせてスカートが揺れる。
ちょうど6.7秒でLOOK 4にハードスワップする。<이미지4>のフルルック: 白のNikeスポーツブラ、ハイウエストの切りっぱなしデニムショーツ、白のニーハイソックス、厚底の白いスライドサンダル、腰の位置に単体のラベンダー色ショルダーバッグ。このスワップも一瞬のハードカットとして成立させる。
ちょうど8.6秒でLOOK 5にハードスワップする。<이미지5>のフルルック: 白の半袖シャツに細身の黒いネクタイ、黒のサテンのバルーンミニスカート、白いソックス、黒いスニーカー。最後のポーズを取る際、単体のドット柄トートバッグを手に持つ。

各ルックの生地は彼女の動きに自然に反応すること。自然な肌の質感、細い指と素の爪を持つ自然な人間の手。モーションはフルフレームレートで滑らか、流動的、連続的で、各ビートの間も自然に流れる。クリーンで文字のないフレーム。

--- THREAD CONTINUATION ---
[Thread 1] <영상에 사용한 프롬프트>

10秒の縦型TikTokファッションルックブック — 若い女性モデルが都会の歩道でポーズを取る、固定カメラの全身ショット1カット。モダンな建物のファサードを背景に、片側から暖かな自然光が差し込み彼女を包み込み、足元には柔らかな接地影。背後の建物と通りは浅い被写界深度でやわらかくぼけ、<이미지1>に一致するシャープな写真リアリズム。

<비디오1>は1人のモデルを含む深度マップのモーションリファレンスです — そのシルエット、身体のポーズ、そしてすべてのモーションビートを、同じタイムライン上で、同じ全身固定フレーミングのまま1対1で再現してください。カメラは10秒間ずっと完全に固定され、動かない、ズームしない、リフレームもしない。画面上の変化はすべて、彼女自身の身体と衣装によって生じるものです。

彼女は<이미지1>の女の子です — 顔、髪型、髪色、肌、体型はすべて各フレームで同一に保ってください。<이미지2>、<이미지3>、<이미지4>、<이미지5>はフラットレイの衣装分解シートです — 無地の背景に衣服、靴、アクセサリーを並べた商品写真で、人は写っていません。各ルックごとに、そのシートにある正確な衣服とアクセサリーを彼女に自然にフィットする形で着せてください — 彼女はどのルックでも@이미지1の顔、髪、体型を保ちます。彼女はシーンの自然光で照らされ、接地影が足元を支えます。背景、光の方向、カラーグレーディングは最初のフレームから最後のフレームまで同一です。

これはTikTokの衣装チェンジ編集です。以下の各ビートで、彼女の衣装全体が2フレーム間の単一の瞬間カットでHARD-SWAPします — 顔、髪、背景、光は一切変えず、ポーズはスワップをまたいで連続的に流れながら、服だけが次のフレームで完全に切り替わります。バッグもルックに合わせて切り替わります。<비디오1>のシルエットにバッグの形がある箇所では、その形が現在のルックの単一バッグそのものです — 現在のシートのバッグをその位置に正確に描画してください。前のルックのバッグは同じカットで消え、彼女が同時に持てるバッグは最大1つです。

0–3.2秒 — LOOK 1: <이미지1>に示されたフルコーデを着用し、遊び心のあるポーズで、片手を頭の方へ
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084569379300311041/img/aG28hQw1ByAEAQgk.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084571516772237540.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084571516772237540.mp4)**

**作者:** [1p(1mpal)](https://x.com/impalementd) | **ソース:** [Link](https://x.com/impalementd/status/2084571516772237540) | **公開日:** 2026年8月4日

`Portrait & Fashion` `Fashion` `Photoreal` `Realistic World` `Transformation`

---

### An 8-second high-energy vertical MV (9:16) that races through six eras of…

![日本語](https://img.shields.io/badge/lang-日本語-green)

#### 📝 プロンプト

```
An 8-second high-energy vertical MV (9:16) that races through six eras of Japanese beauty, one woman per era, tempo accelerating toward the future.

REFERENCE ROLES — one woman per shot, use each frame as the first frame and primary visual source for that shot:
@Image1 = Meiji-era woman: red floral kimono with maroon pleated hakama, lace high-collar blouse, upswept hair with kanzashi ornament, lace parasol, in a sunlit Western-style parlor.
@Image2 = Taisho-era woman: purple arrow-feather kimono, red hakama, short bob with a red ribbon, in a warm retro café by a stained-glass window.
@Image3 = Showa-era woman: red polka-dot blouse, red headband, wavy black bob, in a retro kissaten booth with a green cream-soda float.
@Image4 = Heisei-era woman: long light-brown hair, beige cardigan over a denim skirt, knee socks, holding a flip phone, at a bright city crossing.
@Image5 = Reiwa-era woman: brown wavy medium hair, cream knit sweater, holding a smartphone, in an airy modern café with plants.
@Image6 = Future woman: silver short hair, white futuristic long coat over black bodysuit, glowing holographic UI on her wrist, on a balcony over a neon night city with aurora.

IDENTITY LOCK: each shot preserves its woman EXACTLY as in her own reference — same face shape, same eye shape and color, same hairstyle, same outfit and proportions. Only ONE woman on screen per shot. Do NOT blend faces between eras, do NOT drift toward another cartoon style, do NOT enlarge the eyes. Natural human motion, no warping.

STYLE: stylized 2.5D anime aesthetic, photorealistic high-detail 2.5D CG, painterly rendering, clean cel-shaded faces, cinematic lighting, soft bloom, gentle lens flares, 35mm grain, 24fps, vertical 9:16. This is a MULTI-CUT of six distinct shots, each with its OWN angle/height/camera move — never the same framing twice, never one static locked-off shot.

SHOT 1 (0.00–1.30) — Meiji, low-angle CRANE UP: start low on her lace-up boots and the parasol tip, craning up her full figure to her face as she spins the lace parasol open overhead; morning light flares through the lace, dust motes drift. She lifts her chin with a serene half-smile. Full figure, elegant.

Cut to SHOT 2 (1.30–2.60) — Taisho, smooth lateral DOLLY RIGHT: the camera glides right past the stained glass and warm lamp, settling into a medium close-up as she lifts her gaze from her book straight to the lens, the red ribbon bouncing, lamp glow on her cheek. A page still fluttering.

Cut to SHOT 3 (2.60–3.90) — Showa, PUSH-IN with a slight ARC (under 180°): the green cream-soda glass sparkles huge in the foreground; camera arcs to her over-the-shoulder turn as she flashes a bright grin toward the lens, black bob swinging. Quick sense of the cherry and rising fizz.

Cut to SHOT 4 (3.90–5.10) — Heisei, snappy PUSH-IN, slightly low angle: she flicks the flip phone open with a crisp wrist snap and spins to camera, denim skirt and hair swinging, the bright crossing blurred behind her. Confident, playful.

Cut to SHOT 5 (5.10–6.30) — Reiwa, DOLLY-IN over a foreground element: the smartphone held toward the lens in the lower foreground, camera dollies in to her face as she tilts the phone for a selfie and gives a soft wink to the lens, airy café light, leaves in soft focus.

Cut to SHOT 6 (6.30–8.00) — Future, CRANE PULL-BACK (climax): she flicks the holographic UI on her wrist — a burst of blue light expands — then the camera cranes back and up, opening the vast neon night city and shimmering aurora behind her, her white coat billowing, hair lifting in the high wind. Wide, triumphant.

PACING: each successive cut lands a touch faster and snappier than the last, energy building from the calm Meiji open to the explosive future finale. Transitions between eras are quick light-flashes / soft lens-flare swishes (added feel of time flowing forward), not whip pans.

CAMERA GRAMMAR — PERMITTED: crane up, lateral dolly, push-in, partial arc under 180°, dolly-in, crane pull-back. Each shot a different move. AVOID: static locked-off overhead, the same fixed angle twice, full 360° rotation, whip pans, handheld jitter.

Audio: only sound effects — parasol-fabric flutter and soft wood-floor step and faint birdsong (Meiji); page flip and teacup clink and rain-on-glass (Taisho); cream-soda fizz and spoon tap on glass (Showa); flip-phone snap and city-crossing ambience (Heisei); café hum and camera-shutter click (Reiwa); holographic UI chimes and low sci-fi hum and high wind (Future); a soft whoosh on each era transition. No dialogue, no music melody, no BGM, no human voices, no singing.

CONSTRAINTS: any signage, menus, posters, phone screens or brand marks stay soft, blurred and UNREADABLE — render NO legible letters, numbers or logos anywhere. Keep the upper-center relatively clear for a later caption. Stable geometry, no morphing between the different women, no full 360-degree rotation, no whip pans, no handheld jitter.
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084570985672720385/img/4YTjAgm6bEenMSYr.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084571779025326580.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084571779025326580.mp4)**

**作者:** [さゆり|アニメ声クリエイター🎤](https://x.com/LilyLoveSNPY) | **ソース:** [Link](https://x.com/LilyLoveSNPY/status/2084571779025326580) | **公開日:** 2026年8月4日

`Music & Dance` `MV` `Portrait & Fashion` `Fashion` `3D Animation` `Sci-Fi` `VFX`

---

### 都市奇幻アクションRPG風の高レアリティキャラクター戦闘PV。ネオンがきらめく雨上がりの夜の都市屋上で、画像1のキャラクターと同一人物の少女剣士が、日本刀による…

![日本語](https://img.shields.io/badge/lang-日本語-green)

#### 📝 プロンプト

```
都市奇幻アクションRPG風の高レアリティキャラクター戦闘PV。ネオンがきらめく雨上がりの夜の都市屋上で、画像1のキャラクターと同一人物の少女剣士が、日本刀による近距離剣劇を行う。動きは高速だが、各アクション、刀の軌道、手の位置、打撃点、停止姿勢は必ず明確に読めること。場所、武器、全体の流れは固定しつつ、色味、小物、粒子、光、雰囲気は画像1のキャラクターに合わせて調整する。

高品質3D toon / cel-look anime game character PV。完全な立体モデル感、精密なcel shader、細くクリーンなアニメ輪郭、2〜3層の透明感あるtoon shadow、宝石・金属・布地の高級反射。実写、半写実、コスプレ、低ポリ、安価なプラスチックCG、2D設定画の直接アニメ化は禁止。

【画像1の役割と同一人物固定】

画像1は唯一の人物参照。画像1から、顔、目の形、大きさ、虹彩色と虹彩比率、眉と目の距離、頬、下顔面、顎、鼻、口、年齢感、表情の基準、髪型、前髪、髪色、髪飾り、衣装、装飾、体格、全身シルエット、キャラクターカラー、気質、雰囲気を取得し、全編で同じ一人の人物として維持する。

画像1はキャラクターの人物情報だけに使う。画像1そのものの背景、部屋、家具、白背景、文字、UI、分割枠、正背面図、説明図、表情差分、ポーズ、画角、フレーミングは再現しない。

全編に登場するのは1人だけ。変化してよいのは表情、視線、口元、呼吸、自然な髪と衣装の揺れ、戦闘動作だけ。特徴の混合、顔の平均化、別人化、成人化、衣装交換、装飾欠落、体型変更、クローン、分身、第二キャラクター、反射の中だけ別顔になることは禁止。

【固定要素と可変要素】

固定する要素：夜の都市屋上、濡れた床、ガラス壁、遠景の高層ビル、近距離剣劇、反射移位、最後の横薙ぎ、手元の納刀、最後の顔アップ、日本刀1本と鞘1本。

画像1に合わせて変える要素：補助色、ネオン色、粒子、小物、反射光、刀光、敵影崩壊エフェクト、空気感、気品、可憐さ、神秘性、華やかさなどの演出。花、蝶、結晶、羽、炎、水、雪、星、月、雷、霧、紋章など、画像1の意匠や雰囲気に合う要素だけを使用し、キャラクター性に合わせて自然に再設計する。

主光は銀白の月光。補助光は画像1のキャラクターカラーを中心に使う。背景は低彩度の夜景と浅いネオンボケに抑え、髪、目、顔、衣装、装飾、日本刀を常に主役にする。顔の光は柔らかく均一。鼻梁、頬骨、眼窩、顎を硬い影で強調しない。粒子は顔、目、手、刀身、刀先、鞘口を隠さない。

【顔とカメラ】

顔は画像1を厳密に維持。顔立ち、目の形と大きさ、虹彩比率、頬、顎、鼻、口、年齢感を保ち、汎用的な成熟3D女性顔へ置き換えない。目を細めすぎず、虹彩を縮めず、戦闘中も最後の顔アップも画像1の印象を維持する。

顔アップは65〜85mm相当、中近景は50〜70mm相当。広角顔寄り、魚眼、超広角、極端な煽り、極端な俯瞰は禁止。鼻の肥大、顎の前突、顔の縦伸びを防ぐ。3/4顔は画像1に近い自然な角度。

【アクション原則】

多カット高速PV。各Cutは1つの主動作だけで構成する。

準備動作 → 単一攻撃 → 約0.1秒のhit-stop → 明確な命中 → 敵影の粒子化 → 短い静止。

残像、刀光、smearは移動中だけに使い、停止時は顔、目、手、柄、刀身、刀先、打撃点のいずれかを明瞭に見せる。敵は人間ではなく、輪郭の曖昧なゲーム的敵影だけ。独立した第二キャラクターとして成立させない。

Cut 1：ネオン都市屋上。後方やや低い中近景から開始。画像1と同じ髪、衣装、装飾が夜風に揺れ、日本刀は鞘の中。キャラクター固有の微細粒子が髪飾り、胸元、刀柄付近で淡く光る。濡れた床、ガラス壁、高層ビル、浅いネオン。彼女は振り向かず、指先だけを刀の柄へ添える。目が横顔とガラス反射に一瞬映る。反射の顔も本体と完全に同一。

Cut 2：暗いゲーム的敵影がガラス反射とネオンの陰から出現。刀柄、指先、目、抜刀を近景で見せる。刀身に月光、街灯、キャラクター固有の補助色が反射。肩越しの第一撃。画像1のキャラクターカラーに合わせた単一の刀光弧、約0.1秒のhit-stop、明確な命中。敵影は霧と固有粒子へ崩れる。

Cut 3：近景〜中近景の連続剣劇。肩、手、刀身、接触点を中心に、安定した半周orbit。短距離の滑歩だけを使用する。各攻撃で、手首の返し、刀身反射、単一の刀光弧、hit-stop、粒子化を分けて見せる。無目的な回転、長距離移動、遠距離攻撃、判読不能な乱戦は禁止。

Cut 4：反射移位。刀光が濡れた床を払うと、水面がキャラクターカラーを帯びた鏡面へ伸びる。刀身反射から地面反射、斜め前方の中近景へ接続する。分身ではなく、1人の実体のまま短距離移動。低く構え、顔、目、髪飾り、胸元の装飾、衣装、刀柄、刀身方向を同時に読ませる。低姿勢でも顔を変形させない。

Cut 5：最後の横薙ぎ。背後から斜め前の近景へ回り込み、中望遠を維持。左右の敵影へ高速の横薙ぎ。大きな銀白とキャラクターカラーの刀光弧が画面を横切り、敵影は霧と固有粒子へ崩壊する。斬撃後は刀を抜いたまま短く静止。粒子と霧が自然な遮蔽wipeを作る。

Cut 6：遮蔽wipe直後、胸下〜手元の中近景へ切り替え、初めて納刀を開始。刀身、鞘口、鍔、柄、両手の位置関係を明確にする。刀と鞘の角度ズレ、貫通、手の変形、途中省略、動作の飛びは禁止。髪、袖、装飾は画面端でわずかに揺れ、刀と手元を隠さ
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084577803790598144/img/CahktWry6sMnuD_R.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084577817766097284.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084577817766097284.mp4)**

**作者:** [mayv@簡単プロ級プロンプト公開中！](https://x.com/haruuraeadss) | **ソース:** [Link](https://x.com/haruuraeadss/status/2084577817766097284) | **公開日:** 2026年8月4日

`Action` `Wuxia` `3D Animation` `Sci-Fi` `VFX`

---

### Ultra fast-paced FPV drone flight through the ancient Indian Chandela Dynasty…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
---
10世紀から12世紀の西暦にかけて最盛期を迎えた古代インドのチャンデーラ朝を、超高速のFPVドローン飛行で駆け抜ける。カットなし、トランジションなし、カメラのリセットなしの、単一の連続したワンテイクショット。精緻な彫刻が施された壮麗な砂岩寺院、そびえ立つシカラ、壮大な宮殿、活気あふれる市場、王宮の中庭、豊かな庭園、聖なる水槽、象の行列、騎兵隊、石を彫る職人たち、踊り手、儀式を執り行う僧侶たち、色鮮やかな祭り、鬱蒼とした森林、劇的な断崖、要塞化された都市の中を、シームレスに飛行する。超リアル、シネマティック、超高精細、明るい自然光、黄金色の陽光、鮮やかな色彩、史実に忠実な建築、滑らかで流れるようなFPVモーション、ダイナミックな速度変化、没入感のある奥行き、息をのむスケール、リアルな人々の営み、ボリューメトリックライティング、大気中の塵、くっきりとした質感、プレミアムなフィルムクオリティ、8K、HDR、傑作、フォトリアル、始まりから終わりまで途切れない連続したカメラ移動
---
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084581117089484800/img/wQQCPuIAdVg5m8NX.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084581149377179886.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084581149377179886.mp4)**

**作者:** [Shushant Lakhyani](https://x.com/shushant_l) | **ソース:** [Link](https://x.com/shushant_l/status/2084581149377179886) | **公開日:** 2026年8月4日

`Scenery & Spectacle` `Worldbuilding` `Photoreal` `Historical` `FPV & Aerial`

---

### 15초 길이, 16:9 화면비, Apple 키노트 스타일 패러디 제품 영상을 만들어줘.

#### 📝 プロンプト

```
15秒の長さ、16:9の画面比率で、Appleのキーノート風パロディ製品動画を作ってください。

画像1を製品デザインのレファレンスとして使用します。画像1と同じ比率と厚みを維持し、前面中央にAppleロゴを配置してください。製品上部にはUSB-Cポートを1つ、青白いLEDを1つ、表面と水平なカプセル形ボタンを1つ配置します。すべてのシーンで製品の外観を完全に同一に保ってください。

背景は境界の見えない純粋な黒で構成します。シネマティックなスタジオのリムライト、ゆっくりと抑制された動き、雰囲気のあるエレクトロニック音楽を使用してください。

[0–4秒]
製品が暗闇の中からゆっくりと姿を現し、画面右側に浮かんでいる。カメラがわずかに15度オービット移動する間、細いハイライトがマットなアルミニウムのエッジと前面ロゴを横切る。

左側に次の文言をフェードインする。
“Charge Pro”
その下に:
“Your day lasts longer.”

[4–7.5秒]
製品上部のエッジをエクストリームマクロビューで見せる。
実物に自然な比率のUSB-Cコネクタがポートに完璧に整列した状態で近づき、滑らかに挿入される。金属コネクタ部分はポート内に完全に入り、露出した金属や見える隙間があってはならない。シーンが終わるまで、完全に接続された位置で一切動かず静止した状態を保つ。
完全に挿入された後にのみ、LEDを控えめに点灯させる。

左側に次の文言をフェードインする。
“One port. One LED.”
その下に:
“Nothing more.”

[7.5–11秒]
両側の丸い端部がすべて見える完全な形の製品を、横向きに寝かせて見せる。製品はフレーム幅の70〜75%を占めること。
最終アングルでは、前面は線のようにのみ見えるようにする。
上端に沿って控えめなハイライトを使い、製品の下にはごく薄い影だけを表現する。

製品が側面アングルに達したら、その上に次の文言をフェードインする
“Thinner. Longer.”
その下に:
“20% longer than the previous generation.”

[11–15秒]
製品は画面中央よりやや右で縦向きに浮かび、製品の下にはほのかに広がる光が形成される。音楽がほぼ無音に近づくにつれて、製品は完全に静止した状態を保つ。

左側に次の文言をフェードインしてください。
“From $199”
その下に:
“Charge Pro.”
“One is all you need.”

タイポグラフィ
“Charge Pro”: セミボールド
見出しおよび価格: ミディアム
補助文: レギュラー

主要テキストには柔らかな白、補助テキストには冷たいグレーを使用する。大きすぎない、抑制された中程度のサイズのタイポグラフィを使用する。すべての文言は鮮明で安定した状態を保ち、スペルを正確に表記し、指定されたテキスト領域内に配置する。

クリーンなカット切り替えと、滑らかな不透明度フェードを使用する。フェード以外のテキストアニメーションは使用しない。
すべてのシーンで、製品の形状、ロゴ、ポート、LED、ボタン、素材、ライティングスタイル、タイポグラフィのサイズおよび間隔を同一に保つ。 

ネガティブ: 追加文言、追加ポート、追加LED、追加ボタン、製品の変形、360度の完全回転、カメラの揺れ、画面を乱す要素、カラー背景、ウォーターマーク

--- THREAD CONTINUATION ---
[Thread 1] [レファレンス画像/プロンプト]
15秒の長さ、16:9の画面比率で、Appleのキーノート風パロディ製品動画を作ってください。

画像1を製品デザインのレファレンスとして使用します。画像1と同じ比率と厚みを維持し、前面中央にAppleロゴを配置してください。製品上部にはUSB-Cポートを1つ、青白いLEDを1つ、表面と水平なカプセル形ボタンを1つ配置します。すべてのシーンで製品の外観を完全に同一に保ってください。

背景は境界の見えない純粋な黒で構成します。シネマティックなスタジオのリムライト、ゆっくりと抑制された動き、雰囲気のあるエレクトロニック音楽を使用してください。

[0–4秒]
製品が暗闇の中からゆっくりと姿を現し、画面右側に浮かんでいる。カメラがわずかに15度オービット移動する間、細いハイライトがマットなアルミニウムのエッジと前面ロゴを横切る。

左側に次の文言をフェードインする。
“Charge Pro”
その下に:
“Your day lasts longer.”

[4–7.5秒]
製品上部のエッジをエクストリームマクロビューで見せる。
実物に自然な比率のUSB-Cコネクタがポートに完璧に整列した状態で近づき、滑らかに挿入される。金属コネクタ部分はポート内に完全に入り、露出した金属や見える隙間があってはならない。シーンが終わるまで、完全に接続された位置で一切動かず静止した状態を保つ。
完全に挿入された後にのみ、LEDを控えめに点灯させる。

左側に次の文言をフェードインする。
“One port. One LED.”
その下に:
“Nothing more.”

[7.5–11秒]
両側の丸い端部がすべて見える完全な形の製品を、横向きに寝かせて見せる。製品はフレーム幅の70〜75%を占めること。
最終アングルでは、前面は線のようにのみ見えるようにする。
上端に沿って控えめなハイライトを使い、製品の下にはごく薄い影だけを表現する。

製品が側面アングルに達したら、その上に次の文言をフェードインする
“Thinner. Longer.”
その下に:
“20% longer than the previous generation.”

[11–15秒]
製品は画面中央よりやや右で縦向きに浮かび、製品の下にはほのかに広がる光が形成される。音楽がほぼ無音に近づくにつれて、製品は完全に静止した状態を保つ。

左側に次の文言をフェードインしてください。
“From $199”
その下に:
“Charge Pro.”
“One is all you need.”

タイポグラフィ
“Charge Pro”: セミボールド
見出しおよび価格: ミディアム
補助文: レギュラー

主要テキストには柔らかな白、補助テキストには冷たいグレーを使用する。大きすぎない、抑制された中程度のサイズのタイポグラフィを使用する。すべての文言は鮮明で安定した状態を保ち、スペルを正確に表記し、指定されたテキスト領域内に配置する。

クリーンなカット切り替えと、滑らかな不透明度フェードを使用する。フェード以外のテキストアニメーションは使用しない。
すべてのシーンで、製品の形状、ロゴ、ポート、LED、ボタン、素材、ライティングスタイル、タイ
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084586656573902848/img/WgvF17Qi43sQnWqc.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084589555295166615.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084589555295166615.mp4)**

**作者:** [LOOPY](https://x.com/VibeEverything) | **ソース:** [Link](https://x.com/VibeEverything/status/2084589555295166615) | **公開日:** 2026年8月4日

`Product Ad` `Tech` `Photoreal` `Realistic World` `Macro`

---

### 15-SECOND CINEMATIC URBAN FASHION FILM

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
15秒のシネマティック・アーバンファッションフィルム

Location: ダークティールに照らされた地下メトロ・サブウェイ

Camera: Sony FX3

35mm f1.8 浅いDOF フィルムグレイン

Teal-orange LUT

Style: Handheld documentary EVERY shot different angle Character ALIVE throughout

SHOT 1-1sec SILHOUETTE

純粋なシルエット。大きなバックライト付きのフロストガラス壁の前を、女性がLEFT TO RIGHTに歩く。カメラは静止したサイドプロファイル。リムライトのみ。深いティール。反射する床。髪とワイドトラウザーズが歩みに合わせて揺れる。表情: 夢中で、自分の世界にいる。

SHOT 2-1sec ESCALATOR DOWN

カメラはBOTTOMから見上げる。彼女はカメラに向かってDOWNするエスカレーターに乗る。

スマホを見てから、やわらかな好奇心をたたえた目を上げる。蛍光灯の光が背後に流れる。ティールのトンネル壁。髪が前に落ちる。表情: 気が散っているが、ふと見上げる。

SHOT 3-1sec

ESCALATOR FACE-ON

カメラはTOPからトンネルを見下ろす。彼女は正面を向いてカメラに向かう。手は手すりに置かれている。ワイドアングル、シンメトリー。ティールのトンネルが劇的に下方へ伸びる。

表情: 落ち着いていて、オープンで、わずかな態度がある。

SHOT 4-1sec

ESCALATOR BACK

カメラは彼女の後ろ、全身の背面ショット。彼女は背を向け、暗いトンネルへと乗り込む。赤みがかった茶色の髪が流れ落ち、やわらかく揺れる。カメラはゆっくり前へ押し寄る。

表情: ミステリアス、未知。

SHOT 5-1sec MIRROR REFLECTION

改札付近の曲面の凸面セキュリティミラー。カメラは右肩越し。彼女の反射が見える。彼女は歩みを緩め、首を傾け、自分自身を見つめる。

背景には緑の出口サインが光る。表情: 自意識があり、静かな気づき。

SHOT 6-1sec

BENCH SITTING

カメラはLOWの正面。彼女は脚を開いて座り、前腕を膝に置き、手を組む。地面を見つめてから、カメラを見上げる。背後には暗い金属メッシュの壁。頭上の単一ライトが彼女を照らす。表情: 物思いにふけり、疲れているが強い。

SHOT 7-1sec PLATFORM TRAIN BLUR

カメラはSIDE ANGLEの全身。オレンジの列車がLEFT TO RIGHTへ全速で通過し、強いモーションブラー。風が髪を打ち、髪がはじけ、シャツが動き、トラウザーズが膨らむ。彼女は完全に静止したまま。

表情: 動じない、手の届かない存在。

SHOT 8-1sec LOW ANGLE PLATFORM

カメラはLOW ANGLEで見上げる。彼女はスマホを持ち、ゆっくりと目をカメラへ上げる。髪は少し風に乱れている。浅いDOF、背後にオレンジのボケ。

表情: まっすぐで、静かに強い。

SHOT 9-1sec HERO DOOR FRAME

開いたオレンジの列車ドアのど真ん中。背後にはティールの車内。腕は力を抜いている。極めてゆっくりとカメラが寄る。レンズを見つめる。無表情。完全な存在感。オレンジのドアフレームが彼女をポートレートのように囲む。表情: 力、静止。

SHOT 10-1sec INSIDE TRAIN

カメラはハンドヘルドで、彼女の向かい側からLOWで撮る。彼女はティールのベンチに座り、窓にもたれる。列車の動きに合わせてトンネルの光が顔をストロボのように横切る。ネックレスのチェーンに無意識に触れる。表情: 内省的で、 ذهنは別の場所にある。

SHOT 11-1sec PLATFORM TWIRL

カメラはWIDEの全身、低い位置。オレンジの列車がRIGHT TO LEFTへ離れていく。彼女は回転し、髪が大きな弧を描いて広がる。SLOW MOTION 40%。

トラウザーズとシャツが渦を巻く。最後はカメラの方を向く。表情: 自由、動きの途中で捉えられた瞬間。

SHOT 12-1sec EXTREME CLOSEUP

カメラはMACRO。目、鼻、ネックレスがフレーム全体を満たす。

ゆっくりLEFTを見てから、レンズをまっすぐ見つめる。瞳にティールのキャッチライト。リアルな肌の質感。ゆっくり一度まばたき。表情: 生々しく、生きていて、強烈。

SHOT 13-2sec EXIT WALK

カメラはFLOOR LEVELから見上げる。彼女は威厳をもってカメラに向かって一歩踏み出す。背後にティールのプラットフォーム、横にはオレンジの列車。レンズに向かって歩き、フレームを満たす。FADE TO BLACK。表情: 目的意識があり、最後の、締めくくりの声明。

COLOR GRADE: Teal shadows Orange highlights Crushed blacks Zero beauty filter Real skin texture Real fabric movement Film grain ISO 3200 Documentary realism
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084592373083111424/img/k2OEGfyUBXpjC9--.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084592462237180399.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084592462237180399.mp4)**

**作者:** [Shore Lyn](https://x.com/Shorelyn_) | **ソース:** [Link](https://x.com/Shorelyn_/status/2084592462237180399) | **公開日:** 2026年8月4日

`Portrait & Fashion` `Fashion` `Photoreal` `Realistic World` `Slow-Mo` `Macro` `POV`

---

### 0–4s: A massive enemy war machine descends through storm clouds above a flooded…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
0–4秒：巨大な敵の戦争機械が、洪水に見舞われた沿岸都市の上空、嵐雲を突き抜けて降下する。コンパクトな青白い戦闘メカが損傷した空母デッキから発進し、ブースターが点火、海水の飛沫が四方に爆ぜる。低いアングルでの高速トラッキング。

4–8秒：2機の機械がスカイライン上空で激突する。小型メカはミサイルの軌跡をかわし、ビル群の狭い隙間を縫うように抜け、飛来するドローンをエネルギーブレードで切り裂く。素早いカメラ切り替え、急加速、そして重い機械的慣性。

8–12秒：敵機が都市破壊級のビームをチャージする。パイロットは小型メカをそのビームの不安定な縁へ真正面から突入させ、装甲パネルを焼き落としながら、むき出しのリアクターコアへエネルギーブレードを突き立てる。

12–15秒：敵機は停止し、都市の外側に広がる海へと落下する。損傷したヒーローメカは、嵐が晴れていく中、超高層ビルの屋上に片膝をついて着地する。最後は、パイロットのコックピットの灯りが夜明けへと消えていく場面で締める。

プレミアムなシネマティック・メカアニメ、極限の作画、超高速の空中戦、精密なメカニカルアニメーション、大規模破壊、リアルな重量感、強烈なインパクトカット、決定的なヒーローエンディング。
```

[![動画プレビュー](https://pbs.twimg.com/ext_tw_video_thumb/2084595213331263488/pu/img/QOespMSU5-oxqB5i.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084595263230939184.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084595263230939184.mp4)**

**作者:** [Pierrick Chevallier | IA](https://x.com/CharaspowerAI) | **ソース:** [Link](https://x.com/CharaspowerAI/status/2084595263230939184) | **公開日:** 2026年8月4日

`Action` `Military` `Anime 2D` `Sci-Fi` `VFX` `FPV & Aerial` `Slow-Mo`

---

### The camera push closer to the jack in a box - the winding key on the side of…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
カメラがジャック・イン・ザ・ボックスにぐっと寄る。箱の側面にあるゼンマイの鍵が回り始め、どんどん速くなる。箱は、まるで何かが बाहरに出ようとしているかのように震え、揺れ始める。そして圧力が高まり、ふたが爆発するように開き、煙の中からジェイクが現れる。不気味で、ぞっとするのに、どこか迎え入れるようでもある。壮大なショット。音楽なし。霞がかったホラー映画のような雰囲気。
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084602311112896512/img/4DvVpTkCIkclCtF2.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084602652881568201.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084602652881568201.mp4)**

**作者:** [KreviX](https://x.com/KrevixAi) | **ソース:** [Link](https://x.com/KrevixAi/status/2084602652881568201) | **公開日:** 2026年8月4日

`Horror` `Eerie` `Photoreal` `Realistic World`

---

### Create a premium film storyboard for a 15-second cinematic mini movie titled…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
15秒のシネマティックなミニムービー「The Detour」のための、プレミアムな映画用ストーリーボードを作成してください。レイアウトは、黒を基調としたラグジュアリーなデザイン、細いゴールドのアクセント、洗練されたタイポグラフィを備えた、プロフェッショナルなハリウッドのプリプロダクション・ストーリーボードを想起させるものにしてください。11個の番号付きストーリーボードパネルを、整然としたグリッド状に配置してください。各パネルには、シーンタイトル、タイムスタンプ、簡潔なアクション説明、カメラアングル、カメラの動きを表示してください。右側には、Sarahの小さなキャラクター参照パネルを追加し、すべてのフレームで一貫した外見を保つようにしてください。

Character

Sarah、25歳。上品なヨーロッパ系女性で、色白、長くウェーブのかかったブロンドヘア、ヘーゼルグリーンの瞳。アイボリーのフィットしたニットトップ、黒のトラウザーズ、白いスニーカー、控えめなゴールドジュエリーを身につけている。黒のPorsche 911 Carreraを運転する。各パネルを通して、顔立ち、髪型、服装、体型の比率を完全に同一に保ってください。

Story Panels

1. Early Morning Drive (0:00–0:02)
Sarahが日の出のアルプスの曲がりくねった道路をPorscheで走る。暖かなゴールデンライト。寄りのサイドプロフィール。ゆっくりとしたプッシュイン。

2. The Sign (0:02–0:03)
フロントガラス越しのPOV。古い木製の標識に "Scenic Route – Less Traveled." と書かれている。静止ショット。

3. The Decision (0:03–0:04)
Sarahがやわらかく微笑み、ハンドルを景観ルートのほうへ切る。車内フロントカメラ。

4. The Journey (0:04–0:06)
森、山道、湖、そしてドラマチックなカーブを走るPorscheを追うドローンショット。

5. Scenic Moments (0:06–0:08)
アルプスの道路、橋、谷、松林、透き通った湖の美しいモンタージュ。

6. Roadside Café (0:08–0:10)
Sarahが居心地のよい山のカフェに立ち寄る。年配の店主が親しげな笑顔でコーヒーを手渡す。ミディアムショット。

7. Back on the Road (0:10–0:11)
山々の中を走るPorscheのローアングル・トラッキングショット。

8. Hidden Viewpoint (0:11–0:13)
Sarahが雲の上にある展望スポットに到着する。近くにPorscheが駐車された、ワイドなシネマティックショット。

9. Quiet Reflection (0:13–0:14)
夕日を眺めながら深呼吸するSarahのクローズアップ・プロフィール。

10. Final Pull Back (0:14–0:15)
ドローンがゆっくりと引き、果てしない山々と雲を見渡すSarahとPorscheを明らかにする。

11. Ending Frame
ミニマルな黒背景に、エレガントなタイポグラフィで以下を表示：

The best journeys begin when you stop following the map.

 Visual Style

Ultra-photorealistic
Luxury automotive commercial
Porsche advertisement quality
ARRI Alexa 65
Anamorphic lenses
Golden hour lighting
Premium cinematic color grading
Soft depth of field
Natural human expressions
Smooth camera movement
Clean storyboard labels and timestamps
Black background with gold and white typography
16:9 landscape poster, high-resolution, professional film-production storyboard.

--- THREAD CONTINUATION ---
[Thread 1] Prompt – The Detour

15秒のシネマティックなミニムービー「The Detour」のための、プレミアムな映画用ストーリーボードを作成してください。レイアウトは、黒を基調としたラグジュアリーなデザイン、細いゴールドのアクセント、洗練されたタイポグラフィを備えた、プロフェッショナルなハリウッドのプリプロダクション・ストーリーボードを想起させるものにしてください。11個の番号付きストーリーボードパネルを、整然としたグリッド状に配置してください。各パネルには、シーンタイトル、タイムスタンプ、簡潔なアクション説明、カメラアングル、カメラの動きを表示してください。右側には、Sarahの小さなキャラクター参照パネルを追加し、すべてのフレームで一貫した外見を保つようにしてください。

Character

Sarah、25歳。上品なヨーロッパ系女性で、色白、長くウェーブのかかったブロンドヘア、ヘーゼルグリーンの瞳。アイボリーのフィットしたニットトップ、黒のトラウザーズ、白いスニーカー、控えめなゴールドジュエリーを身につけている。黒のPorsche 911 Carreraを運転する。各パネルを通して、顔立ち、髪型、服装、体型の比率を完全に同一に保ってください。

Story Panels

1. Early Morning Drive (0:00–0:02)
Sarahが日の出のアルプスの曲がりくねった道路をPorscheで走る。暖かなゴールデンライト。寄りのサイドプロフィール。ゆっくりとしたプッシュイン。

2. The Sign (0:02–0:03)
フロントガラス越しのPOV。古い木製の標識に "Scenic Route – Less Traveled." と書かれている。静止ショット。

3. The Decision (0:03–0:04)
Sarahがやわらかく微笑み、ハンドルを景観ルートのほうへ切る。車内フロントカメラ。

4. The Journey (0:04–0:06)
森、山道、湖、そしてドラマチックなカーブを走るPorscheを追うドローンショット。

5. Scenic Moments (0:06–0:08)
アルプスの道路、橋、谷、松林、透き通った湖の美しいモンタージュ。

6. Roadside Café (0:08–0:10)
Sarahが居心地のよい山のカフェに立ち寄る。年配の店主が親しげな笑顔でコーヒーを手渡す。ミディアムショット。

7. Back on the Road (0:10–0:11)
山々の中を走るPorscheのローアングル・トラッキングショット。

8. Hidden Viewpoint (0:11–0:13)
Sarahが雲の上にある展望スポットに到着する。近くにPorscheが駐車された、ワイドなシネマティックショット。

9. Quiet Reflection (0:13–0:14)
夕日を眺めながら深呼吸するSarahのクローズアップ・プロフィール。

10. Final Pull Back (0:14–0:15)
ドローンがゆっくりと引き、果てしない山々と雲を見渡すSarahとPorscheを明らかにする。

11. Ending Frame
ミニマルな黒背景に、エレガントなタイポグラフィで以下を表示：

The best journeys begin when you stop following the map.

 Visual Style

Ultra-photorealistic
Luxury automotive commercial
Porsche advertisement quality
ARRI Alexa 65
Anamorphic lenses
Golden hour lighting
Premium cinematic color grading
Soft depth of field
Natural human expressions
Smooth camera movement
Clean storyboard labels and timestamps
Black background with gold and white typography
16:9 landscape poster, high-resolution, professional film-production storyboard.

[Thread 2] @budgetpixel リンクをクリックすると、1つ作成できます
https://t.co/bBjPA2lDU6
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084606536115183616/img/o1sWVxz7nZecFWDg.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084606602150396341.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084606602150396341.mp4)**

**作者:** [Sarah Parker](https://x.com/SeharShinwari) | **ソース:** [Link](https://x.com/SeharShinwari/status/2084606602150396341) | **公開日:** 2026年8月4日

`Auto` `Supercar` `Photoreal` `Realistic World` `Creative Asset` `FPV & Aerial` `POV`

---

### A beautiful young woman named Aria is standing in a bright, modern kitchen…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
美しい若い女性アリアが、明るくモダンなキッチンで、上品なクリーム色の服を着て立っています。彼女は、色鮮やかな新鮮なフルーツが入った高級ポータブルブレンダーを手に持っています。彼女は温かい笑顔でカメラをまっすぐ見つめ、完璧な英語のリップシンクで自然に話します。

キャラクターのセリフ（音声）: こんにちは、みなさん！私はアリアです。私と同じくらいフレッシュなスムージーが好きなら、このポータブルブレンダーをきっと気に入るはず。USB充電式で、驚くほどパワフル。自宅でも、仕事場でも、ジムでも、旅行先でもぴったりです。お気に入りのフルーツを入れてボタンを1つ押すだけで、いつでもどこでも新鮮でヘルシーなスムージーを楽しめます。一口一口を大切にしましょう！」

アクション:

アリアは笑顔で、ブレンダーをカメラに見せます。

彼女はイチゴ、キウイ、マンゴー、ほうれん草をブレンダーに入れます。

彼女が電源ボタンを押すと、ブレンダーは滑らかに攪拌を始めます。

回転する刃と鮮やかなスムージーのクローズアップショット。

彼女はスムージーをグラスに注ぎ、一口飲んで自信に満ちた笑顔を見せ、親指を立てます。

ブランドロゴが入ったブレンダーの最終的なシネマティック・クローズアップ。

画面上のエンディングテキスト: 「フレッシュなスムージー。いつでも。どこでも。」

スタイル: 超リアル、ラグジュアリーなコマーシャル、シネマティックなカメラワーク、プレミアム製品広告、4K UHD、柔らかな自然光、リアルな表情、同期した英語音声、正確なリップシンク、浅い被写界深度、清潔感のあるモダンなキッチン、鮮やかな色彩、プロフェッショナルな広告品質、字幕なし、ハイエンドなブランド美学。

--- スレッド継続 ---
[スレッド1] @budgetpixel フレッシュにブレンド。より良い毎日を。  
一口ごとに新鮮さを。  
パワー。携帯性。完璧さ。  
いつでもブレンド。どこでも。  
あなたのスムージー、あなたらしく。  
ヘルシーな始まりをここから。  
小さなブレンダー。大きなパフォーマンス。  
毎日にフレッシュなエネルギーを。 https://t.co/vMIQZgjVL0

[スレッド2] @budgetpixel こちらをクリックして作成。  
https://t.co/gWJRlgiDha
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084608926797152256/img/4XqJxUl8cTvM0xzJ.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084609046418788489.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084609046418788489.mp4)**

**作者:** [Nyla Carter](https://x.com/TheAmmadFiles) | **ソース:** [Link](https://x.com/TheAmmadFiles/status/2084609046418788489) | **公開日:** 2026年8月4日

`Product Ad` `Tech` `Photoreal` `Realistic World` `Macro`

---

### SCENE CONTEXT

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
---
シーンのコンテキスト
雨の午後、雑然としたアンティーク人形店の中。大柄で裕福な男が通路を歩き、高い棚から等身大の人形を一体選び、レジで代金を払い、木箱に入れて蓋を閉める。カメラは店内に留まり、常に通路の影側に位置し、オペレーターの軸は、背の高い棚壁が二列に並ぶ中央通路をまっすぐ貫いている。

アクティブ参照
@image1 — 男、48歳、肥満体型で186 cm、薄くなった灰色がかったアッシュヘアを後ろに撫でつけている。鼻と頬には赤らんだ毛細血管の破れがあり、額には汗の膜。チャコールのカシミヤオーバーコートの下にミッドナイトブルーのスリーピーススーツ、オックスブラッドのシルクタイ、黒のキッドスキン手袋、右手小指に金の印章リング、真鍮の雄羊頭グリップ付きの黒檀の杖。参照と100%一致。
@image2 — 人形、棚の上に立つ身長ちょうど120 cmの等身大フィギュアで、同じフレームに入ると男の腰の高さにしか届かない。ラベンダーのギンガムのコルセットドレスにライラックのチュールスカート、光沢のあるパテントのライラック色オーバーニーブーツ、透け感のあるライラックのメッシュ袖、ライラックとブルーの編み込み髪に、小さなブルーベリーとアイスキャンディーのチャームが編み込まれている。両頬にはライラックの花が描かれ、胸元の高い位置に小さな濃色のほくろ。肌は、参照とまったく同じ顔立ちの上に、釉薬をかけた磁器のような細かなマットな艶を帯びている。参照と100%一致。

ロケーションマップ
前景: 小さなアンティーク磁器人形が一列に並び、各40 cm。カメラに最も近い棚の縁に沿って並び、顔はピント外れでフレーム下端を横切る。中景: 中央通路、オーク材の床板、真鍮レール上の移動式図書館用はしご、色分けされたばら売りのガラス眼球が入ったガラス製の薬瓶、開いたオルゴール機構とむき出しの真鍮ギア、虫食いだらけのドレスを着た蝋人形。背景: 通路の奥にある雨筋の入った高い窓が、一本の灰色の光の筋を廊下へ落としている。木製のカウンターの後ろには老いた店主の女性が座っており、ほとんど動かない。編み紐のコードに吊られた裸電球が通路中央にあり、風で左右4 cm揺れ、すべての人形の顔に影を滑らせる。色は素材から立ち上がる。温かいアンバーのタングステンが暗いオーク材と埃に沈み、冷たい灰色の窓光が濡れたガラスに沿ってにじみ、そして人形のドレスのライラックのチュールだけが、通路で唯一の清潔で飽和した色として読まれる。

最初のフレーム / ブロッキング
フレームはすでに何かが占めている状態で始まる。中景の薬瓶の中にある一つの青灰色のガラス眼球の極端なクローズアップがフレーム中央を満たし、左下隅にはぼけた磁器人形の手が横切っている。眼球の曲面の奥深くには、店のドアが開き、幅広い暗いシルエットが入ってくる歪んだ小さな反射が見える。男は遠景から入ってきて、通路をカメラに向かって歩いてくる。人形は最初の瞬間から、通路の奥の高い棚の上に立ち、まっすぐ通路を向いている。

フォーマットモード
明確なハードカットを伴うタイムド・マルチショット。カットは指定された箇所のみで行われ、カメラが自発的に切り替わることはない。

光学
0.0s〜2.5s — ECU、12° FOV、ガラス眼球へのテレディテール。反射は曲面の内側でシャープ、区間中のドリフトなし。
2.5s〜5.0s — MS、47° FOV、ニュートラルな人間視点、区間中のドリフトなし。
5.0s〜7.5s — WS からローアングルへ上昇、63° FOV、観察的、区間中のドリフトなし。
7.5s〜10.0s — CU、29° FOV、人形の顔にポートレート圧縮、区間中のドリフトなし。
10.0s〜12.5s — ECU、12° FOV、カウンター上の手へのテレディテール、区間中のドリフトなし。
12.5s〜15.0s — POVワイド、84° FOV、フレーム端にわずかなパースの伸び、区間中のドリフトなし。
全編を通してアナモルフィック特性: 縦長の楕円ボケ、裸電球からの柔らかな水平フレア、タングステンのハイライトごとに穏やかなハレーションが広がる。

カメラ
オペレーターは作品の大半で人形の高さで動き、レンズ高は床から100 cm〜130 cm、カメラ左の棚壁の影に立つ。ビート2は、男の歩行速度に合わせて、棚の面に沿って右から左へ時速3 kmで横移動するドリー追従。ビート3は素早い上方へのウィップパンで、0.9秒の縦方向モーションブラーを伴い、固定されたローアングルに収まる。ビート4は、持ち運ばれる人形をレンズの前に通す際の、2 cmの揺れを伴うハンドヘルド追従。ビート6は、木箱の内側から真上を見上げる固定POV。フォーカスは意図的にラックされ、毎回はっきりと決まる。カメラボディの特性: 広いトーナルレンジ、電球と濡れた窓のハイライトは柔らかくロールオフし、影は棚の奥深くまでディテールを保つ。

アクション
0.0s〜2.5s — ガラス眼球は瓶の中で静止している。その反射の中で店のドアが開き、上の真鍮のベルが跳ね、@image1 の暗いシルエットが入ってきて通路を進み始める。ゆっくりしたラックフォーカスが、眼球の表面から反射へと移る。
2.5s HARD CUT
2.5s〜5.0s — @image1 の手袋をした右手が、胸の高さで並ぶ小さな磁器人形の顔の列に沿って進み、指先が順番にそれぞれの頬をかすめる。カメラはその手に合わせて追従する。彼の頭はフレーム上端の外にあり、画面に入るのはコートの前身頃、タイ、そして動く手だけ。杖は二歩ごとに一度、床板を叩く。
5.0s HARD CUT
5.0s〜7.5s — 手袋をした手が、人形の頬の上でぴたりと止まる。WHIP PANで上方へ、0.9秒の縦ブ
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084610850711638016/img/OxXpmgVe2b2kByVD.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084611364786458855.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084611364786458855.mp4)**

**作者:** [Ivanna | AI Art & Prompts](https://x.com/ivanka_humeniuk) | **ソース:** [Link](https://x.com/ivanka_humeniuk/status/2084611364786458855) | **公開日:** 2026年8月4日

`Horror` `Eerie` `Photoreal` `Realistic World` `POV` `Macro`

---

### CAMERA:

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
CAMERA:
DV風の16mmビデオカメラの美学で、自然な手持ちの揺れがある。シーケンス全体はCHASEの視点で撮影され、彼女が自分自身を記録し、ときどきカメラを置いてハンズフリーのショットを撮る。わずかなブレ、均一でないフレーミング、ゆっくりしたオートフォーカス、不器用なズーム、そして時折、彼女の顔が部分的にフレームアウトすることを想定する。ビデオカメラ本体は一切映らない。

LOOK:
わずかなぼかし、かすかなテープグレイン、ハイライトのにじみ、オート露出のちらつき、抑えめのコントラスト、そして生き生きとした肌色を伴う、柔らかなアナログテープの質感。ライティングは各ロケーションごとに自然に変化する：温かい化粧台の電球 → バンの窓から差し込む冷たい昼光 → ほの暗いサウンドチェックの照明 → イベント前の明るいバックステージ入口。

STYLE:
各ロケーションをつなぐ高速カットによる、テンポの速い期待感のモンタージュ。勢いを保つため、トランジションの動きはややスピードアップされている。生の会話の代わりに、内省的なナレーションが物語を運ぶ。ムードは静かな準備から緊張した期待へと徐々に移り変わり、ファンに会う直前の高揚感で終わる。

Character

CHASE — 韓国のアイドル（Image1）、20代。長くまっすぐな黒髪で、最後には完全にスタイリングされている。みずみずしいガラス肌、大きく表情豊かな目、やわらかなコーラルピンクの唇。最初はドレッシングローブ姿で、後に控えめなファンミーティング用の衣装に着替える。衣装は長袖で露出を抑え、アクセサリーもさりげない。

Location Progression

化粧台のある控室（午後） → 移動中のバン（日中） → サウンドチェック中の空の会場（夕方早め） → カーテンの裏のバックステージ入口（夕方）。

Storyboard (15 seconds, 8 shots)

1. (~2s | Vanity | Camera on tripod | Warm lighting)
CHASEは静かに座り、オフカメラの誰かが髪を仕上げているあいだ、鏡を見つめている。
Voiceover: "Every fan meeting begins with these peaceful moments."

2. (~2s | Vanity | Close-up)
手が慎重にヘアピンを所定の位置に留めるクローズショット。聞こえるのは、やわらかな室内の環境音だけ。

3. (~2s | Van | Handheld | Window light)
窓際に座り、街が流れていくのを眺めながら、彼女は無意識に手をもてあそぶ。
Voiceover: "The butterflies always arrive during the drive."

4. (~2s | Van | Close handheld)
彼女はゆっくり息を吐き、折りたたんだ自分の手元を見下ろす。静かな道路の環境音のみ。

5. (~2s | Empty stage | Handheld)
ステージにひとり立ち、マイクをテストすると、その声が会場に響き渡る。
Voiceover: "Hearing my own voice in an empty hall always feels surreal."

6. (~2s | Soundcheck | Macro detail)
彼女の手がマイクスタンドを調整するクローズアップ。エコーは静寂へと消えていく。ナレーションなし。

7. (~1.5s | Backstage | Medium handheld)
カーテンの裏で待ちながら、客席からのこもった歓声が大きくなる中、彼女は深く息をひとつ吸う。
Voiceover: "Then suddenly..."

8. (~1.5s | Backstage | Final shot)
明るいステージライトへ向かって一歩踏み出すと、心からの笑顔が浮かぶ。
Voiceover: "...I remember they're all here for me."
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084614558040408064/img/ASDC6Te9rypkanxV.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084614599928852918.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084614599928852918.mp4)**

**作者:** [WasifAI](https://x.com/doctorwasif) | **ソース:** [Link](https://x.com/doctorwasif/status/2084614599928852918) | **公開日:** 2026年8月4日

`Portrait & Fashion` `Influencer` `Music & Dance` `Concert` `Retro Film` `Realistic World` `POV` `Macro`

---

### Create a 15 second 16:9 photorealistic social video in one continuous handheld…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
15秒、16:9のフォトリアルなソーシャル動画を、30fpsのワンカット連続手持ちスマートフォン撮影で作成する。明るい晩朝、刈りたての緑の芝生の上、マットなタン色の大きな工業用建物の脇。奥の背景には黒い金属フェンス、細い道路、そして駐車された白い車が1台ある。空は淡い青で、柔らかな白い雲が浮かぶ。日差しは明るいがやや拡散しており、自然な肌色、柔らかな地面の影、わずかな自動露出の変化が生じる。

胸の高さからシーンを捉える。若い男性が左前景に三分の一背面で立っており、ミディアムレングスの明るい茶髪、背中に大きな白いグラフィックの入った濃いフォレストグリーンのシャツ、ネイビーのアスレチックショーツを着て、蛍光イエローのテニスボールを持っている。若い女性は右側の少し離れた場所に立っており、黒髪を後ろで束ね、バーガンディのノースリーブトップス、ゆったりした白いトラウザーズを着ている。両方のボールを追いやすいよう、中央は無地の壁を背景に空けておく。

0〜2秒。女性がオレンジ色のバスケットボールをフレーム上部中央へ高く投げ上げる。男性は少しかがみ、肩を回しながらその軌道を見極め、テニスボールを右耳の横まで引き上げる。自然な手の動き、そよ風でわずかに揺れる髪、遠くの交通音、鳥の声、静かなフィールドの環境音を使う。

2〜4秒。彼が説得力のあるオーバーハンドスローを完了する。体重が後ろ足から前足へ移り、腰が肩より先に回転し、肘が伸び、手首が弾かれ、テニスボールが指先を離れる際に正確なモーションブラーが付く。カメラオペレーターはわずかに遅れて反応し、その後、小さな人間らしいマイクロシェイクを伴って上方へティルトする。

4〜8秒。両方のボールを同じフレーム内で追跡する。バスケットボールはカメラに向かって斜めに漂い、徐々に大きくなる。テニスボールは右下からバスケットボールへ向かって、より速い上昇弧を描いて飛ぶ。速度、重力、回転、スケール、影、奥行きが物理的に整合するように保つ。距離が縮まるにつれて、ごく穏やかなデジタルクロップのみを加える。男性は左下に一部見えたまま、飛行を見守っている。

8〜9.2秒。滑らかなスピードランプで、鮮明なハイスピードスローモーションへ移行する。テニスボールがバスケットボールの外側に正確なエッジ接触で当たり、衝突時にごくわずかな圧縮が見える。そのあり得ない瞬間は数フレームだけ保持する。

9.2〜12.5秒。意図的に編集されたように見える、シームレスなコメディ調の視覚効果を発生させる。接触点から、コンパクトなオレンジ色の火球、粉じんのような煙、発光する破片、そしてバスケットボール素材の小片が広がる。テニスボールは爆発の右端付近に見え続ける。編集でJESUS SAVESの文字を入れられるよう、中央には明るく साफい空間を残す。深い衝撃音、短いベースの落ち込み、1拍の無音、その後に温かいゴスペルクワイアの和音を加える。

12.5〜15秒。煙が自然に薄れていく。少し下へティルトして、信じられない様子で上を見つめる男性と、両手を上げて反応する女性を捉える。最後は、消えゆくクワイアと屋外の環境音の中で、安定した2秒のホールドで終える。

リアルなスマートフォンのシャープネス、適度なローリングシャッター、控えめなスタビライゼーション、自然なフォーカスブリージング、正確なモーションブラー、一般的なソーシャル動画の色味を使用する。顔の一貫性、解剖学的に正しい手、変わらない衣服、連続した物体の軌道を維持する。余分な人物、重複した手足、ゴムのようなボールの変形、不自然な影、過剰なレンズフレア、生成された文字、ロゴ、ウォーターマーク、UI要素は入れない。
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084328133105475584/img/gMpQt43iCFTdTV7s.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084614830141620292.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084614830141620292.mp4)**

**作者:** [BMX](https://x.com/bmx_ai13) | **ソース:** [Link](https://x.com/bmx_ai13/status/2084614830141620292) | **公開日:** 2026年8月4日

`Sports` `Other Competition` `Photoreal` `Realistic World` `VFX` `Slow-Mo`

---

### 15-second, 16:9 premium technology launch film for an ordinary carrot. Pure…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
---
15秒、16:9のプレミアムなテクノロジー製品発表フィルム。題材はごく普通のニンジン。純黒の背景、完璧なスタジオライティング、シネマティックなマクロ撮影、超スロー回転、ミニマルな白いサンセリフ体のタイトル、幽玄なエレクトロニック・スコア。ばかばかしい題材を、完全な真剣さと抑制をもって扱う。全編を通して同じフォトリアルなニンジンを維持すること：濃いオレンジレッドの皮、細かな縦の凹凸、短くみずみずしい緑の葉柄。  [0–4s] まっすぐなニンジン全体が暗闇の中に浮かび、ゆっくり回転する。クールな白いリムライトがシルエットを際立たせ、柔らかな暖色のハイライトが皮の上を移動する。マクロの水滴が表面をゆっくり転がる。フェードイン：「Carrot Pro」「Remarkably fresh.」  [4–8s] スタジオのマクロショットを3連続で素早く見せる：1. 湿った断面が、精密なトップライトの下で放射状の繊維と繊細な輪を露わにする。タイトル：「Vibrant.」 2. 長い曲線と細かな凹凸が、サイドの逆光で彫刻的なシルエットを形作る。タイトル：「Crisp.」 3. 微細なミストが皮に降り、超スローの動きで水滴が溝にまとわりつく。タイトル：「Sweet.」  [8–12s] ニンジンが空中で優雅に回転し、緑の葉柄は自然な慣性に従って揺れる。下から清潔な人間の手が入ってきてしっかり受け止め、その後、信じられる重さとグリップ感で回転させる。抑制されたオレンジゴールドの光の軌跡がシルエットをなぞり、音楽が壮大なクライマックスへ達する。革命的なフラッグシップハードウェアのようなヒーローショット。表示：「The most powerful carrot ever.」「20% crunchier than the previous generation.」  [12–15s] 音楽が収束する。同じニンジンが、フレーム中央で十分なネガティブスペースを伴い、単独で浮かびながら直立している。表示：「From $3」「Carrot Pro. Rooted in flavor.」最後はクリーンな電子音のチャイム1回で締め、最終フレームを製品ポスターのようにホールドする。  セリフなし。指定された正確なテキストのみ。追加の字幕、ロゴ、キッチン用品、調理器具、土、パッケージ、擬人化、変形した手は不要。すべてのショットでニンジンの形、色、比率を維持すること。

--- QUOTED TWEET ---
海螺H3を使えば、シンプルなプロンプトでも質感のある広告映像が作れます。Appleの広告風の作品を模して制作しました。
プロンプトはコメント欄をご覧ください。 https://t.co/1ZpeHQx33m
---
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084614317530550272/img/agG74ohB8QpSThZ2.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084614963033944548.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084614963033944548.mp4)**

**作者:** [underwood](https://x.com/underwoodxie96) | **ソース:** [Link](https://x.com/underwoodxie96/status/2084614963033944548) | **公開日:** 2026年8月4日

`Product Ad` `F&B` `Photoreal` `Realistic World` `Macro` `Slow-Mo` `VFX`

---

### 【风格】超写实烘焙厨房魔术短视频（Photoreal Kitchen Magic

#### 📝 プロンプト

```
【スタイル】超写実のベーキングキッチン・マジック短編動画（Photoreal Kitchen Magic）
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084616589706694656/img/8nYhoKD7raYhaxBO.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084616712981536826.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084616712981536826.mp4)**

**作者:** [探路AI](https://x.com/TanLuAI) | **ソース:** [Link](https://x.com/TanLuAI/status/2084616712981536826) | **公開日:** 2026年8月4日

`Food` `Cooking` `Photoreal` `Fantasy` `VFX`

---

### Create a 15-second cinematic breakup scene in strict 16:9 landscape, 1080p…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
16:9の横長、1080pで、15秒のシネマティックな別れのシーンを、リアルな韓国ドラマの感情的なクローズアップスタイルで作成してください。登場人物はどちらも20代の成人アジア人男性と女性です。

REFERENCE:
image1 = 女性のメイン参照画像。
image1を、女性の顔、顔の比率、髪型、髪色、衣装、カラーパレット、年齢印象、体型、肌の色、スタイリング、見えているアクセサリー、そして全体的に認識できる雰囲気の厳密な参照として使用してください。新しい衣装、髪型、髪色、メイク、アクセサリー、体型を勝手に作らないでください。image1に写っているすべての見える服、髪、アクセサリー、スタイリングを一貫して保持してください。彼女の顔は、どのショットでも常にシャープで、はっきりと認識できる状態でなければなりません。

SCENE:
夜の静かな川沿いの遊歩道、または小さな住宅街の橋。暗い水面に柔らかな反射、遠くの街明かり、ぼけた緑の木々、そして暖かな街灯のボケ。孤独で、静かで、感情的に重い雰囲気。まるで静かな街角での最後の別れのように。85mmのポートレート望遠レンズ、非常に浅い被写界深度、暖かく柔らかな夜の照明、控えめなフィルムグレイン、上質な韓国TVドラマのリアリズムを使用してください。カメラは安定しており、呼吸のようなごくわずかな動きだけに留めます。

CHARACTERS:
image1の女性が絶対的な感情の中心です。彼女の顔は常にピントが合っていなければならず、リアルな肌の質感と自然な顔のディテールを保ってください。肌を過度にレタッチしないでください。

成人男性は右側にぼけた前景の人物として立ち、常にカメラに背を向けています。見えるのは、ぼけた後頭部、肩、そして片手だけです。はっきりした顔は見せないでください。彼が焦点を奪ってはいけません。

STORY:
これは、別れると決めた後の二人の最後の会話です。女性は落ち着いて、礼儀正しく、品位を保とうとしていますが、今にも崩れそうです。まだ彼を愛していますが、この別れが最後だと分かっています。男性は沈黙を保ちます。彼の唯一の行動は、彼女の頬にゆっくりと優しく触れることだけです。感情の核は静かな失恋です。彼女は別れが彼に少しでも痛くならないように笑おうとしますが、小さな表情のひとつひとつが、内側で彼女が崩れていくことを示しています。

EMOTIONAL ACTING RULE:
シーンを空っぽに、静止したままに、無表情にしないでください。女性は15秒間を通して、連続した微細な感情変化を見せる必要があります。顔が凍りついたままになってはいけません。

重層的な感情演技を使ってください:
濡れた下まぶた、わずかな目の震え、小さく失敗する笑み、かすかな唇の震え、顎の緊張、小さな飲み込み、息が詰まる感じ、短い視線の落下、現れては崩れる笑顔、ひとつの静かな泣きそうな瞬間、そして壊れやすい笑顔の戻り。悲しみは単なる泣き顔よりも深く感じられるべきです。彼女は泣かないようにしているのに、顔がそれを裏切り続けます。

TIMELINE:

0:00–0:02.5
女性の顔のタイトなクローズアップ。男性のぼけた肩と後頭部が右前景に残っています。彼女は濡れた目で静かに彼を見つめます。表面上は落ち着いていますが、その下には傷つきと疲労があります。唇が少し開き、何か言いたそうですが、言葉は出てきません。小さな息が喉につかえます。彼女は涙をこらえようとして、ゆっくり一度まばたきします。下唇がごくわずかに震え、その後で静かに押さえます。ほんの一瞬、彼女の目は「行かないで」と無言で訴えているように見えます。

0:02.5–0:05.0
彼女は視線を落とします。まつげは少し濡れて見えます。唇を結び、顎を軽く強めて、なんとか自分を立て直そうとします。喉が小さく動き、飲み込みます。静かに息を吸いますが、その呼吸は不安定です。彼女は再び顔を上げ、笑おうとします。最初の笑顔は途中で失敗します。口角が一瞬上がるものの、悲しみが重すぎてまた下がります。目は潤んで痛々しく、言えなかった言葉でいっぱいです。

0:05.0–0:07.5
彼女はもう一度笑おうとします。今度はさらに弱く。笑みはかすかで、壊れやすく、ほとんど申し訳なさそうです。目はその笑顔と一致していません。傷つき、後悔し、言えないことが詰まっています。彼女は小さく息を吐きます。それは、笑いになる前に壊れてしまう静かな笑いのようです。彼女の表情はこう語るべきです: 「うまくいくはずだったのに、もう無理だって分かってる。」彼女は視線を合わせ続けますが、見ているのがつらすぎて、短く目を落とします。

0:07.5–0:10.0
男性は沈黙したままです。ぼけた右側から、彼はゆっくりと片手を上げ、彼女の左頬にそっと手のひらを置きます。動きはゆっくり、自然で、途切れず続くものでなければなりません。指は解剖学的に正しく見え、彼女の目を覆ってはいけません。手のひらが頬に触れた瞬間、彼女の表情ははっきりと崩れます。まぶたが下がり、呼吸が一瞬止まり、彼女の頬は無意識に少しだけその手に寄りかかりますが、すぐに気づきます。この無意識の寄りかかりは胸が締めつけられるようでなければなりません。まるで、別れると決めたのに、体だけはまだそこに留まりたがっているかのように。目はさらに潤みますが、派手な涙の流れはありません。彼女は泣きそうになり、そこで踏みとどまります。

0:10.0–0:12.5
彼女は涙を浮かべたまま彼を見返します。痛みを伴う笑顔がゆっくり現れます。最初は抑えられ、どうしようもない表情で始まり、やがて繊細な泣き笑いになります。眉は悲しみでわずかに上がります。口は笑おうとしますが、その笑みは震えます。その笑顔は、彼に感謝し、許し、同時に別れを告げているように感じられるべきです。男性の手はしばらく頬に置かれたあと、ゆっくりとフレーム外へ下がります。手が離れた瞬間
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084622167829098496/img/T-W0e_azFPMZBgvG.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084622402051612829.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084622402051612829.mp4)**

**作者:** [Pyona](https://x.com/pyona_ai) | **ソース:** [Link](https://x.com/pyona_ai/status/2084622402051612829) | **公開日:** 2026年8月4日

`Story` `Drama` `Photoreal` `Realistic World`

---

### 00:00 - Macro shot of the strap under grazing side light.

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
00:00 - 斜めのサイドライトの下でストラップを捉えたマクロショット。
00:03 - カメラがダイヤルと機構の上を滑らかに飛び越えていく。
00:07 - 赤い岩肌の上で、時計が暗闇から姿を現す。

--- 引用ツイート ---
https://t.co/pd5OwGiSbm

--- 関連記事: Claude Design + Claude Code + GitHub: クライアント案件のための本番パイプライン ---
## 0. なぜこの3つのツールは一緒に使うべきなのか

それぞれがクライアント案件の中で別々の問題を解決します。役割を混同すると、コストがかさみます。
Claude Design は承認を解決します。クライアントは仕様書を読めません。画面を見て「ここを動かして」と言うことはできます。Design なら、20分で3つの方向性を出せるキャンバスを用意でき、さらにコメント専用アクセスのリンクをクライアントに送れます。
Claude Code は実装を解決します。ターミナルとクラウド上で動き、リポジトリ全体を読み、コードを書き、テストを実行し、プルリクエストを開きます。
GitHub は証跡と引き渡しを解決します。何を、いつ、どのタスクに対して作ったのか、誰がレビューしたのかを示せる唯一の場所です。クライアントにとっては受け入れ証跡です。あなたにとっては、6週間後に「実際に何をやったの？」と聞かれたときの防御になります。
このスタックが個々の合計を上回る理由は、デザインシステムが頭の中ではなくリポジトリにあるからです。Claude Design は GitHub リポジトリからそれを読み込み、ゼロから新しいものを作るのではなく、クライアントの実際のコンポーネントからモックアップを生成します。続いて Claude Code が同じコンポーネントを実装します。Git がそのループを閉じます。

## 1. 役割マップ: 何をどこでやるか

 
覚えておくべき境界線はこれです。Design は「見た目はどうか」に答え、Code は「どう動くか」に答え、GitHub は「誰がいつ承認したか」に答えます。

## 2. 初回セットアップ

これは一度だけ行います。以後のプロジェクトでは再利用します。
2.1 Claude Code
必要なのは有料プランです: Pro、Max、Team、Enterprise、または Claude Console アカウント。無料の claude.ai には含まれていません。
ネイティブインストーラーが 2026 年初頭に主要な導入方法になりました。npm は現在では旧方式です。
 
確認してサインインします:
 
2025 年に npm 経由で入れたなら、移行してください。古いバイナリが PATH 上でネイティブ版を上書きし、修正したはずなのに何も変わらない理由が分からず、午後を無駄にすることになります。
 
後で重要になるバージョン依存があります。/design-sync は Claude Code v2.1.181 で追加されました。コマンドが見つからない場合は /update を実行し、新しいセッションを開いてください。
2.2 GitHub CLI
 
gh が必要なのは2つです。テンプレートからリポジトリを作成することと、/web-setup を使って Claude Code のクラウドセッションにトークンを同期することです。
2.3 Claude GitHub App と Actions
これにより、issue や pull request 内で @claude が使えるようになります。
最短手順。ターミナルでプロジェクトディレクトリから実行します:
 
このコマンドはリポジトリに Claude GitHub App をインストールし、その後ワークフローファイルと API キーの secret を追加するかどうかを案内します。v2.1.187 時点では、Skip for now を選んで App のみをインストールし、後で同じコマンドを再実行してワークフロー手順に戻ることができます。
要件: リポジトリの管理者権限。最短手順は Claude API を直接使うユーザーにのみ有効です。Bedrock と Google Cloud では手動手順が必要です。
/install-github-app が失敗した場合の手動手順:
1. App をインストール: https://github.com/apps/claudePermissions が要求する権限: Contents の read/write、Issues の read/write、Pull requests の read/write。
1. secret を Settings → Secrets and variables → Actions → New repository secret に追加。従量課金なら ANTHROPIC_API_KEY。
または、Pro か Max を使っていて API キーを作りたくないなら CLAUDE_CODE_OAUTH_TOKEN。claude setup-token でローカル生成します。

1. anthropics/claude-code-action の examples/claude.yml からワークフローを .github/workflows/ にコピーします。
テスト方法: issue を開いて @claude take a look at the README. と書きます。1分以内に応答が返るはずです。
最もよくある失敗は、/claude と入力してしまうことです。トリガーは @claude です。
2.4 Web 上の Claude Code
 
これにより、ノートPCを1台の案件に固定せずに、3つのクライアント案件を同時に回せます。
claude.ai/code で利用でき、Pro、Max、Team、さらに Enterprise のうち premium または Chat + Claude Code の席を持つユーザー向けの research preview です。
クラウドセッションに GitHub へのアクセスを与える方法は2つあります:
 
この部分は2回読んでください。クラウドセッションは、接続された GitHub アカウントが見える任意のリポジトリにアクセスできます。App がインストールされているものだけではありません。App をインストールすると Auto-fix 用の PR webhook が有効になります。セッション単位のアクセス制御ではありません。複数のクライアントを扱い、分離が必要なら、GitHub 側でチームとリポジトリのメンバーシップを使って制限してください。
主要コマンド:
 
--cloud は、現在のディレクトリの GitHub リモートを現在のブランチでクローンします。ローカルのコミットは先に push してください。VM はあなたのマシンではなく GitHub からクローンします。古い --remote という表記も非推奨の別名としてまだ使えます。
リポジトリに GitHub リモートがない場合、Claude Code はそれを bundle して直接アップロードします。制限: 少なくとも1つのコミットがある git リポジトリであること、bundle が 100 MB 未満であること、未追跡ファイルは除外されること（先に git add を実行）、そして GitHub 認証が設定されていないと bundle したセッションからリモートへ push できないこと。
--teleport の要件: 作業ツリーがクリーンであること、同じリポジトリであること（fork ではない）、セッションブランチがリモートに push 済みであること、そして同じ claude.ai アカウントであること。
2.5 Claude Design
claude.ai/design で開くか、Claude Desktop のサイドバーから開きます。Pro、Max、Team、Enterprise で beta 提供。Enterprise ではデフォルトでオフになっており、管理者が Organization settings で有効化します。
Web とデスクトップのみ。モバイルクライアントはありません。
ターミナルからデザインプロジェクトを操作するには、Claude Design MCP サーバーに接続します:
 
その後、Claude Code 内で:
 
公式ヘルプセンターによる /design-sync の動作: Claude Design で Claude が作るものがすべて、既存のコンポーネントから始まるように、デザインシステムを取り込みます。
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084639317901647872/img/UCRQljKorYQYgh3x.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084639360238936396.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084639360238936396.mp4)**

**作者:** [Quri](https://x.com/qurisage) | **ソース:** [Link](https://x.com/qurisage/status/2084639360238936396) | **公開日:** 2026年8月4日

`Product Ad` `Luxury` `Photoreal` `Realistic World` `Macro` `FPV & Aerial`

---

### A cozy Studio Ghibli-inspired cinematic cooking animation showing a delicious…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
心地よいスタジオジブリ風の cinematic な料理アニメーションで、食欲をそそるグリルチキンのシャワルマラップと、爽やかなミントライムソーダが手順ごとに作られていく様子を描く。まず、縦型ロティサリーでジューシーなシャワルマ肉をスライスし、新鮮なライムをカットし、氷、ミント、スパークリングソーダを冷えたグラスに加える。次に、温かいトルティーヤにグリルチキン、レタス、トマト、オニオン、紫キャベツ、クリーミーなガーリックソースを重ねて包み、完璧なラップに仕上げる。最後に、ドリンクにミントとライムを添え、弾ける泡と、素朴な木製カウンターの上に並んだ完成した料理を、温かな黄金色のライティング、非常に精細なフード表現、滑らかな camera movement、柔らかな被写界深度、そして魔法のような手描きのジブリ風アートスタイルで見せる。
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084649769419579392/img/UP-WtT6vIOwuI_SX.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084649816920146182.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084649816920146182.mp4)**

**作者:** [NoorAI](https://x.com/noorwithwifi) | **ソース:** [Link](https://x.com/noorwithwifi/status/2084649816920146182) | **公開日:** 2026年8月4日

`Food` `Cooking` `Anime 2D` `Realistic World`

---

### Create a 15-second ultra-photorealistic documentary clip in 16:9 that feels…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
16:9で、まるで実際の遠征中に野生動物写真家が撮影したかのように、完全にリアルに感じられる15秒の超フォトリアルなドキュメンタリークリップを作成すること。映像は、本物のDSLRによるフィールド映像と見分けがつかないものでなければならず、映画のワンシーンでも、CMでも、CGIでもないこと。

Camera: Handheld Sony FX3 with a 24–70mm lens. Natural operator movement, slight breathing, tiny framing corrections, realistic autofocus adjustments, authentic exposure shifts, no cinematic camera moves.  
0–4 seconds A wildlife photographer quietly walks along a remote mountain lake at blue hour. Gentle wind ripples the water. Birds can be heard in the distance. The camera casually scans the shoreline with no dramatic music or editing.  

4–8 seconds Without warning, a small section of the lake begins glowing with thousands of tiny blue lights beneath the surface. The camera hesitates in surprise, zooms in naturally by hand, and struggles to keep focus as the operator whispers, "What is that?"  

8–12 seconds The glowing area rapidly expands across the lake. Millions of bioluminescent organisms swirl beneath the water, creating hypnotic patterns that look completely natural. The camera shakes slightly as the operator slowly backs up in disbelief.  

12–15 seconds A single fish jumps out of the glowing water, sending brilliant blue ripples across the lake. The camera instinctively follows the splash, then holds on the surreal glowing lake for two seconds before the clip ends naturally.  

Visual Style: Real wildlife documentary, authentic field footage, National Geographic realism, BBC Earth style, Sony FX3, full-frame DSLR look, true optical bokeh, realistic skin tones, physically accurate water reflections, natural dynamic range, subtle sensor noise, gentle film grain, no CGI look, no AI artifacts, no oversaturated colors.  

Audio: Only authentic environmental sound wind, birds, water, footsteps, distant insects, subtle human breathing, and one quiet whispered reaction.

--- THREAD CONTINUATION ---
[Thread 1] 16:9で、まるで実際の遠征中に野生動物写真家が撮影したかのように、完全にリアルに感じられる15秒の超フォトリアルなドキュメンタリークリップを作成すること。映像は、本物のDSLRによるフィールド映像と見分けがつかないものでなければならず、映画のワンシーンでも、CMでも、CGIでもないこと。  

Camera: Handheld Sony FX3 with a 24–70mm lens. Natural operator movement, slight breathing, tiny framing corrections, realistic autofocus adjustments, authentic exposure shifts, no cinematic camera moves.  
0–4 seconds A wildlife photographer quietly walks along a remote mountain lake at blue hour. Gentle wind ripples the water. Birds can be heard in the distance. The camera casually scans the shoreline with no dramatic music or editing.  

4–8 seconds Without warning, a small section of the lake begins glowing with thousands of tiny blue lights beneath the surface. The camera hesitates in surprise, zooms in naturally by hand, and struggles to keep focus as the operator whispers, "What is that?"  

8–12 seconds The glowing area rapidly expands across the lake. Millions of bioluminescent organisms swirl beneath the water, creating hypnotic patterns that look completely natural. The camera shakes slightly as the operator slowly backs up in disbelief.  

12–15 seconds A single fish jumps out of the glowing water, sending brilliant blue ripples across the lake. The camera instinctively follows the splash, then holds on the surreal glowing lake for two seconds before the clip ends naturally.  

Visual Style: Real wildlife documentary, authentic field footage, National Geographic realism, BBC Earth style, Sony FX3, full-frame DSLR look, true optical bokeh, realistic skin tones, physically accurate water reflections, natural dynamic range, subtle sensor noise, gentle film grain, no CGI look, no AI artifacts, no oversaturated colors.  

Audio: Only authentic environmental sound wind, birds, water, footsteps, distant insects, subtle human breathing, and one quiet whispered reaction.
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084663843285000192/img/seFyZWK9xY3K-8fO.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084664062152265761.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084664062152265761.mp4)**

**作者:** [Cherry](https://x.com/hey_am_cherry) | **ソース:** [Link](https://x.com/hey_am_cherry/status/2084664062152265761) | **公開日:** 2026年8月4日

`Animals` `Wildlife` `Photoreal` `Realistic World` `POV` `VFX`

---

### 真人实拍级韩国电影写实质感,全程手持微晃镜头叠加院线级冷调色,青灰偏蓝的阴天色温,肤色保留冷白通透;针织开衫的绒感、百褶裙摆的翻动、发丝飘散、雨前阴云的压抑层次…

#### 📝 プロンプト

```
実写級の韓国映画のリアルな質感。全編を通して手持ちのわずかな揺れを加えたカメラワークに、劇場公開レベルの寒色グレーディングを重ね、青みがかったグレー寄りの曇天の色温度、肌色は冷たく白く透き通る質感を保つ。ニットカーディガンの起毛感、プリーツスカートの揺れ、髪の毛の散り、雨前の重苦しい雲の層まで、すべて写実的に再現。粗いフィルムグレイン、浅い被写界深度の人物クローズアップを主体とする。8K
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084649611839352832/img/Kqw4lxGTS-ope2oT.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084668685042491766.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084668685042491766.mp4)**

**作者:** [John](https://x.com/johnAGI168) | **ソース:** [Link](https://x.com/johnAGI168/status/2084668685042491766) | **公開日:** 2026年8月4日

`Portrait & Fashion` `Portrait` `Photoreal` `Realistic World`

---

### A beautiful young East Asian woman with long black hair styled half-up, soft…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
---
長い黒髪をハーフアップにした美しい若い東アジア系の女性。ナチュラルで柔らかなメイク、パールのイヤーカフ、重ね付けしたゴールドのネックレスを身につけ、白いサテンのスリップドレスを着て、豪華でモダンな寝室に立っている。朝のやわらかな陽光が薄手のカーテン越しに差し込む。彼女は背の高いヴィンテージミラーを見つめながら、そっと髪に触れている。すべてが穏やかで上品な雰囲気に満ちている。カメラは彼女の後ろからゆっくりとドリーインし、女性とその鏡像の両方を映し出す。超リアル、シネマティックなライティング、浅い被写界深度、4K、非常に精細な肌表現、自然な動き。
---
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084669896030601216/img/cB3j4oY0spBSJm2N.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084669925239792076.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084669925239792076.mp4)**

**作者:** [Zarah](https://x.com/Ho_Neyy_) | **ソース:** [Link](https://x.com/Ho_Neyy_/status/2084669925239792076) | **公開日:** 2026年8月4日

`Portrait & Fashion` `Portrait` `Photoreal` `Realistic World`

---

### Amateur behind-the-scenes phone video, ~6s, low at the concrete tank lip beside…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
---
アマチュアの舞台裏スマホ動画、約6秒。コンクリートのタンク縁の低い位置、ドリー・トラックの脇、ENORMOUS な航空機格納庫サイズの巨大なサウンドステージ内。そこには、密集した長方形の高層ビルが立ち並ぶ高密度の島の大都市の小さな模型があり、背の高い段状のアールデコ尖塔、先端が針のような塔、そして長い吊り橋が MASSIVE な床埋め込み式の水槽の中に置かれている。画面上部からはみ出すほどそびえる COLOSSAL な青いスクリーンにはオレンジのクロスがあり、危険 полосのタンク縁にはスタッフ、カメラクレーン＋スチール製ドリー・トラック。手持ち、超広角のスマホレンズ、センサーグレイン、LEDライトがオート露出で白飛び気味。

0–2s ESTABLISH — 巨大で静かなセットがそのまま保たれる。小さな模型は穏やかで、実寸大のスタッフは危険 полосのタンク縁のそばで待機。洞窟のような広い空間とそびえ立つ青いスクリーンがミニチュアを圧倒し、実物のクリーチャー・リグはフレーム外すれすれに吊られている。

2–4s TRIGGER — 画面外で監督が「Action!」と叫ぶ。巨大な実物クリーチャー・リグが作動し、油圧機構によって巨大なオリジナルのモンスターフットがミニチュアへ向かって下方に振り下ろされる。

4–6.5s IMPACT (hero beat) — 巨大な実物クリーチャーの足が模型を突き破って落下し、小さな街に対して何階建てもあるように見え、建物を本物の粉塵の噴煙と飛び散る瓦礫へと押し潰す。砂塵の衝撃波が外側へ広がり、スタッフは身をすくめて後ずさる。クレーンが滑るように動き、ミニチュアの石材片と粉塵がスマホカメラの前を吹き抜ける。そびえ立つ青いスクリーンはなお圧倒的で、瓦礫の噴煙が何階分もの高さまで立ち上がる。

6.5–8s AFTERMATH — 巨大なスタジオ空間に粉塵が漂い、瓦礫が水浸しのミニチュアの通りに沈み、タンクの縁から水が流れ落ちる。手持ちカメラが再び落ち着き、ループ向き。

Sound: ダイジェティックのみ — トリガー時の監督の画外「Action!」の声＋油圧機械の低い唸り、重い衝突音、ミニチュア構造物が砕ける音、スタッフの叫び、リグのモーター音、水しぶき、そして残り続ける瓦礫の落下音。衝突の轟音は踏みつけと完全に同時に来る。音楽なし、ナレーターなし。

アマチュアの舞台裏スマホ写真。航空機格納庫ほどの大きさを持つENORMOUSな洞窟のような映画用サウンドステージ内。コンクリート床に面一で埋め込まれた MASSIVE な床埋め込み式の水槽（テーブルなし、脚なし）の中、約30m四方の raised shoreline 上に、密集した長方形の高層ビルが立ち並ぶ高密度の島の大都市の、手作りの小さな MODEL が模型鉄道スケールで置かれている。そこには背の高い段状のアールデコ尖塔、先端が針のような塔、そして長い吊り橋がある。縁の周囲には灰色の危険 полосの縁石と、巻かれたケーブル。背後かつ上方には、約5階建て分の高さまでそびえ、フレーム上端からはみ出す COLOSSAL な BLUE のクロマキー壁があり、密なグリッド状に多数の小さなオレンジ色の「+」トラッキングクロスが並んでいる。巨大な実物のクリーチャーによる踏みつけが模型を引き裂き、何階建てもある高さまで噴き上がり、粉塵と瓦礫がスクリーンのかなり上まで達し、その上にはまだ空間が残っている。黒い「EFFECTS CREW」と灰色の「SPECIAL EFFECTS」Tシャツを着た実寸大のスタッフがタンク縁に立ち、模型の塔と同じくらい背が高く見える。遠くの壁際には小さな列のように見える。カメラクレーン／ジブ＋スチール製ドリー・トラックが画面内にある。広いスマホ構図 — 模型は LOWER THIRD にあり、そびえるスクリーン＋空間が上2/3を埋め、完全には収まりきらない。フラットでクールなLED照明、センサーグレイン、わずかな手持ち揺れ、粉塵でオート露出が白飛び気味 — 実際のスマホクリップであり、レンダーではない。巨大な実物クリーチャーの足が模型を突き破って落下し、小さな街に対して何階建てもあるように見え、建物を本物の粉塵の噴煙と飛び散る瓦礫へと押し潰す。砂塵の衝撃波が外側へ広がる。セット上の物理的なモンスター・リグであり、レンダーではない。

Negatives: テーブル上のジオラマ／机上模型／脚付きテーブルの上の模型ではないこと。狭い小部屋や低い天井ではないこと。模型がフレームいっぱいに入る、または寄りのタイトな構図ではないこと。上端や側面がフレームに入った短い青スクリーンではないこと。大きくまばらなクロスが少数あるだけではないこと。部屋全体が収まっていないこと。CGI／3Dレンダー／ゲームエンジン／ビデオゲームではないこと。カートゥーン／アニメ／イラストではないこと。光沢のあるOctane風の質感ではないこと。プラスチックっぽい／蝋っぽい質感ではないこと。HDRのやりすぎではないこと。ファンタジー風の発光ではないこと。きれいなスタジオ写真風ではないこと。巨大なスタジオの中の小さな MODEL のままであり、実在のフルサイズ都市ではないこと。キャプション／字幕／画面上のテキストなし、ウォーターマークなし、ロゴやブランドのワードマークなし、アスペクト比の記載なし、AIツール名なし。

--- THREAD CONTINUATION ---
[Thread 1] Prompt:
アマチュアの舞台裏スマホ動画、約6秒。コンクリートのタンク縁の低い位置、ドリー・トラックの脇、ENORMOUS な航空機格納庫サイズの巨大なサウンドステージ内。そこには、密集した長方形の高層ビルが立ち並ぶ高密度の島の大都市の小さな模型があり、背の高い段状のアールデコ尖塔、先端が針のような塔、そして長い吊り橋が MASSIVE な床埋め込み式の水槽の中に置かれている。画面上部からはみ出すほどそびえる COLOSSAL な青いスクリーンにはオレンジのクロスがあり、危険 полосのタンク縁にはスタッフ、カメラクレーン＋スチール製ドリー・トラック。手持ち、超広角のスマホレンズ、センサーグレイン、LED
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084674773569904640/img/BsIkAcJVUiqc3Gya.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084674895209025790.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084674895209025790.mp4)**

**作者:** [Snow](https://x.com/iamrealsnow) | **ソース:** [Link](https://x.com/iamrealsnow/status/2084674895209025790) | **公開日:** 2026年8月4日

`Action` `Kaiju` `Photoreal` `Realistic World` `POV` `VFX`

---

### Cinematic Framework: Shot in the style of a 1950s major-studio romantic drama…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
シネマティック・フレームワーク：1950年代の大手スタジオ製ロマンティック・ドラマのスタイルで撮影。4:3のAcademy比率。微粒子フィルムを用いた、豊かなモノクロ35mm撮影。シルバーのハイライトとビロードのような黒を伴う高コントラスト。クラシック・ハリウッドの構図――バランスの取れたフレーミング、十分なヘッドルーム、俳優を明確な奥行きの層に配置。カメラは滑らかなドリー・トラックに搭載し、すべての動きは意図的で流れるように行う。マスターでは深い被写界深度のワイドショット、クローズアップでは円形ボケを伴うクリーミーな浅い被写界深度。時代のスタジオ特有の光彩を出すため、顔にはわずかなディフュージョンを加える。ソフトで動機づけられた影を伴うハイキー照明。手持ち撮影はなし。現代的なカバレッジはなし。

設定：1930年代初頭の、にぎやかなアメリカの都市の通り。石畳、手描きの看板が掲げられた赤レンガの店先、路上に停められたModel A Ford。ウールのオーバーコート、クローシュハット、フラットキャップを身につけた歩行者たちが、両方向へ目的を持って行き交い、レンズを見ずに自然に中央のアクションを避ける。午前中の曇天、実用的な昼光の雰囲気。

0:00–0:03 — すれ違い（ワイド・マスター）ワイドショット、アイレベル、深い被写界深度。女性は20代後半、濃いウールのデイコートと小さな帽子を身につけ、群衆の中をカメラに向かって歩いてくる。両手で、 تازهなリンゴと洋梨が入った編みかごをしっかり抱えている。20代後半の若い男性は、スリーピーススーツ、ネクタイ、ウールのオーバーコート姿で、フレーム左から入り、落ち着いて彼女の進路に入る。彼女は歩みを緩める。彼は立ち止まり、右手で帽子を外し、腰から一度だけ、きれいにお辞儀をする――形式的で、急がない。歩行者たちは彼らの周囲を流れていく。ワイドショットをこの一拍ぶんしっかり保持し、ジェスチャーが実空間で展開されるのを見せる。

0:03–0:08 — 懇願（リバース・クローズアップ）ミディアム・クローズアップへカット。クラシカルなオーバー・ザ・ショルダーの逆アングル、浅い被写界深度。男性はお辞儀から顔を上げ、彼女と同じ目線の高さになる。視線を保ち、誠実で少し緊張した様子。温かく明瞭に、自然な口の動きでこう言う： "My lady, may I walk with you and carry your basket?" 最後の言葉のあと、わずかに息をのむ。カメラは1950年代的なドラマの強調として、ほとんど気づかれないほどゆっくりとドリーで押し寄る――彼が台詞を言い終える間に、距離をほんの数インチだけ縮める。

0:08–0:11 — 決断（リアクション・クローズアップ）逆ショット、女性のクローズアップ。浅い被写界深度は同じで、彼女の背後の通りは柔らかな動くボケへと溶ける。彼女は一拍ぶん彼の視線を受け止め、彼を見極める。表情は驚きから好奇心へ、そして本物の温かさへと変わる。小さな笑みが浮かび、目元まで届く。彼女はわずかに首を傾ける――抑制され、端正で、スタジオ伝統に忠実な感情表現。台詞はなし。笑顔に語らせる。

0:11–0:15 — 受け渡し（トラッキング・ツーショット）ミディアムのツーショットへカット。バランスの取れた4:3構図で、両者がクラシカルなヘッドルームを保ちながら中央に収まる。彼女は両手でかごを彼に差し出す。彼はそれを受け取り、その際に指先が触れ合う。二人は同期した動きで一緒に向きを変え――意図されたスタジオ・ブロッキング――歩道を上って歩き始める。カメラは正確な歩調で彼らの横を滑らかにトラックしながら進み、通りの交通の中へ深く入っていく二人をツーショットで捉え続ける。群衆は彼らの背後で閉じていく。最後のフレームまで動きのあるショットを保持し、ブラックアウトへは切らない。

演技と質感：1950年代のスタジオ・レジスターにおける自然主義的な演技――芝居がかった誇張のない感情の誠実さ。リアルな肌の質感、ウールとツイードの布地の重みが見えること、編みかごのディテール。連続した環境音：石畳を踏む足音、遠くの車のクラクション、聞き取れない群衆のざわめき、布擦れ。音楽なし。ネイティブな35mmの質感を超えるフィルムグレインのオーバーレイなし。現代的な編集トリックなし。
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084512991802699776/img/ywKpet81cjX9Es0L.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084684539524206747.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084684539524206747.mp4)**

**作者:** [God's Way Foundation](https://x.com/godswayfoundinc) | **ソース:** [Link](https://x.com/godswayfoundinc/status/2084684539524206747) | **公開日:** 2026年8月4日

`Story` `Drama` `Retro Film` `Historical`

---

### Luxury cinematic commercial for the Monos Carry-On Pro in matte black. Premium…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
マットブラックの Monos Carry-On Pro をフィーチャーしたラグジュアリーなシネマティックCM。実物のスーツケースを用いた、スローモーションのマクロクローズアップで構成されたプレミアムな4K縦型プロダクト広告。フロントのクイックアクセスコンパートメントが開く様子、ノートPCの挿入、精密なラッチがカチッと閉まる瞬間、質感のあるハードシェル、エンボス加工の Monos ロゴ、ジッパーの滑らかな動き、TSAロック、伸縮式ハンドルの展開、静音スピナーホイール、コンプレッションストラップ付きで整理された内装、そしてエレガントな最後のローリングショットを見せる。柔らかな自然光、温かみのあるベージュのミニマルな室内、浅い被写界深度、滑らかなシネマティックカメラワーク、触感を感じさせるインタラクション、超リアルなラグジュアリー美学。ストーリーボードをショット順として使用し、参考写真を各シーンのマスタープロダクトデザインとして使用する

--- スレッド継続 ---
[Thread 1] ここでこうしたタイプのAI広告は簡単に one shot できます: https://t.co/evlq33jiba

コード「ALEX」を使うと25%オフ
---
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084685934402945024/img/mXfR09AJP--73pDA.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084686018104488168.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084686018104488168.mp4)**

**作者:** [EcomBos](https://x.com/Ecombos_Ai) | **ソース:** [Link](https://x.com/Ecombos_Ai/status/2084686018104488168) | **公開日:** 2026年8月4日

`Product Ad` `Luxury` `Photoreal` `Realistic World` `Macro` `Slow-Mo`

---

### LONG SHOT, COMPLETELY STATIC locked-off camera positioned low in the dark…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
LONG SHOT、完全に静止した locked-off camera。暗い廊下の低い位置にカメラを置き、廊下の奥を見返す構図：父親ははるか遠く、画面の真正面中央、明かりのついたドアの前に立っている。部屋から漏れる光に背後から照らされ、輪郭が縁取られている——フレーム内の唯一の光だ。彼は横を向いて、開いた部屋の中を見ている。やがてカメラの方向へ向き直り——レンズの中ではなく、前方を見ながら——照明のない廊下をカメラに向かってまっすぐ歩き始める。彼は花瓶と額入り写真のあるサイドテーブルのそばを通り過ぎる。歩を進めるたびに、彼はフレーム内でより大きく、より暗くなり、ドアの光から深い影の中へ沈み、ほとんどシルエットになる。彼はそのまま近づき続け、レンズに近づくにつれてピントが甘くなり、ぼやけていく。やがて影に包まれた彼の身体がフレーム全体を埋め尽くし、映像は完全な黒になる。ショットは真っ黒なフレームで終わる。彼は決して角を曲がらず、横へ外れることもない——レンズに向かってまっすぐ歩いてくる。
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084686072680787969/img/mdjNwJgNEgTm-qqg.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084686468560134467.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084686468560134467.mp4)**

**作者:** [Monique Pryce](https://x.com/second_bassoon) | **ソース:** [Link](https://x.com/second_bassoon/status/2084686468560134467) | **公開日:** 2026年8月4日

`Horror` `Eerie` `Photoreal` `Realistic World`

---

### Create a premium cinematic character bible sheet for a martial arts warrior…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
---
武術の戦士 DON のための、プレミアムでシネマティックなキャラクターバイブルシートを作成してください。アップロードされたキャラクターシートを、彼の正確な顔、体、プロポーション、髪、肌の色、衣装の厳密なビジュアル参照として使用してください。見た目は変更しないでください。

LEFT SIDE: 左上に巨大で太いブラシストローク文字で DON。厚みがあり、威圧感のある表現で、ヘッドバンドと同じ深い紫色。下に小さく: WARRIOR / THE STAFF NEVER STOPS. その直下に、Don の全身が入った大きくダイナミックなヒーローイメージを1枚配置 — 空中での回転の最中、スタッフが体の周りを回転している。雨が周囲に見え、紫のネオンライトが彼の緑の衣装を драмatically に照らしている。背後には都市のスカイラインが見え、紫と緑の水彩スプラッシュが彼の背後から外側へ放射状に広がり、白へとフェードアウトする。ボックスもフレームもなし、白いページに直接配置。紫のヘッドバンドが彼の後ろに流れている。

CENTER: 小さくクリーンな文字で TURNAROUND とラベルされたセクション。全身の3ビュー: Front, Side, Back。丸いレザーシールドがはっきり見えること。同じキャラクター、同じ衣装、同じプロポーションを参照画像どおりに。下に: WEAPON セクションとして、bo staff のクリーンなイラストを1点 — 長い木製のスタッフで、自然な木目が見えること。

RIGHT SIDE: DETAILS とラベルされたセクション。4つのクリーンなクローズアップパネルのグリッド: Face front determined expression, Eyes intense and focused, Purple headband detail flowing, Round leather back shield detail. その下に: COLOR PALETTE — bright green, deep purple, brown, black. 右下に細めで太字のフォントでタグライン: COWABUNGA.

OVERALL: クリーンな白背景、ヒーローポーズの背後に紫と緑の水彩スプラッシュ、紫と緑を主役にした配色、エネルギッシュで力強いレイアウト、ミニマルでクリーンなタイポグラフィ、たっぷりの余白、cinematic cel-shaded 3D anime、semi-realistic CGI、hand-painted textures、digital painting feel、hard-edge brushwork、not cartoon not Disney not Pixar、print ready.

--- THREAD CONTINUATION ---
[Thread 1] Character sheet prompt:

“武術の戦士 DON のための、プレミアムでシネマティックなキャラクターバイブルシートを作成してください。アップロードされたキャラクターシートを、彼の正確な顔、体、プロポーション、髪、肌の色、衣装の厳密なビジュアル参照として使用してください。見た目は変更しないでください。

LEFT SIDE: 左上に巨大で太いブラシストローク文字で DON。厚みがあり、威圧感のある表現で、ヘッドバンドと同じ深い紫色。下に小さく: WARRIOR / THE STAFF NEVER STOPS. その直下に、Don の全身が入った大きくダイナミックなヒーローイメージを1枚配置 — 空中での回転の最中、スタッフが体の周りを回転している。雨が周囲に見え、紫のネオンライトが彼の緑の衣装を драмatically に照らしている。背後には都市のスカイラインが見え、紫と緑の水彩スプラッシュが彼の背後から外側へ放射状に広がり、白へとフェードアウトする。ボックスもフレームもなし、白いページに直接配置。紫のヘッドバンドが彼の後ろに流れている。

CENTER: 小さくクリーンな文字で TURNAROUND とラベルされたセクション。全身の3ビュー: Front, Side, Back。丸いレザーシールドがはっきり見えること。同じキャラクター、同じ衣装、同じプロポーションを参照画像どおりに。下に: WEAPON セクションとして、bo staff のクリーンなイラストを1点 — 長い木製のスタッフで、自然な木目が見えること。

RIGHT SIDE: DETAILS とラベルされたセクション。4つのクリーンなクローズアップパネルのグリッド: Face front determined expression, Eyes intense and focused, Purple headband detail flowing, Round leather back shield detail. その下に: COLOR PALETTE — bright green, deep purple, brown, black. 右下に細めで太字のフォントでタグライン: COWABUNGA.

OVERALL: クリーンな白背景、ヒーローポーズの背後に紫と緑の水彩スプラッシュ、紫と緑を主役にした配色、エネルギッシュで力強いレイアウト、ミニマルでクリーンなタイポグラフィ、たっぷりの余白、cinematic cel-shaded 3D anime、semi-realistic CGI、hand-painted textures、digital painting feel、hard-edge brushwork、not cartoon not Disney not Pixar、print ready.”

[Thread 2] Seedance 2.0 prompt:

“Cinematic anime short film clip, 15 seconds. City rooftop at night, rain falling, wet concrete surface, city skyline visible below with neon lights, a large bright purple neon sign nearby casting strong purple light directly onto him, rain droplets visible in the neon light beam.

CHARACTER: Use uploaded character sheet as strict visual reference. Young male martial arts warrior, bright green hoodie, bright green pants, bright green shoes, purple headband flowing behind him, round leather shield on his back, long wooden bo staff.

AUDIO: High energy beat loud from frame one never stopping, every spin strike and movement synced to the beat, staff whoosh sounds cutting through rain on every movement always audible throughout.

[0:00-0:02] Already mid vertical circle spin from frame one. Close up of staff spinning in a massive vertical circle, blurring into continuous wheel, rain flying off on every rotation, purple neon catching it. Cut to wide shot showing full body and rainy city skyline behind him. Cut to low angle looking up at him spinning against the neon lit sky.

[0:02-0:04] Behind the back pass. Side profile full body showing staff disappearing behind him and reappearing the other side. Cut to close up of hands during the pass, rain dripping off his green sleeves. Cut to overhead looking straight down at the movement pattern on the wet rooftop.

[0:04-0:06] Jumps HIGH — side flip mid-air, rain droplets flying off his green outfit. Low angle looking up against neon sky during the flip. Wide shot showing full jump height against city skyline. Close up of landing flowing immediately into next movement.

[0:06-0:08] Helicopter spin — staff spinning horizontally above his head, rain spraying outward in a perfect circle. Overhead looking straight down at the horizontal spin. Drops immediately into low ground sweep — side profile showing dramatic high to low transition. Close up of staff at ground level sweeping water across the rooftop.

[0:08-0:10] Aerial toss — launches staff straight up into the rain. Low angle looking up following staff rising against neon sky. 360 spin on ground while staff in air — overhead showing ground spin. Close up of perfect catch. Immediately into rapid strike combinations — close up of staff blurring between strikes. Wide shot showing footwork shifting on wet rooftop.

[0:10-0:12] Figure eight flowing around entire body. Close up of staff around his neck. Close up under his arm. Close up around his leg. Wide shot showing full fluid pattern around whole body. Overhead looking down at the pattern. Purple headband soaked and flowing, green outfit catching the neon light.

[0:12-0:15] HERO MOMENT. Running start — plants foot on rooftop wall — sideways aerial flip — throws staff before the flip — catches it at absolute peak mid-air. Low angle looking up at the catch against the neon sky. Wide shot showing full flip against city lights below. Drives staff down on landing — plants into wet rooftop with massive splash. Close up of staff planted. Wide shot of him holding pose, one hand on staff, rain falling, purple neon light on green outfit and purple headband, city below. Video ends on this image.

Cinematic cel-shaded 3D anime, semi-realistic
```

[![動画プレビュー](https://pbs.twimg.com/media/HO5MCixXAAI1j0p.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084687323027980795.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084687323027980795.mp4)**

**作者:** [TechieSA](https://x.com/TechieBySA) | **ソース:** [Link](https://x.com/TechieBySA/status/2084687323027980795) | **公開日:** 2026年8月4日

`Action` `Wuxia` `3D Animation` `Realistic World` `Creative Asset`

---

### Create a fifteen second ultra realistic social beauty vlog in a cinematic 16:9…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
---
16:9のシネマティックなフレーム、4Kディテール、30fps、自然なリアルタイムモーションで、15秒の超リアルなソーシャルビューティーVlogを作成する。長いブロンドヘアをきれいな低いポニーテールにまとめたオリジナルの若い女性を登場させる。自然で発光感のあるメイク、細部まで描写された青い瞳、淡いピンクのサテンのパジャマシャツ、重ね付けしたシルバーのネックレス、リング、ダークバーガンディのマニキュア、そしてさりげない小さな手のタトゥーが特徴。彼女は、明るくモダンなリビングルームで、目線の高さに近いカメラの前に座っている。背景右側には、柔らかな暖色の白いライトで飾られた、雪をまとった背の高いクリスマスツリーが広がる。大きな窓からは穏やかな冷たい昼光が差し込み、室内の暖かな反射光が彼女の顔をやわらかく形づくる。

小さな卓上三脚に固定したカメラを使用し、現代のスマートフォンカメラの自然な遠近感、約35mm相当で撮影する。彼女を上半身から上でフレームに収め、クリスマスツリーが構図のバランスを取るようにやや左寄りに配置する。リアルな肌の毛穴、細かな産毛、一本一本のまつ毛、細い飛び毛、正確なジュエリーの反射、自然な布のしわ、さりげない呼吸、不規則なまばたき、信じられる指先の圧力、物体の重さの物理的な正しさを維持する。軽いオートフォーカスの呼吸、わずかな自動露出調整、本物らしいモーションブラー、控えめなデジタルシャープネス、そしてごく微細なカメラの揺れを含める。

最初の3秒間、彼女はレンズを見つめながらリラックスした歓迎の笑みを浮かべ、やさしく首を傾け、ほどけた髪の束を1本整え、フレーム下の製品に視線を向ける。3秒から6秒の間に、両手で下へ手を伸ばし、大きなパステルピンクの円形ビューティーアドベントケースを持ち上げて画面内に入れる。彼女はそれを顔の横に持ち、光沢のあるディテールが窓の光を受けるように、ゆっくりとカメラの方へ回転させる。

6秒から9秒の間に、彼女は慎重な指の動きで小さなコンパートメントを1つ開け、淡いピンクのクレンザーのボトルを見せる。表情は本物の嬉しい驚きへと変わる。ボトルをレンズに近づけると、フォーカスは自然に彼女の目からボトルへ移り、その後、彼女が引き戻すと滑らかに再び顔へ戻る。

9秒から12秒の間に、彼女はボトルを下ろし、ニュートラルなアイシャドウ、やわらかなローズチーク、シャンパンハイライターを含む、コーディネートされたメイクパレットを開く。各パウダー面が少しずつ異なる量の光を反射するように、パレットの角度を調整する。製品の連続性とヒンジの動きを完全に正確に維持する。

12秒から15秒の間に、彼女は開いたパレットを頬の横に持ち、カメラに温かく意味ありげな笑みを向け、その後、カメラがほとんど見えないほどゆっくりと前方へ押し寄る中で、ケースをやさしく閉じる。最後は彼女の目、ピンクの製品、そしてやわらかく輝くクリスマスライトで締めくくる。

約104BPMの、軽快で上品なビューティーポップのインストゥルメンタルを追加する。エアリーなシンセサイザー、柔らかなベル、控えめなハンドクラップ、丸みのあるベース、繊細なパーカッションを含め、ボーカルはなし。ケースの登場、クレンザーの登場、最後のパレット提示に合わせて、やさしい音楽的アクセントを同期させる。音楽の下には、静かな室内のアンビエンス、サテンの動き、コンパートメントのクリック音、パッケージ音、そしてかすかな爪先のタップ音を含める。

セリフ、字幕、キャプション、ロゴ、ウォーターマーク、人工的な美肌フィルター、プラスチックのような肌、過度な背景ぼかし、顔の歪み、アイデンティティの変化、余分な指、融合した手、歪んだジュエリー、重複した製品、浮遊する物体、不一致なパッケージ、髪のちらつき、背景の動き、急激な露出変化、ジャンプカット、不自然なカメラモーションは入れない。
---
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084494928151986176/img/4JiuP6YoZODet3W8.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084701148871832040.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084701148871832040.mp4)**

**作者:** [BMX](https://x.com/bmx_ai13) | **ソース:** [Link](https://x.com/bmx_ai13/status/2084701148871832040) | **公開日:** 2026年8月4日

`Product Ad` `Beauty` `Portrait & Fashion` `Influencer` `Photoreal` `Realistic World`

---

### Early-2000s consumer DV camcorder aesthetic / edited home video style with…

![Español](https://img.shields.io/badge/lang-Español-yellow)

#### 📝 プロンプト

```
早期2000年代の一般向けDVカムコーダーの美学／編集されたホームビデオ風スタイル。はっきりしたハードカット／わずかな手持ちの揺れ／自然な構図。色あせた暖色、やわらかなコントラスト。真夏の7月中旬、ニューヨークの熱波に包まれたコニーアイランドの木製ボードウォーク。黄金色の午後の陽光。明るくリラックスした夏の雰囲気。自然な環境音のみ（空間音響デザイン、密度の高いボードウォークのざわめき、ストリートミュージシャン、ナレーションなし）。

@ image = [main character: 30-year-old man, 1.93m tall, movie-level realistic facial features, no deformation, stable throughout. Wearing a completely blank solid black t-shirt (back must be strictly plain black with absolutely no graphics, text, or logos), completely blank solid black cap. CRITICAL DETAIL: The back of the cap features a bare, empty semi-circular cutout revealing hair/skin, and a plain plastic snapback strap. Absolutely NO logos, text, patches, or embroidery on the back of the cap. Long full-length blue oversized jeans (pants completely cover the legs down to the sneakers, not shorts), White Nike Air Force 1]

0-3s: [Medium tracking shot] @ image は、日差しで熱せられたコニーアイランドの木製ボードウォークを、リラックスした様子でカメラに向かって歩いてくる。明るいチョコレート＆クリームのアイスクリームコーンを持ち、一口かじる。[Slight handheld drift] + [Warm sunlight flaring gently] + [木の板のきしみ音と群衆のざわめき SFX]
3-6s: [HARD CUT TO: Medium side-profile shot] @ image は完全に横から見られ、リズムに合わせて滑らかに頭を揺らしている。ショットの背景には、プラスチックのバケツを叩いて演奏しているストリートドラマーがはっきり見える。@ image はカメラを完全に無視し、視線をドラマーに固定し続ける。[Gentle framing drift] + [Exposure adjusting smoothly] + [大きくリズミカルなプラスチックバケツのドラム演奏 SFX]
6-11s: [HARD CUT TO: Medium wide shot] コニーアイランドらしい、前面 खुलきの木製アーケードブースがボードウォークの端に並んでいる。影になったブースの中には、頑丈で構造的にリアルな Pop-A-Shot の電子バスケットボールマシンが置かれている。@ image はブースの木製カウンターへ歩み寄る。左手でアイスクリームコーンを明確に持ったまま、空いている右手でマシンの返却レーンから本物のアーケード用バスケットボールを滑らかに拾い上げ、片手で気軽にマシンの金属製リングへ直接投げ入れる。重いマシンとボールの軌道の物理は非常にリアル。[Lens breathing slightly] + [Golden hour backlight] + [革を扱う音、バスケットネットのスウッシュ音、アーケードベルの SFX]
11-15s: [HARD CUT TO: Medium shot from behind] @ image は肩越しにカムコーダーのレンズを振り返り、自信に満ちたリラックスした笑みを見せる。完全に向きを変えてアーケードブースから離れ、手にはまだアイスクリームコーンをはっきり持っている。カメラは彼の後頭部を明確に捉え、キャップの空いた半円形の切り抜きと、飾りのないプラスチック製スナップバックストラップ、そして無地のTシャツの背面だけが見える。彼は長いジーンズ姿でボードウォークを歩き去り、夏の人混みに溶け込んでいく。[Recording cuts abruptly to black mid-motion] + [Fading crowd noise, abrupt silence at cut SFX]

フォトリアルな8K、超高精細なテクスチャ、シネマティックなライティング、完璧なモーションブラー、高ダイナミックレンジ、アーティファクトなし、整合性のある mult. 超リアルなドキュメンタリーの写実性、本物らしい自然な振る舞い、正確な現実世界の物理法則、アーケードブースとマシンの現実的な構造的強度、自然なボディランゲージ、台本感のない日常の一場面の雰囲気。強い環境のリアリティ。豊かな現実世界のディテール、ざらついた夏の都市的質感、信じられる人間の動き。@ image と完全に一致するキャラクターの一貫性。

shot 2 でカメラを見る、レンズとアイコンタクトする、第四の壁を破る、物体が消える、物が落ちる、顔の変形、ぼやけた動き、低解像度、文字のアーティファクト、不自然なライティング、透かし、余分な手足、破綻した物理法則、非論理的な建築、通りの中央に独立して置かれたアーケードマシン、通路を塞ぐマシン、パラソルに取り付けられた小さなリング、浮遊するリング、日よけリング、変形する環境、連続的な変形、ショーツ、短パン、バミューダ、むき出しの脚、露出した脚、キャップのロゴ、キャップ背面のロゴ、帽子背面の刺繍、スナップバックストラップのロゴ、激しいカメラの揺れ、事故、プロ向けライティング、現代的な安定化ジンバル、清潔で完璧な4K解像度、シネマティックなカラーグレーディング、スローモーション。

--- THREAD CONTINUATION ---
[Thread 1] Prompt 📝

[CINEMATIC SETUP]
早期2000年代の一般向けDVカムコーダーの美学／編集されたホームビデオ風スタイル。はっきりしたハードカット／わずかな手持ちの揺れ／自然な構図。色あせた暖色、やわらかなコントラスト。真夏の7月中旬、ニューヨークの熱波に包まれたコニーアイランドの木製ボードウォーク。黄金色の午後の陽光。明るくリラックスした夏の雰囲気。自然な環境音のみ（空間音響デザイン、密度の高いボードウォークのざわめき、ストリートミュージシャン、ナレーションなし）。

[IMAGE REFERENCES / LEGEND]
@ image = [main character: 30-year-old man, 1.93m tall, movie-level realistic facial features, no deformation, stable throughout. Wearing a completely blank solid black t-shirt (back must be strictly plain black with absolutely no graphics, text, or logos), completely blank solid black cap. CRITICAL DETAIL: The back of the cap features a bare, empty semi-circular cutout revealing hair/skin, and a plain plastic snapback strap. Absolutely NO logos, text, patches, or embroidery on the back of the cap. Long full-length blue oversized jeans (pants completely cover the legs down to the sneakers, not shorts), White Nike Air Force 1]

[TIMELINE SECOND BY SECOND]
0-3s: [Medium tracking shot] @ image は、日差しで熱せられたコニーアイランドの木製ボードウォークを、リラックスした様子でカメラに向かって歩いてくる。明るいチョコレート＆クリームのアイスクリームコーンを持ち、一口かじる。[Slight handheld drift] + [Warm sunlight flaring gently] + [木の板のきしみ音と群衆のざわめき SFX]
3-6s: [HARD CUT TO: Medium side-profile shot] @ image は完全に横から見られ、リズムに合わせて滑らかに頭を揺らして
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084704248428675072/img/yeXguqJ3i5juGcp7.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084704567963381864.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084704567963381864.mp4)**

**作者:** [ImPaul](https://x.com/impaulxyz) | **ソース:** [Link](https://x.com/impaulxyz/status/2084704567963381864) | **公開日:** 2026年8月4日

`Story` `Heartwarming` `Sports` `Basketball` `Photoreal` `Realistic World` `POV`

---

### One single CONTINUOUS FPV shot, no cuts, no edits, one unbroken take. Real-time…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
---
1回の連続したFPVショット、カットなし、編集なし、途切れのないワンテイク。全編リアルタイムの速度で、制御されつつ滑らかに進む — 決して慌ただしくならない。時間の中を常に前へだけ進み、ループも逆再生も巻き戻しも一切なし。最初のひと口の瞬間にだけ0.5秒のスローモーションを入れ、それ以外は一切スローモーションなし。その後は即座にフルスピードへ戻る。映像はクリーンで、各フレームの端から端まで完全に露出しており、四隅も中央と同じくシャープで明るい — ビネットなし、暗いフレーム端なし、ゴーグルマスクなし、いかなるレンズアーティファクトもなし。カメラは見えない — フレーム内に影も反射も一切現れず、湯気を乱すことも痕跡を残すこともない。時間切れになるまで連続して撮影が進み、最後まで市場の中にいる。

CINEMATIC CAPTURE クリアでシャープなガラスのような質感、180度シャッター、自然なモーションブラーは本当に速い動きにのみ発生、細かな粒状感、温かみのあるタングステンと赤いネオンの色味が、自然な彩度で保たれた豊かな夜のトーンに重なる。肌の色は正確で過剰に持ち上げられていない。光はフレーム全体、四隅までしっかり満ちている — まるでシネマカメラで飛行しながら撮影した夜のストリート映像の質感であり、ゲームエンジンではない、アニメーションでもない。

カメラは、すでに人で賑わうソウルの屋外ナイトフードマーケットの中から始まり、屋台の間を時速20kmで安定して進む — 頭上には絡み合った電球と吊り下げられたビニールシートの低い屋根、通路の両側から湯気とグリルの煙が流れ込み、その下でラジオの音と叫び声が響く。腕の長さほどの距離にいる男性が、炭火の上で串を返し、段ボールの板で煙をあおいでいる横を通り過ぎ、紙のトレーに盛られたフライドチキンを分け合っているカップルの周りを回り込むと、彼らは笑いながら一歩下がって道を空ける。さらに、折りたたみテーブルの前でナイフでムール貝を割り、殻をバケツに落としている祖母のそばを滑るように通り過ぎる。野良犬が通路の先を小走りで横切っていく。カメラは列の端にある橙色に輝く屋台へ向きを変え、カウンター前のプラスチックのスツールに座る20代の韓国人女性の周りを、ひとつの滑らかで途切れない軌道で回り込む — 丸く温かい顔、赤いクリップの付いた短い黒髪のボブ、雨粒をまとったクリーム色のパファージャケット — その前で、花柄のエプロンをつけた60代のふくよかな女性店主が、トッポッキを紙のボウルに盛っている。カメラは彼女の肩越しにグリルへと流れ、串が油の中でジュッと音を立てて弾ける様子を捉え、そして彼女が最初の餅を木串で持ち上げ、濃い赤いソースが不揃いに垂れたまま絡みついているところへ戻る。彼女が一度だけそれに息を吹きかける — そしてフレームは、彼女がひと口かじる瞬間の顔を0.5秒だけ捉える：目を閉じ、熱さに頬がふくらむ。すぐにフルスピードへ戻る。彼女はすぐに鼻で笑いながら、まだ噛みつつ、片手で開いた口をあおぎ、片足を踏み鳴らす。カメラは少し引いて二人を同時に収め、カウンターの向こうで店主が笑い、後ろで順番を待つ男性も笑っている。女性はすでにカウンターの端に置かれていた紙コップのスープを取り、縁越しに強く息を吐きながら飲む。彼女は親指で口元をぬぐい、まだ笑顔のまま、もう一つ欲しいとグリルを指さす。カメラが鉄板へと下がると、店主のトングが下り、新しい串が熱い表面に落ちて、油と煙が一気に弾け、強くジュウジュウと音を立てる。市場の喧騒が四方で続く中、時間が尽きていく。

SCORE 最初のフレームから明るく遊び心のあるK-indieグルーヴ — 弾むベース、キレのあるファンクドラム、軽快なエレクトリックギターのリフ。ひと口の瞬間にすべてが完全に止まり、0.5秒のホールド中は、ジュウという音と市場の雑音だけになる。その後、手拍子とキーボードのフックが加わってグルーヴが再び一気に戻り、前よりも明るく、最後のフレームまでフルエネルギーで未解決のまま進む。アンビエンスは全編を通してスコアの下に重なる。

AUDIO 市場全体の音が下に広がる — 重なり合う声、ラジオ、飛び交う注文、四方からのジュウという音、鍋に当たるおたまの音、どこか後方で吠える犬、ビニールシートに当たる雨、彼女の笑い声、店主の笑い声 — すべてがスコアの下にある。カメラ自体に紐づく音はなし。

STYLE LOCK 超高精細なフォトリアル。市場は生き生きとしているが、遠くの人物で混み合っていることはない — フレーム内の全員がレンズから数メートル以内におり、それぞれが個別に詳細描写され、ひとつの読み取れる動作をしている。すべての人物が動き続ける — 立ち止まっているものは何もない。リアルな食べ物の物理表現 — ソースは濃く不規則で、絡みつきながら不均一に垂れ、均一な糸のようには落ちない。湯気とグリルの煙はまだらで不揃いな細い筋となって立ち上り、場所によって濃さが異なり、均一な雲にはならない。油がはねるのはグリルの上だけ。雨粒はパファージャケットの上で玉になる。彼女の反応は演技的ではなく、素早く無意識的なもの — 小さく、速く、 واقعی。カメラの軌道は滑らかで連続しており、クローズな構図でも揺れや浮遊感がない。串、ボウル、ソースの量は提供された瞬間から一貫している。市場の屋台とその灯りは決してフレームから外れない。映像は端から端までクリーンで完全に露出され、四隅もシャープで明るい — ビネットなし、暗いフレーム端なし、ゴーグルマスクなし。字幕なし、ウォーターマークなし、テキストなし。16:9。
---
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084706827204534272/img/t3GdVV7mMBY0zsjQ.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084707507008889038.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084707507008889038.mp4)**

**作者:** [Syed Abuthahir ∞](https://x.com/abulu8) | **ソース:** [Link](https://x.com/abulu8/status/2084707507008889038) | **公開日:** 2026年8月4日

`Food` `Cooking` `Photoreal` `Realistic World` `FPV & Aerial` `Slow-Mo`

---

### CAMERA: Handheld DV 16mm camcorder aesthetic. CHASE records herself throughout…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
---
CAMERA: Handheld DV 16mm camcorder aesthetic. CHASE records herself throughout every location, mostly holding the camera directly and occasionally setting it down for brief hands-free shots. Preserve natural hand tremors, crooked composition, slow autofocus correction, awkward zooms, accidental face cropping, and moments where the framing briefly loses her. The physical camcorder is never visible.

LOOK: Authentic soft tape-image texture with mild blur, subtle electronic grain, glowing highlights, small automatic-exposure fluctuations, restrained contrast, and natural skin tones. The lighting changes realistically between locations: warm morning light in the apartment → cooler daylight inside the car → intense colorful lighting backstage and onstage.

STYLE: A fast, energetic day-in-the-life montage with sharp cuts between locations and slightly accelerated transitional movement. Reflective voiceover plays over the footage instead of synchronized dialogue. The pace gradually builds from a quiet sleepy morning into a high-energy performance finale.

Character

CHASE — an exceptionally beautiful Instagram influencer and rising pop performer in her 20s. Long glossy dark-brown hair, striking symmetrical features, large expressive eyes, flawless glowing skin, and soft pink lips. Slim, toned figure. Her outfit changes with each location: cozy loungewear at home, stylish casual clothing during the ride, and a glamorous performance outfit for the final scene. Each outfit fully covers her arms and torso.

Setting Progression
Stylish apartment bedroom in the morning → luxury van interior during the day → busy backstage area and concert stage at night.

Storyboard — 15 seconds, 5 cuts
(~3s, bedroom, camera resting on a table, soft morning light) She slowly sits up, stretches, fixes her messy hair, and hurriedly packs a small bag. VOICEOVER (CHASE): “Some mornings begin before I’m even fully awake.”

(~3s, van interior, handheld selfie footage, natural window light) She sits beside the window as sunlight moves across her face, casually checking messages on her phone. VOICEOVER (CHASE): “I spend so much time on the road, this place almost feels like home.”

(~3s, van interior, macro detail shot) Close-up of her fingers choosing a song from a playlist while passing sunlight flickers across the screen and her hand. No voiceover, only natural road noise.

(~3s, backstage, fast handheld montage) Quick glimpses of makeup brushes, hair styling, costume adjustments, staff rushing past, and her taking one focused breath before going onstage. VOICEOVER (CHASE): “And then everything suddenly starts moving at once.”

(~3s, stage, wide shot moving into a close-up, energetic finale) Bright stage lights ignite as she steps through the curtains. The camera catches her silhouette, then a brief confident smile before the image cuts to black. VOICEOVER (CHASE): “This moment is why I keep doing it.”

--- QUOTED TWEET ---
シンプルなプロンプトで、AI動画をできるだけリアルに見せるにはどうすればいい？

見た目ほど難しくありません。

この動画は Seedance 2.0 で作成しました。以下が実際に使ったプロンプトです。

CAMERA:
Handheld DV 16mm camcorder aesthetic. First-person footage recorded entirely by CHASE while she holds the camera herself. Keep natural hand tremors, slightly crooked composition, slow autofocus correction, awkward zooms, accidental framing errors, and occasional selfie shots where part of her face slips out of frame. The camera sometimes briefly loses track of the subject. Every scene is filmed by CHASE in either selfie mode or direct POV. The physical camcorder is never visible.

LOOK:
Authentic DV 16mm home-video texture. Soft and mildly unfocused tape image, subtle electronic grain, gentle highlight blooming beneath the gym lights, minor automatic exposure shifts, restrained contrast, and natural-looking skin tones.

STYLE:
A lively but relaxed fitness-vlog atmosphere — cheerful between exercises, slightly out of breath, spontaneous laughter, and short motivational remarks. Fully handheld, fast edits, switching naturally between selfie footage, POV angles, and mirror shots.

CHARACTER:

CHASE — an exceptionally beautiful Instagram fitness influencer in her 20s. Long glossy dark-brown hair pulled into a high ponytail, striking symmetrical features, large expressive eyes, flawless glowing skin with a subtle post-workout sheen. Slim, toned athletic physique. She wears a fitted but modest long-sleeve workout top with high-waisted leggings or relaxed joggers, keeping her arms and torso fully covered, athletic sneakers, and a small towel draped around her neck. No jewelry.

SETTING:

A modern gym during the early evening — a large mirrored wall, dumbbell racks, an open stretching area, a water bottle resting on a nearby bench, several exercise machines in the background, and soft overhead illumination.

STORYBOARD:

(~2s, front-facing selfie, arm’s length)
She enters while filming herself, smiling brightly even though she is already slightly winded.
CHASE: “Hey everyone, I’m doing a quick workout vlog today!”
(~2s, loose handheld whip pan)
The camera swings from the dumbbell rack → mirrored wall → stretching zone, then snaps back toward her face.
CHASE (off-camera, amused): “It’s almost empty in here right now. Perfect.”

(~2s, medium handheld shot beside the mirror)
She watches her reflection while stretching and briefly tightens her ponytail.
CHASE: “I’m warming up first so I don’t regret this later.”
(~1.5s, close detail insert, shallow depth of field)
Tight shot of her fingers twisting open the cap of a cold water bottle, tiny droplets of condensation visible. No speech, only natural gym ambience.

(~2s, medium handheld tracking shot)
She performs a short set of controlled lunges or light squats, checking the lens between repetitions.
CHASE: “Only a few reps in and my legs are already complaining.”

(~2s, quick cut, seated on a bench)
She drops onto the bench, drinks some water, pats her forehead with the towel, and takes a deep breath.
CHASE: “Okay, emergency water break.”
(~1.5s, fast push-in, tight selfie framing)
Her cheeks are flushed and a few damp strands of hair cling near her face as she smiles into the lens.
CHASE: “This is the glamorous part Instagram usually leaves out.”
(~2s, arm’s-length selfie ending)
She gets back up with the towel resting over one shoulder, gives the camera a tired but satisfied wave and thumbs-up, then reaches forward to stop recording.
CHASE: “That’s it for today. See you next time!”

#AIVideo
---
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084727919864115200/img/w8SxJkWhgfWf-7W5.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084728365668348364.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084728365668348364.mp4)**

**作者:** [Alpha Mom](https://x.com/YourAlphaMom) | **ソース:** [Link](https://x.com/YourAlphaMom/status/2084728365668348364) | **公開日:** 2026年8月4日

`Portrait & Fashion` `Influencer` `Music & Dance` `Concert` `Retro Film` `Realistic World` `POV` `Macro`

---

### Create a photorealistic 15 second cinematic video in 16:9 as one continuous…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
---
16:9で、広大なプロ向け特殊効果サウンドステージ内を舞台にした、15秒のフォトリアルなシネマティック動画を、1本の連続したハンドヘルドショットとして作成する。自然な24ミリの広角レンズをアイレベルで使用し、24 fps、深い被写界深度、わずかなオペレーターの揺れ、軽いローリングシャッター、リアルな露出ブリージング、正確なモーションブラーを備える。カメラは大きな長方形の水槽の角から始まる。青い水がフレーム下部を満たし、コンクリート、安全コーン、散らばった制作資料に縁取られている。中央付近には小さな赤と白の模型救助艇が浮かぶ。その上には、円形の天井リグから吊り下げられた、巨大なリブ状の灰色の布製ファンネルがぶら下がっている。トラッキングマーカー付きのグリーンスクリーン壁、黒い天井トラス、明るい長方形のスタジオランプ、黄色い送風機、そして精巧なミニチュアの沿岸都市が背景を埋める。

0〜2秒では、広い構図を保ったまま、布が張り詰め、しわが上方へ這い上がり、細い先端が回転し始める。動きは実際の風と張力によって駆動されているように感じられ、水面には反射が震える。2〜4秒では、布が内側へ崩れ込み、灰色の霧、塵、微粒化した水からなる密な回転柱へと変化する。ファンネルは乱流を伴うもっともらしい気流とともにプールへ向かって細くなりながら下降する。中央を保ちながら、わずかに右へドリフトする。

4〜6秒では、渦が水面に激突し、激しい白い噴出を起こす。同心円状の波が外側へ走り、ボートはピッチしロールし、激しい飛沫が遠方の縁を覆い隠す。素早く制御されたパンでミニチュア都市へ向きを変える。6〜9秒では、トルネードを追いながら海岸線に沿ってトラッキングする。水が建物の間を押し寄せ、赤い車両が持ち上げられ、窓が破裂し、屋上の物体が回転しながら飛ばされ、集合住宅のブロックが段階的に崩れる。すべての破片は、重量、衝突、抵抗、重力、そして変化する回転速度を示している。

9〜12秒では、ミニチュアの塔が折れ、せん断され、通りへ倒れ込むのに合わせてパンを続ける。右前景には、無地の黒いクルーシャツとオレンジの防音イヤープロテクターを着け、手すりに身を預ける特殊効果技術者が自然に現れる。左背景には、スケール感を示すために背の高いガラスの超高層ビルが立ったまま残る。トルネードは暗くボリューメトリックに保ち、塵、霧、紙、屋根パネル、車両部品が異なる奥行きで層を成しながら回り続ける。

12〜15秒では、プールへ向けて弧を描くように戻る。渦はワイドスクリーンフレームの中央へ戻り、広い泡立つ波が水槽の周囲を回り込み、カメラへ向かって押し寄せる。細かな飛沫がレンズに当たり、アクションを隠さずに柔らかな円形のハイライトを作る。最後は、激しくうねる水の上でトルネードがなおも回転している状態で終える。

厳しい天井スタジオ照明、冷たいシアンの水の反射、軽いグリーンスピル、リアルな影、湿った霞、そして様式化されたカラーフィルターなしで表現する。微細な不完全さ、不均一な水の動き、わずかなカメラシェイク、レンズの湿り気、自然な破片のランダム性を保持する。ロゴ、ウォーターマーク、判読可能なテキスト、重複したオブジェクト、ゴムのような建物、無重力の破片、人工的なスローモーション、目に見えるモーフィングアーティファクトは不可。

音声は、緊張感のある低いサブベースのパルス、遠くの金属的なドローン、上昇する弦のトレモロ、抑制されたシネマティックなパーカッションで構成する。渦が水に衝突する瞬間には深いインパクトを加え、建物が崩壊するにつれてより鋭いアクセントを入れ、音楽は未解決のまま終える。リアルな風の轟音、産業用ファンのうなり、押し寄せる水、砕ける構造物、金属音、破片の衝突音を重ねる。セリフはなし。
---
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084537068970229760/img/GG5KR2iZIgooDpT-.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084731347873251450.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084731347873251450.mp4)**

**作者:** [BMX](https://x.com/bmx_ai13) | **ソース:** [Link](https://x.com/bmx_ai13/status/2084731347873251450) | **公開日:** 2026年8月4日

`Scenery & Spectacle` `Worldbuilding` `Photoreal` `Realistic World` `VFX`

---

### Ultra-realistic original dark fantasy battle in a frozen mountain ravine during…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
---
青い薄明かりの吹雪の中、凍てついた山の峡谷で繰り広げられる、超写実的なオリジナルのダークファンタジーの戦い。毛皮のマントをまとった何千もの戦士たちが、雪と砕けた氷を突き破って突進してくる、そびえ立つ氷肌の怪物、牙を持つ巨人、骸骨の獣の大群と激突する。 
- 峡谷を捉えた巨大な空撮のestablishing shot。燃え盛る包囲用の火鉢、雪崩のように崩れ落ちる雪、狭い氷の峠で衝突する両軍。 
- 戦線を縫うように進む攻撃的なtracking shot。巨体の怪物が盾の陣形に体当たりし、斧が振るわれ、槍がたわみ、雪と氷の破片が空中に弾け飛び、兵士たちがよろめきながら凍った地面に倒れていく。 
- 吹雪の中を踏みしめて前進する巨大なフロストジャイアントを、低いアングルから劇的に見せるepic reveal。前線防衛を踏み潰し、その周囲を小さな怪物たちが群がるように取り囲む。風に旗が裂け、青い炎と舞い落ちる雪が画面を満たす。 

残虐、壮大、ダイナミック、cinematic、圧倒的なスケール、嵐のような雰囲気、フォトリアル。
---
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084738122605076480/img/V2SBMaaSf7i7HFh3.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084738209808781816.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084738209808781816.mp4)**

**作者:** [Pierrick Chevallier | IA](https://x.com/CharaspowerAI) | **ソース:** [Link](https://x.com/CharaspowerAI/status/2084738209808781816) | **公開日:** 2026年8月4日

`Action` `Military` `Horror` `Monster Chase` `Photoreal` `Fantasy` `VFX` `FPV & Aerial` `Slow-Mo`

---

### @Image1 は順番・カメラ・秒数だけを担当する。色は持たない。

![日本語](https://img.shields.io/badge/lang-日本語-green)

#### 📝 プロンプト

```
@Image1 は順番・カメラ・秒数だけを担当する。色は持たない。
@Image2 は顔の同一性だけを担当する。服と場所は担当しない。
@Image3 は服・体型・裾の形・小物を担当する。
@Image4 は空間の広さ・材質・光の向きを担当する。

【カメラ】
メイキング係が小型のハンディカムを片手に持って撮っている。
ゆっくり大きくうねる手ブレ。ピントが一拍おくれて合う。
被写体を追うフレーミングが少し遅れ、ときどき顔が画面の端で切れる。
カメラ自体は一度も画面に映らない。カメラを回転させない。

【ルック】
今のカメラ相当のきれいな画質。色あせもテープノイズも入れない。
コントラストは抑えめで、ハイライトがわずかに飛ぶ。
前半は乾いたグレー。水が降り出すと画面全体が青灰色に沈み、逆光の白だけが残る。

【スタイル】
真夏の廃工場を借りたファッション撮影の記録。
前半は静かで乾いていて、少し退屈な現場。
6秒からは水しか聞こえなくなり、緊張が一気に楽しさへ変わる。

【キャラクター】
25歳の日本人女性モデル。黒の無造作なショートボブ、切りっぱなしの前髪が目にかかる。
黒地に淡い小花柄の、肩ひもの無いロングドレス。裾は左が太もも丈で高いスリット、右は床まで届く。
金のフープピアス、細い金のアンクレット、細ストラップのヒール付きサンダル。
表情の振れ幅は小さい。無表情、薄い微笑み、目を細める、目を閉じるまで。
彼女はプロなので、濡れても撮影を止めない。

【設定】
幅18m・奥行12m・天井高6.5mの鉄骨造の廃工場。打ちっぱなしのコンクリートの床と壁。
奥壁の高い位置に横長の高窓が5枚あり、床から4.2mの高さから夏の斜光が1本だけ落ちる。
天井は剥き出しの鉄骨トラスで、床から6.0mの高さに古い配管が走り、赤い旧型スプリンクラーが約3m間隔で並ぶ。
床の中央に白いホリゾント紙が4m×3mで敷かれ、その左脇に大型ストロボが1灯立っている。
絶えず動くもの＝彼女の髪、薄い生地の裾、斜光の中の埃。6秒からは水が絶え間なく落ち続ける。
6.0秒までは、床も髪も服も完全に乾いている。

【ストーリーボード】
0.0–1.5秒 フロント 顔の寄り 約40cm｜降る水の中、濡れた前髪から水が滴り、目を細めて笑う
1.5–3.0秒 右斜め前 ミドルアップ｜乾いた床の上、画面外から伸びた手に前髪を直され、顎を上げる
3.0–4.5秒 ローアングル 全身寄り｜一歩前へ踏み出し、床まで届く右の長い裾が引きずられる
4.5–6.0秒 ハイアングル 俯瞰｜天井の配管とスプリンクラーの下で、小さく上を見上げる
6.0–8.0秒 フロント ワイド 約2m｜赤いヘッドの先に水が滲み、細い筋が数本ほどけ、太くなって床に点を打ち、隣のヘッドが次々に開いて面の雨になり、床の水膜から跳ね返りが立ち上がる。彼女が見上げる
　セリフ：「わ、ふってきた」
8.0–9.5秒 バストアップ 寄り｜降る水を肩と鎖骨で受け、目を閉じたまま息を止める
9.5–11.0秒 真横 ミドル｜濡れて重くなったドレスが体に沿い、スリットから出た脚で水を蹴る
11.0–13.0秒 ローアングル 全身｜濡れた髪を後ろへかき上げ、しずくが弧を描いて散る
13.0–15.0秒 フロント ミドルアップ 約1m｜笑いながらカメラの方へ一歩踏み出す。動きの途中で切れる
　セリフ：「もういっかい」

音は環境音だけ。前半は空調の低い唸りと足音、6秒からは水の音だけ。音楽なし。

Do not show any text on screen.
Do not change her dress or accessories.
Do not add any person other than the single hand at 1.5s.
Do not repeat the same camera angle twice in a row.
Do not create mirror or water-surface reflections of her.
Do not use extreme close-ups of hands.
Do not make her laugh with teeth showing.

15秒／16:9

変えるのは場所と服と動作の中身だけ。
【カメラ】【ルック】は触らないでください。
そこがこの型のエンジンです。
```

[![動画プレビュー](https://pbs.twimg.com/ext_tw_video_thumb/2084745312208367616/pu/img/iw-ugbd3lX71EUJI.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084745365513711914.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084745365513711914.mp4)**

**作者:** [ぴょんきち](https://x.com/yarakashiyama_) | **ソース:** [Link](https://x.com/yarakashiyama_/status/2084745365513711914) | **公開日:** 2026年8月4日

`Portrait & Fashion` `Fashion` `Photoreal` `Realistic World` `POV`

---

### Use @[Image] as storyboard reference for cinematic sequence. use as first shot…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
@[Image] をシネマティックなシーケンスのストーリーボード参照として使用してください。最初のショット 01 として使用します。

1フレーム目から必ずフルスクリーンにしてください。レンダリング前に、すべてのパネル区切り線、番号、枠線を必ず切り取ってください。

8つのストーリーボードパネルすべてを厳密な時系列順に、シームレスに移行しながらつなぐ15秒の豪華なシネマティックシーケンス。ビジュアルスタイル：見事なアジアン・インクウォッシュと金箔イラストが融合し、超精細な黒い羽の質感、輝く黄金の月光、霧に包まれた山岳風景、静かな水面の反射、プレミアムなアーティスティックレンダリング、8K解像度。重要：フレーム、枠線、フィルムストリップ、番号、UI、テキストは絶対に入れないこと。シームレスなフルスクリーンのシネマティックショットのみをレンダリングすること。参照グリッドは完全に無視すること。全体を通して、正確なカラーパレット、筆致のテクスチャ、ライティングを維持すること。

ショット1 (0-1.9秒): パネル1。精緻な金の筋が入った壮麗な黒い羽の極端なクローズアップ。ゆっくりと漂い、その背後に輝く黄金の月と遠くのパゴダを見せる。
ショット2 (1.9-3.8秒): パネル2。羽が優雅に横へ流れ、暖かな月光に照らされた霧の山頂を明らかにする。カメラは滑らかに右へパンする。
ショット3 (3.8-5.6秒): パネル3。渦巻く大気の霧の中から、荘厳な岩壁が姿を現す。古木の松が、巨大で光り輝く月を背にシルエットとして立つ。
ショット4 (5.6-7.5秒): パネル4。壮麗な伝統的パゴダが現れ、窓からは温かな黄金の光が漏れる。石段が静かな水辺へと下っていく。
ショット5 (7.5-9.4秒): パネル5。パゴダがさざ波立つ湖面に完璧に映り込む。月光が水面にきらめく黄金の道を作り出す。
ショット6 (9.4-11.3秒): パネル6。巨大な黄金の月が薄暮の空を支配し、静かな水面と造形された金色の木々に豊かな光を投げかける。
ショット7 (11.3-13.1秒): パネル7。ねじれた金色の木の枝が構図を優雅に縁取り、水の向こうにある遠い東屋へと視線を導く。
ショット8 (13.1-15.0秒): パネル8。2枚の壮麗な黒い羽が両端からゆっくりと近づき、再び静謐な風景をフレーミングする。カメラは、この完璧にバランスの取れた豪華なフィナーレを捉えたまま静止する。テキストは一切なし。

スタイル強化：連続する滑らかなカメラ移動、質感の完全な保持、豊かな金と深い黒のコントラスト、シネマティックなボリューメトリックライティング、プレミアムなアーティスティック美学、テキストなし、グリッドなし、番号なし、シームレスで優雅な旅。

--- スレッド継続 ---
[Thread 1] Model: Seedance 2.0
🎥動画生成用プロンプト:
@[Image] をシネマティックなシーケンスのストーリーボード参照として使用してください。最初のショット 01 として使用します。

1フレーム目から必ずフルスクリーンにしてください。レンダリング前に、すべてのパネル区切り線、番号、枠線を必ず切り取ってください。

8つのストーリーボードパネルすべてを厳密な時系列順に、シームレスに移行しながらつなぐ15秒の豪華なシネマティックシーケンス。ビジュアルスタイル：見事なアジアン・インクウォッシュと金箔イラストが融合し、超精細な黒い羽の質感、輝く黄金の月光、霧に包まれた山岳風景、静かな水面の反射、プレミアムなアーティスティックレンダリング、8K解像度。重要：フレーム、枠線、フィルムストリップ、番号、UI、テキストは絶対に入れないこと。シームレスなフルスクリーンのシネマティックショットのみをレンダリングすること。参照グリッドは完全に無視すること。全体を通して、正確なカラーパレット、筆致のテクスチャ、ライティングを維持すること。

ショット1 (0-1.9秒): パネル1。精緻な金の筋が入った壮麗な黒い羽の極端なクローズアップ。ゆっくりと漂い、その背後に輝く黄金の月と遠くのパゴダを見せる。
ショット2 (1.9-3.8秒): パネル2。羽が優雅に横へ流れ、暖かな月光に照らされた霧の山頂を明らかにする。カメラは滑らかに右へパンする。
ショット3 (3.8-5.6秒): パネル3。渦巻く大気の霧の中から、荘厳な岩壁が姿を現す。古木の松が、巨大で光り輝く月を背にシルエットとして立つ。
ショット4 (5.6-7.5秒): パネル4。壮麗な伝統的パゴダが現れ、窓からは温かな黄金の光が漏れる。石段が静かな水辺へと下っていく。
ショット5 (7.5-9.4秒): パネル5。パゴダがさざ波立つ湖面に完璧に映り込む。月光が水面にきらめく黄金の道を作り出す。
ショット6 (9.4-11.3秒): パネル6。巨大な黄金の月が薄暮の空を支配し、静かな水面と造形された金色の木々に豊かな光を投げかける。
ショット7 (11.3-13.1秒): パネル7。ねじれた金色の木の枝が構図を優雅に縁取り、水の向こうにある遠い東屋へと視線を導く。
ショット8 (13.1-15.0秒): パネル8。2枚の壮麗な黒い羽が両端からゆっくりと近づき、再び静謐な風景をフレーミングする。カメラは、この完璧にバランスの取れた豪華なフィナーレを捉えたまま静止する。テキストは一切なし。

スタイル強化：連続する滑らかなカメラ移動、質感の完全な保持、豊かな金と深い黒のコントラスト、シネマティックなボリューメトリックライティング、プレミアムなアーティスティック美学、テキストなし、グリッドなし、番号なし、シームレスで優雅な旅。
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084756211480641536/img/7LN2wwzGmRLzmz6W.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084757066208440686.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084757066208440686.mp4)**

**作者:** [Viki](https://x.com/churvikv) | **ソース:** [Link](https://x.com/churvikv/status/2084757066208440686) | **公開日:** 2026年8月4日

`Scenery & Spectacle` `Nature` `Hand-drawn` `Fantasy` `Macro`

---

### WORLD: High-end underground Yakuza VIP lounge at night, palette of deep plum…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
あなたはAIおよびクリエイティブテクノロジー分野のコンテンツを専門とするプロの翻訳者です。

以下のテキストを日本語に翻訳してください。

ルール:
1. "prompt"、"cinematic"、"camera pan" などの技術用語は、正確に保持してください。必要に応じて英語のままでも、ターゲット言語で定着した訳語でも構いません。
2. 逐語訳ではなく、ターゲット言語として自然で流暢なトーンを保ってください。
3. 書式（改行、箇条書き）は維持してください。
4. テキストに実際の Seedance/AI prompt（生成指示）が含まれている場合は、その部分は英語のままにし、周辺の文脈・説明のみを翻訳してください。

翻訳対象テキスト:
---
WORLD: 夜の高級地下ヤクザVIPラウンジ。配色は深いプラム、オブシディアンブラック、そして温かみのあるゴールド。漂う葉巻の煙、発光するネオンの中心装飾から放たれるボリューメトリックなアンビエントライト、重層的な被写界深度。 

CHARACTERS: - HERO (MILO) @[Image1] : バズカットフェードの入った背の高い若い男。顔と首にタトゥーがあり、黒いサングラスを着用。ハイファッションのオーバーサイズ黒ボンバージャケット、白いボタンアップシャツ、テーラードのワイドレッグ黒トラウザーズ、プラットフォームローファーを身につけている。紙のコーヒーカップを持っている。引き伸ばされたスタイライズドなプロポーション、フラットなバリューの切り分けが入った絵画的なマットスキン。 - 

RIVAL (TORA) @[Image2] : 小さなゴールドサングラスをかけ、マッチ棒を噛んでいる、巨大でずんぐりした人型のトラ。肩に大きな深いプラム色のジャケットを羽織り、巨大な樽型の腹にぴったり張り付いた白いタンクトップ、幅広のチャコールトラウザーズ、太いゴールドチェーンを着用。誇張されたKingpin風の重量級プロポーション、小さな頭、巨大で幅広い体躯、絵画的なマットファー。 

CINEMATIC STANDOFF SHOT DESIGN (6 Filmic Cuts with Expressions): 
• SHOT 1 (0–2s | Hero Arrival): Miloが高級ラウンジへ難なく足を踏み入れるミディアムショット。彼のボディランゲージは完全にリラックスしていて、まったく動じていない。コーヒーカップから気軽にひと口飲む。煙が部屋の中を漂う。 
• SHOT 2 (2–4s | Unknown Figure): Miloの背後からのOTS。ラウンジの奥、巨大なレザーアームチェアに座っているのは、そびえ立つ、信じがたいほど幅広いシルエット（Tora）。正体は影に隠れている。 
• SHOT 3 (4–6s | Recognition): Toraの巨大な肩越しの逆OTSで、Miloの顔をフレーミングする。Miloはひるまない。片手の指に重ねたリングを光らせながら黒いサングラスを少し下げるだけで、表情は無表情のまま、落ち着いて観察している。 
• SHOT 4 (6–9s | Expression Exchange): 交互のクローズアップ。Miloのクールで動じない視線 → 光の中へ身を乗り出す、傷だらけの巨大なトラの鼻先を持つTora。Toraは得意げで傲慢なニヤリ笑いを見せ、口の中のマッチ棒をずらす。微細な表情の変化で緊張が一気に高まる。 
• SHOT 5 (9–11s | Power Ready): マクロのインサートをピンポンのように切り返す。コーヒーカップを持つMiloが指のゴールドリングを何気なく直す → Toraの巨大な爪のある手がレザーの肘掛けをつかみ、太いゴールドチェーンがアンビエントライトの中で輝く。 
• SHOT 6 (11–15s | Wide Standoff): 両者のボスをフレーミングしたワイドショット。Miloは部屋の中央で少し前かがみに、気だるげに立ち、座ったままそびえ立つToraの塊と向き合っている。二人の間には煙が漂う。どちらも動かない。気にしていないストリートウェアと、手の届かない裏社会の権力との衝突。最終フレームをホールド。 
重みのある自然なキャラクターアニメーション、わずかな動きに反応する重いジャケット、フィルミックな24fpsシャッター、浅い被写界深度。フラットな2Dカートゥーンではない、太いアウトラインなし、セルシェーディングなし、光沢のあるCGIではない、Unreal Engineではない、フォトリアリズムではない。

--- QUOTED TWEET ---
Street Kingpin (Milo) met Underground Kingpin (Tora)

Seedance 2.0 on @ImagineArt_X https://t.co/4KwiSYqrzs

--- THREAD CONTINUATION ---
[Thread 1] GPT Image 2.0 (Tora) Character Sheet Prompt:

純白の背景上に、16:9のワイドスクリーンレイアウトで構成された、プレミアムでモダンなハイファッションのCHARACTER CONCEPT ART SHEETを作成してください。添付の参照画像がアートスタイルを定義します。これを厳格なスタイルバイブルとして扱い、このシート上のすべての人物に同じレンダリング技法を正確に再現してください。

[STYLE — MIRROR THE REFERENCE EXACTLY]: 参照画像のレンダリングを一字一句そのまま再現してください: 参照と同一のパレット、同一の全体的な明るさとコントラスト、クリーンで平坦な切り抜き形状として見える影を伴う、柔らかな単一光源ライティング。中心人物、ターンアラウンド、ポーズ、表情頭部、ディテールの切り抜きまで、すべてが参照画像と同じアーティストが同じファイル内で描いたように見えなければなりません。

[STYLE PROHIBITIONS — ABSOLUTE]: アウトラインなし、インク線なし、グラファイト線なし、セルシェーディングなし、アニメ風なし、3Dレンダー風なし、柔らかなボリューメトリックシェーディングなし、光沢のあるハイライトなし、アンビエントオクルージョンなし、コントラストの追加なし、暗くムーディーなカラーグレーディングなし、フォトリアリズムなし、リアルな毛並みなし。参照にない要素は、このシートにも存在しません。小さな人物は、簡略化されたアイコンではなく、大きな絵画から切り出されたように描いてください。
[PROPORTIONS]: すべての人物で参照の正確な体型比率に合わせてください — 誇張されたそびえ立つ重量級のアナトミー（巨大で幅広いフレーム、巨大な樽型の腹、9頭身、小さな頭、Kingpinスタイル）。小さな अध्ययनでもプロポーションを正規化しないでください。

[SUBJECT_DESCRIPTION]: 巨大でずんぐりした人型のトラ。オレンジ/黒の毛並み、小さなゴールドサングラス、金歯。衣装: 肩に羽織った巨大な深いプラム色のジャケット、巨大な腹にぴったり張り
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084784433866080256/img/077LBw9BpIrCWQ8_.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084791222141673712.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084791222141673712.mp4)**

**作者:** [PixieVerse](https://x.com/itsPixieVerse) | **ソース:** [Link](https://x.com/itsPixieVerse/status/2084791222141673712) | **公開日:** 2026年8月4日

`Action` `Wuxia` `3D Animation` `Realistic World` `Macro`

---

### Cinematic live-action martial arts short film. Outdoor ancient Chinese martial…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
---
シネマティックな実写武術短編映画。屋外の古代中国の武術訓練場。まばらな竹に囲まれた広い石の台、背景には曲線を描く赤い屋根の伝統的な寺院、石灯籠、明るい青空、澄んだ自然光、空気中にかすかに漂う砂ぼこり。

映像はアクションの途中から始まる — ゆっくりした導入はなし。

CUT 1 [0:00–0:01] — 極端なクローズアップ、静止したマクロショット：JESSYの包帯を巻いた拳が空を切り裂き、布がはじける。1フレーム目で打楽器のドラムヒット。

CUT 2 [0:01–0:02] — カメラが素早くパンし、そのまま引いて3/4のダイナミックショットへ。石の台の上で深い馬歩を取る彼女が現れ、ローブが揺れる。

CUT 3 [0:02–0:03] — ローアングルのヒーローショット。地面近くから見上げる構図で、背後に青空を背負いながら、カメラに向かって連打を繰り出す。

CUT 4 [0:03–0:04] — ワイドの静止ショット。訓練場と寺院全体が見え、JESSYは深い弓歩に移行し、開掌の打撃を放つ。

CUT 5 [0:04–0:05] — 横からのトラッキングショット。カメラが右から左へドリー移動し、円を描く少林のブロックから反撃へと流れる動きを捉える。

CUT 6 [0:05–0:06] — 真上からの俯瞰ショット。カメラがゆっくり回転しながら、彼女の円形の足運びと回転バックフィストを追う。

CUT 7 [0:06–0:07] — 地面レベルのショット。カメラは石床に低く寄り、低い構えと脚技がレンズのすぐ上をかすめていく。

CUT 8 [0:07–0:08] — 後方トラッキングショット。カメラが彼女の肩越しに寺院へ向かって追従し、前進する足運びと連続する手技を捉える。

CUT 9 [0:08–0:09] — タイトなクローズアップ、手持ちの微細な揺れ。動きの最中でも揺るがないJESSYの落ち着いた眼差しにフォーカス。

CUT 10 [0:09–0:10] — クローズアップ。カメラが下へパンし、擦り減った石の上を足が滑り、砂ぼこりが舞う。

CUT 11 [0:10–0:11] — スローモーションの挿入カット、静止フレーム。ローブの袖と帯が、陽光の中で劇的にはためく。

CUT 12 [0:11–0:12] — 3/4のダイナミックショット。カメラが寄り、片足の鶴立ちから両掌打へ移行する。

CUT 13 [0:12–0:13] — ワイドのシネマティックショット。カメラが彼女の周囲を弧を描くように回り、空中のバタフライキックが地に足のついた戦闘姿勢へ着地する — ビートドロップが入る。

CUT 14 [0:13–0:14] — 素早い手持ちのクローズアップ（この1秒内に2カット）：複数の角度から、拳と肘がWing Chunの木人に打ち込まれ、木人が激しく揺れる。

CUT 15 [0:14–0:15] — カメラが引いてワイドの静止ヒーローショットへ：最後の掌打で木人がスローモーションで真っ二つに割れ、木片が外へ飛び散る。JESSYは完璧な少林の構えを保ち、ローブが風に落ち着いていく。1拍フリーズしてからブラックアウト。テキスト表示：JESSY。

超写実的な実写シネマトグラフィー、ARRI Alexa 65風ルック、アナモルフィックレンズ、自然光、豊かなシネマティック・カラーグレーディング、控えめなフィルムグレイン、布の物理挙動、粉塵粒子、リアルな衝撃表現、シームレスな編集リズム、壮大なシネマティック・サウンドデザイン。

PART-2 (0:15–0:30)

連続性のある実写武術シークエンス。カットはカメラの動きに同期して編集される。JESSY — 顔、髪、淡い青のローブは全編で同一のまま維持。主人公は1人、敵は3人のみ。

中国の伝統的な染物工房の内部。吊るされた白い布、竹の棚、藍染めの桶、木製のバケツ、石床、暖かな陽光。

CUT 1 [0:15–0:16] — 手持ちのPOV風ショットで前進。JESSYが工房の扉を押し開け、光が差し込む。

CUT 2 [0:16–0:17] — カメラが左へ素早くパン。吊るされた布の陰から敵が奇襲してくる。JESSYはパンチの下へしゃがみ込む — 高速シャッターで捉える。

CUT 3 [0:17–0:18] — クローズアップ、カメラは手元に寄る。彼女は攻撃者の手首をつかみ、ひねりの入った手首極めに持ち込む。

CUT 4 [0:18–0:19] — 高速トラッキングショット、カメラが周囲を回る。コンパクトな掌底を打ち込み、敵はよろめいて後退する。

CUT 5 [0:19–0:20] — ワイドショット、カメラが右へパン。2人目の攻撃者が長い棒を振りかぶって彼女に向かってくる。

CUT 6 [0:20–0:21] — ローアングルのダイナミックショット。カメラが彼女の動きに合わせて下がり、JESSYは棒の振り下ろしの下へ潜り込む。

CUT 7 [0:21–0:22] — カメラが彼女とともに吊るされた布の間を滑り抜ける（through-frame transition）。布の向こう側へ位置を切り替える。

CUT 8 [0:22–0:23] — ミディアムショット、やや手持ち。彼女は棒を封じ、吊るされた布の内側に絡め取る。

CUT 9 [0:23–0:24] — 横移動のトラッキングショット。カメラが彼女と平行に動き、工房内を縫うように進む彼女が藍染めの桶をかろうじて避ける。

CUT 10 [0:24–0:25] — ワイドショット。カメラが引き、3人の攻撃者が彼女を挟み込むように収束していくのが見える。

CUT 11 [0:25–0:26] — 高速の円形トラッキングショット。カメラが集団の周囲を回り、JESSYは連続してパンチを受け流し、手首を次々とつかむ。

CUT 12 [0:26–0:27] — クローズアップのコンボショット、この1秒内に素早いカット。肘打ち、逆掌、背後からの攻撃をくぐる体捌き。
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084071688388726784/img/1fG4ddfSWw_HjSvj.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084071763630293465.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084071763630293465.mp4)**

**作者:** [Jessica Collins](https://x.com/AIwithJessica) | **ソース:** [Link](https://x.com/AIwithJessica/status/2084071763630293465) | **公開日:** 2026年8月3日

`Action` `Wuxia` `Photoreal` `Historical` `Macro` `Slow-Mo` `POV` `VFX`

---

### Hyper-realistic cinematic action sequence, 15 seconds, 16:9. A colossal…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
---
超写実的な cinematic アクションシーケンス、15秒、16:9。巨大な吊り橋が、幅ほぼ20キロメートルの峡谷をまたいでいる。実験的な maglev train が極限の速度でその上を疾走する一方で、橋は片側から壊滅的に崩壊し始める。塔はねじれ、ケーブルは莫大な張力に耐えきれず断裂し、道路部分全体が深淵へと崩れ落ちる。それでも列車は決して減速しない。カメラは、レール脇の低い追従ショット、ヘリコプターによる flyby、橋に設置されたショット、コックピット POV、そして崩壊する構造物の巨大なスケールを明らかにする sweeping な IMAX aerials の間を切り替える。最後のショット：列車は、残された橋が峡谷へ消え去るわずか数ミリ秒前に最後の隙間を通過する。Style: IMAX realism, believable structural physics, massive engineering scale, crystal-clear action, cinematic lighting.
---
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084090462759948288/img/esZxYFu2JNW6yIjJ.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084090691513172109.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084090691513172109.mp4)**

**作者:** [Alexandra Aisling](https://x.com/AllaAisling) | **ソース:** [Link](https://x.com/AllaAisling/status/2084090691513172109) | **公開日:** 2026年8月3日

`Action` `Chase` `Scenery & Spectacle` `Landmark` `Photoreal` `Realistic World` `VFX` `FPV & Aerial` `POV`

---

### First-person handheld cinematic walk through a rain-washed Asian night market…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
雨に洗われたアジアの夜市を、ファーストパーソンの手持ちシネマティック映像で歩き抜ける。ネオンの反射、湯気、そして居心地のよい人混みの雰囲気を捉える。

一人称の歩行者（見えないPOV）（カメラは目線の高さで保持され、市場の中を自然な足取りとわずかな手持ちの揺れで前進する。手や身体は見えない）、夜市の屋台の店主たち（エプロンを着けた複数の屋台の料理人が、湯気の立つ調理台の後ろで作業し、串を返したり、中華鍋で炒め物をしたりしている）、買い物客の群れ（前景と背景にいる地元の歩行者や観光客が混在し、一部は透明な傘を持ち、気ままに行き交う）、ネオンサイン（赤、琥珀色、ピンクに光る看板が屋台や頭上の配線に吊られ、中国語／日本語風の文字があり、濡れた路面に反射している）

一人称カメラは、賑わう夜市の中を安定して前進する。屋台では店主たちが調理し、食べ物の屋台から湯気が立ちのぼる一方で、歩行者たちは左右をすり抜けていく。雨粒が空中できらめく中、傘はネオンの光を受ける。軽い雨の後の、屋根付きの細い夜市通路。濡れて反射するアスファルト、両側に密集した屋台、頭上には温かなネオンの輝き、湯気の帯が通路へと漂っている。

映像はシネマティックで、居心地がよく、雰囲気豊か。濡れた表面には温かなネオンの赤／琥珀／ピンクが反射し、調理の湯気による柔らかな霞、きらめくハイライトを伴う浅い被写界深度。

目線の高さの一人称手持ちPOVを使用し、自然なわずかな揺れと足音を伴う前方トラッキング、前景の歩行者と背景のネオンサインの間で時折さりげないフォーカス送りを行う。連続したワンショット。

音声には周囲の市場音が含まれる：  
油がはぜる音、ヘラが触れ合う音、遠くの話し声、傘に落ちる柔らかな雨音、群衆の雑音に溶け込む低く温かなBGM。

一貫性を維持する：  
全編を通して厳密な一人称POVを維持すること — 頭や手は見せない。カットなしの単一連続歩行ショットを保つこと。すべてのフレームで濡れた路面とネオン反射の視認性を維持すること。食べ物の屋台からの湯気を雰囲気の層として残すこと。ドローンショット、三脚固定ショット、POVの破綻は入れないこと。
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084095105435389952/img/RWp-fjfWBTcwASAO.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084099897947754665.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084099897947754665.mp4)**

**作者:** [DΞV](https://x.com/junwatu) | **ソース:** [Link](https://x.com/junwatu/status/2084099897947754665) | **公開日:** 2026年8月3日

`Scenery & Spectacle` `Cityscape` `Food` `Cooking` `Photoreal` `Realistic World` `POV` `ASMR`

---

### Shot 1 (0-5s): ONE Grim Reaper, full robe and scythe, stands in line at a DMV…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
ショット1（0〜5秒）：DMVで紙の整理券を持って列に並ぶ、ローブと大鎌を完全装備した死神が1体だけ。被写体は単独のみ、疲れ切った姿勢。

ショット2（5〜10秒）：死神が壁の時計をちらりと見てため息をつき、傘のように大鎌を壁にもたせかけ、長い待ち時間に備えて腰を落ち着ける。低い位置からの固定アングルで捉え、蛍光灯の照明、官僚的な徒労感。

--- 引用ツイート ---
Prompt Drop weekend が始まりました。  
今後3日間のテーマは、この順番です。  
今日は Action  
明日は Sci fi  
日曜日は Comedy

でも、テーマはあくまでインスピレーションのためのもの。いつでも自由に、自分が表現したいものを創作してシェアして大丈夫です！

ここで共有された prompts もぜひ試して、結果を投稿してください。みんなで楽しみ、学び合い、刺激を受け合えたら嬉しいです。

ここは安全な創作の場です。  
誰もあなたを評価したり、批判したり、傷つけたりするためにここにいるわけではありません。自分のやり方で、自分のレベルで、自分のスタイルで創作してください。  
あなたらしく。

いくつか簡単なルールがあります。性的な内容の prompts は避け、お互いを尊重し、前向きな雰囲気を保ってください。  
さあ、video prompts を投稿しましょう。退屈なアイデアにとって、この週末を危険なものにしよう！

最初の video prompt は最初のコメントにあります 👇👇
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084100095335714816/img/LIdznK3PHmn7NUCN.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084100175287468448.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084100175287468448.mp4)**

**作者:** [DeCat](https://x.com/DeCat2025) | **ソース:** [Link](https://x.com/DeCat2025/status/2084100175287468448) | **公開日:** 2026年8月3日

`Meme & Comedy` `Anthropomorphic` `Photoreal` `Realistic World`

---

### 10-second cinematic comedy sequence, hyper-realistic, 16:9.

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
10秒のシネマティックなコメディシーケンス、超写実的、16:9。

昼間の緑豊かな森の空き地で、粗い肌、乱れた髪、重い棍棒を持つ巨大で筋骨隆々のトロールが視界に踏み込んでくる。何者にも止められないかのように、咆哮しながら凶暴に振る舞う。鳥たちは一斉に飛び立ち、足元では地面が揺れる。

すると、小さくて色鮮やかな蝶が、彼の顔の前をやさしくひらひらと舞う。トロールは即座に固まる。目は恐怖で大きく見開かれ、純粋な恐怖に息をのむ。よろめいて後ずさりし、パニックで棍棒をむやみに振り回すが、完全に空振りする。蝶は落ち着いたまま、さらに近くへ漂う。トロールは悲鳴を上げ、身を隠すにはあまりにも小さすぎる木の後ろにしゃがみ込み、それから恐る恐る顔をのぞかせる。

蝶は彼の鼻先に軽やかに止まる。トロールは完全に寄り目になり、全身を震わせて完全なパニックに陥る。最後の瞬間、彼は情けない悲鳴を上げて棍棒を落とし、蝶がのんびりと後を追ってくる中、全速力で逃げ去る。

テンポの速い身体コメディ、明確で途切れのないアクション、トロールの巨大で恐ろしい見た目と、たった一匹の小さな蝶に対する滑稽な恐怖との強い対比、トロールは1体のみ、蝶は1匹のみ、セリフなし、音楽なし、画面上のテキストなし、キャプションなし、有名セレブの顔なし、認識可能な俳優の顔なし、公人の肖像なし。プロポーションを維持すること。スタイルと特徴を維持すること。アスペクト比 16:9。

--- 引用ツイート ---
Prompt Drop weekend が始まりました。 
次の3日間のテーマは、この順番です。 
今日は Action
明日は Sci fi
日曜日は Comedy

でも覚えておいてください。テーマはあくまでインスピレーションのためのものです。いつでも自由に、自分が作りたいものを作ってシェアして大丈夫です！

ここで共有された prompts もぜひ試して、結果を投稿してください。みんなで楽しみ、学び、刺激を受け合いましょう。

ここは安全なクリエイティブスペースです。
誰もここで、他人を評価したり、批判したり、傷つけたりするためにいるわけではありません。自分のやり方で、自分のレベルで、自分のスタイルで創作してください。
あなたらしく。

シンプルなルールがいくつかあります。性的な内容の prompts は避け、お互いを尊重し、前向きなエネルギーを大切にしてください。
さあ、動画 prompts を投稿しましょう。退屈なアイデアにとって、この週末を危険なものにしよう！

最初の動画 prompt は最初のコメントにあります 👇👇
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084106331791761408/img/lHbqP-1KooK4Y36z.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084106358450761800.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084106358450761800.mp4)**

**作者:** [DeCat](https://x.com/DeCat2025) | **ソース:** [Link](https://x.com/DeCat2025/status/2084106358450761800) | **公開日:** 2026年8月3日

`Meme & Comedy` `Anthropomorphic` `Photoreal` `Fantasy`

---

### Use the uploaded reference image as the exact character reference. Preserve her…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
アップロードされた参照画像を、キャラクターの正確な参照として使用してください。彼女の顔のアイデンティティ、髪型、瞳の色、メイク、肌の色、体のプロポーション、そしてすべてのショットを通して一貫した顔の整合性を維持してください。同じキャラクターを一貫して保ってください。15秒の超リアルなGRWMオフィスルーティンを作成し、15のテンポの速いシネマティックなショット（各約1秒）、滑らかなマッチカット、whip pan、オブジェクトトランジション、プレミアムなライフスタイル映像表現、そしてリアルな動きで構成してください。

1. 目を開けるとアラームが鳴る。

2. 体を起こし、伸びをして、微笑む。

3. バスルームで素早くスキンケアの水しぶきを浴びる。

4. 鏡の前で軽いメイクをする。

5. 髪をブラッシングしてスタイリングする。

6. シックなオフィスコーデに着替える。

7. ヒール、腕時計、イヤリングを身につける。

8. ハンドバッグ、ノートパソコン、コーヒータンブラーを手に取る。

9.  पीछेでアパートのドアに鍵をかける。

10. アパートのロビーを自信を持って歩く。

11. 混雑した都市の通りでタクシーを拾う。

12. シネマティックな街の反射を映しながらダウンタウンを移動する。

13. モダンなガラス張りのオフィスビルの前で車を降りる。

14. アクセスカードをスキャンしてオフィスに入る。

15. デスクに座り、ノートパソコンを開き、カメラに微笑みかけて、仕事を始める。

超リアルな商業品質、滑らかなハンドヘルドおよびジンバルのカメラワーク、自然な表情、リアルな身体の動き、プレミアムなオフィス内装、高級アパート、シネマティックなカラーグレーディング、浅い被写界深度、リアルな反射、4K HDR、16:9、テキスト、字幕、ロゴ、ウォーターマークなし。
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084107212998537216/img/PalYg-MXNA3blo8N.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084107248910152167.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084107248910152167.mp4)**

**作者:** [Synthia](https://x.com/AIwithSynthia) | **ソース:** [Link](https://x.com/AIwithSynthia/status/2084107248910152167) | **公開日:** 2026年8月3日

`Portrait & Fashion` `GRWM` `Photoreal` `Realistic World` `POV`

---

### Use the uploaded storyboard as the exact visual reference. Preserve the same…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
アップロードされたストーリーボードを、正確なビジュアルリファレンスとして使用してください。すべてのシーンを通して同じ若い女性を一貫して維持し、顔立ち、髪型、服装、アクセサリー、表情を完全に同一に保ってください。コンビニエンスストア、Starbucksのコーヒーステーション、バリスタ、メニューディスプレイ、アイスラテもすべて同じブランド表現で統一してください。シネマティックな手持ちカメラの動き、暖かい自然光、浅い被写界深度、商業品質のカラーグレーディングを備えた、超リアルでプレミアムなUGCコーヒーCMを制作してください。

女性は店内に入る途中でセルフィーを撮影しながら、「I'm craving a coffee right now.」と言います。Starbucksのカウンターに気づいて笑顔になり、「They have Starbucks here!」と言います。メニューからアイスラテを選び、注文し、バリスタがドリンクを作る様子を見守ります。シネマティックなマクロショットで、氷のキューブ、新鮮なミルク、濃厚なエスプレッソが注がれる様子、クリーミーなコーヒーの渦、カップに結露が生まれる瞬間を捉えます。

彼女は完成したアイスラテを受け取る前にわくわくしながら待ち、その後、プレミアムなヒーローリビールとしてドリンクをカメラの近くに持ち上げます。爽やかにひと口飲み、自然な笑顔で、「Wow... that's so smooth.」と言います。動画は店の外で終わり、彼女がドリンクを顔の横に持ちながらカメラに向かって笑顔を見せ、「You have to try this.」と言います。

Style: Premium UGC lifestyle commercial, luxury café aesthetic, photorealistic coffee textures, macro product cinematography, smooth handheld and gimbal movements, realistic lighting, shallow depth of field, ultra-detailed 4K HDR.

Audio: Natural store ambience, footsteps, payment sounds, coffee machine, ice clinking, milk and espresso pouring, cup handling, soft background conversations, and straw sipping. No subtitles, no captions, no watermarks, or extra logos beyond the product branding.
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084110919194619904/img/vUobPAFOT1rDEOHz.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084110948646932966.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084110948646932966.mp4)**

**作者:** [Smiling Khan](https://x.com/AIwithkhan) | **ソース:** [Link](https://x.com/AIwithkhan/status/2084110948646932966) | **公開日:** 2026年8月3日

`Product Ad` `F&B` `Photoreal` `Realistic World` `POV` `Macro` `ASMR`

---

### Create a 16-panel cinematic storyboard grid for Phase 1 (0-15s) of a historical…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
---
第1フェーズ（0〜15秒）の歴史ジャングル生存アクション動画用、16分割のシネマティックなストーリーボードグリッドを作成する。16:9の横長ストーリーボードシート。

ストーリーボードのアートスタイル：
白黒のフォトグラフィック・スケッチ、リアルな人体プロポーション、ダイナミックなアクション構図、シルエットの判読性が高いこと。選択的に色付き注釈を使用する：
- Kaelの動きには赤い矢印、
- Raidersの動きには青い矢印、
- 日差しと飛散する破片には黄色のマーク、
- カメラトラッキングには緑の矢印。
タイムスタンプなし、セリフなし、ロゴなし、ウォーターマークなし。

シーン：
巨大な根、木漏れ日、霧、ぬかるんだ土が広がる、鬱蒼とした原始のジャングル。

キャラクター：
Kael（追われる戦士）、Jaguar Chief（毛皮を身に着けたリーダー）、そしてRaiders。

パネル1：
アクションの途中から開始。Kaelが巨大なジャングルの根の間を全速力で疾走し、幅広い葉が顔のそばを激しくかすめる。

パネル2：
トラッキングカメラショット。裸足が濡れた泥を踏み砕き、泥水が後方へ飛び散る。

パネル3：
フリントの槍がジャングルの空気を切って飛び、Kaelの肩をかすめて木の幹に突き刺さる。

パネル4：
Jaguar Chiefが巨大な板根の陰から飛び出し、macuahuitlを頭上に掲げて咆哮する。

パネル5：
Kaelは垂れ下がったつるを使って走りながら勢いを切り替え、Jaguar Chiefの一撃の下へ身をかがめる。

パネル6：
Kaelが鋭い肘打ちを後方へ叩き込み、Jaguar Chiefの肋骨に入れて、密生した下草の中に空間を作る。

パネル7：
Raiders 1が高い木の枝から飛びかかり、骨の短剣を下向きに構えたまま空中へ躍り出る。

パネル8：
Kaelが地面の濡れた葉の上を転がり、空中からの突進を回避する一方で、Raiders 1は泥に着地する。

パネル9：
クローズアップのアクション。Kaelが泥の上を脚で払ってRaiders 1の足を払い、鋭い根の上に転ばせる。

パネル10：
Jaguar Chiefが再び攻撃を仕掛け、黒曜石の刃が付いたmacuahuitlを重い水平斬りで振るう。

パネル11：
Kaelが自分の木製武器を掲げて防御する。黒曜石の歯が激突し、木片と粉塵が空中に舞う。

パネル12：
泥まみれの組み合いの瞬間。Jaguar ChiefがKaelの骨のネックレスをつかみ、古代の石のブロックに押し付ける。

パネル13：
KaelがJaguar Chiefに頭突きを食らわせ、首元の掴みを振りほどく。日差しの下で血と汗が飛び散る。

パネル14：
Kaelが拘束を振り切り、古代遺跡へ続く、苔むした石灰岩の階段を駆け上がる。

パネル15：
Jaguar Chiefと残る2人のRaidersが、執拗な追跡のまま、すぐ後ろから石段を駆け上がってくる。

パネル16：
第1フェーズの最終フリーズフレーム。Kaelが遺跡の上部の縁にたどり着き、macuahuitlを構えて振り返る。その瞬間、Jaguar Chiefが衝突のために跳び上がる。

--- スレッド継続 ---
[Thread 1] @Hailuo_AI シート1: KAEL（追われる戦士）

シート2: JAGUAR CHIEF（追跡者） https://t.co/sEU2KAAIl8

[Thread 2] @Hailuo_AI シート3: THE RAIDERS（敵グループ）

シート4: WEAPON BIBLE（古代武器） https://t.co/CB3Vb2K3vW

[Thread 3] 第1フェーズ（0:00 – 0:15）：狩りとジャングルの奇襲

16パネル・ストーリーボード・プロンプト（第1フェーズ）

第1フェーズ（0〜15秒）の歴史ジャングル生存アクション動画用、16分割のシネマティックなストーリーボードグリッドを作成する。16:9の横長ストーリーボードシート。

ストーリーボードのアートスタイル：
白黒のフォトグラフィック・スケッチ、リアルな人体プロポーション、ダイナミックなアクション構図、シルエットの判読性が高いこと。選択的に色付き注釈を使用する：
- Kaelの動きには赤い矢印、
- Raidersの動きには青い矢印、
- 日差しと飛散する破片には黄色のマーク、
- カメラトラッキングには緑の矢印。
タイムスタンプなし、セリフなし、ロゴなし、ウォーターマークなし。

シーン：
巨大な根、木漏れ日、霧、ぬかるんだ土が広がる、鬱蒼とした原始のジャングル。

キャラクター：
Kael（追われる戦士）、Jaguar Chief（毛皮を身に着けたリーダー）、そしてRaiders。

パネル1：
アクションの途中から開始。Kaelが巨大なジャングルの根の間を全速力で疾走し、幅広い葉が顔のそばを激しくかすめる。

パネル2：
トラッキングカメラショット。裸足が濡れた泥を踏み砕き、泥水が後方へ飛び散る。

パネル3：
フリントの槍がジャングルの空気を切って飛び、Kaelの肩をかすめて木の幹に突き刺さる。

パネル4：
Jaguar Chiefが巨大な板根の陰から飛び出し、macuahuitlを頭上に掲げて咆哮する。

パネル5：
Kaelは垂れ下がったつるを使って走りながら勢いを切り替え、Jaguar Chiefの一撃の下へ身をかがめる。

パネル6：
Kaelが鋭い肘打ちを後方へ叩き込み、Jaguar Chiefの肋骨に入れて、密生した下草の中に空間を作る。

パネル7：
Raiders 1が高い木の枝から飛びかかり、骨の短剣を下向きに構えたまま空中へ躍り出る。

パネル8：
Kaelが地面の濡れた葉の上を転がり、空中からの突進を回避する一方で、Raiders 1は泥に着地する。

パネル9：
クローズアップのアクション。Kaelが泥の上を脚で払ってRaiders 1の足を払い、鋭い根の上に転ばせる。

パネル10：
Jaguar Chiefが再び攻撃を仕掛け、黒曜石の刃が付いたmacuahuitlを重い水平斬りで振るう。

パネル11：
Kaelが自分の木製武器を掲げて防御する。黒曜石の歯が激突し、木片と粉塵が空中に舞う。

パネル12：
泥まみれの組み合いの瞬間。Jaguar ChiefがKaelの骨のネックレスをつかみ、古
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084112791112216576/img/b-2pzHIS37KJafUq.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084112911912304907.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084112911912304907.mp4)**

**作者:** [Gilbert Odera | Your AI Plug](https://x.com/yourPlugAI) | **ソース:** [Link](https://x.com/yourPlugAI/status/2084112911912304907) | **公開日:** 2026年8月3日

`Action` `Chase` `Hand-drawn` `Historical` `Creative Asset`

---

### Style: Fast-paced, cinematic, luxury fashion, IMAX-quality visuals, dramatic…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
スタイル：テンポが速く、シネマティックで、ラグジュアリーファッション、IMAX品質の映像、ドラマチックなライティング、プレミアムなカラーグレーディング、エネルギッシュな編集、セリフなし、シネマティックなインパクトを伴う力強いエレクトロニックなトレーラーミュージック。

0:00–0:02

自動ドアの空港の入口がスライドして開く超ワイドショット。モデルがサングラスとヘッドホンを着けて入ってくる。短く強いベースヒット。

0:02–0:04

彼女が自信たっぷりにターミナルを歩き、洗練されたキャリーオンを引いていく横からの高速トラッキングショット。モーションブラーとスピードランプ。

0:04–0:06

高速モンタージュ：

. カフェでコーヒーを受け取る
. 搭乗券が手の中でひらりと返る
. 高級腕時計のクローズアップ
. つやのある床を踏むスニーカー

（0.5秒のカット）

0:06–0:09

ローアングルのヒーローショット。巨大な窓から差し込む陽光の中を彼女がターミナルを歩く。周囲の人々はブレて流れ去るが、彼女だけは完璧にピントが合っている。

0:09–0:11

高速シーケンス：

. エスカレーターに乗る
. 空港の出発案内 बोर्ड
. 髪をかき上げる
. サングラスを直す
. カメラオービットのトランジション

0:11–0:13

搭乗ゲートへ向かって歩く一瞬、スローモーション。シネマティックなレンズフレア、ドラマチックなトレーラーブーム。

0:13–0:15

最後は、ジェットブリッジを歩く後ろ姿のヒーローショット。振り返って肩越しに一瞬だけ視線を向けたあと、力強いシネマティックなインパクト音とともに画面がブラックアウトする。

編集スタイル

. 0.3〜1秒のショット
. スピードランプ
. ホイップパン
. マッチカット
. フラッシュフレームのトランジション
. カットに同期したベースドロップ
. シネマティックなトレーラーのテンポ
. 一貫して自信に満ちたランウェイ風の歩き方
. セリフなし、ハイエナジーなトレーラーミュージックとシネマティックなサウンドデザインのみ

これは、典型的な空港Vlogというより、Netflixのアクション予告編とラグジュアリーファッションキャンペーンを掛け合わせたような雰囲気になる。

--- スレッドの続き ---
[Thread 1] @thankyouai_hq 今すぐ試してみて👇
https://t.co/tqiBF0338a
---
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084113182839234560/img/cvJE0jpt5I41iAYI.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084113223633248321.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084113223633248321.mp4)**

**作者:** [Sophia](https://x.com/sophiaparkerr_) | **ソース:** [Link](https://x.com/sophiaparkerr_/status/2084113223633248321) | **公開日:** 2026年8月3日

`Portrait & Fashion` `Fashion` `Photoreal` `Realistic World` `Slow-Mo` `Macro`

---

### A 15-second photorealistic smartphone selfie vlog that looks exactly like a…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
15秒のフォトリアルなスマートフォンのセルフィーVlogで、まるで本物の携帯電話で撮影した映像そのものに見えること。若い女性（画像＝彼女の顔と髪）が、晴れた午後に自転車で日本の京都の静かな通りを探索している。彼女は自然な手持ちの揺れ、わずかな手ブレ、リアルなスマートフォンのオートフォーカス、本物らしい手ブレ補正、そして実物に忠実な色合いで、セルフィーモードで自分自身を撮影している。カメラに向かって微笑みながら、彼女は「Let's explore Kyoto today!」と言う。彼女は木造家屋が並ぶ細い昔ながらの通りを楽しそうに走り抜けるが、やがて道を間違えたことに気づいて笑いながら、「I think I'm lost!」と言う。静かな小道を進み続けると、背の高い木々と赤い鳥居に囲まれた美しい隠れた日本の神社を思いがけず見つける。彼女は自転車を停め、驚いたような笑顔で神社へ歩いていき、穏やかな景色を数枚さっと撮影し、その後カメラを自分に向け直して「Getting lost was worth it!」と言う。温かく手を振って明るく微笑み、「See you next time. Bye!」と言ってから、録画を終えるためにスマートフォンへ手を伸ばす。映像は、自然な人間の動き、一貫した顔立ち、リアルな自転車走行、本物の京都の雰囲気、ビューティーフィルターなし、CGIなし、AIっぽいプラスチック感なし、字幕なし、ロゴなし、ウォーターマークなし、BGMなしで、まさに本物のスマートフォンVlogそのものに感じられること。聞こえるのは鳥のさえずり、自転車の音、やわらかな風、足音、そして自然な屋外の環境音だけである。
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084114970183397376/img/A9i8xuO44U6hbW03.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084115206926430473.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084115206926430473.mp4)**

**作者:** [Aqsa](https://x.com/Aqsahere_) | **ソース:** [Link](https://x.com/Aqsahere_/status/2084115206926430473) | **公開日:** 2026年8月3日

`Portrait & Fashion` `Travel Vlog` `Scenery & Spectacle` `Landmark` `Photoreal` `Realistic World` `POV`

---

### Reference Materials

![日本語](https://img.shields.io/badge/lang-日本語-green)

#### 📝 プロンプト

```
Reference Materials

[@ StartFlame01]
Starting frame.
Reference for the environment
and the opening composition.

The woman holding a smartphone
in [@ StartFlame01] is Hoshi.

[@ CharacterSheet01]
Character sheet for Yuman.
Reference for Yuman’s appearance.

[@ CharacterSheet02]
Character sheet for Hoshi.
Reference for Hoshi’s appearance,
body proportions, hairstyle,
and clothing.

────────────────────

Characters

Hoshi
The woman holding a smartphone
in [@ StartFlame01].
Refer to [@ CharacterSheet02]
for Hoshi’s appearance.

Hoshi is a highly skilled hacker
with a strong fondness for alcohol.
She is a slender adult woman
with dark hair loosely tied
in a slightly messy bun.
She wears a relaxed,
oversized white short-sleeved shirt,
dark slim pants,
and casual sneakers.
Preserve her natural
live-action appearance.

Yuman
The frogman
in [@ CharacterSheet01].
Refer to [@ CharacterSheet01]
for Yuman’s appearance.

────────────────────

Style

Live-action cinematic sci-fi cyberpunk
with a dark green atmosphere,
room-scale layered holographic UI,
and diverse near-future communication systems
that seamlessly self-deploy as needed,
including floating displays,
wearable communication devices,
VR gear,
and holographic workstation interfaces.

Natural character movement.

────────────────────

Language

English dialogue.

────────────────────

Structure

Scene 1
Use [@ StartFlame01]
as the starting frame.

Hoshi’s smartphone rings.
It is an incoming call from Yuman.

Hoshi quickly checks the screen
and taps the answer button.

The moment she answers,
the entire communication environment
activates at once around her.

Luminous holographic UI,
floating displays,
signal frames,
and near-future communication devices
rapidly materialize and expand
throughout the space,
creating an immediate striking reveal.

Scene 2
Within the fully deployed
holographic communication environment,
a main holographic screen forms
in front of Hoshi.

Yuman appears
inside the holographic screen.

Yuman:
“Hoshi, drinking again?”

Hoshi:
“No beer, no life.”

Yuman:
“Transmitting now.”

Scene 3
As Yuman transmits the data,
the holographic workstation
around Hoshi becomes active.

Wearable VR communication gear
is deployed around Hoshi,
and a holographic computer interface
expands around her hands.

Hoshi checks the received data.

Hoshi:
“Confirmed.”
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084119824339435520/img/Kv7uap5_WDlSqW9O.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084120344684888126.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084120344684888126.mp4)**

**作者:** [おっさん(Ossan)](https://x.com/ossan_no8) | **ソース:** [Link](https://x.com/ossan_no8/status/2084120344684888126) | **公開日:** 2026年8月3日

`Story` `Talk` `Photoreal` `Sci-Fi` `VFX`

---

### TITLE BURJ KHALIFA VLOG  FORMAT 15 seconds | 16:9 | Live-action travel vlog…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
---
タイトル　ブルジュ・ハリファ VLOG　形式　15秒 | 16:9 | ライブアクションの旅行Vlog　フィクションのドラマ化。ドキュメンタリー風の視覚的リアリズム。　設定　ドバイのブルジュ・ハリファ展望台。床から天井までのガラス窓越しに、シェイク・ザイード・ロード、ダウンタウン・ドバイ、ドバイ・ファウンテン、周囲の高層ビル群を含むドバイのスカイライン全体が見渡せる。時間帯：ゴールデンアワーから日没へ向かう頃。暖かな日差し、澄んだ空気、穏やかな屋内の雰囲気、そして遠くに感じる街の活動。　キャラクター　ブルジュ・ハリファ展望台を訪れる少人数の友人グループ。　シーケンス全体を通して、服装、アクセサリー、バッグ、キャラクターの पहचानを一貫して維持する。体験全体を通じて自然な観光客らしい振る舞い。　ストーリー　00–04秒 — 導入　広角のドキュメンタリーショットで、訪問者たちがパノラマのスカイラインを眺めるブルジュ・ハリファ展望台を映し出す。カメラはゆっくりとガラスへ向かって歩き、ドバイが遠くまで果てしなく広がっていく。黄金色の光が街全体に自然に反射する。人々はカメラを意識せず、何気なく動いている。　04–08秒 — 探索　手持ちのVlog視点に切り替わり、グループが展望台を歩く様子を追う。1人が有名なランドマークを指さし、別の1人はスマートフォンで写真を撮る。自然な会話、笑い、本物らしい反応。カメラ担当は、現実的な足取り、さりげないフレーミングの補正、自然なモーションブラーを伴って追従する。　08–12秒 — ハイライト　グループがパノラマの展望エリアに到着する。1人の友人がスカイラインを背景いっぱいに入れた自撮り動画を撮影し、他のメンバーは夕日を眺める。カメラは自然に回り込み、眼下に広がる街の圧倒的な高さとスケールを見せる。屋外テラス付近では、風が衣服をわずかに揺らす。誇張されたシネマティックな動きはない。　12–15秒 — 終わり　カメラは展望ガラスのそばで落ち着く。グループは静かに夕日を見つめ、下ではドバイの街の灯りが点き始める。1人がスカイラインに向かって微笑み、その後立ち去る。穏やかで印象に残る旅行の瞬間で締めくくる。　カメラ　地に足のついた旅行ドキュメンタリーの撮影スタイル。　ミックス：広い環境ショット、中程度の手持ち追従ショット、短いクローズアップのリアクションショット　自然な手持ちの揺れ。現実的なオペレーターの動き。あり得る観光客のカメラ位置。あり得ないドローン移動はなし。過度なスローモーションはなし。　ライティング　照明はすべて自然環境からのみ発生する。　観察窓から差し込む暖かなゴールデンアワーの陽光。明るい外景と屋内空間の間で自然に露出が変化する。現実的なハイライトのロールオフ。細かな影。人工的なリムライトはなし。　物理　重力と運動量は現実通り。　自然な歩行動作。説得力のある衣服の揺れ。屋外テラスでは風に髪がわずかに反応する。ガラス面のリアルな反射。手すり、展望望遠鏡、展望台の表面との本物らしい接触。　人間の演技　リラックスした、信じられる観光客らしい振る舞い。　自然な笑顔。気軽な会話。時折ランドマークを指さす仕草。小さな姿勢の調整。圧倒的な高さに対する本物の反応。誇張されたインフルエンサー風のポーズはなし。　音声　柔らかな群衆のざわめき。磨かれた床を歩く足音。静かな会話。時折聞こえるカメラのシャッター音。屋内の穏やかな空調音。屋外テラス付近の軽い風。はるか下から届く遠い街の環境音。大げさなシネマティック音楽や予告編風の効果音はなし。　ビジュアル特性　フォトリアルなライブアクション映像。観察的な旅行ドキュメンタリーの質感。自然な肌の質感。本物らしい建築ディテール。リアルな反射。わずかなセンサーノイズ。自然なモーションブラー。不完全な手持ちフレーミング。　避けるもの：ビデオゲーム風の美学　CGIっぽい見た目　過度なHDR　彩度過多の色　あり得ないカメラ移動　浮遊する物体　完璧に振り付けられた動き　美肌フィルターの顔　継続性　キャラクターの पहचान、服装、展望台のレイアウト、スカイラインの向き、ショット間のライティングを維持する。　地理的な向きと画面上の進行方向を保持する。　すべての動作は、前のショットで確立された物理的状態から始まる。
---
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084130806155685888/img/xY3h8f389-UPxH2W.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084131147475501318.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084131147475501318.mp4)**

**作者:** [ᴍᴜʀᴘʜʏ](https://x.com/Diplomeme) | **ソース:** [Link](https://x.com/Diplomeme/status/2084131147475501318) | **公開日:** 2026年8月3日

`Portrait & Fashion` `Travel Vlog` `Scenery & Spectacle` `Cityscape` `Photoreal` `Realistic World` `POV`

---

### A cinematic post-apocalyptic survival thriller set in a dark, misty forest at…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
暗く霧深い森の黄昏を舞台にした、シネマティックなポストアポカリプス・サバイバルスリラー。汚れた色あせた赤いフーディーとダークジーンズを身に着けた怯えた若い男が、濃い森の中を走り抜ける。顔は泥、汗、引っかき傷で覆われている。影のような感染者たちが霧の中から容赦なく彼を追い、遠くの炎が不気味なオレンジ色の光で森を照らしている。カメラは、緊迫感のある handheld の追跡ショット、サバイバーの恐怖に満ちた表情のドラマチックなクローズアップ、木々の間を抜ける low-angle の tracking shot、そして霧の中から現れるモンスターを捉えたワイドな cinematic reveal を交互に切り替える。濃い煙、漂う火の粉、volumetric lighting、リアルな呼吸、テンポの速いアクション、サスペンスに満ちた雰囲気、リアルな物理挙動、Hollywood horror cinematography、photorealistic、ultra-detailed、8K HDR、shallow depth of field、cinematic teal-and-orange color grading、没入感のある sound-inspired visuals、ブロックバスター級のサバイバルホラー。
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084136500221165568/img/8zJ8Bw23Pxr_BgJx.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084137933456732212.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084137933456732212.mp4)**

**作者:** [Calira](https://x.com/CaliraVal) | **ソース:** [Link](https://x.com/CaliraVal/status/2084137933456732212) | **公開日:** 2026年8月3日

`Horror` `Monster Chase` `Photoreal` `Realistic World` `POV` `VFX`

---

### FORMAT 15s / free rhythm / 1 MATCH CUT / CONTINUOUS MOVE UNTIL MATCH CUT +…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
---
FORMAT 15s / free rhythm / 1 MATCH CUT / CONTINUOUS MOVE UNTIL MATCH CUT + IMMEDIATE ACTION FROM FIRST FRAME

SUBJECTS: 破損したEVAスーツを着た一人の宇宙飛行士が、地球の上空を漂いながら、故障しかけている宇宙船を必死に修理している。後に同じ人物が、カジュアルな服装で小さなアパートに座っている姿として明かされ、VRヘッドセットはマッチカットの後にのみ現れ、途切れのない一連の動作で外される。

ENVIRONMENT: 地球の発光する青い大気の上に広がる宇宙空間、漂う破片、点滅する警告灯、スーツのアラームによって破られる凍りついた静寂。そこから、散らばった電子機器、コーヒーマグ、カーテン越しに差し込む柔らかな朝の光で満たされた、薄暗いが居心地のよいアパートへと移行する。

MOOD: 命懸けのサバイバルが、動きや空間の連続性を崩すことなく、日常の現実へと溶け込んでいく。

COLOR LOGIC: Naturalistic Film Print Emulation.

⸻

TIMELINE

0:00–0:07

一続きのハンドヘルド風の無重力カメラ移動。WSから徐々にMCUへと寄っていく。宇宙飛行士は、警告灯がバイザー越しに走る中、損傷した衛星パネルへ向かってもつれるように漂う。片方のグローブの手は火花を散らすケーブルに必死に伸び、もう片方は船体を支えて姿勢を保つ。ゆるんだ破片がレンズの前をゆっくりと回転しながら通り過ぎる。地球が背景の半分を占め、ゆっくりと回転しながら下に広がっている。カメラは被写体とともに漂い、信じられる慣性と微かなドリフトを保ちながら、24mmから35mmの視点へとゆっくり移行する。

SFX: (oxygen warning beeps, suit breathing, metallic creaks, distant electrical crackle, gloved impacts against metal, radio static)

冷たい太陽光がバイザーに鋭いハイライトを作り、地球の青い光が影をやわらかく満たす。

⸻

0:07–0:11

カットせずに、カメラは真正面のCUへと寄る。火花が宇宙飛行士のヘルメットの数インチ先で弾け、損傷したパネルが宇宙船から外れ始める。衝突の直前、女性の声が落ち着いた調子で呼ぶ。

“Alex…”

そして、より大きく、

“ALEX!”

宇宙飛行士はパニックではなく、苛立ちのため息をつく。

すべてが突然スローモーションに入る。

漂う破片はほとんど静止する。

外れかけたパネルは動きを止めたまま宙にぶら下がる。

宇宙飛行士だけが通常速度で動き続ける。

カメラはヘルメットの周囲を時計回りにゆっくり回りながら、フレーミングと距離を完全に維持する。

故障した機材に手を伸ばす代わりに、両手が一つの滑らかで意図的な動きでヘルメットへと上がる。

宇宙空間にはヘッドセットやゲーム機器は一切見えない。

マッチカットまで、顔の大きさ、手の位置、レンズ距離、頭の角度、時計回りの動きを完全に一致させる。

SFX: (radio distortion stretching into silence, slowed warning alarms, breathing, woman’s voice echoing “Alex… ALEX…”, ambient hum fading)

⸻

0:11–0:15

MATCH CUT.

CUからMSへ。

上がった両手が画面上でまったく同じ位置を占めたまま、ヘルメットは一瞬で質素なアパートのVRヘッドセットへと変わる。

動きは決して止まらない。

初めて、VRヘッドセットが見える。

被写体は両側をつかみ、滑らかに完全に外す。

カメラは時計回りのハンドヘルドの軌道を保ちながら、ミディアムショットへと引いていく。

ケーブル、空のコーヒーマグ、ノート、そして一時停止された宇宙シミュレーションを映す光るモニターに囲まれたゲーム環境から一歩下がる。

朝の光が部屋を満たす。

肩がわずかな苛立ちとともに落ちる。

見えない相手に向かってため息をつき、こう言う。

“I’m coming.”

35mm natural lens, spherical.

SFX: (headset strap stretching, plastic sliding, quiet apartment ambience, chair wheels, distant kettle whistle, faint game audio fading, relaxed breathing)

屋内の昼光が宇宙の厳しい照明に取って代わるが、マッチカット前に確立された正確なカメラの勢いはそのまま保たれる。
---
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084138283311984640/img/oPpdlpbrMZhrNaLs.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084139217043751125.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084139217043751125.mp4)**

**作者:** [Duet | AI](https://x.com/Sheldon056) | **ソース:** [Link](https://x.com/Sheldon056/status/2084139217043751125) | **公開日:** 2026年8月3日

`Story` `Twist` `Retro Film` `Sci-Fi` `VFX` `Slow-Mo`

---

### Handheld home-video style montage, 7 continuous shots with varied angles (avoid…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
---
手持ちのホームビデオ風モンタージュ。角度の異なる7つの連続ショット（単一のカメラアングルやワンテイクは避ける）。スマホを片手で撮影し、わずかな手ブレあり。自然な屋外の昼光、控えめなフィルムグレイン、フォトリアルなリアリズム。

女性のImage1が、居心地のよいアパートのバルコニーで一人、観葉植物の植え替えをしている。Image1は顔と髪型にのみ使用する。彼女は、白いタンクトップの上に色あせたデニムの半袖シャツを着て、土で汚れたキャンバス地のガーデニング用エプロンをつけている。細長いバルコニーには、鉢植え、テラコッタ鉢、培養土、園芸用具、ストリングライトがあり、暖かな真昼の光が差し込んでいる。動画に登場する人物は彼女だけ。植物は、ひび割れたプラスチック鉢で根詰まりした状態から、新しく植え替えられて水を与えられた状態へと変化する。セリフは自然な話し言葉の韓国語。

Shot 1 (0–2s): 彼女が古いプラスチック鉢を叩いたり押したりして、植物を抜きやすくする。「자, 나와라~」

Shot 2 (2–4s): 真上からのクローズアップ。彼女が植物を取り出し、きつく巻いた根を露出させ、やさしくほぐしていく。

Shot 3 (4–6s): 彼女がそれをテラコッタ鉢に入れ、手で新しい土を足しながら、「훨씬 낫다。」と言う。

Shot 4 (6–8s): 葉についた土を払って植物の向きを整え、「There we go.」と言う。

Shot 5 (8–10s): 汚れた手をエプロンで拭き、満足そうに小さくうなずきながら微笑む。

Shot 6 (10–13s): 小さな金属製のじょうろで植物に水をやる。土は水を吸って濃い色に変わる。「쭉쭉 마셔。」

Shot 7 (13–15s): 一歩下がってバルコニーの手すりにもたれ、植物を眺め、額の汗をぬぐって、満ち足りたように息を吐く。

Audio: 音楽なし。プラスチックを叩く音、土が崩れる音、根がこすれる音、土を押さえる音、布が動く音、水を注ぐ音、そよ風、鳥のさえずり、そして静かな満足のため息だけ。

字幕、テキスト、ロゴ、ウォーターマークはなし。参照画像そのものを再現またはコピーしないこと。
---
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084143996742533120/img/TrP56omkCPCdR_Dj.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084144145912770846.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084144145912770846.mp4)**

**作者:** [WasifAI](https://x.com/doctorwasif) | **ソース:** [Link](https://x.com/doctorwasif/status/2084144145912770846) | **公開日:** 2026年8月3日

`Story` `Heartwarming` `Photoreal` `Realistic World` `POV` `ASMR`

---

### SUBJECTS:

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
SUBJECTS:

ポピー：10代の少年。丸みのある束になったスパイキーなパステルピンクの髪、日焼けしたピーチ系の肌、丸く赤みのある頬、太い黒い眉、ゴールドのフープイヤリング、星のペンダントネックレス、クリーム色のリネンシャツを開けて着用、ゴールドのバックル付きタン色ベルト、クリーム色のワイドレッグのクロップドパンツ、ブラウンのハイカットスニーカー。全編を通して一続きで途切れないギターソロを演奏し続け、身体を揺らし、突進し、ひねりながら、強まっていく激しさで演奏する。生意気で反抗的なニヤリとした笑み、半目の自信に満ちた目つき。最終ショットでは、完全に陶酔した支配感へと高まっていく（キャラクター参照 @image1、デザインのみ — ポーズやフレーミングは含まない）  
ギター：ソリッドボディのエレクトリックギター。深いペリウィンクルパープルのボディ、クリーム色のピックガード、ピンクのピックアップ3基、ゴールドのハードウェア、黒いドットインレイ入りのタン色メイプルネック、クリーム色のヘッドストック。弦は常に振動しているブラーとして見え、フレットを押さえる手の下でネックがわずかにしなる（参照 @image1）

ENVIRONMENT: ライブコンサートのステージ、木の板張りのステージ床、下には密集した観客がいて、掲げられた発光するスマホ画面で埋め尽くされている。背後からはLEDスクリーンの光が差し、フィナーレに向けて紙吹雪のような光粒子のきらめきが増していく

STYLE: スタイライズされた3Dアニメーション、丸みのあるボリューム、簡略化されたジオメトリ、ソフトなマット表面、エッジの柔らかいシェーディング、Pixarに近いレンダリング、パンチのある高彩度のカラーグレーディング、4K、クロスディゾルブなしのハードカット編集。ただし、カットをまたいでも動きと音楽はシームレスに連続している

CAMERA DETAILS: 10回のハードカット。連続する2ショットで同じフレーミングタイプを繰り返さない。ギターソロは、すべてのカットを通して一続きの演奏として読めること

Timeline:

0:00-0:015: 極端なローアングルのワームズアイ、固定。スニーカー越しに真上を見上げる。開幕リフに突入しながら、彼のスニーカーが極端な遠近短縮で床を踏みつけ、ギターの下側のホーンがフレームに入ってくる。ステージ床からのクールな青いLEDアップライト。SFX: ドライビングなオープニングリフが始まり、木の板のきしみ音
0:015-0:03: 立ち上がったスマホのシルエットの森の間を、低い位置からコントロールされたプッシュイン。何十もの発光するスマホ画面がフレームの半分を塞ぎ、カメラは彼へと縫うように進む。ストラミングする腕は連続して風車のように回り、リフは途切れない。薄暗い会場の闇に対して、スマホ画面の光がちらつく。SFX: リフに低音の厚みが加わり、こもった観客のざわめき

0:03-0:045: ピンクのピックアップと振動する弦の極端なマクロ、固定。ピックがリフの途中で弦を切り裂き、光を拾う。艶のあるパープルのボディにはステージライトの反射が滑っていく。ゴールドのハードウェアには暖かなリムライト、背景は柔らかく暗いブラー。SFX: 明るく響く弦のアタックがリフに重なる

0:045-0:06: 彼の真後ろからのオーバー・ザ・ショルダー、静止。観客に向かって見渡す構図。観客のシルエットは途切れないリフに合わせて一斉に跳ね、スマホの光は蛍のように揺れ、彼の髪のトゲとヘッドストックがフレーム下部で連続して上下する。観客は自分たちのスマホの光で照らされている。SFX: リフが厚みを増し、観客の手拍子が裏拍で入る

0:06-0:075: フレットを押さえる手の極端なマクロ、ネックを駆け上がる。固定でタイト。指がフレット上を素早くハンマーオンとスライドし、腱が張る。手がさらに高い位置へ上がるにつれて、リフはより速いメロディックなランへと変化する。一本の強いサイドライトが、指板に深い影を刻む。SFX: ソロが加速し、超高速のフレットボード・タッピング・ランへ

0:075-0:09: ダッチアングル、大きく傾いた構図、ハンドヘルドの微細な揺れ。リフの途中で彼がワイドなパワースタンスへと切り替えると、フレームが鋭く傾く。髪のトゲが外側へ弾け、ギター本体が持ち上がり、ストラミングする手は決して止まらない。暖かなステージウォッシュが強まっていく。SFX: リフが推進力のあるパワーコードのパッセージに入り、観客の歓声が高まる

0:09-0:105: ローアングルの三分の四ショット、彼の横に沿ってトラッキング。コントロールされた動き。彼は観客の端へ向かって突進し、ギターネックを高く掲げ、フレットを押さえる手は高速の上昇フレーズを駆け抜ける。暖色と寒色のステージウォッシュが交互に彼の上を流れていく。SFX: ソロの音程と速度が上がり、観客の音量が膨らむ

0:105-0:12: 地面レベルの90度サイドプロファイル、固定。スニーカーから腰の高さまでしか見えない。彼はソロの姿勢へと反り返りながら、片方のスニーカーを床の上でゆっくり弧を描くように引きずる。ギターの下側のボディがフレームに入り、ストラミングする手はなおもリフを駆動し続ける。暖かなスポットライトの円、端は黒へ落ちていく。SFX: リフは高い強度のまま持続し、フィードバックのきらめきが増していく

0:12-0:135: ゆっくりと安定したプッシュインでミディアムクローズへ、コントロールされた動き。彼はさらに背中を反らせ、両手がネック上でブラーになるほど速いパッセージを弾く。胸は大きく上下し、髪のトゲは各ダウンビートごとに激しく跳ねる。ステージ全体のライトがピークの明るさへ向かって上がっていく。SFX: ソロは速度と重なりの両方でピークに達し、観客の音がほとんど圧倒的になる

0:135-0:15: 速いプッシュインから安定したミディアムクローズアップに落ち着き、最後のビ
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084147760450965504/img/ZLnBLXKPkBjo612g.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084148066786169155.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084148066786169155.mp4)**

**作者:** [pratish](https://x.com/pratishhhhh) | **ソース:** [Link](https://x.com/pratishhhhh/status/2084148066786169155) | **公開日:** 2026年8月3日

`Music & Dance` `Concert` `3D Animation` `Realistic World` `Macro` `Slow-Mo`

---

### 15-Second Cinematic Lip Balm Story Ad – Detailed Image Prompt (9 Scenes)

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
---
15秒のシネマティックなリップバームストーリー広告 – 詳細画像プロンプト（9シーン）
Style: Ultra-realistic, luxury skincare commercial, cinematic storytelling, soft natural window light, warm pastel color palette, shallow depth of field, premium beauty photography, 85mm lens, photorealistic skin texture, glossy lips, elegant feminine aesthetic, minimal background, 8K HDR, commercial quality.
Scene 1 (0:00–0:02) – The Problem
朝、寝室の鏡の前に立つ美しい若い女性。彼女は乾燥して荒れた唇に、心配そうな表情でそっと触れている。薄手のカーテン越しに柔らかな日差しが差し込み、心地よい雰囲気を生み出している。ニュートラルなクリーム色の部屋、ナチュラルメイク、少し乱れた髪、リアルな肌の質感、シネマティックなクローズアップ、感情に訴えるストーリーテリング。
Camera: Medium close-up, eye level.
Scene 2 (0:02–0:04) – Close-Up of Dry Lips
唇の極端なマクロショット。リアルな乾燥、細かなひび割れ、ざらついた質感が見える。片方の指先が下唇に軽く触れている。美しい肌のディテール、プロフェッショナルなスキンケア広告風、浅い被写界深度。
Camera: Macro lens, ultra-detailed lips.
Scene 3 (0:04–0:06) – The Solution
彼女は顔の横にスタイリッシュなパステルピンクのリップバームを持ちながら、やわらかく微笑む。明るい自然光、すっきりとしたミニマルな背景、上品なビューティーコマーシャルの構図。リップバームは高級感のあるパッケージで、はっきりと見えている。
Camera: Portrait close-up.
Scene 4 (0:06–0:08) – Applying the Lip Balm
唇にリップバームをやさしく塗っているクローズアップ。なめらかな塗り心地、クリーミーな質感、徐々に現れるツヤ感。柔らかな光が製品から自然に反射している。
Camera: Tight beauty close-up.
Scene 5 (0:08–0:10) – Instant Transformation
完璧にうるおい、なめらかで、自然なピンク色をした唇のクローズアップ。健康的なツヤがあり、柔らかく、しっかり保湿されているが、過度にテカってはいない。美しくリアルな肌。
Camera: Macro beauty shot.
Scene 6 (0:10–0:11) – Confidence Returns
少女は目を閉じ、唇のやわらかな感触を楽しみながら、穏やかな笑みを浮かべている。軽いそよ風で髪がやさしく揺れる。温かみのあるゴールデンライティングが、ラグジュアリーなスキンケア広告のムードを演出する。
Camera: Close-up portrait.
Scene 7 (0:11–0:13) – Premium Product Shot
リップバームが大理石のカウンタートップの上に立ち、背景には繊細なピンクの花が置かれている。柔らかな反射、ラグジュアリーなスキンケア広告風、ミニマルで上品な構図、プレミアムなパッケージ、クリーミーなパステルカラー、美しいボケのライティング。
Camera: Product photography, studio quality.
Scene 8 (0:13–0:14) – Beauty Reveal
彼女は屋外、または明るい窓辺で、なめらかな唇にそっと触れながら自信に満ちた笑みを浮かべている。健康的に輝く肌、うるおった唇、上品でフェミニンな印象、ナチュラルな美しさ。
Camera: Close-up portrait with shallow depth of field.
Scene 9 (0:14–0:15) – Final Hero Shot
彼女はカメラに向かって微笑みながら、顔の近くにリップバームを持っている。美しくうるおった唇が主役。ソフトなパステルフラワーを配した、清潔感のあるラグジュアリーなスキンケア広告背景、プレミアムなブランドスペース、上品な構図、シネマティックなライティング、超リアルな広告写真、8K HDR、受賞歴のあるコマーシャルビューティーキャンペーン。
Overall Keywords: Ultra-realistic, cinematic, luxury skincare commercial, premium beauty advertising, soft pastel colors, natural lighting, photorealistic, 8K HDR, shallow depth of field, elegant feminine aesthetic, realistic lips, healthy glowing skin, commercial product photography, luxury cosmetics, emotional storytelling, award-winning advertisement, magazine-quality beauty photography.
---
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084160547176493056/img/jdFVqD8ysyJB810D.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084160590759489631.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084160590759489631.mp4)**

**作者:** [Noor 🌸](https://x.com/Noor_ul_ain43) | **ソース:** [Link](https://x.com/Noor_ul_ain43/status/2084160590759489631) | **公開日:** 2026年8月3日

`Product Ad` `Beauty` `Photoreal` `Realistic World` `Macro` `Transformation`

---

### A large overweight homeless man with messy long hair, tangled beard, oversized…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
大柄で太ったホームレスの男。乱れた長髪、絡まったひげ、だぶだぶで擦り切れた服、汚れた靴、そして疲れ切った表情。
彼はただ、何事もなく街を歩いているだけ。
仕立て屋に入るつもりはまったくない。
最後には、相変わらず大柄でがっしりした体格のままだが、信じられないほどスタイリッシュで、自信に満ち、カリスマ性あふれる姿になっている。
TIMELINE
0:00–0:02 — TARGET SPOTTED
人通りの多い街角。
人々がカラフルな店先の前を行き交う。
大柄なホームレスの男が、擦り切れた袋を抱えながら歩道をゆっくりと引きずるように進んでいく。
服は破れている。
髪は乱れている。
ひげはぼさぼさだ。
仕立て屋の店内では—
仕立て屋が窓越しにちらりと外を見る。
その瞬間—
目が見開かれる。
Extreme close-up.
ターゲットを捕捉。
DING.
仕立て屋が勢いよく正面ドアから飛び出す。
0:02–0:05 — THE ABDUCTION
FWIP.
メジャーが投げ縄のように空中を飛ぶ。
ホームレスの男が固まる。
反応するより早く—
YANK.
彼は仕立て屋の店へと引き寄せられる。
カメラが激しく追従する。
店のドアが勢いよく開く。
布地があたり一面に飛び散る。
ホームレスの男は完全に混乱したまま床を滑る。
目が見開かれる。
何が起きているんだ？
0:05–0:08 — FASHION HURRICANE
仕立て屋が全速力モードに入る。
FWIP.
メジャーが肩に巻きつく。
FWIP.
腰に。
FWIP.
腕に。
ホームレスの男はフィッティング台の上でゆっくり回転する。
色鮮やかな布地が部屋中で爆発するように舞う。
ハサミが閃く。
糸が飛ぶ。
ボタンが空中へ発射される。
鏡の反射には、仕立て屋が同時に複数の場所に現れているように映る。
ホームレスの男は何が起きているのかまったく追えない。
0:08–0:11 — LEGENDARY TAILOR TECHNIQUE
仕立て屋が究極のファッションコンボを解き放つ。
SHK.
SNIP.
BRRRRRRT.
ミシンがレーシングカーのエンジンのように起動する。
布の断片が部屋中を飛び回る。
ジャケットが現れる。
ベストが現れる。
アクセサリーが現れる。
すべてが空中で組み上がっていく。
カメラがフィッティング台の周りを回転する。
ホームレスの男は衣服と布の竜巻に包まれる。
ときおり見える断片だけが、その下で進む変身を示している。
0:11–0:13 — FINAL ADJUSTMENTS
すべてが突然スローダウンする。
Extreme close-ups.
襟が整えられる。
ポケットチーフが直される。
ボタンが留められる。
腕時計がまっすぐにされる。
ジャケットの袖が完璧に仕立てられる。
浮かぶ布の繊維の間から、暖かな日差しが差し込む。
仕立て屋がシルエットを落ち着いて確認する。
完璧だ。
0:13–0:15 — THE REVEAL
布の竜巻が消える。
静寂。
ホームレスの男が巨大な鏡の前に立っている。
彼の目がゆっくりと見開かれる。
体格は相変わらず大柄でがっしりしている。
だが今や、信じられないほど素晴らしく見える。
完璧に仕立てられたスーツ。
エレガントなレイヤー。
ラグジュアリーなスタイリング。
自信に満ちた立ち姿。
映画スターのような存在感。
店の外にいる人々が足を止め、窓越しに見つめる。
通りすがりの一人がコーヒーを落とす。
仕立て屋は何気なくハサミを折りたたむ。
CHK.
変身した男がジャケットを整える。
自信に満ちた笑みが浮かぶ。
Final cinematic shot:
彼は再び通りへと歩き出す。
同じ歩道。
同じ街。
だが今では、彼が通り過ぎるたびに誰もが振り向く。

--- THREAD CONTINUATION ---
[Thread 1] Prompt :
大柄で太ったホームレスの男。乱れた長髪、絡まったひげ、だぶだぶで擦り切れた服、汚れた靴、そして疲れ切った表情。
彼はただ、何事もなく街を歩いているだけ。
仕立て屋に入るつもりはまったくない。
最後には、相変わらず大柄でがっしりした体格のままだが、信じられないほどスタイリッシュで、自信に満ち、カリスマ性あふれる姿になっている。
TIMELINE
0:00–0:02 — TARGET SPOTTED
人通りの多い街角。
人々がカラフルな店先の前を行き交う。
大柄なホームレスの男が、擦り切れた袋を抱えながら歩道をゆっくりと引きずるように進んでいく。
服は破れている。
髪は乱れている。
ひげはぼさぼさだ。
仕立て屋の店内では—
仕立て屋が窓越しにちらりと外を見る。
その瞬間—
目が見開かれる。
Extreme close-up.
ターゲットを捕捉。
DING.
仕立て屋が勢いよく正面ドアから飛び出す。
0:02–0:05 — THE ABDUCTION
FWIP.
メジャーが投げ縄のように空中を飛ぶ。
ホームレスの男が固まる。
反応するより早く—
YANK.
彼は仕立て屋の店へと引き寄せられる。
カメラが激しく追従する。
店のドアが勢いよく開く。
布地があたり一面に飛び散る。
ホームレスの男は完全に混乱したまま床を滑る。
目が見開かれる。
何が起きているんだ？
0:05–0:08 — FASHION HURRICANE
仕立て屋が全速力モードに入る。
FWIP.
メジャーが肩に巻きつく。
FWIP.
腰に。
FWIP.
腕に。
ホームレスの男はフィッティング台の上でゆっくり回転する。
色鮮やかな布地が部屋中で爆発するように舞う。
ハサミが閃く。
糸が飛ぶ。
ボタンが空中へ発射される。
鏡の反射には、仕立て屋が同時に複数の場所に現れているように映る。
ホームレスの男は何が起きているのかまったく追えない。
0:08–0:11 — LEGENDARY TAILOR TECHNIQUE
仕立て屋が究極のファッションコンボを解き放つ。
SHK.
SNIP.
BRRRRRRT.
ミシンがレーシングカーのエンジンのように起動する。
布の断片が部屋中を飛び回る。
ジャケットが現れる。
ベストが現れる。
アクセサリーが現れる。
すべてが空中で組み上がっていく。
カメラがフィッティング台の周りを回転する。
ホームレスの男は衣服と布の竜巻に包まれる。
ときおり見える断片だけが、その下で進む変身を示している。
0:11–0:13 —
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084164876541566976/img/OLbdaZH1BJWf_CQD.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084164954870174171.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084164954870174171.mp4)**

**作者:** [Shara I Ai Video Creator](https://x.com/itsshara_ai) | **ソース:** [Link](https://x.com/itsshara_ai/status/2084164954870174171) | **公開日:** 2026年8月3日

`Portrait & Fashion` `Fashion` `Photoreal` `Realistic World` `Transformation` `Slow-Mo` `VFX`

---

### A single-take long shot featuring a classic Michael Bay–style hero shot and…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
単一カットのロングショットで、クラシックなマイケル・ベイ風のヒーローショットと滑らかなトラッキングムーブメントを特徴とする。ショットは、カメラがほぼ地面すれすれの位置に置かれた、極端に低く攻撃的な煽りのアングルから始まり、70〜200mmの望遠レンズを使用している。

顔を煤で覆われた中年の白人消防士が、画面下端からゆっくりとフレーム内に立ち上がってくる。彼は擦り切れた反射テープの付いた暗色の防火服を着ており、片肩に消防斧を担いでいる。やがてヘルメットを外し、疲労しながらも決意に満ちた表情を見せる。

消防士を中心の支点として、カメラは一定速度で彼の周囲を反時計回りに滑らかに回り込む。彼の身体は直立したまま完全に静止している一方で、頭だけがゆっくりと回り、周囲の廃墟を見渡す。ショット全体を通して、キャラクターは左の三分割線と水平中央線の交点付近に固定され、「彼は動かず、世界が彼の周りを回る」という壮大な視覚効果を生み出す。

背景には、火災で壊滅した都市の住宅街が広がる。黒焦げになった建物の残骸、漂う火の粉、宙にたなびく水霧、そして遠方で点滅する消防車の緊急灯が見える。

シネマティックなティール＆オレンジのカラーグレーディング、煙を突き抜けてボリューメトリックな光線を生み出すゴールデンアワーのサイド逆光、消防士のシルエットを縁取る強いリムライト、高コントラスト、目に見えるフィルムグレイン、そして1990年代のハリウッド・アクション映画のビジュアル美学。全体の雰囲気は厳粛で悲劇的、かつ英雄的で、明確にマイケル・ベイに着想を得たシネマティックなスタイルである。

--- THREAD CONTINUATION ---
[Thread 1] Prompt：
A single-take long shot featuring a classic Michael Bay–style hero shot and smooth tracking movement. The shot begins from an extremely low, aggressive upward angle, with the camera positioned almost at ground level and using a 70–200mm telephoto lens.

A middle-aged white firefighter, his face covered in soot, slowly rises into frame from the bottom edge. He wears a dark firefighting suit with worn reflective strips and carries a fire axe over one shoulder. He gradually removes his helmet, revealing an exhausted yet resolute expression.

Keeping the firefighter as the central pivot point, the camera smoothly circles him counterclockwise at a constant speed. His body remains upright and completely still while his head slowly turns to survey the surrounding ruins. Throughout the entire shot, the character stays locked near the intersection of the left third and the horizontal center line, creating an epic visual effect in which “he stands still while the world revolves around him.”

The background shows an urban neighborhood devastated by fire: charred building wreckage, drifting embers, suspended water mist, and the flashing emergency lights of fire engines in the distance.

Cinematic teal-and-orange color grading, golden-hour side backlighting piercing through the smoke to create volumetric light rays, strong rim lighting outlining the firefighter’s silhouette, high contrast, visible film grain, and the visual aesthetics of a 1990s Hollywood action film. The overall atmosphere is solemn, tragic, and heroic, with a distinctly Michael Bay–inspired cinematic style.
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084165128816357377/img/EWwKZcAMZbMdyvn0.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084165663199998325.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084165663199998325.mp4)**

**作者:** [Flowith](https://x.com/flowith) | **ソース:** [Link](https://x.com/flowith/status/2084165663199998325) | **公開日:** 2026年8月3日

`Action` `Military` `Photoreal` `Realistic World`

---

### A serene high-angle scene of a young woman with long dark hair lying peacefully…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
---
流れる小川のそば、苔むした緑豊かな川岸に、長い黒髪の若い女性が穏やかに横たわっている、静謐な俯瞰シーン。彼女はダークカラーのカモフラージュ柄のニットセーターを着ている。最初、彼女の手は頭上に垂れ下がる葉の茂った木の枝へと伸ばされているが、やがてゆっくりと体の横へ下ろされ、彼女は落ち着いた表情でやわらかく上を見つめている。木々の葉が生い茂る天蓋を通して差し込む陽光が、さざめく暗い水面にきらめくハイライトを落としている。作品は、繊細でシネマティックなアニメ調のデジタルアートスタイルで描かれ、柔らかな雰囲気のライティング、豊かな土や苔を思わせる緑と茶の色調、そして滑らかで優しい動きを特徴としている。
---
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084175638261313536/img/5odpcPdddH7jbrAg.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084175738840703362.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084175738840703362.mp4)**

**作者:** [Talia](https://x.com/TaliaAariz) | **ソース:** [Link](https://x.com/TaliaAariz/status/2084175738840703362) | **公開日:** 2026年8月3日

`Portrait & Fashion` `Portrait` `Anime 2D` `Realistic World`

---

### Character: Young female fashion model with long blonde hair, flawless glowing…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
キャラクター: 長いブロンドヘアの若い女性ファッションモデル。欠点のない輝く肌、ナチュラルメイク、ゴールドのフープイヤリング、ランウェイでの自信に満ちた存在感、ラグジュアリーなエディトリアル表現。

衣装: 鮮やかな赤のコルセットトップ、クリスタル装飾が施されたライトウォッシュのスタッズ付きデニムミニスカート、控えめなジュエリー、ヌードヒール。

0:00–0:03 — Luxury Detail

Camera: Cinema macro lens を使った極端なマクロのクローズアップ。

Action: クリスタルが散りばめられたウエストバンドとデニムの質感の上を、ゆっくりとシネマティックに横切る。光があらゆるメタリックなディテールの上を滑るように移動し、上質なクラフトマンシップを際立たせる。

0:03–0:06 — Hero Entrance

Camera: 正面からのワイドアングルのドリーショット。

Action: モデルは白いシームレススタジオを横切りながら、自信を持ってカメラに向かって歩く。歩みごとにスカートが自然に揺れ、柔らかなスタジオライティングが背後にエレガントな影を作り出す。

0:06–0:09 — Editorial Beauty

Camera: ゆっくりとしたオービットを伴う、タイトなビューティークローズアップ。

Action: モデルはカメラに向かってやさしく顔を向け、自信に満ちたアイコンタクトを保つ。ビューティーライティングが肌とアクセサリーに柔らかなハイライトを与え、髪がわずかに動く。

0:09–0:12 — Fashion Showcase

Camera: ややローアングルへ移行するフルボディのトラッキングショット。

Action: モデルは一度立ち止まり、自然に体重を移し、片手を腰に当ててから、ゆっくりと向きを変え、シルエットと衣装の上質なフィット感を見せる。

0:12–0:15 — Final Hero Shot

Camera: ゆっくり回転するフルボディショット。最後はややDutch angleで締める。

Action: モデルは白いスタジオの中央に自信たっぷりに立ち、カメラが彼女の周りを回る中で最後のエディトリアルポーズを決める。ライティングがスタッズ付きデニムのきらめきと構築的なコルセットを強調し、最後に白へフェードする。

Visual Style Keywords: luxury fashion commercial, Vogue editorial, premium beauty campaign, cinematic runway, studio fashion film, IMAX quality, 4K HDR, macro product cinematography, elegant camera movement, realistic fabric physics, commercial-grade lighting, luxury color grading, ultra-detailed denim texture, polished skin, premium fashion photography.
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084177187813359616/img/LOEAcRt1Ux5Wo6u0.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084177357095780378.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084177357095780378.mp4)**

**作者:** [Melina Vale](https://x.com/MelinaVale14) | **ソース:** [Link](https://x.com/MelinaVale14/status/2084177357095780378) | **公開日:** 2026年8月3日

`Portrait & Fashion` `Fashion` `Photoreal` `Realistic World` `Macro` `Slow-Mo`

---

### Use all uploaded reference images exactly as provided.

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
アップロードされたすべての参照画像を、提供されたとおりに正確に使用してください。

女性の探検家、男性の探検家、黄金の遺物、神殿の建築、衣服、たいまつの光、そして環境のすべてにおいて、完全な一貫性を維持してください。

Style: ultra-realistic cinematic adventure film, dramatic lighting, realistic physics, realistic facial expressions, volumetric lighting, dynamic camera movement, and Hollywood-quality visual effects.

SCENE 1 (0–4 seconds)

カメラは、2人の探検家の後ろから追従しながら、彼らが古代の地下神殿をゆっくりと進む様子を映す。

女性の探検家が先を歩き、男性の探検家はランタンを持ってその後ろをついていく。

暖かなたいまつの光の中を、埃の粒子が漂っている。

女性の探検家は、古代の記号で覆われた石壁に懐中電灯の光を当てる。

すると突然、遠くにかすかな青い光が現れる。

女性の探検家はすぐに歩みを止め、手を上げる。

カメラは、その光る光へ向かってゆっくりと前進する。

女性の探検家はささやく：

Wait. Do you see that?

彼女はもう一歩前へ進む。

女性の探検家は静かに言う：

I think we found it.

SCENE 2 (4–8 seconds)

カメラは大きな広間へと出る。

部屋の中央にある石の台座の上に、黄金の遺物が姿を現す。

遺物に埋め込まれた青い宝石が、かすかな光を放っている。

女性の探検家が慎重に台座へ近づく間、カメラは彼女の周囲をゆっくりと回り込む。

男性の探検家はランタンを持ったまま、彼女の数歩後ろにとどまる。

女性の探検家は言う：

This has to be it.

彼女はゆっくりと遺物に手を伸ばす。

SCENE 3 (8–11 seconds)

女性の探検家が遺物に触れる。

青い光は突然、より強く輝き始める。

壁に刻まれた古代の記号が次々と発光し始める。

地面が激しく揺れ始める。

天井から埃が落ちてくる。

男性の探検家が彼女の方を振り向く。

男性の探検家は叫ぶ：

Something is wrong! Move!

背後で大きな石が落下し始める。

SCENE 4 (11–15 seconds)

女性の探検家はすぐに遺物から離れて振り向く。

男性の探検家が彼女の腕をつかむ。

2人の探検家は、台座から、そして崩壊する広間から逃れるように全力で走り出す。

カメラは彼らの前方へ後退しながら、彼らがまっすぐカメラに向かって走る様子を捉える。

遺物は常に彼らの背後にある。

落下する瓦礫、埃、崩れ落ちる柱は、探検家たちの後方に残る。

探検家たちは、決して崩壊する広間に向かって走ってはならない。

明るい出口が前方に現れ、通路には太陽光が差し込む。

画面はフェードアウトして黒になる。

--- THREAD CONTINUATION ---
[Thread 1] Duration: 15 seconds

アップロードされたすべての参照画像を、提供されたとおりに正確に使用してください。

女性の探検家、男性の探検家、黄金の遺物、神殿の建築、衣服、たいまつの光、そして環境のすべてにおいて、完全な一貫性を維持してください。

Style: ultra-realistic cinematic adventure film, dramatic lighting, realistic physics, realistic facial expressions, volumetric lighting, dynamic camera movement, and Hollywood-quality visual effects.

────────────────────────

SCENE 1 (0–4 seconds)

カメラは、2人の探検家の後ろから追従しながら、彼らが古代の地下神殿をゆっくりと進む様子を映す。

女性の探検家が先を歩き、男性の探検家はランタンを持ってその後ろをついていく。

暖かなたいまつの光の中を、埃の粒子が漂っている。

女性の探検家は、古代の記号で覆われた石壁に懐中電灯の光を当てる。

すると突然、遠くにかすかな青い光が現れる。

女性の探検家はすぐに歩みを止め、手を上げる。

カメラは、その光る光へ向かってゆっくりと前進する。

女性の探検家はささやく：

"Wait. Do you see that?"

彼女はもう一歩前へ進む。

女性の探検家は静かに言う：

"I think we found it."

────────────────────────

SCENE 2 (4–8 seconds)

カメラは大きな広間へと出る。

部屋の中央にある石の台座の上に、黄金の遺物が姿を現す。

遺物に埋め込まれた青い宝石が、かすかな光を放っている。

女性の探検家が慎重に台座へ近づく間、カメラは彼女の周囲をゆっくりと回り込む。

男性の探検家はランタンを持ったまま、彼女の数歩後ろにとどまる。

女性の探検家は言う：

"This has to be it."

彼女はゆっくりと遺物に手を伸ばす。

────────────────────────

SCENE 3 (8–11 seconds)

女性の探検家が遺物に触れる。

青い光は突然、より強く輝き始める。

壁に刻まれた古代の記号が次々と発光し始める。

地面が激しく揺れ始める。

天井から埃が落ちてくる。

男性の探検家が彼女の方を振り向く。

男性の探検家は叫ぶ：

"Something is wrong! Move!"

背後で大きな石が落下し始める。

────────────────────────

SCENE 4 (11–15 seconds)

女性の探検家はすぐに遺物から離れて振り向く。

男性の探検家が彼女の腕をつかむ。

2人の探検家は、台座から、そして崩壊する広間から逃れるように全力で走り出す。

カメラは彼らの前方へ後退しながら、彼らがまっすぐカメラに向かって走る様子を捉える。

遺物は常に彼らの背後にある。

落下する瓦礫、埃、崩れ落ちる柱は、探検家たちの後方に残る。

探検家たちは、決して崩壊する広間に向かって走ってはならない。

明るい出口が前方に現れ、通路には太陽光が差し込む。

画面はフェードアウトして黒になる。
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084178532272324608/img/PTXxwAHW3f25qd_D.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084178613381800250.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084178613381800250.mp4)**

**作者:** [FATHELA ESQ](https://x.com/AmControo) | **ソース:** [Link](https://x.com/AmControo/status/2084178613381800250) | **公開日:** 2026年8月3日

`Story` `Drama` `Photoreal` `Realistic World` `VFX`

---

### Create a 15-second horizontal 16:9 photorealistic CGI video.

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
15秒の横長16:9のフォトリアルなCGI動画を作成してください。

@Image1 を時系列のストーリーボードとして使用してください。表示されている順序で各パネルを読み取り、シーンの流れ、画面内の構図、被写体の位置、カメラの向き、変形の順序、環境、そしておおよそのテンポを維持してください。パネル間の欠落した動きを、連続した物理的な動きとして再構成してください。出力はコラージュや分割画面ではなく、1本のフルスクリーン動画でなければなりません。

乾いた先史時代の草原にいる、濃い茶色の成体の類人猿1体から始めてください。低い外部カメラが、類人猿が右腕を振って、粗い炭灰色の石を画面右へ投げる様子を捉えます。石は、前方かつわずかに上向きの連続した運動量を保ったまま手を離れます。

飛んでいく石の横を、横方向に追従してください。画面上の位置をほぼ同じに保ちながら、石は徐々に木製の柄を持つ槍へと変化します。草原が、軍勢と木製の防御施設を備えた埃っぽい古代の戦場へと変わる中でも、同じ軌道を維持してください。

槍は、同じ移動中心の周囲で、銅灰色の弾丸1発へと変化します。環境は、塹壕、煙、炎、遠方の爆発がある灰色の工業戦場へと変わります。弾丸は、環境が緑の山岳渓谷へ変わるのに合わせて、暗いオリーブ色の航空爆弾1個へと膨張します。

爆弾は、暗い灰色の戦闘機1機へと変化します。機体の前方を後退しながら追う正面トラッキングカメラに切り替えてください。戦闘機は接近し、機首を上げ、ひとつながりの飛行弧に沿って上昇します。

明るい雲が遷移を隠し、中央配置の後方追従ビューへ切り替わります。戦闘機は、白橙色の排気プルーム1本を伴う軌道シャトルへと変化します。地球の曲がった青い地平線が下に見えるまで、大気圏を上昇します。

シャトルは、左右対称の側面構造と複数の長方形スラスターを備えた、大型の暗いグラファイト色の宇宙船へと変化します。すべての青白いスラスターが同時に点火します。広角の固定後方ビューに切り替え、宇宙船が真っ直ぐ遠ざかりながら加速し、連続的に小さくなって、最終的に地球の上空で遠くの青い点1つとして終わるようにしてください。

すべての変形において、連続した運動量、画面上の位置、移動方向、奥行きの順序、スケールの連続性、重心を維持してください。各新しい物体は、古い形が消える前に、前のシルエットから成長するようにしてください。

フルカラーの素材、安定したジオメトリ、物理的に接続されたコンポーネント、自然なモーションブラー、イベント同期の効果音を使用してください。セリフやナレーションは不要です。

--- THREAD CONTINUATION ---
[Thread 1] 15秒の横長16:9のフォトリアルなCGI動画を作成してください。

@Image1 を時系列のストーリーボードとして使用してください。表示されている順序で各パネルを読み取り、シーンの流れ、画面内の構図、被写体の位置、カメラの向き、変形の順序、環境、そしておおよそのテンポを維持してください。パネル間の欠落した動きを、連続した物理的な動きとして再構成してください。出力はコラージュや分割画面ではなく、1本のフルスクリーン動画でなければなりません。

乾いた先史時代の草原にいる、濃い茶色の成体の類人猿1体から始めてください。低い外部カメラが、類人猿が右腕を振って、粗い炭灰色の石を画面右へ投げる様子を捉えます。石は、前方かつわずかに上向きの連続した運動量を保ったまま手を離れます。

飛んでいく石の横を、横方向に追従してください。画面上の位置をほぼ同じに保ちながら、石は徐々に木製の柄を持つ槍へと変化します。草原が、軍勢と木製の防御施設を備えた埃っぽい古代の戦場へと変わる中でも、同じ軌道を維持してください。

槍は、同じ移動中心の周囲で、銅灰色の弾丸1発へと変化します。環境は、塹壕、煙、炎、遠方の爆発がある灰色の工業戦場へと変わります。弾丸は、環境が緑の山岳渓谷へ変わるのに合わせて、暗いオリーブ色の航空爆弾1個へと膨張します。

爆弾は、暗い灰色の戦闘機1機へと変化します。機体の前方を後退しながら追う正面トラッキングカメラに切り替えてください。戦闘機は接近し、機首を上げ、ひとつながりの飛行弧に沿って上昇します。

明るい雲が遷移を隠し、中央配置の後方追従ビューへ切り替わります。戦闘機は、白橙色の排気プルーム1本を伴う軌道シャトルへと変化します。地球の曲がった青い地平線が下に見えるまで、大気圏を上昇します。

シャトルは、左右対称の側面構造と複数の長方形スラスターを備えた、大型の暗いグラファイト色の宇宙船へと変化します。すべての青白いスラスターが同時に点火します。広角の固定後方ビューに切り替え、宇宙船が真っ直ぐ遠ざかりながら加速し、連続的に小さくなって、最終的に地球の上空で遠くの青い点1つとして終わるようにしてください。

すべての変形において、連続した運動量、画面上の位置、移動方向、奥行きの順序、スケールの連続性、重心を維持してください。各新しい物体は、古い形が消える前に、前のシルエットから成長するようにしてください。

フルカラーの素材、安定したジオメトリ、物理的に接続されたコンポーネント、自然なモーションブラー、イベント同期の効果音を使用してください。セリフやナレーションは不要です。
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084197777290969088/img/GzxJuLpURmSCqlrn.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084198339537502507.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084198339537502507.mp4)**

**作者:** [KreviX](https://x.com/LadyyEth) | **ソース:** [Link](https://x.com/LadyyEth/status/2084198339537502507) | **公開日:** 2026年8月3日

`Action` `Wuxia` `Photoreal` `Sci-Fi` `VFX` `Transformation` `FPV & Aerial`

---

### @image1 完全按照参考图呈现,不重新设计角色、服装、手套与长枪。

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
@image1 完全に参考画像どおりに再現し、キャラクター、衣装、手袋、長槍は再デザインしない。  
武器固定: 全編を通して、この支架に載せた長槍のみを使用する。  
シーン: 異色の森。幹はコーラルレッドと淡いピンク、枝葉は青緑とミントグリーン、地面にはオレンジレッドの傘状菌群が繁茂している。空は明るく澄み、木々の隙間から差し込む陽光が体積光の柱を作り、空気中には細かな白い胞子が漂う。  
対象: 巨大な極楽鳥。全編でこの鳥は一羽だけ、他の飛翔する鳥は一切出さない。翼は広く、樹冠の半分を覆えるほどで、体躯は人間よりも大きい。  
羽色は華麗で鮮烈: コバルトブルーの冠羽、エメラルドグリーンの喉、オレンジゴールドの胸羽、パープルレッドの翼面。全体として流れる宝石のように見える。  
尾羽は最も美しい部分: 雪白の長い尾羽が2本、非常に長く、先端は細かな糸状の羽枝に分かれる。飛行時には2本のリボンのように背後で広がり、絡み合い、たなびき、虹色グラデーションの光跡を引きながら、画面の大部分を占める。  
嘴は羽色と強烈なコントラストを成す: 細長い嘴が開くと、恐竜のような鋭い歯が2列見える。歯列は細かく、一本一本がはっきり分かれ、わずかに内側へ湾曲し、喉の奥は暗く沈んでいる。口を開いて鳴くときは下顎が大きく開き、凶暴な表情を露わにする。  
命中効果の鉄則: 鳥は被弾しても出血しない。命中の瞬間、鳥全体がコバルトブルー、エメラルドグリーン、オレンジゴールド、パープルレッド、雪白が混ざった濃厚な彩墨の塊へと変化し、水に墨を落としたように空中で層を成して滲み、回転し、糸を引く。各色は互いに浸透・拡散し、縁には飛白と墨点が現れ、その後ゆっくりと下へ垂れる。2本の雪白の尾羽は最後にほどけ、リボンのように静かに垂れ落ちる。墨滴は幹、菌傘、地面に飛び散って鮮やかな色斑を残し、流れ続ける。  
視覚効果: 銃口の発射で環状の空気の波紋が生まれ、胞子を吹き散らす。弾道は細長い白い気流の通路を残し、進路上の空気を歪ませる。スコープ内には十字照準、目盛り線、拡大された鳥影が見え、縁にはわずかなビネット。彩墨は水墨が紙に広がるような繊維状の縁を持ち、長い墨糸を引く。体積光の柱は墨霧を貫いて虹色の光輪を透かし、薬莢が飛び出す際には表面にハイライトが反射する。命中の瞬間には純白の衝撃フレームを挿入する。  
弾丸追従ショット: 発射後、カメラは弾丸に密着したまま同速で飛行する——弾丸表面は高速回転し、周囲の空気は円錐状の白い乱流として引き裂かれる。進路上の胞子は気流で左右に弾かれ、枝葉を抜けると葉が余波で揺さぶられ、背景は極浅い被写界深度の中で流れる色帯へと引き伸ばされる。速度は最初は速く、その後徐々に減速し、鳥の体に触れる直前で極スローモーションに落とす。  
アクション原則: 視線が先、銃口は後。呼吸コントロールを明確に——吸気で肩と背中がわずかに上がり、息止めで全身が静止し、引き金を絞るときは人差し指の第一関節だけが動き、反動は肩のくぼみで受け止める。  
ボイスのトーン: 女性の声で軽快かつ自然、独り言のように鼻歌まじりで遊ぶ感じ、気ままで笑みを含み、語尾は伸ばす。全編日本語。  
スタイル: 2.5D劇場版アニメ、セルルック塗りに厚塗りの光影、シャープな線。35mmアナモルフィックのシネマスコープレンズ、横長の楕円ボケ、浅い被写界深度。16:9、4K、24fps、15秒。  
音: 風が枝葉を抜ける音、銃身が支えられる金属摩擦音、巨大な鳥のしゃがれた長鳴きと重い羽ばたき、発砲の鈍い音、弾丸が空気を裂く鋭い鳴き、薬莢が落ちる音、彩墨が地面に落ちる粘り気のある小さな音、呼吸と日本語の台詞。音楽なし。  
0-2秒 マクロクローズアップ: カメラが銃身に沿って滑る。金属の摩耗と錆痕が鮮明で、支架の三脚は菌群に突き刺さっている。彼女の指がグリップに乗り、一本ずつ締まっていく。人差し指は最後に添えられる。フォーカスは彼女がスコープに頬を寄せた横顔へと引かれ、まつ毛が震え、呼吸がゆっくりになる。  
台詞: 「ほらほら、私の目からは逃げられないよ〜」  
2-4秒 ハイアングルの見上げショット: 巨大な鳥が樹冠の上をゆっくりかすめ飛ぶ。広い翼面が空の半分を覆い、五色の羽が陽光の中で輝く。2本の雪白の長い尾羽が背後で大きく広がって絡み合い、糸状の羽枝が気流に合わせて幾重にもほどけ、虹色グラデーションの長い軌跡を引く。  
4-6秒 極端な寄りの側面クローズアップ: 巨鳥が突然横を向いて細長い嘴を開き、しゃがれた長鳴きを上げる。下顎は大きく開き——恐竜のような鋭い歯が2列、陽光の下でくっきり見える。一本一本が内側へ湾曲し、歯の隙間は細かく、喉の奥は暗い。華麗な羽色とこの歯列の対比が驚くほど強烈。  
6-7.5秒 スコープ内の主観視点: 円形の視野にビネットがかかり、照準が横移動して巨鳥を追う。目盛り線は距離に応じて微調整される。開いた歯列が拡大視野の中を一瞬かすめ、2本の尾羽が照準を横切る。照準は胸元で静止し、画面が半拍止まる——息を止める——発射。視野はその後、わずかに上へ跳ねる。  
7.5-9.5秒 弾丸追
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084197772664995840/img/idTNToag861_5w3N.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084199614450897335.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084199614450897335.mp4)**

**作者:** [Cia0](https://x.com/Cia0_exe) | **ソース:** [Link](https://x.com/Cia0_exe/status/2084199614450897335) | **公開日:** 2026年8月3日

`Action` `Gunfight` `Animals` `Creatures` `Anime 2D` `Fantasy` `VFX` `Slow-Mo` `POV` `Macro`

---

### Shot 1 (0s-5s): Slow overhead push-in. A clean wooden counter with only one…

![日本語](https://img.shields.io/badge/lang-日本語-green)

#### 📝 プロンプト

```
Shot 1 (0s-5s): Slow overhead push-in. A clean wooden counter with only one wide white ceramic cup on a white saucer, and one stainless steel milk pitcher. Nothing else on the counter surface. A young Japanese barista's hands pour steamed milk into the cup of espresso, white milk swirling into dark coffee creating a marble pattern. She flicks her wrist, a fern leaf pattern blooming across the surface. Ultra-realistic, 4K HD, warm cafe lighting, macro shallow depth of field.
Shot 2 (5s-10s): Close-up from the side. The same white cup on the same wooden counter. She slides the finished latte toward camera. Coffee surface gently rippling. Warm steam curls upward. She smiles softly with pride. The background is a simple clean wall with one small shelf of coffee beans. No other drinks or objects visible. Ultra-realistic, 4K HD.
Shot 3 (10s-15s): Wide shot pulling back. A customer's hands receive the same white cup and wrap around it. Camera continues pulling back to reveal a minimal cafe interior — three small tables, morning light streaming through one large window, dust particles floating in light beams. The customer lifts the cup and takes the first sip. Steam swirls between her face and the camera. Ultra-realistic, 4K HD, cinematic quality. Maintain perfect continuity of the same cup, saucer, and counter across all shots.
```

[![動画プレビュー](https://pbs.twimg.com/ext_tw_video_thumb/2084203251289694208/pu/img/C6tFxuLGcRKbELEt.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084203299285123274.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084203299285123274.mp4)**

**作者:** [ぴょんきち](https://x.com/yarakashiyama_) | **ソース:** [Link](https://x.com/yarakashiyama_/status/2084203299285123274) | **公開日:** 2026年8月3日

`Food` `Drinks` `Photoreal` `Realistic World` `Macro` `Slow-Mo`

---

### Generate a single continuous 10-second cinematic video in 16:9, photorealistic…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
単一の連続した10秒のシネマティック動画を16:9で生成してください。フォトリアルで、超高精細。

アップロードされた添付画像を、石を投げる人物の正確なキャラクター参照として使用してください。キャラクターの顔、体、服装、外見は添付画像と完全に同一に保ってください。

コアスタイル（参照動画に一致させること）:
- 1本の途切れない連続トラッキングショットで、終始プロジェクタイルを追従する。
- プロジェクタイルは飛行を決して止めず、フレームから決して外れない。
- すべての変化は飛行中に、滑らかで有機的なモーフとして起こる（ハードカットや突然の場面転換はなし）。
- 背景環境は、飛んでいる物体の周囲で徐々に、流れるように変化していく。
- 強いモーションブラー、シネマティックな被写界深度、ドラマチックなライティング、高コントラスト。

シームレスなモーフィングを伴う厳密な10秒タイムライン:

0.00–1.70s  
添付画像のキャラクターが、岩だらけの先史時代のサバンナにいる。彼/彼女は大きな粗い灰色の石を力強く投げる。カメラは直ちに飛んでいく石にロックし、空中を前方へ進む石を接近して追従する。

1.70–3.10s  
同じ速度と軌道で飛び続けながら、石はゆっくりと、かつシームレスに、鋭い石の穂先を持つ木製の槍へとモーフする。サバンナの背景は徐々に柔らかくなり、ドラマチックな空の下に広がる起伏のある丘陵地帯へと移行する。

3.10–4.50s  
槍は飛び続け、光の軌跡を伴う輝く金色のエネルギー矢へと流れるようにモーフする。丘はゆっくりと、包囲下にある古代の要塞都市の城壁へと変化し、背景には柔らかく立ち上る煙と遠くの炎が自然に現れる。

4.50–6.00s  
エネルギー矢は、明るい炎の軌跡と煙を伴う現代的な銅色の弾丸へと滑らかにモーフする。古代都市の背景は徐々に溶け、遠方に爆発と漂う砂塵が見える、戦争で荒廃した塹壕の戦場へと変わる。

6.00–7.80s  
弾丸は飛行中のまま、シームレスに大きな黒いロケット／ミサイルへと変形する。戦場の背景はゆっくりと上昇し、ロケットが軌道に入るにつれて地球の曲率となり、青い大気と雲が段階的に現れる。

7.80–10.00s  
ロケットは、明るいヘッドライトを備えた洗練された現代的な黒い未来型宇宙船へと流れるようにモーフする。地球の景色が深宇宙へと消えていく中、宇宙船は前方へ加速し続ける。宇宙船は、輝く天の川銀河を横切る明るい光の筋となる。最後は、星々の間を小さな光の筋が飛んでいくワイドで壮大なショットで終える。

重要なルール:
- シーン間で絶対にカットやジャンプをしない。
- すべての変化（プロジェクタイル＋背景）は、1つの連続した進化として感じられる必要がある。
- カメラは終始、滑らかなトラッキングで飛んでいる物体にロックし続ける。
- フォトリアルなCGI、シネマティックなカラーグレーディング、ボリューメトリックライティング、超高精細なテクスチャ。
- テキスト、ロゴ、突然のトランジションはなし。

Urgent  Watermark: フレーム右下に、プレーンなサンセリフ体で、黒一色・不透明度30%（70%透明）の文字 "enepty" を、小さく目立たないように配置し、動画全体の再生時間を通して表示すること。

--- QUOTED TWEET ---
🔥 期待どおりではないけど、まあいいか 😇

Pake @FlowbyGoogle 

他のモデルで試してみたい人がいるかも

🖌️ これがpromptです 👇 

単一の連続した10秒のシネマティック動画を16:9で生成してください。フォトリアルで、超高精細。

アップロードされた添付画像を、石を投げる人物の正確なキャラクター参照として使用してください。キャラクターの顔、体、服装、外見は添付画像と完全に同一に保ってください。

コアスタイル（参照動画に一致させること）:
- 1本の途切れない連続トラッキングショットで、終始プロジェクタイルを追従する。
- プロジェクタイルは飛行を決して止めず、フレームから決して外れない。
- すべての変化は飛行中に、滑らかで有機的なモーフとして起こる（ハードカットや突然の場面転換はなし）。
- 背景環境は、飛んでいる物体の周囲で徐々に、流れるように変化していく。
- 強いモーションブラー、シネマティックな被写界深度、ドラマチックなライティング、高コントラスト。

シームレスなモーフィングを伴う厳密な10秒タイムライン:

0.00–1.70s  
添付画像のキャラクターが、岩だらけの先史時代のサバンナにいる。彼/彼女は大きな粗い灰色の石を力強く投げる。カメラは直ちに飛んでいく石にロックし、空中を前方へ進む石を接近して追従する。

1.70–3.10s  
同じ速度と軌道で飛び続けながら、石はゆっくりと、かつシームレスに、鋭い石の穂先を持つ木製の槍へとモーフする。サバンナの背景は徐々に柔らかくなり、ドラマチックな空の下に広がる起伏のある丘陵地帯へと移行する。

3.10–4.50s  
槍は飛び続け、光の軌跡を伴う輝く金色のエネルギー矢へと流れるようにモーフする。丘はゆっくりと、包囲下にある古代の要塞都市の城壁へと変化し、背景には柔らかく立ち上る煙と遠くの炎が自然に現れる。

4.50–6.00s  
エネルギー矢は、明るい炎の軌跡と煙を伴う現代的な銅色の弾丸へと滑らかにモーフする。古代都市の背景は徐々に溶け、遠方に爆発と漂う砂塵が見える、戦争で荒廃した塹壕の戦場へと変わる。

6.00–7.80s  
弾丸は飛行中のまま、シームレスに大きな黒いロケット／ミサイルへと変形する。戦場の背景はゆっくりと上昇し、ロケットが軌道に入るにつれて地球の曲率となり、青い大気と雲が段階的に現れる。

7.80–10.00s  
ロケットは、明るいヘッドライトを備えた洗
```

[![動画プレビュー](https://pbs.twimg.com/ext_tw_video_thumb/2084203858902110208/pu/img/HBKeZtP-MSjMrDde.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084203885573677382.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084203885573677382.mp4)**

**作者:** [enepty](https://x.com/enepty) | **ソース:** [Link](https://x.com/enepty/status/2084203885573677382) | **公開日:** 2026年8月3日

`Action` `Chase` `Photoreal` `Sci-Fi` `VFX` `Transformation` `Model Showcase`

---

### 白紅剣士の赤エネルギー剣戟コンボ

![日本語](https://img.shields.io/badge/lang-日本語-green)

#### 📝 プロンプト

```
白紅剣士の赤エネルギー剣戟コンボ
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084204820622409728/img/V_m3l7r6h9JQbTaK.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084205603292119503.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084205603292119503.mp4)**

**作者:** [ShadeLurk](https://x.com/ShadeLurk) | **ソース:** [Link](https://x.com/ShadeLurk/status/2084205603292119503) | **公開日:** 2026年8月3日

`Action` `Wuxia` `Anime 2D` `Fantasy` `VFX`

---

### A cinematic first person travel diary following the same cheerful young Korean…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
---
朝から夜まで、日本を旅する、同じ明るい性格の若い韓国人女性を追ったシネマティックな一人称の旅行日記。彼女は長い黒髪に、スタイリッシュなえんじ色のジャケットを着ている。映像は、京都の静かな駅を出る彼女が、カメラに向かって温かく微笑む自然な手持ちのセルフィーから始まる。そこからシームレスに、そびえ立つ緑の竹の間を木漏れ日が差し込む穏やかな竹林を歩くシーンへ移行する。次に、伝統的な商店街へカットし、手作りの土産を見て回り、地元のスイーツを試しながら笑い、親しみやすい店主たちと自然に交流する。続いて、景色の美しい川沿いへ移り、石の護岸に座って新鮮な抹茶アイスクリームを楽しみながら、ゆっくりと流れていく船を眺める。さらに、夕暮れの屋上展望スポットへと続き、輝く東京のスカイラインを見下ろしながら、やさしい風が彼女の髪を揺らす。最後は、象徴的な渋谷スクランブル交差点を渡り、活気あふれる人混みに消えていく前に、振り返ってカメラに本物の笑顔を向けるシーンで締めくくる。リアルな人間の動き、飾らないドキュメンタリー風の瞬間、微細なシネマティックな動きを伴う安定した手持ちカメラ、柔らかなゴールデンアワーとブルーアワーのライティング、浅い被写界深度、自然な表情、温かみのあるフィルム調のカラーグレーディング、さりげないレンズフレア、都市の空気感、超写実的なトラベルフィルムの美学、4K、高精細。
---
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084206506858463232/img/hBHe2aVQMJqwVGCs.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084206568522887622.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084206568522887622.mp4)**

**作者:** [Snow](https://x.com/iamrealsnow) | **ソース:** [Link](https://x.com/iamrealsnow/status/2084206568522887622) | **公開日:** 2026年8月3日

`Portrait & Fashion` `Travel Vlog` `Photoreal` `Realistic World` `POV`

---

### Create a 60-second cinematic luxury chocolate commercial for a fictional…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
60秒のシネマティックなラグジュアリー・チョコレートCMを、架空のプレミアムブランド「Aurum Cacao」のために制作する。超フォトリアルでハリウッド品質のCM。ラグジュアリーなカラーグレーディング、エレガントなカメラワーク、プレミアムなライティング、浅い被写界深度、リアルな表情、自然な英語のセリフ、そして各シーンを通してシームレスな連続性を備える。

Scene 1 (0–10s): 壮麗な高級オークションホールの中で、コレクターや億万長者たちが、世界で最も希少なチョコレートを展示したガラスケースの周りに集まっている。オークショニアが *"The bidding begins at one million dollars."* と告げる。カメラのフラッシュが瞬き、会場は期待感で満ちていく。

Scene 2 (10–20s): 若きマスターチョコラティエが、温かみのある職人工房で静かに作業している。彼は希少なカカオ豆を丁寧に焙煎し、手で挽き、艶やかなチョコレートをテンパリングし、完成した一品を上品なウォールナットのプレゼンテーションボックスに収める。柔らかな金色の光が、温かく手仕事感のある雰囲気を生み出す。

Scene 3 (20–35s): 手作りのチョコレートが審査員パネルに प्रस्तुतされる。ひとりの審査員がそれを口にし、完全な沈黙のまま一瞬止まり、そして小さくささやく。Extraordinary... 別の審査員は驚きの笑みを浮かべ、*"I've never tasted anything like this."* と言う。贅沢な質感、豊かなカカオの層、そしてエレガントなプレゼンテーションが、美しいマクロショットで映し出される。

Scene 4 (35–50s): オークション会場に戻ると、観客は、審査員たちが100万ドルのオークションテーブルを離れ、チョコラティエの創作を体験する様子を見守っている。裕福な入札者が立ち上がり、*"I'll buy the recipe."* と言う。チョコラティエは落ち着いた笑みを浮かべ、"Some things can't be bought." と返す。会場は静まり返る。

Scene 5 (50–60s): ヒーロー商品のリビール。チョコレートが、柔らかな金色の粒子とエレガントなライティングに包まれた黒い大理石の台座の上でゆっくりと回転する。豊かなカカオの質感が艶めき、ロゴが現れる。

Brand: Aurum Cacao

Tagline: "Luxury isn't bought. It's crafted."*

Visual Style: プレミアムなスイスチョコレート広告、シネマティックなストーリーテリング、洗練されたラグジュアリーな雰囲気、滑らかなカメラワーク、リアルな演技、マクロのフードシネマトグラフィー、ゴールド、ダークブラウン、ブラックを基調とした豊かで温かみのあるカラーパレット、世界最高水準のCMクオリティ。

Audio: エレガントなピアノと繊細なストリングスで始まり、試食シーンで感情的なシネマティック・クレッシェンドへと高まっていく、途切れのないオーケストラサウンドトラック。オークションの空気感、カメラのシャッター音、チョコレートの仕上げ音、そして最後に印象的なラグジュアリーブランドのジングルを含む洗練された効果音。

--- THREAD CONTINUATION ---
[Thread 1] Prompt:

60秒のシネマティックなラグジュアリー・チョコレートCMを、架空のプレミアムブランド「Aurum Cacao」のために制作する。超フォトリアルでハリウッド品質のCM。ラグジュアリーなカラーグレーディング、エレガントなカメラワーク、プレミアムなライティング、浅い被写界深度、リアルな表情、自然な英語のセリフ、そして各シーンを通してシームレスな連続性を備える。

Scene 1 (0–10s): 壮麗な高級オークションホールの中で、コレクターや億万長者たちが、世界で最も希少なチョコレートを展示したガラスケースの周りに集まっている。オークショニアが *"The bidding begins at one million dollars."* と告げる。カメラのフラッシュが瞬き、会場は期待感で満ちていく。

Scene 2 (10–20s): 若きマスターチョコラティエが、温かみのある職人工房で静かに作業している。彼は希少なカカオ豆を丁寧に焙煎し、手で挽き、艶やかなチョコレートをテンパリングし、完成した一品を上品なウォールナットのプレゼンテーションボックスに収める。柔らかな金色の光が、温かく手仕事感のある雰囲気を生み出す。

Scene 3 (20–35s): 手作りのチョコレートが審査員パネルに प्रस्तुतされる。ひとりの審査員がそれを口にし、完全な沈黙のまま一瞬止まり、そして小さくささやく。Extraordinary... 別の審査員は驚きの笑みを浮かべ、*"I've never tasted anything like this."* と言う。贅沢な質感、豊かなカカオの層、そしてエレガントなプレゼンテーションが、美しいマクロショットで映し出される。

Scene 4 (35–50s): オークション会場に戻ると、観客は、審査員たちが100万ドルのオークションテーブルを離れ、チョコラティエの創作を体験する様子を見守っている。裕福な入札者が立ち上がり、*"I'll buy the recipe."* と言う。チョコラティエは落ち着いた笑みを浮かべ、"Some things can't be bought." と返す。会場は静まり返る。

Scene 5 (50–60s): ヒーロー商品のリビール。チョコレートが、柔らかな金色の粒子とエレガントなライティングに包まれた黒い大理石の台座の上でゆっくりと回転する。豊かなカカオの質感が艶めき、ロゴが現れる。

Brand: Aurum Cacao

Tagline: "Luxury isn't bought. It's crafted."*

Visual Style: プレミアムなスイスチョコレート広告、シネマティックなストーリーテリング、洗練されたラグジュアリーな雰囲気、滑らかなカメラワーク、リアルな演技、マクロのフードシネマトグラフィー、ゴールド、ダークブラウン、ブラックを基調とした豊かで温かみのあるカラーパレット、世界最高水準のCMクオリティ。

Audio: エレガントなピアノと繊細なストリングスで始まり、試食シーンで感情的なシネマティック・クレッシェンドへと高まっていく、途切れのないオーケストラサウンドトラック。オークションの空気感、カメラのシャッター音、チョコレートの仕上げ音、そして最後に印象的なラグジュアリーブランドのジングルを含む洗練された効果音。
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084208007634923522/img/Yp05JEbzCHQ0V3rL.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084209101190422650.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084209101190422650.mp4)**

**作者:** [Sarah Parker](https://x.com/SeharShinwari) | **ソース:** [Link](https://x.com/SeharShinwari/status/2084209101190422650) | **公開日:** 2026年8月3日

`Product Ad` `F&B` `Photoreal` `Realistic World` `Macro`

---

### Create a high-end cinematic sports commercial set on a professional outdoor…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
プロフェッショナルな屋外テニスコートを舞台に、ゴールデンアワーの高級感あふれるシネマティックなスポーツCMを制作する。

プレミアムなモダンテニスウェア、バイザー、リストバンド、パフォーマンスシューズを身につけた、自信に満ちたプロの女性テニスプレーヤーがサーブの準備をする。まずはミディアムアングルから、彼女がボールをトスしてサーブ動作に入る様子を追う、滑らかなシネマティック・トラッキングショットで始める。

ラケットがテニスボールを打つまさにその瞬間、シームレスにドラマチックな真上からのトップダウンショットへ切り替える。テニスボールが前景いっぱいに入り、カメラのすぐ目前にあるかのように極めて近く見え、その真下にはプレーヤーが、サーブの頂点で完璧に静止したまま立っている。

時間は完全に停止する。

世界が静止したまま、カメラは凍結したシーンの周囲を流れるように移動し、アパレル、素材の質感、ステッチ、ロゴ、バイザー、リストバンド、ラケットのストリング、シューズ、その他のアスレチックなディテールを、プレミアムな広告風のマクロクローズアップで捉える。ラグジュアリーなプロダクトライティング、浅い被写界深度、くっきりとしたテクスチャ、滑らかなシネマティックなカメラワーク、洗練されたスポーツCMらしい映像表現を用いる。

時間が自然に再開する。

彼女はサーブを打ち終え、ラケットを下ろし、静かな自信をまとって前へ歩き出す。カメラは即座にコートを横切る whip-pan を行い、テニスボールの軌道を追う。

コートの反対側では、数十個のテニスボールが素早く飛び込むように配置され、正確に並んで大きな大文字の **"COMTEX"** を形作る。

最後は、テニスボールだけで構成された完成済みのブランド名を見せる、クリーンなトップダウンのヒーローショットで締めくくる。全編を通して、プレミアムなCMテンポ、シームレスなトランジション、リアルなボール物理、ダイナミックなカメラワーク、シネマティックなサウンドデザイン、HDRライティング、自然なモーションブラー、超リアルなテクスチャ、そしてラグジュアリーなスポーツ広告クオリティを用いる。
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084217868242341889/img/y4r__CEkcXS2TrKM.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084217915893784975.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084217915893784975.mp4)**

**作者:** [Saul Goodman](https://x.com/Goodmanprotocol) | **ソース:** [Link](https://x.com/Goodmanprotocol/status/2084217915893784975) | **公開日:** 2026年8月3日

`Sports` `Other Competition` `Product Ad` `Fitness` `Photoreal` `Realistic World` `VFX` `Macro` `Slow-Mo`

---

### Behind-the-scenes phone footage from inside a large practical-effects…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
大規模な実用特殊効果用サウンドステージの内部で撮影された、舞台裏のスマートフォン映像。縦位置、手持ちの最新型スマートフォンで撮影。

>> Scene context: 映画クルーが、ミニチュアのRMSタイタニック号が沈没するシーンを撮影している。北大西洋を再現した巨大な実用オーシャンタンクセットの中には、1:24スケールのタイタニック号があり、点灯する舷窓、4本の煙突、救命ボート、甲板の手すり、索具、貨物クレーン、そしてミニチュアの乗客まで備わっている。タンクの上には足場のガントリーがあり、実際の海水を満載した巨大なダンプタンクが並んでいる。2人の技術スタッフが、放水レバーのあるガントリー上に立っている。

>> First frame: すでに準備完了で待機中 — 船とオーシャンタンクが画面右寄りの中景を占め、セットの上方にはダンプタンクが不気味にそびえている。前景の画面左、スマートフォンから1メートル以内の位置では、黒いEFFECTS CREWのTシャツを着た3人のクルーが低い防護壁の後ろに立っており、1人はレール上のシネマカメラに付き、もう1人はヘッドセットを付けて手を上げている。地平線の向こうには、オレンジのクロスマーカーが入った巨大な青いクロマキーウォールが立ち上がっている。セットの上にはテクノクレーンが吊られている。

>> Action and physics: 「Action!」の叫び声とともに、ダンプタンクのゲートが順番に激しく開き、膨大な量の実水が重みと乱流を伴ってオーシャンセットへと押し寄せる。最初の波が船首を越えて砕け、甲板を走り抜けながら救命ボートを引き剥がし、ミニチュアの手すりをへし折り、やがて船体へ激突する。下層デッキは水面下に消え、船首は水中へと沈み込み、船尾は油圧ジンバルによってさらに高く持ち上がる。索具が激しくしなり、煙突は次々と崩れ落ち、船体は中央部で真っ二つに裂け、最後に船尾が渦巻く水の中へ滑り込む。水は防護壁の縁を越えて噴き出し、細かな飛沫の雲がステージ床を覆い、画面を白く飛ばしていく。クルーは顔をかばいながら後ずさる。

>> Camera: オペレーターは立った姿勢から後退しつつ、片手で胸の高さにスマートフォンを構え、船首から船尾へとアクションを追いかけるように素早く手持ちパンする。フレーミングはゆるく反応的で、飛沫の雲が当たる瞬間に大きく揺れ、オートフォーカスはホワイトアウトの中で迷い続け、最後の瞬間にはレンズに水滴が付着している。84°の広い対角FOV、防護壁から約2メートルの位置で撮影。

>> Lighting: 主光源は天井のLEDソフトパネル格子で、カメラ側の上前方から当たる。明るい昼光色バランスで、反射する水面に合わせて露出は固定されているため、前景のクルーはやや暗く見える。飛沫の雲はパネルの逆光を受けて発光している。

>> Audio: 現場の環境音 — 大きな「Action!」、ダンプタンクのゲートが鳴らす金属音、滝のように流れ落ちる水の重い轟音、ミニチュアの鋼材が折れる音、船体が崩壊するうめき声、オフカメラで叫ぶクルーの声: 「マークをキープ！ 回し続けろ！ カメラ2、船尾をキープ！」

>> Realistic amateur smartphone capture, natural handheld shake and rolling shutter, real practical effects, documentary behind-the-scenes footage, no cinematic composition, no film grain, no artificial motion blur, no VFX look, no CGI, no impossible camera moves, authentic production environment.
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084229546606526464/img/VsQaMU1TRwkwU3WE.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084229625681674427.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084229625681674427.mp4)**

**作者:** [ᴍᴜʀᴘʜʏ](https://x.com/Diplomeme) | **ソース:** [Link](https://x.com/Diplomeme/status/2084229625681674427) | **公開日:** 2026年8月3日

`Story` `Drama` `Photoreal` `Realistic World` `POV`

---

### Plano cinematográfico de acción real, hora dorada. Un superhéroe atlético y…

![Español](https://img.shields.io/badge/lang-Español-yellow)

#### 📝 プロンプト

```
---
シネマティックな実写ショット、ゴールデンアワー。引き締まったアスレチック体型のスーパーヒーローが、タイトなスーツを着ている。上半身、腕、マスクは濃いライラック、脚とサイドはエメラルドグリーンで、全身の生地には黒い六角形の立体テクスチャが施されている。胸の中央には、白い大きな「Y」のエンブレム。スーパーヒーローのライラック色のマスクには、太い黒縁のついた大きな白い涙型レンズが2つある。

アクション：ヒーローが高層ビルの間をスイングしながらフレームインし、ガラス張りのビルのファサードに垂直に着地する。三点支持の力強いしゃがみ姿勢で、指をガラスに大きく広げて押しつける。しばらくその姿勢を保ち、カメラに向かって頭を鋭く振り向け、レンズを細める。

カメラ：着地に合わせて最後は push-in で寄る、素早い横移動のトラッキング。35mmレンズ、浅い被写界深度、24fps。

光：ビルの間から差し込む低い太陽による強いゴールデンの逆光、スーツに rim light、暖かいオレンジの空、ガラスには冷たい青い影。ブロックバスター調の color grading、高コントラスト、アナモルフィック flare。

物理：重量感とモーメントはリアルで、身体の質量が衝撃に反応する。

--- THREAD CONTINUATION ---
[Thread 1] Seedance 2.0

このモデルは都市の描写が強い。背景の高層ビルは MiniMax では届かないレベルの解像感があり、着地もより強く、より迫力がある。

でもキャラクターは平板で、スーツのディテールが失われ、スイングも説得力に欠け、レンズにも何も感じられない。

[Thread 2] MiniMax H3

ここが驚きだった。着地は派手さでは劣るけれど、よりリアルで、身体に本当の重さがある。

そして、私が度肝を抜かれたディテールがこれ。カメラに向かって振り向くときに、レンズを細めるんだ。

モデルがここまで再現できるとは思っていなかったジェスチャー。 https://t.co/oTPiSiAoaG

[Thread 3] これが、私の SpiderYoker を作るための prompt です。

シネマティックな実写ショット、ゴールデンアワー。引き締まったアスレチック体型のスーパーヒーローが、タイトなスーツを着ている。上半身、腕、マスクは濃いライラック、脚とサイドはエメラルドグリーンで、全身の生地には黒い六角形の立体テクスチャが施されている。胸の中央には、白い大きな「Y」のエンブレム。スーパーヒーローのライラック色のマスクには、太い黒縁のついた大きな白い涙型レンズが2つある。

アクション：ヒーローが高層ビルの間をスイングしながらフレームインし、ガラス張りのビルのファサードに垂直に着地する。三点支持の力強いしゃがみ姿勢で、指をガラスに大きく広げて押しつける。しばらくその姿勢を保ち、カメラに向かって頭を鋭く振り向け、レンズを細める。

カメラ：着地に合わせて最後は push-in で寄る、素早い横移動のトラッキング。35mmレンズ、浅い被写界深度、24fps。

光：ビルの間から差し込む低い太陽による強いゴールデンの逆光、スーツに rim light、暖かいオレンジの空、ガラスには冷たい青い影。ブロックバスター調の color grading、高コントラスト、アナモルフィック flare。

物理：重量感とモーメントはリアルで、身体の質量が衝撃に反応する。

[Thread 4] 私の大ヒット作：MiniMax H3。

@itsPolloAI で公開中です。

私の prompt を使って、両方で試して、あなたの作品を見せてください： https://t.co/p336PjnfTB

20回見たあとでの私の結論：

Seedance 2.0 は舞台描写で勝つ。MiniMax H3 はキャラクターで勝つ。

そしてスーパーヒーローのショットでは、キャラクターこそがショットそのもの。あのレンズの表情は、どんな高層ビルよりも価値がある。
---
```

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084230407470612480/img/kKqE0ZRilO5o7fon.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084230451078820307.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084230451078820307.mp4)**

**作者:** [YokerAI](https://x.com/IATheYoker) | **ソース:** [Link](https://x.com/IATheYoker/status/2084230451078820307) | **公開日:** 2026年8月3日

`Action` `Superpower` `Photoreal` `Realistic World`

---

## 📚 📚 さらに多くのプロンプト

### 🎯 5206 件のプロンプトが非表示

**👉 [Renoise でプロンプトを閲覧](https://renoise.ai/ja/showcase/awesome-seedance-prompts?utm_source=github&utm_medium=readme&utm_campaign=seedance-prompts)**

---

## 💡 使い方のコツ

> Seedance 2.0 を最大限に活用するためのコミュニティのヒントとチュートリアル

### Lock the brief (hook, offer, platform ratio, clip count) and get approval…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
短い要件（フック、オファー、プラットフォーム比率、クリップ数）を固定し、Seedanceで生成する前に承認を取って、方向性が曖昧なままクレジットを消費しないようにする。  
JSONのidentity card／Elements風のcharacter lockとreference packを使えば、Seedanceの出力でも複数クリップにわたって同じクリエイターの顔を維持できる。  
1本の長いプロンプトではなくショットリストから生成し、各ショットごとに承認済みのbrief＋identity card＋reference packをSeedanceに渡す。  
QCのverifyループを追加して、face lock、product fidelity（ラベル／色／形）、正しいプラットフォーム比率（例：Reels/TikTokなら9:16）、無音の間、テキストの可読性をチェックする。失敗したテイクは、QCメモを添えてSeedanceで再生成する。  
Seedanceの動画クレジットをstitchingやリネームに使わないこと。組み立てはローカルでffmpegを使って行い、Seedanceは実際の生成ステップだけに使う。  
Seedanceはフォルダベースのパイプライン（briefs/approved.md → batches/YYYY-MM-DD/raw → qc.json → final → queue/ready.csv）で運用し、エージェント／ツールがチャット履歴を失わずに確実に引き継げるようにする。  
承認済みのbriefからcaptionのバリエーションを生成し、完成版はすぐに投稿キュー／カレンダーへ入れて、Seedanceの出力を未使用ファイルではなく、スケジュール済み在庫にする。  
自動化は小さく始めて段階的に拡張する。Week 1はidentity card 1つ＋brief/finalの手動承認、Week 2でQCスコアリング＋テイクごとのコスト記録を追加、Week 3でキュー＋captionバリエーションを追加、Week 4になって初めてスケジュール実行の自動化を行う。

--- QUOTED TWEET ---
https://t.co/XamF55DbVN

--- LINKED ARTICLE: Claude Code Agents Turned One Creator Into a UGC Factory. Full Build Inside + Where the Cash Lands. ---
同じ顔。無限のクリップ。そこまでは、もう解決できる。  
それでも多くのUGC構成を壊しているのは、その中間工程だ。誰かがスタジオのインターンみたいに制作を回さなければならない。briefを書く、生成器の面倒を見る、惜しいテイクを10本も目視で確認する、ファイル名を付け直す、クリップをCapCutにドラッグする、どのバージョンが「ほぼ良かった」のか忘れる、そしてまた別の夜を費やして「システム」と呼ぶ。  
それは工場ではない。より良いツールを使った、無給のスタジオ労働だ。  
Claude Code agentsはこの仕事をひっくり返す。ロックされた1人のクリエイター。4つの役割。出力を回すループ。  
brief → generate → QC → queue  
成果物は、きれいな1本のクリップではない。人が5つのタブの中に住まなくても、1週間分のUGCを出せる機械だ。  
これが全体像。そして、実際にお金がどこに落ちるのか。

あなたがボトルネックになっていた

2026年のデフォルトのAI UGCの流れ：
1. チャットを開く。  
2. プロンプトを貼る。  
3. 一度だけ見栄えのいい顔が出る。  
4. 2本目で一貫性と戦う。  
5. 「見た感じ問題なかった」で手動QCする。  
6. 思い出したときに投稿する。  
どの工程にも人間が必要だ。スループットは注意力の長さまで落ちる。  
ブランドが払うのは注意力ではない。量、ブランド整合性、納期に対して払う。一般的な商品系UGCの相場は、1クリップあたり約75〜250ドル。ニッチが狭く、納期が速ければ、もっと高いこともある。  
ノートPCを閉じたらパイプラインが止まるなら、それはUGCビジネスではない。請求書付きの趣味だ。  
ゲートを設計しよう。エージェントにシフトを回させる。

同じ顔は第一歩。工場こそが堀になる
一貫した顔は重要だ。クリエイターをschemaに入れ、Claude skillに組み込めば、一貫性が運任せではなくなる。作る。所有する。バージョン管理する。  
ただしidentityだけでは、まだ人間がオペレーターのままだ。生成を起動し、何を出荷するか決め、投稿をスケジュールし、午前1時に「明らかにAIっぽい」テイクを見つけるのは、結局人間だ。  
アップグレードは、演者がデータになり、工場がエージェントで動くときに起こる。  
顔をコンパイルする1つのskillは便利だ。だが、brief → generate → QC → queue のマルチエージェント・パイプラインは、もはやスタジオだ。  
UGCの外でも同じだ。1つのモデルに延々とpromptingしても、どこかで頭打ちになる。スケールするのはループと役割だ。

4つのエージェント

promptではなく、役割で考える。  
AGENT 1: BRIEF  
商品ページ／ブランドノート／オファーを読む。hook、problem、reveal、demo、CTA、platform ratio、clip countを含むロック済みbriefを出力する。paid generationの前に承認で止まる。  
AGENT 2: GENERATE  
承認済みのbrief＋identity card／Elements／reference packを受け取る。shot listを組む。画像または動画スタック（Claude Code＋MCPでHiggsfield / Seedance系ツールにつなぐ、あるいは既に支払い済みのもの）を呼び出す。日付付きのbatchフォルダにファイルを書き出す。謎のexportはしない。  
AGENT 3: QC  
多くの「AI UGC」系スレッドはここを飛ばす。QCはvibe checkではなくverify loopだ。face lock、product fidelity、ratio、dead air、text readability、「cinematic GPU farm」っぽさをスコア化する。失敗なら再生成、またはフラグ。合格なら下流へ送る。  
AGENT 4: QUEUE  
finalをリネームし、captionのバリエーションを書き、post queue／sheet／scheduled tasksフォルダに入れる。混乱ではなく、キューをレビューする。  
1つのコマンドでシフトが始まる：

Claude Codeがオーケストレーターskillを実行する。各ゲートはサブエージェントが担当する。人間が触るのは承認とfinalだけ。  
これは、コンテンツに適用したagent workであって、リポジトリだけの話ではない。

QCはvibe checkではない
検証者のない生成器は、見た目のいいライトが付いたスロットマシンだ。  
最低限必要なQCゲート：
- Character lockが維持されていること（バッチ全体で同じ顔の特徴）  
- 商品が見えていて正しいこと（ラベル、色、形）  
- プラットフォーム比率が正しいこと（Reels/TikTokなら9:16など）  
- ジョークに音のタイミングが必要なら、無音の間がないこと  
- briefがbathroom-phone UGCを求めているのに、「cinematic studio」っぽくなっていないこと  
- テイクごとのコストが記録されていること（ループではクレジット消費が速い）  
テイクが失敗したら、GenerateはQCメモを添えて再試行する。深夜に
```

#### 💡 使い方のコツ

Lock the brief (hook, offer, platform ratio, clip count) and get approval before generating in Seedance to avoid burning credits on unclear direction.  
Use a JSON identity card/Elements-style character lock plus a reference pack so Seedance outputs keep the same creator face across multiple clips.  
Generate from a shot list (not one long prompt) by feeding Seedance the approved brief + identity card + reference pack for each planned shot.  
Add a QC verify loop that checks face lock, product fidelity (label/color/shape), correct platform ratio (e.g., 9:16 for Reels/TikTok), dead air, and text readability; if a take fails, regenerate in Seedance with the QC notes attached.  
Avoid spending Seedance video credits on stitching/renaming; do assembly locally with ffmpeg and only use Seedance for the actual generation steps.  
Run Seedance in a folder-based pipeline (briefs/approved.md → batches/YYYY-MM-DD/raw → qc.json → final → queue/ready.csv) so agents/tools can reliably hand off work without losing context in chat history.  
Generate caption variants from the approved brief and drop finals into a posting queue/calendar immediately so Seedance output becomes scheduled inventory, not unused files.  
Start small and scale automation: Week 1 one identity card + manual brief/final approvals; Week 2 add QC scoring + log cost per take; Week 3 add queue + caption variants; Week 4 only then automate scheduled runs.

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084800873088122881/img/SfdRveowZh387522.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084801018856944036.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084801018856944036.mp4)**

**作者:** [Kaivorn](https://x.com/kaivornxbt) | **ソース:** [Link](https://x.com/kaivornxbt/status/2084801018856944036) | **公開日:** 2026年8月5日

`Portrait & Fashion` `Influencer` `Photoreal` `Realistic World` `Tutorial`

---

### Use an MCP connector from Claude Code into Seedance-class video tools so the…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
Claude Code から Seedance クラスの動画ツールへ MCP コネクタを使い、Generate エージェントが承認済みの brief + identity/reference pack から Seedance の実行を自動で起動できるようにする。  
一貫した creator identity（JSON identity card / Elements 風の character lock）を固定し、Seedance の生成全体で再利用して、バッチ内で同じ顔を維持する。  
実在の製品写真を Seedance 用の reference pack として使い、“fantasy” 寄りのレンダーよりも product fidelity を高める。  
Seedance の prompting には “realism anchors” を組み込む（phone camera っぽい見え方、雑な手元、完璧ではない光）ことで、bathroom-phone UGC が必要なときに過度に cinematic / AI-studio っぽい美学になるのを避ける。  
Seedance 生成後に QC の verify loop を追加し、character lock、製品の正確性（label / color / shape）、正しい platform ratio（例: Reels/TikTok なら 9:16）、dead air、テキストの可読性をチェックする。失敗したテイクは QC ノートを添えて再生成する。  
stitching / end cards / assembly のために Seedance の video credits を無駄に消費しない。代わりにクリップを書き出し、stitching は ffmpeg でローカル処理する。

--- QUOTED TWEET ---
https://t.co/XamF55DbVN

--- LINKED ARTICLE: Claude Code Agents Turned One Creator Into a UGC Factory. Full Build Inside + Where the Cash Lands. ---
同じ顔。終わりのないクリップ。そこまでは、もう解決できる。  
それでも多くの UGC 設定を壊しているのは、中間工程だ。誰かがスタジオのインターンみたいに制作を回さなければならない。brief を書き、ジェネレーターを見張り、惜しいテイクを10本も目視で確認し、ファイル名を変え、クリップを CapCut にドラッグし、「ほぼ良かった」バージョンがどれだったか忘れ、また別の夜を溶かして、それをシステムと呼ぶ。  
それは factory ではない。より良いツールを使った無給のスタジオ労働だ。  
Claude Code agents はその仕事をひっくり返す。1人の固定 creator。4つの役割。出荷まで回るループ。  
brief → generate → QC → queue  
成果物は、きれいな1本のクリップではない。人間が5つのタブの中に住まなくても、1週間分の UGC を出せる機械だ。  
これが全体の構築。そして、実際にどこでお金が入るのか。

YOU BECAME THE BOTTLENECK

2026 年のデフォルトの AI UGC の流れ:
1. チャットを開く。  
2. prompt を貼る。  
3. 一度だけ見栄えのいい顔を得る。  
4. 2本目で一貫性と戦う。  
5. 「見た感じ問題なかった」で手動 QC する。  
6. 思い出したときに投稿する。  
各ステップに人間が必要になる。スループットは注意力の長さまで落ちる。  
ブランドが払うのは注意力ではない。量、ブランド整合性、納期に対して払う。一般的な product-style UGC の相場は、1クリップあたり約 $75〜$250。ニッチが狭く、納期が速いなら、もっと上がることもある。  
ノート PC を閉じた瞬間にパイプラインが止まるなら、それは UGC ビジネスではない。請求書付きの趣味だ。  
ゲートを設計し、エージェントにシフトを回させる。

SAME FACE IS STEP ONE. THE FACTORY IS THE MOAT

一貫した顔は重要だ。creator を schema に入れ、Claude skill に組み込めば、一貫性が運任せではなくなる。作る。所有する。バージョン管理する。  
ただし identity だけでは、まだ人間がオペレーターのままだ。誰かが生成を起動し、何を出荷するか決め、投稿をスケジュールし、1時に「明らかに AI」なテイクを見つける必要がある。  
アップグレードは、actor が data になり、factory が agents になるときだ。  
顔をコンパイルする1つの skill は便利だ。brief → generate → QC → queue を回す multi-agent pipeline は、スタジオだ。  
UGC の外でも同じことが起きる。1つの model に延々と prompt を投げても、どこかで頭打ちになる。スケールするのは loop と role だ。

THE FOUR AGENTS

prompt ではなく、役割で考える。  
AGENT 1: BRIEF  
product page / brand notes / offer を読む。locked brief を出力する: hook, problem, reveal, demo, CTA, platform ratio, clip count。paid generation の前に承認で止まる。  
AGENT 2: GENERATE  
承認済み brief + identity card / Elements / reference pack を受け取る。shot list を作る。image か video stack（Claude Code + MCP で Higgsfield / Seedance-class tools に接続、または既に支払い済みのもの）を呼び出す。日付付きの batch folder にファイルを書き込む。謎の export はしない。  
AGENT 3: QC  
多くの “AI UGC” スレッドはここを飛ばす。QC は vibe check ではなく verify loop だ。face lock、product fidelity、ratio、dead air、text readability、“cinematic GPU farm” っぽさを採点する。Fail → 再生成またはフラグ。Pass → 下流へ。  
AGENT 4: QUEUE  
final をリネームし、caption のバリエーションを書き、post queue / sheet / scheduled tasks folder に入れる。混乱ではなく queue をレビューする。  
1つのコマンドでシフトが始まる:

Claude Code が orchestrator skill を実行する。subagents が各 gate を担当する。人間が触るのは承認と final だけ。  
これは、リポジトリだけでなくコンテンツに適用した agent work だ。

QC IS NOT A VIBE CHECK

verifier のない generator は、見た目のいいライトが付いたスロットマシンだ。  
最低限必要な QC gate:
- Character lock が維持されている（バッチ全体で同じ顔の特徴）
- Product が見えていて正しい（label, color, shape）
- Platform ratio が正しい（Reels/TikTok なら 9:16 など）
- 音のタイミングが必要なネタなら、無音の dead beat がない
- brief が bathroom-phone UGC を求めているのに “cinematic studio” っぽくならない
- 1テイクごとの cost が記録されている（ループで credits はすぐ減る）
テイクが失敗したら、Generate は QC ノートを添えて再試行する。真夜中に記憶だけで prompt を書き直さない。  
受け渡しフォルダがすべてだ:

briefs/approved.md  
batches/2026-08-05/raw/  
batches/2026-08-05/qc.json  
batches/2026-08-05/final/  
queue/ready.csv  
Agents は同じフォルダを読み書きする。人間はフォルダをレビューする。チャットのスクロールバックの中だけに存在するものはない。  
verify gate のない demo magic は、ハードドライブが almost で埋まるやり方だ。

THE STACK

ベンダーは入れ替え可能だ。形は維持する。  
ORCHESTRATION

Claude Code  
Claude skills (/ugc-factory orchestrator)  
Brief / Generate / QC / Queue 用の subagents または dynamic workflows  
generator + Drive/Sheets 用の optional MCP connectors  
IDENTITY / CAST

JSON identity card または Elements-style character lock  
Product reference pack（実在写真は fantasy renders より優先）  
skill に組み込まれた
```

#### 💡 使い方のコツ

Use an MCP connector from Claude Code into Seedance-class video tools so the Generate agent can trigger Seedance runs automatically from an approved brief + identity/reference pack.  
Lock a consistent creator identity (JSON identity card / Elements-style character lock) and reuse it across Seedance generations to keep the same face across a batch.  
Use real product photos as a reference pack for Seedance generations to improve product fidelity versus “fantasy” renders.  
Bake “realism anchors” into your Seedance prompting (phone camera look, messy hands, imperfect light) to avoid an overly cinematic/AI-studio aesthetic when you need bathroom-phone UGC.  
Add a QC verify loop after Seedance generation that checks character lock, product correctness (label/color/shape), correct platform ratio (e.g., 9:16 for Reels/TikTok), dead air, and text readability; regenerate failed takes with QC notes attached.  
Avoid burning Seedance video credits on stitching/end cards/assembly—export clips and do stitching locally with ffmpeg instead.

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084806162961121280/img/ovDedsbQr2zY1z4e.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084806717221503168.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084806717221503168.mp4)**

**作者:** [ALEXYZ](https://x.com/Alexvx_nft) | **ソース:** [Link](https://x.com/Alexvx_nft/status/2084806717221503168) | **公開日:** 2026年8月5日

`Product Ad` `Tech` `Photoreal` `Realistic World` `Tutorial`

---

### Set output to ar 16:9, 15s duration, 720p for a TikTok/Reels-style Seedance 2.0…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
出力を ar 16:9、15秒、720p に設定し、TikTok/Reels風の Seedance 2.0 動画にする。  
スタイルは Authentic UGC / iPhone selfie-vlog と明示し、handheld、natural light、slight grain、autofocus breathing、jump cuts を入れて、スマホ撮影っぽい見た目を強調する。  
アップロードした商品画像を唯一の product reference として使用し、Seedance に対して、すべてのショットで細部（bun の形、patty の厚み、cheese の溶け具合、トッピング、ソース、比率）を正確に保持するよう指示して、一貫性を保つ。  
キャラクターは、年齢、人種、髪型、服装、メイク、性格など具体的な属性で定義し、各ショットを通して同じ人物に見えるようにする。  
動画をタイムスタンプ付きのショットに分ける（例: 0–2s selfie with box、2–4s opening、4–6s zoom、6–8s cheese stretch、8–10s bite reaction など）ことで、テンポとカメラアクションをコントロールする。  
各ショットごとの dialogue lines を入れて、同期した vlog-style speech の瞬間を生成する。  
cinematic/commercial/CGI の要素や、よくあるアーティファクト（distorted hands、warped food、perfect stabilization、studio lighting、text glitches、logo distortion）を禁止する negative prompt を追加し、リアルさを維持する。
```

#### 💡 使い方のコツ

Set output to ar 16:9, 15s duration, 720p for a TikTok/Reels-style Seedance 2.0 video.  
Specify the style explicitly as Authentic UGC / iPhone selfie-vlog with handheld, natural light, slight grain, autofocus breathing, and jump cuts to drive a phone-footage look.  
Use an uploaded product image as the only product reference and instruct Seedance to preserve exact details (bun shape, patty thickness, cheese melt, toppings, sauces, proportions) in every shot for consistency.  
Define the character with concrete attributes (age, ethnicity, hair, outfit, makeup, personality) to keep the same subject across shots.  
Break the video into timestamped shots (e.g., 0–2s selfie with box, 2–4s opening, 4–6s zoom, 6–8s cheese stretch, 8–10s bite reaction, etc.) to control pacing and camera actions.  
Include per-shot dialogue lines to generate synced vlog-style speech moments.  
Add a negative prompt banning cinematic/commercial/CGI cues and common artifacts (distorted hands, warped food, perfect stabilization, studio lighting, text glitches, logo distortion) to maintain realism.

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084505170571132928/img/qnssIGsj9aqLpfys.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084505236602015796.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084505236602015796.mp4)**

**作者:** [Feyber | AI Creator](https://x.com/woleswoosh) | **ソース:** [Link](https://x.com/woleswoosh/status/2084505236602015796) | **公開日:** 2026年8月4日

`Product Ad` `F&B` `Photoreal` `Realistic World` `Tutorial`

---

### Build a character reference sheet first, then animate that sheet in Seedance to…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
まずキャラクターのリファレンスシートを作成し、そのシートをSeedanceでアニメーション化して、ショット間でキャラクターの一貫性を維持します。

単一のポートレート入力から、3分割レイアウト（左：胸上ポートレート、中央：頭部のない全身衣装の正面、右：頭部のない衣装の背面）を指定してフルキャラクターシートを生成し、一貫性のためにワードローブ／ライティング／カラーグレーディングをすべて同一にします。

シームレスなニュートラルグレーのスタジオ背景（#808080）、クリーンなエディトリアルレイアウト、そして downstream のアニメーションで使いやすいように「on-image text/labels/borders なし」を指定します。

さらに、full-frame 85mm lens look、controlled shallow depth of field、soft even studio lighting、HDR、8k といったカメラ／品質の指示を加えて、生成されるキャラクターシートのディテールとリアリズムを高めます。

--- THREAD CONTINUATION ---
[Thread 1] Prompt:

単一の一貫したキャラクターのキャラクターリファレンスシート、横長のランドスケープ構図、純粋でクリーンな深いニュートラルグレー（#808080）のシームレスなスタジオ背景、左から右へ読むクリーンなエディトリアルレイアウト、3つの縦セクションに配置。すべてのパネルでキャラクターのアイデンティティ、ワードローブ、ライティング、カラーグレーディングを完全に一致させ、完璧な一貫性を実現する。

LEFT SECTION（最も大きいパネル、フレーム左半分を占める）：胸上ポートレート、正面向き、頭部と上胸部がフレーム内に収まる。同じ深紅の椿柄の着物を着用し、襟と首元がはっきり見える。目にピントを極めてシャープに合わせ、両目に柔らかなキャッチライト。

CENTER SECTION：着物の全身正面図。まっすぐ立ち、衣装が完全に広がって見え、見えない人物が着ているかのように自然な着用時の形を保っている。頭部と首は完全に存在せず、襟は空の内部へと開いており、その内側にはグレーの背景が見える。襟より上には頭、顔、首、髪、肌は一切見えない。襟から履物までの衣装全体がフレーム内に収まり、余白は均等。

RIGHT SECTION：同じ着物の背面図。まっすぐ立ち、同じく見えないマネキンのように中身が入った状態で、頭部と首は完全に存在せず、空洞の開いた襟を持つ。背縫い、袖の落ち感、背中で結ばれた帯結びが見える。

CHARACTER（portrait panel only）：18歳の日本人女性。やや小さめの楕円形の顔、柔らかく丸みのある顎のライン、まっすぐな鼻、ほのかな艶のあるふっくらした自然な唇、細部まで描写された虹彩を持つ濃い茶色のアーモンド形の目、自然なストレート眉、リアルな毛穴の質感を持つ明るく透明感のある肌、右頬に小さなほくろが2つ、青みがかった黒の艶やかな髪を高いポニーテールでまとめ、目の少し上で切りそろえたまっすぐな前髪と、顔まわりに少しだけ落ちる後れ毛。落ち着いたニュートラルでリラックスした表情。

WARDROBE（3パネル共通）：深紅のシルク製の伝統的な日本の着物。白、淡いピンク、濃い緑の椿の花柄が散りばめられている。襟元には白い内襟を重ね、長く揺れる袖、左前に合わせた着付け、腰には金と濃赤の幅広い織り帯を締め、背中で整った太鼓結びにしている。白い足袋と、濃い漆塗りの草履。衣装にはブランド要素を一切入れないこと — 着物、帯、履物のどこにもロゴ、ブランドマーク、エンブレム、数字、文字、レタリングを絶対に入れない。

LIGHTING & RENDER：クリーンで柔らかく均一なスタジオライティング、大きく拡散したキーライトと穏やかなフィルライト、柔らかな自然な影、強いハイライトなし、実物に忠実な肌色、ニュートラルなホワイトバランス、ミニマルなハイファッションのエディトリアル表現、洗練されたモダンでプロフェッショナルなモデルシートの美学、full-frameカメラで85mmレンズのルック、浅いが制御された被写界深度、くっきりしたディテール、ハイダイナミックレンジ、8k。

LAYOUT：3つのセクションは同じ幅ではない — LEFTのポートレートセクションがフレームの約50%を占め、CENTERとRIGHTの全身セクションが残りの半分をそれぞれ約25%ずつ分け合う。画像内テキストなし、ラベルなし、キャプションなし、カラースウォッチなし、ボーダーなし。
---

翻訳のみを返してください。
```

#### 💡 使い方のコツ

Build a character reference sheet first, then animate that sheet in Seedance to maintain character consistency across shots.

Use a single-portrait input to generate a full character sheet by prompting a three-panel layout (left: chest-up portrait; center: headless full-body garment front; right: headless garment back) with identical wardrobe/lighting/color grading for consistency.

Specify a seamless neutral grey studio background (#808080), clean editorial layout, and “no on-image text/labels/borders” to keep the sheet usable for downstream animation.

Add camera/quality cues like full-frame 85mm lens look, controlled shallow depth of field, soft even studio lighting, HDR, and 8k to increase detail and realism in the generated character sheet.

**作者:** [TSUBAKI](https://x.com/AI__TSUBAKI) | **ソース:** [Link](https://x.com/AI__TSUBAKI/status/2084515695530807467) | **公開日:** 2026年8月4日

`Portrait & Fashion` `Portrait` `Photoreal` `Realistic World` `Creative Asset` `Tutorial`

---

### Use Seedance’s multimodal reference input to keep a single consistent asset…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
Seedanceのマルチモーダル参照入力を使うことで、ショットをまたいで単一の一貫したアセットを維持し、特にナラティブ系のプロジェクトでは再生成の回数を減らせます。
```

#### 💡 使い方のコツ

Use Seedance’s multimodal reference input to keep a single consistent asset across shots and reduce the number of regenerations, especially for narrative projects.

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084560261617471488/img/P3vEwo_52RBAYXSk.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084560348519235759.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084560348519235759.mp4)**

**作者:** [Atul Kumar](https://x.com/atulkumarzz) | **ソース:** [Link](https://x.com/atulkumarzz/status/2084560348519235759) | **公開日:** 2026年8月4日

`Story` `Drama` `Photoreal` `Realistic World` `Tutorial`

---

### Build a reusable character identity first (AI Influencer Generator), then use…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
再利用可能なキャラクターアイデンティティをまず作成し（AI Influencer Generator）、その同じアイデンティティをすべての Seedance ショットのベース参照として使うことで、シーンをまたいでも顔や衣装の一貫性を保つ。  
顔、髪、衣装、カラーパレット、姿勢、表情の幅、シルエットを固定する詳細なアニメキャラクターシートを作成し（GPT Image 2.0 Chat to Generate）、Seedance の動画を生成する前の視覚的アンカーとして使う。  
環境、ライティング、感情のトーン、重要な象徴オブジェクトを定義する単一の「story bible」参照画像を生成し、Seedance の出力でムードと世界観の連続性を保つために使う。  
同じ主人公を使った12枚構成のストーリーボードを作成し、その中から重要な1フレームを選んで、Seedance 2.0 の Image-to-Video 用の視覚参照として使う。  
Seedance 2.0（Image to Video Ultra S）では、単に「cinematic」と指示するのではなく、カメラ、キャラクターの動き、ライティングの変化、表情、感情のテンポを時間軸に沿って明示的に制御する、タイムコード付きの movement prompt を書く。  
失敗した部分だけを修正して反復する。白紙の prompt からやり直すのではなく、Chat to Edit に戻って storyboard / keyframe を調整するか、Seedance prompt の該当するタイムコード部分だけを書き直す。  
アニメ短編全体を一度に prompt しないこと。キャラクターアイデンティティ → キャラクターシート → story bible → storyboard → continuity edit → 指示付きのタイムコードモーションによる Seedance アニメーション、というパイプラインを使う。

--- QUOTED TWEET ---
https://t.co/Fov6hep7ug

--- LINKED ARTICLE: アイデアをAIアニメに変える方法：簡単ステップバイステップガイド（＋無料プロンプト） ---
AIアニメのストーリーテリングは、かつては「たまたまうまくいく」もののように感じられた。  
美しい prompt を書いて、cinematic なシーンをお願いし、モデルがキャラクター、世界観、感情の山場、ショットの言語、そして結末までを一度に理解してくれることを期待する。うまくいくこともあった。だが多くの場合、顔が変わったり、衣装がずれたり、カメラが決定的な瞬間を逃したり、見た目は印象的でも物語としては未完成に見えたりした。  
それでも、クリエイターがAI動画で何ができるかを試している段階では、それで十分だった。  
しかし今では、クリエイターはアニメ短編、連載キャラクターページ、ビジュアルノベル、ミュージックビデオ、lore チャンネル、商品マスコット、ソーシャルネイティブな物語世界を作っている。そうした制作には、たった一度の「当たり」だけでは足りない。  
アニメのストーリーテリングにはキャラクターアイデンティティが必要だ。  
ムードが必要だ。  
連続性が必要だ。  
タイミングが必要だ。  
そして何より、繰り返し使えるワークフローが必要だ。  
それこそが APOB AI の目的だ。  
APOB AI は、単発の生成以上を求めるクリエイターのために設計された独立系AIインフルエンサープラットフォームだ。AI Influencer Generator、Chat to Generate と Chat to Edit 内の GPT Image 2.0、そして Image to Video Ultra S 内の Seedance 2.0 を組み合わせたワークフローにより、クリエイターは曖昧な prompt から構造化された制作システムへ移行できる。  
1つの動画モデルに、キャスト、アニメスタイル、シーン、演技、最終的な動きまでを一度に発明させるのではなく、まずキャラクターを作り、そのアイデンティティをストーリーボードに落とし込み、物語の明瞭さのために keyframe を編集し、最後に視覚参照とタイムコード付きの指示で Seedance 2.0 を導く。  
AIアニメの未来は、単に prompt を上手くすることではない。より良いプリプロダクションにある。

## アニメのアイデアから、繰り返し使える物語システムへ

このワークフローでは、『The Girl Who Saved the Last Starlight』という短いアニメ物語を作ると想像してみよう。設定はシンプルだ。静かな10代の少女が、真夜中過ぎの無人駅で、消えかけた青い星明かりの欠片を見つける。彼女はそれを雨に濡れた街の中で追いかけ、ささやかな勇気ある行動のたびに、その光がいっそう明るくなることを知る。  
旧来のワークフローはこうだった：  
prompt -> anime clip  
より強いワークフローはこうなる：  
AI character model -> anime character sheet -> visual story bible -> storyboard panels -> Chat to Edit continuity pass -> Seedance 2.0 video prompt -> captions, voice, sound, and iteration  
この変化が重要なのは、AIアニメを一発勝負の実験から、制御されたクリエイティブ・パイプラインへと変えるからだ。クリエイターはもう、モデルが物語を当てるのを待つ必要はない。制作パッケージを渡しているのだ。

## Step 1: AI Influencer Generator でアニメの主人公を作る

記憶に残るアニメ短編は、認識しやすい主人公から始まる。単に青い髪の女の子ではない。ありきたりなアニメ主人公でもない。cinematic anime という style tag だけを付けて、残りをモデルに埋めてもらうようなものでもない。  
観客は、最初のフレームから最後のショットまで、同じ顔、シルエット、髪型、衣装、表情の幅、感情のエネルギーを認識できるべきだ。だからこそ、このワークフローは AI Influencer Generator から始まる。  
目的は、1枚の画像として消えてしまうものではなく、複数のシーンを支えられるオリジナルのアニメキャラクターモデルを作ることだ。  
 
このキャラクターモデルがアイデンティティの基盤になる。ここから先のすべての画像は、新しい prompt に主人公を記憶から再構築させるのではなく、同じキャストから始められる。

## Step 2: Chat to Generate で制作用キャラクターシートを作る

アニメの主人公が定義できたら、次はキャラクターシートを作る。ここで役立つのが、Chat to Generate 内の GPT Image 2.0 だ。目的は、ただ美しい画像を作ることではない。後続のすべてのフレームを導ける参照を作ることだ。  
アニメのストーリーテリングでは、キャラクターシートが動画の前に顔、髪、衣装、カラーパレット、姿勢、表情の幅、シルエットを固定する。シートが弱ければ、動画モデルは推測するしかない。シートが明確なら、制作全体にアンカーができる。  
Chat to Generate Prompt: Anime Character Sheet  
 
 
これが最初の大きな解放点だ。クリエイターはもう、ランダムなアニメの女の子を求めているのではない。複数のショットを生き抜ける、特定のキャラクターを扱っているのだ。

## Step 3: Story Bible 画像を生成する

良いアニメ短編には主人公だけでなく、世界が必要だ。
```

#### 💡 使い方のコツ

Build a reusable character identity first (AI Influencer Generator), then use that same identity as the base reference for all Seedance shots to keep face/outfit consistent across scenes.  
Create a detailed anime character sheet (GPT Image 2.0 Chat to Generate) that locks face, hair, outfit, color palette, posture, expression range, and silhouette, then use it as a visual anchor before generating Seedance video.  
Generate a single “story bible” reference image that defines environment, lighting, emotional tone, and key symbolic object, and use it to keep mood and world continuity in Seedance outputs.  
Create a 12-panel storyboard with the same lead character, then pick a key storyboard frame as the Image-to-Video visual reference for Seedance 2.0.  
In Seedance 2.0 (Image to Video Ultra S), write a time-coded movement prompt that explicitly controls camera, character action, lighting changes, facial expression, and emotional pacing over time instead of only prompting “cinematic.”  
Iterate by revising only what failed: return to Chat to Edit to adjust storyboard/keyframes or rewrite the specific time-coded section of the Seedance prompt rather than restarting from a blank prompt.  
Don’t prompt the entire anime short in one pass; use a pipeline: character identity → character sheet → story bible → storyboard → continuity edit → Seedance animation with directed, time-coded motion.

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084589619757318144/img/gfc8Dm7GDKNPpUdF.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084589885432955162.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084589885432955162.mp4)**

**作者:** [Nyla Carter](https://x.com/TheAmmadFiles) | **ソース:** [Link](https://x.com/TheAmmadFiles/status/2084589885432955162) | **公開日:** 2026年8月4日

`Portrait & Fashion` `Influencer` `Anime 2D` `Realistic World` `Creative Asset` `Tutorial`

---

### Use Seedance 2.0 inside Image to Video Ultra S with a storyboard panel or…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
Seedance 2.0 は、テキストだけのプロンプトから始めるのではなく、Image to Video Ultra S 内で、ストーリーボードパネルや選択したキーフレームを視覚的な参照として使ってください。  
「cinematic」と言うだけではなく、シーンが時間とともにどう変化するかを指定する、タイムコード付きの Seedance 2.0 movement prompt を書きましょう（カメラの動き、キャラクターのアクション、ライティングの変化、表情、感情のテンポなどを含める）。  
Seedance 1回でアニメ短編全体をプロンプトしないでください。まずキャラクターのアイデンティティと世界観を作り、その後にストーリーボードを作成し、最後に準備したキーフレームを Seedance 2.0 でアニメーション化します。  
Seedance 2.0 の出力後は、失敗した部分だけを修正して反復しましょう。Chat to Edit に戻ってストーリーボード／キーフレームを調整するか、Seedance プロンプトのタイムコード付きセクションだけを書き直し、最初からやり直さないようにします。

--- 引用ツイート ---
https://t.co/Fov6hep7ug

--- リンク記事: あなたのアイデアを AI アニメに変える方法: 簡単ステップバイステップガイド（無料プロンプト付き） ---
AI アニメのストーリーテリングは、かつては運任せの偶然の産物のように感じられました。  
美しいプロンプトを書き、cinematic なシーンをお願いして、モデルがキャラクター、世界観、感情の山場、ショットの言語、そして結末まで一度に理解してくれることを期待する。うまくいくこともありました。ですが多くの場合、顔が変わったり、衣装がずれたり、カメラが決定的瞬間を捉え損ねたり、見た目は印象的でも物語としては未完成に感じられたりしました。  
それでも、当時はクリエイターが AI 動画で何ができるかを試している段階だったので、それで十分でした。  

しかし今では、クリエイターはアニメ短編、連載型のキャラクターページ、ビジュアルノベル、ミュージックビデオ、ロア系チャンネル、商品マスコット、そしてソーシャルネイティブな物語世界を作っています。そうした制作には、たまたまうまくいく1回の生成だけでは足りません。  
アニメのストーリーテリングにはキャラクターのアイデンティティが必要です。  
ムードが必要です。  
継続性が必要です。  
タイミングが必要です。  
そして何より、繰り返し使えるワークフローが必要です。  
それこそが APOB AI の目的です。  

APOB AI は、単発の生成以上を求めるクリエイターのために設計された独立系 AI インフルエンサープラットフォームです。AI Influencer Generator、Chat to Generate と Chat to Edit 内の GPT Image 2.0、そして Image to Video Ultra S 内の Seedance 2.0 を組み合わせたワークフローにより、クリエイターは曖昧なプロンプトから構造化された制作システムへ移行できます。  
1つの動画モデルに、キャスト、アニメスタイル、シーン、演技、最終的な動きまでを一度に発明させるのではなく、まずキャラクターを作り、そのアイデンティティをストーリーボードに落とし込み、キーフレームを編集して物語の明瞭さを高め、最後に視覚的参照とタイムコード付きの指示で Seedance 2.0 を導くのです。  
AI アニメの未来は、単にプロンプトが上手くなることではありません。より良いプリプロダクションです。  

## アニメのアイデアを、再現可能なストーリーシステムへ

このワークフローでは、『The Girl Who Saved the Last Starlight』という短いアニメストーリーを作ると想像してください。設定はシンプルです。静かな10代の少女が、真夜中過ぎの無人駅で、消えかけた青い星明かりの欠片を見つけます。彼女はそれを雨に濡れた街の中で追いかけ、ささやかな勇気ある行動のたびに、その光がより明るくなることを知ります。  
旧来のワークフローはこうでした。  
prompt -> anime clip  
より強力なワークフローはこうなります。  
AI character model -> anime character sheet -> visual story bible -> storyboard panels -> Chat to Edit continuity pass -> Seedance 2.0 video prompt -> captions, voice, sound, and iteration  
この変化が重要なのは、AI アニメを一発勝負の実験から、制御されたクリエイティブなパイプラインへ変えるからです。クリエイターはもう、モデルが物語を当てるのを待つ必要はありません。制作パッケージをモデルに渡しているのです。  

## Step 1: AI Influencer Generator でアニメの主人公を作る

印象に残るアニメ短編は、認識しやすい主人公から始まります。ただ青い髪の女の子ではありません。ただの一般的なアニメ主人公でもありません。cinematic anime というスタイルタグだけを付けて、残りをモデルに埋めてもらうわけでもありません。  
観客は、最初のフレームから最後のショットまで、同じ顔、同じシルエット、同じ髪型、同じ衣装、同じ表情の幅、同じ感情のエネルギーを認識できるべきです。だからこそ、このワークフローは AI Influencer Generator から始まります。  
目的は、1枚の画像ではなく、複数のシーンを支えられるオリジナルのアニメキャラクターモデルを作ることです。  

このキャラクターモデルがアイデンティティの基盤になります。この先のすべての画像は、新しいプロンプトに主人公を記憶から再構築させるのではなく、同じキャストから始められます。  

## Step 2: Chat to Generate で制作向けキャラクターシートを作る

アニメの主人公が定義できたら、次はキャラクターシートを作ります。ここで役立つのが、Chat to Generate 内の GPT Image 2.0 です。目的は、美しい画像を作ることだけではありません。後のすべてのフレームを導ける参照を作ることです。  
アニメのストーリーテリングでは、キャラクターシートが動画の前に顔、髪、衣装、カラーパレット、姿勢、表情の幅、シルエットを固定します。シートが弱いと、動画モデルは推測するしかありません。シートが明確なら、制作全体にアンカーができます。  
Chat to Generate Prompt: Anime Character Sheet  

これが最初の大きな突破口です。クリエイターはもう、ランダムなアニメの女の子を求めているのではありません。複数のショットを生き抜ける、特定のキャラクターを扱っているのです。  

## Step 3: ストーリービルド画像を生成する

良いアニメ短編には、主人公だけでは足りません。世界観が必要です。ストーリーボードを作る前に、環境、ライティング、感情のトーン、象徴的なオブジェクトを捉えた1枚のビジュアルな story bible 画像を作成しましょう。この例では、象徴的なオブジェクトは消えかけた青い星明かりです。  
Chat to Generate Prompt: Anime Story Bible  

この画像は感情の北極星になります。後のすべての生成に対して、この作品が何を含むべきかだけでなく、どんな感触であるべきかを伝えてくれます。
```

#### 💡 使い方のコツ

Use Seedance 2.0 inside Image to Video Ultra S with a storyboard panel or chosen keyframe as the visual reference instead of starting from text-only prompts.  
Write a time-coded Seedance 2.0 movement prompt that specifies how the scene changes over time (camera movement, character action, lighting shifts, facial expression, and emotional pacing) rather than only saying “cinematic.”  
Don’t prompt an entire anime short in one Seedance run; build character identity and world first, then storyboard, then animate the prepared keyframes in Seedance 2.0.  
After a Seedance 2.0 output, iterate by revising only what failed: return to Chat to Edit to adjust the storyboard/keyframe or rewrite just the time-coded section of the Seedance prompt instead of restarting from scratch.

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084611384940380161/img/raH8DzxndXB3lW7j.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084611422441660859.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084611422441660859.mp4)**

**作者:** [AlphaEcho](https://x.com/Alphaecho207) | **ソース:** [Link](https://x.com/Alphaecho207/status/2084611422441660859) | **公開日:** 2026年8月4日

`Scenery & Spectacle` `Worldbuilding` `Photoreal` `Realistic World` `Tutorial`

---

### 手書きっぽい雰囲気を出したいなら、あえてガビガビに粗いリファレンス画像を作って渡し、Seedanceの補正で手描き感を増やす

![日本語](https://img.shields.io/badge/lang-日本語-green)

#### 📝 プロンプト

```
手書きっぽい雰囲気を出したいなら、あえてガビガビに粗いリファレンス画像を作って渡し、Seedanceの補正で手描き感を増やす  
プロンプトに連続して生成される線、水彩を入れて、滲みや不安定な線を維持し（外すと2.5D/3Dっぽいモーションが増えるため線と色を安定させない）  
プロンプトに線と色が遅れて追随すると追記して、連続線/水彩の効果を補強する  
極端なアクション時にはキャラクターの形状を崩すことと指示して、スピード感のある激しい動きを作る  
リファレンスとしてキャラの配色だけが並んだぐちゃぐちゃな画像を渡し、映像的なスピード感のある極端な動きを引き出す  
Higgsfieldの無料枠でSeedance 2.0の4K生成を使い、TtoV（参照画像なし）でも高品質に仕上げる
```

#### 💡 使い方のコツ

手書きっぽい雰囲気を出したいなら、あえてガビガビに粗いリファレンス画像を作って渡し、Seedanceの補正で手描き感を増やす  
プロンプトに連続して生成される線、水彩を入れて、滲みや不安定な線を維持し（外すと2.5D/3Dっぽいモーションが増えるため線と色を安定させない）  
プロンプトに線と色が遅れて追随すると追記して、連続線/水彩の効果を補強する  
極端なアクション時にはキャラクターの形状を崩すことと指示して、スピード感のある激しい動きを作る  
リファレンスとしてキャラの配色だけが並んだぐちゃぐちゃな画像を渡し、映像的なスピード感のある極端な動きを引き出す  
Higgsfieldの無料枠でSeedance 2.0の4K生成を使い、TtoV（参照画像なし）でも高品質に仕上げる

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084613735428329472/img/yLd51ihDYf9d-Waf.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084613775723053099.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084613775723053099.mp4)**

**作者:** [かえ〜る](https://x.com/kaerueka220974) | **ソース:** [Link](https://x.com/kaerueka220974/status/2084613775723053099) | **公開日:** 2026年8月4日

`Action` `Chase` `Hand-drawn` `Realistic World` `Tutorial`

---

### Build a reusable character identity first (same…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
まず、再利用可能なキャラクターのアイデンティティを作成します（同じ顔／シルエット／髪型／衣装）。その後は、毎回新しい主人公を再プロンプトするのではなく、それを以降のすべての Seedance 生成のアンカーとして使います。  
動画の前に詳細なキャラクターシートを作成し（顔、髪、衣装、カラーパレット、姿勢、表情の幅を固定）、Seedance での顔／衣装のドリフトを防ぐための参照として使用します。  
環境、ライティング、感情のトーン、重要な象徴的オブジェクトを定義する単一の「story bible」画像を生成し、それを Seedance の各シーンにおける視覚的な北極星として維持します。  
物語をパネルに分けてストーリーボード化し（例：12パネル構成）、その中から重要な1フレームを Seedance 2.0 の Image-to-Video 用ビジュアル参照として選びます。  
Seedance 2.0（Image to Video Ultra S）では、単に「cinematic」と書くだけでなく、カメラの動き、キャラクターのアクション、ライティングの変化、表情の移り変わり、時間経過に伴う感情のペース配分を指定する、タイムコード付きの movement prompt を書きます。  
監督のように反復します。Seedance の出力を連続性の観点で確認し（キャラクターがシートと一致しているか、小道具の整合性、感情のビートが明確か、カメラが物語を支えているか）、うまくいっていないタイムコード部分だけを修正するか、重要なキーフレームを強化して、最初からやり直さないようにします。  
アニメ短編全体を一度にプロンプトしないでください。キャラクター → 世界観 → ストーリーボード → 連続性の修正 → 方向性を持たせた Seedance アニメーション、というパイプラインを使います。

--- QUOTED TWEET ---
https://t.co/Fov6hep7ug

--- LINKED ARTICLE: Turn Your Ideas into AI Anime: An Easy Step-by-Step Guide (+ Free Prompts) ---
AI アニメのストーリーテリングは、かつては運任せの偶然の産物のように感じられていました。  
美しい prompt を書き、cinematic なシーンをお願いし、モデルがキャラクター、世界観、感情のビート、ショットの言語、そして結末までを一度に理解してくれることを期待する。うまくいくこともありました。ですが多くの場合、顔が変わったり、衣装がずれたり、カメラがその瞬間を捉え損ねたり、見た目は印象的でも物語としては未完成に感じられたりしました。  
それで十分だったのは、クリエイターが AI 動画で何ができるかを試している段階だけでした。  
しかし今では、クリエイターはアニメ短編、連載型のキャラクターページ、ビジュアルノベル、ミュージックビデオ、lore チャンネル、商品マスコット、ソーシャルネイティブな物語世界を制作しています。そうした制作には、たった一度の幸運な生成だけでは足りません。  
アニメのストーリーテリングにはキャラクターのアイデンティティが必要です。  
ムードが必要です。  
連続性が必要です。  
タイミングが必要です。  
そして何より、再現可能なワークフローが必要です。  
それこそが APOB AI の目的です。  
APOB AI は、単発の生成以上を求めるクリエイターのために設計された、独立型の AI インフルエンサープラットフォームです。AI Influencer Generator、Chat to Generate と Chat to Edit 内の GPT Image 2.0、そして Image to Video Ultra S 内の Seedance 2.0 を組み合わせたワークフローにより、クリエイターは曖昧なプロンプトから構造化された制作システムへ移行できます。  
1つの動画モデルに、キャスト、アニメスタイル、シーン、演技、最終的な動きまでを一度に発明させるのではなく、まずキャラクターを作り、そのアイデンティティをストーリーボードに落とし込み、キーフレームを物語の明瞭さのために編集し、そのうえで Seedance 2.0 にビジュアル参照とタイムコード付きの指示を与えることができます。  
AI アニメの未来は、単に prompt を上手くすることではありません。より良いプリプロダクションです。

## アニメのアイデアを再現可能なストーリーシステムへ

このワークフローでは、『The Girl Who Saved the Last Starlight』という短いアニメ物語を作ると想像してください。設定はシンプルです。静かな10代の少女が、真夜中過ぎの無人駅で、消えかけた青い星明かりの欠片を見つけます。彼女はそれを追って雨に濡れた街を進み、小さな勇気ある行動のたびに、その光がより明るくなることを知ります。  
従来のワークフローはこうでした：  
prompt -> anime clip  
より強いワークフローはこうなります：  
AI character model -> anime character sheet -> visual story bible -> storyboard panels -> Chat to Edit continuity pass -> Seedance 2.0 video prompt -> captions, voice, sound, and iteration  
この変化が重要なのは、AI アニメを一発勝負の実験から、制御されたクリエイティブなパイプラインへと変えるからです。クリエイターはもはや、モデルが物語を推測してくれるのを待つ必要はありません。制作パッケージをモデルに渡しているのです。

## Step 1: AI Influencer Generator でアニメの主人公を作る

記憶に残るアニメ短編は、認識しやすい主人公から始まります。ただの青髪の少女ではありません。ただの一般的なアニメ主人公でもありません。「cinematic anime」とだけ書いて、残りをモデルに埋めてもらうような style tag でもありません。  
観客は、最初のフレームから最後のショットまで、同じ顔、シルエット、髪型、衣装、表情の幅、感情のエネルギーを認識できるべきです。だからこそ、このワークフローは AI Influencer Generator から始まります。  
目的は、1枚の画像ではなく、複数のシーンを支えられるオリジナルのアニメキャラクターモデルを作ることです。  
 
このキャラクターモデルがアイデンティティの基盤になります。この先のすべての画像は、毎回新しい prompt で主人公を記憶から再構築させるのではなく、同じキャストを起点に始められます。

## Step 2: Chat to Generate で制作用キャラクターシートを作る

アニメの主人公が定義できたら、次はキャラクターシートを作成します。ここで役立つのが、Chat to Generate 内の GPT Image 2.0 です。目的は、美しい画像を作ることだけではありません。後のすべてのフレームを導く参照を作ることです。  
アニメのストーリーテリングでは、キャラクターシートが動画の前に顔、髪、衣装、カラーパレット、姿勢、表情の幅、シルエットを固定します。シートが弱ければ、動画モデルは推測するしかありません。シートが明確なら、制作全体にアンカーができます。  
Chat to Generate Prompt: Anime Character Sheet  
 
 
これが最初の大きな解放点です。クリエイターはもはや、ランダムなアニメ少女を求めているのではありません。複数のショットを生き抜ける、特定のキャラクターを扱っているのです。
```

#### 💡 使い方のコツ

Build a reusable character identity first (same face/silhouette/hairstyle/costume), then use that as the anchor for all later Seedance generations instead of re-prompting a new protagonist each time.  
Create a detailed character sheet before video (lock face, hair, outfit, color palette, posture, expression range) and use it as a reference to prevent face/outfit drift in Seedance.  
Generate a single “story bible” image that defines environment, lighting, emotional tone, and key symbolic object, then keep it as the visual north star for Seedance scenes.  
Storyboard the story into panels (e.g., a 12-panel sequence) and pick a key storyboard frame as the Image-to-Video visual reference for Seedance 2.0.  
In Seedance 2.0 (Image to Video Ultra S), write a time-coded movement prompt that specifies camera movement, character action, lighting changes, expression shifts, and emotional pacing over time rather than only saying “cinematic.”  
Iterate like a director: review the Seedance output for continuity (character match to sheet, prop consistency, clear emotional beat, camera supports story), then revise only the failing time-coded section or strengthen a keyframe instead of restarting from scratch.  
Don’t prompt the entire anime short in one pass; use a pipeline of character → world → storyboard → continuity edits → Seedance animation with direction.

**作者:** [Wesley](https://x.com/Ambani_Wessley) | **ソース:** [Link](https://x.com/Ambani_Wessley/status/2084621627011355061) | **公開日:** 2026年8月4日

`Story` `Talk` `Anime 2D` `Realistic World` `Creative Asset` `Tutorial`

---

### Use Seedance 2.0 to turn a generated image into a video.

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
Seedance 2.0 を使って、生成画像を動画に変換します。  
最良の結果を得るには、アニメーション化する際に同じ参照画像を使用して、スタイルとアイデンティティを維持してください。  
動きは控えめで滑らかにし、カートゥーンではなく生きたイラストのように感じられるようにしてください。  
ゆっくりとしたシネマティックなカメラワーク（ごく穏やかな dolly-in、わずかな parallax、最小限の drift）を指定し、急な pan、強い zoom、handheld shake、cut、複数ショットの編集は明確に禁止してください。  
自然な micro-movements（ゆっくりとした説得力のある歩行サイクル、穏やかな腕の振り、さりげない頭の向きの変化、時折のまばたき、わずかな呼吸、小さな体重移動、自然な布の動き）を prompt し、誇張されたカートゥーンアニメーションは避けてください。  
木々が揺れ、葉がひらひら舞い、雲が流れ、塵の粒子が漂うといった控えめな環境の動きを加えつつ、テクスチャは安定させ、何も完全に静止していないようにしてください。  
foreground / midground / background の分離と、イラストを歪めない穏やかな parallax によって奥行きを維持してください。  
以下の指示で style preservation を徹底してください: 線の質、カラーパレット、紙の質感や不完全さを維持すること。morphing は避けること。新しいオブジェクトを生成したり、被写体を再デザインしたりしないこと。  
滑らかな 24 fps の film-like motion と高品質な frame interpolation を要求し、jitter、warping、stretching、melting、flicker、重複した手足、顔の morphing、消えるオブジェクトは明確に禁止してください。
```

#### 💡 使い方のコツ

Use Seedance 2.0 to turn a generated image into a video.  
For best results, use the same reference image when animating to preserve style and identity.  
Keep motion subtle and smooth to make it feel like a living illustration rather than a cartoon.  
Specify slow cinematic camera movement (very gentle dolly-in, tiny parallax, minimal drift) and explicitly forbid sudden pans, aggressive zooms, handheld shake, cuts, and multi-shot edits.  
Prompt for natural micro-movements (slow believable walk cycles, gentle arm swing, subtle head turns, occasional blinking, slight breathing, small weight shifts, natural cloth motion) and avoid exaggerated cartoon animation.  
Add subtle environmental motion (trees sway, leaves flutter, clouds drift, dust particles float) while keeping textures stable and ensuring nothing is perfectly static.  
Maintain depth with foreground/midground/background separation and gentle parallax without distorting the illustration.  
Enforce style preservation by instructing: keep line quality, color palette, paper texture/imperfections; avoid morphing; don’t generate new objects or redesign subjects.  
Request smooth 24 fps film-like motion with high-quality frame interpolation and explicitly forbid jitter, warping, stretching, melting, flicker, duplicated limbs, morphing faces, and disappearing objects.

**作者:** [Harshit](https://x.com/oiharshit) | **ソース:** [Link](https://x.com/oiharshit/status/2084626839193244039) | **公開日:** 2026年8月4日

`Portrait & Fashion` `Portrait` `Hand-drawn` `Realistic World` `Tutorial`

---

### Use Blender-blocked scenes as a reference and run the same reference + prompt…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
Blenderでブロックアウトしたシーンを参照として使用し、同じ reference + prompt を Seedance-2.0 に通して、意図した framing と composition にどれだけ忠実に従っているかを評価します。
```

#### 💡 使い方のコツ

Use Blender-blocked scenes as a reference and run the same reference + prompt through Seedance-2.0 to evaluate how closely it adheres to your intended framing and composition.

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084641283361144832/img/YE-P8Pj83K80VOan.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084641775004889458.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084641775004889458.mp4)**

**作者:** [stevibe](https://x.com/stevibe) | **ソース:** [Link](https://x.com/stevibe/status/2084641775004889458) | **公開日:** 2026年8月4日

`Scenery & Spectacle` `Worldbuilding` `Photoreal` `Realistic World` `Tutorial`

---

### Lock the pilot’s identity first by fixing helmet design, visor reflections, and…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
まずパイロットのアイデンティティを固定すること。ヘルメットのデザイン、バイザーの反射、スーツのディテールを揃えて、どのカットでも同じ顔が保たれるようにする。

テックは地に足のついたものにすること（リアルな計器パネル、実用的なフライトスーツ、説得力のある物理挙動）。そうすることで「本物のハードウェア」のような信頼感を維持できる。

バイザーの曇りやキャノピー／ガラスの反射は意図的に使い、顔を少しだけ見えにくくする。そうすると、カットをまたいでもアイデンティティの一貫性を保ちやすくなる。

外の世界は一度だけ定義すること（地球の曲率／色、時刻、光の方向）。そして毎回書き直すのではなく、すべてのショットでまったく同じ説明を使い回す。

ショットはスケールが大きくなる順に並べること。まず地上レベルの編隊、次にコックピットのクローズアップ、最後に軌道上からの全景。そうすることで、リセットせずにスケール感を拡張できる。

コックピットの計器照明は、すべてのコックピットショットにおける唯一の固定された室内光源として維持すること。外の景色が変わっても、そこは変えない。

--- QUOTED TWEET ---
宇宙戦闘ものの監督が、コックピット映像を誰が撮ったのか確認するために上映を止めた

私は彼に、文脈なしで4分の映像を送った。ファイル1つと、たった1行だけ。「これを撮影した部隊を教えてくれ」

宇宙人も、ライトセーバーも、ファンタジー技術もない。ただ、曇ったバイザー越しのパイロットの顔が、コックピットの計器に照らされている。夜空を背景に、ジェット機が密集編隊を組んでいる。コックピット視点が引いていき、キャノピー越しに地球の曲線が見え、航跡雲がありえない速度で横切っていく。スペースオペラではなく、本物の軍用ハードウェアのように感じられるほど地に足がついている。

彼は、答えを信じる前に2回も聞き返した。「改造機体と第二班なしで、こんなコックピット内部を撮るやつなんていない。これ、誰が撮影許可を出したんだ？」

誰も出していない。1人だ。Seedance 2.0。航空撮影班も、改造機体も、第二班もない。

こういうシーケンスには通常、実写の航空撮影班とコックピット用リグの改造が必要で、その後に地球の映像を加えるVFX工程が入る。編集が始まる前だけで、軽く100万〜200万ドルはかかる。これは1本のprompt sequenceと月額サブスクリプションだけで動いた。

その裏側のワークフローはこれだ

1. まずパイロットのアイデンティティを固定する - ヘルメット、バイザーの反射、スーツのディテール。コックピット、編隊、軌道上のショットをまたいでも、同じ顔が保たれなければならない
2. テクノロジーはファンタジーではなく地に足のついたものにする - 本物らしく見える計器パネル、実用的なフライトスーツ、SFではなく軍用ハードウェアとして読める物理挙動
3. バイザーの曇りとガラス反射を意図的に使う - 顔が少し隠れているほうが、完全に露出しているよりもカット間で安定させやすい
4. 外の世界は一度だけ書く - 地球の正確な曲率と色、時刻、光の方向。同じ説明を毎回書き直さず、すべてのショットに引き継ぐ
5. ショットはスケール順に並べる - まず地上レベルの編隊、次にコックピットのクローズアップ、最後に軌道上からの全景。スケールがリセットされず、どんどん広がっていく
6. コックピットの計器照明は、すべてのインテリアショットで唯一の固定光源として維持する。外の景色がキャノピー越しに完全に変わっても、そこは変えない

なぜこれが機能するのか
- 顔の半分をバイザーで覆うほうが、完全に見えている状態よりもカット間で安定させやすい
- 外の世界を一度だけ書くことで、すべてのショットが同じ空、同じ光、同じ地球を共有でき、説明を繰り返す必要がない
- コックピット内の光源を1つに固定すると、外の景色が変わり続けても連続性を保てる
- ショットごとにスケールを大きくしていくことで、単に印象的なフレームを並べるのではなく、本当のスケール感を構築できる

使用例:
⁃ ファンタジー要素のない、地に足のついたミリタリーSF
⁃ 外景が変化しても一貫性を保つ必要があるコックピット／車両内シーケンス
⁃ 実際に企画を通すには高すぎるアイデアのための、コンセプト実証用トレーラー
⁃ スペースオペラ的な見せ場ではなく、「real hardware」の信頼感を目指すあらゆるプロジェクト

監督は、同じパイロットが次は地上レベルのシーケンスでも生き残れるのかと尋ねた。

それは、まだ彼に見せていない部分だ。
```

#### 💡 使い方のコツ

Lock the pilot’s identity first by fixing helmet design, visor reflections, and suit details so the same face survives every cut.

Keep the tech grounded (realistic instrument panels, practical flight suits, believable physics) to maintain “real hardware” believability.

Use visor fog and canopy/glass reflections intentionally to slightly obscure the face, making identity consistency easier across cuts.

Define the exterior world once (Earth curve/color, time of day, light direction) and reuse the exact same description in every shot instead of rewriting it.

Sequence shots by increasing scale—start with ground-level formation, then cockpit close-ups, then the full orbital reveal—so scope grows without resetting.

Keep cockpit instrument lighting as the single constant interior light source across all cockpit shots, even when the exterior view changes.

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084645566454091776/img/Hokf1efAvhBn7Avt.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084645671718551708.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084645671718551708.mp4)**

**作者:** [Primee32](https://x.com/Primee32) | **ソース:** [Link](https://x.com/Primee32/status/2084645671718551708) | **公開日:** 2026年8月4日

`Auto` `POV Drive` `Photoreal` `Realistic World` `Tutorial` `POV` `VFX`

---

### Use commercials as a structured benchmark in Seedance 2.0 to stress-test…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
Seedance 2.0 では、コマーシャルを構造化されたベンチマークとして活用し、キャラクターの一貫性、製品の一貫性、リアリズム（水／泡）、滑らかなカメラモーション、ストーリーテリング、そして複数シーンにわたる音声同期をストレステストします。

アップロードされた参照画像をそのまま正確に使用するよう Seedance に指示し、動画全体を通して、顔、製品、ロゴ、パッケージ、タイポグラフィ、照明、色、環境を再デザイン、スタイライズ、置換、トリミング、歪曲しないようにして、アイデンティティとブランドの一貫性を固定します。

プロンプトには明確なブランド保護ルールを追加し（例：「DETTOL は必ず T を 2 つ入れて綴ること」「元のタイポグラフィを再生成／誤記／非表示にしないこと」）、ロゴやテキストのドリフトを防ぎます。

商用向けのスタイルブロック（ドキュメンタリー風のコマーシャル写真、フォトリアルな肌の質感／手、自然な照明／色、柔らかな反射／影、最小限のカラーグレーディング、超高精細／8K）を指定し、さらに「Avoid」リスト（過度な彩度、強すぎるコントラスト、美肌フィルター、プラスチックのような肌、歪んだ手／指、人工的な照明、過度なシャープ化、未来的エフェクト）を含めて、よくあるアーティファクトを減らします。

Seedance で具体的な出力条件（アスペクト比 16:9、尺 15 秒）を設定し、動画をタイムコード付きのシーン（例：0–3 秒、3–6 秒、6–10 秒、10–13 秒、13–15 秒）に分割し、ショットタイプ（ワイドショット、極端なクローズアップ）とカメラ移動（ゆっくりとした押し込み）を指定して、テンポと連続性をコントロールします。

画面上のタイポグラフィについては、素材／形成（泡、しずく、バブル）、配置（右上／右下）、アニメーション（滑らかで穏やかなフェードイン）、厳密なレイアウトルール（タイポグラフィはフレームの 15% 以下、顔、製品、鏡、泡に重ねない／覆わない）を定義し、製品の可読性を保ちます。

シーン単位の物理的な連続性制約（例：「すすいだ後、高い位置でのハイタッチの前に、手に石けん／泡／バブル／水が一切残っていないこと」）を使って、ショット間の状態変化の不整合を防ぎます。

最終ショットでは、パッケージに向かってゆっくりカメラを寄せつつ、キャラクターは背景にやわらかく見える程度に留め、製品を主役に保ち、製品／ロゴをテキストが遮らないよう明確に禁止します。

シーンごと／単語ごとに特定の VO を割り当てて音声を同期させます（例：「Care.」「Protect.」「Trust.」に続いて「Dettol. Trusted protection every day.」をシーンのタイムスタンプに合わせる）。

--- THREAD CONTINUATION ---
[Thread 1] DETTOL — 毎日を守る

アップロードされた参照画像をすべて、そのまま正確に使用してください。

動画全体を通して完全な一貫性を維持してください。

母親の顔、娘の顔、DETTOL の石けん、DETTOL のパッケージ、バスルーム、照明、色、環境を再デザイン、スタイライズ、置換、簡略化、変更しないでください。

元の DETTOL ロゴ、色、パッケージ、タイポグラフィは、動画全体を通して完全に変更せず維持してください。

DETTOL という単語は、必ず T を 2 つ入れて綴ってください。

元の DETTOL のタイポグラフィを削除、置換、トリミング、歪曲、誤記、非表示、再生成しないでください。

コマーシャルは、温かく、自然で、信頼でき、リアルで、家族向けに感じられるものでなければなりません。

スタイル:

• ドキュメンタリー風のコマーシャル写真
• リアルな肌の質感
• リアルな手と指
• 自然な照明
• 自然な色
• 柔らかな反射
• 柔らかな影
• 最小限のカラーグレーディング
• フォトリアルな見た目
• 超高精細
• 8K 品質

Avoid:

• 過度な彩度
• 強すぎるコントラスト
• 美肌フィルター
• プラスチックのような肌
• 不自然な反射
• 歪んだ指
• 歪んだ手
• 人工的な照明
• 過度なシャープ化
• 未来的エフェクト

アスペクト比: 16:9

尺: 15 秒

━━━━━━━━━━━━━━━━━━

SCENE 1 (0–3 seconds)

モダンな家族向けバスルームのワイドショット。

窓から柔らかな自然光が差し込む。

娘がバスルームに入ってきて、すぐに自分の手を見下ろす。

手は外で遊んで汚れているように見える。

彼女は少し悲しそうで、心配そうで、不安げに見える。

母親はその表情に気づき、そっと娘の肩に安心させるように手を置く。

母親は温かく微笑む。

娘は母親を見上げる。

雰囲気は温かく、安全で、自然で、本物らしく感じられる。

CARE という単語が、柔らかな白い泡から徐々に形作られる。

タイポグラフィ指示:

• 柔らかな白い文字
• 丸みのあるエッジ
• 半透明の見た目
• 滑らかなアニメーション
• 穏やかなフェードイン効果
• 清潔感のある見た目

その単語はフレームの右上に表示される。

VO:

"Care."

━━━━━━━━━━━━━━━━━━

SCENE 2 (3–6 seconds)

DETTOL の石けんと DETTOL パッケージの極端なクローズアップショット。

石けんには小さな水滴が付いている。

元の DETTOL ロゴは完璧に見える状態のまま保たれる。

白い泡がゆっくりと製品の周りに形成される。

カメラはパッケージに向かってゆっくり移動する。

PROTECT という単語が、水滴と石けんの泡から徐々に形作られる。

タイポグラフィ指示:

• 深いグリーンの色
• 太字の大文字
• 滑らかなエッジ
• わずかに光沢のある見た目
• 柔らかなハイライト
• 清潔感のある商用的な見た目

その単語はフレームの右上に表示される。

VO:

"Protect."

━━━━━━━━━━━━━━━━━━

SCENE 3 (6–10 seconds)

母親が蛇口をひねる。

水が自然に彼女の手を流れる。

彼女は DETTOL の石けんを手に取る。

両手の間で石けんをやさしくこする。

白い泡が徐々に形成される。

母親は娘の手をやさしく洗う。

カメラは、泡が子どもの手を覆っている様子をはっきりと捉える。

母親は温かく微笑む。

娘も徐々に笑顔になり始める。

水滴が自然にシンクへ落ちる。

━━━━━━━━━━━━━━━━━━

SCENE 4 (10–13
```

#### 💡 使い方のコツ

Use commercials as a structured benchmark in Seedance 2.0 to stress-test character consistency, product consistency, realism (water/foam), smooth camera motion, storytelling, and voice sync across multiple scenes.

Lock identity and brand consistency by instructing Seedance to use uploaded reference images exactly as provided and to never redesign/stylize/replace/crop/distort faces, product, logo, packaging, typography, lighting, colors, or environment across the entire video.

Add explicit brand-guardrails in the prompt (e.g., “DETTOL must always be spelled with two Ts” and “never recreate/misspell/hide the original typography”) to prevent logo/text drift.

Specify a commercial-ready style block (documentary-style commercial photography, photorealistic skin texture/hands, natural lighting/colors, soft reflections/shadows, minimal color grading, ultra-detailed/8K) and include an “Avoid” list (oversaturation, excessive contrast, beauty filters, plastic skin, distorted hands/fingers, artificial lighting, excessive sharpening, futuristic effects) to reduce common artifacts.

Set concrete output constraints in Seedance (aspect ratio 16:9, duration 15 seconds) and break the video into time-coded scenes (e.g., 0–3s, 3–6s, 6–10s, 10–13s, 13–15s) with shot types (wide shot, extreme close-up) and camera moves (slow push-in) to control pacing and continuity.

For on-screen typography, define material/formation (foam, droplets, bubbles), placement (upper-right/lower-right), animation (smooth, gentle fade-in), and strict layout rules (typography ≤15% of frame; never overlap/cover faces, product, mirror, foam) to keep the product readable.

Use scene-level physical continuity constraints (e.g., “after rinsing, no soap/foam/bubbles/water remain on hands before the high five”) to prevent inconsistent state changes between shots.

Keep the product as the primary focus in the final shot by prompting a slow camera move toward the package while leaving characters softly visible in the background, and explicitly forbid any text from blocking the product/logo.

Synchronize voice-over by assigning a specific VO line per scene/word (e.g., “Care.” “Protect.” “Trust.” then “Dettol. Trusted protection every day.”) aligned to the scene timestamps.

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084645738751852544/img/xEeJfFJsB8pdJ98n.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084645811221123118.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084645811221123118.mp4)**

**作者:** [FATHELA ESQ](https://x.com/AmControo) | **ソース:** [Link](https://x.com/AmControo/status/2084645811221123118) | **公開日:** 2026年8月4日

`Product Ad` `Beauty` `Photoreal` `Realistic World` `Tutorial`

---

### Combine camera tracking movements and character blocking into a single prompt…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
カメラのトラッキング移動とキャラクターのブロッキングを、別々のパスではなく1つのプロンプトにまとめることで、シネマティックな雰囲気を保ちながら生成コストを抑える。

--- 引用ツイート ---
今ちょっと悲しい気分です。というのも、映画を完成させる前にこれがもっと早くリリースされていたらよかったのに、と思ってしまうからです。

自分の映画で使った同じプロンプトを、seednaceでは10回以上拒否されて諦めたのですが、@Hailuo_AI の MiniMax H3 で試したら、ついにうまくいきました。しかも、こちらのほうが安かったです。

でも、ようやく出てきてくれてよかったですし、これからはもっと頻繁に使うツールのひとつになりそうです。

#MiniMaxH3
---
```

#### 💡 使い方のコツ

Combine camera tracking movements and character blocking into a single prompt (instead of separate passes) to reduce generation cost while keeping a cinematic feel.

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084648879866155008/img/e0_IAYf-EGeHzKcG.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084649171512942858.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084649171512942858.mp4)**

**作者:** [chukwuDEJI | Motion + Ai](https://x.com/DejiBigBag) | **ソース:** [Link](https://x.com/DejiBigBag/status/2084649171512942858) | **公開日:** 2026年8月4日

`Scenery & Spectacle` `Worldbuilding` `Photoreal` `Realistic World` `Tutorial`

---

### Film the real pantomime on your phone (jump over the edge, sit down, laugh) and…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
スマホで実際のパントマイム（端を飛び越える、座る、笑う）を撮影し、それを Seedance のモーション参照として使う。  
プールの水をモンスター（例：絡み合った歯だらけのワーム）に置き換えたキーフレームの静止画を Nano Banana または Midjourney で作成し、それを Seedance の環境参照として使う。  
Seedance Character Lock を使って3人の顔と衣装を固定し、ショット間でアイデンティティや服装がずれないようにする。  
実際の身体動作の参照とモンスター環境のキーフレーム／参照をブレンドして Seedance 2.0 で生成し、合成シーンに命を吹き込む。  
何かを生成する前に、アイデアをショットリスト（フレーミング + カメラ移動 + ライティング）に分解し、Seedance には文章ではなくカメラ／照明の言語でプロンプトを与える。  
各キャラクターのアイデンティティは、1枚のきれいな参照ポートレートで固定し、その同じ画像を Seedance のすべてのショットの参照として再利用する。毎回テキストでキャラクターを言い直さない。  
まず静止画ライブラリ（キャラクター／ロケーション）を構築し、その静止画を Seedance の動画生成用キーフレーム／参照として使う。動画から始めない。  
モーションの一貫性が重要なショットでは、フルの Seedance モーションレンダーにクレジットを使う前に、最初と最後のフレームを静止画として生成・確認する。  
セリフ／音が重要なショットは Seedance 2.0（native audio）で先に生成し、ランダム性に強い b-roll とトランジションは最後に回す。  
よくあるアーティファクト（morphing、余分な指、不要な文字、ウォーターマークの残像）を減らすために、Seedance 生成では強めの negative prompts を使う。

--- QUOTED TWEET ---
https://t.co/ZBQhKCUquD

--- LINKED ARTICLE: AI Video Workflow 2026: How to Turn One Idea Into a Cinematic Masterpiece ---
18か月前の私は、隣り合う2つのショットでキャラクターの顔を同じに保つことすらできなかった。同じ prompt なのに、別人になる。美しいフレームが1枚ある一方で、使い物にならないフレームが4枚。しかも、なぜそうなるのか分からなかった。
先週、私は1人の安定した主演、同期したセリフ、そして3つの異なるモデルで作った6本のクリップが、まるで1台のカメラで撮ったように見えるカラーグレーディングを備えた作品を完成させた。
あの頃の自分と今の自分の差は、ツールのスキルではない。プロセスだ。AI動画を試してやめてしまう人のほとんどは、同じ間違いをしている。スロットマシンのように扱ってしまうのだ。フレーズを打ち込み、レバーを引き、うまくいくことを祈る。2024年にはそれでよかった。基準が「これ、動画に見えるか」だったからだ。今の基準は違う。「本物のセットで撮影されたと信じられるか」だ。
1つの文に、ショットリスト、キャラクターバイブル、ライティングプラン、サウンドデザインを全部詰め込むことはできない。必要なのは prompt ではなく pipeline だ。ここでは、1行のアイデアから完成したクリップまでを、段階ごとに見ていく。

## マインドセットの転換：Prompt Monkey から AI Film Director へ

動画を生成するモデルは、見た目ほど重要ではない。市場最高のモデルでひどい結果を出す人がいる一方で、中堅モデルからより良い結果を引き出す人も見てきた。その差を生む、たった1つの欠けた習慣がある。ショットで考えることだ。
prompt monkey はシーンを説明して、AI が映画を理解してくれることを期待する。ディレクターは、ツールを1つ開く前に映画をショットに分解する。具体的には、必要なショット数、各ショットが感情的に何を伝えるか、カメラはどこにありどう動くか、カットの直前と直後にフレーム内で何が起こるかを、すでに把握している。これらに AI ツールは不要だ。ノートを5分開くだけでいい。
何を撮りたいのか分かっていなければ、世界最高のピクセルも意味がない。

## Phase 1: アイデア & スクリプト

 
私は Claude や ChatGPT を、願いを叶える機械としてではなく、構成は私より速く、センスは私より劣るパートナーとして使う。センスは自分で持ち、面倒な作業を任せる。
方法はこうだ。
1. 感情の核を1文で書く。プロットではなく、感情だ。「育った家がもう自分を認識していないと気づく男」は核になる。「男が家の中を歩く」は違う。
1. 1つの脚本ではなく、3つの異なる構成を出す。安全な案ではなく、驚きのある案を選ぶ。
1. 段落ではなく、ショットリストに分解する。ほとんどの人がこの工程を飛ばすが、ここが最も重要だ。
 
30〜90秒の作品では、次の構成が安定して機能する。最初の3秒でフック、3〜5ショットで緊張感を高め、転換があり、最後に報酬となるショット。合計5〜8ショットが目安だ。それ以上になると、45秒の作品が「存在しない映画の予告編」みたいに感じられ始める。

## prompt テンプレート:

 
Tip: 「screenplay」を求めないこと。モデルは文学的な散文ではなく、カメラ言語に反応する。短編小説のようなショットリストは、各クリップごとに生成器と戦うことになる。ショットシートのように読めるものなら、生成器が推測する余地はほとんどない。

## Phase 2: ストーリーボード & ショットプランニング

 
私はまずショットリストを絵にし、それから動画にする。そうすれば、悪いアイデアは10秒の生成コストではなく、静止画1枚分のコストで見つけられる。
私のデフォルトは Google Flow だ。Whisk、ImageFX、Flow 自体を、Veo 3.1、Nano Banana、Gemini 上で動く1つの空間に統合しているので、タブを切り替えずに mood board から動くクリップまで進められる。あるいは、Claude に「framing / lighting / mood」の表を作らせ、それを紙の storyboard として使うだけでもいい。

## 流暢に使えるようになるべき2つの語彙:

Framing と movement: wide、medium、close-up、over-the-shoulder、dutch angle、dolly-in、handheld tracking、static shot。動きを名指しすることが、単なる生成ショットと演出されたショットを分ける。
Lighting: golden hour、hard noir shadow、soft overcast、practical lamp light、cold fluorescent。lighting は prompt の中で「本物らしさ」を最も強く売る要素の1つだ。
プラットフォームが最初と最後のフレームのロックをサポートしているなら（Flow はネイティブ対応）、展開が重要なショットでは必ず使うこと。モデルに「方向」ではなく「到達点」を与えられ、到達点があると動きの
```

#### 💡 使い方のコツ

Film the real pantomime on your phone (jump over the edge, sit down, laugh) and use it as the motion reference for Seedance.  
Create a keyframe still where the pool water is replaced by the monsters (e.g., tangled toothy worms) using Nano Banana or Midjourney, then use that as the environment reference for Seedance.  
Use Seedance Character Lock to pin all three faces and outfits so identity/clothing doesn’t drift between shots.  
Generate in Seedance 2.0 by blending the real body-movement reference with the monster-environment keyframe/reference to bring the composite scene to life.  
Break your idea into a shot list (framing + camera movement + lighting) before generating anything, and prompt Seedance with camera/lighting language rather than prose.  
Lock each character’s identity with one clean reference portrait and reuse that same image as the reference for every Seedance shot; don’t re-describe the character in text each time.  
Build your still-image library (characters/locations) first, then use those stills as keyframes/references for Seedance video generation instead of starting with video.  
For shots where motion consistency matters, generate/check the first and last frame as stills before spending credits on the full Seedance motion render.  
Generate dialogue/sound-critical shots first in Seedance 2.0 (native audio), then do b-roll and transitions last since they tolerate randomness.  
Use aggressive negative prompts to reduce common artifacts (morphing, extra fingers, stray text, watermark ghosts) in Seedance generations.

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084678845043453953/img/Y01Y6roj5Hc_HMPA.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084679050509844765.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084679050509844765.mp4)**

**作者:** [Voyz](https://x.com/voyzlab) | **ソース:** [Link](https://x.com/voyzlab/status/2084679050509844765) | **公開日:** 2026年8月4日

`Horror` `Monster Chase` `Photoreal` `Fantasy` `Tutorial` `Creative Asset` `Transformation`

---

### Connect Claude Code to Arcads to automate UGC ad production: have Claude…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
Claude Code を Arcads に接続して UGC 広告制作を自動化しましょう。Claude に完全なキャラクターシートを生成させ、実制作に使える Seedance プロンプトを書かせ、動画生成をエンドツーエンドでトリガーできます。  
まずは 6 方向のキャラクターリファレンスを生成し、一貫した顔立ち・衣装・ポーズを揃えたうえで、Seedance 2.0 の UGC 動画におけるアイデンティティのアンカーとして再利用します。  
Claude にシネマティックな Seedance プロンプトを自動生成させ、仮想俳優をリアルな環境に配置し、さらに商品写真と俳優を組み合わせて、Seedance 2.0 で洗練された UGC 風の商品広告を生成します。

--- QUOTED TWEET ---
https://t.co/9XQnLdfsFc

--- LINKED ARTICLE: Claude AI で 2026 年にお金を稼ぐ方法（完全ガイド） ---
ある普通の男性が、広告費を 1 円も使わずに、これで数か月のうちにこっそり 1 万ドル近くを稼ぎました。仕組みはこうです。地味なニッチ 1 つ、Claude AI で稼ぐ見落とされがちな 3 つの方法、そしてそれらを 1 つのシステムにまとめる動き。このあとに続くのは、そのままの実践手順です。誇張も、誰もがすでに試した焼き直しのアイデアもなし。3 つの控えめな手法が噛み合って、1 つの本物のビジネスになる構成です
以下はすべて、1 つの例として「旅行」というニッチを軸に組み立てています。このニッチのまま進めてもいいですし、最後に別のものへ差し替えても構いません。重要なのはトピックではなく、システムそのものです
システムを要素ごとに分解すると、こうなります:
1. Claude で作るカスタム旅行プランを Etsy でデジタル商品として販売
1. Pinterest のトラフィックエンジンでディスプレイ広告とアフィリエイト収益を得る
1. 無料 PDF の導線でメールリストを増やし、そのリストにオファーを売る
1. 3 つすべてを 1 つのブランドに束ねるエージェンシー型システム
 
このモデルが機能する理由を示す数字は、いくつかあります:
- Etsy のアクティブ購入者は約 8,700 万人にのぼり（2026 年 Q1 時点で 8,660 万人）、すでにオーディエンスが存在しているため、ゼロから作る必要がない
- Pinterest は月間 6 億 3,100 万人が利用しており、その多くはただ眺めているのではなく、すでに「計画モード」で来ている
- メールは 1 ドル使うごとにおよそ 36〜42 ドルのリターンがあり、あらゆるチャネルの中でも最高クラスの ROI を誇る。しかもリストは借り物ではなく、自分が所有する資産
- 2026 年ワールドカップ決勝は、2026 年 7 月 19 日にニュージャージー州の MetLife Stadium で開催予定。収容 82,500 席、推定視聴者数は約 15 億人。これは 1 つの都市で起きる、1 つのイベントです

## 方法 1: Claude で作るカスタム旅行プラン

需要はすでに検証済みです。Etsy で州名や都市名の旅行日程表を検索すると、シンプルなプランナーで何千件も売れているショップが見つかります。それがシグナルです。人々はすでにお金を払っているのです
ここでのポイントは、汎用ファイルではなく「カスタマイズ」です。1 つの固定プランではなく、購入者の正確な都市、日程、人数、予算に合わせたプランを商品にします。例: 4 人家族向け、予算 2,000 ドルのニュージャージー 5 日間旅行
 
なぜニュージャージーなのか？ イベントで需要が急増するからです。2026 年ワールドカップ決勝がニュージャージー周辺で開催されるため、何十万人もの旅行者がプランを探すことになります。しかも、これは 1 つの都市にすぎません。毎月何百ものイベントがあり、世界中には何千もの都市があるので、この手法は同じように適用できます
Claude でプランを作る
このプロンプトで、Claude にコンサルタントのように考えさせ、予算を守らせ、完成済みファイルを出力させます:
 
届け方は 2 通り
出力はデジタルファイルなので、選択肢があります:
1. HTML を共有リンクにする。HTML をダウンロードして Canva に入れ、「view public link」を使って送信用リンクを取得する
1. PDF。Claude に同じプランを PDF に変換させ、数秒待ってダウンロードする
ベストプラクティス: 購入者には両方の形式を渡す
 
出品して上位表示を狙う
新規の Etsy ストアを立ち上げ、すべての項目を正しく埋め、セットアップを急がないこと。そのうえで、都市ごとに完全なローンチキットを生成します:
 
数字と賢い動き
- 手数料体系は比較的やさしい。Etsy は 1 商品の出品に 0.20 ドル（4 か月有効）を課し、さらに 1 件の販売ごとにおよそ 6.5% + 3% + 0.25 ドル、合計で約 10〜11% になります。デジタルプランなら印刷も発送も不要なので、価格の大半がそのまま利益率になります
- チャームプライシングを活用する。20 ドルや 30 ドルより、17 ドルや 27 ドルのほうがコンバージョンしやすい傾向があります。まず安価な基本プランを売り、次に追加日程、持ち物リスト、レストランマップ付きの上位版へアップセルします
- 都市だけでなくイベントに乗る。2026 年ワールドカップ決勝（MetLife Stadium、7 月 19 日）は世界規模の計画需要を呼び込み、コンサート、マラソン、フェスも同様に需要を押し上げます
- これはあくまで試算です（約束ではありません）。100 都市を公開し、それぞれが月 2 件ずつ 17 ドルのプランを売れば、ほぼ利益率の高い売上で約 3,400 ドルになります。ここでのレバーは運ではなく、掲載数です
Claude にカタログを一括生成させましょう。1 都市ずつ作らないでください:
 
> 方法 1 の唯一のルール: 一貫性を保つこと。本当に売れているショップの多くは 100 件以上の掲載があります。1 都市だけ出して待つのではなく、量そのものが戦略です

## 方法 2: Pinterest のトラフィックエンジン

もしこの 3 つの方法のうち 1 つだけが今年生き残るなら、これを選んでください。6 桁規模のコンテンツビジネスへ最も直接的に近づけます
お金の裏側にある計算式。旅行ブログは、価値の高いオーディエンスから毎月安定した閲覧を集めます。ディスプレイ広告は 1,000 PV あたりおよそ 6〜20 ドルを生み、そこにアフィリエイト収益が上乗せされます。十分なトラフィックを積み上げれば、月を追うごとに複
```

#### 💡 使い方のコツ

Connect Claude Code to Arcads to automate UGC ad production: have Claude generate a complete character sheet, write production-ready Seedance prompts, and trigger video generation end-to-end.  
Generate a 6-view character reference first (consistent facial features, outfits, poses) and reuse it as the identity anchor for Seedance 2.0 UGC videos.  
Have Claude auto-build a cinematic Seedance prompt that inserts the virtual actor into realistic environments, then combine product photos with the actor to generate polished UGC-style product ads in Seedance 2.0.

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084705893396979712/img/DUrZ78C_i3NEuu9a.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084707738248945807.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084707738248945807.mp4)**

**作者:** [Insomnia](https://x.com/insomnia_vip) | **ソース:** [Link](https://x.com/insomnia_vip/status/2084707738248945807) | **公開日:** 2026年8月4日

`Product Ad` `Beauty` `Photoreal` `Realistic World` `Creative Asset` `Tutorial`

---

### Use Seedance 2.0 with a single character sheet to lock identity, then drive…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
Seedance 2.0 を単一のキャラクターシートと組み合わせて使い、アイデンティティを固定したうえで、参考パフォーマーからマルチ人物のブロッキング／タイミング／アイラインを与えると、グリーンスクリーンやコンポジットなしで、モデルが「1人の俳優を複数回クローンした」ような結果を1回の生成で出せる。

まずはキャラクターシートを作る（単なる1枚のポートレートではなく）。そして、その同じシートをすべての Seedance の shot prompt で参照して、カットをまたいでも顔の一貫性を保つ。

環境／ロケーションの説明は一度だけ、完全な詳細で書き、そのまったく同じテキストをすべての shot prompt に貼り付ける（書き換えたり短くしたりしない）。そうすることで、カット間で世界観やライティングがリセットされるのを防げる。

モーション参照映像を depth map に変換し、それを movement reference として使う。そうすると、Seedance は動きを転送する際に、顔・服・背景ではなく空間的なモーションに集中できる。

生成する前にシーケンス全体を計画する（storyboard か、順序立てた beats を書いた1つの prompt）。そして、ショットごとに分けて生成するのではなく、1つの連続したシーケンスとして生成して、タイミングのズレを減らす。

camera style のルールは一度だけ書く（lens／framing／color grade／lighting の表現）。そして、そのまったく同じ camera text をすべての shot prompt で繰り返して、シーケンス全体を1台の一貫したカメラで撮ったように感じさせる。

--- QUOTED TWEET ---
https://t.co/sTgbjlhQGJ

--- LINKED ARTICLE: なぜ AI 動画の 90% はまだ AI 動画に見えるのか — そして本当に直す方法 ---
1つの prompt。1回の generation。顔はまあまあ近い。シーンもまあまあ近い。なのに、何かがまだ違う。
目立ったエラーはない。指が増えているわけでもないし、背景が溶けているわけでもない。ただ、AI を見ているという静かな違和感が残る。
多くのクリエイターはモデルのせいにする。次のバージョンを待ち、より良い weights なら解決すると期待する。でも実際には、それは capability の問題ではなく workflow の問題だ。
AI 動画の 90% がまだ AI 動画に見える本当の理由は、モデルではない。ほとんどの人が1ショットずつ生成し、一貫性が偶然に起こることを期待しているからだ。
 
 

キャラクターが、ほとんど同じ人物のままになっている
 
これが最もよくあるギャップだ。1枚のポートレート prompt なら顔は作れる。しかし、2ショット目以降にモデルが保持できるものは何も与えていない。
多くのクリエイターは、まず1枚のヒーロー画像を生成し、その後の各ショットを毎回ゼロから re-prompt する。そしてそのたびに、モデルは顔を少しずつ再設計してしまう。目の形がわずかに違う。顎のラインが少し柔らかい。髪の色が少し明るい。単体では気づくほどではないが、5ショット積み重なると、そのキャラクターはもう1人の人物として感じられなくなる。
動画生成の前に、まず作るべきもの：
 
このシートを、元の単一ポートレートではなく、以降のすべての shot prompt で参照する。
 

カットの間で世界が静かにリセットされる
 
ライティングが少し変わる。壁の色が変わる。1ショット目と次のショットで時間帯の感じが違う。しかも、そのどれも誰も意図していない。
これは、多くの人が毎回の prompt でロケーションを新しく説明しているから起こる。毎回、モデルはその説明を少し違うふうに読み取り、空間を静かに再構築してしまう。
解決策はシンプルだ。環境を一度、完全な詳細で書き、そのまったく同じ説明を以降のすべての shot に貼り付ける。書き換えない。短くしない。完全に同じものをコピーする。
 
このブロックはショットごとに変わらない。それがポイントだ。
 

生の映像は、情報を持ちすぎている
 
踊っている人の動画をモデルに入れると、モデルは一度にすべてを読もうとする。人物の顔、服、部屋、ライティング、そしてそのどこかにある実際の動き。
それが問題だ。本当に欲しかったのは1つ、motion だけなのに、生の映像はモデルに同時に10個のことを考えさせる。
depth map は、空間的な動き以外を取り除くことでこれを解決する。顔も、衣装も、背景もない。ただ身体の位置と勢いだけがある。モデルに残るのは、何がどう動いているかだけだ。
 
キャラクターシートは「誰が動くか」に答える。depth map は「どう動くか」に答える。
 

ショットは互いの記憶なしに生成される
 
ショット1を生成して確認し、そのあとショット2をゼロから生成するというやり方では、モデルは1秒前に何が起きたかを知らない。各カットは、要するに毎回の新しい推測だ。
だから、キャラクターシートと環境を固定していても、シーケンスはずれていく。問題はもうアイデンティティではない。タイミングだ。何がすでに起きたかをモデルに伝えるものがないので、それを土台に積み上げられない。
解決策は、1フレームも生成する前にシーケンス全体を計画することだ。storyboard としてでもいいし、beats を順番に書いた1つの prompt としてでもいい。
 
1つの prompt、1つの sequence。3つの別々の推測をつなぎ合わせるのではない。
 

カメラが自分のルールを忘れる
 
ショットごとに lens の選択、framing、color grade を変えると、各ショット単体はきれいでも、編集全体は演出されたものではなく、つぎはぎに見えてしまう。
これはたいてい偶然起こる。ある prompt には「cinematic lighting」と書かれているのに、次には書かれていない。あるショットはスマホ動画のように見え、次は映画のスチルのように見える。技術的には何も間違っていないのに、シーケンス全体が1台のカメラでシーンを追っている感じではなくなる。
解決策は environment lock と同じだ。camera style を一度書き、そのまったく同じ wording をすべての shot で繰り返す。
 
毎ショット同じ camera rules。それが、組み立てただけではなく、演出されたように感じさせる。
 

なぜこれが本当に効くのか
この5つのギャップはそれぞれ、モデルの注意を奪い合う別々の変数だ。それらを1つずつ閉じていくことが、固定された sequence と、たまたまうまくいった sequence を分ける。
一貫性は、より賢いモデルの問題ではなかった。モデル自身に決めさせることを減らす問題なのだ。
「AI video」と、ただの video の間にある差は、たいてい能力の不足ではなく、参照の不足だ。
 

これが当てはまる場面
同じ顔が1回以上のカットをまたいで生き残る必要がある、あらゆる multi-shot sequence。
単発のヒーローショ
```

#### 💡 使い方のコツ

Use Seedance 2.0 with a single character sheet to lock identity, then drive multi-person blocking/timing/eye-lines from reference performers so the model can generate “one actor cloned multiple times” in a single pass without green screen or compositing.

Build a character sheet first (not just a single portrait) and reference that same sheet in every Seedance shot prompt to keep the face consistent across cuts.

Write the environment/location description once in full detail and paste the exact same text into every shot prompt (don’t rewrite or shorten) to prevent the world/lighting from resetting between cuts.

Convert motion reference footage to a depth map and use that as the movement reference so Seedance focuses on spatial motion (not face/clothes/background) when transferring movement.

Plan the entire sequence before generating (storyboard or one prompt with ordered beats) and generate as one continuous sequence instead of separate shot-by-shot generations to reduce timing drift.

Write camera style rules once (lens/framing/color grade/lighting wording) and repeat the exact same camera text in every shot prompt to keep the sequence feeling like one consistent camera.

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084747819496230912/img/1oPDWit7Wp-mIUI3.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084747861380718970.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084747861380718970.mp4)**

**作者:** [Primee32](https://x.com/Primee32) | **ソース:** [Link](https://x.com/Primee32/status/2084747861380718970) | **公開日:** 2026年8月4日

`Portrait & Fashion` `Portrait` `Photoreal` `Realistic World` `Tutorial` `Creative Asset` `VFX`

---

### Use the ComfyUI-Splat-Viewport node to convert a single image into a 3D…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
ComfyUI-Splat-Viewportノードを使って、1枚の画像を3D Gaussian splat（fal TripoSplat経由）に変換し、ノード内でその周囲をカメラで飛び回り、その動きをdepth MP4として記録し、そのdepth動画をSeedanceにカメラ参照として渡すことで、フレームごとに同じ動きを追従させます。  
カメラの動きはRGBではなくdepth passとして記録することで、Seedanceがコピーするのをカメラモーションだけにし、シーンの見た目はコピーさせません。  
ノードのキャッシュ済みsplats（content-addressed cache）を使い、ワークフローを再キューして、TripoSplat変換に二重で課金されるのを避けます。  
ノードの4つの出力（rendered view、silhouette mask、depth map、recorded orbit MP4）を使って、Seedanceが必要とする特定の参照アセット（カメラ参照用のrecorded orbit/depth MP4）を生成します。

--- THREAD CONTINUATION ---
[Thread 1] Node: ComfyUI-Splat-Viewport → https://t.co/PDglFitcgJ

https://t.co/d2sCV5iA72

1つのノードから4つの出力: rendered view、silhouette mask、depth map、そしてMP4として記録したorbit。splatsはキャッシュされるので、二重課金なしで再キューできます。

[Thread 2] 仕組み:

image → fal TripoSplat → 262k-Gaussian splat, content-addressed cache
node内のカスタムWebGL2 renderer: ソート済みの1パスでcolour + mask + depthを出力
recordボタンは任意のpass（rgb / mask / depth）をキャプチャ解像度で記録
depth take = 純粋なカメラモーション; ビデオモデルがコピーできるのは動きだけで、他には何もない

[Thread 3] @fal #ComfyUI #AIvideo #GaussianSplatting
```

#### 💡 使い方のコツ

Use the ComfyUI-Splat-Viewport node to convert a single image into a 3D Gaussian splat (via fal TripoSplat), fly a camera around it in-node, record the move as a depth MP4, and feed that depth video to Seedance as a camera reference so it follows the motion frame-for-frame.  
Record the camera move as a depth pass (not RGB) so Seedance copies only the camera motion and not scene appearance.  
Use the node’s cached splats (content-addressed cache) and re-queue the workflow to avoid paying twice for the TripoSplat conversion.  
Use the node’s four outputs (rendered view, silhouette mask, depth map, recorded orbit MP4) to generate the specific reference asset Seedance needs (the recorded orbit/depth MP4 for camera reference).

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084752641649782784/img/JACc7HB3Rqih9Bk0.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084755929854005469.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084755929854005469.mp4)**

**作者:** [Kaito](https://x.com/tahabahrami) | **ソース:** [Link](https://x.com/tahabahrami/status/2084755929854005469) | **公開日:** 2026年8月4日

`Scenery & Spectacle` `Worldbuilding` `Photoreal` `Sci-Fi` `Tutorial` `VFX` `Creative Asset`

---

### Film StudioでSeedance 2.0を生成する際は、エージェントと対話しながらキャンバス上で微表情の演技を調整して狙った表情ニュアンスに寄せる

![日本語](https://img.shields.io/badge/lang-日本語-green)

#### 📝 プロンプト

```
Film StudioでSeedance 2.0を生成する際は、エージェントと対話しながらキャンバス上で微表情の演技を調整して狙った表情ニュアンスに寄せる
```

#### 💡 使い方のコツ

Film StudioでSeedance 2.0を生成する際は、エージェントと対話しながらキャンバス上で微表情の演技を調整して狙った表情ニュアンスに寄せる

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084137247042084864/img/P9r86LPp0Elb6I1q.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084137298313269678.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084137298313269678.mp4)**

**作者:** [ヤノ](https://x.com/Ryuki_Yano) | **ソース:** [Link](https://x.com/Ryuki_Yano/status/2084137298313269678) | **公開日:** 2026年8月3日

`Portrait & Fashion` `Portrait` `Photoreal` `Realistic World` `Tutorial`

---

### 在生成模式选择 Seedance 2.0 Fast 来做快速出片

#### 📝 プロンプト

```
生成モードでは Seedance 2.0 Fast を選んで、素早く映像を仕上げる  
動画仕様では、15秒・16:9横画面・3つの明確なショットを厳密に生成するよう明記し、尺とショット数をコントロールする  
「反転式コメディ（Comedy Twist）」をジャンルタグとして使い、プロンプト内で前半は壮大で荘厳、後半は突然気まずい現実コメディに切り替わること、さらにその反転は必ず突然で、事前に示唆してはいけないことを明確にする  
画の質感は実写、映画級の写実表現、自然な肌の質感、リアルな都市環境に指定し、アニメ／CG／プラスチック肌風を避ける  
キャラクター参考画像をアップロードし、顔・髪型・服装・体型を厳密に一致させ、全編で顔替えや見た目の変更をしないよう明記してキャラの一貫性を固定する  
プロンプト内に「重要な連続性」ルール（小道具は継続して存在する、車両は通過するだけで接触しない、動作空間は連続している、人物や小道具が瞬間移動しない）を書くことで、破綻や飛びを減らす  
ストーリーをタイムコード付きの絵コンテに分解し（例：00:00-00:03 / 00:03-00:07 / 00:07-00:10 / 00:10-00:12）、各ショットごとにカメラ位置と動き（超ローアングルの煽り追従／サイドトラッキング／固定サイドのワイド／正面カメラ）を指定して、ショット言語を安定させる  
「避けること」リストで禁止事項（負傷なし・流血なし・変形なし・多肢なし・剣を別の物体に変えない・爆発や衝突を出さない等）を明確にし、モデルの逸脱や安全でない内容を抑える

--- QUOTED TWEET ---
ちょっと面白い、うちの剣仙、来たばかりでまだ慣れてない

動画生成：反転式コメディ（Comedy Twist）｜仙侠の達人が初めて都市の横風に遭遇

Seedance 2.0 は、こういう突飛な発想を実現するのにとても向いている。

さっきまでクールな剣仙が剣に乗って巡遊していたのに、次の瞬間には現代都市の交通に容赦なくやられる。

prompt 👇

【動画仕様】

尺：10秒  
画幅：16:9 横画面  
タイプ：反転式コメディ（Comedy Twist）  
画の質感：実写、映画級の写実感、自然な肌の質感、リアルな都市環境  

【コアとなるギャップ】  
前半は、壮大で荘厳、圧迫感のある仙侠映画の雰囲気を作る。  
後半は、突然みっともなく、静かで、気まずい現実コメディへ転じる。  
反転は必ず突然起こり、事前の示唆はしないこと。全体は荒唐無稽だが論理は明快で、軽快かつ無害なコメディの空気を保つ。

【シーン】

晴れた昼間の都市の幹線道路。

道路には対向車線の自動車道、路肩の自転車道、歩道がある。

歩道のそばには、ばらばらに積まれた大量の古い段ボール箱が置かれている。箱の大きさはまちまちで、人物が落ちた際に四方へ散らばり、誇張されているが安全なコメディ効果を生み出せる。

【キャラクター】

剣仙姐：@画像1

参考画像の顔、髪型、服装、体型、人物特徴を厳密に一致させ、全編で顔替えや見た目の変更をしないこと。

【重要な連続性】

銀色の長剣は前半を通して、常に剣仙姐の足元に浮遊している。

青い大型トラックは、あくまで隣の自動車道を通過するだけで、人物・長剣・自転車に接触したり衝突したりしてはならない。

剣仙姐が段ボール箱の山に落ちるのは、安全で誇張されたコメディ演出であり、負傷、流血、痛み、実際の交通事故は描かない。

すべての動作は空間的な連続性を保ち、人物や小道具が瞬間移動してはならない。

━━━━━━━━━━━━━━

[00:00-00:03]

【ショット1：仙侠映画級の登場】

超ローアングルの煽りで、カメラは素早く後退しながら追従する。

剣仙姐は銀色の長剣に足を乗せ、都市道路の上空約2メートルを高速で滑空する。

両手を背中に回し、顎をわずかに上げ、視線は冷たく、表情は高慢。まるで凡人を見下ろしているかのよう。

長い髪と裾は正面からの風で後方へ流れ、動きは安定していて優雅、かつ圧迫感がある。

太陽光が銀色の剣身に鋭い反射を生み、長剣が空気を切るたびに、かすかな銀色の剣気の残像が残る。

効果音：壮大な仙侠音楽、風を切る音、低く響く剣鳴。

冒頭字幕：

「剣仙が初めて現代の交通システムに入ったとき」

━━━━━━━━━━━━━━

[00:03-00:07]

【ショット2：ひと言の褒め言葉で完全に舞い上がる】

自転車道のサイドトラッキングに切り替える。

自転車姐が自転車で画面に入ってきて、空中の剣仙姐を見上げ、目を見開いたあと、興奮してペダルを強く踏み、追いかける。

自転車姐は心からの憧れを込めて叫ぶ：

「うわっ！ 姉さん、めちゃくちゃカッコいい！」

剣仙姐の顔の寄りに切り替える。

褒め言葉を聞いた剣仙姐は、もともと無表情だった口元が一瞬だけ上がり、すぐに無理やり抑え込む。

平静を装って髪を払うが、目はこっそり下の自転車姐を見ており、明らかに得意になり始めている。

足元の銀色の長剣は、主人の見せ技に合わせるように、空中で滑らかなS字を2回描く。

効果音：仙侠音楽は継続し、軽い得意げな「ふふん」という音と、きらめく効果音を加える。

━━━━━━━━━━━━━━

[00:07-00:10]

【ショット3：現実世界が突然介入する】

固定のサイドワイドに切り替える。

剣仙姐は目を閉じ、少し顎を上げて、自転車姐の崇拝を満喫している。

すると、巨大な青いトラックが隣の自動車道を勢いよく通過する。

トラックは誰にもぶつからないが、通過時に極端に誇張された強烈な横風を巻き起こす。

剣仙姐の髪、裾、そして表情が同時に風で乱される。

顔に浮かんでいた得意げな笑みは一瞬で消え、目が大きく見開かれ、瞳が揺れる。

足元の銀色の長剣は激
```

#### 💡 使い方のコツ

在生成模式选择 Seedance 2.0 Fast 来做快速出片  
在视频规格里明确要求严格生成 15 秒、16:9 横屏、三个清楚镜头以控制时长与镜头数  
用“反转式喜剧（Comedy Twist）”作为类型标签，并在提示词中明确前半段宏大庄重、后半段突然尴尬现实喜剧，且反转必须突然不能提前暗示  
指定画面质感为真人实拍、电影级写实、自然皮肤纹理、真实城市环境，以避免动漫/CG/塑料皮肤风格  
上传角色参考图并写明严格保持脸部、发型、服装、体型一致，全程不得换脸或改变造型来锁定角色一致性  
在提示词中写“关键连续性”规则（道具持续存在、车辆只经过不接触、动作空间连续、人物道具不得瞬移）来减少穿帮与跳变  
把剧情拆成带时间码的分镜（如 00:00-00:03/00:03-00:07/00:07-00:10/00:10-00:12），并为每镜头指定机位与运动（超低机位仰拍跟随/侧面跟拍/固定侧面全景/正面机位）来稳定镜头语言  
用“避免”清单在提示词里明确禁止项（不受伤不流血、不变形不多肢、不把剑变成其他物体、不出现爆炸碰撞等）来降低模型跑偏与不安全内容

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084149110232244224/img/vrUY4b3LPG8_vP81.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084150357601443916.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084150357601443916.mp4)**

**作者:** [Soran](https://x.com/Soranlan) | **ソース:** [Link](https://x.com/Soranlan/status/2084150357601443916) | **公開日:** 2026年8月3日

`Story` `Twist` `Photoreal` `Realistic World` `Tutorial`

---

### 日本語の会話（音声/台詞）をそのまま使っても問題なく動作する前提で制作する

![日本語](https://img.shields.io/badge/lang-日本語-green)

#### 📝 プロンプト

```
日本語の会話（音声/台詞）をそのまま使っても問題なく動作する前提で制作する  
日本語プロンプトで指示して生成できるので英語に翻訳せず日本語で具体的に書く  
ガチャ任せにせず、動き・演技・画面要素（例：テロップ）まで指示を作り込んでプロンプト精度を上げる  
テロップを出したい場合はプロンプト内でテロップ表示を明示して生成する
```

#### 💡 使い方のコツ

日本語の会話（音声/台詞）をそのまま使っても問題なく動作する前提で制作する  
日本語プロンプトで指示して生成できるので英語に翻訳せず日本語で具体的に書く  
ガチャ任せにせず、動き・演技・画面要素（例：テロップ）まで指示を作り込んでプロンプト精度を上げる  
テロップを出したい場合はプロンプト内でテロップ表示を明示して生成する

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084163390633848832/img/YScYwlAcQFjRHw6o.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084163423018066172.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084163423018066172.mp4)**

**作者:** [やんやん◆AIあそび](https://x.com/inyinyarnyang) | **ソース:** [Link](https://x.com/inyinyarnyang/status/2084163423018066172) | **公開日:** 2026年8月3日

`Story` `Talk` `Photoreal` `Realistic World` `Tutorial`

---

### Use Higgsfield MCP to connect Claude to Seedance 2.0 (and other models) by…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
Higgsfield MCP を使って Claude を Seedance 2.0（および他のモデル）に接続するには、次を実行します: claude mcp add --transport http --scope user higgsfield https://mcp.higgsfield.ai/mcp  
Seedance 2.0 のデュアルブランチ拡散モードを使って、音声と映像を同時に生成し、ネイティブな音声・映像同期を備えた UGC スタイルのトーキングヘッド動画を生成します  
Seedance 2.0 の Soul ID を使って、複数の video バリエーションにわたって同じキャラクターのアイデンティティを一貫して維持します  
高パフォーマンスの静止画クリエイティブに、さりげないカメラ移動、奥行きのパララックス、環境モーションを加えて「video」アセットに変換し、video 分類を促してオーガニックリーチを高めます  
クリエイティブを 1 件ずつではなくバッチで生成することで、約 40% 高速化し、Claude がバッチ全体を通してコンテキストを維持できるようにします
```

#### 💡 使い方のコツ

Use Higgsfield MCP to connect Claude to Seedance 2.0 (and other models) by running: claude mcp add --transport http --scope user higgsfield https://mcp.higgsfield.ai/mcp  
Generate UGC-style talking-head videos in Seedance 2.0 with native audio-video sync by using its dual-branch diffusion mode that generates audio and video simultaneously  
Use Soul ID in Seedance 2.0 to keep the same character identity consistent across multiple video variants  
Convert high-performing static creatives into “video” assets by adding subtle camera movement, depth parallax, and ambient motion to trigger video classification for higher organic reach  
Generate creatives in batches (instead of one-by-one) to be ~40% faster and let Claude maintain context across the entire batch

**作者:** [zack](https://x.com/zackpaid) | **ソース:** [Link](https://x.com/zackpaid/status/2084172420651286800) | **公開日:** 2026年8月3日

`Portrait & Fashion` `Influencer` `Photoreal` `Realistic World` `Tutorial`

---

### Pollo AIのSeedance 2.0で人物画像1枚を入力にして、撮影なしで横浜観光Vlog風動画を生成する

![日本語](https://img.shields.io/badge/lang-日本語-green)

#### 📝 プロンプト

```
Pollo AIのSeedance 2.0で人物画像1枚を入力にして、撮影なしで横浜観光Vlog風動画を生成する  
4K出力対応のSeedance 2.0を使い、旅行Vlog風の高解像度動画として書き出す
```

#### 💡 使い方のコツ

Pollo AIのSeedance 2.0で人物画像1枚を入力にして、撮影なしで横浜観光Vlog風動画を生成する  
4K出力対応のSeedance 2.0を使い、旅行Vlog風の高解像度動画として書き出す

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084177621731168256/img/43FdMi53EGDtg6OF.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084178699113652465.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084178699113652465.mp4)**

**作者:** [Pollo AI 日本公式](https://x.com/PolloAIJP) | **ソース:** [Link](https://x.com/PolloAIJP/status/2084178699113652465) | **公開日:** 2026年8月3日

`Portrait & Fashion` `Travel Vlog` `Photoreal` `Realistic World` `Tutorial`

---

### Keep phone-camera framing (vertical, close, handheld-style) to match…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
TikTokネイティブなUGCに合わせるため、スマホカメラのフレーミング（縦構図、寄り、手持ち風）を維持する。  
シーンが本物のクリエイターのセットアップのように感じられるよう、柔らかな紫の寝室照明を使う。  
被写体には、強い売り込みや露骨な商品デモなしで、仕上がったメイクルックを静かに見せてもらう。  
ハイライターは、演出された見せ場ではなく、顔を向けたときに自然に光を拾うようにする。  
出力が「generated」っぽく感じられる場合は、同じセットアップをSeedance 2.0で再実行し、実際の肌の質感を加えて、あまりにも完璧に見える印象を抑える。  
過度にクリーンで洗練されたアニメーションにならないよう、表情や微細な動きをやわらげる。  
カメラは近くに保ち、明示的に見せるのではなく、小さな頭の動きでハイライターが見えるようにする。
```

#### 💡 使い方のコツ

Keep phone-camera framing (vertical, close, handheld-style) to match TikTok-native UGC.  
Use soft purple bedroom lighting to make the scene feel like a real creator setup.  
Have the subject quietly show the finished makeup look with no hard sell or overt product demo.  
Prompt for the highlighter to catch naturally as she turns her face, not as a staged reveal.  
If the output feels “generated,” rerun the same setup through Seedance 2.0 and add real skin texture to reduce the too-perfect look.  
Soften facial expressions and micro-movements to avoid overly clean, polished animation.  
Keep the camera close and let the highlighter reveal through tiny head movements instead of explicit showcasing.

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084194671719493632/img/XcxA-D3yKA9mn2fs.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084194972245610682.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084194972245610682.mp4)**

**作者:** [Ima Studio](https://x.com/ImaStudio_ai) | **ソース:** [Link](https://x.com/ImaStudio_ai/status/2084194972245610682) | **公開日:** 2026年8月3日

`Product Ad` `Beauty` `Photoreal` `Realistic World` `POV`

---

### 先制作视频首帧的静态图，再用 Seedance 生成后续视频来做换装视频

#### 📝 プロンプト

```
まず動画の1枚目となる静止画を作成し、その後 Seedance で続きの動画を生成して、着せ替え動画にする  
同じ動画内で5コーデを連続で切り替え、1本で5着の服を見せる  
複数のコーデを見せる場合は、動画全体のスタイルを統一するために、同じテーマを保つのがおすすめ  
Seedance 2.0 を使えば連続着せ替えができ、実写撮影は不要で、服ごとにセットを組み直したり、撮影・編集し直したりする必要もない

--- QUOTED TWEET ---
もし『ワンピース』の女帝がコーデアカウントをやったら、
1本の動画で何着の服を見せられる？👀

今回は Seedance 2.0 を使って、
彼女が1本の動画の中で5コーデを連続で切り替えるようにした。
実写撮影は不要で、
服ごとにセットを組み直したり、撮影や編集をやり直したりする必要もない。

こうした人気の着せ替え表現は、
見た目が面白いだけでなく、
レディースアパレルのECや自媒体クリエイターにとって、
何度も使い回せるコンテンツテンプレートでもある。 https://t.co/LAyFHTAKJF
---
```

#### 💡 使い方のコツ

先制作视频首帧的静态图，再用 Seedance 生成后续视频来做换装视频  
在同一条视频里连续切换 5 套穿搭，一次展示 5 套服装  
多套穿搭建议保持同一个主题以统一视频风格  
用 Seedance 2.0 做连续换装，可免真人拍摄且无需为每套衣服重新搭景、拍摄和剪辑

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084195622064726016/img/A1raZKYPE7LQRa5l.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084196380369695091.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084196380369695091.mp4)**

**作者:** [麻酱AI实验室](https://x.com/zhongying14) | **ソース:** [Link](https://x.com/zhongying14/status/2084196380369695091) | **公開日:** 2026年8月3日

`Portrait & Fashion` `Fashion` `Photoreal` `Realistic World` `Transformation` `Tutorial`

---

### Set Seedance 2.0 video settings to Duration: 15 seconds and Aspect Ratio: 16:9…

#### 📝 プロンプト

```
Seedance 2.0 の動画設定を、Duration: 15 seconds、Aspect Ratio: 16:9 に設定し、シネマティックなシーケンスにします。  
明確なタイムコード（例: 0:00–0:02、0:02–0:05 など）を含む storyboarded prompt を使用し、各セグメントごとに camera shot type + movement を指定します（low street-level tracking pulling backward、wide rooftop lateral tracking、high aerial tracking、wide frontal retreating、ultra-wide pullback）。  
クリーチャーの動きを連続させるため、monster never stops moving/posing とプロンプトし、常に解剖学的に正しい tentacle の挙動を記述します（8本すべてが見えている、接続されている、分離している、欠損や余分な肢がない）。  
現実感を高めるため、物理的に正確な構造破壊と debris simulation を明示的にプロンプトします（shattered glass、broken asphalt、collapsing steel beams、concrete dust、electrical sparks、dust shockwaves）。  
見た目を固定するために、Ultra-photorealistic kaiju disaster film、IMAX-scale realism、AAA VFX quality、8K photorealism、controlled cinematic camera movement のような一貫した style target を指定します。  
各ビートごとに environment + lighting directives を追加して、ムードと連続性を安定させます（storm daylight、flashing red emergency lights、lightning flashes、steel-blue rainstorm daylight、storm backlight mixed with orange firelight）。  
cinematic atmosphere を強めるため、VFX 要素をプロンプト内に直接含めます（heavy rain、splashing water、volumetric smoke/dust、dynamic lightning、water plumes、debris trails）。  
よくある失敗を防ぐために negative prompt を使用します：slow opening、idle posing、extra/missing/disconnected/tangled tentacles、incorrect anatomy、deformed suction cups、floating/weightless physics、flickering、teleportation、unstable/handheld camera、low detail、cartoon/CGI/plastic textures、low-resolution effects、subtitles/text/logos/watermarks。

--- THREAD CONTINUATION ---
[Thread 1] STORBOARD AND PROMPT:

Duration: 15 seconds  
Aspect Ratio: 16:9  
Style: Ultra-photorealistic kaiju disaster film with realistic structural destruction, stormy coastal metropolis, physically accurate debris simulation, cinematic action, IMAX-scale realism.  
Monster Design  
A colossal deep-sea octopus towering above nearby skyscrapers. Its wet crimson-purple skin is scarred and textured, with pale lifeless eyes, rough oversized suction cups, a battle-worn mantle, and eight enormous muscular tentacles.

Movement: The creature never stops moving or poses. Four tentacles continuously pull its massive body forward at high speed while the remaining four violently destroy everything in its path. All eight tentacles remain fully connected, clearly separated, anatomically correct, and constantly visible throughout the sequence.

0:00–0:02 | Street Assault

Camera: Low street-level tracking shot, smoothly pulling backward.

Action: Destruction begins immediately. The monster charges directly toward the camera. One tentacle crushes a city bus and several streetlights while another wraps tightly around a glass office tower. The remaining tentacles drag the creature rapidly through flooded streets.

Lighting: Cold storm daylight with flashing red emergency lights reflecting across wet pavement.  
VFX: Heavy rain, splashing water, shattered glass, broken asphalt, flying debris.

0:02–0:05 | Tower Collapse

Camera: Wide rooftop shot with smooth lateral tracking.

Action: Without slowing down, the octopus violently yanks the glass tower sideways. Lower floors rip apart under extreme stress before the structure collapses behind the advancing creature.

Lighting: Lightning flashes illuminate dark storm clouds.

VFX: Concrete dust, electrical sparks, collapsing steel beams, cascading glass.

0:05–0:08 | City Charge  
Camera: High aerial tracking shot with controlled movement.

Action: The monster surges through multiple intersections at incredible speed. Every tentacle strike fractures the pavement, launches vehicles through the air, and tears apart surrounding infrastructure while its body never loses momentum.

Lighting: Steel-blue rainstorm daylight.

VFX: Exploding puddles, cracked roads, smoke, debris trails.

0:08–0:12 | Block Leap

Camera: Wide frontal shot, smoothly retreating.

Action: The creature plants two massive tentacles onto buildings on opposite sides of the street, compresses its enormous body, then launches across an entire city block. During the leap its remaining tentacles rip away balconies, billboards, rooftop equipment, and facades while maintaining continuous forward motion.  
Lighting: Dramatic storm backlight mixed with orange firelight.

VFX: Flying debris trails, displaced rain, drifting smoke, shattered concrete.

0:12–0:15 | Final Charge

Camera: Ultra-wide cinematic shot slowly pulling back.

Action: The monster lands near the coastline with overwhelming force. Several tentacles sweep through cargo cranes and warehouses before it charges toward downtown. Massive skyscrapers collapse one after another behind it while the creature continues its relentless advance.

Lighting: Lightning silhouettes the giant octopus against burning city streets.

VFX: Towering water plumes, collapsing cranes, dust shockwaves, sparks, burning debris, heavy rain.  
Audio Design

Deep resonant monster roars, torrential rain, emergency sirens, tearing steel, collapsing concrete, thunder, massive impact rumbles, crashing waves.

Visual Style

Ultra-photorealistic kaiju disaster film

IMAX-scale cinematic realism

Real-world structural destruction physics

Realistic ocean storm simulation  
High-speed creature animation

Controlled cinematic camera movement

Heavy rain and water simulation

Physically accurate debris

Volumetric smoke and dust

Dynamic lightning

AAA VFX quality

8K photorealism

Negative Prompt

Slow opening, idle posing, extra limbs, missing tentacles, tangled tentacles, disconnected tentacles, incorrect anatomy, deformed suction cups, floating debris, unrealistic destruction, weightless physics, flickering, teleportation, unstable camera, chaotic handheld movement, low detail, cartoon appearance, CGI look, plastic textures, low-resolution effects, subtitles, text, logos, watermarks.
```

#### 💡 使い方のコツ

Set Seedance 2.0 video settings to Duration: 15 seconds and Aspect Ratio: 16:9 for a cinematic sequence.  
Use a storyboarded prompt with explicit timecodes (e.g., 0:00–0:02, 0:02–0:05, etc.) and specify camera shot type + movement for each segment (low street-level tracking pulling backward, wide rooftop lateral tracking, high aerial tracking, wide frontal retreating, ultra-wide pullback).  
Force continuous creature motion by prompting that the monster never stops moving/posing and describing constant, anatomically correct tentacle behavior (all eight visible, connected, separated, no missing/extra limbs).  
Increase realism by explicitly prompting physically accurate structural destruction and debris simulation (shattered glass, broken asphalt, collapsing steel beams, concrete dust, electrical sparks, dust shockwaves).  
Lock the look by specifying a consistent style target like Ultra-photorealistic kaiju disaster film, IMAX-scale realism, AAA VFX quality, 8K photorealism, and controlled cinematic camera movement.  
Add environment + lighting directives per beat (storm daylight, flashing red emergency lights, lightning flashes, steel-blue rainstorm daylight, storm backlight mixed with orange firelight) to stabilize mood and continuity.  
Include VFX elements directly in the prompt (heavy rain, splashing water, volumetric smoke/dust, dynamic lightning, water plumes, debris trails) to push cinematic atmosphere.  
Use a negative prompt to prevent common failures: slow opening, idle posing, extra/missing/disconnected/tangled tentacles, incorrect anatomy, deformed suction cups, floating/weightless physics, flickering, teleportation, unstable/handheld camera, low detail, cartoon/CGI/plastic textures, low-resolution effects, subtitles/text/logos/watermarks.

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084209908132548608/img/Sd3ddzjgE0opJbIH.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084210464494383569.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084210464494383569.mp4)**

**作者:** [AIVersePlay](https://x.com/AIVersePlay) | **ソース:** [Link](https://x.com/AIVersePlay/status/2084210464494383569) | **公開日:** 2026年8月3日

`Action` `Kaiju` `Photoreal` `Realistic World` `VFX` `Tutorial`

---

### Treat each shot as a game cinematic by specifying exact camera positions and…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
各ショットをゲームのシネマティックとして扱い、Seedance 2.0 の prompt で正確なカメラ位置とショットのフレーミングを指定します。  
各 act/scene ごとに具体的な lighting を定義し（例：beat ごとに異なる lighting setup）、ムードと連続性をコントロールします。  
一貫性のある特徴的なキャラクターのビジュアル（例：マゼンタの髪、ペンキの飛び散ったジャケット）をショット全体で維持し、最小限のアクションでストーリーを伝えます。  
複雑なプロットの動きよりも、prompt 内の movement と color cues を中心にして、トレーラーの雰囲気を作り出します。
```

#### 💡 使い方のコツ

Treat each shot as a game cinematic by specifying exact camera positions and shot framing in your Seedance 2.0 prompt.  
Define specific lighting for each act/scene (e.g., different lighting setups per beat) in Seedance 2.0 to control mood and continuity.  
Use a consistent, distinctive character visual (e.g., magenta hair, paint-splattered jacket) across shots to carry the story with minimal action.  
Drive the trailer’s feel primarily through movement and color cues in the prompt rather than complex plot actions.

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084212811559997440/img/-VzGIN8fLg4YWGaX.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084214057138323567.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084214057138323567.mp4)**

**作者:** [이춘삼(2spring3)](https://x.com/wlgns5388) | **ソース:** [Link](https://x.com/wlgns5388/status/2084214057138323567) | **公開日:** 2026年8月3日

`Story` `Talk` `Photoreal` `Realistic World` `Tutorial` `Game UI`

---

### Build a reusable dancer identity first (body…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
まず、再利用可能なダンサーのアイデンティティを作成します（体型／身長／髪型／衣装／表情／姿勢／エネルギー）。そして、その同じインフルエンサーモデルを Seedance 2.0 の各ダンスクリップのベースとして使うことで、キャラクターの一貫性を保ちます。

Seedance 2.0 を実行する前に、強いファーストフレーム（衣装、ポーズ、カメラアングル、ライティング、ロケーション、ムードが明確なもの）を生成します。そうすることで、動画モデルに明確な起点ができ、重要なディテールを「推測」させずに済みます。

最初のフレームから 16 パネルのストーリーボードを作成し、振り付けをビートごとに整理してから、そのストーリーボードを Seedance 2.0 の image-to-video に入力して、動きとスムーズな遷移をガイドします。

純粋な text-to-video ではなく、ガイド付きの image-to-video ワークフロー（インフルエンサーモデル → ファーストフレーム → 16 パネルのストーリーボード → motion prompt → video）として Seedance 2.0 を使うことで、より制御された動きと連続性を得られます。

Seedance 2.0 の video prompt は、ストーリーボードですでに決まっている内容（タイミング、カメラの挙動、ライティング、リアリズム）を補強するように書き、新しい衣装／ロケーション／カメラスタイルなど、ストーリーボードと矛盾する要素は追加しないようにします。

生成された動きを確認し、ストーリーボードを調整し、Seedance 2.0 で再生成することで反復改善し、振り付けのコントロールとトランジションの滑らかさを段階的に高めます。

--- QUOTED TWEET ---
https://t.co/tlQjFddZZl

--- LINKED ARTICLE: スムーズな AI ダンス遷移のコツ：正確なワークフローとプロンプト ---
AI ダンス動画は、かつては一か八かの勝負のように感じられました。
プロンプトを書いて生成を押し、最初のボディロールをモデルがどこまで耐えられるかを待つ。うまくいけば素晴らしい動画になる。あるいは、顔が徐々に別人のようになり、途中で衣装が変わり、手が動きを諦め、タイミングがビートを外し、ダンサーがまるで振り付けの噂話しか聞いたことがないモデルのように動くこともありました。
AI 動画がまだ目新しかった頃は、それでもよかったのです。
しかし今、クリエイターは単なる実験をしているわけではありません。TikTok、Reels、Shorts、X のコンテンツ、音楽ティーザー、ダンスチャレンジ、商品ローンチ、そして完全な AI インフルエンサーアカウントまで制作しています。そうした用途では、ランダムな動きだけでは不十分です。
ダンスコンテンツにはアイデンティティが必要です。
リズムが必要です。
連続性が必要です。
そして何より、再現可能なワークフローが必要です。
そこで APOB AI の出番です。
APOB AI は、1 回うまくいった生成に頼りたくないクリエイターのために構築された独立系 AI インフルエンサープラットフォームです。AI Influencer Generator、Chat to Generate と Chat to Edit 内の GPT Image 2.0、そして Image to Video Ultra S 内の Seedance 2.0 を組み合わせることで、APOB AI はダンス動画制作を構造化された制作システムへと変えます。
長いプロンプトを書いて、モデルがきれいなルーティンを勝手に考えてくれることを期待する代わりに、クリエイターはダンサーを作り、見た目を整え、アイデンティティをコントロールし、動画が始まる前に動きをガイドできるようになりました。
なぜなら、AI インフルエンサーのダンス動画の未来は運任せではないからです。
それは、コントロールされた振り付けにあるのです。

## ランダムな動きから、再現可能な振り付けへ

1 本の印象的な AI ダンスクリップは注目を集められます。
再現可能な振り付けワークフローは、オーディエンスを育てられます。
APOB AI では、そのプロセスがより意図的になります。
1. AI Influencer Generator を使って AI インフルエンサーモデルを作成する。
1. APOB AI 内の GPT Image 2.0 を搭載した Chat to Generate を使って、ダンスのオープニングフレームを作成する。
1. Chat to Edit を使って、そのフレームを 16 パネルのダンスストーリーボードと動きのガイドに変換する。
1. Seedance 2.0 を搭載した Image to Video Ultra S を使って、ストーリーボードからガイド付きのダンス動画を生成する。
1. フック、ボイスライン、トーキングアバターの導入、キャプション、またはリップシンクのレイヤーを追加する。
1. 動きを確認し、ストーリーボードを洗練させ、ダンスを各プラットフォーム向けに再活用する。
単純な
prompt -> dance clip
ではなく、ワークフローは次のようになります。
influencer model -> first frame -> 16-panel storyboard -> guided video prompt -> Seedance 2.0 video -> social content
この変化は重要です。AI ダンス生成を、運任せの試行から実用的なクリエイティブシステムへと変えるからです。

## ステップ 1：ダンサーとして AI インフルエンサーを作る

強いダンス動画は、認識しやすいパフォーマーから始まります。
単なるきれいなアバターではありません。
単なるランダムなバーチャルモデルでもありません。
良い衣装を着た、ありふれたダンサーでもありません。
ダンスコンテンツはアイデンティティに依存します。視聴者は、各クリップで同じ顔、ボディランゲージ、スタイリング、エネルギー、態度を認識できる必要があります。
APOB AI は AI Influencer Generator から始めることで、クリエイターがキャラクターを直接定義できるようにします。目的は、1 回きりの画像ではなく、複数の動画を支えられるオリジナルの AI インフルエンサーを作ることです。
 
ダンスのワークフローでは、インフルエンサーモデルに、動きに関わる重要な要素を含めるべきです。たとえば、体型、身長、髪型、衣装のスタイル、表情、姿勢、そしてキャラクターが持つべきパフォーマンスのエネルギーです。
この AI インフルエンサーモデルが、ダンスシリーズ全体のアイデンティティの基盤になります。
新しいフレームは毎回ゼロから始まるのではなく、同じパフォーマーから始まります。
それが、AI ダンサーを「たまたまうまくいったクリップ」ではなく、再利用可能なクリエイティブ資産にする方法です。

## ステップ 2：強い最初のダンスフレームを作る

インフルエンサーモデルの準備ができたら、次は最初のフレームを作成します。
ここで使うのが Chat to Generate です。
APOB AI 内では、Chat to Generate が AI インフルエンサーワークフローの一部として GPT Image 2.0 を使用します。クリエイターにすべてをゼロから説明させるのではなく、インフルエンサーモデルを制御されたオープニングショットへと変換するのを助けます。
ダンス動画では、最
```

#### 💡 使い方のコツ

Build a reusable dancer identity first (body type/height/hairstyle/outfit/expression/posture/energy) and use that same influencer model as the base for every Seedance 2.0 dance clip to keep character consistency.

Generate a strong first frame (clear outfit, pose, camera angle, lighting, location, mood) before running Seedance 2.0 so the video model has an anchored starting point and doesn’t “guess” key details.

Create a 16-panel storyboard from the first frame to map the choreography beat-by-beat, then feed that storyboard into Seedance 2.0 image-to-video to guide motion and smooth transitions.

Use Seedance 2.0 via a guided image-to-video workflow (influencer model → first frame → 16-panel storyboard → motion prompt → video) instead of pure text-to-video to get more controlled motion and continuity.

Write the Seedance 2.0 video prompt to reinforce what’s already in the storyboard (timing, camera behavior, lighting, realism) and avoid introducing new outfits/locations/camera styles that conflict with the storyboard.

Iterate by reviewing the generated motion, refining the storyboard, and regenerating in Seedance 2.0 to progressively improve choreography control and transition smoothness.

**作者:** [Elara Grace](https://x.com/ElaraGrace_AI) | **ソース:** [Link](https://x.com/ElaraGrace_AI/status/2084221578355544512) | **公開日:** 2026年8月3日

`Music & Dance` `Dance` `Photoreal` `Realistic World` `Tutorial` `Creative Asset`

---

### Use a Nano Banana Pro → Seedance 2.0 pipeline to generate a full 15-second…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
Nano Banana Pro → Seedance 2.0 のパイプラインを使って、1回のインタビューあたり約 $0.50、約60秒で、15秒の「street interview」クリップ全体を生成します。

Seedance 2.0 では、出力を15秒の「stopped on the street」Q&Aとして構成します。AI interviewer が1つ質問し、AI subject がそれに答える形で、自然で本物らしい street setting を目指します。
```

#### 💡 使い方のコツ

Use a Nano Banana Pro → Seedance 2.0 pipeline to generate a full 15-second “street interview” clip in ~60 seconds at about $0.50 per interview.

In Seedance 2.0, structure the output as a 15-second “stopped on the street” Q&A: AI interviewer asks one question and the AI subject answers, aiming for an organic, real-looking street setting.

[![動画プレビュー](https://pbs.twimg.com/amplify_video_thumb/2084221857859858432/img/ZRlasGhTq7jNOFM0.jpg)](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084221889614946503.mp4)

📥 *画像をクリックして動画を再生* | **[🎬 動画を見る →](https://talented-lioness-5423.edgespark.app/api/public/media/seedance/videos/2084221889614946503.mp4)**

**作者:** [xaiofm](https://x.com/xaiofm) | **ソース:** [Link](https://x.com/xaiofm/status/2084221889614946503) | **公開日:** 2026年8月3日

`Story` `Talk` `Photoreal` `Realistic World` `Tutorial`

---

### Use a storyboard-first workflow (first frame → 16-panel storyboard) and then…

![English](https://img.shields.io/badge/lang-English-blue)

#### 📝 プロンプト

```
ストーリーボード先行のワークフロー（1枚目のフレーム → 16パネルのストーリーボード）を使い、その後 Seedance 2.0 を image-to-video で実行して、ダンサーの顔の一貫性とスムーズなトランジションを保ちます。

Seedance 2.0 の前に、強くてアイデンティティを固定できる1枚目のフレーム（同じ顔／衣装／カメラ／ライティング）を生成し、動画の視覚的な出発点を安定させます。

動画生成前に、16パネルのダンス・ストーリーボードをビートごとの動きのガイドとして作成し、タイミングを拍に合わせ、動きの整合性を保ちます。

ストーリーボードから Seedance 2.0 にプロンプトを与える際は、動画プロンプトでストーリーボードを強化するようにし（新しい衣装／ロケーション／カメラスタイルを追加しない）、連続性の破綻を避けます。

生成された動きを確認し、ストーリーボードを調整し、再生成することで反復改善し、リズム、トランジション、アイデンティティの一貫性を段階的に高めます。

--- 引用ツイート ---
https://t.co/tlQjFddZZl

--- 関連記事: AIダンスのスムーズなトランジションの秘訣：正確なワークフローとプロンプト ---
AIダンス動画は、以前は一か八かの勝負のように感じられました。
プロンプトを書いて生成ボタンを押し、最初のボディロールで何が残るのかを待つ。動画が驚くほど素晴らしいこともあれば、顔が少しずつ別人になり、途中で衣装が変わり、手の動きが崩れ、タイミングがビートを外し、ダンサーがまるで振付の噂だけを聞いて育ったモデルのように動くこともありました。
AI動画がまだ目新しかった頃なら、それでも十分でした。
しかし今、クリエイターは単なる実験をしているわけではありません。TikTok、Reels、Shorts、X向けコンテンツ、音楽ティーザー、ダンスチャレンジ、商品ローンチ、そして完全なAIインフルエンサーアカウントを制作しています。そうした用途では、ランダムな動きだけでは不十分です。
ダンスコンテンツにはアイデンティティが必要です。
リズムが必要です。
連続性が必要です。
そして何より、再現可能なワークフローが必要です。
そこで APOB AI の出番です。
APOB AI は、1回うまくいった生成以上のものを求めるクリエイターのために構築された、独立系のAIインフルエンサープラットフォームです。AI Influencer Generator、Chat to Generate と Chat to Edit 内の GPT Image 2.0、そして Image to Video Ultra S 内の Seedance 2.0 を組み合わせることで、APOB AI はダンス動画制作を構造化された制作システムへと変えます。
長いプロンプトを書いて、モデルがきれいなルーティンを勝手に考えてくれることを期待する代わりに、クリエイターは動画が始まる前に、ダンサーを作り、見た目を整え、アイデンティティをコントロールし、動きをガイドできるようになりました。
なぜなら、AIインフルエンサーのダンス動画の未来は、運ではないからです。
それは、コントロールされた振付なのです。

## ランダムな動きから、再現可能な振付へ

1本の印象的なAIダンスクリップは注目を集められます。
再現可能な振付ワークフローは、オーディエンスを育てられます。
APOB AI では、そのプロセスがより意図的になります。
1. AI Influencer Generator を使ってAIインフルエンサーモデルを作成する。
1. APOB AI 内の GPT Image 2.0 を搭載した Chat to Generate を使い、ダンスの冒頭フレームを作成する。
1. Chat to Edit を使って、そのフレームを16パネルのダンス・ストーリーボードと動きのガイドに変える。
1. Seedance 2.0 を搭載した Image to Video Ultra S を使い、ストーリーボードからガイド付きのダンス動画を生成する。
1. フック、音声、トーキングアバターの導入、キャプション、またはリップシンクのレイヤーを追加する。
1. 動きを確認し、ストーリーボードを調整し、各プラットフォーム向けに再利用する。
単純な：
prompt -> dance clip
ではなく、ワークフローは次のようになります：
influencer model -> first frame -> 16-panel storyboard -> guided video prompt -> Seedance 2.0 video -> social content
この変化は重要です。AIダンス生成を、運任せの試みから実用的なクリエイティブシステムへと変えるからです。

## ステップ1：ダンサーとしてのAIインフルエンサーを作る

強いダンス動画は、認識できるパフォーマーから始まります。
単なるきれいなアバターではありません。
単なるランダムなバーチャルモデルでもありません。
良い衣装を着た、ありふれたダンサーでもありません。
ダンスコンテンツはアイデンティティに依存します。観客は、毎回同じ顔、ボディランゲージ、スタイリング、エネルギー、態度を認識できる必要があります。
APOB AI は AI Influencer Generator から始めることで、クリエイターがキャラクターを直接定義できるようにします。目的は、1回きりの画像ではなく、何本もの動画を支えられるオリジナルのAIインフルエンサーを作ることです。
 
ダンスのワークフローでは、インフルエンサーモデルに、動きに関わる重要な要素を含めるべきです。たとえば、体型、身長、髪型、衣装のスタイル、表情、姿勢、そしてそのキャラクターが持つべきパフォーマンスのエネルギーです。
このAIインフルエンサーモデルが、ダンスシリーズ全体のアイデンティティの土台になります。
新しいフレームは毎回ゼロから始まるのではなく、同じパフォーマーから始まります。
それが、AIダンサーを一度きりのクリップではなく、再利用可能なクリエイティブ資産にする方法です。

## ステップ2：強い最初のダンスフレームを作る

インフルエンサーモデルが準備できたら、次の一手は最初のフレームを作ることです。
ここで Chat to Generate の出番です。
APOB AI 内では、Chat to Generate が AIインフルエンサーワークフローの一部として GPT Image 2.0 を使用します。クリエイターにすべてをゼロから説明させるのではなく、インフルエンサーモデルを制御されたオープニングショットへと変換するのを助けます。
ダンス動画では、最初のフレームが重要です。キャラクター、衣装、体の位置、カメラアングル、ライティング、ロケーション、そしてパフォーマンスのムードを固定するからです。
最初のフレームが弱いと、動画モデルは推測しすぎることになります。
最初のフレームが明確なら、動画にはすでに視覚的な出発点があります。
Chat to Generate Prompt: First Dance Frame
 
 
単にきれいな画像を生成しているのではありません。動画の最初のビートを作っているのです。

## ステップ3：最初のフレームを16パネルのダンス・ストーリーボードに変える

多くのクリエイターは最初のフレームを生成したら、すぐに image-to-video に入れます。
それでも
```

#### 💡 使い方のコツ

Use a storyboard-first workflow (first frame → 16-panel storyboard) and then run Seedance 2.0 in image-to-video to keep the dancer’s face consistent and transitions smooth.

Generate a strong, identity-anchoring first frame (same face/outfit/camera/lighting) before Seedance 2.0 so the video has a stable visual starting point.

Create a 16-panel dance storyboard as a beat-by-beat movement guide before generating video to keep timing on-beat and motion coherent.

When prompting Seedance 2.0 from a storyboard, make the video prompt reinforce the storyboard (don’t introduce new outfits/locations/camera styles) to avoid continuity breaks.

Iterate by reviewing the generated motion, refining the storyboard, and regenerating to progressively improve rhythm, transitions, and identity consistency.

**作者:** [ZoAina](https://x.com/AiwithZoaina) | **ソース:** [Link](https://x.com/AiwithZoaina/status/2084223761696321850) | **公開日:** 2026年8月3日

`Music & Dance` `Dance` `Photoreal` `Realistic World` `Tutorial`

---

*... その他 2467 件のヒント。 [ギャラリーですべて表示](https://renoise.ai/ja/showcase/awesome-seedance-prompts?utm_source=github&utm_medium=readme&utm_campaign=seedance-prompts)*

---

## 🤝 コントリビュート

コントリビュートを歓迎します！プロンプトの提出方法は[コントリビュートガイド](CONTRIBUTING.md)をご覧ください。

## 📄 ライセンス

このコレクションは [CC BY 4.0](LICENSE) ライセンスの下で公開されています。帰属表示のもと、自由に共有・改変できます。

## 🙏 謝辞

コミュニティでプロンプトを共有してくださったすべてのクリエイターに感謝します。

## ⭐ Star 履歴

[![Star History Chart](https://api.star-history.com/svg?repos=renoise-ai/awesome-seedance-prompts&type=Date)](https://star-history.com/#renoise-ai/awesome-seedance-prompts&Date)

---

**🌐 [🎬 ウェブギャラリーで閲覧](https://renoise.ai/ja/showcase/awesome-seedance-prompts?utm_source=github&utm_medium=readme&utm_campaign=seedance-prompts)** • **🎬 [Seedance 2.0 モデル](https://renoise.ai/ja/features/seedance-2?utm_source=github&utm_medium=readme&utm_campaign=seedance-prompts)** • **📝 プロンプトを提出** • **⭐ Star する**

🤖 この README は自動生成されています。最終更新： 2026-08-05T06:29:16.716Z
