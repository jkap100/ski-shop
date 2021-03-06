class CreateSkis < ActiveRecord::Migration[6.1]
  def change
    create_table :skis do |t|
      t.integer :sku
      t.string :name
      t.integer :price
      t.integer :cost
      t.string :size
      t.string :category
      t.string :sex
      t.string :description
      t.string :image
      t.string :brand
      t.integer :count

      t.timestamps
    end
  end
end
