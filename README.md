[![Build Status](https://ci.sp-codes.de/api/badges/samuel-p/samuel-philipp.de/status.svg)](https://ci.sp-codes.de/samuel-p/samuel-philipp.de)

# samuel-philipp.de

Website for samuel-philipp.de

[GitHub](https://github.com/samuel-p/samuel-philipp.de)
[GitLab](https://gitlab.com/samuel-p/samuel-philipp.de)

## Additional Header Parameters

The following Parameters are set directly on the Web-Server.

```
Content-Security-Policy: default-src 'none'; img-src 'self'; script-src 'self'; style-src 'self'; font-src 'self'
Strict-Transport-Security: max-age=63072000; includeSubdomains; preload
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
```

There is also a `301` Redirect from http to https.