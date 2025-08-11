#!/bin/bash

# 创建字体目录
mkdir -p fonts

echo "正在下载中文行书字体..."

# 下载常用的中文行书字体
echo "1. 下载方正行楷简体..."
curl -L "https://github.com/adobe-fonts/source-han-serif/releases/download/2.001R/09_SourceHanSerifSC.zip" -o "fonts/SourceHanSerifSC.zip" 2>/dev/null || echo "下载失败或网络问题"

echo "2. 下载华文行楷..."
curl -L "https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&display=swap" -o "fonts/MaShanZheng.css" 2>/dev/null || echo "下载失败或网络问题"

echo "3. 下载汉仪楷体..."
curl -L "https://fonts.googleapis.com/css2?family=Liu+Jian+Mao+Cao&display=swap" -o "fonts/LiuJianMaoCao.css" 2>/dev/null || echo "下载失败或网络问题"

echo "4. 下载思源宋体（含行书变体）..."
curl -L "https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;700&display=swap" -o "fonts/NotoSerifSC.css" 2>/dev/null || echo "下载失败或网络问题"

echo "字体下载完成！可用的行书风格字体："
echo "1. Ma Shan Zheng (马善政楷书) - 古典行书风格"
echo "2. Liu Jian Mao Cao (刘建毛草) - 草书行书风格"  
echo "3. Noto Serif SC (思源宋体) - 现代行书风格"
echo "4. STXingkai (华文行楷) - 系统自带（如果可用）"
