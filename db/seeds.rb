# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Photo.create(owner_id: 1, url:"http://placekitten.com/500/300", title: "Medium Kitty")
Photo.create(owner_id: 1, url:"http://placekitten.com/600/400", title: "Kitty")
Photo.create(owner_id: 1, url:"http://placekitten.com/640/480", title: "Other Cat")
Photo.create(owner_id: 1, url:"http://placekitten.com/200/300", title: "Long Cat")