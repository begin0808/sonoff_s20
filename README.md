# ⚡ Sonoff S20 WiFi 智慧插座互動教學指南

<p align="center">
  <img src="./favicon.svg" alt="Sonoff S20 SmartGuide Logo" width="96" height="96">
</p>

<p align="center">
  <strong>一站式互動教學網站，帶您從零開始玩轉 Sonoff S20 智慧插座！</strong>
</p>

<p align="center">
  <a href="https://begin0808.github.io/sonoff_s20/">🌐 線上 Demo</a> ·
  <a href="#功能特色">✨ 功能特色</a> ·
  <a href="#快速開始">🚀 快速開始</a>
</p>

---

## 📖 專案簡介

本專案是一個精心設計的 **Sonoff S20 WiFi 智慧插座互動教學網站**，以現代化深色風格 UI 呈現，適合初學者與進階開發者。無論您是想透過官方 eWeLink App 輕鬆配對，還是想拆機刷入 Tasmota / ESPHome 開源韌體接入 Home Assistant，這份互動指南都能手把手帶您完成。

## ✨ 功能特色

### 📋 硬體規格儀表板
- ESP8266 核心晶片、負載規格、記憶體大小、GPIO 引腳配置一覽

### 🧙 互動式設定精靈 (Setup Wizard)
- **初學者路線**：eWeLink App 官方配對教學（4 步驟）
- **開發者路線**：Tasmota 硬體刷機改造教學（5 步驟）
- 含進度條、步驟導航與圖文說明

### 🎮 智慧插座控制模擬器
- 虛擬 S20 插座開關按鈕，即時模擬繼電器切換
- 可切換連接家電（檯燈 / 桌扇 / 咖啡機），含動態視覺效果
- 模擬 MQTT 終端主控台，即時顯示通訊日誌

### 🤖 自動化邏輯編輯器
- 透過下拉選單組合「觸發條件 → 判斷條件 → 執行動作」
- 即時產生語意說明與 Home Assistant YAML 設定檔

### 🔧 故障排除與 FAQ
- LED 狀態燈號互動對譯（配對模式 / 已連線 / 搜尋中 / 離線）
- 常見問與答手風琴式摺疊面板

## 🛠️ 技術架構

| 類別 | 技術 |
|------|------|
| **前端核心** | HTML5 + Vanilla CSS + JavaScript (ES Module) |
| **字體** | Google Fonts — Inter, Outfit, Fira Code |
| **建置工具** | Vite 5 |
| **部署** | GitHub Pages（GitHub Actions 自動化 CI/CD） |
| **設計風格** | 深色模式 · Glassmorphism · 漸層動畫 · 微互動 |

## 🚀 快速開始

### 環境需求

- [Node.js](https://nodejs.org/) 18+ 
- npm 9+

### 安裝與執行

```bash
# 1. 克隆專案
git clone https://github.com/begin0808/sonoff_s20.git
cd sonoff_s20

# 2. 安裝依賴
npm install

# 3. 啟動開發伺服器
npm run dev
```

開發伺服器將在 `http://localhost:3000` 啟動並自動開啟瀏覽器。

### 建置生產版本

```bash
npm run build
```

產出的靜態檔案位於 `dist/` 目錄。

## 📁 專案結構

```
sonoff_s20/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Pages 自動部署工作流程
├── index.html                # 主頁面（HTML 結構與內容）
├── style.css                 # 全域樣式（設計系統 + 元件樣式）
├── app.js                    # 互動邏輯（精靈 / 模擬器 / 自動化 / FAQ）
├── favicon.svg               # 自訂 S20 智慧插座圖示
├── vite.config.js            # Vite 建置設定
├── package.json              # 專案描述與腳本
└── .gitignore                # Git 忽略規則
```

## 🌐 部署說明

本專案使用 **GitHub Actions** 自動部署至 **GitHub Pages**：

1. 推送程式碼至 `main` 分支
2. GitHub Actions 自動觸發建置流程（`npm ci` → `npm run build`）
3. 將 `dist/` 目錄部署至 GitHub Pages

線上預覽：**[https://begin0808.github.io/sonoff_s20/](https://begin0808.github.io/sonoff_s20/)**

## 📸 畫面預覽

| 首頁 Hero | 控制模擬器 | 自動化編輯器 |
|:---------:|:---------:|:-----------:|
| 漸層動畫 + S20 SVG 互動圖 | 虛擬開關 + MQTT 終端 | 觸發 / 條件 / 動作組合器 |

## 📄 授權

© 2026 Studio0808 智造實驗室. All rights reserved.

## 🔗 相關資源

- [Sonoff 官方網站](https://sonoff.tech/)
- [Tasmota 官方文件](https://tasmota.github.io/docs/)
- [Home Assistant 官網](https://www.home-assistant.io/)
- [Tasmota Web Installer](https://tasmota.github.io/install/)
- [eWeLink App](https://www.ewelink.cc/)
