class AddDeleteatToAccounts < ActiveRecord::Migration[6.1]
  def change
    add_column :accounts, :deleted_at, :datetime
  end
end
