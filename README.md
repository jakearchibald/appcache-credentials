```
npm install
npm run serve
```

Visit `localhost:3000`, the friendly site. Refresh, and it'll echo back an HTTP-only cookie.

Visit `localhost:3001`, the evil site. It will display the contents of `localhost:3000` via an XHR no-credentials request. Refresh and it will do the same from appcache. 