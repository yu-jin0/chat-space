# DB設計


## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|

### アソシエーション
- has_many :messages
- has_many :users_groups
- has_many :groups , :through :users_groups

## groups
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### アソシエーション
- has_many :messages
- has_many :users_groups
- has_many :users, :through :users_groups

## users_groups
|Column|Type|Options|
|------|----|-------|
|users_id|integer|null: false, foreign_key: true|
|groups_id|integer|null: false, foreign_key: true|

### アソシエーション
- belong_to :user
- belong_to :group

## comments
|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string|
|users_id|integer|null: false, foreign_key: true|
|groups_id|integer|null: false, foreign_key: true|

### アソシエーション
- belong_to :user
- belong_to :group