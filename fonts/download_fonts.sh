#!/bin/bash

# 毛泽东草书字体下载脚本
# 注意：此脚本仅为示例，实际字体文件需要从官方网站手动下载

echo "==================================="
echo "  毛泽东草书字体下载助手"
echo "==================================="
echo ""

# 检查fonts目录是否存在
if [ ! -d "fonts" ]; then
    mkdir fonts
    echo "✓ 已创建 fonts 目录"
fi

echo "请按照以下步骤手动下载字体："
echo ""
echo "1. 毛泽东书法字体："
echo "   - 访问：https://www.fonts.net.cn/font-31868163034.html"
echo "   - 下载：maozedong-1.ttf"
echo "   - 保存到：./fonts/maozedong-1.ttf"
echo ""
echo "2. 金梅毛草书："
echo "   - 访问：https://www.fonts.net.cn/font-31347142695.html"  
echo "   - 下载：JinMeiMaoCaoShu-1.ttf"
echo "   - 保存到：./fonts/JinMeiMaoCaoShu-1.ttf"
echo ""
echo "下载完成后，刷新网页即可看到真正的草书效果！"
echo ""

# 检查字体文件是否存在
echo "检查字体文件状态："
if [ -f "fonts/maozedong-1.ttf" ]; then
    echo "✓ 毛泽东书法字体已安装"
else
    echo "✗ 毛泽东书法字体未安装"
fi

if [ -f "fonts/JinMeiMaoCaoShu-1.ttf" ]; then
    echo "✓ 金梅毛草书已安装"
else
    echo "✗ 金梅毛草书未安装"
fi

echo ""
echo "==================================="
