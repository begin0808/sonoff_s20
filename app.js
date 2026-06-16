// Sonoff S20 Smart Guide Interactive Script

// ==========================================
// 1. Data Store for Setup Wizard
// ==========================================
const wizardPaths = {
    app: [
        {
            title: "步驟 1：插座通電",
            desc: "將您的 Sonoff S20 智慧插座接上家用插座。",
            instructions: [
                "確保牆上插座的開關處於開啟狀態。",
                "此時插座前方的綠色 LED 指示燈會開始單次閃爍或熄滅。",
                "點擊機身上的白色物理按鈕，確認能手動控制插座電源（藍色/紅色指示燈亮起，且聽到繼電器「喀」一聲）。"
            ],
            image: `
                <svg viewBox="0 0 200 120" width="100%" height="80">
                    <rect x="70" y="20" width="60" height="80" rx="15" fill="#1e293b" stroke="#475569" stroke-width="2"/>
                    <circle cx="100" cy="50" r="15" fill="#0f172a" stroke="#475569" stroke-width="2"/>
                    <rect x="97" y="40" width="6" height="10" rx="2" fill="#64748b"/>
                    <rect x="97" y="55" width="6" height="5" rx="1" fill="#64748b"/>
                    <circle cx="100" cy="85" r="10" fill="#334155" stroke="#475569"/>
                    <circle cx="100" cy="85" r="3" fill="#ff4181"/>
                </svg>
            `
        },
        {
            title: "步驟 2：進入配對模式",
            desc: "啟動插座的配對熱點以讓 App 進行通訊。",
            instructions: [
                "長按住機身上的白色按鈕約 7 秒鐘。",
                "注意觀察綠色 LED 指示燈的閃爍規律。",
                "當指示燈呈現「快閃兩下、常亮一下（.. - .. -）」的循環閃爍狀態時，代表已成功進入配對狀態。"
            ],
            image: `
                <svg viewBox="0 0 200 120" width="100%" height="80">
                    <!-- Finger pushing button -->
                    <rect x="70" y="20" width="60" height="80" rx="15" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
                    <circle cx="100" cy="85" r="10" fill="#3b82f6" opacity="0.3"/>
                    <circle cx="100" cy="85" r="7" fill="#3b82f6"/>
                    <!-- Wave rings -->
                    <circle cx="100" cy="85" r="16" stroke="#3b82f6" stroke-width="1.5" fill="none" opacity="0.8">
                        <animate attributeName="r" values="8;24" dur="1.2s" repeatCount="indefinite"/>
                        <animate attributeName="opacity" values="1;0" dur="1.2s" repeatCount="indefinite"/>
                    </circle>
                    <!-- LED flashing -->
                    <circle cx="100" cy="50" r="4" fill="#10b981">
                        <animate attributeName="opacity" values="1;0.2;1;0.2;0.2;1" dur="1.5s" repeatCount="indefinite"/>
                    </circle>
                </svg>
            `
        },
        {
            title: "步驟 3：使用 eWeLink App 配對",
            desc: "將智慧插座綁定至您的 eWeLink 雲端帳戶。",
            instructions: [
                "打開手機的 Wi-Fi 與藍牙（Wi-Fi 必須連線至 2.4GHz 的基地台）。",
                "打開「eWeLink (易微聯)」App，點擊下方的「+ 新增裝置」。",
                "選擇「快速添加 (Quick Pairing)」，輸入您當前連線的 Wi-Fi 熱點名稱與密碼，點擊下一步進行搜尋配對。"
            ],
            image: `
                <svg viewBox="0 0 200 120" width="100%" height="80">
                    <!-- Phone outline -->
                    <rect x="75" y="10" width="50" height="100" rx="10" fill="#1e293b" stroke="#475569" stroke-width="2"/>
                    <!-- App Add screen -->
                    <rect x="80" y="20" width="40" height="70" rx="2" fill="#0f172a"/>
                    <circle cx="100" cy="55" r="12" fill="#3b82f6"/>
                    <path d="M100 49 V61 M94 55 H106" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
                    <circle cx="100" cy="98" r="3" fill="#64748b"/>
                </svg>
            `
        },
        {
            title: "步驟 4：設定完成與遠端控制",
            desc: "裝置配對成功，您已經可以隨時隨地操控家電！",
            instructions: [
                "系統會搜尋到插座，請為它命名（例如：「臥室風扇」或「檯燈」）。",
                "點擊完成。現在點擊 App 內的綠色開關即可開關插座。",
                "您可以在 App 中設定「定時」、「延時」或「循環開關」，並能連動 Google Home 實現用語音「OK Google, 開啟風扇」。"
            ],
            image: `
                <svg viewBox="0 0 200 120" width="100%" height="80">
                    <rect x="50" y="30" width="100" height="60" rx="12" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
                    <!-- Done Badge -->
                    <circle cx="75" cy="60" r="16" fill="#10b981"/>
                    <path d="M70 60 L73 63 L80 56" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                    <text x="115" y="65" fill="#fff" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">配對成功</text>
                </svg>
            `
        }
    ],
    diy: [
        {
            title: "DIY 1：安全第一與硬體拆解",
            desc: "切記！請勿在連接交流電 (110V/220V) 時進行任何物理拆解！",
            instructions: [
                "**拔掉 S20 的插頭**，確保整機完全斷電。",
                "使用十字螺絲起子，拆下智慧插座背面的 4 顆固定螺絲。",
                "小心取下後殼，露出內部的綠色電路板 (PCB)。"
            ],
            image: `
                <svg viewBox="0 0 200 120" width="100%" height="80">
                    <rect x="70" y="20" width="60" height="80" rx="15" fill="#1e293b" stroke="#ef4444" stroke-width="2"/>
                    <!-- Screws -->
                    <circle cx="80" cy="30" r="3" fill="#64748b"/>
                    <circle cx="120" cy="30" r="3" fill="#64748b"/>
                    <circle cx="80" cy="90" r="3" fill="#64748b"/>
                    <circle cx="120" cy="90" r="3" fill="#64748b"/>
                    <!-- Warning Symbol -->
                    <path d="M100 42 L112 65 H88 Z" fill="#ef4444" opacity="0.3"/>
                    <text x="100" y="60" fill="#ef4444" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">!</text>
                </svg>
            `
        },
        {
            title: "DIY 2：焊接燒錄排針 (UART)",
            desc: "在 PCB 主板上焊接 TTL 通訊排針。",
            instructions: [
                "在電路板正面或背面尋找標示有 `3.3V`、`RX`、`TX`、`GND` 的排孔（通常在晶片下方）。",
                "將 4-pin 的公排針插入並妥善焊接固定。",
                "準備一組 USB 轉 TTL 燒錄器（如 FT232RL 或 CP2102），並將接線連接至排針：\n* TTL 3.3V 接 S20 3.3V\n* TTL GND 接 S20 GND\n* TTL TX 接 S20 RX (交叉接線)\n* TTL RX 接 S20 TX"
            ],
            image: `
                <svg viewBox="0 0 200 120" width="100%" height="80">
                    <!-- PCB -->
                    <rect x="50" y="30" width="100" height="60" rx="6" fill="#065f46" stroke="#34d399" stroke-width="2"/>
                    <!-- Header pins -->
                    <rect x="90" y="45" width="20" height="6" fill="#1e293b" stroke="#94a3b8"/>
                    <line x1="92" y1="51" x2="92" y2="70" stroke="#f59e0b" stroke-width="2"/>
                    <line x1="97" y1="51" x2="97" y2="70" stroke="#f59e0b" stroke-width="2"/>
                    <line x1="102" y1="51" x2="102" y2="70" stroke="#f59e0b" stroke-width="2"/>
                    <line x1="107" y1="51" x2="107" y2="70" stroke="#f59e0b" stroke-width="2"/>
                    <text x="100" y="40" fill="#34d399" font-family="monospace" font-size="8" text-anchor="middle">3V3 RX TX GND</text>
                </svg>
            `
        },
        {
            title: "DIY 3：引導進入燒錄模式 (Flash Mode)",
            desc: "讓內建的 ESP8266 進入 Bootloader 模式以寫入新韌體。",
            instructions: [
                "將 USB 轉 TTL 模組的排線接好，但先不要插上電腦的 USB 埠。",
                "**按住** S20 電路板上的黑色實體按鈕 (對應 GPIO 0)。",
                "在按住按鈕的狀態下，將 USB 轉 TTL 模組插入電腦 USB 連接埠。",
                "通電 2-3 秒後放開按鈕。此時 ESP8266 已處於燒錄模式。"
            ],
            image: `
                <svg viewBox="0 0 200 120" width="100%" height="80">
                    <!-- Button pressed -->
                    <rect x="80" y="25" width="40" height="70" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
                    <circle cx="100" cy="55" r="10" fill="#ef4444"/>
                    <!-- Hand/Arrow pressing -->
                    <path d="M100 90 V70 M95 75 L100 70 L105 75" stroke="#3b82f6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            `
        },
        {
            title: "DIY 4：使用瀏覽器一鍵燒錄 Tasmota",
            desc: "透過網頁直接寫入開源智慧家庭韌體。",
            instructions: [
                "使用 Chrome 或 Edge 瀏覽器，打開 **Tasmota Web Installer**：`https://tasmota.github.io/install/`。",
                "點擊網頁上的「Install Tasmota」按鈕，並選擇您連接 USB 燒錄器的 COM 連接埠。",
                "依網頁指示開始燒錄，等待 1-2 分鐘進度完成。燒錄完成後，拔掉 TTL 線並將 S20 重新裝回機殼內（完全組裝鎖上螺絲）。"
            ],
            code: `Tasmota 官方 S20 範本 (Template)：\n{"NAME":"Sonoff S20","GPIO":[17,0,0,0,0,0,0,0,21,56,0,0,0],"FLAG":0,"BASE":8}`
        },
        {
            title: "DIY 5：網路設定與 Home Assistant 整合",
            desc: "設定 WiFi 並將插座加入 Home Assistant 控制中心。",
            instructions: [
                "將組裝好的 S20 插上牆壁電源。使用手機搜尋 Wi-Fi，會發現一個名為 `tasmota-xxxxxx-xxxx` 的無密碼熱點，連線它。",
                "連線後會自動打開設定網頁，在裡面輸入您家中的 WiFi 名稱與密碼並儲存。S20 重啟後將連入您的家用網路。",
                "在瀏覽器輸入插座的新 IP 進入後台。進入 Configuration -> Configure Other，貼上 S20 Template 並啟用。",
                "進入 Configure MQTT 填入 Home Assistant 的 MQTT Broker 資訊。Home Assistant 將會透過 MQTT 自動偵測到您的 Sonoff S20，實現超低延遲的本地控制！"
            ],
            image: `
                <svg viewBox="0 0 200 120" width="100%" height="80">
                    <!-- Home Assistant Logo representation -->
                    <rect x="40" y="30" width="120" height="60" rx="10" fill="#03a9f4" opacity="0.1" stroke="#03a9f4" stroke-width="2"/>
                    <circle cx="100" cy="60" r="18" fill="none" stroke="#03a9f4" stroke-width="3"/>
                    <path d="M100 50 V70 M90 60 H110" stroke="#03a9f4" stroke-width="3" stroke-linecap="round"/>
                    <text x="100" y="105" fill="#03a9f4" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle">Home Assistant 整合</text>
                </svg>
            `
        }
    ]
};

