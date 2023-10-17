#! /usr/bin/env node

/**
 * NOTICE: zx用のファイルを生成した先は`chmod +x ./scripts/zx/hoge.mjs`で権限を付与してください
 */

import prompts from 'prompts';
import { $, fs } from 'zx';

// ファイル名の一覧
const filenames = fs.readdirSync('./scripts/zx');

const choices = filenames.map((filename) => {
  if (filename === '_index.mjs') {
    return { title: 'キャンセル', value: `` };
  }
  return { title: filename, value: `./scripts/zx/${filename}` };
});

const res = await prompts({
  type: 'select',
  name: 'file',
  message: 'Which script do you want to execute?',
  choices,
});

if (res.file) {
  // zxファイルを実行
  await $`${res.file}`;
}
