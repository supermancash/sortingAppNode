# Node Sorting API
##Getting Started:\
Clone the repository into your desired directory by running: `git clone link`

Next run `npm install` in the cloned directory

Finally, run `npm start` to start the server locally.
(The default port is set to 3000)

##Requests and Enpoints:
The default [GET endpoint][1] can be called **with** a parameter: /getpolicy?id=\<Desired ID>\
or **without** any parameters in which case the current list of 
**all** car policies will be returned

The default [POST endpoint][2] can only be called **with** a parameter: /setpolicy?id=\<Desired ID> \
the request then returns a list of all car policies including the newly added one

POST request Body should have the same format as the example below

```json
[
            {
                "code11": "name11"
            },
            {
                "code12": "name12"
            },
            {
                "code13": "name13"
            },
            {
                "code14": "name14"
            }
        ]
```
                                            

[1]:http://localhost:3000/getpolicy
[2]:http://localhost:3000/setpolicy


