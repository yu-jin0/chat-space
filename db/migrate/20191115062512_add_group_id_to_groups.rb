class AddGroupIdToGroups < ActiveRecord::Migration[5.0]
  def change
    add_column :groups, :group_id, :integer
  end
end
