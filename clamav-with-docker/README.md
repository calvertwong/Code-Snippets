# Clamav antivirus and a basic node express API endpoint on Docker to scan files 

This folder has code that allows us to build a docker image with clamav antivirus installed in an Alpine Linux OS and an endpoint that allows applications to send a HTTP request to perform a file check with the clamav antivirus.

1. Build the docker image
```
docker build . -t filescanner
```

2. Run the docker container on port 3000 with the docker container name of containername
```
docker run -p 3000:3000 --name=containername filescanner:latest
```

3. On Postman, send a POST request to http://localhost:3000/file-upload, enable body of form-data and provide the key name as `single` and the value as a file.

```
Example:
curl --location 'http://localhost:3000/file-upload' \
--form 'single=@"/C:/Users/Username/Downloads/test.txt"' \
--form 'single=@"/C:/Users/Username/Downloads/test.txt"'
```

4. The output looks like this:
```
{
    "infectedFileNames": [
        "/filescanner/uploads/d042165955a7f704b0d5906359a506dd:"
    ],
    "numOfInfectedFiles": 1
}
```
