const fs = require('fs');

function generateSvg() {
    const lines = [
        '<tspan x="20" dy="1.5em" fill="#e06c75">👾</tspan><tspan fill="#abb2bf"> Hello! Welcome to my GitHub profile.</tspan>',
        '<tspan x="20" dy="1.5em"></tspan>',
        
        '<tspan x="20" dy="1.5em"><tspan fill="#e5c07b">@MrPpant</tspan> <tspan fill="#56b6c2">-&gt;</tspan> <tspan fill="#61afef">C:\\Users\\MrPpant</tspan> <tspan fill="#98c379">git(main)</tspan> <tspan fill="#d19a66">2.3s</tspan> <tspan fill="#e06c75" font-weight="bold">pwd</tspan></tspan>',
        '<tspan x="20" dy="1.5em"></tspan>',
        '<tspan x="20" dy="1.5em" fill="#c678dd">👨‍💻</tspan><tspan fill="#abb2bf"> I am a passionate software developer who loves to create cool things.</tspan>',
        '<tspan x="20" dy="1.2em" fill="#98c379">🌱</tspan><tspan fill="#abb2bf"> Always learning new technologies and experimenting with automated workflows.</tspan>',
        '<tspan x="20" dy="1.2em" fill="#56b6c2">🚀</tspan><tspan fill="#abb2bf"> Exploring the endless possibilities of software engineering.</tspan>',
        '<tspan x="20" dy="1.5em"></tspan>',
        
        '<tspan x="20" dy="1.5em"><tspan fill="#e5c07b">@MrPpant</tspan> <tspan fill="#56b6c2">-&gt;</tspan> <tspan fill="#61afef">C:\\Users\\MrPpant</tspan> <tspan fill="#98c379">git(main)</tspan> <tspan fill="#d19a66">5.1s</tspan> <tspan fill="#e06c75" font-weight="bold">top</tspan></tspan>',
        '<tspan x="20" dy="1.5em"></tspan>',
        '<tspan x="20" dy="1.5em" fill="#abb2bf">top - 09:41:20 alive 10692 days</tspan>',
        '<tspan x="20" dy="1.5em"></tspan>',
        '<tspan x="20" dy="1.5em" fill="#abb2bf">   PID    USER    COMMAND</tspan>',
        '<tspan x="20" dy="1.2em" fill="#abb2bf">   000    root    automation      </tspan>',
        '<tspan x="20" dy="1.2em" fill="#abb2bf">   001    root    fullstack-dev   </tspan>',
        '<tspan x="20" dy="1.2em" fill="#abb2bf">   002    root    cloud-native    </tspan>',
        '<tspan x="20" dy="1.2em" fill="#abb2bf">   003    root    problem-solving </tspan>',
        '<tspan x="20" dy="1.2em" fill="#abb2bf">   004    root    continuous-learn</tspan>',
        '<tspan x="20" dy="1.5em"></tspan>',

        '<tspan x="20" dy="1.5em"><tspan fill="#e5c07b">@MrPpant</tspan> <tspan fill="#56b6c2">-&gt;</tspan> <tspan fill="#61afef">C:\\Users\\MrPpant</tspan> <tspan fill="#98c379">git(main)</tspan> <tspan fill="#d19a66">1.2s</tspan> <tspan fill="#e06c75" font-weight="bold">history</tspan></tspan>',
        '<tspan x="20" dy="1.5em"></tspan>',
        '<tspan x="20" dy="1.5em" fill="#abb2bf">1 JavaScript/TypeScript, Python, Bash</tspan>',
        '<tspan x="20" dy="1.2em" fill="#abb2bf">2 React, Node.js, Next.js, Django</tspan>',
        '<tspan x="20" dy="1.2em" fill="#abb2bf">3 Git, Docker, GitHub Actions, AWS</tspan>',
        '<tspan x="20" dy="1.2em" fill="#abb2bf">4 ...</tspan>',
        '<tspan x="20" dy="1.5em"></tspan>',

        '<tspan x="20" dy="1.5em"><tspan fill="#e5c07b">@MrPpant</tspan> <tspan fill="#56b6c2">-&gt;</tspan> <tspan fill="#61afef">C:\\Users\\MrPpant</tspan> <tspan fill="#98c379">git(main)</tspan> <tspan fill="#d19a66">0.0s</tspan> <tspan fill="#e06c75" font-weight="bold"><tspan class="cursor">_</tspan></tspan></tspan>',
    ];

    const svgStart = `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="650" viewBox="0 0 900 650">
  <defs>
    <style>
      .bg { fill: #0c0c0c; rx: 8px; }
      .header-bg { fill: #1e1e1e; }
      .tab-bg { fill: #0c0c0c; }
      .text { font-family: 'Consolas', 'Courier New', monospace; font-size: 14px; }
      .window-ctrl { fill: #aaaaaa; }
      .cursor { animation: blink 1s step-end infinite; }
      
      @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
      }
      
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      .st { opacity: 0; animation: fadeInUp 0.3s forwards; }
`;

    let svgStyles = "";
    lines.forEach((_, i) => {
        const delay = (i * 0.4).toFixed(1);
        svgStyles += `      .line-${i} { animation-delay: ${delay}s; }\n`;
    });

    const svgMid = `    </style>
  </defs>
  
  <!-- Window Background -->
  <rect class="bg" width="100%" height="100%" />
  
  <!-- Window Header (Windows Terminal Style) -->
  <path class="header-bg" d="M8,0 h884 a8,8 0 0,1 8,8 v32 h-900 v-32 a8,8 0 0,1 8,-8 z" />
  
  <!-- PowerShell Tab -->
  <path class="tab-bg" d="M10,8 h150 a8,8 0 0,1 8,8 v24 h-166 v-24 a8,8 0 0,1 8,-8 z" />
  <!-- Simple PS Icon -->
  <text x="20" y="27" font-family="'Segoe UI', sans-serif" font-size="14" fill="#257eb5" font-weight="bold">&gt;_</text>
  <text x="45" y="27" font-family="'Segoe UI', 'Helvetica Neue', sans-serif" font-size="12" fill="#cccccc">PowerShell</text>
  <text x="145" y="27" font-family="'Segoe UI', 'Helvetica Neue', sans-serif" font-size="12" fill="#aaaaaa">×</text>
  
  <!-- Tab '+' and down arrow -->
  <text x="180" y="27" font-family="'Segoe UI', 'Helvetica Neue', sans-serif" font-size="16" fill="#aaaaaa">+</text>
  
  <!-- Window Controls (Minimize, Maximize, Close) -->
  <path class="window-ctrl" d="M 800,20 h 10" stroke="#aaaaaa" stroke-width="1.5" />
  <rect class="window-ctrl" x="835" y="15" width="10" height="10" fill="none" stroke="#aaaaaa" stroke-width="1.5" />
  <path class="window-ctrl" d="M 875,15 l 10,10 M 885,15 l -10,10" stroke="#aaaaaa" stroke-width="1.5" />
  
  <!-- Terminal Text Area -->
  <text class="text" x="20" y="30">
`;

    let svgLines = "";
    lines.forEach((line, i) => {
        svgLines += `    <tspan x="20" dy="0" class="st line-${i}">${line}</tspan>\n`;
    });

    const svgEnd = `  </text>
</svg>
`;

    fs.writeFileSync('terminal.svg', svgStart + svgStyles + svgMid + svgLines + svgEnd, 'utf8');
}

generateSvg();
