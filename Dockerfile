# ベースイメージの指定
FROM node:20-alpine3.17

# 作業ディレクトリの設定
WORKDIR /app

# 必要なファイルをコンテナにコピー
COPY package.json .
COPY yarn.lock .

# 依存パッケージのインストール
RUN yarn install --frozen-lockfile

# ソースコードをコンテナにコピー
COPY . .

# アプリケーションのビルド
RUN yarn build

# ポートのエクスポート
EXPOSE 3000

# アプリケーションの実行
CMD ["yarn", "start"]
