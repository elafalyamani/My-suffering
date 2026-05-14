#!/usr/bin/env bash

# 1. تجهيز التاريخ واسم ملف التقرير
today=$(date +%Y-%m-%d)
report_dir="./notes"
report_file="$report_dir/report-$today.txt"

# التأكد من وجود مجلد notes
mkdir -p "$report_dir"

# 2. جمع المعلومات المطلوبة
current_user="$USER"
current_path="$(pwd)"

# عدد الملفات داخل ./data (ملفات فقط، بدون مجلدات)
data_dir="./data"
mkdir -p "$data_dir"
files_count=$(find "$data_dir" -maxdepth 1 -type f | wc -l)

# 3. كتابة التقرير
{
  echo "تقرير بتاريخ: $today"
  echo "اسم المستخدم الحالي: $current_user"
  echo "المسار الحالي: $current_path"
  echo "عدد الملفات داخل ./data: $files_count"
} > "$report_file"

# 4. طباعة رسالة نجاح
echo "تم إنشاء التقرير بنجاح في: $report_file"
