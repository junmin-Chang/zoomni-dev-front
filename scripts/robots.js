const fs = require('fs')

const generatedSitemap = `
User-agent: *
Disallow: /private
`

fs.writeFileSync('../public/robots.txt', generatedSitemap, 'utf8')