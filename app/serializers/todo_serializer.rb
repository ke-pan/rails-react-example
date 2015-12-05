class TodoSerializer < ActiveModel::Serializer
  attributes :id, :completed, :content
end
