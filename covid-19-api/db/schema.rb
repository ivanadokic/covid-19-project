# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_07_27_234249) do

  create_table "countries", force: :cascade do |t|
    t.string "country"
    t.integer "cases"
    t.integer "recovered"
    t.integer "deaths"
    t.integer "population"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "flag"
    t.integer "active"
    t.integer "critical"
    t.integer "tests"
    t.integer "today_cases"
    t.integer "today_deaths"
  end

  create_table "summaries", force: :cascade do |t|
    t.integer "cases"
    t.integer "recovered"
    t.integer "deaths"
    t.string "updated"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
