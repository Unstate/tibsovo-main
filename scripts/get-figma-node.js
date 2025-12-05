const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env.local') });

const FIGMA_API_URL = 'https://api.figma.com/v1';
const FILE_KEY = 'pXSmINvA5ZQlGLAGJvIKcr';
const FIGMA_TOKEN = process.env.FIGMA_TOKEN || process.env.FIGMA_ACCESS_TOKEN;

async function getFigmaNode(nodeId) {
  if (!FIGMA_TOKEN) {
    console.error('❌ FIGMA_TOKEN не найден в .env.local');
    console.log('Добавьте в .env.local:');
    console.log('FIGMA_TOKEN=your_token_here');
    return;
  }

  const url = `${FIGMA_API_URL}/files/${FILE_KEY}/nodes?ids=${nodeId}`;
  
  try {
    const response = await fetch(url, {
      headers: {
        'X-Figma-Token': FIGMA_TOKEN
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    
    if (data.error) {
      throw new Error(data.err || 'Unknown error');
    }

    console.log('✅ Успешно получены данные');
    return data;
  } catch (error) {
    console.error('❌ Ошибка:', error.message);
    return null;
  }
}

// Использование
const nodeId = process.argv[2] || '976:72612';
console.log(`Получение данных для node: ${nodeId}\n`);

getFigmaNode(nodeId).then(data => {
  if (data) {
    const outputPath = path.join(__dirname, `../instructions/${nodeId.replace(':', '-')}/desc/classic.json`);
    const dir = path.dirname(outputPath);
    
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
    console.log(`\n✅ Данные сохранены в: ${outputPath}`);
  }
});

