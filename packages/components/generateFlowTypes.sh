#!/bin/sh

for i in $(find dist/* -name "*.d.ts"); do
    [ -f "$i" ] || break
    NAME=${i%%.*}
    echo "Generating flowtype for $NAME"
    node_modules/.bin/flowgen $i -o $NAME.flow.js
done