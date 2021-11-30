# Prisma issue

Less than not working correctly

# How reproduce

- Install dependedcies

```
yarn install
```

- Set up `.env` file

```ini
DATABASE_URL=mysql://user:password@127.0.0.1:3306/prisma_issue
```

- run migration

```
yarn migrate
```

- Add several lines to table `Test`, for example: 1,2,3,4,5
  Screenshot:
  ![db.png](./db.png)

- Run script with argument 5

```
yarn start 5
```

Screenshot:
![result.png](./result.png)

**Result should be 4, but returns 1**
