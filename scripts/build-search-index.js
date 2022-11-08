const lunr = require('lunr')
const fs = require('fs')
const path = require('path')
const glob = require('glob-all')
const matter = require('gray-matter')
const stripTags = require('striptags')
const { markdownToTxt } = require('markdown-to-txt')

const documents = []
const docs = {}
const regex = /(```.+?```)/g
const isProd = process.env.NODE_ENV === 'production'
const outputDir = isProd ? 'dist' : 'src'

function getExcerpt (str, limit) {
  const fullText = str
  let shortText = str
  shortText = shortText.substr(0, shortText.lastIndexOf(' ', limit)) + '...'
  const returnString = {
    fullText: fullText,
    shortText: shortText
  }
  return returnString
}

const files = glob.sync(['./src/**/*.md', '!./src/index.md', '!./src/search.md'])
files.forEach(f => {
  const contents = fs.readFileSync(f, { encoding: 'utf8' })
  const fn = path.basename(f)
  const dir = path.dirname(f).replace(/^\.\/src/, '')
  const mc = matter(contents)
  const body = markdownToTxt(stripTags(mc.content.replace(regex, '')))
  const doc = {
    id: fn,
    title: mc.data.title.replace('FicusJS documentation - ', ''),
    url: `${dir}/${fn.substring(0, fn.indexOf('.md'))}/`,
    excerpt: getExcerpt(body, 128).shortText,
    body
  }
  documents.push(doc)
})

const idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('url')
  this.field('excerpt')
  this.field('body')

  documents.forEach(function (doc) {
    this.add(doc)
    docs[doc.id] = doc
  }, this)
})

fs.writeFileSync(`./${outputDir}/assets/search-index.json`, JSON.stringify(idx))
fs.writeFileSync(`./${outputDir}/assets/search-docs.json`, JSON.stringify(docs))
