class Todo < ActiveRecord::Base
  def self.left_count
    where(completed: false).count
  end
end
