# Step

```
rails g devise:install
rails g devise User
```

```
rails g config:install
```

```
rails g model jwt_denylist jti:string:index exp:datetime
```

```
class JwtDenylist < ApplicationRecord
  include Devise::JWT::RevocationStrategies::Denylist

  self.table_name = 'jwt_denylist'
end
```

- Enable cors

```
jwt:
  secret: <%= Rails.application.secret_key_base %>
  expiration_time: 86400
```

```
Devise.setup do |config|
  config.mailer_sender = 'please-change-me-at-config-initializers-devise@example.com'
  require 'devise/orm/active_record'

  config.case_insensitive_keys = [:email]
  config.strip_whitespace_keys = [:email]
  config.skip_session_storage = [:http_auth, :params_auth]
  config.stretches = Rails.env.test? ? 1 : 12
  config.reconfirmable = true
  config.expire_all_remember_me_on_sign_out = true
  config.password_length = 6..128
  config.email_regexp = /\A[^@\s]+@[^@\s]+\z/
  config.reset_password_within = 6.hours
  config.sign_out_via = :delete
  config.navigational_formats = []

  config.jwt do |jwt|
    jwt.secret = Settings.jwt.secret
    jwt.expiration_time = Settings.jwt.expiration_time
    jwt.dispatch_requests = [
      ['POST', %r{^/api/v1/users/sign_in$}]
    ]
  end
end
```

```
npx create-react-app fe
```

```
// jsconfig.json

{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}
```

```
npm install antd
```

```
import 'antd/dist/antd.min.css';
```

- Install react router v6
- Install axios
