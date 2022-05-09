# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_05_07_153210) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "accessories", force: :cascade do |t|
    t.integer "sku"
    t.string "name"
    t.integer "price"
    t.integer "cost"
    t.string "size"
    t.string "category"
    t.string "sex"
    t.string "description"
    t.string "image"
    t.string "brand"
    t.integer "count"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "apparels", force: :cascade do |t|
    t.integer "sku"
    t.string "name"
    t.integer "price"
    t.integer "cost"
    t.string "size"
    t.string "category"
    t.string "sex"
    t.string "description"
    t.string "image"
    t.string "brand"
    t.integer "count"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "skis", force: :cascade do |t|
    t.integer "sku"
    t.string "name"
    t.integer "price"
    t.integer "cost"
    t.string "size"
    t.string "category"
    t.string "sex"
    t.string "description"
    t.string "image"
    t.string "brand"
    t.integer "count"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "user_accessories", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "accessory_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["accessory_id"], name: "index_user_accessories_on_accessory_id"
    t.index ["user_id"], name: "index_user_accessories_on_user_id"
  end

  create_table "user_apparels", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "apparel_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["apparel_id"], name: "index_user_apparels_on_apparel_id"
    t.index ["user_id"], name: "index_user_apparels_on_user_id"
  end

  create_table "user_skis", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "ski_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["ski_id"], name: "index_user_skis_on_ski_id"
    t.index ["user_id"], name: "index_user_skis_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "email"
    t.boolean "admin"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "user_accessories", "accessories"
  add_foreign_key "user_accessories", "users"
  add_foreign_key "user_apparels", "apparels"
  add_foreign_key "user_apparels", "users"
  add_foreign_key "user_skis", "skis"
  add_foreign_key "user_skis", "users"
end
