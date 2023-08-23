#!/usr/bin/env bash

options=$(getopt -l "esm,cjs,all,help" -o "ecah" -- "$@")
[[ "$1" ]] || options="--all --"
eval set -- "$options"

showhelp() {
  echo "Usage: npm run dev [-- [options]]"
  echo "Valid options include:"
  echo "-e,--esm:  Run ESM test"
  echo "-c,--cjs:  Run CommonJS module test"
  echo "-a,--all:  Run both tests"
  echo "-h,--help: Display this help and exit"
}

while true; do
  case "$1" in
  -h | --help)
    showhelp
    exit 0
    ;;
  -e | --esm)
    esm=true
    ;;
  -c | --cjs)
    cjs=true
    ;;
  -a | --all)
    esm=true
    cjs=true
    ;;
  *)
    break
    ;;
  esac
  shift
done

log() {
  wait
  echo Process "$!" exited with code "$?"
  echo
}

[[ "$esm" ]] && {
  echo "Testing on ESM..."
  node ./test.mjs &
  log
}

[[ "$cjs" ]] && {
  echo "Testing on CommonJS module..."
  node ./test.cjs &
  log
}
