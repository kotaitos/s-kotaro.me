const fs = require('fs');
const path = require('path');

// ツリー構造を定義
interface TreeNode {
  name: string;
  children?: TreeNode[];
}

const elementTreeStructure: TreeNode[] = [
    {
      name: 'index.tsx',
    },
    {
      name: 'elements',
      children: [],
    },
    {
      name: 'hooks',
      children: [],
    },
    {
      name: 'contexts',
      children: [],
    },
    {
      name: 'styles',
      children: [],
    },
  ];

const extractBottomDirectoryName = (directoryPath: string): string => {
  const directoryName = path.basename(directoryPath);
  return directoryName;
};

const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const writeFileIfNotExists = (filePath: string, content: string): void => {
  // ファイルがなければ作成
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
  }
};

const mkdirIfNotExists = (directoryPath: string): void => {
  // ディレクトリがなければ作成
  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, { recursive: true });
  }
};

// ツリーを生成する関数
const createElementTree = (directoryPath: string, structure: TreeNode[]): void => {
  // ディレクトリを作成
  fs.mkdirSync(directoryPath, { recursive: true });

  const bottomDirectoryName = extractBottomDirectoryName(directoryPath);

  for (const element of structure) {
    // ディレクトリを作成
    const elementPath = path.join(directoryPath, element.name);

    switch (element.name) {
      case 'index.tsx':
        // 存在しなければファイル作成
        writeFileIfNotExists(elementPath, '');
        break;
      case 'elements':
        // 存在しなければディレクトリ作成
        mkdirIfNotExists(elementPath);
        break;
      case 'hooks':
        // 存在しなければディレクトリ作成
        mkdirIfNotExists(elementPath);

        // ファイル作成
        writeFileIfNotExists(path.join(elementPath, 'use' + capitalizeFirstLetter(bottomDirectoryName) + '.tsx'), '');
        break;
      case 'contexts':
        // 存在しなければディレクトリ作成
        mkdirIfNotExists(elementPath);

        // 存在しなければファイル作成
        writeFileIfNotExists(path.join(elementPath, bottomDirectoryName + 'Context.tsx'), '');
        break;
      case 'styles':
        // 存在しなければディレクトリ作成
        mkdirIfNotExists(elementPath);

        // 存在しなければファイル作成
        writeFileIfNotExists(path.join(elementPath, bottomDirectoryName + '.tsx'), '');
        break;
      default:
        // 何もしない
        break;
    }
  }
}

const ROOT = './src/components';
const directoryPath = process.argv[2];

if (!directoryPath) {
  console.error('ディレクトリパスが指定されていません。');
  process.exit(1);
}

// ツリーを生成
createElementTree(path.join(ROOT, directoryPath), elementTreeStructure);
