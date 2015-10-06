
# connect-is-bot
adds `isBot` to the request, when requested from a bot, search engine, spider or the like.

# install
```bash
npm install connect-is-bot --save
```
# usage
```js
var isBot = require('connect-is-bot');
app.use(isBot());
```


-> it adds the attribute `req.isBot` to every request that comes from a bot, search engine, spider or the like.
e.g. when a request contains the 'user-agent' header: 

"Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" , 

the property `req.isBot` is set to `true`. 


# credits
it uses the is-bot module from gjohnson.
