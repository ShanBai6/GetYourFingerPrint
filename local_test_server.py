import web
import json
import os
from StringIO import StringIO

urls = ("/.*", "index")
app = web.application(urls, globals())

class index:
    def GET(self):
        with open("test.txt", "r") as f:
             return f.read()
        #return "Hi"
    
    def POST(self):
        data = web.data()
        dataio = StringIO(data)
        fingerprintDict = json.load(dataio)
        print(fingerprintDict)   
        print(type(fingerprintDict))
        print(fingerprintDict["fingerprint"]) 
        print(fingerprintDict["deviceType"])        
        # print(dict["value"])

        filename = "test.txt"
        if os.path.exists(filename):
            append_write = 'a' # append if already exists
        else:
            append_write = 'w' # make a new file if not

        print("writing to file...")
            
        f = open(filename,append_write)
        f.write("Device Type: \n")
        f.write(fingerprintDict["deviceType"])
        f.write("\n")
        f.write("Fingerprint: \n")
        f.write(fingerprintDict["fingerprint"])
        f.write("\n")
        f.close()

if __name__ == "__main__":
    app.run()