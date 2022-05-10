class CreateUserAccessories < ActiveRecord::Migration[6.1]
  def change
    create_table :user_accessories do |t|
      t.references :user, null: false, foreign_key: true
      t.references :accessory, null: false, foreign_key: true
      t.integer :cart_count

      t.timestamps
    end
  end
end
