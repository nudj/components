# components

Reusable React components from the nudj platform

## Contributing

### Dependencies

1. Docker
1. Make

### Development

1. `make build` to build the test image
1. `make test` to run the tests one time
1. `make tdd` to run the tdd watcher

### Release

1. Increment `package.json` version
1. Push new version to `develop` branch, with the commit message `Set [x.x.x]`
1. Checkout to latest master
1. Merge in the develop branch with a commit message of `Release [x.x.x]`
1. Push to master
1. Codefresh will publish to npm

## Usage

Instructions on using each component can be found in their own directories.
