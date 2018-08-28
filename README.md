# Test repo for graphql + esm bug.

Issue tracked in graphql https://github.com/graphql/graphql-js/issues/1479

This uses graphql-yoga to demonstrate the bug.

Test cases:

```npm run jsRequire```   
open graphql playground in http://localhost:4000.  
Everything works fine, schema is visible.
Finally, close the server.

```npm run esmRequire```   
open graphql playground in http://localhost:4000.  
Everything works fine, schema is visible.
Finally, close the server.

```npm run esmImport```   
open graphql playground in http://localhost:4000.  
On page load, schema is not loaded and following console output is produced:
```
Error: Cannot use GraphQLSchema "[object Object]" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.
```
Finally, close the server.


`npm ls graphql` output:
```
graphql-esm-bug@1.0.0 /Users/eero/Documents/graphql-esm-bug
└─┬ graphql-yoga@1.16.1
  └── graphql@0.13.2 
```
