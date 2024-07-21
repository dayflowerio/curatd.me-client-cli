#!/usr/bin/env node

process.on('SIGINT', () => {
  console.log('Process interrupted. Exiting gracefully.')
  process.exit(0)
})
