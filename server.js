const express = require('express');
const cors = require('cors');
const { OpenAI } = require('openai'); // 引入OpenAI SDK
const app = express();

// 中间件
app.use(express.json());
app.use(cors());

// 初始化OpenAI客户端（兼容通义千问）
const openai = new OpenAI({
  apiKey: 'sk-966a1eb7880d4e48a8adf19464549d60',
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
  res.send('通义千问API服务运行中');
});

// 适配云服务的端口配置
const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});
