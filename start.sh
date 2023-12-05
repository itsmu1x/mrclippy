#!/bin/bash

exp && cd clippy/server && screen -Smd "c-server" bun run index.ts
exp && cd clippy/client && screen -Smd "c-client" bun run dev