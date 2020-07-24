class CreateSummaries < ActiveRecord::Migration[6.0]
  def change
    create_table :summaries do |t|
      t.integer :cases
      t.integer :recovered
      t.integer :deaths
      t.string :updated

      t.timestamps
    end
  end
end
