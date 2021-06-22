# bbacks app monorepo

This is monorepo version of origin bbacks-app application.

if angular use ng-universal for Nest.js, angular cannot use setInterval first load component.

so, i make this repository.

## Start

```
# web(angular) dev start
> yarn workspace @projects/web start

# server(nest.js) dev start
> yarn workspace @projects/api start:dev
```
