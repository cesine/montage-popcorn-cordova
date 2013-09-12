# [Popcorn](https://github.com/montagejs/popcorn) packaged as a Cordova Android app

This project should open and build in the Android SDK.

## Development

The popcorn source is stored in [assets/popcorn](assets/popcorn), which is then built using [Mop](https://github.com/montagejs/mop) and then copied to [assets/www](assets/www).

### Updating Popcorn

Popcorn as been added as a subtree, and so you will need `git subtree` to update it. Run the following commands:

```bash
$ git remote add popcorn git@github.com:montagejs/popcorn.git
$ git fetch popcorn
$ git subtree pull --squash -prefix=assets/popcorn popcorn/master
```
