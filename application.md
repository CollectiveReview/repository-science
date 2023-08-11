# what is this document for?
This proposal of repository science consists of three documents.
- Problem（学術の現状の課題=前提）
- Construct (解決策を概念的に提示したもの)
- **Application（実装上の提案）** 👈

This document is to describe about Application proposal.

# 機能
レポジトリをもとにしたアカデミックメカニズムをアプリケーションに実装すると、大きくは
- letterを送り合うバックエンド
- 研究者の手元で編集するためのエディタ
の二つに分かれる。

# 要件
画面構成は以下のようになると考えられる。

[画面構成]

# 備考
今後追加していきたい機能の一覧。
- CI / CD パイプライン
- ユーザー登録後、自分の論文のLaTexやdocxと画像や図表を含むフォルダをアップロードすると、自動的に必要なファイルを抽出してレポジトリ化してくれる
- エディタ上での招待制共同同時編集
- loginしないと使えない機能
  - 月4件以上のレポジトリ閲覧
  - Dependency内の各ファイルの中身確認
  - BodyとDependencyリストの内容編集
  - 論文のclone
