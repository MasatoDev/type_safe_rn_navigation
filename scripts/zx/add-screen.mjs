#!/usr/bin/env zx
import inquirer from 'inquirer';
import {writeFile} from 'fs/promises';
import {question} from 'zx';

// コンポーネントの名前を質問する
const screenName = await question('Enter the name of the screen (ex.MyPage): ');

const tabs = ['HomeTab', 'SearchTab', 'MyPageTab'];
const {tabName} = await inquirer.prompt([
  {
    type: 'list',
    name: 'tabName',
    message: 'Select the name of the Tab (ex.MyPageTab):',
    choices: tabs,
  },
]);

if (!screenName || !tabName) {
  console.error('screen name and tab name are required.');
  process.exit(1);
}

console.log('screenName', screenName);
console.log('tabName', tabName);

// コンポーネントのテンプレートを定義する
const componentTemplate = `
import React, {FC} from 'react';
import {Layout} from 'src/components/Layout.tsx';
import {useStackNavigation} from 'src/navigation/StackNavigation/useStackNavigation';
import {useStackRoute} from 'src/navigation/StackNavigation/useStackRoute';

export const ${screenName}: FC = () => {
  const navigation = useStackNavigation<'${tabName}'>();
  const route = useStackRoute<'${tabName}', '${screenName}'>();

  return (
    <Layout>

    </Layout>
  );
};

`;

// 指定された名前の新規ファイルを作成し、テンプレートを書き込む
await writeFile(`./src/screen/${tabName}/${screenName}.tsx`, componentTemplate);
console.log(`${screenName}.tsx has been created.`);

// 最後に手動で行うことを確認する
await inquirer.prompt([
  {
    type: 'confirm',
    name: 'check',
    message: `./src/navigation/StackNavigation/screens/${tabName}Screens へ追加したScreenと必要なParamsを追加してください`,
  },
]);
