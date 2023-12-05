#!/bin/bash

cd /home/mu1x/repositories/expertivia/clippy/server && screen -Smd "c-server" bun run index.ts
cd /home/mu1x/repositories/expertivia/clippy/client && screen -Smd "c-client" bun run dev