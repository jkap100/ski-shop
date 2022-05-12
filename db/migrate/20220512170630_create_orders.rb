class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.string :sku
      t.string :name
      t.integer :price
      t.integer :cost
      t.string :size
      t.string :category
      t.string :sex
      t.string :image
      t.string :brand
      t.integer :count
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
