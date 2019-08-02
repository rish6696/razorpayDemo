

var data = db.projects.find({nameHash:'H1caHE22MBJe9pHV3hz'})

while (data.hasNext()) {
 printjson(data.next())
}