// Wizard State variables
let currentPath = 'app';
let currentStepIdx = 0;

// ==========================================
// 2. Initializing elements and events
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Nav link click events for active state highlight
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Wizard Controls
    const prevBtn = document.getElementById('wizard-prev-btn');
    const nextBtn = document.getElementById('wizard-next-btn');
    
    prevBtn.addEventListener('click', wizardPrev);
    nextBtn.addEventListener('click', wizardNext);

    // Initial Wizard Setup
    renderWizard();

    // Quick Start Button Links to Setup Wizard
    document.getElementById('btn-quick-start').addEventListener('click', () => {
        document.getElementById('wizard').scrollIntoView({ behavior: 'smooth' });
    });

    // ==========================================
    // 3. Smart Home Simulator Logic
    // ==========================================
    const simPowerBtn = document.getElementById('sim-power-btn');
    const simPlugLed = document.getElementById('sim-plug-led');
    const applianceSelect = document.getElementById('appliance-select');
    const virtualAppliance = document.getElementById('virtual-appliance');
    const electricityFlow = document.getElementById('electricity-flow');
    const btnClearConsole = document.getElementById('btn-clear-console');
    const consoleLogs = document.getElementById('console-logs');

    // Simulator State
    const simState = {
        power: false,
        online: true,
        appliance: 'lamp',
        ledMode: 'online' // online (solid green), pairing (fast blink), searching (slow blink), offline
    };

    // Helper: format timestamp
    function getTimestamp() {
        const now = new Date();
        return now.toTimeString().split(' ')[0] + '.' + String(now.getMilliseconds()).padStart(3, '0');
    }

    // Add Console Log
    function addConsoleLog(message, type = 'info') {
        const logItem = document.createElement('div');
        logItem.className = `console-log-item ${type}`;
        logItem.innerHTML = `[${getTimestamp()}] ${message}`;
        consoleLogs.appendChild(logItem);
        consoleLogs.scrollTop = consoleLogs.scrollHeight;
    }

    // Initialize Console Logs
    addConsoleLog('ESP8266 Core initialized successfully.', 'info');
    addConsoleLog('WiFi connecting to AP [SmartHome-2.4G]...', 'info');
    setTimeout(() => {
        addConsoleLog('WiFi connected. IP address: 192.168.1.134, RSSI: -65dBm', 'info');
        addConsoleLog('MQTT Broker connected to [192.168.1.50:1883]', 'info');
        addConsoleLog('MQT: Subscribed to tele/sonoff_s20/cmnd/#', 'mqtt-sub');
        addConsoleLog('MQT: stat/sonoff_s20/RESULT = {"POWER":"OFF"}', 'mqtt-pub');
    }, 1200);

    // Update Simulator DOM based on state
    function updateSimulatorUI() {
        // Toggle Power Button State
        if (simState.power) {
            simPowerBtn.classList.add('active');
            electricityFlow.classList.add('active');
            virtualAppliance.classList.add('appliance-powered');
        } else {
            simPowerBtn.classList.remove('active');
            electricityFlow.classList.remove('active');
            virtualAppliance.classList.remove('appliance-powered');
        }

        // Toggle LED state class
        simPlugLed.className = 'virtual-led-indicator'; // reset
        if (simState.ledMode === 'pairing') {
            simPlugLed.classList.add('led-pairing');
        } else if (simState.ledMode === 'online') {
            simPlugLed.classList.add('led-online');
        } else if (simState.ledMode === 'searching') {
            simPlugLed.classList.add('led-searching');
        }

        // Handle Appliance Graphics
        document.querySelectorAll('.appliance-graphic').forEach(g => g.classList.remove('active'));
        
        const currentApplianceEl = document.getElementById(`appliance-${simState.appliance}`);
        if (currentApplianceEl) {
            currentApplianceEl.classList.add('active');
            
            // Appliance specific active classes
            if (simState.appliance === 'lamp') {
                const glow = document.getElementById('lamp-glow-el');
                const bulb = currentApplianceEl.querySelector('.bulb-glass');
                if (simState.power) {
                    glow.style.opacity = '1';
                    bulb.style.fill = '#fef08a';
                    bulb.style.opacity = '0.9';
                    bulb.style.filter = 'drop-shadow(0 0 10px #fef08a)';
                } else {
                    glow.style.opacity = '0';
                    bulb.style.fill = '#fef08a';
                    bulb.style.opacity = '0.3';
                    bulb.style.filter = 'none';
                }
            } else if (simState.appliance === 'fan') {
                if (simState.power) {
                    currentApplianceEl.classList.add('fan-active');
                } else {
                    currentApplianceEl.classList.remove('fan-active');
                }
            } else if (simState.appliance === 'coffee') {
                if (simState.power) {
                    currentApplianceEl.classList.add('coffee-active');
                } else {
                    currentApplianceEl.classList.remove('coffee-active');
                }
            }
        }
    }

    // Toggle Power State
    function togglePower() {
        simState.power = !simState.power;
        
        // Log changes
        const powerStr = simState.power ? "ON" : "OFF";
        addConsoleLog(`Physical button clicked. Relay changed to ${powerStr}`, 'info');
        addConsoleLog(`MQT: stat/sonoff_s20/RESULT = {"POWER":"${powerStr}"}`, 'mqtt-pub');
        addConsoleLog(`MQT: stat/sonoff_s20/POWER = ${powerStr}`, 'mqtt-pub');

        // Sync with Hero Graphic button ring if user toggles simulator
        const heroLedRing = document.getElementById('hero-led-ring');
        if (heroLedRing) {
            if (simState.power) {
                heroLedRing.style.stroke = '#3b82f6';
                heroLedRing.style.filter = 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.8))';
            } else {
                heroLedRing.style.stroke = '#ff4181';
                heroLedRing.style.filter = 'none';
            }
        }

        updateSimulatorUI();
    }

    simPowerBtn.addEventListener('click', togglePower);

    // Sync Appliance Selector
    applianceSelect.addEventListener('change', (e) => {
        const val = e.target.value;
        simState.appliance = val;
        
        let chineseAppliance = "檯燈";
        if (val === 'fan') chineseAppliance = "小桌扇";
        if (val === 'coffee') chineseAppliance = "咖啡機";

        addConsoleLog(`[INFO] 偵測到插座插入新負載: ${chineseAppliance}`, 'info');
        updateSimulatorUI();
    });

    // Clear Console
    btnClearConsole.addEventListener('click', () => {
        consoleLogs.innerHTML = '';
        addConsoleLog('Terminal console cleared.', 'info');
    });

    // LED Guide link clicking
    const ledItems = document.querySelectorAll('.led-guide-item');
    ledItems.forEach(item => {
        item.addEventListener('click', () => {
            ledItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            const ledType = item.getAttribute('data-led');
            simState.ledMode = ledType;
            
            let logMsg = "";
            if (ledType === 'pairing') {
                logMsg = "System entered WiFi Smart Config (Pairing Mode)...";
            } else if (ledType === 'online') {
                logMsg = "System connected to router and eWeLink cloud service.";
            } else if (ledType === 'searching') {
                logMsg = "Searching for WiFi AP [SmartHome-2.4G]...";
            } else if (ledType === 'offline') {
                logMsg = "Relay closed. Outlet power output disconnected.";
            }
            addConsoleLog(logMsg, 'info');
            
            updateSimulatorUI();
        });
    });

    // ==========================================
    // 4. Interactive Automation Rules Creator
    // ==========================================
    const ruleTrigger = document.getElementById('rule-trigger');
    const ruleCondition = document.getElementById('rule-condition');
    const ruleAction = document.getElementById('rule-action');
    const ruleTabs = document.querySelectorAll('.rule-tab');
    const ruleNarrativeBox = document.getElementById('rule-narrative-box');
    const ruleYamlCode = document.getElementById('rule-yaml-code');
    const ruleNarrativeTab = document.querySelector('[data-type="narrative"]');
    const ruleYamlTab = document.querySelector('[data-type="yaml"]');

    // Mappings for Chinese translations
    const triggerMap = {
        'time-7': { text: '時間到早上 07:00 整', yaml: '  trigger:\n    - platform: time\n      at: "07:00:00"' },
        'sunset': { text: '日落時間（天黑時）', yaml: '  trigger:\n    - platform: sun\n      event: sunset' },
        'pir-motion': { text: '人體感測器偵測到有人動靜', yaml: '  trigger:\n    - platform: state\n      entity_id: binary_sensor.pir_motion_sensor\n      to: "on"' },
        'phone-charge': { text: '手機充電電量達到 100%', yaml: '  trigger:\n    - platform: numeric_state\n      entity_id: sensor.phone_battery_level\n      above: 99' }
    };

    const conditionMap = {
        'none': { text: '無特別條件', yaml: '' },
        'weekday': { text: '當天是工作日（週一至週五）', yaml: '  condition:\n    - condition: time\n      weekday:\n        - mon\n        - tue\n        - wed\n        - thu\n        - fri' },
        'temp-high': { text: '環境溫度高於 28°C', yaml: '  condition:\n    - condition: numeric_state\n      entity_id: sensor.room_temperature\n      above: 28' },
        'is-dark': { text: '室內光線低於 15 Lux（昏暗）', yaml: '  condition:\n    - condition: numeric_state\n      entity_id: sensor.room_illuminance\n      below: 15' }
    };

    const actionMap = {
        'turn-on': { text: '開啟 S20 智慧插座電源', yaml: '  action:\n    - service: switch.turn_on\n      target:\n        entity_id: switch.sonoff_s20' },
        'turn-off': { text: '關閉 S20 智慧插座電源', yaml: '  action:\n    - service: switch.turn_off\n      target:\n        entity_id: switch.sonoff_s20' },
        'toggle': { text: '反轉（Toggle）S20 開關狀態', yaml: '  action:\n    - service: switch.toggle\n      target:\n        entity_id: switch.sonoff_s20' },
        'on-timer': { text: '開啟 S20 電源，並在 30 分鐘後自動關閉', yaml: '  action:\n    - service: switch.turn_on\n      target:\n        entity_id: switch.sonoff_s20\n    - delay: "00:30:00"\n    - service: switch.turn_off\n      target:\n        entity_id: switch.sonoff_s20' }
    };

    function updateAutomationRule() {
        const trigVal = ruleTrigger.value;
        const condVal = ruleCondition.value;
        const actVal = ruleAction.value;

        // 1. Narrative Translation
        let condText = "";
        if (condVal !== 'none') {
            condText = `，如果在此情況下 <span class="rule-pill rule-pill-condition">${conditionMap[condVal].text}</span>`;
        }
        ruleNarrativeBox.innerHTML = `當 <span class="rule-pill">${triggerMap[trigVal].text}</span>${condText}，則 <span class="rule-pill rule-pill-action">${actionMap[actVal].text}</span>。`;

        // 2. YAML translation
        let yamlStr = `alias: Sonoff S20 智慧插座自動化規則\n`;
        yamlStr += `description: "由 Sonoff S20 SmartGuide 產生"\n`;
        yamlStr += `mode: single\n\n`;
        
        yamlStr += `${triggerMap[trigVal].yaml}\n\n`;
        
        if (condVal !== 'none') {
            yamlStr += `${conditionMap[condVal].yaml}\n\n`;
        }
        
        yamlStr += `${actionMap[actVal].yaml}`;
        
        ruleYamlCode.textContent = yamlStr;
    }

    ruleTrigger.addEventListener('change', updateAutomationRule);
    ruleCondition.addEventListener('change', updateAutomationRule);
    ruleAction.addEventListener('change', updateAutomationRule);

    // Tab switching for Automation
    ruleTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            ruleTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const tabType = tab.getAttribute('data-type');
            if (tabType === 'narrative') {
                ruleNarrativeBox.classList.add('active');
                document.getElementById('rule-yaml-box').classList.remove('active');
            } else {
                ruleNarrativeBox.classList.remove('active');
                document.getElementById('rule-yaml-box').classList.add('active');
            }
        });
    });

    updateAutomationRule();

    // ==========================================
    // 5. Accordion Menu FAQ
    // ==========================================
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const isActive = item.classList.contains('active');

            // Close all items
            document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));

            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Make the first accordion open by default
    document.querySelector('.accordion-item').classList.add('active');
});

