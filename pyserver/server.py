import pymongo
import pandas as pd
from pymongo import MongoClient
from pandas import DataFrame
from flask import Flask

app = Flask(__name__)

CONNECTION_STRING = "mongodb+srv://matte:1234@cluster0.ytlz0iy.mongodb.net/test"
client = pymongo.MongoClient(CONNECTION_STRING)
database = client["app-data"] 
mycollection = database["users"]
df = DataFrame(list(mycollection.find())) 

# listing = database.command('usersInfo')
# for doc in listing['users']:
#     print (doc['user'] +" "+ doc['roles'][0]['role'])

user = 0

user_scores = [0]*df.shape[0]

for i in range(df.shape[0]):
    if (user != i):
        score = 0
        sum = 0
        num = 0
        if (df.at[user, 'residence'].strip() == df.at[i, 'residence'].strip()):
            if (df.at[user, 'gender_identity'].strip() == df.at[i, 'gender_identity'].strip()):

                if (df.at[user, 'wakeup'] == df.at[i, 'wakeup']):
                    score += 0.9
                else:
                    score += abs(0.9 *
                                 ((int(df.at[user, 'wakeup']) - int(df.at[i, 'wakeup']))/5.0))

                if (df.at[user, 'sleep'] == df.at[i, 'sleep']):
                    score += 0.9
                else:
                    score += abs(0.9 *
                                 ((int(df.at[user, 'sleep']) - int(df.at[i, 'sleep']))/5.0))

                if (df.at[user, 'noise_level'] == df.at[i, 'noise_level']):
                    score += 0.8
                else:
                    score += abs(0.8*((int(df.at[user, 'noise_level']
                                           ) - int(df.at[i, 'noise_level']))/5.0))

                if (df.at[user, 'graduation_date'] == df.at[i, 'graduation_date']):
                    score += 0.6
                else:
                    score += abs(0.6*((int(df.at[user, 'graduation_date']
                                           ) - int(df.at[i, 'graduation_date']))/4.0))

                if (df.at[user, 'program'].strip() == df.at[i, 'program'].strip()):
                    score += 0.7
                else:
                    score += 0.35

                if (df.at[user, 'sports'] & df.at[i, 'sports']):
                    sum += 1
                if (df.at[user, 'sports']):
                    num += 1
                if (df.at[user, 'videogames'] == df.at[i, 'videogames']):
                    sum += 1
                if (df.at[user, 'videogames']):
                    num += 1
                if (df.at[user, 'reading'] == df.at[i, 'reading']):
                    sum += 1
                if (df.at[user, 'reading']):
                    num += 1
                if (df.at[user, 'boardgame'] == df.at[i, 'boardgame']):
                    sum += 1
                if (df.at[user, 'boardgame']):
                    num += 1
                if (df.at[user, 'music'] == df.at[i, 'music']):
                    sum += 1
                if (df.at[user, 'music']):
                    num += 1
                if (df.at[user, 'photography'] == df.at[i, 'photography']):
                    sum += 1
                if (df.at[user, 'photography']):
                    num += 1
                if (df.at[user, 'traveling'] == df.at[i, 'traveling']):
                    sum += 1
                if (df.at[user, 'traveling']):
                    num += 1
                if (df.at[user, 'cookingbaking'] == df.at[i, 'cookingbaking']):
                    sum += 1
                if (df.at[user, 'cookingbaking']):
                    num += 1
                if (df.at[user, 'paintingdrawing'] == df.at[i, 'paintingdrawing']):
                    sum += 1
                if (df.at[user, 'paintingdrawing']):
                    num += 1
                if (df.at[user, 'gardening'] == df.at[i, 'gardening']):
                    sum += 1
                if (df.at[user, 'gardening']):
                    num += 1
                if (df.at[user, 'hikingcamping'] == df.at[i, 'hikingcamping']):
                    sum += 1
                if (df.at[user, 'hikingcamping']):
                    num += 1
                if (df.at[user, 'dancing'] == df.at[i, 'dancing']):
                    sum += 1
                if (df.at[user, 'dancing']):
                    num += 1
                if (df.at[user, 'yoga'] == df.at[i, 'yoga']):
                    sum += 1
                if (df.at[user, 'yoga']):
                    num += 1
                if (df.at[user, 'fitness'] == df.at[i, 'fitness']):
                    sum += 1
                if (df.at[user, 'fitness']):
                    num += 1
                if (df.at[user, 'singing'] == df.at[i, 'singing']):
                    sum += 1
                if (df.at[user, 'singing']):
                    num += 1
                if (df.at[user, 'moviestv'] == df.at[i, 'moviestv']):
                    sum += 1
                if (df.at[user, 'moviestv']):
                    num += 1
                if (df.at[user, 'writing'] == df.at[i, 'writing']):
                    sum += 1
                if (df.at[user, 'writing']):
                    num += 1

                if (num > 0):
                    score += 0.7 * (sum/num)
        user_scores[i] = score  
        
indexDict = {df.at[x, 'user_id']: user_scores[x] for x in range(0, df.shape[0])}
indexDictSorted = sorted(indexDict.items(), key=lambda x: x[1], reverse=True)
validChoice = [x[0] for x in indexDictSorted if x[1]>0]

@app.route("/members")
def hello():
    return {"members": validChoice}

if __name__ == '__main__':
    app.run(host="localhost", port=4000, debug=True)
#PORT CAN BE CHANGED - python test.py