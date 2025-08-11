const express = require('express');
const cors = require('cors');
const path = require('path');
const { OpenAI } = require('openai'); // 引入OpenAI SDK
const app = express();

// 中间件
app.use(express.json());
app.use(cors());

// 提供静态文件服务
app.use(express.static(__dirname));

// 初始化OpenAI客户端（兼容通义千问）
const openai = new OpenAI({
  apiKey: process.env.QWEN_API_KEY || 'sk-966a1eb7880d4e48a8adf19464549d60',
  baseURL: 'https://dashscope.aliyuncs.com/compatible-mode/v1'
});


// 聊天接口
app.post('/api/chat', async (req, res) => {
  try {
    const question = req.body.question;
    if (!question) {
      return res.status(400).json({ error: '请输入问题' });
    }

    // 调用通义千问API
    const completion = await openai.chat.completions.create({
      model: 'qwen-turbo', // 免费模型，也可替换为qwen-plus等其他模型
      messages: [
        { role: 'system', content: '你是井冈山非物质文化遗产知识专家，专注于回答相关问题' },
        { role: 'user', content: question }
      ]
    });

    // 返回结果
    res.json({
      answer: completion.choices[0].message.content
    });
  } catch (error) {
  console.error('API调用错误:', error?.response?.status, error?.response?.data || error.message);
  res.status(500).json({
    error: '获取回答失败',
    details: error?.response?.data || error.message
  });
  }
});

// 测试接口
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 启动服务器
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`服务器运行在端口 ${PORT}`);
});
