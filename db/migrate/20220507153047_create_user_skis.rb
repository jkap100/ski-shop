class CreateUserSkis < ActiveRecord::Migration[6.1]
  def change
    create_table :user_skis do |t|
      t.references :user, null: false, foreign_key: true
      t.references :ski, null: false, foreign_key: true
      t.integer :cart_count

      t.timestamps
    end
  end
end
