class CreateUserApparels < ActiveRecord::Migration[6.1]
  def change
    create_table :user_apparels do |t|
      t.references :user, null: false, foreign_key: true
      t.references :apparel, null: false, foreign_key: true
      t.integer :cart_count

      t.timestamps
    end
  end
end
