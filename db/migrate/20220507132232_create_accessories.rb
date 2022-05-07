class CreateAccessories < ActiveRecord::Migration[6.1]
  def change
    create_table :accessories do |t|
      t.integer :sku
      t.string :name
      t.integer :price
      t.string :size
      t.string :category
      t.string :sex
      t.string :description
      t.string :image

      t.timestamps
    end
  end
end