// ==========================================
// 6. Wizard Rendering & Switching Logic
// ==========================================
window.switchWizardPath = function(pathName) {
    currentPath = pathName;
    currentStepIdx = 0;

    // Toggle tab active class
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    if (pathName === 'app') {
        document.getElementById('tab-btn-app').classList.add('active');
    } else {
        document.getElementById('tab-btn-diy').classList.add('active');
    }

    renderWizard();
};

function renderWizard() {
    const stepsData = wizardPaths[currentPath];
    const step = stepsData[currentStepIdx];
    const totalSteps = stepsData.length;

    // Render Progress dots
    const progressStepsContainer = document.getElementById('wizard-progress-steps');
    progressStepsContainer.innerHTML = '';
    
    for (let i = 0; i < totalSteps; i++) {
        const dot = document.createElement('div');
        dot.className = 'progress-dot';
        if (i < currentStepIdx) dot.classList.add('completed');
        if (i === currentStepIdx) dot.classList.add('active');
        
        dot.addEventListener('click', () => {
            currentStepIdx = i;
            renderWizard();
        });
        progressStepsContainer.appendChild(dot);
    }

    // Update progress fill percentage
    const progressFill = document.getElementById('wizard-progress-fill');
    const fillPercent = (currentStepIdx / (totalSteps - 1)) * 100;
    progressFill.style.width = `${fillPercent}%`;

    // Render step content
    const contentBox = document.getElementById('wizard-step-content-box');
    
    let instructionsHtml = '<ul class="wizard-instruction-list">';
    step.instructions.forEach(ins => {
        instructionsHtml += `<li>${ins.replace(/\n/g, '<br>')}</li>`;
    });
    instructionsHtml += '</ul>';

    let codeBlockHtml = '';
    if (step.code) {
        codeBlockHtml = `
            <pre class="code-block"><code>${step.code}</code></pre>
        `;
    }

    let mediaHtml = '';
    if (step.image) {
        mediaHtml = `<div class="wizard-image-placeholder">${step.image}</div>`;
    }

    contentBox.innerHTML = `
        <div class="wizard-step-title">
            <span class="badge" style="margin-bottom: 0;">步驟 ${currentStepIdx + 1} / ${totalSteps}</span>
            <h3>${step.title}</h3>
        </div>
        <p class="wizard-step-desc">${step.desc}</p>
        ${instructionsHtml}
        ${codeBlockHtml}
        ${mediaHtml}
    `;

    // Update button states
    const prevBtn = document.getElementById('wizard-prev-btn');
    const nextBtn = document.getElementById('wizard-next-btn');

    prevBtn.disabled = currentStepIdx === 0;
    
    if (currentStepIdx === totalSteps - 1) {
        nextBtn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            完成學習
        `;
    } else {
        nextBtn.innerHTML = `
            下一步
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        `;
    }
}

function wizardNext() {
    const stepsData = wizardPaths[currentPath];
    if (currentStepIdx < stepsData.length - 1) {
        currentStepIdx++;
        renderWizard();
    } else {
        // Finished
        alert('恭喜您完成本路徑的學習！快去控制模擬器與自動化小幫手試試身手吧！');
    }
}

function wizardPrev() {
    if (currentStepIdx > 0) {
        currentStepIdx--;
        renderWizard();
    }
}
