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
