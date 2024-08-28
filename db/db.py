import pandas as pd
from pymongo import MongoClient



client = MongoClient()
client = MongoClient("localhost", 27017)

db = client['csdle']
collection = db["weapons"]

for el in collection.find():
    newCost = int(el['Cost'][1:])
    collection.update_one({'_id': el['_id']}, {'$set': {'Cost': newCost}})


