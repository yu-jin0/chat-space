# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

##usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|

###アソシエーション
- has_to :messages
- has_to :users_groups
- has_to :groupd , :through :users_groups

##groups
|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false|
|member|string|null: false|

###アソシエーション
- has_to :messages
- has_to :users_groups
- has_to :users

##users_groups
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|groups_id|integer|null: false, foreign_key: true|

###アソシエーション
- belong_to :users
- belong_to :groups

##comments
|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string|null: false|
|user_id|integer|null: false, foreign_key: true|
|groups_id|integer|null: false, foreign_key: true|

###アソシエーション
- belong_to :users
- belong_to :groups